// Database access for the Cloudflare Workers runtime.
//
// STORAGE DECISION (D1, raw SQL — not the Prisma Client):
// ------------------------------------------------------
// Storage is load-bearing here: Lead rows (contact form + checklist
// dedupe) and the /ops loop (ops_state dashboard snapshot + ops_action
// phone commands, polled every 30 minutes by an external dispatcher).
// So the data lives in Cloudflare D1 (free tier), NOT in a
// store-nothing forwarder.
//
// The task's preferred path was the Prisma Client via
// @prisma/adapter-d1, but that path does not work in this stack, after
// three attempts (see ops/replies/muse-viloura-cf.md §6):
//   1. `prisma generate --no-engine` + adapter → the client refuses
//      ("run prisma generate without --no-engine").
//   2. The normal generated client resolves to its Node entry, which
//      loads the native query-engine binary — absent in a Worker.
//   3. The `wasm.js` entry (WASM engine) builds, but OpenNext's
//      esbuild bundling drops the engine .wasm chunk (it is a webpack
//      asset, not a module import) and the engine loads it via node
//      `fs`, which does not exist in a deployed Worker.
// The Prisma schema is still the DDL source of truth
// (prisma/migrations/0001_init/migration.sql); the runtime simply
// talks to the D1 binding with plain SQL. The queries here are tiny
// (one INSERT, one SELECT-dedupe, one upsert, one queue), so raw SQL
// loses nothing and has no engine, no WASM, and no bundler risk.
//
// The D1 binding is per-request (it lives on the Worker env, not in
// process.env). Outside a Workers runtime (plain `next build`
// prerender, `next start`) `getCloudflareContext()` throws — no page
// that renders at build time touches the database, and /ops is
// force-dynamic, so the plain build stays green.

import { getCloudflareContext } from "@opennextjs/cloudflare";

// DDL — identical to prisma/migrations/0001_init/migration.sql, with
// IF NOT EXISTS added. Run on first use per isolate so a fresh local or
// remote D1 database self-initialises without a manual migration step.
const DDL = [
  // Single-line statements: the D1 binding's exec() in the Workers
  // runtime mishandles multi-line SQL (it reports "incomplete input"
  // at the first newline). The same statements live, multi-line, in
  // prisma/migrations/0001_init/migration.sql.
  `CREATE TABLE IF NOT EXISTS "Lead" ("id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "name" TEXT NOT NULL, "email" TEXT NOT NULL, "business" TEXT, "message" TEXT, "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);`,
  `CREATE TABLE IF NOT EXISTS "ops_state" ("id" TEXT NOT NULL PRIMARY KEY, "data" JSONB NOT NULL, "updated_at" DATETIME NOT NULL);`,
  `CREATE TABLE IF NOT EXISTS "ops_action" ("id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "action" TEXT NOT NULL, "list" TEXT NOT NULL, "item_id" TEXT NOT NULL, "patch" JSONB, "processed" BOOLEAN NOT NULL DEFAULT false, "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);`,
  `CREATE INDEX IF NOT EXISTS "Lead_email_idx" ON "Lead"("email");`,
  `CREATE INDEX IF NOT EXISTS "ops_action_processed_created_at_idx" ON "ops_action"("processed", "created_at");`,
];

export interface LeadRow {
  id: number;
  name: string;
  email: string;
  business: string | null;
  message: string | null;
  createdAt: string;
}

export interface OpsStateRow {
  id: string;
  data: unknown;
  updatedAt: string;
}

export interface OpsActionRow {
  id: number;
  action: string;
  list: string;
  itemId: string;
  patch: unknown;
  processed: boolean;
  createdAt: string;
}

/** The D1 binding for this request. Throws a clear error if unset. */
export function getD1(): CloudflareEnv["DB"] {
  const db = getCloudflareContext().env.DB;
  if (!db) {
    throw new Error(
      "D1 binding DB is not configured (wrangler.jsonc d1_databases).",
    );
  }
  return db;
}

let tablesEnsured = false;

/** Create the tables if they do not exist yet (once per isolate). */
export async function ensureTables(): Promise<void> {
  if (tablesEnsured) return;
  const db = getD1();
  for (const stmt of DDL) {
    await db.exec(stmt);
  }
  tablesEnsured = true;
}

function nowIso(): string {
  return new Date().toISOString();
}

function parseJson(value: unknown): unknown {
  if (value === null || value === undefined) return null;
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
}

/* ---------------- Leads ---------------- */

export async function createLead(input: {
  name: string;
  email: string;
  business: string | null;
  message: string | null;
}): Promise<{ id: number }> {
  await ensureTables();
  const result = await getD1()
    .prepare(
      `INSERT INTO "Lead" ("name", "email", "business", "message", "createdAt")
       VALUES (?1, ?2, ?3, ?4, ?5)`,
    )
    .bind(input.name, input.email, input.business, input.message, nowIso())
    .run();
  const id = result.meta.last_row_id;
  if (typeof id !== "number") {
    throw new Error("Lead insert did not return an id");
  }
  return { id };
}

/** The checklist lead for an email, if one already exists. */
export async function findChecklistLead(
  email: string,
): Promise<{ id: number } | null> {
  await ensureTables();
  const row = await getD1()
    .prepare(
      `SELECT "id" FROM "Lead"
        WHERE "email" = ?1 AND "business" = 'lead-magnet' LIMIT 1`,
    )
    .bind(email)
    .first<{ id: number }>();
  return row ? { id: row.id } : null;
}

/* ---------------- Ops state ---------------- */

export async function getDashboardState(): Promise<OpsStateRow | null> {
  await ensureTables();
  const row = await getD1()
    .prepare(
      `SELECT "id", "data", "updated_at" FROM "ops_state" WHERE "id" = 'dashboard'`,
    )
    .first<{ id: string; data: string; updated_at: string }>();
  if (!row) return null;
  return { id: row.id, data: parseJson(row.data), updatedAt: row.updated_at };
}

export async function upsertDashboardState(state: unknown): Promise<void> {
  await ensureTables();
  await getD1()
    .prepare(
      `INSERT INTO "ops_state" ("id", "data", "updated_at")
       VALUES ('dashboard', ?1, ?2)
       ON CONFLICT("id") DO UPDATE
       SET "data" = excluded."data", "updated_at" = excluded."updated_at"`,
    )
    .bind(JSON.stringify(state), nowIso())
    .run();
}

/* ---------------- Ops actions ---------------- */

export async function createOpsAction(input: {
  action: string;
  list: string;
  itemId: string;
  patch?: Record<string, unknown>;
}): Promise<{ id: number }> {
  await ensureTables();
  const result = await getD1()
    .prepare(
      `INSERT INTO "ops_action" ("action", "list", "item_id", "patch", "processed", "created_at")
       VALUES (?1, ?2, ?3, ?4, 0, ?5)`,
    )
    .bind(
      input.action,
      input.list,
      input.itemId,
      input.patch === undefined ? null : JSON.stringify(input.patch),
      nowIso(),
    )
    .run();
  const id = result.meta.last_row_id;
  if (typeof id !== "number") {
    throw new Error("ops_action insert did not return an id");
  }
  return { id };
}

export async function ackOpsActions(ids: number[]): Promise<void> {
  if (ids.length === 0) return;
  await ensureTables();
  const placeholders = ids.map((_, i) => `?${i + 1}`).join(", ");
  await getD1()
    .prepare(
      `UPDATE "ops_action" SET "processed" = 1 WHERE "id" IN (${placeholders})`,
    )
    .bind(...ids)
    .run();
}

export async function listPendingOpsActions(
  limit = 100,
): Promise<OpsActionRow[]> {
  await ensureTables();
  const { results } = await getD1()
    .prepare(
      `SELECT "id", "action", "list", "item_id", "patch", "processed", "created_at"
         FROM "ops_action" WHERE "processed" = 0
        ORDER BY "created_at" ASC LIMIT ?1`,
    )
    .bind(limit)
    .all();
  return (results as Array<{
    id: number;
    action: string;
    list: string;
    item_id: string;
    patch: string | null;
    processed: number;
    created_at: string;
  }>).map((r) => ({
    id: r.id,
    action: r.action,
    list: r.list,
    itemId: r.item_id,
    patch: parseJson(r.patch),
    processed: r.processed === 1,
    createdAt: r.created_at,
  }));
}

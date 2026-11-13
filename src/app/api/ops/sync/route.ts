import { NextResponse } from "next/server";
import {
  ackOpsActions,
  listPendingOpsActions,
  upsertDashboardState,
} from "~/server/db";
import { env } from "~/env";

/**
 * Worker sync endpoint. Called by sas's cron workers (5 AM refresh +
 * task dispatcher), never by browsers directly.
 *
 * Auth: Authorization: Bearer <OPS_SYNC_SECRET> (checked here; the
 * middleware exempts this path from Basic Auth).
 *
 * POST body: { state?: <dashboard JSON>, ack_ids?: number[] }
 * - upserts the dashboard snapshot into ops_state
 * - marks ack_ids as processed
 * - returns unprocessed phone commands: { ok, actions: [{id, action, list, itemId, patch, createdAt}] }
 */
export async function POST(req: Request) {
  const secret = env.OPS_SYNC_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "sync not configured" },
      { status: 503 },
    );
  }
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (token.length !== secret.length || token !== secret) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as {
    state?: unknown;
    ack_ids?: unknown;
  } | null;
  if (!body) {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  // Tables are created on first use by the db helpers
  // (src/server/db.ts), so a sync call also repairs a missing table.
  if (body.state !== undefined) {
    await upsertDashboardState(body.state);
  }

  const ackIds = Array.isArray(body.ack_ids)
    ? body.ack_ids.filter((n): n is number => Number.isInteger(n))
    : [];
  if (ackIds.length > 0) {
    await ackOpsActions(ackIds);
  }

  const actions = await listPendingOpsActions(100);

  return NextResponse.json({
    ok: true,
    actions: actions.map((a) => ({
      id: a.id,
      action: a.action,
      list: a.list,
      itemId: a.itemId,
      patch: a.patch,
      createdAt: a.createdAt,
    })),
  });
}

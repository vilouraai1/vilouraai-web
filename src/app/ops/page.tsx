import { type Metadata } from "next";
import { db } from "~/server/db";
import { OpsTaskCard } from "./_components/OpsTaskCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ops",
  robots: { index: false, follow: false },
};

/* ---------- defensive normalization of the dashboard snapshot ---------- */

type LastRun = { at?: string; result?: string; detail?: string; by?: string };
type HistEntry = { date?: string; from?: string; to?: string };

export type DashItem = {
  id: string;
  list: "website" | "business";
  title: string;
  why?: string;
  status: string;
  order?: number;
  depends_on?: string[];
  execution?: string;
  effort?: string;
  acceptance?: string;
  last_run?: LastRun;
  history?: HistEntry[];
  not_before?: string;
};

type Dash = {
  items: DashItem[];
  metrics: { name?: string; label?: string; value?: string | number; target?: string | number }[];
  forecast?: { p10?: number; p50?: number; p90?: number; note?: string };
  brief?: string;
  updatedAt?: string;
};

function str(v: unknown): string | undefined {
  return typeof v === "string" && v.length > 0 ? v : undefined;
}

function normalize(raw: unknown): Dash {
  const d = (raw ?? {}) as Record<string, unknown>;
  const lists: unknown[] = [];
  // Raw dashboard shape: business_items + website_items arrays.
  // Compact shape: items / growth_items / tasks.
  for (const key of [
    "items",
    "growth_items",
    "tasks",
    "website_items",
    "business_items",
  ]) {
    if (Array.isArray(d[key])) lists.push(...(d[key] as unknown[]));
  }
  const seen = new Set<string>();
  const items: DashItem[] = [];
  for (const r of lists) {
    const o = r as Record<string, unknown>;
    const id = str(o.id ?? o.item_id) ?? "";
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const listRaw = str(o.list)?.toLowerCase();
    const list: "website" | "business" =
      listRaw === "business" || id.startsWith("b") ? "business" : "website";
    items.push({
      id,
      list,
      title: str(o.title ?? o.name) ?? id,
      why: str(o.why ?? o.description),
      status: str(o.status) ?? "Queued",
      order: typeof o.order === "number" ? o.order : undefined,
      depends_on: Array.isArray(o.depends_on)
        ? (o.depends_on as unknown[]).filter((x): x is string => typeof x === "string")
        : undefined,
      execution: str(o.execution),
      effort: str(o.effort),
      acceptance: str(o.acceptance ?? o.acceptance_criteria),
      last_run: (o.last_run ?? o.lastRun) as LastRun | undefined,
      history: Array.isArray(o.history) ? (o.history as HistEntry[]) : undefined,
      not_before: str(o.not_before),
    });
  }
  items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  const metricsRaw = Array.isArray(d.metrics) ? d.metrics : [];
  const metrics: Dash["metrics"] = (metricsRaw as Record<string, unknown>[]).map(
    (m) => ({
      name: str(m.name ?? m.label),
      value: (m.value ?? m.current ?? "") as string | number,
      target: (m.target ?? "") as string | number,
    }),
  );
  // Raw dashboard shape: metrics is a flat object {touches_mtd, ...}.
  if (metrics.length === 0 && d.metrics && typeof d.metrics === "object") {
    const mo = d.metrics as Record<string, unknown>;
    const labels: Record<string, [string, string | number | undefined]> = {
      touches_mtd: ["Touches MTD", 15],
      replies_mtd: ["Replies MTD", undefined],
      site_leads_week: ["Site leads / week", undefined],
      revenue_collected_mtd: ["Revenue collected", undefined],
      active_clients: ["Active clients", undefined],
      pipeline_value: ["Pipeline value", undefined],
    };
    for (const [key, [label, target]] of Object.entries(labels)) {
      if (mo[key] !== undefined) {
        metrics.push({ name: label, value: mo[key] as string | number, target: target ?? "" });
      }
    }
  }

  const f = d.forecast as Record<string, unknown> | undefined;
  // Raw shape: p10/p50/p90 are 12-element weekly cumulative arrays.
  const lastNum = (v: unknown): number | undefined =>
    Array.isArray(v) && typeof v[v.length - 1] === "number"
      ? (v[v.length - 1] as number)
      : typeof v === "number"
        ? v
        : undefined;
  const forecast = f
    ? {
        p10: lastNum(f.p10),
        p50: lastNum(f.p50),
        p90: lastNum(f.p90),
        note:
          str(f.note) ??
          (str(f.mode)
            ? `Forecast mode: ${String(f.mode)}${Array.isArray(f.assumptions) ? ` — ${(f.assumptions as unknown[]).slice(0, 2).join("; ")}` : ""}`
            : undefined),
      }
    : undefined;

  const logs = Array.isArray(d.daily_logs)
    ? d.daily_logs
    : Array.isArray(d.logs)
      ? d.logs
      : [];
  const lastLog = logs.length > 0 ? (logs[logs.length - 1] as Record<string, unknown>) : null;
  // Raw shape: log has {notes, done[], in_progress[], blocked[]}.
  let brief =
    str(lastLog?.text) ?? str(lastLog?.entry) ?? str(d.brief) ?? undefined;
  if (!brief && lastLog) {
    const parts: string[] = [];
    if (str(lastLog.notes)) parts.push(String(lastLog.notes));
    const joinList = (k: string, label: string) => {
      const arr = lastLog[k];
      if (Array.isArray(arr) && arr.length > 0)
        parts.push(`${label}: ${arr.join("; ")}`);
    };
    joinList("done", "Done");
    joinList("in_progress", "In progress");
    joinList("blocked", "Blocked");
    if (parts.length > 0) brief = parts.join("\n");
  }

  return { items, metrics, forecast, brief, updatedAt: str(d.updatedAt ?? d.updated_at) };
}

/* ---------- presentation helpers ---------- */

function StatusPill({ status }: { status: string }) {
  const s = status.toLowerCase();
  const cls =
    s === "done"
      ? "bg-pine-deep text-paper"
      : s === "in progress"
        ? "bg-pine text-paper"
        : s === "approved"
          ? "bg-ink text-paper"
          : s === "blocked"
            ? "bg-[#8f2f1f] text-paper"
            : "bg-parchment text-ink border border-ink/25";
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${cls}`}
    >
      {status}
    </span>
  );
}

function LastRunLine({ run }: { run?: LastRun }) {
  if (!run || (!run.result && !run.detail)) return null;
  const icon = run.result === "ok" ? "✓" : run.result === "failed" ? "✗" : "…";
  return (
    <p className="mt-1 text-[13px] text-ink/70">
      <span className="font-semibold">{icon}</span>
      {run.detail ? ` ${run.detail}` : ""}
      {run.at ? <span className="text-ink/50"> · {run.at}</span> : null}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[22px] leading-tight font-semibold text-ink">
      {children}
    </h2>
  );
}

/* ---------- page ---------- */

export default async function OpsPage() {
  const row = await db.opsState.findUnique({ where: { id: "dashboard" } });
  const dash = normalize(row?.data);
  const syncedAt = row?.updatedAt
    ? new Date(row.updatedAt).toLocaleString("en-US", { timeZone: "America/Chicago" })
    : null;

  const byStatus = (s: string) =>
    dash.items.filter((i) => i.status.toLowerCase() === s);

  const doneIds = new Set(byStatus("done").map((i) => i.id));
  const depsMet = (i: DashItem) =>
    !i.depends_on || i.depends_on.every((d) => doneIds.has(d));
  const depsUnmet = (i: DashItem) =>
    (i.depends_on ?? []).filter((d) => d !== "first-client" && !doneIds.has(d));

  const approved = byStatus("approved");
  const inProgress = byStatus("in progress");
  const blocked = [
    ...byStatus("blocked"),
    ...byStatus("queued").filter((i) => !depsMet(i)),
  ];
  const done = byStatus("done");

  const upNext: DashItem[] = [];
  for (const list of ["website", "business"] as const) {
    const first = dash.items.find(
      (i) => i.list === list && i.status.toLowerCase() === "queued" && depsMet(i),
    );
    if (first) upNext.push(first);
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full max-w-xl px-4 pt-6 pb-16">
        {/* header */}
        <header className="border-b-2 border-ink pb-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pine">
            VilouraAI · Mission control
          </p>
          <h1 className="font-display mt-1 text-[34px] leading-none font-semibold">
            Ops dashboard
          </h1>
          <p className="mt-2 text-[13px] text-ink/60">
            {syncedAt ? (
              <>
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-pine align-middle" />
                Synced {syncedAt} CT
              </>
            ) : (
              <>
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-[#8f2f1f] align-middle" />
                Waiting for first sync — check back after the next worker run.
              </>
            )}
          </p>
        </header>

        {/* morning brief */}
        {dash.brief && (
          <section className="mt-6 rounded-xl border border-ink/20 bg-parchment p-4">
            <SectionTitle>Morning brief</SectionTitle>
            <p className="mt-2 text-[15px] leading-relaxed whitespace-pre-line">
              {dash.brief}
            </p>
          </section>
        )}

        {/* today's queue */}
        <section className="mt-8">
          <SectionTitle>Today&apos;s queue</SectionTitle>
          <p className="mt-1 text-[13px] text-ink/60">
            Approved and lined up for sas — he picks these up within ~30 min,
            implements, tests, and marks them done.
          </p>
          <div className="mt-3 space-y-3">
            {approved.length === 0 && (
              <p className="rounded-xl border border-dashed border-ink/30 p-4 text-[14px] text-ink/60">
                Nothing approved yet. Review the up-next items below and tap
                approve.
              </p>
            )}
            {approved.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-ink/20 bg-parchment p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {typeof item.order === "number" && (
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-pine">
                        Step {item.order} · {item.list}
                      </p>
                    )}
                    <h3 className="font-display mt-0.5 text-[19px] leading-snug font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <StatusPill status={item.status} />
                </div>
                {item.why && (
                  <p className="mt-1.5 text-[14px] text-ink/75">{item.why}</p>
                )}
                {item.acceptance && (
                  <p className="mt-1.5 text-[13px] text-ink/70">
                    <span className="font-semibold">Done means:</span>{" "}
                    {item.acceptance}
                  </p>
                )}
                <LastRunLine run={item.last_run} />
              </article>
            ))}
          </div>
        </section>

        {/* up next — approve here */}
        <section className="mt-8">
          <SectionTitle>Up next — your call</SectionTitle>
          <p className="mt-1 text-[13px] text-ink/60">
            Edit anything you don&apos;t like, then approve. Approval is the
            green light for sas to build it.
          </p>
          <div className="mt-3 space-y-3">
            {upNext.length === 0 && (
              <p className="rounded-xl border border-dashed border-ink/30 p-4 text-[14px] text-ink/60">
                Nothing queued right now.
              </p>
            )}
            {upNext.map((item) => (
              <OpsTaskCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* in progress */}
        {inProgress.length > 0 && (
          <section className="mt-8">
            <SectionTitle>In progress</SectionTitle>
            <div className="mt-3 space-y-3">
              {inProgress.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-pine/40 bg-parchment p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-[18px] leading-snug font-semibold">
                      {item.title}
                    </h3>
                    <StatusPill status={item.status} />
                  </div>
                  <LastRunLine run={item.last_run} />
                </article>
              ))}
            </div>
          </section>
        )}

        {/* blocked */}
        {blocked.length > 0 && (
          <section className="mt-8">
            <SectionTitle>Blocked</SectionTitle>
            <div className="mt-3 space-y-3">
              {blocked.map((item) => {
                const unmet = depsUnmet(item);
                return (
                  <article
                    key={item.id}
                    className="rounded-xl border border-[#8f2f1f]/40 bg-parchment p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-[18px] leading-snug font-semibold">
                        {item.title}
                      </h3>
                      <StatusPill
                        status={
                          item.status.toLowerCase() === "blocked"
                            ? "Blocked"
                            : "Waiting"
                        }
                      />
                    </div>
                    {unmet.length > 0 && (
                      <p className="mt-1 text-[13px] text-ink/70">
                        Waiting on: {unmet.join(", ")}
                      </p>
                    )}
                    {item.depends_on?.includes("first-client") && (
                      <p className="mt-1 text-[13px] text-ink/70">
                        Waiting on: first paying client
                      </p>
                    )}
                    <LastRunLine run={item.last_run} />
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* north star */}
        {dash.metrics.length > 0 && (
          <section className="mt-8">
            <SectionTitle>North star</SectionTitle>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {dash.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-ink/20 bg-parchment p-3"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/60">
                    {m.name ?? `Metric ${idx + 1}`}
                  </p>
                  <p className="font-display mt-0.5 text-[22px] font-semibold">
                    {String(m.value ?? "—")}
                  </p>
                  {m.target !== "" && m.target !== undefined && (
                    <p className="text-[12px] text-ink/60">
                      Target: {String(m.target)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* forecast */}
        {dash.forecast && (
          <section className="mt-8">
            <SectionTitle>12-week outlook</SectionTitle>
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              {(
                [
                  ["P10", dash.forecast.p10],
                  ["P50", dash.forecast.p50],
                  ["P90", dash.forecast.p90],
                ] as const
              ).map(([label, v]) => (
                <div
                  key={label}
                  className="rounded-xl border border-ink/20 bg-parchment p-3 text-center"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/60">
                    {label}
                  </p>
                  <p className="font-display mt-0.5 text-[20px] font-semibold">
                    {v === undefined ? "—" : `$${v.toLocaleString()}`}
                  </p>
                </div>
              ))}
            </div>
            {dash.forecast.note && (
              <p className="mt-2 text-[12px] text-ink/55">{dash.forecast.note}</p>
            )}
          </section>
        )}

        {/* done */}
        {done.length > 0 && (
          <section className="mt-8">
            <SectionTitle>Done</SectionTitle>
            <ul className="mt-3 space-y-2">
              {done.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-2 rounded-xl border border-ink/15 bg-parchment/60 p-3"
                >
                  <span className="mt-0.5 text-pine">✓</span>
                  <div>
                    <p className="text-[14px] font-medium">{item.title}</p>
                    <LastRunLine run={item.last_run} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-10 border-t border-ink/20 pt-4 text-[12px] text-ink/50">
          Private to VilouraAI. Approvals and edits reach sas within ~30
          minutes.
        </footer>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import type { DashItem } from "../page";

type Phase = "idle" | "sending" | "sent" | "error";

export function OpsTaskCard({ item }: { item: DashItem }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [why, setWhy] = useState(item.why ?? "");
  const [acceptance, setAcceptance] = useState(item.acceptance ?? "");

  async function post(body: object) {
    setPhase("sending");
    try {
      const res = await fetch("/api/ops/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setPhase(res.ok ? "sent" : "error");
    } catch {
      setPhase("error");
    }
  }

  const approve = () =>
    post({ action: "approve_item", list: item.list, itemId: item.id });

  const saveEdit = () => {
    const patch: Record<string, string> = {};
    if (title.trim() && title !== item.title) patch.title = title.trim();
    if (why.trim() !== (item.why ?? "")) patch.why = why.trim();
    if (acceptance.trim() !== (item.acceptance ?? ""))
      patch.acceptance = acceptance.trim();
    setEditing(false);
    void post({ action: "edit_item", list: item.list, itemId: item.id, patch });
  };

  return (
    <article className="rounded-xl border-2 border-pine/50 bg-parchment p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          {typeof item.order === "number" && (
            <p className="text-[11px] font-semibold uppercase tracking-wide text-pine">
              Step {item.order} · {item.list}
              {item.effort ? ` · ${item.effort} effort` : ""}
              {item.execution ? ` · ${item.execution}` : ""}
            </p>
          )}
          <h3 className="font-display mt-0.5 text-[19px] leading-snug font-semibold">
            {item.title}
          </h3>
        </div>
        <span className="inline-block rounded-full border border-ink/25 bg-paper px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
          Queued
        </span>
      </div>

      {item.why && !editing && (
        <p className="mt-1.5 text-[14px] text-ink/75">{item.why}</p>
      )}
      {item.acceptance && !editing && (
        <p className="mt-1.5 text-[13px] text-ink/70">
          <span className="font-semibold">Done means:</span> {item.acceptance}
        </p>
      )}

      {editing ? (
        <div className="mt-3 space-y-2.5">
          <label className="block">
            <span className="text-[12px] font-semibold uppercase tracking-wide text-ink/60">
              Title
            </span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-lg border border-ink/30 bg-paper px-3 py-2.5 text-[15px]"
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-semibold uppercase tracking-wide text-ink/60">
              Why it matters
            </span>
            <textarea
              value={why}
              onChange={(e) => setWhy(e.target.value)}
              rows={2}
              className="mt-1 w-full rounded-lg border border-ink/30 bg-paper px-3 py-2.5 text-[15px]"
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-semibold uppercase tracking-wide text-ink/60">
              Done means (acceptance)
            </span>
            <textarea
              value={acceptance}
              onChange={(e) => setAcceptance(e.target.value)}
              rows={2}
              className="mt-1 w-full rounded-lg border border-ink/30 bg-paper px-3 py-2.5 text-[15px]"
            />
          </label>
          <div className="flex gap-2">
            <button
              onClick={saveEdit}
              className="min-h-[48px] flex-1 rounded-xl bg-ink px-4 text-[15px] font-semibold text-paper"
            >
              Save changes
            </button>
            <button
              onClick={() => setEditing(false)}
              className="min-h-[48px] rounded-xl border border-ink/30 px-4 text-[15px] font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : phase === "sent" ? (
        <p className="mt-3 rounded-xl bg-pine/10 p-3 text-[14px] font-medium text-pine-deep">
          ✓ Sent — sas picks this up within ~30 minutes.
        </p>
      ) : (
        <div className="mt-3 flex gap-2">
          <button
            onClick={approve}
            disabled={phase === "sending"}
            className="min-h-[52px] flex-1 rounded-xl bg-pine px-4 text-[16px] font-semibold text-paper disabled:opacity-60"
          >
            {phase === "sending" ? "Sending…" : "Approve"}
          </button>
          <button
            onClick={() => setEditing(true)}
            className="min-h-[52px] rounded-xl border border-ink/30 px-5 text-[15px] font-medium"
          >
            Edit
          </button>
        </div>
      )}
      {phase === "error" && (
        <p className="mt-2 text-[13px] font-medium text-[#8f2f1f]">
          Couldn&apos;t reach the server — check your connection and retry.
        </p>
      )}
    </article>
  );
}

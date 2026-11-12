import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const BodySchema = z.object({
  action: z.enum(["approve_item", "edit_item"]),
  list: z.enum(["website", "business"]),
  itemId: z.string().min(1).max(80),
  patch: z.record(z.string(), z.unknown()).optional(),
});

/**
 * Phone commands from the /ops dashboard (behind Basic Auth via middleware).
 * Queues an approve/edit for the dispatcher worker, which applies it to the
 * Growth Dashboard artifact and starts work within ~30 minutes.
 */
export async function POST(req: Request) {
  const raw = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid request" },
      { status: 400 },
    );
  }
  const { action, list, itemId, patch } = parsed.data;
  const row = await db.opsAction.create({
    data: {
      action,
      list,
      itemId,
      patch: patch === undefined ? undefined : (patch as object),
    },
  });
  return NextResponse.json({ ok: true, id: row.id });
}

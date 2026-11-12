import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const contactInput = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  business: z.string().trim().max(200).optional(),
  message: z.string().trim().max(2000).optional(),
});

const checklistInput = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email").max(200),
});

// Marker stored on the Lead row so checklist signups stay distinguishable
// from contact-form leads without a schema migration.
const CHECKLIST_SOURCE = "lead-magnet";

export const leadRouter = createTRPCRouter({
  submit: publicProcedure
    .input(contactInput)
    .mutation(async ({ ctx, input }) => {
      const lead = await ctx.db.lead.create({
        data: {
          name: input.name,
          email: input.email,
          business: input.business || null,
          message: input.message || null,
        },
      });
      return { id: lead.id };
    }),

  /**
   * Lead magnet: store the email once, then the client shows the PDF download.
   * Repeat requests for the same email return already: true and store nothing.
   */
  requestChecklist: publicProcedure
    .input(checklistInput)
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.lead.findFirst({
        where: { email: input.email, business: CHECKLIST_SOURCE },
        select: { id: true },
      });
      if (existing) return { already: true, id: existing.id };
      const lead = await ctx.db.lead.create({
        data: {
          name: "Checklist subscriber",
          email: input.email,
          business: CHECKLIST_SOURCE,
          message: "Requested: 12-week capacity checklist",
        },
      });
      return { already: false, id: lead.id };
    }),
});

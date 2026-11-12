# Viloura services — reply

Branch: `muse-viloura-services` (from main `789593c5`)
Repo: vilouraai1/vilouraai-web — https://github.com/vilouraai1/vilouraai-web
Local path: ~/workspace/vilouraai-site/vilouraai-web/
PR: https://github.com/vilouraai1/vilouraai-web/pull/1 (PR #1, non-draft, open, muse-viloura-services → main)

## Commits (GitHub SHAs)

- Part 1 — home rework + pricing page + sitemap + layout metadata: `a654c0f04e6d08d8a6a40f18702f1d29876bf548`
- Part 2 — service pages /website, /ai-receptionist, /bundle + receptionist demo section + extended contact form: `f83395d7c4195af596a082b59d9117aa153de0b5`
- Part 2 fix — demo page syntax error found by the build (missing `FAQS` array opening after the inserted receptionist constants): `0089e1f774cf60d0292e730b241ffe4b58440e20`
- Part 3 — niche pages: `3193c5043640198a1d4ef07970bbd4fa8a23ffaa`
- Part 4 — marketing assets: `30e15d98da5be64d7385d1da309fc142c99bc478`
- Reply file (this file): pushed as the final commit after the PR was opened; its SHA is in the delivery report to the parent agent.

## What was done

- Home page: new hero with the brief's headline and subhead, buttons "Book a 15-min call" (existing Calendly link, free tier already in use) and "Hear the AI receptionist" (/demo#receptionist), trust line "Local to Lewisville, TX · I reply within one business day", "Problems we fix" section (missed calls, no/broken website, no online booking, invisible in Google/AI), services + pricing sections for the three offers, service FAQs (cost, contract, how fast, AI can't answer, keeping your number, data privacy, founding offer), "Founding client" section, footer links to the service pages and to Prisqo (prisqo.vilouraai.com) as "Free AI-visibility check".
- New pages: /website, /ai-receptionist, /bundle, /pricing (3 cards, bundle marked Most popular), /dentists, /salons, /hvac-plumbing, /auto-repair, /new-business. Each has a unique title/meta description and Service/Offer JSON-LD. Niche pages share one template (`src/app/_components/NichePage.tsx`) with niche-specific pain points, a labeled sample call, and the same CTA.
- /demo: the existing forecast demo was NOT overwritten — its code, steps, and FAQs are untouched. A second, clearly labeled receptionist demo section (`#receptionist`) was added below it, with the sample call script and a written transcript demo.
- Contact: form extended to name, business, phone, email, "what you need" (Website Launch / AI Receptionist / Launch Bundle / Booking forecast / Something else), and an optional message, reusing the existing tRPC `lead.submit` route. Phone and need are stored labeled at the head of the Lead row's `message` field (no schema migration). Thank-you panel keeps the Calendly booking link.
- SEO: unique titles/meta per page, LocalBusiness added to the home schema alongside ProfessionalService, offer catalog updated with the new offers, sitemap updated with all 9 new routes (lastModified 2026-11-12). No existing routes broken.
- Marketing assets in `ops/marketing/viloura/`: offer-sheet.md, email-templates.md (4 emails, 84/87/87/97 words per section incl. headers — bodies under 100 words — each ending "Not interested? Reply stop and I won't email again."), call-script.md (60-second phone + walk-in), objections.md (top 8), gbp-post-drafts.md (5 posts).
- Prices exactly per brief: Website Launch $497 one-time (care plan $29/mo optional); AI Receptionist $149/mo, no setup fee, cancel anytime, first 14 days free; Launch Bundle $597 ($497 + $149 + $19 = $665 separately); founding (first 10 clients): bundle $497, receptionist $129/mo locked 12 months. Stated as "10 founding spots" — no countdown, no remaining-spots number anywhere. Booking forecast kept as a third service (free; Sprint $495).

## Build verification

Local build passes: `SKIP_ENV_VALIDATION=1 npm run build` (Next.js 15.5.27), "Compiled successfully", typecheck/lint passed, 27/27 static pages generated. Route list confirms all 9 new routes render: /website, /ai-receptionist, /bundle, /pricing, /dentists, /salons, /hvac-plumbing, /auto-repair, /new-business, plus the extended /demo. Existing routes (/compare, /checklist, /locations, /ops, APIs) intact. No new dependencies, no paid tools, no secrets/keys in any file. `.next` and `node_modules` were NOT pushed.

## What was NOT done and why

- **No sample of work / portfolio piece.** None exists in the repo or anywhere verified — no past client sites to show. So none is included; the home and bundle pages say so plainly in the Founding client section instead of faking one.
- **No recorded receptionist call.** No recording exists. /demo and /ai-receptionist use a written sample transcript, labeled "Demo" / "Sample, not a real call", with fictional 555 numbers and made-up names/times. A real recording can replace it later.
- **The contact form does NOT auto-send email to vilouraai1@gmail.com.** The repo has no mail-sending backend (no Resend/SendGrid/etc.), and adding one would need a mail provider account + API key — out of scope under "no paid tools, no secrets in files". What the form does: stores the lead via the existing tRPC/DB mechanism (same as before), and the thank-you panel plus the form footer offer a prefilled `mailto:vilouraai1@gmail.com` link and the Calendly booking link. If adi wants true auto-email, that needs a separate decision on a mail provider.
- **No Cal.com link.** The brief allowed "Cal.com free tier or mailto fallback". The site already uses Calendly (free tier, already wired in ContactForm) for 15-min calls, so that was reused — no new tool, no new account.
- **No fake testimonials, logos, stats, or reviews anywhere.** None were invented. The "Why now" McKinsey figures and the illustrative ~$16k math on the home page are pre-existing from Step 2, already labeled illustrative — untouched.
- **Known gap (pre-existing, from Step 2):** `public/og.png`, `public/favicon.ico`, `public/12-week-capacity-checklist.pdf`, `prisma/dev.db` are still NOT in the remote repo (binary files; the GitHub connector accepts UTF-8 text only). Untouched by this PR; adi/Kiwi can add them later from a git-authenticated machine. Pages reference `/og.png` and `/favicon.ico` as before — that was already true on main.
- **Not deployed.** No deploy step was taken, per the brief.

## Sync record

Appended to ~/workspace/vilouraai-site/vilouraai-web.muse-github-snapshot-sync.json: one entry per commit above (branch muse-viloura-services, with the exact pushed paths).

## Summary

Done: two done-for-you services (Website Launch $497, AI Receptionist $149/mo) plus the $597 Launch Bundle are live on the branch as 9 new pages, a reworked home page, an extended (not overwritten) /demo, an extended contact form, and 5 marketing assets — all in PR #1 (non-draft, muse-viloura-services → main), with a passing local build. Not done: no sample of work (none exists), no call recording (written sample transcript instead, labeled as a demo), and no auto-email from the contact form (no mail backend in the repo; mailto link + Calendly instead). The pre-existing binary-file gap (og.png, favicon.ico, checklist PDF, dev.db) remains.

DONE

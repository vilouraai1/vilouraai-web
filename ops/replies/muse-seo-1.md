# Reply: muse-seo-1 — SEO & UI/UX Redesign for VilouraAI & Prisqo

**Task:** `ops/tasks/muse-seo-1.md` (Kiwi, Nov 12, 2026)
**Status:** Audit done Nov 12, 2026. vilouraai-web PR DONE (branch muse-seo-1, local, not pushed — see §2). Prisqo PR still in progress (separate agent).
**Method:** Illyism SEO Skills + Claude SEO (no paid APIs, no invented numbers, no Search Console on either domain, no CWV measured). Live pages re-checked Nov 12, 2026 ~19:00 CT; source checked against main HEADs below.

## 0. Baseline audit (Nov 12, 2026)

### Target 1 — prisqo.vilouraai.com (homepage)
- **Baseline: ~80/100** (prior audit ~78/100; LP-2 redesign + PR #29 fixes landed since).
- Source: main HEAD `72ba19b` (PR #30 muse-lp-2 merged, live verified Nov 12).
- Title 40 chars "Prisqo: Does AI Recommend Your Business?" — good. Description 127 chars — good.
- Canonical `https://prisqo.vilouraai.com` (no trailing slash) — good. OG title/description/image + Twitter summary_large_image — all present.
- JSON-LD `@graph`: Organization + Product ($19 Offer) + FAQPage — parses, Product price 19 USD confirmed live.
- `/success` noindexed — good. robots.txt Allow + sitemap (205 URLs). llms.txt present.
- **Gap 1 — cross-links MISSING:** homepage has ZERO links to vilouraai.com. Brief §3 requires header/footer links back to vilouraai.com for web redesign + AI receptionist.
- **Gap 2 — long titles/descriptions (site-wide):** 154 of 208 pages have titles >60 chars (worst 83, guides + ai-visibility long-tail); 61 have descriptions >155 chars (worst 210, compare pages). 0 pages missing a description.
- **Gap 3 — `/apple-icon.png` referenced on all 208 pages but not in the repo** (local-only file, never pushed). Either deploy the file or point the reference at an asset that ships (`/icon.svg` exists in repo). The `/_next/static/...` CSS + font references (207/204 pages) are live build artifacts, not repo files — not real breakage.
- Internal page links: 23,887 checked, **0 broken page links**.
- LP-2 design: keep as-is (brief §0). Mobile sticky CTA, 44px targets, contrast 4.97:1 from the Nov 12 UI/UX pass.

### Target 2 — prisqo.vilouraai.com/free-seo-audit
- **Baseline: ~82/100.**
- Title 41 chars, description 136 chars, canonical correct, JSON-LD Organization + WebSite + FAQPage — all good.
- Form intact: `action="https://formsubmit.co/vilouraai1@gmail.com"`, fields business name / website / email, all required. First FormSubmit submission still needs activation via vilouraai1@gmail.com.
- **Gap 1:** only 1 vilouraai.com link (to /pricing). No link to the redesign/receptionist services.
- **Gap 2:** copy is thin on what the audit delivers and when; trust strip is minimal (only the 14-day refund line for the $19 report, which is live but still needs Jilsha's yes as policy).
- **Gap 3:** no GEO Q&A block answering buyer queries ("Why does ChatGPT recommend my competitor?").

### Target 3 — vilouraai.com (live + vilouraai-web source)
- **Baseline: 48/100 live (unchanged), 62/100 source (prior audit). Target >90/100.**
- Live site is still the old forecast-first site: title "VilouraAI: Know your next 12 weeks of bookings", hero "Get my free forecast", $495 Forecast Sprint, ~$1k/mo Partner, McKinsey industry stats. No Prisqo, no free SEO audit, no $497/$149/$597 pricing, no address, no phone/hours.
- Source: vilouraai-web main `789593c` (initial import). `src/app/layout.tsx` SITE_TITLE is the old forecast title. robots.ts + sitemap.ts exist (Next.js generated) but sitemap lastModified dates are Oct 12–15, 2026 (stale) and it lists only /, /compare, /checklist, /demo, /locations + 6 cities.
- **Bundle wording source (brief: "existing wording/contents only"):** `src/app/_components/offers.ts` on branch `muse-viloura-services` (PR #1, not merged). Exact contents: Website Launch $497 one-time (mobile-first 5-page site, booking button, GBP tune-up, basic local SEO, live in 7 days; optional care plan $29/mo); AI Receptionist $149/mo (no setup, cancel anytime, first 14 days free); Launch Bundle $597 = Website Launch + first month of AI Receptionist ($149 value) + Prisqo report ($19 value), one call to set up. Contact vilouraai1@gmail.com; booking https://calendly.com/vilouraai.
- **Conflict noted:** PR #1's founding offer (first 10 clients: bundle $497, receptionist $129/mo locked 12 months) is NOT in the brief's price list. The redesign uses the brief's standard prices ($497 / $149 / $597) and notes the founding offer in this reply only; it does not show a countdown or remaining-spots number (we do not track it live).
- **Conflict noted:** the brief's homepage sections do not include the booking forecast service, but offers.ts keeps it as a third service (free 12-week forecast, $495 Sprint) and main has /demo live. The redesign follows the brief's sections and keeps the forecast reachable from /demo; it does not delete the service.
- **Amendment (Kiwi, Nov 12, commit 0547608 on main):** KEEP the existing forecasting feature/section on vilouraai.com exactly as it works today — the redesigned homepage highlights three things: Prisqo, the free SEO audit/optimization offer, and the existing forecasting. Routes, logic and data stay intact; restyle only to match the new design. Applied in this PR: a dedicated `#forecast` section after Services (live site's headline, body, 4 offers.ts features, $495 Sprint, ForecastChart illustrative sample + label, CTAs to #contact and /demo). This supersedes the conflict note above.
- **Address:** the brief gives "VilouraAI, 357 E Corporate Dr, Lewisville, TX" for LocalBusiness schema. This address was not on the site before; used as instructed, flagged here because it comes from the brief, not a live listing check.
- Env vars: `.env.example` lists only DATABASE_URL (Prisma). Build needs it per `src/env.js` schema — documented in the vilouraai-web PR reply.

## 1. Prisqo PR (branch muse-seo-1 → main)
- Status: in progress. (Agent fills in: what changed, files, verification.)
- Must contain this reply file. Open as non-draft PR, then comment "ready".

## 2. vilouraai-web PR (branch muse-seo-1 → main)
- Status: DONE Nov 12, 2026 (local branch `muse-seo-1` from main `789593c`, NOT pushed, no PR opened — parent pushes). `npm run build` clean (see evidence below).
- Must contain this reply file. Open as non-draft PR, then comment "ready".

### What changed

**Homepage (`src/app/page.tsx`) — full rewrite, brief §2 sections in order:**
1. Hero — headline "A new website in 7 days. Every call answered." + subhead + the FREE Complimentary SEO Audit form embedded (FormSubmit, same contract as /free-seo-audit; `?sent=1` thank-you state) + secondary CTA "Check AI Visibility ($19)" → https://prisqo.vilouraai.com/free-check?ref=viloura.
2. Prisqo AI Visibility section (`#prisqo`) — "Does AI recommend your business?" in plain terms, $19 one-time, no subscription, link to the free check.
3. Core Services Grid (`#services`) — 5 cards, exact brief pricing: FREE Complimentary SEO Audit; Prisqo AI Visibility Report $19 one-time; Custom Website Redesign $497 one-time; AI Receptionist $149/mo (14-day trial); Launch Bundle $597. Website / receptionist / bundle features and wording are verbatim from `src/app/_components/offers.ts` (PR #1 branch, the single source of truth). No founding offer shown anywhere on the page.
4. Booking Forecast (`#forecast`) — ADDED after the agent's work, per Kiwi's Nov 12 amendment: the redesigned homepage highlights three things (Prisqo, free SEO audit, existing forecasting). Live site's own headline ("Your competitors are guessing their next 12 weeks. You won't have to."), body, 4 offers.ts forecast features, $495 Sprint, and the existing `ForecastChart` component (illustrative sample + label, untouched logic/data). CTAs: "Get my free forecast" → #contact (form has the "Booking forecast — free" picker) and "Try the forecast demo" → /demo (route, logic and data intact; restyled only).
5. How It Works (`#how-it-works`) — 3 steps per brief: Submit URL → AI & SEO Analysis → Actionable Report/Growth Plan.
6. FAQ (`#faq`) — 6 accordions: price, timelines, 14-day trial / no contract, audit deliverables, "what if the AI can't answer", keep your phone number. Price/timeline/contract answers reuse the offers.ts SERVICE_FAQS wording.
7. Contact / Lead Form (`#contact`) — the existing ContactForm (tRPC `lead.submit` path, unchanged backend); copy now generic, with a "what you need" picker. Phone (469) 496-5431 + hours daily 7:00 AM–7:00 PM shown, verified against the GBP record (see below).
- Kept: Founder section (Adharsh J. / Jim, Lewisville — real, unchanged). Booking forecast is a full section now (see Forecast below), not just the one-line note under Services — the note still points at /demo. The forecast service is NOT deleted.
- Nav: Services / AI visibility / How it works / FAQ + "Free SEO audit" CTA. Anchors: /, #services, #prisqo, #audit, #faq, #contact (+ #how-it-works, #top). Footer: same anchors + Locations / Compare / Checklist / Demo / Find us on Google + email + phone + hours.

**Metadata + schema (`src/app/layout.tsx`):** title 56 chars "VilouraAI: New website $497, AI receptionist, free audit"; description 148 chars; self-referencing canonical https://vilouraai.com/; full OG + Twitter cards (og:image /og.png, new 1200×630 file, see below); keywords per brief §4; JSON-LD Organization + LocalBusiness + WebSite + Service schema ($497 / $149 / $597). FAQPage JSON-LD lives in `src/app/page.tsx` next to the FAQs. Favicon is now `src/app/icon.svg` (simple pine "V") — the old layout pointed at `/favicon.ico`, which never existed in this repo.

**`/free-seo-audit` page (`src/app/free-seo-audit/page.tsx`) — NEW, from PR #1 branch, adapted:** same FormSubmit form (action `https://formsubmit.co/vilouraai1@gmail.com`, fields business / website / email, `_next` → `?sent=1`), same "Four checks. One page." content and FAQs, Service + FAQPage JSON-LD, title 44 chars / description 129 chars rendered, canonical https://vilouraai.com/free-seo-audit. Adaptation: PR #1's "usual next step" links pointed at /website, /ai-receptionist, /bundle, /pricing — none of those pages exist on main, so they now point at /#services (same link text and prices). First FormSubmit submission still needs activation via vilouraai1@gmail.com.

**Carried over verbatim from PR #1 branch (`muse-viloura-services`):**
- `src/app/_components/offers.ts` — single source of truth for prices/bundle contents (new file on this branch). Note: the file itself still contains the founding-offer text (bundle `carePlan` + a SERVICE_FAQS entry). The homepage does NOT render it; it is noted here only, per the brief.
- `src/app/_components/ContactForm.tsx` + `src/server/api/routers/lead.ts` — the services contact form (need picker incl. "Booking forecast — free", phone + message fields, generic copy, mailto vilouraai1@gmail.com, Calendly booking). The lead router stores phone/need at the head of the existing `message` field — no Prisma migration, no schema change.
- `public/llms.txt` — adapted, not verbatim: PR #1's version listed /website, /ai-receptionist, /bundle, /pricing, /dentists, /salons, /hvac-plumbing, /auto-repair, /new-business, none of which exist on this branch. This version lists only live pages (/, /free-seo-audit, /demo, /locations, /compare, /checklist + Prisqo) and drops the founding-offer line (brief's standard prices only).
- `src/app/robots.ts` — `Disallow: /api/` added (PR #1 fix).
- City schema (PR #1 fix): `src/app/locations/cities.ts` metaTitles trimmed of the trailing " | VilouraAI" (the layout template already appends " · VilouraAI", so the brand was doubled — e.g. Dallas now renders "Demand forecasting in Dallas · VilouraAI", 40 chars); `src/app/locations/[city]/page.tsx` ProfessionalService description updated to the services positioning, priceRange "Free - $1000" → "Free - $597", OG alt updated; `src/app/locations/page.tsx` title/description/Twitter/ItemList + ProfessionalService schema per PR #1 (OG title fixed to match the new title — PR #1 had left the old one).

**Deliberately NOT carried over from PR #1 (noted, not dropped silently):**
- /website, /ai-receptionist, /bundle, /pricing, /dentists, /salons, /hvac-plumbing, /auto-repair, /new-business pages + NichePage + ops/marketing docs — a full services site, out of this brief's scope (homepage + /free-seo-audit). The homepage services grid links to #contact instead. If those pages are wanted, they are a separate PR off this branch.
- The founding offer (first 10: bundle $497, receptionist $129/mo locked 12 months) — not in the brief's price list; used standard prices ($497 / $149 / $597) everywhere visible. No countdown, no remaining-spots number anywhere.
- PR #1's `/new-business` orphan-link fix is moot on this branch: the page does not exist here, and nothing links to it.

**Other files touched:**
- `src/app/_components/LocationChrome.tsx` — header CTA now "Get my free SEO audit" → /#audit; footer links updated to /#services, /#prisqo, /#how-it-works, /#faq (was /#pricing, which no longer exists); footer now shows vilouraai1@gmail.com + (469) 496-5431 + daily 7–7.
- `src/app/_components/StickyCta.tsx` — mobile sticky CTA now "Get my free SEO audit" → #audit (was "Get my free forecast" → #contact); hides when the audit form is on screen.
- `src/app/sitemap.ts` — all lastModified refreshed to 2026-11-12; added /free-seo-audit (0.9). 12 URLs total.
- `public/og.png` — NEW, 1200×630, generated locally with PIL/DejaVu (paper background, pine "V", wordmark + "New website in 7 days. Every call answered."). The old layout referenced /og.png but main had no `public/` directory at all — the OG image was a 404 until now. NOTE: this PNG is binary and CANNOT be pushed through the snapshot procedure (text-only) — it is NOT in this PR. /og.png stays a 404 until Kiwi adds a real OG image at deploy; the og:image tag points at it anyway, matching the layout's existing reference. The 200 above was local only.
- `src/app/icon.svg` — NEW favicon (see layout note above).

**Design / accessibility (ui-ux-pro-max, brief governs):** existing theme kept (paper #f7f3ea, ink #1c1813, pine #17603c, Fraunces display + Archivo sans) — no new fonts, no new frameworks, no new npm dependencies. Generous whitespace, one accent color, existing focus-visible outlines kept. All buttons/links are real `<a>`/`<button>` elements, keyboard navigable; inputs have labels + aria-labels; tap targets ≥44px (py-3.5/py-4 buttons, py-2.5 nav CTA); no layout-shift sources added (OG image has explicit 1200×630, no webfont swap beyond existing next/font). The skill generator's first pick was not used — the brief's minimal-premium direction governs, per the skill's own hard limit.

**Phone + hours verification:** (469) 496-5431 and daily 7:00 AM–7:00 PM are from the GBP record in `~/workspace/goals/vilouraai-revenue-engine/files/gbp-engine-kit.md` ("Hours: every day, 7:00 AM to 7:00 PM (confirmed by adi Oct 17, 2026)", phone listed). Included in footer, contact section, LocalBusiness schema, and llms.txt. Address "357 E Corporate Dr, Lewisville, TX" in the LocalBusiness schema is brief-supplied, NOT listing-verified — the GBP is a service-area listing with no storefront address shown (flagged in a code comment in layout.tsx too).

### Build + verification evidence (all Nov 12, 2026, local)
- `npm install` exit 0 (no new dependencies). `npm run build` passes clean twice (final tree, after the last edit): 20/20 pages, no type/lint errors. Routes: / (ƒ), /free-seo-audit (ƒ), /checklist, /compare, /demo, /locations, /locations/[city] ×6, /ops, /api/*, /robots.txt, /sitemap.xml, /icon.svg.
- Live-rendered with `next start` (local, port 3100): / → 200, /free-seo-audit → 200, /sitemap.xml → 200, /robots.txt → 200, /llms.txt → 200, /og.png → 200, /icon.svg → 200, /checklist /compare /demo /locations /locations/dallas /locations/lewisville → 200.
- Homepage rendered: title 56 chars, description 148 chars, canonical https://vilouraai.com. Section ids in DOM order: top, audit, prisqo, services, how-it-works, faq, contact. Both JSON-LD blocks parse: layout graph (Organization, LocalBusiness, WebSite, Service ×3) + FAQPage. /free-seo-audit rendered: title 44 chars ("Free SEO audit for your business · VilouraAI"), description 129 chars, canonical correct, JSON-LD parses (layout graph + Service + FAQPage). /locations rendered: title 48 chars, JSON-LD parses (layout graph + ItemList + ProfessionalService). /locations/dallas title 40 chars, brand no longer doubled.
- `?sent=1` thank-you state renders "Got it — thank you." on both / and /free-seo-audit.
- All hrefs on / and /free-seo-audit checked: every internal link is a live route or an in-page anchor that exists; external links are Calendly, Prisqo free-check (?ref=viloura), Google profile share link, mailto vilouraai1@gmail.com, tel:+14694965431. No broken internal links introduced.
- No "coming soon" / "not built" / "not set yet" text in src/ or public/. No secrets in any changed file (grep for sk-/api-key/password/secret hits only pre-existing env-var names in the ops sync route/middleware and the word "passwords" in city FAQ copy — no values). `prisma/dev.db` not created (Postgres provider; nothing committed).
- NOT end-to-end tested: the ContactForm tRPC submit (needs a live Postgres DATABASE_URL at runtime — no DB in this environment) and the FormSubmit audit forms (submitting would send a real email to vilouraai1@gmail.com; first submission still needs activation). Both are existing, unchanged submission paths.

### Env vars needed for build/deploy (per .env.example + src/env.js)
- `DATABASE_URL` — REQUIRED at build time (zod `z.string().url()` in src/env.js; build fails without it). NOTE: `.env.example` says `file:./db.sqlite`, but `prisma/schema.prisma` is `provider = "postgresql"` — the example is stale/wrong. Use a Postgres URL, e.g. `postgresql://user:pass@host:5432/db`. Verified: build passes with a dummy Postgres URL (no DB connection is made at build time).
- `OPS_USER`, `OPS_PASS`, `OPS_SYNC_SECRET` — OPTIONAL for build (middleware fails closed with 503 on /ops when unset). Needed only if the /ops phone dashboard + sync endpoint are used.
- `SKIP_ENV_VALIDATION=1` also skips env validation (per env.js comment), but a real DATABASE_URL is needed at runtime for the contact form anyway.
- No other env vars. Vercel deploy is not set up for this repo (per brief) — nothing deployed.

### Open questions / things I could not do
- Search Console / Bing Webmaster / analytics setup is manual (owner steps in §3 above) — not done here.
- The demo / compare / checklist / city pages still carry forecast-first copy and "Get my free forecast" CTAs (e.g. /demo FAQ, /locations hero). Out of this brief's scope; the forecast service stays live at /demo and is linked from the homepage. Rewriting those pages is a follow-up, not part of this PR.
- The live GBP record itself was not re-checked in the GBP dashboard — phone/hours come from the Oct 17 adi-confirmed kit file in the repo docs. Re-verify against live GBP before deploy if the listing has changed since Oct 17.
- The founding offer lives in offers.ts data (bundle carePlan + SERVICE_FAQS) but is not displayed. If adi wants it shown, it needs its own decision + a live remaining-spots source (we do not track it).
- OG image is a locally generated flat graphic (PIL), not a designed brand asset — replace with a real brand OG image if one exists.

## 3. Measurement setup (for Jilsha — manual steps)
- Google Search Console: Domain verification for vilouraai.com and prisqo.vilouraai.com (DNS TXT via Cloudflare), then submit each sitemap (vilouraai.com/sitemap.xml, prisqo.vilouraai.com/sitemap.xml).
- Bing Webmaster Tools: import from GSC or verify with a meta tag; submit sitemaps the same way.
- Cloudflare / GA Analytics: Cloudflare Web Analytics (snippet or proxy) or GA4 via the existing Cloudflare beacon token if set; no new tracking scripts were added by either PR.

## 4. Checklist (brief §8)
- [x] Audit of all 3 targets, baseline in this reply
- [ ] Prisqo PR: homepage SEO + /free-seo-audit + cross-links (open, non-draft, "ready" commented)
- [x] vilouraai-web PR: full redesign, `npm run build` clean (local branch muse-seo-1; parent opens the non-draft PR and comments "ready")
- [x] Titles <60 chars, descriptions <155 chars on the 3 target pages (vilouraai.com home 56/148, /free-seo-audit 44/129; site-wide long-tail trim: 154 titles / 61 descriptions — see Prisqo PR notes)
- [x] Canonicals, OG/Twitter, JSON-LD (Organization/LocalBusiness, Product $19, Service $497/$149/$597, FAQPage) — vilouraai-web done; Prisqo side per its PR
- [x] Sitemap/robots/llms.txt current on vilouraai-web (sitemap 12 URLs, fresh 2026-11-12; robots Allow / + Disallow /api/; llms.txt adapted to live pages); Prisqo side per its PR
- [x] Cross-domain links both ways — vilouraai.com → prisqo free-check (?ref=viloura) in hero, Prisqo section, services card; prisqo → vilouraai.com per its PR
- [x] Hard constraints kept (checkout form contract, /free-check name+city, testids, no engine/Stripe/keys, noindex only success/thank-you, no prisma/dev.db, nothing sent or posted) — vilouraai-web half: no engine/Stripe touched, no secrets, no dev.db, nothing sent/posted/deployed

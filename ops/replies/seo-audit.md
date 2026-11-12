# SEO fixes + Free SEO audit — progress note (vilouraai-web, PR #1 branch)

- **Date:** 2026-11-12
- **Branch:** `muse-viloura-services` (PR #1), head `36889bc`, working copy
  `~/workspace/vilouraai-web-pr1`. Local changes only — **nothing pushed,
  nothing deployed**.
- **Source audit:** `~/workspace/prisqo-repo/ops/seo/vilouraai-findings.md`
  (Nov 12, 2026). All cited files/lines were verified to exist in this clone
  before changing them — no mismatches found. Prices verified in
  `src/app/_components/offers.ts` ($497 Website Launch / $149/mo AI
  Receptionist / $597 Launch Bundle / free forecast, $495 Forecast Sprint).

## What changed

### P0 — titles (brand now appears exactly once, via the layout template)
- Stripped `| VilouraAI` from every page-level title field and from
  `nicheMetadata` (`src/app/_components/NichePage.tsx:26`); the layout
  template (`src/app/layout.tsx:25`, `"%s · VilouraAI"`) is now the single
  brand suffix. OG/Twitter titles keep their single `| VilouraAI` (the
  template does not apply to them).
- `/bundle` title shortened to "Launch Bundle $597 — website + AI
  receptionist". `/ai-receptionist` and `/pricing` titles shortened so the
  rendered title fits 60 chars.
- Verified: all 15 public rendered titles ≤60 chars (e.g. `/website` 58,
  `/bundle` 58, `/pricing` 59, niche pages 56–60, city pages 39–44), no
  title field renders the brand twice.

### P0 — descriptions ≤160 chars
- Rewrote: home (layout `SITE_DESCRIPTION`, 226 → 146), `/website` 198 →
  139, `/ai-receptionist` 199 → 150, `/bundle` 220 → 135, `/demo` 218 →
  137, `/checklist` 171 → 138, `/pricing` 170 → 121, `/locations` 194 →
  141, all 5 niche pages (209/207/220/186/183 → 144/143/139/151/136),
  Fort Worth city description 165 → 142. Keyword-first, unique wording.

### P1 — schema
- City pages (`src/app/locations/[city]/page.tsx`): `ProfessionalService`
  description rewritten to the current services offer set; `priceRange`
  `"Free - $1000"` → `"Free - $597"`.
- Home (`src/app/page.tsx`): added a `WebSite` node
  (`@id https://vilouraai.com/#website`), fixing the dangling `isPartOf`
  from city pages (and from `/pricing`).
- `/locations` (`src/app/locations/page.tsx`): added `ItemList` schema of
  the 6 cities + `ProfessionalService`, a Twitter card, and a
  services-first title/description.
- `/pricing`: added 3 `Offer` schema nodes (Website Launch $497, AI
  Receptionist $149, Launch Bundle $597).

### P1 — phone + hours (flag: from MEMORY.md GBP record, NOT freshly verified)
- Added telephone `(469) 496-5431` (`tel:+14694965431`) and opening hours
  daily 7:00 AM–7:00 PM to the home JSON-LD (`telephone`,
  `openingHoursSpecification`) and to both footers (`src/app/page.tsx`
  and `src/app/_components/LocationChrome.tsx`). **Verify against the live
  Google Business Profile before deploy** — this came from the GBP record
  in memory, not a fresh GBP check.

### P1 — internal linking
- Home `NAV_LINKS` gained `/website` and `/ai-receptionist`; the header nav
  now actually renders `NAV_LINKS` (it previously showed only the logo +
  call button — the links only appeared in the footer).
- `/new-business` orphan fixed: added to home `SECTORS`.
- Contextual cross-links: `/website` → `/ai-receptionist`,
  `/ai-receptionist` → `/website`, `/pricing` → `/bundle` (explicit
  sentence; tier cards already linked it).

### P2
- New `public/llms.txt` (services, prices, who it is for, key pages,
  contact).
- Removed the `keywords` meta array from `src/app/layout.tsx`.
- `src/app/robots.ts`: added `disallow: "/api/"`.
- Sitemap: added `/free-seo-audit` (priority 0.8, lastmod 2026-11-12);
  refreshed stale `lastmod` dates on `/compare`, `/checklist`,
  `/locations` to 2026-11-12.

### Free SEO audit offer (complimentary service)
- New page `src/app/free-seo-audit/page.tsx`: metadata (title 32 chars →
  rendered 44, description 129), canonical, OG/Twitter, FAQPage JSON-LD
  with 3 real questions, Service schema (price 0). Copy: free one-page
  audit, what it covers (titles, local SEO/GBP, speed/mobile, AI
  visibility), delivered by email within a few business days, no
  obligation, leads to Website Launch $497 / AI Receptionist $149/mo.
- Form: business name, website, email (all required), plain HTML form
  posting to `https://formsubmit.co/vilouraai1@gmail.com` with hidden
  `_subject` "Free SEO audit request — VilouraAI", `_template` "table",
  `_captcha` "false", `_next`
  "https://vilouraai.com/free-seo-audit?sent=1"; `sent=1` shows a
  thank-you state. Styled with the site's existing Tailwind classes
  (same as ContactForm).
- Linked from `/website`, `/ai-receptionist`, and `/pricing` (one
  contextual link each, in body copy), plus the `LocationFooter` and the
  sitemap. Note: the existing VilouraAI contact form does **not** use
  FormSubmit (it stores leads via tRPC + mailto fallback) — this
  FormSubmit form is new, and the first submission will need activation
  via an email sent to vilouraai1@gmail.com.

## Files changed (24)
- Modified (22): `src/app/layout.tsx`, `src/app/page.tsx`,
  `src/app/website/page.tsx`, `src/app/ai-receptionist/page.tsx`,
  `src/app/bundle/page.tsx`, `src/app/pricing/page.tsx`,
  `src/app/demo/page.tsx`, `src/app/checklist/page.tsx`,
  `src/app/compare/page.tsx`, `src/app/locations/page.tsx`,
  `src/app/locations/cities.ts`, `src/app/locations/[city]/page.tsx`,
  `src/app/dentists/page.tsx`, `src/app/salons/page.tsx`,
  `src/app/hvac-plumbing/page.tsx`, `src/app/auto-repair/page.tsx`,
  `src/app/new-business/page.tsx`, `src/app/ops/page.tsx`,
  `src/app/_components/NichePage.tsx`,
  `src/app/_components/LocationChrome.tsx`, `src/app/sitemap.ts`,
  `src/app/robots.ts`
- New (2): `src/app/free-seo-audit/page.tsx`, `public/llms.txt`
- This note: `ops/replies/seo-audit.md`

## Verification
- `npx tsc --noEmit` (full project, via a temporary symlink to the
  sibling copy's `node_modules`, removed afterwards — this clone has no
  `node_modules` of its own): **no errors in any changed file**. The only
  2 errors are pre-existing in files this task did not touch:
  `src/app/api/ops/sync/route.ts:88` (implicit `any`) and
  `src/server/db.ts:2` (generated Prisma client absent from this clone).
  The lead router's backend behaviour was not changed.
- Grep-verified: every rendered title ≤60 chars, every meta description
  ≤160 chars (incl. all 6 city descriptions), no double-brand title
  field, `/free-seo-audit` in the sitemap, `/free-seo-audit` linked from
  `/website`, `/ai-receptionist`, `/pricing`, `/new-business` linked from
  home SECTORS, phone/hours in home schema + both footers, `WebSite`
  node present, 3 Offer nodes on `/pricing`, ItemList + Twitter on
  `/locations`, `Disallow: /api/` in robots, FormSubmit action + hidden
  fields + `sent=1` thank-you on the new page.
- No paid APIs used. No numbers invented — every price/date/claim comes
  from a file read in this repo, except the phone/hours (MEMORY.md GBP
  record — flagged above).

## Skipped / not done
- **Search Console (audit P0-4):** needs adi — add property, verify,
  submit sitemap, request indexing after deploy.
- **Merging/deploying PR #1:** not done — deploy decision is adi's.
- **City-page copy rewrite beyond schema + CTA link:** left as-is; the
  city pages are still forecast-first in body copy (audit P1-5). A
  services-first copy pass is still owed.
- **BreadcrumbList schema (audit P2-14):** skipped per brief.
- **Niche FAQ sections (audit P1-11):** not added — out of the brief's
  scope for this pass.
- **Core Web Vitals / Lighthouse:** not measured (no browser task, no
  paid tools).

## Open questions
- Phone/hours: confirm `(469) 496-5431` + daily 7:00 AM–7:00 PM against
  the live GBP profile before deploy.
- FormSubmit: the first submission to `vilouraai1@gmail.com` needs the
  FormSubmit activation email confirmed before the form works live.
- `/locations` H1 ("Forecasting for the whole Metroplex.") still reads
  forecast-only; the metadata is now services-first, but a matching H1 /
  body rewrite belongs in the city-copy pass above.

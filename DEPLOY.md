# Deploying vilouraai.com to Cloudflare Workers

Moves the site off Vercel onto Cloudflare Workers (free plan) with the
official OpenNext Cloudflare adapter. Nothing here deploys or changes
DNS by itself — run the steps in order.

## Prerequisites

- A Cloudflare account with Workers enabled. Account ID:
  `959933abc5059170709e3ac1e7cd7829` (from the migration brief).
- Node.js 20+ and npm. `npx wrangler login` once, on the machine that
  deploys (this authorises wrangler against the account above).
- The three ops secrets below. They live only in wrangler / `.dev.vars`
  locally — **never commit real values**. Ask the ops owner for them if
  you do not have them.

## 1. Create the D1 database

```bash
npx wrangler d1 create vilouraai-web
```

Copy the `database_id` from the output into `wrangler.jsonc`
(replacing the `00000000-0000-0000-0000-000000000000` placeholder).
Local preview works with the placeholder; remote deploy does not.

## 2. Apply the schema

```bash
npx wrangler d1 execute vilouraai-web --remote \
  --file=prisma/migrations/0001_init/migration.sql
```

This creates `Lead`, `ops_state`, `ops_action` and the two indexes.
(The app also self-creates the same tables on first use via
`ensureTables` in `src/server/db.ts`, so this step is belt-and-braces
rather than strictly required — run it anyway so the schema is
explicit.)

## 3. Set the secrets

```bash
npx wrangler secret put OPS_USER
npx wrangler secret put OPS_PASS
npx wrangler secret put OPS_SYNC_SECRET
```

- `OPS_USER` / `OPS_PASS` — Basic Auth for the `/ops` dashboard.
  The middleware fails closed (503) when they are unset.
- `OPS_SYNC_SECRET` — Bearer token the external dispatcher uses for
  `POST /api/ops/sync`. The sync endpoint returns 503 when unset.

There is **no `DATABASE_URL` at runtime**: the database is the D1
binding `DB`. `DATABASE_URL` is only used by Prisma CLI workflows
(`migrate diff` / `db push` against a local file) and is optional at
build time.

## 4. Deploy

```bash
npm run deploy:cf
```

That is `opennextjs-cloudflare build && opennextjs-cloudflare deploy`.
The Worker name is `vilouraai-web`. The first deploy prints the
`*.workers.dev` URL — check the homepage there before touching DNS.

## 5. Attach the custom domains

In the Cloudflare dashboard: **Workers & Pages → vilouraai-web →
Settings → Domains → Add custom domain**, once for each:

- `vilouraai.com`
- `www.vilouraai.com`

Then in **DNS for vilouraai.com**, remove the records that point the
apex and `www` at Vercel (the A / CNAME records Vercel asked for).
The Worker custom-domain flow adds its own routing; do not leave the
Vercel records in place or traffic will keep going to Vercel.

## 6. Verify on the live domains

```bash
for p in / /pricing /free-seo-audit /checklist /demo /sitemap.xml; do
  curl -s -o /dev/null -w "%{http_code} https://vilouraai.com$p\n" "https://vilouraai.com$p"
done
```

- `/ops` with the Basic Auth credentials → 200 and the dashboard.
- Submit the contact form once and confirm a `Lead` row lands:
  `npx wrangler d1 execute vilouraai-web --remote --command='SELECT id, name, email FROM "Lead" ORDER BY id DESC LIMIT 3;'`
- Submit the free SEO audit form once and confirm the FormSubmit
  activation email flow works (the first FormSubmit submission needs
  activation via vilouraai1@gmail.com).

## 7. Known gap: the OG image

`public/og.png` is **not in the repo** (it is a binary; the GitHub
push path takes text only — the same gap PR #2 left). Until a real
1200×630 `og.png` is added, `https://vilouraai.com/og.png` 404s and
social shares have no image. Add the file via git (not via the
snapshot push) or upload it in the dashboard before announcing the
move.

## Rollback

Re-point `vilouraai.com` / `www` DNS back at Vercel. Nothing in this
change touches the Vercel project, so the old deployment keeps
serving as soon as DNS points back at it. The D1 database is separate
and is not deleted by a rollback.

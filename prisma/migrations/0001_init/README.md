# 0001_init — initial D1 schema

Generated with:

```bash
DATABASE_URL="file:./dev.db" npx prisma migrate diff \
  --from-empty --to-schema-datamodel prisma/schema.prisma --script
```

This file is the canonical DDL for the D1 database. Apply it with:

```bash
# local preview database
npx wrangler d1 execute vilouraai-web --local --file=prisma/migrations/0001_init/migration.sql
# remote (production) database — only when deploying for real
npx wrangler d1 execute vilouraai-web --remote --file=prisma/migrations/0001_init/migration.sql
```

The app also runs the same statements with `IF NOT EXISTS` on first
use (see src/server/db.ts `ensureTables`), so a fresh local or remote
D1 works even if this file was never applied by hand. Future schema
changes need a new migration here, generated the same way.

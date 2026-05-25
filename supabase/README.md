# Supabase schema (dev setup)

## Fastest: copy from prod → dev

### Option A — SQL Editor (no CLI)

1. **Prod** → **SQL Editor** → inspect policies:

```sql
select policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'public' and tablename = 'registrations';
```

2. **Prod** → **Table Editor** → `registrations` → confirm columns match `dev-schema.sql`.

3. **Dev** → **SQL Editor** → paste contents of **`dev-schema.sql`** → **Run**  
   (or paste a CLI dump from Option B if prod has extra columns/indexes).

### Option B — Supabase CLI (best if prod is source of truth)

```bash
# Install once: npm i -g supabase
# Login: supabase login

# Dump prod schema only (no data)
supabase db dump --project-ref YOUR_PROD_REF --schema public -f supabase/prod-schema.sql

# Dev → SQL Editor → paste prod-schema.sql → Run
# Or: psql "$DEV_DATABASE_URL" -f supabase/prod-schema.sql
```

Find project ref in Dashboard → Project Settings → General.

### Option C — Bundled dev schema (minimal rework)

If prod matches this app’s registration fields, run **`dev-schema.sql`** on the dev project only.

---

## After schema is on dev

1. Put **dev** URL + anon key in `.env.local`
2. Keep **prod** keys in Vercel **Production** only
3. Restart `npm run dev` and test `/register`

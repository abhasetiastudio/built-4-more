-- Run once on your DEV Supabase project (SQL Editor → New query → Run)
-- Matches the registrations insert in src/app/api/register/route.ts
--
-- If prod already has this exact schema, prefer copying from prod (see README in supabase/)

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  parent_name text not null,
  parent_email text not null,
  parent_phone text,
  student_name text not null,
  student_age integer not null,
  student_grade text not null,
  school_name text not null,
  basketball_experience text not null,
  leadership_goals text,
  additional_notes text
);

alter table public.registrations enable row level security;

-- Drop first if re-running (policy name must match)
drop policy if exists "Allow public registration inserts" on public.registrations;

create policy "Allow public registration inserts"
  on public.registrations
  for insert
  to anon
  with check (true);

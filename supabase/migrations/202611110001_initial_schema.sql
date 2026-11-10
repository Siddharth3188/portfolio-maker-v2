-- PortfolioForge M2: profiles + portfolios with owner-only Row Level Security.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.portfolios (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 80),
  profession text not null default 'Developer',
  generation_mode text not null default 'guided' check (generation_mode in ('guided','ai')) ,
  design_style text not null default 'Premium minimal',
  prompt text not null default '' check (char_length(prompt) <= 2000),
  status text not null default 'draft' check (status in ('draft','published')) ,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists portfolios_user_updated_idx on public.portfolios(user_id, updated_at desc);

alter table public.profiles enable row level security;
alter table public.portfolios enable row level security;

drop policy if exists "Profiles are readable by their owner" on public.profiles;
create policy "Profiles are readable by their owner" on public.profiles for select to authenticated using ((select auth.uid()) = id);
drop policy if exists "Profiles are editable by their owner" on public.profiles;
create policy "Profiles are editable by their owner" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

drop policy if exists "Users can read their own portfolios" on public.portfolios;
create policy "Users can read their own portfolios" on public.portfolios for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Users can create their own portfolios" on public.portfolios;
create policy "Users can create their own portfolios" on public.portfolios for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "Users can update their own portfolios" on public.portfolios;
create policy "Users can update their own portfolios" on public.portfolios for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Users can delete their own portfolios" on public.portfolios;
create policy "Users can delete their own portfolios" on public.portfolios for delete to authenticated using ((select auth.uid()) = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end; $$;
drop trigger if exists portfolios_set_updated_at on public.portfolios;
create trigger portfolios_set_updated_at before update on public.portfolios
for each row execute procedure public.set_updated_at();

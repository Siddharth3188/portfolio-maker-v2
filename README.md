# PortfolioForge — Milestone 2

A premium portfolio website generator. This version adds Supabase authentication, protected routes, owner-scoped portfolio storage and a real dashboard.

## Stack
- Next.js 15 App Router + React 19 + TypeScript
- Tailwind CSS v4 + Zustand
- Supabase Auth + Postgres + Row Level Security
- `@supabase/ssr` cookie-based sessions

## 1. Create and configure Supabase
1. Create a project at https://supabase.com/dashboard.
2. Open **SQL Editor → New query**.
3. Paste and run `supabase/migrations/202611110001_initial_schema.sql`.
4. Open **Project Settings → API** (or Connect) and copy the Project URL and publishable key.
5. In **Authentication → URL Configuration**, set Site URL to your deployed Vercel URL. Add these Redirect URLs: `https://YOUR-VERCEL-DOMAIN/auth/confirm` and `http://localhost:3000/auth/confirm`.
6. In Authentication → Providers → Email, keep Email enabled. For production, keep email confirmation enabled and configure SMTP before inviting real users.

## 2. Add Vercel environment variables
In Vercel → Project → Settings → Environment Variables, add: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Use the Supabase project URL and publishable key. Add them to Production, Preview and Development. Never add a service-role key to a `NEXT_PUBLIC_` variable.

## 3. Deploy
Commit the updated files to GitHub `main`. Vercel will deploy automatically.

## M2 features
- Email/password sign-up and sign-in
- Email confirmation callback
- Sign-out
- Cookie-backed SSR sessions refreshed by Next.js 15 middleware
- Protected `/dashboard` and `/create` routes
- Real user-specific portfolio create/list/delete
- RLS policies to isolate user data

## Routes
- `/` landing page
- `/signup` create account
- `/login` sign in
- `/auth/confirm` email verification callback
- `/dashboard` protected personal workspace
- `/create` protected create-and-save portfolio setup

## Security notes
- Only the Supabase publishable/anon key is used in the browser.
- No service-role key is required.
- Database access is protected by RLS. Never disable RLS on user-owned tables.
- The server verifies the authenticated user before inserts/deletes.

## M2 scope boundary
Portfolio setup is now saved in Postgres. Actual portfolio rendering, AI generation, editing, publishing, source export and custom domains are subsequent milestones.

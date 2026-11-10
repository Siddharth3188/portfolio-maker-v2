import Link from "next/link";
import { signIn } from "@/app/auth/actions";
import { AuthError, AuthShell } from "@/components/auth-form";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; next?: string }> }) {
  const params = await searchParams;
  return <AuthShell footer={<>New to PortfolioForge? <Link href="/signup" className="font-medium text-violet-300 hover:text-violet-200">Create an account</Link></>}>
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-violet-300">Welcome back</p><h1 className="mt-3 text-3xl font-semibold tracking-[-.06em]">Sign in to your space.</h1><p className="mt-2 text-sm text-zinc-500">Your ideas and portfolios are right where you left them.</p>
    <AuthError error={params.error}/>
    <form action={signIn} className="mt-7 space-y-4"><input type="hidden" name="next" value={params.next || "/dashboard"}/><label className="block text-xs text-zinc-400">Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-300/50"/></label><label className="block text-xs text-zinc-400">Password<input required minLength={6} type="password" name="password" autoComplete="current-password" placeholder="Your password" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-300/50"/></label><button className="w-full rounded-full bg-violet-300 px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-200">Sign in</button></form>
  </AuthShell>;
}

import Link from "next/link";
import { signUp } from "@/app/auth/actions";
import { AuthError, AuthShell } from "@/components/auth-form";

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ error?: string; message?: string }> }) {
  const params = await searchParams;
  return <AuthShell footer={<>Already have an account? <Link href="/login" className="font-medium text-violet-300 hover:text-violet-200">Sign in</Link></>}>
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-violet-300">Create your account</p><h1 className="mt-3 text-3xl font-semibold tracking-[-.06em]">Make room for your work.</h1><p className="mt-2 text-sm text-zinc-500">One account. Your own creative workspace.</p>
    <AuthError error={params.error} message={params.message}/>
    <form action={signUp} className="mt-7 space-y-4"><label className="block text-xs text-zinc-400">Your name<input required name="fullName" autoComplete="name" placeholder="Alex Morgan" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-300/50"/></label><label className="block text-xs text-zinc-400">Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-300/50"/></label><label className="block text-xs text-zinc-400">Password<input required minLength={8} type="password" name="password" autoComplete="new-password" placeholder="At least 8 characters" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-violet-300/50"/></label><button className="w-full rounded-full bg-violet-300 px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-200">Create account</button><p className="text-center text-[10px] leading-5 text-zinc-600">By creating an account, you agree to use PortfolioForge responsibly.</p></form>
  </AuthShell>;
}

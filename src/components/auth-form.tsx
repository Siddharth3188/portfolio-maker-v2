import Link from "next/link";
import { Brand } from "@/components/brand";

export function AuthShell({ children, footer }: { children: React.ReactNode; footer: React.ReactNode }) {
  return <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090a0f] px-5 py-12"><div className="pointer-events-none absolute -top-40 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]"/><div className="relative w-full max-w-md"><div className="mb-8 flex justify-center"><Brand/></div><div className="rounded-3xl border border-white/[.09] bg-[#111219] p-7 shadow-2xl shadow-black/30 sm:p-9">{children}</div><p className="mt-6 text-center text-xs text-zinc-600">{footer}</p><div className="mt-8 text-center"><Link href="/" className="text-[11px] text-zinc-700 hover:text-zinc-400">← Back to PortfolioForge</Link></div></div></main>;
}

export function AuthError({ error, message }: { error?: string; message?: string }) {
  if (!error && !message) return null;
  return <div className={`mt-5 rounded-xl border px-4 py-3 text-xs leading-5 ${error ? "border-rose-400/20 bg-rose-400/[.07] text-rose-200" : "border-emerald-400/20 bg-emerald-400/[.07] text-emerald-200"}`}>{error || message}</div>;
}

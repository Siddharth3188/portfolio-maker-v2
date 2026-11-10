import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";

export function TopNav() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <Brand />
      <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
        <a href="#how-it-works" className="transition hover:text-white">How it works</a>
        <a href="#templates" className="transition hover:text-white">Templates</a>
        <a href="#features" className="transition hover:text-white">Features</a>
      </nav>
      <div className="flex items-center gap-3">
        <Link href="/login" className="hidden text-sm text-zinc-300 transition hover:text-white sm:block">Sign in</Link>
        <Link href="/create" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-violet-100">
          Start creating <ArrowUpRight size={15} />
        </Link>
      </div>
    </header>
  );
}

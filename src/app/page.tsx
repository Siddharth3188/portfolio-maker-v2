import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Code2, Download, Globe2, MousePointer2, Palette, Sparkles, WandSparkles } from "lucide-react";
import { Brand } from "@/components/brand";
import { TopNav } from "@/components/top-nav";
import { SectionHeading } from "@/components/section-heading";

function PreviewCard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-8 rounded-[40px] bg-violet-500/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11121a] shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5"><i className="size-2.5 rounded-full bg-[#ff6b6b]"/><i className="size-2.5 rounded-full bg-[#f6c453]"/><i className="size-2.5 rounded-full bg-[#62d69a]"/></div>
          <div className="rounded-md bg-white/[.06] px-12 py-1 text-[9px] text-zinc-500">alexmorgan.design</div>
          <span className="text-[9px] text-zinc-500">↗</span>
        </div>
        <div className="grid min-h-[330px] grid-cols-[1fr_.72fr] gap-3 p-5 sm:p-7">
          <div className="flex flex-col justify-between py-2">
            <div><p className="text-[9px] uppercase tracking-[.25em] text-violet-300">Independent designer</p><h3 className="mt-5 text-3xl font-semibold leading-[1.02] tracking-[-.06em] sm:text-5xl">Making<br/>ideas feel<br/><span className="text-violet-300">inevitable.</span></h3><p className="mt-4 max-w-[220px] text-[10px] leading-5 text-zinc-400 sm:text-xs">I turn complex problems into simple, human experiences.</p></div>
            <div className="flex items-center gap-2 text-[10px] text-zinc-300">Explore selected work <ArrowUpRight size={12}/></div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#b5a1fa] via-[#7660a9] to-[#272238]">
            <div className="absolute inset-3 rounded-lg border border-white/25"/>
            <div className="absolute -right-10 top-10 size-48 rounded-full border-[25px] border-white/20"/>
            <div className="absolute bottom-8 left-5 h-36 w-24 rotate-[-12deg] rounded-t-full bg-[#17151f]/80"/>
            <div className="absolute bottom-5 right-5 text-[9px] uppercase tracking-[.2em] text-white/80">Selected<br/>work — 2025</div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-[9px] text-zinc-500"><span>01 / 04 — Portfolio preview</span><span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-emerald-400"/> Live preview</span></div>
      </div>
      <div className="glass absolute -bottom-5 -left-5 hidden rounded-xl px-4 py-3 shadow-xl sm:block"><div className="flex items-center gap-2 text-xs font-medium"><Sparkles size={14} className="text-violet-300"/> Your style, your story</div><p className="mt-1 text-[10px] text-zinc-500">Personalized in minutes</p></div>
    </div>
  );
}

const features = [
  { icon: WandSparkles, title: "Two ways to begin", text: "Build with a guided setup or describe your vision and let AI help shape the content." },
  { icon: Palette, title: "Make it feel like you", text: "Choose layouts, colors, typography and sections. Your portfolio should never feel generic." },
  { icon: MousePointer2, title: "Edit with confidence", text: "See your changes in a live preview and fine-tune the details before you publish." },
  { icon: Globe2, title: "Publish your way", text: "Share a hosted portfolio link or export the website source code when you're ready." },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="noise relative">
        <div className="grid-glow pointer-events-none absolute inset-0"/>
        <TopNav />
        <section className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[.92fr_1.08fr] lg:gap-10 lg:pb-32">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[.07] px-3 py-1.5 text-xs text-violet-200"><Sparkles size={13}/> A better way to build your online presence <span className="text-violet-400">✳</span></div>
            <h1 className="max-w-[650px] text-5xl font-semibold leading-[.99] tracking-[-.075em] sm:text-7xl xl:text-[82px]">Your story,<br/><span className="gradient-text">beautifully</span><br/>online.</h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">Create a portfolio website that feels unmistakably yours. Choose your style, shape your story, and bring your work to life — without writing code.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/create" className="inline-flex items-center gap-2 rounded-full bg-violet-300 px-6 py-3.5 text-sm font-semibold text-[#15111f] shadow-[0_8px_35px_rgba(167,139,250,.2)] transition hover:-translate-y-0.5 hover:bg-violet-200">Create your portfolio <ArrowRight size={16}/></Link>
              <a href="#how-it-works" className="rounded-full border border-white/10 px-6 py-3.5 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white">See how it works</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500"><span className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400"/> No coding required</span><span className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400"/> Your content, your style</span></div>
          </div>
          <PreviewCard />
        </section>
      </div>

      <section id="how-it-works" className="border-y border-white/[.07] bg-[#0d0e14] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Simple by design" title="From blank page to online." description="A clear, guided process that keeps the creative decisions in your hands."/>
          <div className="grid gap-4 md:grid-cols-3">
            {[["01","Tell us about you","Add your name, role, story and the work you want people to see."],["02","Find your direction","Choose a visual style or start with an AI-assisted creative brief."],["03","Make it yours","Review, refine and prepare your portfolio to publish or export."]].map(([n,t,d]) => <div key={n} className="rounded-2xl border border-white/[.08] bg-white/[.025] p-7"><p className="text-sm text-violet-300">{n} / 03</p><h3 className="mt-8 text-xl font-semibold tracking-tight">{t}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="A creative toolkit" title="Everything starts with you." description="A flexible foundation for turning your experience, personality and work into a portfolio that feels personal."/>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(({icon: Icon,title,text}) => <div key={title} className="rounded-2xl border border-white/[.08] bg-[#111219] p-7 transition hover:border-violet-300/25"><div className="grid size-11 place-items-center rounded-xl bg-violet-300/10 text-violet-200"><Icon size={20}/></div><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">{text}</p></div>)}
        </div>
      </section>

      <section id="templates" className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-violet-300/15 bg-gradient-to-br from-[#1a1725] via-[#12121b] to-[#101116] p-8 sm:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-violet-300">Your next chapter</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-.06em] sm:text-5xl">Make your work impossible to overlook.</h2><p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400">Start with a direction. Shape the details. Build a home for the work you're proud of.</p></div>
            <Link href="/create" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-100">Build your portfolio <ArrowUpRight size={16}/></Link>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/[.07] px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row"><Brand/><p className="text-xs text-zinc-600">© 2026 PortfolioForge. Built for what’s next.</p><p className="text-xs text-zinc-600">Your story deserves a great home.</p></div></footer>
    </main>
  );
}

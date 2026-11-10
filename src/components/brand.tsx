import Link from "next/link";
import { Layers3, Sparkles } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-violet-400 text-[#100d18] shadow-[0_0_28px_rgba(167,139,250,.24)]">
        <Layers3 size={19} strokeWidth={2.4} />
      </span>
      {!compact && <span className="text-[17px] font-semibold tracking-[-.04em]">portfolio<span className="text-violet-300">forge</span></span>}
    </Link>
  );
}

export function SparkleMark() {
  return <Sparkles size={15} className="text-violet-300" />;
}

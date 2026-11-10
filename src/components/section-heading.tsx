export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[.22em] text-violet-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-.055em] text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>
    </div>
  );
}

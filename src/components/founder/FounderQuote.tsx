import { founder } from "@/lib/constants";

export function FounderQuote() {
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface/50 px-6 py-12 text-center sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08),transparent_70%)]" />
      <p className="relative text-[10px] uppercase tracking-[0.35em] text-gold">
        In his words
      </p>
      <blockquote className="relative mt-6 font-[family-name:var(--font-bebas)] text-2xl leading-snug tracking-wide sm:text-4xl lg:text-5xl">
        &ldquo;{founder.quote.text}
        <span className="text-gold"> {founder.quote.highlight}&rdquo;</span>
      </blockquote>
      <p className="relative mt-8 text-sm uppercase tracking-[0.2em] text-muted">
        — {founder.name}, {founder.title}
      </p>
    </div>
  );
}

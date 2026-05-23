import { founder } from "@/lib/constants";

type FounderPhotoCardProps = {
  compact?: boolean;
};

export function FounderPhotoCard({ compact }: FounderPhotoCardProps) {
  const initials = founder.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={`court-card-wash relative overflow-hidden rounded-2xl border border-border bg-surface-elevated ${
        compact ? "aspect-[4/5] max-h-[420px]" : "aspect-[4/5] sm:sticky sm:top-32"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-background" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center sm:p-8">
        <div
          className={`flex items-center justify-center rounded-full border border-gold/25 bg-gold-dim ${
            compact ? "h-28 w-28" : "h-36 w-36 sm:h-40 sm:w-40"
          }`}
          aria-hidden
        >
          <span
            className={`font-[family-name:var(--font-bebas)] text-gold/50 ${
              compact ? "text-5xl" : "text-6xl"
            }`}
          >
            {initials}
          </span>
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted">
          Photo placeholder
        </p>
        <p
          className={`mt-5 font-[family-name:var(--font-bebas)] tracking-[0.1em] ${
            compact ? "text-2xl" : "text-3xl"
          }`}
        >
          {founder.name.toUpperCase()}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-gold">
          {founder.title}
        </p>
        {!compact && (
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            {founder.roleNote}
          </p>
        )}
      </div>
      <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
    </div>
  );
}

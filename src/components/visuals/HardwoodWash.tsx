/** Extremely subtle floor grain — not orange camp hardwood */
export function HardwoodWash({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.018] ${className}`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 48px,
            rgba(201, 169, 98, 0.15) 48px,
            rgba(201, 169, 98, 0.15) 49px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 120px,
            rgba(255, 255, 255, 0.03) 120px,
            rgba(255, 255, 255, 0.03) 121px
          )
        `,
      }}
    />
  );
}

import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function Section({ children, className = "", id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-28 sm:px-8 md:px-10 md:py-36 lg:px-16 lg:py-40 ${
        dark ? "bg-surface" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.92] tracking-[0.02em] text-foreground lg:text-7xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-6 max-w-2xl text-[15px] leading-[1.75] text-muted sm:text-lg sm:leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
}

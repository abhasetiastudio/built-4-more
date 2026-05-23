import Link from "next/link";
import { founder } from "@/lib/constants";
import { SectionLabel, SectionTitle } from "@/components/ui/Section";
import { FounderPhotoCard } from "./FounderPhotoCard";

type FounderBlockProps = {
  /** Compact layout for /about; full story links to /founder */
  variant?: "about" | "full";
};

export function FounderBlock({ variant = "about" }: FounderBlockProps) {
  const isAbout = variant === "about";

  return (
    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <FounderPhotoCard compact={isAbout} />

      <div>
        <SectionLabel>Founder · Vision & Oversight</SectionLabel>
        <SectionTitle>
          {isAbout ? (
            <>
              ABIR BAJAJ
              <br />
              <span className="text-gradient-gold">STARTED IT HERE.</span>
            </>
          ) : (
            <>WHY BUILT 4 MORE EXISTS</>
          )}
        </SectionTitle>

        <div className="mt-6 space-y-5 text-[15px] leading-[1.75] text-muted sm:text-base sm:leading-relaxed">
          {founder.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        {isAbout && (
          <Link
            href="/founder"
            className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-80"
          >
            Read Abir&apos;s full story →
          </Link>
        )}
      </div>
    </div>
  );
}

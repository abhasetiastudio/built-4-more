"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { leadershipWeek } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function LeadershipWeekCta() {
  const { cta } = leadershipWeek;

  return (
    <Section id="register-cohort" className="overflow-hidden">
      <CourtAccent type="arc" placement="bottom-right" opacity="opacity-[0.05]" gold />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <FadeIn className="relative text-center">
        <h2 className="mx-auto max-w-4xl font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,8vw,5rem)] leading-[0.92] tracking-wide">
          {cta.title.toUpperCase()}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-lg">
          {cta.subtitle}
        </p>
        <Button href={cta.href} className="mt-10">
          {cta.buttonLabel}
        </Button>
      </FadeIn>
    </Section>
  );
}

"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionTitle,
} from "@/components/ui/Section";
import { leadershipWeek } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function LeadershipWeekDifferentiators() {
  return (
    <Section id="what-makes-different" dark className="overflow-hidden">
      <CourtAccent type="freethrow" placement="top-right" opacity="opacity-[0.03]" gold />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(201,169,98,0.05),transparent_55%)]" />

      <FadeIn className="text-center">
        <SectionLabel>The Difference</SectionLabel>
        <SectionTitle className="mx-auto max-w-3xl text-center">
          WHAT MAKES THIS
          <br />
          <span className="text-gradient-gold">DIFFERENT</span>
        </SectionTitle>
      </FadeIn>

      <FadeIn className="mt-14 sm:mt-16" delay={0.08}>
        <div className="mx-auto max-w-4xl rounded-3xl border border-gold/20 bg-background/30 p-8 sm:p-12">
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6">
            {leadershipWeek.differentiators.map((item) => (
              <StaggerItem key={item}>
                <div className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 text-xs text-gold"
                  >
                    ✓
                  </span>
                  <p className="text-[15px] leading-relaxed text-foreground/90 sm:text-base">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>
    </Section>
  );
}

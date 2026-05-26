"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionTitle,
} from "@/components/ui/Section";
import { leadershipWeek } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function LeadershipWeekWhy() {
  return (
    <Section id="why-leadership-week" dark className="overflow-hidden">
      <CourtAccent type="center" placement="bottom-left" opacity="opacity-[0.025]" gold />
      <div className="absolute top-0 left-1/2 h-px w-2/3 max-w-md -translate-x-1/2 gold-line" />

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <FadeIn className="lg:col-span-5">
          <SectionLabel>Why This Exists</SectionLabel>
          <SectionTitle>
            MORE THAN
            <br />
            <span className="text-gradient-gold">A CAMP</span>
          </SectionTitle>
        </FadeIn>

        <FadeIn className="lg:col-span-7" delay={0.1}>
          <div className="space-y-6 border-l border-gold/30 pl-8 sm:space-y-8 sm:pl-10">
            {leadershipWeek.why.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-[1.8] text-muted ${
                  i === 0
                    ? "text-lg font-medium text-foreground sm:text-xl"
                    : "text-[15px] sm:text-base sm:leading-relaxed"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

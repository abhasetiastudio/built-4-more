"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";
import { leadershipWeek } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function LeadershipWeekThemes() {
  return (
    <Section id="daily-themes" className="overflow-hidden">
      <CourtAccent type="hoop" placement="top-left" opacity="opacity-[0.035]" gold />

      <FadeIn className="text-center">
        <SectionLabel>The Week</SectionLabel>
        <SectionTitle className="mx-auto max-w-3xl text-center">
          5 DAYS.
          <br />
          <span className="text-gradient-gold">5 LEADERSHIP THEMES.</span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto text-center">
          Each day builds on the last—basketball on the court, leadership in
          everything around it.
        </SectionSubtitle>
      </FadeIn>

      <div className="relative mt-16 sm:mt-20">
        <div
          aria-hidden
          className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent lg:block"
        />

        <StaggerContainer className="space-y-5 sm:space-y-6">
          {leadershipWeek.themes.map((theme, i) => (
            <StaggerItem key={theme.day}>
              <article
                className={`group relative rounded-2xl border border-border/80 bg-background/40 p-7 transition-all duration-500 hover:border-gold/30 sm:p-8 lg:pl-16 ${
                  i % 2 === 1 ? "lg:ml-12" : ""
                }`}
              >
                <div className="absolute -left-3 top-8 hidden h-6 w-6 rounded-full border border-gold/50 bg-background lg:block" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="shrink-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
                      {theme.day}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3rem)] leading-none tracking-wide">
                      {theme.title.toUpperCase()}
                    </h3>
                  </div>
                  <p className="max-w-xl text-[15px] leading-relaxed text-muted sm:pt-2 sm:text-base">
                    {theme.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

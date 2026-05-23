"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";
import { pillars } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function LeadershipPillars() {
  return (
    <Section id="pillars" dark className="overflow-hidden">
      <CourtAccent type="center" placement="top-right" opacity="opacity-[0.03]" gold />
      <CourtAccent type="arc" placement="bottom-left" opacity="opacity-[0.025]" className="rotate-180" />
      <div className="absolute top-0 left-1/2 h-px w-2/3 max-w-md -translate-x-1/2 gold-line" />
      <FadeIn className="text-center">
        <SectionLabel>For Elementary Students</SectionLabel>
        <SectionTitle className="mx-auto max-w-3xl text-center">
          WHAT YOUR KID
          <br />
          <span className="text-gradient-gold">TAKES FROM THE COURT</span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto text-center">
          High school mentors teach more than crossover moves. These are the
          habits we build in every session—for K through 5th grade.
        </SectionSubtitle>
      </FadeIn>

      <StaggerContainer className="mt-14 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <StaggerItem key={pillar.title}>
            <article className="court-card-wash group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_24px_48px_-24px_rgba(201,169,98,0.2)] sm:p-8">
              <div className="flex items-start justify-between">
                <span className="font-[family-name:var(--font-bebas)] text-4xl text-gold/25 transition-colors duration-500 group-hover:text-gold/55 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xl text-gold/35 transition-colors group-hover:text-gold/60">
                  {pillar.icon}
                </span>
              </div>
              <h3 className="mt-8 font-[family-name:var(--font-bebas)] text-2xl tracking-wide sm:text-[1.65rem]">
                {pillar.title.toUpperCase()}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
              <div className="mt-6 h-px w-0 bg-gold/50 transition-all duration-500 group-hover:w-12" />
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

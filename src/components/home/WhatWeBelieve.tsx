"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";
import { beliefs } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function WhatWeBelieve() {
  return (
    <Section id="beliefs" dark className="overflow-hidden">
      <CourtAccent type="freethrow" placement="top-right" opacity="opacity-[0.03]" gold />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.06),transparent_55%)]" />
      <div className="absolute top-0 left-1/2 h-px w-2/3 max-w-md -translate-x-1/2 gold-line" />

      <FadeIn className="relative text-center">
        <SectionLabel>Philosophy</SectionLabel>
        <SectionTitle className="mx-auto max-w-3xl text-center">
          WHAT WE
          <br />
          <span className="text-gradient-gold">BELIEVE</span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto max-w-2xl text-center">
          Not slogans—convictions we build every session around. For parents
          raising kids and athletes finding their voice early.
        </SectionSubtitle>
      </FadeIn>

      <StaggerContainer className="relative mt-16 space-y-6 sm:mt-20 sm:space-y-8 lg:space-y-10">
        {beliefs.map((belief, i) => (
          <StaggerItem key={belief.title}>
            <article
              className={`group relative rounded-2xl border border-border/80 bg-background/30 p-7 transition-colors duration-500 hover:border-gold/25 sm:p-9 lg:p-10 ${
                i % 2 === 1 ? "lg:ml-auto lg:max-w-3xl" : "lg:max-w-3xl"
              }`}
            >
              <span className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.35em] text-gold/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-bebas)] text-[clamp(1.75rem,4.5vw,2.5rem)] leading-[1.05] tracking-wide">
                {belief.title}
              </h3>
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-muted sm:text-base sm:leading-relaxed">
                {belief.body}
              </p>
              <div className="mt-7 h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-16" />
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

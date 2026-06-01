"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";
import { leadershipWeek } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function LeadershipWeekFeatured() {
  return (
    <Section id="leadership-week" className="overflow-hidden">
      <CourtAccent type="arc" placement="top-right" opacity="opacity-[0.04]" gold />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.08),transparent_60%)]" />

      <FadeIn>
        <SectionLabel>Flagship Experience</SectionLabel>
        <SectionTitle className="max-w-5xl">
          BUILT 4 MORE
          <br />
          <span className="text-gradient-gold">LEADERSHIP WEEK</span>
        </SectionTitle>
        <SectionSubtitle className="max-w-3xl">
          <span className="block text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
            {leadershipWeek.week}
          </span>
          <span className="mt-4 block">{leadershipWeek.subtitle}</span>
        </SectionSubtitle>
      </FadeIn>
    </Section>
  );
}

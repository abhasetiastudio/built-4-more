"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";
import { founder } from "@/lib/constants";
import { CourtAccent, CourtDivider } from "@/components/visuals/CourtAccent";
import { FreeThrowArc } from "@/components/visuals/CourtMotif";

export function MissionStatement() {
  return (
    <Section id="mission" className="overflow-hidden">
      <CourtAccent type="sideline" placement="center-left" opacity="opacity-[0.03]" />
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <SectionLabel>Our Purpose</SectionLabel>
          <SectionTitle>
            HIGH SCHOOL PLAYERS
            <br />
            <span className="text-gradient-gold">BUILDING LITTLE LEADERS.</span>
          </SectionTitle>
          <SectionSubtitle>
            The best lessons don&apos;t always come from adults on the sideline.
            They come from someone a few years ahead—still in the gym every day,
            still figuring it out, but ready to pour into the kid who&apos;s just
            starting. That&apos;s Built 4 More.
          </SectionSubtitle>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="court-card-wash relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface-elevated sm:aspect-[5/6]">
            <div className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center opacity-[0.07]">
              <FreeThrowArc
                stroke="var(--gold)"
                strokeWidth={1}
                className="w-4/5 max-w-[220px]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gold/25 via-transparent to-background/80" />
            <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
                The Model
              </p>
              <blockquote className="mt-4 font-[family-name:var(--font-bebas)] text-[clamp(1.75rem,5vw,2.5rem)] leading-[1.05] tracking-wide">
                &ldquo;A lot of players waste time trying to figure out basic
                stuff that could&apos;ve been taught from the start.
                <span className="text-gold">
                  {" "}
                  Built 4 More is my way of giving younger players that
                  advantage.&rdquo;
                </span>
              </blockquote>
              <p className="mt-5 text-sm text-muted">
                — {founder.name}, {founder.title}
              </p>
            </div>
            <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
          </div>
        </FadeIn>
      </div>
      <CourtDivider className="mt-20 hidden md:block" />
    </Section>
  );
}

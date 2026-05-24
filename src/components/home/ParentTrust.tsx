"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";
import { trustPoints } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function ParentTrust() {
  return (
    <Section id="parents" dark className="overflow-hidden">
      <CourtAccent type="key" placement="bottom-right" opacity="opacity-[0.03]" />
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <SectionLabel>For Parents</SectionLabel>
          <SectionTitle>
            YOU WANT SOMEONE
            <br />
            <span className="text-gradient-gold">YOUR KID TRUSTS.</span>
          </SectionTitle>
          <SectionSubtitle>
            Handing your elementary student to a high schooler takes trust. We
            train every mentor, keep adults on site, and design sessions for
            little kids—not mini varsity practice.
          </SectionSubtitle>
          <a
            href="/register"
            className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-80"
          >
            Register your child →
          </a>
        </FadeIn>

        <StaggerContainer className="grid gap-3 sm:gap-4">
          {trustPoints.map((point) => (
            <StaggerItem key={point.title}>
              <div className="rounded-2xl border border-border/80 bg-background/40 p-6 transition-all duration-300 hover:border-gold/25 sm:p-7">
                <h3 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide sm:text-2xl">
                  {point.title.toUpperCase()}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

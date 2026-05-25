"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { mentorLessons, founder } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";
import { ThreePointArc } from "@/components/visuals/CourtMotif";

export function AthleteMindset() {
  return (
    <Section id="mindset" className="relative overflow-hidden">
      <CourtAccent type="hoop" placement="top-right" opacity="opacity-[0.04]" gold />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(201,169,98,0.07),transparent_65%)]" />

      <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-24">
        <FadeIn>
          <SectionLabel>From the High School Line</SectionLabel>
          <SectionTitle>
            WHAT A 15-YEAR-OLD
            <br />
            <span className="text-gradient-gold">CAN OFFER YOUR KID</span>
          </SectionTitle>
          <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-muted sm:text-lg sm:leading-relaxed">
            It&apos;s not babysitting with a basketball. Our mentors are players
            who show up trained, prepared, and invested—because teaching an elementary kid
            to believe in themselves makes them better leaders too.
          </p>

          <motion.div
            className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border border-border sm:mt-12 lg:mt-14"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-surface-elevated" />
            <div className="pointer-events-none absolute inset-x-4 bottom-6 opacity-[0.08] sm:inset-x-8">
              <ThreePointArc stroke="var(--gold)" className="h-full w-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent" />
            <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
                {founder.title} · {founder.name}
              </p>
              <p className="mt-4 font-[family-name:var(--font-bebas)] text-3xl leading-tight tracking-wide sm:text-4xl">
                &ldquo;I WISH I HAD THIS
                <br />
                <span className="text-gradient-gold">WHEN I WAS THEIR AGE.&rdquo;</span>
              </p>
            </div>
          </motion.div>
        </FadeIn>

        <div className="space-y-4 sm:space-y-5">
          {mentorLessons.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.08}>
              <motion.div
                className="group rounded-xl border border-transparent p-5 transition-colors hover:border-border hover:bg-surface/50 sm:p-6"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="flex gap-5 sm:gap-6">
                  <span className="font-[family-name:var(--font-bebas)] text-3xl text-gold/40 sm:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="border-l border-border pl-5 group-hover:border-gold/40 sm:pl-6">
                    <h3 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide sm:text-2xl">
                      {point.title.toUpperCase()}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {point.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

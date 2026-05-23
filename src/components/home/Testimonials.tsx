"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/Section";
import { testimonials } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <Section id="stories" className="overflow-hidden">
      <CourtAccent type="freethrow" placement="top-left" opacity="opacity-[0.035]" gold />
      <FadeIn className="text-center">
        <SectionLabel>Voices</SectionLabel>
        <SectionTitle className="mx-auto max-w-3xl text-center">
          PARENTS & MENTORS
          <br />
          <span className="text-gradient-gold">ON THE EXPERIENCE</span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto text-center">
          From families with elementary kids and high schoolers who&apos;ve
          stepped up to lead.
        </SectionSubtitle>
      </FadeIn>

      <div className="relative mt-14 sm:mt-16">
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl sm:h-64 sm:w-64" />

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-4xl px-2 text-center"
          >
            <span className="font-[family-name:var(--font-bebas)] text-5xl leading-none text-gold/20">
              &ldquo;
            </span>
            <p className="-mt-4 font-[family-name:var(--font-bebas)] text-[clamp(1.5rem,4.5vw,2.75rem)] leading-[1.15] tracking-wide sm:text-4xl lg:text-5xl">
              {testimonials[active].quote}
            </p>
            <footer className="mt-8 sm:mt-10">
              <cite className="not-italic">
                <span className="block text-sm font-semibold">
                  {testimonials[active].author}
                </span>
                <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-muted">
                  {testimonials[active].role}
                </span>
              </cite>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-2.5 sm:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`View testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-400 ${
                i === active
                  ? "w-10 bg-gold"
                  : "w-5 bg-border hover:bg-gold/50"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

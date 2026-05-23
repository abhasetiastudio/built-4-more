"use client";

import { motion } from "framer-motion";
import { SidelineMarks } from "@/components/visuals/CourtMotif";

const words = [
  "Mentorship",
  "Teamwork",
  "Confidence",
  "Elementary",
  "High School",
  "Leadership",
  "Basketball",
  "Built 4 More",
];

export function Marquee() {
  const track = [...words, ...words];

  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-5">
      <div className="pointer-events-none absolute left-6 top-0 bottom-0 w-6 opacity-[0.04] sm:left-10">
        <SidelineMarks stroke="var(--gold)" className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute right-6 top-0 bottom-0 w-6 opacity-[0.04] sm:right-10">
        <SidelineMarks stroke="var(--gold)" className="h-full w-full" />
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-surface to-transparent" />
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {track.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="shrink-0 font-[family-name:var(--font-bebas)] text-2xl tracking-[0.2em] text-foreground/20 md:text-3xl"
          >
            {word.toUpperCase()}
            <span className="mx-12 inline-block h-px w-6 align-middle bg-gold/25" aria-hidden />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

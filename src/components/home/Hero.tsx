"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CourtAccent } from "@/components/visuals/CourtAccent";
import { HardwoodWash } from "@/components/visuals/HardwoodWash";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-center overflow-hidden cinematic-gradient noise-overlay"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.4)_70%,rgba(5,5,5,0.95)_100%)]" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <HardwoodWash />

      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(201,169,98,0.14),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent md:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />

      <CourtAccent type="arc" placement="bottom-right" opacity="opacity-[0.05]" />
      <CourtAccent
        type="key"
        placement="bottom-left"
        opacity="opacity-[0.035]"
        className="rotate-6"
      />
      <CourtAccent
        type="hoop"
        placement="top-right"
        opacity="opacity-[0.055]"
        gold
        className="hidden sm:block"
      />
      <CourtAccent
        type="center"
        placement="top-left"
        opacity="opacity-[0.025]"
        className="scale-75"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8 md:px-10 md:pt-36 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-3 md:mb-10 md:gap-4"
        >
          <span className="h-px w-8 bg-gold md:w-14" />
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold sm:text-xs sm:tracking-[0.35em]">
            Fundamentals First · Built From Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[min(100%,52rem)] font-[family-name:var(--font-bebas)] text-[clamp(3.25rem,11.5vw,8.5rem)] leading-[0.88] tracking-[0.02em]"
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              BUILT TO COMPETE.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-gradient-gold"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              BUILT TO LEAD.
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.55 }}
          className="mt-7 max-w-md text-[15px] leading-[1.7] text-muted sm:mt-8 sm:max-w-xl sm:text-lg sm:leading-relaxed"
        >
          Built 4 More gives young players the foundation too many miss early
          on—real fundamentals, full effort, and steady work so kids build
          confidence and skill the right way from day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.68 }}
          className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-background shadow-[0_0_48px_-10px_var(--gold-glow)] transition-all hover:bg-gold-light"
          >
            Register Now
          </a>
          <a
            href="#leadership-week"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-gold transition-all hover:border-gold/60 hover:bg-gold-dim"
          >
            Explore The Week
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-border/80 pt-8 sm:mt-20 sm:gap-8 sm:pt-10 md:max-w-xl"
        >
          {[
            { value: "5", label: "Day Experience" },
            { value: "6–8", label: "Athletes Max" },
            { value: "K–7", label: "Grade Levels" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08 }}
            >
              <p className="font-[family-name:var(--font-bebas)] text-2xl text-gold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[9px] uppercase leading-snug tracking-[0.18em] text-muted sm:text-[11px] sm:tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
      >
        <motion.a
          href="#mission"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-muted">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-gold/80 to-transparent" />
        </motion.a>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { ParentRegistrationForm } from "@/components/contact/ParentRegistrationForm";
import { leadershipWeek } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export function CtaBanner() {
  return (
    <section
      id="join"
      className="relative scroll-mt-24 px-5 py-28 sm:px-8 md:px-10 md:py-36 lg:px-16 lg:py-40"
    >
      <FadeIn>
        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-gold/20"
          whileInView={{ opacity: [0.9, 1], y: [20, 0] }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/12 via-surface to-background" />
          <div className="absolute inset-0 grid-overlay opacity-25" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <CourtAccent
            type="arc"
            placement="bottom-left"
            opacity="opacity-[0.05]"
            gold
            className="!bottom-4 !left-4 !translate-x-0 !translate-y-0"
          />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
                Founding Cohort
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.92] tracking-wide lg:text-7xl">
                SECURE YOUR
                <br />
                <span className="text-gradient-gold">SPOT THIS SUMMER</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
                Register for {leadershipWeek.fullName}—a 5-day small-group
                experience for grades K–7 in the Northville / Novi area.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  6–8 athletes · founding summer cohort
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  Tentative time · details to follow
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  We reply within 48 hours
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
              <ParentRegistrationForm />
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
}

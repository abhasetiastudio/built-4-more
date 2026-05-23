"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/constants";

const sections = [
  { href: "#mission", label: "Mission" },
  { href: "#pillars", label: "Pillars" },
  { href: "#mindset", label: "Mindset" },
  { href: "#parents", label: "Parents" },
  { href: "#stories", label: "Stories" },
] as const;

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/80 bg-background/75 backdrop-blur-2xl"
            : "bg-gradient-to-b from-background/80 to-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 lg:px-16">
          <a href="#" className="group">
            <span className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.2em] md:text-2xl">
              {site.name.toUpperCase()}
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-muted transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#join"
            className="hidden rounded-full border border-gold/35 bg-gold-dim px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:border-gold/60 hover:bg-gold/20 md:inline-flex"
          >
            Join
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-px w-5 bg-foreground transition-all ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-all ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-background/98 backdrop-blur-xl md:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-8">
              {sections.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-[family-name:var(--font-bebas)] text-4xl tracking-[0.15em]"
                  >
                    {item.label.toUpperCase()}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="#join"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider text-background"
                >
                  Sign Up
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto grid h-[4.25rem] max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 md:h-[4.5rem] md:px-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-10 xl:px-16">
          {/* Logo */}
          <Link href="/" className="group min-w-0 justify-self-start">
            <span className="block truncate font-[family-name:var(--font-bebas)] text-xl tracking-[0.12em] text-foreground transition-colors group-hover:text-gold sm:text-2xl lg:text-[1.65rem]">
              {site.name.toUpperCase()}
            </span>
            <span className="hidden truncate text-[9px] uppercase tracking-[0.28em] text-muted 2xl:block">
              {site.tagline}
            </span>
          </Link>

          {/* Desktop links — centered column */}
          <ul className="hidden items-center justify-center gap-0 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative whitespace-nowrap px-2.5 py-2 text-[10px] font-medium uppercase tracking-[0.14em] transition-colors xl:px-3 xl:text-[11px] xl:tracking-[0.16em] ${
                      active ? "text-gold" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-1 left-2.5 right-2.5 h-px bg-gold xl:left-3 xl:right-3"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center justify-end gap-3 justify-self-end">
            <Link
              href="/contact"
              className="hidden shrink-0 rounded-full border border-gold/30 bg-gold-dim px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold transition-all hover:border-gold/60 hover:bg-gold/20 sm:px-5 sm:py-2.5 sm:text-[11px] lg:inline-flex"
            >
              Contact
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="relative z-50 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span
                className={`h-px w-5 bg-foreground transition-all duration-300 ${
                  mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-foreground transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-foreground transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="flex h-full flex-col items-center justify-center gap-6 px-6"
            >
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`font-[family-name:var(--font-bebas)] text-3xl tracking-[0.12em] sm:text-4xl ${
                        active ? "text-gold" : "text-foreground hover:text-gold"
                      }`}
                    >
                      {link.label === "Abir"
                        ? "ABOUT ABIR"
                        : link.label === "Mentors"
                          ? "OUR MENTORS"
                          : link.label.toUpperCase()}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href="/contact"
                  className="mt-2 inline-block rounded-full bg-gold px-10 py-3.5 text-sm font-semibold uppercase tracking-wider text-background"
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

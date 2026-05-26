"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNavLinks, site } from "@/lib/constants";

function navHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

export function LandingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          <Link href="/" className="group">
            <span className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.2em] md:text-2xl">
              {site.name.toUpperCase()}
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {primaryNavLinks.map((item) => {
              const href = navHref(item.href, pathname);
              const isPageLink = item.href.startsWith("/");
              const active = isPageLink && pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  {isPageLink ? (
                    <Link
                      href={href}
                      className={`px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:text-gold ${
                        active ? "text-gold" : "text-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-muted transition-colors hover:text-gold"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            href="/register"
            className="hidden rounded-full border border-gold/35 bg-gold-dim px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:border-gold/60 hover:bg-gold/20 md:inline-flex"
          >
            Register
          </Link>

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
              {primaryNavLinks.map((item, i) => {
                const href = navHref(item.href, pathname);
                const isPageLink = item.href.startsWith("/");

                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {isPageLink ? (
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className="font-[family-name:var(--font-bebas)] text-4xl tracking-[0.15em]"
                      >
                        {item.label.toUpperCase()}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={() => setOpen(false)}
                        className="font-[family-name:var(--font-bebas)] text-4xl tracking-[0.15em]"
                      >
                        {item.label.toUpperCase()}
                      </a>
                    )}
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider text-background"
                >
                  Register
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

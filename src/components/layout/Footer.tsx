import Link from "next/link";
import { founder, navLinks, site } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.15em]">
                {site.name.toUpperCase()}
              </span>
            </Link>
            <p className="mt-3 whitespace-pre-line text-xs uppercase tracking-[0.2em] text-muted">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              High school basketball players mentor elementary students—building
              confidence, teamwork, and leadership on both sides of the court.
            </p>
            <p className="mt-2 text-[11px] tracking-wide text-gold/80">
              Founded by{" "}
              <Link href="/founder" className="text-gold hover:text-gold-light">
                {founder.name}
              </Link>
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Explore
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label === "Abir"
                      ? "About Abir"
                      : link.label === "Mentors"
                        ? "Our Mentors"
                        : link.label === "FAQ"
                          ? "Parent FAQ"
                          : link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Connect
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
              {site.phones.map((phone) => (
                <li key={phone}>{phone}</li>
              ))}
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-12" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">
            Built for more. Built 4 More.
          </p>
        </div>
      </div>
    </footer>
  );
}

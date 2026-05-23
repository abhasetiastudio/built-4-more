import { founder, site } from "@/lib/constants";
import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.15em]">
            {site.name.toUpperCase()}
          </p>
          <p className="mt-2 text-xs text-muted">{site.tagline}</p>
          <p className="mt-1.5 text-[11px] tracking-wide text-gold/80">
            Founded by{" "}
            <Link href="/founder" className="text-gold hover:text-gold-light">
              {founder.name}
            </Link>
          </p>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. High school mentors · elementary
          leaders · basketball.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="text-xs uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-80"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}

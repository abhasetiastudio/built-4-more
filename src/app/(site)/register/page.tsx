import type { Metadata } from "next";
import { ParentRegistrationForm } from "@/components/contact/ParentRegistrationForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { foundingCohort, leadershipWeek, site } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register your K–7 student for Built 4 More Leadership Week—the founding summer cohort, offered at no cost.",
};

export default function RegisterPage() {
  const { cta } = leadershipWeek;

  return (
    <>
      <PageHeader
        label="Register"
        title={
          <>
            SIGN UP YOUR
            <br />
            <span className="text-gradient-gold">ELEMENTARY STUDENT</span>
          </>
        }
        subtitle="Parents: register your K–7 student for Leadership Week. Founding cohort · no cost to participate. We'll follow up within 48 hours."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
                {foundingCohort.label}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-3xl leading-[0.95] tracking-wide sm:text-4xl">
                SECURE YOUR
                <br />
                <span className="text-gradient-gold">SPOT THIS SUMMER</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[15px]">
                {foundingCohort.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {foundingCohort.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="court-card-wash rounded-2xl border border-gold/20 bg-surface/40 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                {cta.subtitle}
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
                {cta.noCost}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-relaxed">
                {cta.pilotNote}
              </p>
            </div>

            <ul className="space-y-6 border-t border-border pt-8">
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Program</p>
                <p className="mt-1 text-sm">{leadershipWeek.fullName}</p>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Questions?</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-sm text-foreground transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  High school mentors
                </p>
                <a
                  href="/contact"
                  className="mt-1 block text-sm text-foreground transition-colors hover:text-gold"
                >
                  Apply for Built 4 More →
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ParentRegistrationForm />
          </div>
        </div>
      </Section>
    </>
  );
}

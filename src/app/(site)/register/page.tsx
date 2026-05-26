import type { Metadata } from "next";
import { ParentRegistrationForm } from "@/components/contact/ParentRegistrationForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { site, leadershipWeek } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register your K–7 student for Built 4 More Leadership Week.",
};

export default function RegisterPage() {
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
        subtitle="Parents: register your K–7 student for Leadership Week. We'll follow up within 48 hours with program details."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide">
              FOR PARENTS
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Built 4 More pairs elementary students with trained high school
              mentors. Sessions focus on basketball fundamentals, confidence,
              and leadership—in a supervised, kid-first environment.
            </p>

            <ul className="mt-10 space-y-6">
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Program</p>
                <p className="mt-1">{leadershipWeek.fullName}</p>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Questions?</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-foreground hover:text-gold transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">High school mentors</p>
                <a href="/contact" className="mt-1 block text-foreground hover:text-gold transition-colors">
                  Apply for Mentor Corps →
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

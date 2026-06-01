import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Built 4 More",
  description:
    "Apply as a high school mentor for Built 4 More.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Built 4 More"
        title={
          <>
            STEP UP
            <br />
            <span className="text-gradient-gold">TO MENTOR</span>
          </>
        }
        subtitle="High school basketball players: apply for Built 4 More. We'll get back to you within 48 hours with training dates and requirements."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide">
              MENTOR APPLICATION
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              If you&apos;re on a school or club basketball team and ready to
              lead younger kids, start here.
            </p>

            <ul className="mt-10 space-y-6">
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-foreground hover:text-gold transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Phone</p>
                <p className="mt-1">{site.phone}</p>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Parents</p>
                <a href="/register" className="mt-1 block text-foreground hover:text-gold transition-colors">
                  Register your elementary student →
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Sign up your elementary student or apply as a high school mentor for Built 4 More.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title={
          <>
            SIGN UP OR
            <br />
            <span className="text-gradient-gold">STEP UP TO MENTOR</span>
          </>
        }
        subtitle="Parents: register your K–5 student. High school players: apply for Mentor Corps. We'll get back to you within 48 hours."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide">
              GET IN TOUCH
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Whether your child is in kindergarten or you&apos;re a sophomore
              on varsity—start here.
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
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Location</p>
                <p className="mt-1">{site.location}</p>
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

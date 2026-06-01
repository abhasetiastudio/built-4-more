import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Parent FAQ",
  description:
    "FAQ for parents of elementary students and families with high schoolers interested in Built 4 More.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        label="Parent FAQ"
        title={
          <>
            QUESTIONS ABOUT
            <br />
            <span className="text-gradient-gold">TEEN MENTORS & YOUR KID</span>
          </>
        }
        subtitle="Straight answers for parents considering Built 4 More—and for high school players wondering what Built 4 More involves."
      />

      <Section>
        <FaqAccordion />

        <div className="mt-16 rounded-2xl border border-gold/20 bg-gold-dim/30 p-8 text-center md:p-12">
          <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="mt-4 text-muted">
            We&apos;re happy to talk through fit, safety, and scheduling.
          </p>
          <Button href="/contact" className="mt-8">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}

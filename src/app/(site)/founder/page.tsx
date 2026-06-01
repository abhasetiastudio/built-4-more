import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FounderBlock } from "@/components/founder/FounderBlock";
import { FounderQuote } from "@/components/founder/FounderQuote";
import { founder } from "@/lib/constants";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export const metadata: Metadata = {
  title: "About Abir",
  description:
    "Meet Abir Bajaj, founder of Built 4 More—peer mentorship between high school basketball players and elementary students.",
};

export default function FounderPage() {
  return (
    <>
      <PageHeader
        label="About Abir"
        title={
          <>
            {founder.name.split(" ")[0]}{" "}
            <span className="text-gradient-gold">{founder.name.split(" ")[1]}</span>
          </>
        }
        subtitle={founder.tagline}
      />

      <Section className="overflow-hidden">
        <CourtAccent type="arc" placement="top-right" opacity="opacity-[0.04]" gold />
        <FounderBlock variant="full" />
      </Section>

      <Section dark className="overflow-hidden">
        <CourtAccent type="key" placement="bottom-left" opacity="opacity-[0.03]" />
        <FounderQuote />
      </Section>

      <Section>
        <SectionLabel>What He Believes</SectionLabel>
        <SectionTitle>THE PEER-MENTORSHIP MODEL</SectionTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {founder.principles.map((item, i) => (
            <article
              key={item.title}
              className="court-card-wash rounded-2xl border border-border p-7 sm:p-8"
            >
              <span className="font-[family-name:var(--font-bebas)] text-4xl text-gold/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-bebas)] text-xl tracking-wide">
                {item.title.toUpperCase()}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Connect</SectionLabel>
          <SectionTitle>WORK WITH BUILT 4 MORE</SectionTitle>
          <p className="mt-6 max-w-lg text-muted">
            Sign up your elementary student, apply for Built 4 More, or reach
            out with questions about the program.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Contact Us</Button>
            <Button href="/about" variant="secondary">
              Our Mentors
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

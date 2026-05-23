import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { programs } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Court Sessions and Hoop Lab for elementary students. Mentor Corps for high school basketball players who want to lead.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        label="Programs"
        title={
          <>
            FOR LITTLE BALLERS.
            <br />
            <span className="text-gradient-gold">LED BY BIG ONES.</span>
          </>
        }
        subtitle="Elementary programs are mentored by high school players. Mentor Corps is where those players learn to lead."
      />

      <Section>
        <div className="space-y-8">
          {programs.map((program, index) => (
            <article
              key={program.id}
              id={program.id}
              className="group relative overflow-hidden rounded-2xl border border-border transition-colors hover:border-gold/30"
            >
              <div className="grid lg:grid-cols-5">
                <div className="flex items-center justify-center bg-surface-elevated p-8 lg:col-span-2">
                  <div className="text-center lg:text-left">
                    <span className="font-[family-name:var(--font-bebas)] text-8xl text-gold/20 transition-colors group-hover:text-gold/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gold">
                      {program.ages}
                    </p>
                  </div>
                </div>
                <div className="p-8 lg:col-span-3 lg:p-10">
                  <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide md:text-5xl">
                    {program.name.toUpperCase()}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">
                    {program.duration}
                  </p>
                  <p className="mt-6 leading-relaxed text-muted">
                    {program.description}
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {program.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="text-center">
          <SectionLabel>Next Steps</SectionLabel>
          <SectionTitle className="mx-auto max-w-2xl">
            PARENT OR HIGH SCHOOL PLAYER?
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            Tell us which program fits—you&apos;re signing up a child or applying
            to mentor—and we&apos;ll follow up with dates and details.
          </p>
          <Button href="/contact" className="mt-10">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}

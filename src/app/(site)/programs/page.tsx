import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Court Sessions and Hoop Lab for elementary students. Built 4 More for high school basketball players who want to lead.",
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
        subtitle="Elementary programs are mentored by high school players. Built 4 More is where those players learn to lead."
      />

      <Section className="overflow-hidden">
        <CourtAccent type="arc" placement="top-right" opacity="opacity-[0.04]" gold />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.06),transparent_65%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="court-card-wash relative overflow-hidden rounded-2xl border border-gold/20 bg-surface/40 px-8 py-14 sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.1),transparent_70%)]" />
            <div className="relative">
              <SectionLabel>Programs</SectionLabel>
              <p className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,10vw,5.5rem)] leading-[0.92] tracking-wide">
                COMING
                <br />
                <span className="text-gradient-gold">SOON ...</span>
              </p>
              <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
                Court Sessions, Hoop Lab, and more—full details are on the way.
                Register for Leadership Week while we build out the rest.
              </p>
              <div className="mx-auto mt-8 h-px w-16 bg-gold/40" />
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="text-center">
          <SectionLabel>Next Steps</SectionLabel>
          <SectionTitle className="mx-auto max-w-2xl">
            PARENT OR HIGH SCHOOL PLAYER?
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            Parents: register your K–7 student. High school players: apply for
            Built 4 More. We&apos;ll follow up with dates and details.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/register">Register Student</Button>
            <Button href="/contact" variant="secondary">
              Apply to Mentor
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

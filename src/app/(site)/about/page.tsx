import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FounderBlock } from "@/components/founder/FounderBlock";
import { CourtAccent } from "@/components/visuals/CourtAccent";

export const metadata: Metadata = {
  title: "Our Mentors",
  description:
    "Meet Abir Bajaj, founder of Built 4 More, and the high school Mentor Corps who lead elementary students on the court.",
};

const mentorTraits = [
  "On a school or club basketball team (JV or varsity)",
  "Ready to show up weekly for elementary sessions",
  "Trained on leadership, safety, and how to teach young kids",
  "Supported by adult staff—not left on their own",
];

const whyItWorks = [
  "Elementary kids listen differently to someone closer to their age—less intimidating, more relatable.",
  "High school mentors grow too: patience, communication, and responsibility they carry back to their team.",
  "Basketball is the shared language—drills, games, and huddles that feel like fun, not a lecture.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="People"
        title={
          <>
            FOUNDER &
            <br />
            <span className="text-gradient-gold">MENTORS</span>
          </>
        }
        subtitle="Abir Bajaj built the vision. High school players in Mentor Corps bring it to life on the court for elementary kids."
      />

      <Section className="overflow-hidden">
        <CourtAccent type="hoop" placement="top-right" opacity="opacity-[0.035]" gold />
        <FounderBlock variant="about" />
      </Section>

      <div className="gold-line mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16" />

      <Section>
        <SectionLabel>Mentor Corps</SectionLabel>
        <SectionTitle>WHO LEADS ON THE COURT</SectionTitle>
        <p className="mt-4 max-w-2xl text-muted">
          These are the high school basketball players who run sessions for
          elementary students—trained, supervised, and here to lead.
        </p>

        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-surface-elevated">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-gold/10" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div>
                <p className="font-[family-name:var(--font-bebas)] text-6xl text-gold/25">
                  9TH–12TH
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted">
                  Grade · Mentor Corps
                </p>
                <p className="mt-8 font-[family-name:var(--font-bebas)] text-4xl leading-tight tracking-wide">
                  TEACHING
                  <span className="text-gold"> K–5 </span>
                  ON THE COURT
                </p>
              </div>
            </div>
          </div>

          <div>
            <SectionLabel>On the floor</SectionLabel>
            <SectionTitle>NOT BABYSITTERS. MENTORS.</SectionTitle>
            <div className="mt-8 space-y-6 text-muted leading-relaxed">
              {whyItWorks.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-10 space-y-4 border-t border-border pt-10">
              {mentorTraits.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="h-px w-8 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="font-[family-name:var(--font-bebas)] text-3xl leading-snug tracking-wide md:text-5xl">
            &ldquo;The kid I mentor asked me to help with his crossover.
            <span className="text-gold">
              {" "}
              I realized I&apos;m a leader now—not just a player.&rdquo;
            </span>
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted">
            — Mentor Corps · Grade 10
          </p>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Join</SectionLabel>
          <SectionTitle>PLAY IN HIGH SCHOOL? LEAD HERE.</SectionTitle>
          <p className="mt-6 max-w-lg text-muted">
            Apply for Mentor Corps or sign your elementary student up for Court
            Sessions or Hoop Lab.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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

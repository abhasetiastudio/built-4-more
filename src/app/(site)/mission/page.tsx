import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { pillars } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Built 4 More connects high school basketball mentors with elementary students—for leadership, confidence, and growth on both sides of the court.",
};

const values = [
  {
    title: "Peer Leadership",
    description:
      "High school players learn to lead by serving. Elementary kids learn from someone they can relate to—not a lecture from the sideline.",
  },
  {
    title: "Character First",
    description:
      "Effort, respect, and teamwork matter more than who scores the most. We build people, then players.",
  },
  {
    title: "Safe Structure",
    description:
      "Trained mentors, adult oversight, and sessions designed for young kids—not chaos or cut-down varsity practice.",
  },
  {
    title: "Growth Both Ways",
    description:
      "When a 15-year-old invests in a 4th grader, both walk away more confident, more patient, and more ready to lead.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        label="Our Mission"
        title={
          <>
            WHEN OLDER KIDS
            <br />
            <span className="text-gradient-gold">SHOW UP FOR YOUNGER ONES</span>
          </>
        }
        subtitle="Built 4 More exists because leadership doesn't have to wait until adulthood. High school basketball players have something real to offer elementary students—and something real to gain."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>The Why</SectionLabel>
            <SectionTitle>WHY WE EXIST</SectionTitle>
            <div className="mt-8 space-y-6 text-muted leading-relaxed">
              <p>
                Elementary students look up to high schoolers. That window is
                powerful—if it&apos;s used with intention. We train basketball
                players to mentor younger kids with structure, heart, and skill.
              </p>
              <p>
                For parents: your child gets confidence, fundamentals, and a
                role model who still remembers being nervous at their first
                practice.
              </p>
              <p>
                For mentors: you learn to communicate, teach, and lead—skills
                that show up in the classroom, on your team, and long after you
                graduate.
              </p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface-elevated p-10 flex flex-col justify-center">
            <p className="font-[family-name:var(--font-bebas)] text-5xl leading-tight tracking-wide md:text-6xl">
              HIGH SCHOOL
              <span className="text-gold"> MENTORS.</span>
            </p>
            <p className="mt-6 font-[family-name:var(--font-bebas)] text-5xl leading-tight tracking-wide md:text-6xl">
              ELEMENTARY
              <span className="text-gradient-gold"> LEADERS.</span>
            </p>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionLabel>Core Values</SectionLabel>
        <SectionTitle>WHAT WE STAND FOR</SectionTitle>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-xl border border-border p-8"
            >
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gold">
                {value.title.toUpperCase()}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>For Elementary Kids</SectionLabel>
        <SectionTitle>WHAT WE BUILD ON THE COURT</SectionTitle>
        <p className="mt-6 max-w-2xl text-muted">
          These are the outcomes we track—for every K–5 student in our programs.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="flex items-start gap-4 rounded-lg border border-border p-6"
            >
              <span className="text-gold">{pillar.icon}</span>
              <div>
                <h3 className="font-semibold">{pillar.title}</h3>
                <p className="mt-1 text-sm text-muted">{pillar.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-16 text-center">
          <Button href="/programs">See Programs</Button>
        </div>
      </Section>
    </>
  );
}

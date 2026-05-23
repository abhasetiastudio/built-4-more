import type { Metadata } from "next";
import { FilmGrain } from "@/components/landing/FilmGrain";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNav } from "@/components/landing/LandingNav";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${site.name} | Youth Leadership & Athlete Development`,
  description:
    "High school basketball mentors build confidence and leadership in elementary students—supervised sessions, real peer connection, Built 4 More.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FilmGrain />
      <LandingNav />
      <main>{children}</main>
      <LandingFooter />
    </>
  );
}

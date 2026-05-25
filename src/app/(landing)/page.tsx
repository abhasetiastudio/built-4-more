import { AthleteMindset } from "@/components/home/AthleteMindset";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { LeadershipPillars } from "@/components/home/LeadershipPillars";
import { MissionStatement } from "@/components/home/MissionStatement";
import { ParentTrust } from "@/components/home/ParentTrust";
import { WhatWeBelieve } from "@/components/home/WhatWeBelieve";
import { Marquee } from "@/components/landing/Marquee";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Marquee />
      <MissionStatement />
      <LeadershipPillars />
      <AthleteMindset />
      <ParentTrust />
      <WhatWeBelieve />
      <CtaBanner />
    </>
  );
}

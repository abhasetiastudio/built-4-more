import { LeadershipWeekCta } from "@/components/camp/LeadershipWeekCta";
import { LeadershipWeekDifferentiators } from "@/components/camp/LeadershipWeekDifferentiators";
import { LeadershipWeekFeatured } from "@/components/camp/LeadershipWeekFeatured";
import { LeadershipWeekThemes } from "@/components/camp/LeadershipWeekThemes";
import { LeadershipWeekWhy } from "@/components/camp/LeadershipWeekWhy";

/** Composes all Leadership Week sections — swap or extend for future cohort pages */
export function LeadershipWeek() {
  return (
    <>
      <LeadershipWeekFeatured />
      <LeadershipWeekThemes />
      <LeadershipWeekWhy />
      <LeadershipWeekDifferentiators />
      <LeadershipWeekCta />
    </>
  );
}

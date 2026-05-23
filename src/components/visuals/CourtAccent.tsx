import {
  CenterCourtArc,
  FreeThrowArc,
  HoopMinimal,
  KeyOutline,
  SidelineMarks,
  ThreePointArc,
} from "./CourtMotif";

type AccentType =
  | "arc"
  | "key"
  | "hoop"
  | "center"
  | "sideline"
  | "freethrow";

type Placement =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center-right"
  | "center-left";

type CourtAccentProps = {
  type: AccentType;
  placement?: Placement;
  className?: string;
  /** Tailwind opacity e.g. opacity-[0.04] */
  opacity?: string;
  gold?: boolean;
};

const placementClasses: Record<Placement, string> = {
  "top-right": "top-0 right-0 translate-x-[15%] -translate-y-[10%]",
  "top-left": "top-0 left-0 -translate-x-[15%] -translate-y-[10%]",
  "bottom-right": "bottom-0 right-0 translate-x-[15%] translate-y-[10%]",
  "bottom-left": "bottom-0 left-0 -translate-x-[15%] translate-y-[10%]",
  "center-right": "top-1/2 right-0 translate-x-[20%] -translate-y-1/2",
  "center-left": "top-1/2 left-0 -translate-x-[20%] -translate-y-1/2",
};

const sizeClasses: Record<AccentType, string> = {
  arc: "h-[min(45vw,280px)] w-[min(70vw,420px)]",
  key: "h-[min(50vw,320px)] w-[min(35vw,200px)]",
  hoop: "h-24 w-20 sm:h-28 sm:w-24",
  center: "h-[min(40vw,240px)] w-[min(60vw,360px)]",
  sideline: "h-[min(60vh,400px)] w-10",
  freethrow: "h-28 w-48 sm:h-32 sm:w-56",
};

function Motif({
  type,
  gold,
}: {
  type: AccentType;
  gold?: boolean;
}) {
  const color = gold ? "var(--gold)" : "var(--foreground)";
  const props = { stroke: color, strokeWidth: 1 };

  switch (type) {
    case "arc":
      return <ThreePointArc {...props} className="h-full w-full" />;
    case "key":
      return <KeyOutline {...props} className="h-full w-full" />;
    case "hoop":
      return <HoopMinimal {...props} className="h-full w-full" />;
    case "center":
      return <CenterCourtArc {...props} className="h-full w-full" />;
    case "sideline":
      return <SidelineMarks {...props} className="h-full w-full" />;
    case "freethrow":
      return <FreeThrowArc {...props} className="h-full w-full" />;
  }
}

/** Ambient court geometry — keep opacity low; leadership brand first */
export function CourtAccent({
  type,
  placement = "top-right",
  className = "",
  opacity = "opacity-[0.045]",
  gold = false,
}: CourtAccentProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none ${placementClasses[placement]} ${sizeClasses[type]} ${opacity} text-foreground ${className}`}
    >
      <Motif type={type} gold={gold} />
    </div>
  );
}

/** Inline section divider — arc fragment between blocks */
export function CourtDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative mx-auto my-4 h-16 w-full max-w-md opacity-[0.06] ${className}`}
    >
      <ThreePointArc stroke="var(--gold)" strokeWidth={1} className="h-full w-full" />
      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/40" />
    </div>
  );
}

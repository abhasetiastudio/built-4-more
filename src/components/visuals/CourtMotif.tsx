type MotifProps = {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
};

const defaultStroke = "currentColor";

/** Half-court three-point arc — abstract, editorial */
export function ThreePointArc({
  className,
  stroke = defaultStroke,
  strokeWidth = 1,
}: MotifProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M 10 110 Q 100 -20 190 110"
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Key / paint area — geometric, not literal hardwood */
export function KeyOutline({
  className,
  stroke = defaultStroke,
  strokeWidth = 1,
}: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M 10 160 L 10 50 Q 60 10 110 50 L 110 160"
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="10"
        y1="160"
        x2="110"
        y2="160"
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Center circle segment */
export function CenterCourtArc({
  className,
  stroke = defaultStroke,
  strokeWidth = 1,
}: MotifProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="20"
        y1="100"
        x2="180"
        y2="100"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray="4 8"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Minimal hoop — rim line + backboard, no net cartoon */
export function HoopMinimal({
  className,
  stroke = defaultStroke,
  strokeWidth = 1,
}: MotifProps) {
  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect
        x="18"
        y="8"
        width="44"
        height="6"
        rx="1"
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 12 22 H 68"
        stroke={stroke}
        strokeWidth={strokeWidth * 1.25}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 40 22 V 42"
        stroke={stroke}
        strokeWidth={strokeWidth * 0.75}
        strokeDasharray="2 4"
        opacity="0.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Sideline + hash marks — documentary floor reference */
export function SidelineMarks({
  className,
  stroke = defaultStroke,
  strokeWidth = 1,
}: MotifProps) {
  return (
    <svg
      viewBox="0 0 40 200"
      fill="none"
      aria-hidden
      className={className}
    >
      <line
        x1="20"
        y1="0"
        x2="20"
        y2="200"
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
      {[40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1="8"
          y1={y}
          x2="32"
          y2={y}
          stroke={stroke}
          strokeWidth={strokeWidth * 0.8}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

/** Free-throw semicircle at top of key */
export function FreeThrowArc({
  className,
  stroke = defaultStroke,
  strokeWidth = 1,
}: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M 10 60 A 50 50 0 0 1 110 60"
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

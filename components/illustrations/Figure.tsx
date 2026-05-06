export default function Figure({
  className = "",
  size = 180,
  body = "var(--color-coral)",
  head = "var(--color-peach)",
  stroke = "var(--color-ink)",
  pose = "stretch",
}: {
  className?: string;
  size?: number;
  body?: string;
  head?: string;
  stroke?: string;
  pose?: "stretch" | "think" | "walk";
}) {
  if (pose === "think") {
    return (
      <svg viewBox="0 0 200 240" width={size} height={(size * 240) / 200} className={className} aria-hidden>
        {/* Head */}
        <circle cx="100" cy="50" r="28" fill={head} stroke={stroke} strokeWidth={3.5} />
        {/* Body */}
        <path
          d="M72 80 L 72 150 Q 72 170 86 170 L 116 170 Q 130 170 130 150 L 130 80 Z"
          fill={body}
          stroke={stroke}
          strokeWidth={3.5}
          strokeLinejoin="round"
        />
        {/* Arm bent */}
        <path d="M125 100 Q 160 95 155 70 Q 152 56 138 60" fill={body} stroke={stroke} strokeWidth={3.5} strokeLinejoin="round" />
        {/* Hand at chin */}
        <circle cx="138" cy="60" r="9" fill={head} stroke={stroke} strokeWidth={3} />
        {/* Other arm */}
        <path d="M75 100 Q 60 130 70 160" fill="none" stroke={stroke} strokeWidth={3.5} strokeLinecap="round" />
        {/* Legs */}
        <line x1="88" y1="170" x2="84" y2="220" stroke={stroke} strokeWidth={6} strokeLinecap="round" />
        <line x1="112" y1="170" x2="116" y2="220" stroke={stroke} strokeWidth={6} strokeLinecap="round" />
        {/* Hair */}
        <path d="M76 38 Q 78 22 100 22 Q 122 22 124 38" fill={stroke} stroke={stroke} strokeWidth={3} strokeLinejoin="round" />
        {/* Closed eyes (thinking) */}
        <path d="M88 50 L 95 50" stroke={stroke} strokeWidth={3} strokeLinecap="round" />
        <path d="M105 50 L 112 50" stroke={stroke} strokeWidth={3} strokeLinecap="round" />
      </svg>
    );
  }

  if (pose === "walk") {
    return (
      <svg viewBox="0 0 200 240" width={size} height={(size * 240) / 200} className={className} aria-hidden>
        <circle cx="100" cy="48" r="26" fill={head} stroke={stroke} strokeWidth={3.5} />
        <path d="M76 38 Q 78 22 100 22 Q 122 22 124 38" fill={stroke} />
        {/* Body slightly rotated */}
        <path
          d="M76 76 L 80 150 Q 82 168 96 168 L 112 168 Q 126 168 124 150 L 124 76 Z"
          fill={body}
          stroke={stroke}
          strokeWidth={3.5}
          strokeLinejoin="round"
        />
        {/* Arms swinging */}
        <path d="M80 90 Q 60 120 56 150" stroke={stroke} strokeWidth={6} strokeLinecap="round" fill="none" />
        <path d="M120 90 Q 144 110 142 140" stroke={stroke} strokeWidth={6} strokeLinecap="round" fill="none" />
        {/* Legs walking */}
        <line x1="92" y1="168" x2="74" y2="220" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
        <line x1="112" y1="168" x2="124" y2="220" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="92" cy="48" r="2.5" fill={stroke} />
        <circle cx="108" cy="48" r="2.5" fill={stroke} />
      </svg>
    );
  }

  // stretch (default) - figure with arms up
  return (
    <svg viewBox="0 0 200 240" width={size} height={(size * 240) / 200} className={className} aria-hidden>
      <circle cx="100" cy="60" r="26" fill={head} stroke={stroke} strokeWidth={3.5} />
      <path d="M76 50 Q 78 34 100 34 Q 122 34 124 50" fill={stroke} />
      {/* Body */}
      <path
        d="M78 90 L 78 158 Q 78 176 92 176 L 108 176 Q 122 176 122 158 L 122 90 Z"
        fill={body}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      {/* Arms up */}
      <path d="M80 96 Q 64 60 76 28" stroke={stroke} strokeWidth={6.5} strokeLinecap="round" fill="none" />
      <path d="M120 96 Q 136 60 124 28" stroke={stroke} strokeWidth={6.5} strokeLinecap="round" fill="none" />
      {/* Hands */}
      <circle cx="76" cy="28" r="7" fill={head} stroke={stroke} strokeWidth={3} />
      <circle cx="124" cy="28" r="7" fill={head} stroke={stroke} strokeWidth={3} />
      {/* Legs */}
      <line x1="90" y1="176" x2="82" y2="226" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
      <line x1="110" y1="176" x2="118" y2="226" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
      {/* Eyes (closed/zen) */}
      <path d="M88 60 Q 92 64 96 60" stroke={stroke} strokeWidth={3} fill="none" strokeLinecap="round" />
      <path d="M104 60 Q 108 64 112 60" stroke={stroke} strokeWidth={3} fill="none" strokeLinecap="round" />
    </svg>
  );
}

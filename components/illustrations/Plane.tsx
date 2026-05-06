export default function Plane({
  className = "",
  size = 120,
  fill = "var(--color-cream)",
  stroke = "var(--color-ink)",
  trail = "var(--color-coral)",
}: {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
  trail?: string;
}) {
  return (
    <svg viewBox="0 0 240 160" width={size} height={(size * 160) / 240} className={className} aria-hidden>
      {/* Trail */}
      <path d="M8 110 Q 60 90 100 96" stroke={trail} strokeWidth={3.5} strokeLinecap="round" fill="none" strokeDasharray="2 8" />
      {/* Wing */}
      <path
        d="M100 90 L 220 50 L 180 90 L 220 130 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      {/* Body */}
      <path
        d="M100 90 L 220 50 L 200 90 L 220 130 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      {/* Center fold line */}
      <line x1="100" y1="90" x2="200" y2="90" stroke={stroke} strokeWidth={2} />
    </svg>
  );
}

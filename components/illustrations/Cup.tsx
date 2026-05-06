export default function Cup({
  className = "",
  size = 140,
  body = "var(--color-cream)",
  liquid = "var(--color-coral)",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  body?: string;
  liquid?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden>
      {/* Steam */}
      <path d="M86 30 Q 78 22 86 14" stroke={stroke} strokeWidth={3} fill="none" strokeLinecap="round" />
      <path d="M100 30 Q 92 22 100 14" stroke={stroke} strokeWidth={3} fill="none" strokeLinecap="round" />
      <path d="M114 30 Q 106 22 114 14" stroke={stroke} strokeWidth={3} fill="none" strokeLinecap="round" />
      {/* Cup body */}
      <path
        d="M50 60 L 50 140 Q 50 170 80 170 L 120 170 Q 150 170 150 140 L 150 60 Z"
        fill={body}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      {/* Liquid line */}
      <ellipse cx="100" cy="60" rx="50" ry="10" fill={liquid} stroke={stroke} strokeWidth={3} />
      {/* Handle */}
      <path d="M150 80 Q 184 80 184 110 Q 184 140 150 140" fill="none" stroke={stroke} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M150 92 Q 172 92 172 110 Q 172 128 150 128" fill="none" stroke={stroke} strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}

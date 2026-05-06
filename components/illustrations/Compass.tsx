export default function Compass({
  className = "",
  size = 160,
  body = "var(--color-cream)",
  needle = "var(--color-coral)",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  body?: string;
  needle?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden>
      <circle cx="100" cy="100" r="90" fill={body} stroke={stroke} strokeWidth={3.5} />
      <circle cx="100" cy="100" r="78" fill="none" stroke={stroke} strokeWidth={1.5} opacity={0.4} />
      {/* Cardinal markers */}
      <text x="100" y="36" fontSize="14" fontWeight="700" fontFamily="serif" textAnchor="middle" fill={stroke}>N</text>
      <text x="100" y="174" fontSize="14" fontWeight="700" fontFamily="serif" textAnchor="middle" fill={stroke}>S</text>
      <text x="166" y="105" fontSize="14" fontWeight="700" fontFamily="serif" textAnchor="middle" fill={stroke}>E</text>
      <text x="34" y="105" fontSize="14" fontWeight="700" fontFamily="serif" textAnchor="middle" fill={stroke}>W</text>
      {/* Tick marks */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="22"
          x2="100"
          y2="30"
          stroke={stroke}
          strokeWidth={1.5}
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      {/* Needle (rotates) */}
      <g className="spin-medium" style={{ transformOrigin: "100px 100px" }}>
        <path
          d="M100 30 L 110 100 L 100 170 L 90 100 Z"
          fill={needle}
          stroke={stroke}
          strokeWidth={2.4}
          strokeLinejoin="round"
        />
        <path
          d="M100 100 L 110 100 L 100 30 Z"
          fill="var(--color-cream)"
          stroke={stroke}
          strokeWidth={2.4}
          strokeLinejoin="round"
        />
      </g>
      <circle cx="100" cy="100" r="6" fill={stroke} />
    </svg>
  );
}

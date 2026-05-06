export default function Monstera({
  className = "",
  size = 200,
  fill = "var(--color-sage)",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 200 240" width={size} height={(size * 240) / 200} className={className} aria-hidden>
      {/* leaf body */}
      <path
        d="M100 18 C 130 22 162 50 168 90 C 174 130 162 168 130 192 C 110 206 100 214 100 232 C 100 214 90 206 70 192 C 38 168 26 130 32 90 C 38 50 70 22 100 18 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      {/* center vein */}
      <line x1="100" y1="32" x2="100" y2="220" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      {/* leaf cuts (split fingers) */}
      <path d="M100 60 L 70 70" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M100 60 L 130 70" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M100 100 L 60 110" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M100 100 L 140 110" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M100 140 L 56 152" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M100 140 L 144 152" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M100 180 L 64 192" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M100 180 L 136 192" stroke={stroke} strokeWidth={2.4} strokeLinecap="round" />
      {/* holes (Swiss cheese plant signature) */}
      <ellipse cx="78" cy="128" rx="6" ry="10" fill={stroke} opacity={0.7} />
      <ellipse cx="124" cy="156" rx="5" ry="9" fill={stroke} opacity={0.7} />
      <ellipse cx="86" cy="172" rx="4" ry="7" fill={stroke} opacity={0.7} />
    </svg>
  );
}

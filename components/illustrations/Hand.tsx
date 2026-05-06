export default function Hand({
  className = "",
  size = 90,
  fill = "var(--color-peach)",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} className={className} aria-hidden>
      {/* Palm */}
      <path
        d="M28 60 Q 28 36 42 36 L 42 24 Q 42 14 52 14 Q 62 14 62 24 L 62 36 L 68 36 L 68 18 Q 68 8 78 8 Q 88 8 88 18 L 88 38 L 94 38 L 94 30 Q 94 22 102 22 Q 110 22 110 30 L 110 50 L 110 62 Q 110 74 104 84 L 100 92 Q 92 108 78 116 Q 64 124 50 120 Q 36 116 28 104 Q 18 92 18 78 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      {/* Thumb */}
      <path
        d="M28 76 Q 14 80 8 96 Q 6 108 16 116 Q 28 122 38 110"
        fill={fill}
        stroke={stroke}
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </svg>
  );
}

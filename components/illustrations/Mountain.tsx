export default function Mountain({
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
    <svg viewBox="0 0 200 120" width={size} height={(size * 120) / 200} className={className} aria-hidden>
      <path
        d="M2 110 L 50 30 L 80 70 L 120 18 L 198 110 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path
        d="M40 38 L 50 30 L 60 38 L 50 46 Z"
        fill="white"
        stroke={stroke}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <path
        d="M110 26 L 120 18 L 130 26 L 120 34 Z"
        fill="white"
        stroke={stroke}
        strokeWidth={3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Cloud({
  className = "",
  size = 120,
  fill = "white",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 120"
      width={size}
      height={(size * 120) / 200}
      className={className}
      aria-hidden
    >
      <path
        d="M40 90 Q 18 90 20 70 Q 22 52 42 52 Q 46 28 70 28 Q 92 22 102 42 Q 120 30 140 44 Q 162 38 168 60 Q 184 64 180 84 Q 178 98 162 98 L 50 98 Q 42 98 40 90 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </svg>
  );
}

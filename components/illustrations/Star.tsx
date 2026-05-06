export default function Star({
  className = "",
  size = 60,
  fill = "var(--color-sun)",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden>
      <path
        d="M50 6 L 62 38 L 96 42 L 70 64 L 78 96 L 50 78 L 22 96 L 30 64 L 4 42 L 38 38 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

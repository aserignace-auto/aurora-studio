export default function Lightning({
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
        d="M55 4 L 18 56 L 42 56 L 35 96 L 80 38 L 56 38 L 64 4 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

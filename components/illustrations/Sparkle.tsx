export default function Sparkle({
  className = "",
  size = 40,
  fill = "var(--color-sun)",
  stroke = "var(--color-ink)",
  strokeWidth = 2.5,
}: {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden>
      <path
        d="M50 8 Q 53 44 88 50 Q 53 56 50 92 Q 47 56 12 50 Q 47 44 50 8 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

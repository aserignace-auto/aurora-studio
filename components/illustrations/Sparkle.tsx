export default function Sparkle({
  className = "",
  size = 40,
  fill = "var(--color-sun)",
  stroke = "var(--color-ink)",
  strokeWidth = 3,
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
        d="M50 6 Q 54 42 86 50 Q 54 58 50 94 Q 46 58 14 50 Q 46 42 50 6 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

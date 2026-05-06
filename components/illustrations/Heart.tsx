export default function Heart({
  className = "",
  size = 60,
  fill = "var(--color-coral)",
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
        d="M50 86 C 30 70 8 56 8 36 C 8 22 18 12 32 12 C 40 12 46 16 50 24 C 54 16 60 12 68 12 C 82 12 92 22 92 36 C 92 56 70 70 50 86 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

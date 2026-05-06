export default function Squiggle({
  className = "",
  width = 200,
  height = 24,
  stroke = "var(--color-ink)",
  strokeWidth = 4,
}: {
  className?: string;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <svg viewBox="0 0 200 24" width={width} height={height} className={className} aria-hidden>
      <path
        d="M2 12 Q 16 2 30 12 T 58 12 T 86 12 T 114 12 T 142 12 T 170 12 T 198 12"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

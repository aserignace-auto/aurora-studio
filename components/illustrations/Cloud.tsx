export default function Cloud({
  className = "",
  size = 120,
  fill = "var(--color-cream)",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 100"
      width={size}
      height={(size * 100) / 200}
      className={className}
      aria-hidden
    >
      <path
        d="M40 78 Q 22 78 22 60 Q 22 42 42 42 Q 50 22 72 22 Q 90 22 98 38 Q 110 28 128 38 Q 148 32 154 56 Q 174 56 174 74 Q 174 88 158 88 L 50 88 Q 40 88 40 78 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Eye({
  className = "",
  size = 100,
  iris = "var(--color-cobalt)",
  fill = "var(--color-cream)",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  iris?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 200 100" width={size} height={size / 2} className={className} aria-hidden>
      <path
        d="M10 50 Q 100 4 190 50 Q 100 96 10 50 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      <circle cx="100" cy="50" r="20" fill={iris} stroke={stroke} strokeWidth={2.5} />
      <circle cx="100" cy="50" r="8" fill={stroke} />
      <circle cx="106" cy="46" r="3" fill={fill} />
    </svg>
  );
}

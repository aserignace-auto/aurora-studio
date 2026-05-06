export default function Eye({
  className = "",
  size = 80,
  iris = "var(--color-cobalt)",
  fill = "white",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  iris?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 200 120" width={size} height={(size * 120) / 200} className={className} aria-hidden>
      <path
        d="M10 60 Q 100 0 190 60 Q 100 120 10 60 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <circle cx="100" cy="60" r="22" fill={iris} stroke={stroke} strokeWidth={3} />
      <circle cx="100" cy="60" r="9" fill={stroke} />
      <circle cx="105" cy="55" r="3.5" fill="white" />
      {/* lashes */}
      <path d="M40 30 L 32 18" stroke={stroke} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M70 14 L 67 0" stroke={stroke} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M100 8 L 100 -8" stroke={stroke} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M130 14 L 133 0" stroke={stroke} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M160 30 L 168 18" stroke={stroke} strokeWidth={3.5} strokeLinecap="round" />
    </svg>
  );
}

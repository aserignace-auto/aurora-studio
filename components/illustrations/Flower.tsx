export default function Flower({
  className = "",
  size = 100,
  petal = "var(--color-coral)",
  center = "var(--color-sun)",
  stroke = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  petal?: string;
  center?: string;
  stroke?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="50"
          rx="22"
          ry="38"
          transform={`rotate(${i * 60} 100 100)`}
          fill={petal}
          stroke={stroke}
          strokeWidth={3.5}
          strokeLinejoin="round"
        />
      ))}
      <circle cx="100" cy="100" r="20" fill={center} stroke={stroke} strokeWidth={3.5} />
      <circle cx="93" cy="95" r="3" fill={stroke} />
      <circle cx="107" cy="95" r="3" fill={stroke} />
      <path d="M92 106 Q 100 113 108 106" fill="none" stroke={stroke} strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}

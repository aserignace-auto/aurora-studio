"use client";

export default function Sun({
  className = "",
  size = 240,
  color = "var(--color-sun)",
  outline = "var(--color-ink)",
  rays = 16,
}: {
  className?: string;
  size?: number;
  color?: string;
  outline?: string;
  rays?: number;
}) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 spin-medium" aria-hidden>
        {Array.from({ length: rays }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="14"
            x2="100"
            y2="34"
            stroke={outline}
            strokeWidth={3}
            strokeLinecap="round"
            transform={`rotate(${(i * 360) / rays} 100 100)`}
          />
        ))}
      </svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0" aria-hidden>
        <circle cx="100" cy="100" r="56" fill={color} stroke={outline} strokeWidth={3.5} />
        <circle cx="100" cy="100" r="42" fill="none" stroke={outline} strokeWidth={1.4} opacity={0.35} />
      </svg>
    </div>
  );
}

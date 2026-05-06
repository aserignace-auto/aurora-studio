"use client";

export default function Vinyl({
  className = "",
  size = 220,
  body = "var(--color-ink)",
  label = "var(--color-coral)",
  accent = "var(--color-sun)",
  outline = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  body?: string;
  label?: string;
  accent?: string;
  outline?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 spin-slow" aria-hidden>
        <circle cx="100" cy="100" r="92" fill={body} stroke={outline} strokeWidth={3} />
        {[88, 80, 72, 64, 56, 48].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
        ))}
        <circle cx="100" cy="100" r="40" fill={label} stroke={outline} strokeWidth={2.5} />
        <circle cx="100" cy="100" r="22" fill={accent} stroke={outline} strokeWidth={2} />
        <circle cx="100" cy="100" r="3.5" fill={outline} />
        {/* shine highlight */}
        <path d="M55 60 Q 80 35 130 50" stroke="rgba(255,255,255,0.12)" strokeWidth={3} fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

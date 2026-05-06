"use client";

export default function Sun({
  className = "",
  size = 240,
  face = true,
  spin = true,
  color = "var(--color-sun)",
  cheek = "var(--color-coral)",
  outline = "var(--color-ink)",
}: {
  className?: string;
  size?: number;
  face?: boolean;
  spin?: boolean;
  color?: string;
  cheek?: string;
  outline?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      {/* Spinning rays layer */}
      <svg
        viewBox="0 0 200 200"
        className={`absolute inset-0 ${spin ? "spin-slow" : ""}`}
        aria-hidden
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 100 100)`}>
            <path
              d="M100 8 L 96 28 L 104 28 Z"
              fill={color}
              stroke={outline}
              strokeWidth={3}
              strokeLinejoin="round"
            />
          </g>
        ))}
      </svg>
      {/* Body + face static */}
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <circle cx="100" cy="100" r="58" fill={color} stroke={outline} strokeWidth={4} />
        {face && (
          <g>
            {/* cheeks */}
            <ellipse cx="78" cy="108" rx="8" ry="5" fill={cheek} opacity={0.8} />
            <ellipse cx="122" cy="108" rx="8" ry="5" fill={cheek} opacity={0.8} />
            {/* eyes */}
            <circle cx="84" cy="94" r="4.2" fill={outline} />
            <circle cx="116" cy="94" r="4.2" fill={outline} />
            <circle cx="85" cy="92.5" r="1.4" fill="white" />
            <circle cx="117" cy="92.5" r="1.4" fill="white" />
            {/* smile */}
            <path
              d="M82 116 Q 100 132 118 116"
              stroke={outline}
              strokeWidth={4}
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

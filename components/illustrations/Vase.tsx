export default function Vase({
  className = "",
  size = 180,
  body = "var(--color-coral)",
  flower = "var(--color-sun)",
  stroke = "var(--color-ink)",
  stem = "var(--color-sage)",
}: {
  className?: string;
  size?: number;
  body?: string;
  flower?: string;
  stroke?: string;
  stem?: string;
}) {
  return (
    <svg viewBox="0 0 200 240" width={size} height={(size * 240) / 200} className={className} aria-hidden>
      {/* Stems */}
      <path d="M100 130 L 88 60" stroke={stem} strokeWidth={3.5} strokeLinecap="round" fill="none" />
      <path d="M100 130 L 100 40" stroke={stem} strokeWidth={3.5} strokeLinecap="round" fill="none" />
      <path d="M100 130 L 116 70" stroke={stem} strokeWidth={3.5} strokeLinecap="round" fill="none" />
      {/* Leaves */}
      <ellipse cx="80" cy="86" rx="10" ry="5" fill={stem} stroke={stroke} strokeWidth={2} transform="rotate(-25 80 86)" />
      <ellipse cx="120" cy="92" rx="10" ry="5" fill={stem} stroke={stroke} strokeWidth={2} transform="rotate(25 120 92)" />
      {/* Flower heads */}
      <circle cx="88" cy="58" r="13" fill={flower} stroke={stroke} strokeWidth={2.6} />
      <circle cx="100" cy="38" r="14" fill="var(--color-rose)" stroke={stroke} strokeWidth={2.6} />
      <circle cx="116" cy="68" r="11" fill="var(--color-lavender)" stroke={stroke} strokeWidth={2.6} />
      {/* Vase body */}
      <path
        d="M70 130 L 70 140 Q 60 158 60 180 Q 60 218 100 220 Q 140 218 140 180 Q 140 158 130 140 L 130 130 Z"
        fill={body}
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      {/* Vase neck rim */}
      <line x1="68" y1="132" x2="132" y2="132" stroke={stroke} strokeWidth={3.5} strokeLinecap="round" />
      {/* Highlight */}
      <path d="M76 148 Q 70 175 76 200" stroke="rgba(255,255,255,0.35)" strokeWidth={4} strokeLinecap="round" fill="none" />
    </svg>
  );
}

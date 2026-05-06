export default function Blob({
  className = "",
  size = 240,
  fill = "var(--color-coral)",
  stroke = "var(--color-ink)",
  variant = 1,
}: {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
  variant?: 1 | 2 | 3;
}) {
  const paths = {
    1: "M150 30 Q 220 20 240 90 Q 260 160 200 200 Q 140 240 80 210 Q 20 180 20 110 Q 20 40 90 30 Q 120 26 150 30 Z",
    2: "M120 20 Q 200 10 230 70 Q 270 130 230 190 Q 190 250 110 230 Q 30 210 20 140 Q 10 70 60 40 Q 90 22 120 20 Z",
    3: "M140 24 Q 210 30 240 100 Q 260 170 200 220 Q 130 260 70 220 Q 10 180 20 110 Q 30 40 90 24 Q 115 18 140 24 Z",
  };
  return (
    <svg viewBox="0 0 280 260" width={size} height={(size * 260) / 280} className={className} aria-hidden>
      <path
        d={paths[variant]}
        fill={fill}
        stroke={stroke}
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </svg>
  );
}

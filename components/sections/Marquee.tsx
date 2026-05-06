"use client";

const items = [
  "Direction",
  "Cinematography",
  "Editorial photography",
  "Fashion films",
  "Brand worlds",
  "Music videos",
  "Documentary",
  "Commercials",
];

export default function Marquee() {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-bone/15 bg-ink py-5">
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-7 px-7 font-anton text-[clamp(28px,4vw,56px)] uppercase tracking-tight text-bone"
          >
            {it}
            <span className="block h-2 w-2 rotate-45 bg-blood" />
          </span>
        ))}
      </div>
    </div>
  );
}

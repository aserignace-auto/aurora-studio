"use client";

const items = [
  "Spatial Audio",
  "AI Noise Cancel",
  "50-hour battery",
  "Hi-Res Lossless",
  "Bluetooth 5.4",
  "268 grams",
  "Aluminum cabinet",
  "Drop · 15.07.2026",
];

export default function Marquee() {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-bone/10 bg-ink py-5">
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-8 px-6 font-mono text-sm uppercase tracking-[0.22em] text-bone-dim sm:text-[15px]">
            <span className="block h-[3px] w-[3px] rotate-45 bg-electric" />
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

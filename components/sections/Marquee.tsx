"use client";

import Sparkle from "@/components/illustrations/Sparkle";
import Squiggle from "@/components/illustrations/Squiggle";

type DecoKey = "sparkle" | "dot" | "squiggle";

function Deco({ kind, color }: { kind: DecoKey; color: string }) {
  if (kind === "sparkle") return <Sparkle size={28} fill={color} />;
  if (kind === "squiggle") return <Squiggle width={60} height={14} stroke={color} strokeWidth={3} />;
  return (
    <span
      className="block h-3 w-3 rounded-full"
      style={{ background: color, border: "2px solid var(--color-ink)" }}
    />
  );
}

export default function Marquee({
  items,
  bg = "var(--color-coral)",
  text = "var(--color-cream)",
  speed = "normal",
  decoKind = "sparkle",
  decoColor = "var(--color-sun)",
}: {
  items: string[];
  bg?: string;
  text?: string;
  speed?: "normal" | "fast";
  decoKind?: DecoKey;
  decoColor?: string;
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y-[2.5px] border-ink py-3"
      style={{ background: bg, color: text }}
    >
      <div className={`marquee-track ${speed === "fast" ? "marquee-fast" : ""} flex whitespace-nowrap`}>
        {doubled.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-7 px-6 font-display text-[clamp(34px,5.6vw,76px)] font-medium tracking-tight"
          >
            {it}
            <span className="inline-flex items-center">
              <Deco kind={decoKind} color={decoColor} />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

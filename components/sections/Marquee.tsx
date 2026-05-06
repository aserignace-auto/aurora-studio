"use client";

import Star from "@/components/illustrations/Star";
import Heart from "@/components/illustrations/Heart";
import Flower from "@/components/illustrations/Flower";
import Sparkle from "@/components/illustrations/Sparkle";

type DecoKey = "star" | "heart" | "flower" | "sparkle";

function Deco({ kind, color }: { kind: DecoKey; color: string }) {
  const props = { size: 36 };
  if (kind === "star") return <Star {...props} fill={color} />;
  if (kind === "heart") return <Heart {...props} fill={color} />;
  if (kind === "sparkle") return <Sparkle {...props} fill={color} />;
  return <Flower size={36} petal={color} center="var(--color-sun)" />;
}

export default function Marquee({
  items,
  bg = "var(--color-coral)",
  text = "var(--color-cream)",
  speed = "normal",
  decoKind = "star",
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
            className="flex items-center gap-6 px-6 font-display text-[clamp(34px,5.6vw,76px)] font-medium tracking-tight"
          >
            {it}
            <span className="inline-block">
              <Deco kind={decoKind} color={decoColor} />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

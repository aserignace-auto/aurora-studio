"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Marquee({
  items,
  speed = "normal",
  italic = false,
  size = "lg",
}: {
  items: string[];
  speed?: "normal" | "fast";
  italic?: boolean;
  size?: "md" | "lg" | "xl";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const skew = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  const sizeMap = {
    md: "text-[clamp(40px,7vw,90px)]",
    lg: "text-[clamp(56px,11vw,160px)]",
    xl: "text-[clamp(80px,16vw,240px)]",
  };

  const doubled = [...items, ...items];

  return (
    <motion.div
      ref={ref}
      style={{ skewY: skew }}
      className="overflow-hidden border-y border-bone/10 py-3"
    >
      <div className={`marquee-track ${speed === "fast" ? "marquee-fast" : ""} flex whitespace-nowrap`}>
        {doubled.map((it, i) => (
          <span
            key={i}
            className={`flex items-center px-6 font-serif ${sizeMap[size]} ${italic ? "italic" : ""} text-bone`}
          >
            {it}
            <span aria-hidden className="ml-12 inline-block h-3 w-3 rounded-full bg-lime" />
          </span>
        ))}
      </div>
    </motion.div>
  );
}

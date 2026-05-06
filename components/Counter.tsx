"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  to,
  duration = 1.6,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(prefix + (0).toFixed(decimals) + suffix);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => {
        setDisplay(prefix + v.toFixed(decimals) + suffix);
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, prefix, suffix, decimals]);

  return <span ref={ref}>{display}</span>;
}

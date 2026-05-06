"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) {
      setEnabled(false);
      document.body.style.cursor = "auto";
      return;
    }

    let dx = 0, dy = 0;
    let rx = 0, ry = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor], input, textarea, [role='button']") as HTMLElement | null;
      setHover(!!interactive);
      const cursorLabel = interactive?.getAttribute("data-cursor");
      setLabel(cursorLabel || null);
    };

    let raf = 0;
    const animate = () => {
      rx += (dx - rx) * 0.6;
      ry += (dy - ry) * 0.6;
      ringX += (dx - ringX) * 0.16;
      ringY += (dy - ringY) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-bone"
        style={{ willChange: "transform", mixBlendMode: "difference" }}
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full transition-[width,height,background,border-color] duration-300"
        style={{
          width: hover ? (label ? 88 : 56) : 38,
          height: hover ? (label ? 88 : 56) : 38,
          background: hover ? "rgba(45, 107, 255, 0.16)" : "transparent",
          border: hover ? "1.5px solid rgba(91, 138, 255, 0.7)" : "1.5px solid rgba(244, 243, 239, 0.28)",
          willChange: "transform, width, height",
          backdropFilter: hover ? "blur(2px)" : "none",
        }}
      >
        {label && (
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-bone">
            {label}
          </span>
        )}
      </div>
    </>
  );
}

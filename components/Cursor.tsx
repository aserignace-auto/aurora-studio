"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(true);

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
      const interactive =
        !!target?.closest("a, button, [data-cursor-grow], input, textarea, [role='button']");
      setHover(interactive);
    };

    let raf = 0;
    const animate = () => {
      rx += (dx - rx) * 0.55;
      ry += (dy - ry) * 0.55;
      ringX += (dx - ringX) * 0.18;
      ringY += (dy - ringY) * 0.18;
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
        style={{ willChange: "transform" }}
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-bone/50 transition-[width,height,background,border-color] duration-300"
        style={{
          width: hover ? 64 : 36,
          height: hover ? 64 : 36,
          background: hover ? "rgba(216, 255, 58, 0.15)" : "transparent",
          borderColor: hover ? "rgba(216, 255, 58, 0.7)" : "rgba(243, 236, 224, 0.3)",
          willChange: "transform, width, height",
          mixBlendMode: hover ? "normal" : "difference",
        }}
      />
    </>
  );
}

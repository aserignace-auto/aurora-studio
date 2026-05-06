"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Hero image with parallax */}
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 -z-10"
      >
        <picture>
          <img
            src="https://picsum.photos/seed/obscura-hero-paris-night/2400/1600?grayscale"
            alt="Cinematic still"
            className="cinema h-full w-full object-cover"
          />
        </picture>
      </motion.div>

      {/* Vignette overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        aria-hidden
        className="absolute inset-0 -z-[5] bg-gradient-to-b from-void/30 via-void/45 to-void"
      />

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 mx-auto flex w-full max-w-[1480px] items-start justify-between px-5 pt-24 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim sm:px-10 sm:pt-28"
      >
        <div className="flex flex-col gap-1">
          <span className="text-bone">Reel · MMXXVI</span>
          <span>Independent direction</span>
        </div>
        <div className="hidden flex-col items-end gap-1 sm:flex">
          <span>48.8566° N · 2.3522° E</span>
          <span>15mm · ƒ/1.4 · 24fps</span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 mt-auto px-5 pb-12 sm:px-10 sm:pb-16"
      >
        <div className="mx-auto max-w-[1480px]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="block font-anton text-[clamp(80px,18vw,300px)] uppercase leading-[0.84] text-bone"
            >
              OBSCURA
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="block font-display text-[clamp(28px,4vw,64px)] italic leading-[1.05] tracking-tight text-bone-dim"
            >
              A film &amp; photography studio.
            </motion.span>
          </span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-12 grid grid-cols-1 items-end gap-8 sm:grid-cols-12"
          >
            <p className="max-w-md text-base leading-relaxed text-bone-dim sm:col-span-5 sm:text-lg">
              Independent direction for brands, labels and luxury houses.
              Films, editorial photography, and brand worlds, made in Paris.
            </p>
            <div className="flex items-center justify-start gap-3 sm:col-span-3 sm:col-start-7 sm:justify-center">
              <div className="flex h-10 items-end gap-[3px]">
                {Array.from({ length: 14 }).map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ scaleY: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.6 + (i % 4) * 0.3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: i * 0.08,
                    }}
                    className="block w-px origin-bottom bg-bone/50"
                    style={{ height: 14 + (i % 5) * 4 }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 sm:col-span-3 sm:col-start-10 sm:justify-end">
              <a
                href="#films"
                data-cursor="reel"
                className="group inline-flex items-center gap-3 border border-bone/30 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-bone transition-all hover:border-blood hover:bg-blood/10 hover:text-blood"
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-blood" />
                Watch reel
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom timecode strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="relative z-10 flex items-center justify-between border-t border-bone/15 bg-void/30 px-5 py-3 backdrop-blur-md sm:px-10"
      >
        <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim">
          <span className="text-blood">● REC</span>
          <span>00:00:01:14</span>
          <span className="hidden sm:inline">CAM_A</span>
          <span className="hidden sm:inline">REEL_001</span>
        </div>
        <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim">
          <span>SCROLL</span>
          <span className="block h-3 w-px bg-bone/30" />
          <span>↓</span>
        </div>
      </motion.div>
    </section>
  );
}

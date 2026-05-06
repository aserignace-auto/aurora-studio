"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Headphones, { COLORS } from "@/components/Headphones";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  // Cursor parallax for headphones
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-1, 1], [-22, 22]), {
    stiffness: 80,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-1, 1], [12, -12]), {
    stiffness: 80,
    damping: 18,
  });

  // Scroll-driven hero
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const productScale = useTransform(scrollYProgress, [0, 1], [1, 0.78]);
  const productOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.1]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = productRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX - cx) / (w * 0.5));
      my.set((e.clientY - cy) / (h * 0.5));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-4 pb-16 pt-24 sm:px-10 sm:pt-32"
    >
      {/* Star field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(45,107,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(107,63,245,0.12),transparent_55%)]" />
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="star absolute block h-[2px] w-[2px] rounded-full bg-bone"
            style={{
              top: `${(i * 73) % 100}%`,
              left: `${(i * 37) % 100}%`,
              opacity: 0.3 + ((i % 5) * 0.12),
              animationDelay: `${(i % 7) * -0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Top status row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="relative z-10 mx-auto flex w-full max-w-[1480px] items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint"
      >
        <div className="flex items-center gap-3">
          <span className="block h-1.5 w-1.5 rounded-full bg-sage" />
          <span className="text-bone-dim">Drop scheduled</span>
          <span>·</span>
          <span>15.07.2026</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <span>N°001</span>
          <span>·</span>
          <span>Limited release</span>
        </div>
      </motion.div>

      {/* Watermark */}
      <motion.h1
        style={{ y: watermarkY, opacity: watermarkOpacity }}
        className="pointer-events-none relative z-0 mt-8 select-none text-center font-anton text-[clamp(140px,28vw,460px)] uppercase leading-[0.82] tracking-[-0.04em]"
        aria-label="Aurion One"
      >
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="block bg-gradient-to-b from-bone via-bone-dim to-transparent bg-clip-text text-transparent"
        >
          AURION
        </motion.span>
      </motion.h1>

      {/* Product */}
      <motion.div
        ref={productRef}
        style={{ y: productY, scale: productScale, opacity: productOpacity }}
        className="pointer-events-none absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          {/* Glow under product */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/30 blur-[100px] sm:h-[560px] sm:w-[560px]" />
          <Headphones
            size={420}
            color={COLORS.obsidian}
            rotateY={rotateY}
            rotateX={rotateX}
            className="sm:!w-[480px] sm:!h-[480px] md:!w-[560px] md:!h-[560px]"
          />
        </motion.div>
      </motion.div>

      {/* Bottom content */}
      <div className="relative z-10 mt-auto flex flex-col gap-10 pt-[44vh] sm:pt-[36vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto w-full max-w-[1480px] grid grid-cols-1 gap-8 sm:grid-cols-12"
        >
          <div className="sm:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-faint">
              [The next generation]
            </p>
            <h2 className="mt-3 font-display text-[clamp(28px,3vw,40px)] font-medium leading-tight tracking-tight text-bone">
              Spatial audio,
              <br />
              <span className="italic text-electric-glow">re-engineered</span>.
            </h2>
          </div>

          <p className="text-base leading-relaxed text-bone-dim sm:col-span-4 sm:col-start-6 sm:text-lg">
            AI-powered noise cancellation, hi-res lossless playback, and a
            50-hour battery in a 268-gram cabinet. Designed for those who hear
            the difference.
          </p>

          <div className="flex flex-col items-start gap-3 sm:col-span-3 sm:col-start-10 sm:items-end">
            <Magnetic strength={0.4}>
              <a
                href="#preorder"
                data-cursor="reserve"
                className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-void transition-colors hover:bg-electric hover:text-white"
              >
                Reserve · €399
                <svg width="16" height="16" viewBox="0 0 16 16" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8 H 13 M9 4 L 13 8 L 9 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Magnetic>
            <a href="#sound" data-cursor="watch" className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-bone">
              Watch demo →
            </a>
          </div>
        </motion.div>

        {/* Indicator dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mx-auto flex items-end gap-1"
        >
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.span
              key={i}
              animate={{ scaleY: [0.4, 1, 0.4] }}
              transition={{
                duration: 2.4 + (i % 5) * 0.3,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.05,
              }}
              className="block w-px origin-bottom bg-bone/30"
              style={{ height: 18 + (i % 6) * 4 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  { id: "01", url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80", caption: "Helena · Madrid · 2026", w: "tall" },
  { id: "02", url: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=1200&q=80", caption: "Aether · Lyon · 2025", w: "wide" },
  { id: "03", url: "https://images.unsplash.com/photo-1571023074898-1ada93996c0a?auto=format&fit=crop&w=1200&q=80", caption: "Atlas · Tokyo · 2025", w: "square" },
  { id: "04", url: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=80", caption: "Late Bloom · Paris · 2025", w: "tall" },
  { id: "05", url: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80", caption: "Spectre · Berlin · 2024", w: "wide" },
  { id: "06", url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80", caption: "North · Iceland · 2024", w: "square" },
];

export default function Photography() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -80]);

  return (
    <section
      ref={ref}
      id="index"
      className="relative overflow-hidden bg-ink px-5 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1480px]">
        <motion.div
          style={{ y: titleY }}
          className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:col-span-3">
            [03] / Photography
          </span>
          <div className="sm:col-span-9">
            <h2 className="font-anton text-[clamp(56px,9vw,180px)] uppercase leading-[0.86] tracking-tight">
              <span className="text-bone">Stills.</span>{" "}
              <span className="italic font-display text-bone-dim">Selected.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 sm:gap-5">
          {images.map((img, i) => {
            const span =
              img.w === "tall"
                ? "col-span-12 sm:col-span-5 aspect-[3/4]"
                : img.w === "wide"
                ? "col-span-12 sm:col-span-7 aspect-[16/10]"
                : "col-span-12 sm:col-span-5 sm:col-start-auto aspect-square";
            const offset = i % 3 === 1 ? "sm:translate-y-12" : i % 3 === 2 ? "sm:-translate-y-6" : "";
            return (
              <motion.figure
                key={img.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ scale: 1.01 }}
                className={`group relative overflow-hidden ${span} ${offset}`}
                data-cursor="zoom"
              >
                <motion.img
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
                  src={img.url}
                  alt={img.caption}
                  className="cinema absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 flex translate-y-3 items-center justify-between p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                  <span>{img.id}</span>
                  <span className="text-right">{img.caption}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Headphones, { COLORS } from "@/components/Headphones";

const swatches = [
  { id: "obsidian", label: "Obsidian", hex: "#1a1a1f", text: "var(--color-bone)" },
  { id: "bone", label: "Bone", hex: "#f0eee6", text: "var(--color-void)" },
  { id: "cobalt", label: "Cobalt", hex: "#1f3da8", text: "var(--color-bone)" },
  { id: "amber", label: "Amber", hex: "#c87a1e", text: "var(--color-void)" },
];

export default function Color() {
  const [active, setActive] = useState("obsidian");
  const color = COLORS[active];

  return (
    <section id="color" className="relative px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 flex flex-col items-start gap-3 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-glow">
              [02] Color
            </p>
            <h2 className="mt-3 font-anton text-[clamp(56px,9vw,156px)] uppercase leading-[0.88] tracking-tight text-bone">
              Pick a finish.
            </h2>
          </div>
          <p className="max-w-sm text-base text-bone-dim sm:text-lg">
            Four hand-finished anodized aluminum colorways. Click to preview, the
            product reflows in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Product */}
          <div className="relative flex h-[440px] items-center justify-center rounded-[36px] border border-bone/10 bg-ink lg:col-span-7 lg:h-[600px]">
            <div className="absolute left-1/2 top-1/2 -z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
                 style={{ background: `${color.trim}40` }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -16 }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative"
              >
                <Headphones size={460} color={color} />
              </motion.div>
            </AnimatePresence>

            {/* Color name overlay */}
            <div className="absolute left-6 top-6 flex items-center gap-2.5">
              <span className="block h-2 w-2 rounded-full" style={{ background: color.trim }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-dim">
                Aurion One ·{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block text-bone"
                  >
                    {swatches.find((s) => s.id === active)?.label}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </div>

          {/* Swatch picker */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {swatches.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(s.id)}
                data-cursor="select"
                className={`group relative flex items-center gap-5 overflow-hidden rounded-2xl border p-5 text-left transition-all sm:p-6 ${
                  active === s.id ? "border-electric bg-ink" : "border-bone/10 bg-ink-2 hover:border-bone/20"
                }`}
              >
                <div className="relative">
                  <span
                    className="block h-14 w-14 rounded-full border border-bone/10"
                    style={{ background: s.hex }}
                  />
                  {active === s.id && (
                    <motion.span
                      layoutId="active-ring"
                      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      className="absolute inset-[-6px] rounded-full border-2 border-electric"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-anton text-3xl uppercase leading-none tracking-tight text-bone">
                    {s.label}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">
                    Anodized aluminum · in stock
                  </div>
                </div>
                <span className="text-bone-dim transition-transform group-hover:translate-x-1">
                  →
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

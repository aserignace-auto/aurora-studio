"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-void px-5 pt-20 sm:px-10">
      <motion.div
        style={{ y }}
        className="pointer-events-none mx-auto max-w-[1480px]"
      >
        <h3 className="select-none font-anton text-[clamp(120px,24vw,420px)] uppercase leading-[0.82] tracking-[-0.04em]">
          <span className="block bg-gradient-to-b from-bone via-bone-dim to-transparent bg-clip-text text-transparent">
            AURION
          </span>
        </h3>
      </motion.div>

      <div className="relative mx-auto -mt-6 grid max-w-[1480px] grid-cols-2 gap-8 border-t border-bone/10 pt-12 sm:grid-cols-12 sm:gap-10">
        <div className="col-span-2 sm:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">Studio</span>
          <p className="mt-3 text-base text-bone">
            42 rue de Turenne
            <br />
            75003 Paris, FR
          </p>
        </div>
        <div className="sm:col-span-3 sm:col-start-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">Product</span>
          <ul className="mt-3 flex flex-col gap-1.5 text-base">
            <li><a href="#sound" className="text-bone transition-colors hover:text-electric-glow">Sound</a></li>
            <li><a href="#color" className="text-bone transition-colors hover:text-electric-glow">Colors</a></li>
            <li><a href="#specs" className="text-bone transition-colors hover:text-electric-glow">Specs</a></li>
            <li><a href="#preorder" className="text-bone transition-colors hover:text-electric-glow">Pre-order</a></li>
          </ul>
        </div>
        <div className="sm:col-span-3 sm:col-start-9">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">Newsletter</span>
          <form className="mt-3 flex gap-2 rounded-full border border-bone/15 bg-ink p-1.5">
            <input
              type="email"
              placeholder="you@somewhere.com"
              className="flex-1 bg-transparent px-3 text-sm text-bone outline-none placeholder:text-bone-faint"
            />
            <button
              type="button"
              data-cursor="join"
              className="rounded-full bg-bone px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-void transition-colors hover:bg-electric hover:text-white"
            >
              Join
            </button>
          </form>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
            Drop alerts · Limited edition news
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1480px] flex-col items-start justify-between gap-3 border-t border-bone/10 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:flex-row sm:items-center">
        <span>© Aurion Audio 2026</span>
        <span>Designed in Paris · Engineered in Lyon · Assembled with care</span>
        <span>v1.0 · 800 units</span>
      </div>
    </footer>
  );
}

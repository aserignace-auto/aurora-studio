"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 7) + 3;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 380);
      }
      setCount(value);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-between bg-ink p-8 sm:p-10"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-end gap-4 sm:gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
              Aurora / 2026
            </span>
          </div>
          <div className="flex items-end gap-3 font-serif tabular-nums text-bone">
            <span className="text-[clamp(80px,16vw,240px)] leading-none italic">
              {String(count).padStart(3, "0")}
            </span>
            <span className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim sm:mb-4">
              %
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Magnetic from "@/components/Magnetic";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function PreOrder() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date("2026-07-15T10:00:00Z").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff / 3_600_000) % 24);
      const m = Math.floor((diff / 60_000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTime({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="preorder"
      className="relative isolate overflow-hidden bg-electric px-5 py-32 sm:px-10 sm:py-44"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-violet/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-amber/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1480px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/70"
        >
          [05] Pre-order
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 font-anton text-[clamp(72px,15vw,260px)] uppercase leading-[0.84] tracking-tight text-white"
        >
          15 · 07
          <br />
          <span className="italic font-display">2026</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-mono text-sm uppercase tracking-[0.22em] text-white/80"
        >
          Limited release · 800 units worldwide
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-4 gap-3 sm:gap-5"
        >
          {[
            { v: time.d, l: "days" },
            { v: time.h, l: "hours" },
            { v: time.m, l: "min" },
            { v: time.s, l: "sec" },
          ].map((u) => (
            <div
              key={u.l}
              className="rounded-2xl border border-white/15 bg-void/30 p-4 backdrop-blur-md sm:p-6"
            >
              <div className="font-anton text-[clamp(34px,6vw,80px)] tabular-nums leading-none tracking-tight text-white">
                {pad(u.v)}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                {u.l}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
        >
          <Magnetic strength={0.5}>
            <a
              href="#"
              data-cursor="reserve"
              className="group inline-flex items-center gap-3 rounded-full bg-void px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-bone transition-colors hover:bg-bone hover:text-void"
            >
              Reserve · €399
              <span className="block h-1.5 w-1.5 rounded-full bg-electric transition-colors group-hover:bg-void" />
            </a>
          </Magnetic>

          <Magnetic strength={0.4}>
            <a
              href="#sound"
              data-cursor="watch"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
            >
              Watch demo
              <span>↗</span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Headphones, { COLORS } from "@/components/Headphones";

export default function Sound() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const productRotateY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const productY = useTransform(scrollYProgress, [0, 1], [60, -120]);
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="sound" ref={ref} className="relative isolate min-h-[170vh] overflow-hidden px-5 py-24 sm:px-10 sm:py-32">
      <div className="sticky top-0 flex min-h-[100svh] flex-col justify-center">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 items-center gap-12 sm:grid-cols-12">
          <motion.div style={{ y: titleY }} className="sm:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-glow">
              [01] Sound
            </p>
            <h2 className="mt-4 font-anton text-[clamp(56px,9vw,156px)] uppercase leading-[0.86] tracking-tight text-bone">
              Hear the
              <br />
              <span className="text-stroke">unhearable</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-bone-dim">
              Custom 40mm planar magnetic drivers deliver a frequency response
              of 5Hz–40kHz, certified Hi-Res Lossless, with sub-bass that
              other headphones round off.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Hi-Res Audio", "LDAC", "aptX Lossless", "DSD"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-bone/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: productY }} className="relative sm:col-span-6">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/30 blur-[120px]" />
            <motion.div style={{ rotateY: productRotateY }} className="flex justify-center">
              <Headphones size={420} color={COLORS.obsidian} showWaves />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

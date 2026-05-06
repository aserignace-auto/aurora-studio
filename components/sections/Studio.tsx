"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Studio() {
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);

  return (
    <section
      id="studio"
      ref={ref}
      className="relative px-5 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:mb-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:col-span-3">
            [01] / Studio
          </span>
          <h2 className="font-anton text-[clamp(56px,9vw,180px)] uppercase leading-[0.86] tracking-tight text-bone sm:col-span-9">
            We make
            <br />
            <span className="italic font-display text-blood">images</span> that
            <br />
            <span className="text-stroke">stay with you</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:gap-16">
          <motion.div
            ref={imageRef}
            style={{ y: imageY, scale: imageScale }}
            className="sm:col-span-7"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1517242810446-cc8951b2be40?auto=format&fit=crop&w=1400&q=80"
                alt="Cinematic portrait"
                className="cinema h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/40" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone">
                <span>Still · 014</span>
                <span>Helena, 2025</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8 sm:col-span-5 sm:pt-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-2xl leading-snug tracking-tight text-bone sm:text-3xl"
            >
              Obscura is a small, <em className="text-blood">deliberate</em>{" "}
              practice based in Paris &amp; everywhere. We work with founders,
              labels, fashion houses, museums and the occasional rebel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-bone/15 pt-6 text-sm sm:gap-y-8"
            >
              {[
                { k: "Founded", v: "MMXXIII" },
                { k: "Practice", v: "Direction · Photography" },
                { k: "Recognition", v: "ADC · D&AD · TDC" },
                { k: "Studio", v: "Paris · Remote" },
              ].map((m) => (
                <div key={m.k} className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">
                    {m.k}
                  </span>
                  <span className="font-display text-lg leading-tight text-bone sm:text-xl">
                    {m.v}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#films"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              data-cursor="see"
              className="group mt-2 inline-flex w-fit items-center gap-3 border-b border-bone/30 pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-bone transition-colors hover:border-blood hover:text-blood"
            >
              See selected films
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

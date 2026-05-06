"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words =
  "We believe design should arrive like weather — felt before it is named. Every brand we touch begins as a question, ends as a small inevitability.".split(
    " ",
  );

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section
      id="studio"
      className="relative overflow-hidden px-6 py-32 sm:px-10 sm:py-48"
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-12 sm:grid-cols-12">
        <div className="sm:col-span-3">
          <div className="sticky top-32 flex flex-col gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
              [02] / Manifesto
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
              The studio
            </span>
            <p className="max-w-[260px] text-sm leading-relaxed text-bone-dim">
              Aurora is a small, deliberate practice based in Paris &amp;
              everywhere. We collaborate with founders, museums, labels,
              architects, and the occasional rebel.
            </p>
            <a
              href="#contact"
              data-cursor-grow
              className="group mt-2 inline-flex w-fit items-center gap-2 border-b border-bone/30 pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:border-lime hover:text-lime"
            >
              <span>Say hello</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>

        <div ref={ref} className="sm:col-span-9 sm:col-start-4">
          <h2 className="font-serif text-[clamp(36px,5.6vw,84px)] leading-[1.05] tracking-[-0.02em] text-bone-faint">
            {words.map((w, i) => {
              const start = i / words.length;
              const end = start + 1.2 / words.length;
              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                  word={w}
                  italic={["question,", "weather"].includes(w)}
                />
              );
            })}
          </h2>

          <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-bone/10 pt-12 sm:grid-cols-4">
            {[
              { k: "Founded", v: "MMXXIV" },
              { k: "Practice", v: "Brand · Product · Editorial" },
              { k: "Recognition", v: "ADC · Awwwards · CSSDA" },
              { k: "Studio", v: "Paris / Remote" },
            ].map((m) => (
              <div key={m.k} className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
                  {m.k}
                </span>
                <span className="font-serif text-lg leading-tight text-bone">
                  {m.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  progress,
  start,
  end,
  word,
  italic,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  word: string;
  italic?: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.25em] inline-block ${italic ? "italic text-lime" : ""}`}
    >
      {word}
    </motion.span>
  );
}

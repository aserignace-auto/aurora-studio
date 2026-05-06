"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    t: "Listen",
    d: "We start with a conversation, no deck, no jargon. We learn the brief and the world it lives in.",
    image: "https://images.unsplash.com/photo-1492366254240-43affaefc3e3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "02",
    t: "Frame",
    d: "We translate the brief into a creative thesis, the angle that makes every later choice easier.",
    image: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "03",
    t: "Capture",
    d: "Set, light, direction. We shoot lean and slow. Every frame is a choice we can defend.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "04",
    t: "Master",
    d: "Edit, grade, finishing. We hand off masters and assets. The film leaves the room better than it arrived.",
    image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative bg-void px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:col-span-3">
            [04] / Process
          </span>
          <h2 className="font-anton text-[clamp(56px,9vw,180px)] uppercase leading-[0.86] tracking-tight text-bone sm:col-span-9">
            Four
            <br />
            <span className="italic font-display">deliberate</span>{" "}
            steps.
          </h2>
        </div>

        <div className="relative">
          {/* Sticky background image stack */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:gap-16">
            <div className="sm:col-span-7 sm:sticky sm:top-24 sm:self-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                {steps.map((s, i) => {
                  const start = i / steps.length;
                  const end = (i + 1) / steps.length;
                  const opacity = useTransform(
                    scrollYProgress,
                    [Math.max(0, start - 0.06), start, end - 0.04, Math.min(1, end + 0.04)],
                    [0, 1, 1, 0]
                  );
                  const scale = useTransform(
                    scrollYProgress,
                    [start, end],
                    [1.05, 1]
                  );
                  return (
                    <motion.img
                      key={s.n}
                      style={{ opacity, scale }}
                      src={s.image}
                      alt={s.t}
                      className="cinema absolute inset-0 h-full w-full object-cover"
                    />
                  );
                })}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone mix-blend-difference">
                  <span>Frame</span>
                  <span>1.85 : 1</span>
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-32 pt-12 sm:col-span-5 sm:gap-48">
              {steps.map((s) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30%" }}
                  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  className="flex flex-col gap-4"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-blood">
                    Chapter {s.n}
                  </span>
                  <h3 className="font-anton text-6xl uppercase leading-none tracking-tight text-bone sm:text-7xl">
                    {s.t}
                  </h3>
                  <p className="text-base leading-relaxed text-bone-dim sm:text-lg">
                    {s.d}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

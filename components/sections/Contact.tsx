"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const wmY = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 0.95]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate overflow-hidden px-5 pt-24 sm:px-10 sm:pt-36"
    >
      <motion.div
        style={{ scale: imgScale }}
        aria-hidden
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="cinema h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/30" />
      </motion.div>

      <div className="mx-auto max-w-[1480px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:col-span-3">
            [06] / Make something
          </span>
          <div className="sm:col-span-9">
            <motion.h2
              style={{ y: wmY }}
              className="font-anton text-[clamp(72px,16vw,300px)] uppercase leading-[0.84] tracking-tight text-bone"
            >
              Let&apos;s
              <br />
              <span className="italic font-display text-blood">make</span>{" "}
              <span className="text-stroke">something</span>.
            </motion.h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-y border-bone/15 py-12 sm:mt-32 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">
              Mail
            </span>
            <a
              href="mailto:hello@obscura.studio"
              data-cursor="write"
              className="group mt-3 block font-anton text-4xl uppercase tracking-tight text-bone transition-colors hover:text-blood sm:text-6xl"
            >
              hello@obscura.studio
            </a>
          </div>
          <div className="sm:col-span-3 sm:col-start-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">
              Studio
            </span>
            <p className="mt-3 font-display text-xl leading-snug text-bone sm:text-2xl">
              42 rue de Turenne
              <br />
              75003 Paris, FR
            </p>
          </div>
          <div className="sm:col-span-3 sm:col-start-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">
              Follow
            </span>
            <ul className="mt-3 flex flex-col gap-2 font-display text-xl text-bone sm:text-2xl">
              {["Instagram", "Vimeo", "Are.na", "LinkedIn"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    data-cursor="open"
                    className="inline-flex items-center gap-2 transition-colors hover:italic hover:text-blood"
                  >
                    {s}
                    <span className="text-base">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-end">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim">
            <span className="block h-2 w-2 rounded-full bg-blood" />
            Booking · Q3–Q4 2026
          </div>
          <span className="font-anton text-[clamp(40px,7vw,120px)] uppercase leading-none tracking-tight text-bone">
            OBSCURA
          </span>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-bone/15 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:flex-row sm:items-center">
          <span>© Obscura Studio MMXXVI</span>
          <span>Independent · Paris &amp; everywhere</span>
          <span>Films, photography, direction</span>
        </div>
      </div>
    </section>
  );
}

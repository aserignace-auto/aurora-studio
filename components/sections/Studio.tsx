"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Vase from "@/components/illustrations/Vase";
import Plane from "@/components/illustrations/Plane";
import Compass from "@/components/illustrations/Compass";
import Cloud from "@/components/illustrations/Cloud";
import Squiggle from "@/components/illustrations/Squiggle";
import Figure from "@/components/illustrations/Figure";

const stats = [
  { v: "28+", k: "happy clients", color: "var(--color-coral)" },
  { v: "12", k: "design awards", color: "var(--color-cobalt)" },
  { v: "97%", k: "smile rate", color: "var(--color-sage)" },
  { v: "∞", k: "ideas drawn", color: "var(--color-lavender)" },
];

export default function Studio() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });
  const planeY = useTransform(scrollYProgress, [0, 1], [60, -160]);
  const planeRotate = useTransform(scrollYProgress, [0, 1], [-12, 8]);

  return (
    <section id="studio" className="relative overflow-hidden bg-cream-deep px-5 py-24 sm:px-10 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-32 items-center justify-around opacity-50">
        <div className="drift-x">
          <Cloud size={140} fill="var(--color-cream)" />
        </div>
        <div className="drift-x-2">
          <Cloud size={110} fill="var(--color-cream)" />
        </div>
        <div className="drift-x">
          <Cloud size={130} fill="var(--color-cream)" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-start gap-12 sm:grid-cols-12 sm:gap-10">
          <div className="sm:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border-[2px] border-ink bg-cream px-3 py-1 text-[12px] font-semibold uppercase tracking-wider"
            >
              <span className="block h-2 w-2 rounded-full bg-coral" />
              About the studio
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-display text-[clamp(40px,6vw,82px)] font-medium leading-[0.98] tracking-tight"
            >
              A small studio with a{" "}
              <span className="hand-underline-cobalt italic">long view</span>{" "}
              of the world.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4"
            >
              <Squiggle width={220} height={20} stroke="var(--color-coral)" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
            >
              Marigold is a tight team of designers and illustrators based in
              Paris &amp; remote. We work with founders, museums, indie labels
              and the occasional rebel to make things people want to live with.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-7"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-sun px-5 py-2.5 text-sm font-bold shadow-[3px_3px_0_var(--color-ink)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_var(--color-ink)]"
              >
                Say hi
                <span>→</span>
              </a>
            </motion.div>
          </div>

          <div className="relative sm:col-span-7 sm:pl-10">
            <motion.div
              ref={sceneRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[36px] border-[2.5px] border-ink bg-cobalt p-6 shadow-[6px_8px_0_var(--color-ink)] sm:p-10"
            >
              {/* Compass top-left */}
              <div className="absolute -left-6 -top-6 sticker">
                <div className="drift-y">
                  <Compass size={100} body="var(--color-sun)" needle="var(--color-coral)" />
                </div>
              </div>

              {/* Plane parallax flying through */}
              <motion.div
                style={{ y: planeY, rotate: planeRotate }}
                className="absolute right-[12%] top-[18%]"
              >
                <Plane size={110} fill="var(--color-cream)" trail="var(--color-sun)" />
              </motion.div>

              {/* Main scene: Figure (zen) + Vase */}
              <div className="grid grid-cols-2 items-end gap-6 pt-8">
                <div className="flex justify-center">
                  <div className="drift-y-2">
                    <Figure size={200} body="var(--color-sun)" head="var(--color-peach)" pose="stretch" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="slow-tilt">
                    <Vase size={170} body="var(--color-coral)" flower="var(--color-sun)" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 right-6 sticker">
                <div className="font-hand inline-block rotate-[-4deg] rounded-2xl border-[2px] border-ink bg-rose px-3 py-1 text-lg font-bold text-ink">
                  In studio, today
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4 sm:gap-6"
        >
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-3xl border-[2.5px] border-ink bg-cream p-5 shadow-[4px_5px_0_var(--color-ink)] sm:p-6"
            >
              <div
                className="font-display text-[clamp(40px,5vw,72px)] font-semibold leading-none tracking-tight"
                style={{ color: s.color }}
              >
                {s.v}
              </div>
              <div className="mt-2 text-sm font-semibold text-ink sm:text-base">
                {s.k}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

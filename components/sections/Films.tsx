"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

type Film = {
  index: string;
  title: string;
  client: string;
  year: string;
  category: string;
  format: string;
  duration: string;
  image: string;
};

const films: Film[] = [
  {
    index: "01",
    title: "Helena",
    client: "Maison Vaillé",
    year: "2026",
    category: "Fashion film",
    format: "16mm",
    duration: "02:14",
    image: "https://picsum.photos/seed/obscura-helena-film/1400/900?grayscale",
  },
  {
    index: "02",
    title: "Atlas",
    client: "Halo Capital",
    year: "2025",
    category: "Brand film",
    format: "65mm",
    duration: "01:48",
    image: "https://picsum.photos/seed/obscura-atlas-film/1400/900?grayscale",
  },
  {
    index: "03",
    title: "Late Bloom",
    client: "Bloom Beauty",
    year: "2025",
    category: "Editorial",
    format: "Photography",
    duration: "12 stills",
    image: "https://picsum.photos/seed/obscura-bloom-film/1400/900?grayscale",
  },
  {
    index: "04",
    title: "North",
    client: "N&S",
    year: "2024",
    category: "Documentary",
    format: "Digital",
    duration: "08:32",
    image: "https://picsum.photos/seed/obscura-north-film/1400/900?grayscale",
  },
  {
    index: "05",
    title: "Spectre",
    client: "Spectre Audio",
    year: "2024",
    category: "Music video",
    format: "16mm",
    duration: "03:12",
    image: "https://picsum.photos/seed/obscura-spectre-film/1400/900?grayscale",
  },
  {
    index: "06",
    title: "Aether",
    client: "Atelier Mineral",
    year: "2024",
    category: "Brand world",
    format: "Mixed",
    duration: "Series",
    image: "https://picsum.photos/seed/obscura-aether-film/1400/900?grayscale",
  },
];

export default function Films() {
  const [hover, setHover] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });

  const onListMove = (e: React.MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <section
      id="films"
      onMouseMove={onListMove}
      onMouseLeave={() => setHover(null)}
      className="relative px-5 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 grid grid-cols-1 gap-6 border-b border-bone/15 pb-8 sm:grid-cols-12 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint sm:col-span-3">
            [02] / Index
          </span>
          <div className="sm:col-span-9">
            <h2 className="font-anton text-[clamp(56px,9vw,180px)] uppercase leading-[0.86] tracking-tight text-bone">
              Selected
              <br />
              <span className="italic font-display">films</span>.
            </h2>
            <p className="mt-6 max-w-md text-base text-bone-dim sm:text-lg">
              Six stories that became something. Hover for the still.
            </p>
          </div>
        </div>

        <ul className="relative">
          {films.map((f, i) => (
            <motion.li
              key={f.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              onMouseEnter={() => setHover(f.index)}
              className="relative border-b border-bone/15"
            >
              <a
                href="#"
                data-cursor="play"
                className="group grid grid-cols-12 items-center gap-4 py-7 transition-all sm:py-9"
              >
                <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-faint sm:col-span-1">
                  {f.index}
                </span>
                <div className="col-span-10 flex flex-col gap-1.5 sm:col-span-5">
                  <span className="font-anton text-3xl uppercase leading-none tracking-tight text-bone transition-all duration-500 sm:text-5xl group-hover:translate-x-3 group-hover:text-blood">
                    {f.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim">
                    {f.client}
                  </span>
                </div>
                <span className="col-span-5 hidden font-display italic text-bone-dim sm:col-span-3 sm:block">
                  {f.category}
                </span>
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-bone-faint sm:col-span-2 sm:inline">
                  {f.format}
                </span>
                <span className="col-span-7 text-right font-mono text-[11px] uppercase tracking-[0.22em] text-bone sm:col-span-1">
                  {f.year}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Hover preview that follows cursor */}
      <motion.div
        ref={previewRef}
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      >
        {films.map((f) => (
          <motion.div
            key={f.index}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={hover === f.index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute left-0 top-0 h-[300px] w-[420px] overflow-hidden rounded-sm"
            style={{ pointerEvents: "none" }}
          >
            <img
              src={f.image}
              alt={f.title}
              className="cinema h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone">
              <span>{f.duration}</span>
              <span>{f.format}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

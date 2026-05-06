"use client";

import { motion } from "framer-motion";
import Counter from "@/components/Counter";

const specs = [
  { value: 50, suffix: " hr", label: "Battery life", desc: "ANC on, music continuous" },
  { value: 5, suffix: " ms", label: "Latency", desc: "Wired direct to source" },
  { value: 268, suffix: " g", label: "Weight", desc: "Aluminum + memory foam" },
  { value: 40, suffix: " mm", label: "Drivers", desc: "Custom planar magnetic" },
];

export default function Specs() {
  return (
    <section id="specs" className="relative bg-ink px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 sm:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-glow">
            [03] Specs
          </p>
          <h2 className="mt-3 font-anton text-[clamp(56px,9vw,156px)] uppercase leading-[0.88] tracking-tight text-bone">
            Built like
            <br />
            <span className="italic text-electric-glow font-display">an instrument</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px rounded-[28px] border border-bone/10 bg-bone/5 lg:grid-cols-4">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative flex flex-col gap-3 bg-ink p-6 first:rounded-tl-[28px] last:rounded-br-[28px] sm:p-8 lg:p-10"
              style={{
                borderTopLeftRadius: i === 0 ? 28 : 0,
                borderTopRightRadius: i === 3 ? 28 : 0,
                borderBottomLeftRadius: i === 0 ? 0 : (i === 2 ? 28 : 0),
                borderBottomRightRadius: i === 3 ? 28 : 0,
              }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">
                0{i + 1} / 04
              </span>
              <div className="font-anton text-[clamp(56px,8vw,120px)] leading-none tracking-tight text-bone">
                <Counter to={s.value} suffix={s.suffix} duration={2} />
              </div>
              <div className="mt-2">
                <div className="font-display text-2xl font-medium tracking-tight text-bone sm:text-3xl">
                  {s.label}
                </div>
                <div className="mt-1 text-sm text-bone-dim">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed specs */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { k: "Bluetooth", v: "5.4 · LE Audio · Multipoint x2" },
            { k: "Codecs", v: "LDAC · aptX Lossless · AAC · SBC" },
            { k: "Frequency", v: "5 Hz to 40 kHz" },
            { k: "ANC", v: "Adaptive · 8 mics · -42 dB" },
            { k: "Charging", v: "USB-C · 3 min = 6 hr · Qi" },
            { k: "Materials", v: "Aluminum · Vegan leather · Recycled foam" },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="flex flex-col gap-1.5 border-t border-bone/10 pt-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">
                {s.k}
              </span>
              <span className="text-base font-medium text-bone">{s.v}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    score: "9.8",
    publication: "What Hi-Fi?",
    author: "Issue 412",
    quote:
      "The most resolving wireless headphones we have heard at any price. Aurion didn't iterate, they redrew the category.",
  },
  {
    score: "5/5",
    publication: "The Verge",
    author: "Nilay Patel",
    quote:
      "I forgot they were on. Fifty hours of music with ANC that actually works on a Paris metro is genuinely stupid.",
  },
  {
    score: "A+",
    publication: "Wired",
    author: "Steven Johnson",
    quote:
      "A small French studio just made the best-sounding consumer headphones in the world. We are not sponsored.",
  },
  {
    score: "★★★★★",
    publication: "Pitchfork",
    author: "Best New Gear",
    quote:
      "Mastering engineers are switching. That should tell you everything you need to know about the spatial mode.",
  },
];

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto mb-12 max-w-[1480px] px-5 sm:mb-16 sm:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-glow">
          [04] Reviews
        </p>
        <div className="mt-3 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-anton text-[clamp(56px,9vw,156px)] uppercase leading-[0.88] tracking-tight text-bone">
            What the
            <br />
            <span className="italic font-display">critics say</span>.
          </h2>
          <p className="max-w-sm font-mono text-[11px] uppercase tracking-[0.22em] text-bone-dim">
            Drag · scroll · click any card
          </p>
        </div>
      </div>

      <motion.div
        ref={ref}
        drag="x"
        dragConstraints={{ left: -1200, right: 0 }}
        dragElastic={0.2}
        style={{ x }}
        className="flex cursor-grab gap-5 px-5 active:cursor-grabbing sm:gap-6 sm:px-10"
      >
        {reviews.map((r, i) => (
          <ReviewCard key={r.publication} review={r} index={i} x={x} />
        ))}
      </motion.div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
  x,
}: {
  review: (typeof reviews)[number];
  index: number;
  x: ReturnType<typeof useMotionValue<number>>;
}) {
  const range = [-(index + 1) * 380, -index * 380, -(index - 1) * 380];
  const rotate = useTransform(x, range, [-3, 0, 3]);
  const scale = useTransform(x, range, [0.96, 1, 0.96]);

  return (
    <motion.article
      style={{ rotate, scale }}
      whileHover={{ y: -6 }}
      data-cursor="hold"
      className="relative flex w-[320px] shrink-0 flex-col gap-6 rounded-3xl border border-bone/10 bg-ink p-7 sm:w-[420px] sm:p-9"
    >
      <div className="flex items-baseline justify-between">
        <span className="font-anton text-7xl leading-none tracking-tight text-electric sm:text-8xl">
          {review.score}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-faint">
          0{index + 1} / 04
        </span>
      </div>
      <blockquote className="font-display text-xl leading-snug tracking-tight text-bone sm:text-2xl">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <div className="mt-auto border-t border-bone/10 pt-4">
        <div className="font-bold text-bone">{review.publication}</div>
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-dim">
          {review.author}
        </div>
      </div>
    </motion.article>
  );
}

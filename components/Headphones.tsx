"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

type Color = {
  cup: string;
  band: string;
  cushion: string;
  trim: string;
};

export const COLORS: Record<string, Color> = {
  obsidian: {
    cup: "#1a1a1f",
    band: "#0c0c10",
    cushion: "#2a2a32",
    trim: "#5b8aff",
  },
  bone: {
    cup: "#f0eee6",
    band: "#d6d3c8",
    cushion: "#e8e5db",
    trim: "#2d6bff",
  },
  cobalt: {
    cup: "#1f3da8",
    band: "#152870",
    cushion: "#2d57d1",
    trim: "#ffb547",
  },
  amber: {
    cup: "#c87a1e",
    band: "#9a5a14",
    cushion: "#e09232",
    trim: "#0c0c10",
  },
};

export default function Headphones({
  size = 480,
  color = COLORS.obsidian,
  className = "",
  rotateY,
  rotateX,
  showWaves = false,
}: {
  size?: number;
  color?: Color;
  className?: string;
  rotateY?: MotionValue<number>;
  rotateX?: MotionValue<number>;
  showWaves?: boolean;
}) {
  const cupRy = rotateY ? useTransform(rotateY, (v) => v) : undefined;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        width: size,
        height: size,
        perspective: 1200,
        rotateY: cupRy,
        rotateX,
      }}
    >
      <svg viewBox="0 0 480 480" className="h-full w-full">
        <defs>
          <radialGradient id="cup-grad" cx="38%" cy="35%" r="68%">
            <stop offset="0%" stopColor={color.cushion} stopOpacity="0.95" />
            <stop offset="55%" stopColor={color.cup} />
            <stop offset="100%" stopColor={color.band} />
          </radialGradient>
          <linearGradient id="band-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color.band} />
            <stop offset="50%" stopColor={color.cup} stopOpacity="0.92" />
            <stop offset="100%" stopColor={color.band} />
          </linearGradient>
          <radialGradient id="cushion-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color.cushion} stopOpacity="1" />
            <stop offset="100%" stopColor={color.band} stopOpacity="1" />
          </radialGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>
        </defs>

        {/* Headband - top arc */}
        <path
          d="M 110 240 Q 110 90, 240 90 Q 370 90, 370 240"
          fill="none"
          stroke="url(#band-grad)"
          strokeWidth="42"
          strokeLinecap="round"
        />
        {/* Headband shine */}
        <path
          d="M 130 220 Q 130 110, 240 110 Q 350 110, 350 220"
          fill="none"
          stroke={color.cushion}
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Slider extensions */}
        <rect x="92" y="220" width="34" height="60" rx="6" fill={color.band} />
        <rect x="354" y="220" width="34" height="60" rx="6" fill={color.band} />

        {/* Left earcup */}
        <g>
          <ellipse cx="109" cy="298" rx="74" ry="84" fill="url(#cup-grad)" stroke={color.band} strokeWidth="2" />
          <ellipse cx="109" cy="298" rx="56" ry="64" fill="url(#cushion-grad)" />
          <ellipse cx="109" cy="298" rx="34" ry="42" fill={color.band} />
          {/* Logo dot */}
          <circle cx="109" cy="298" r="6" fill={color.trim} />
          <circle cx="109" cy="298" r="2" fill={color.cup} opacity="0.7" />
          {/* Highlight */}
          <ellipse cx="86" cy="270" rx="22" ry="18" fill={color.cushion} opacity="0.45" />
        </g>

        {/* Right earcup */}
        <g>
          <ellipse cx="371" cy="298" rx="74" ry="84" fill="url(#cup-grad)" stroke={color.band} strokeWidth="2" />
          <ellipse cx="371" cy="298" rx="56" ry="64" fill="url(#cushion-grad)" />
          <ellipse cx="371" cy="298" rx="34" ry="42" fill={color.band} />
          <circle cx="371" cy="298" r="6" fill={color.trim} />
          <circle cx="371" cy="298" r="2" fill={color.cup} opacity="0.7" />
          <ellipse cx="394" cy="270" rx="22" ry="18" fill={color.cushion} opacity="0.45" />
        </g>

        {showWaves && (
          <>
            <g opacity="0.55" stroke={color.trim} strokeWidth="1.5" fill="none">
              <ellipse cx="109" cy="298" rx="98" ry="106">
                <animate attributeName="rx" values="98;120;98" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="ry" values="106;128;106" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.55;0;0.55" dur="3.5s" repeatCount="indefinite" />
              </ellipse>
            </g>
            <g opacity="0.55" stroke={color.trim} strokeWidth="1.5" fill="none">
              <ellipse cx="371" cy="298" rx="98" ry="106">
                <animate attributeName="rx" values="98;120;98" dur="3.5s" begin="-1.2s" repeatCount="indefinite" />
                <animate attributeName="ry" values="106;128;106" dur="3.5s" begin="-1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.55;0;0.55" dur="3.5s" begin="-1.2s" repeatCount="indefinite" />
              </ellipse>
            </g>
          </>
        )}
      </svg>
    </motion.div>
  );
}

import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurora-studio-xi.vercel.app"),
  title: "Aurion One — Premium Wireless Headphones",
  description:
    "Spatial audio, AI noise cancellation, 50-hour battery. Designed for those who hear the difference. Ships July 15, 2026.",
  openGraph: {
    title: "Aurion One",
    description: "Premium wireless headphones. Spatial audio. Drop July 15.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%23050507'/><circle cx='16' cy='16' r='6' fill='none' stroke='%232d6bff' stroke-width='2'/><circle cx='16' cy='16' r='2' fill='%232d6bff'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${anton.variable} ${jetbrains.variable}`}
    >
      <body className="bg-void text-bone">
        <ScrollProgress />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}

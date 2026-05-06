import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurora-studio-xi.vercel.app"),
  title: "Marigold Studio — We design joyful brand worlds",
  description:
    "Marigold is a small, sunny design studio crafting brand worlds, illustrated digital products, and editorial systems for ambitious teams.",
  openGraph: {
    title: "Marigold Studio",
    description: "Joyful design, illustrated. Brand, product, editorial.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='9' fill='%23ffc83a'/><circle cx='13' cy='14' r='1.4' fill='%23181410'/><circle cx='19' cy='14' r='1.4' fill='%23181410'/><path d='M12 18 Q 16 21 20 18' fill='none' stroke='%23181410' stroke-width='1.6' stroke-linecap='round'/></svg>",
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
      className={`${fraunces.variable} ${hanken.variable} ${caveat.variable} ${jetbrains.variable}`}
    >
      <body className="bg-cream text-ink">
        <SmoothScroll>{children}</SmoothScroll>
        <div className="paper-grain" aria-hidden />
      </body>
    </html>
  );
}

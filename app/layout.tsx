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
  title: "Obscura — A film & photography studio",
  description:
    "Obscura is an independent direction studio crafting films, photography, and brand worlds. Based in Paris.",
  openGraph: {
    title: "Obscura Studio",
    description: "Films, photography, direction. Paris.",
    type: "website",
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
        <div className="vignette" aria-hidden />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}

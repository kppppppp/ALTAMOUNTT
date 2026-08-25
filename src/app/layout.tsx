import type { Metadata } from "next";
import { Playfair_Display, Manrope, DM_Mono } from "next/font/google";
import "./globals.css";
import { MotionSystem } from "@/components/MotionSystem";
import { SmoothScroll } from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Altamountt Space & Design | Luxury Interior Design Studio · Thane",
    template: "%s | Altamountt Space & Design",
  },
  description:
    "Altamountt Space & Design is a premier interior design studio in Thane, Maharashtra. Crafting luxury residential apartments, penthouses, villas, and turnkey commercial spaces.",
  keywords: [
    "Interior Design Thane",
    "Luxury Interiors Mumbai",
    "Turnkey Interior Contractor Thane",
    "Architectural Space Planning Thane",
    "Altamountt Space and Design",
    "Bhayandarpada Thane Interior Designer",
  ],
  authors: [{ name: "Altamountt Space & Design" }],
  openGraph: {
    title: "Altamountt Space & Design | Crafting Luxury. Defining Lifestyles.",
    description:
      "Image-driven architectural interior design and turnkey execution studio in Thane, Maharashtra.",
    url: "https://altamounttdesign.com",
    siteName: "Altamountt Space & Design",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { SocialRail } from "@/components/SocialRail";
import { BackToTop } from "@/components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} ${dmMono.variable}`}>
      <body>
        <SmoothScroll />
        <MotionSystem />
        {children}
        <SocialRail />
        <BackToTop />
      </body>
    </html>
  );
}

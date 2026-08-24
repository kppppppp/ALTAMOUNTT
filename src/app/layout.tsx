import type { Metadata } from "next";
import "./globals.css";
import { MotionSystem } from "@/components/MotionSystem";
import { SmoothScroll } from "@/components/SmoothScroll";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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

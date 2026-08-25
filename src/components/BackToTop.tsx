"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`back-to-top-btn fixed bottom-6 left-6 z-[80] flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(21,20,18,0.92)] border border-[rgba(245,242,235,0.25)] text-[#F5F2EB] hover:bg-[#C6A96C] hover:text-[#151412] transition-all duration-300 shadow-xl cursor-pointer ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <span className="text-lg font-serif" style={{ transform: 'translateY(-1px)' }}>↑</span>
    </button>
  );
}

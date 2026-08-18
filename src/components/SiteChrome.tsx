"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import gsap from "gsap";
import { studioInfo } from "@/data/content";

const navLinks = [
  { name: "Home", href: "/", number: "01" },
  { name: "About", href: "/about", number: "02" },
  { name: "Services", href: "/services", number: "03" },
  { name: "Projects", href: "/projects", number: "04" },
  { name: "Contact Us", href: "/contact", number: "05" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll + Escape key handler
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open, closeMenu]);

  // GSAP open animation
  useEffect(() => {
    if (tlRef.current) tlRef.current.kill();
    if (!open) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tlRef.current = tl;

    tl.fromTo(".mob-overlay", { opacity: 0 }, { opacity: 1, duration: 0.28, ease: "power2.out" })
      .fromTo(".mob-header", { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.3 }, "-=0.1")
      .fromTo(".mob-nav-item", { y: 48, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.6 }, "-=0.18")
      .fromTo(".mob-rule", { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: "power3.out" }, "-=0.25")
      .fromTo(".mob-cta", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2")
      .fromTo(".mob-meta", { opacity: 0 }, { opacity: 1, duration: 0.35 }, "-=0.15");

    return () => { tl.kill(); };
  }, [open]);

  return (
    <>
      {/* ─── SITE HEADER ─── */}
      <header className={`site-nav ${scrolled ? "scrolled" : ""} ${!isHomePage ? "page-light" : ""}`}>
        <Link className="nav-brand" href="/" onClick={closeMenu}>
          ALTAMOUNTT<span>SPACE &amp; DESIGN</span>
        </Link>

        <nav className="nav-links" aria-label="Desktop navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}
              className={`nav-link-item ${pathname === link.href ? "active" : ""}`}>
              {link.name}
            </Link>
          ))}
        </nav>

        <Link className="nav-cta-btn" href="/contact">Start a project <span>→</span></Link>

        {/* Hamburger — only visible on mobile */}
        <button className="nav-hamburger" aria-label="Open menu" aria-expanded={open}
          onClick={() => setOpen(true)}>
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </header>

      {/* ─── FULLSCREEN MOBILE OVERLAY ─── */}
      <div className={`mob-overlay ${open ? "mob-open" : ""}`} role="dialog"
        aria-modal="true" aria-label="Navigation Menu">

        {/* Stationary top bar with BRAND + visible X CLOSE */}
        <div className="mob-header">
          <Link className="nav-brand text-[var(--bg-ivory)]" href="/" onClick={closeMenu}>
            ALTAMOUNTT<span className="text-[var(--gold)]">SPACE &amp; DESIGN</span>
          </Link>

          {/* HIGH-CONTRAST CLOSE BUTTON — always visible, always tappable */}
          <button className="mob-close-btn" aria-label="Close menu" onClick={closeMenu}>
            <span className="mob-close-x" aria-hidden="true">✕</span>
            <span className="mob-close-label">CLOSE</span>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mob-nav-links" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="mob-nav-item"
              onClick={closeMenu}>
              <span className="mob-nav-num">{link.number}</span>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Footer area */}
        <div className="mob-footer">
          <i className="gold-line dark mob-rule" />
          <Link href="/contact" className="hero-btn-primary mob-cta" onClick={closeMenu}>
            <span>Start a project</span><span>→</span>
          </Link>
          <div className="mob-meta">
            <span>THANE, MAHARASHTRA</span>
            <a href={`tel:${studioInfo.phone}`} className="text-[var(--gold-light)] underline">
              {studioInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-brand">
        <p className="eyebrow dark">Altamountt Space &amp; Design</p>
        <h2>Crafting luxury.<br /><em>Defining lifestyles.</em></h2>
      </div>

      <div className="footer-columns-grid">
        <div>
          <h4 className="footer-col-title">Navigation</h4>
          <div className="footer-link-list">
            {navLinks.map((l) => <Link href={l.href} key={l.name}>{l.name}</Link>)}
          </div>
        </div>
        <div>
          <h4 className="footer-col-title">Studio Location</h4>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--ink-light-muted)" }}>
            {studioInfo.address}
          </p>
          <a href={studioInfo.mapsUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "0.75rem",
              color: "var(--gold-light)", textTransform: "uppercase", letterSpacing: "0.15em",
              fontFamily: "'DM Mono', monospace" }}>
            Get Directions ↗
          </a>
        </div>
        <div>
          <h4 className="footer-col-title">Inquiries</h4>
          <div className="footer-link-list">
            <a href={`tel:${studioInfo.phone}`}>Call: {studioInfo.phoneDisplay}</a>
            <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp Direct</a>
            <a href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>
            <Link href="/contact" style={{ color: "var(--gold-light)", marginTop: "0.5rem" }}>
              Start a Project Form →
            </Link>
          </div>
        </div>
        <div>
          <h4 className="footer-col-title">Recognition</h4>
          <div style={{ fontSize: "0.875rem", color: "var(--ink-light-muted)" }}>
            <span style={{ fontSize: "1.75rem", fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}>
              {studioInfo.rating}
            </span>{" "}
            <span style={{ color: "var(--gold-light)" }}>★★★★★</span>
            <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.12em" }}>
              {studioInfo.reviewCount}
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} Altamountt Space &amp; Design. All rights reserved.</span>
        <span>Thane, Maharashtra · Interior Design &amp; Turnkey Architecture</span>
      </div>
    </footer>
  );
}

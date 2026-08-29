"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  clientTestimonials,
  images,
  projectsList,
  studioInfo,
} from "@/data/content";
import { Footer, Navigation } from "@/components/SiteChrome";

gsap.registerPlugin(ScrollTrigger);

const furnitureImages = [
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.06.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.07.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.08.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.09.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.10.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.11.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.12.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.13.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.14.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.15.jpeg",
  "/client-work/furniture/WhatsApp Image 2026-08-29 at 12.36.16.jpeg",
];

export function SiteExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Furniture Carousel State
  const [sliderIndex, setSliderIndex] = useState(0);
  const touchStartX = useRef(0);
  const isDragging = useRef(false);

  // Filter projects by category
  const commercialProjects = projectsList.filter((p) =>
    ["google-bkc", "lakme-salon", "pachouli-wellness"].includes(p.slug)
  );

  const residentialProjects = projectsList.filter((p) =>
    ["selected-residence"].includes(p.slug)
  );

  // Carousel Handlers
  const handlePrev = () => {
    setSliderIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setSliderIndex((prev) => Math.min(furnitureImages.length - 1, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const diff = touchStartX.current - currentX;
    if (Math.abs(diff) > 75) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      isDragging.current = false;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const currentX = e.clientX;
    const diff = touchStartX.current - currentX;
    if (Math.abs(diff) > 75) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. HERO LOAD CHOREOGRAPHY
      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      heroTl
        .fromTo(
          ".hero-video-bg",
          { scale: 1.14, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" }
        )
        .fromTo(
          ".hero-kicker-text span",
          { xPercent: -102, clipPath: "inset(0 0 0 100%)", opacity: 0 },
          { xPercent: 0, clipPath: "inset(0 0 0 0%)", opacity: 1, duration: 1.05 },
          "-=1.1"
        )
        .fromTo(
          ".hero-title-main span",
          { xPercent: -102, clipPath: "inset(0 0 0 100%)", opacity: 0 },
          { xPercent: 0, clipPath: "inset(0 0 0 0%)", opacity: 1, duration: 1.15, stagger: 0.1 },
          "-=0.85"
        )
        .fromTo(
          ".hero-sub-statement",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.7"
        )
        .fromTo(
          ".hero-actions-row a",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          "-=0.65"
        )
        .fromTo(
          ".hero-scroll-indicator",
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );

      // Hero Scroll Animation (Video expands gently, text floats upward)
      gsap.to(".hero-video-bg", {
        scale: 1.1,
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-content-box", {
        yPercent: -18,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Simple Staggered reveals for project grid and other sections
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <div ref={containerRef} className="page-wrapper">
      <Navigation />

      <main id="main-content">
        {/* 01 — HERO SECTION */}
        <section className="hero-section corner-bracket-wrap animate-fade-in" id="hero">
          {/* Subtle coordinates overlay for architectural detail */}
          <div className="absolute top-[120px] right-[22px] z-20 text-[9px] font-mono tracking-widest text-[rgba(245,242,235,0.65)] text-right flex flex-col gap-0.5">
            <span>COORD / 19.2638° N, 72.9815° E</span>
            <span>LOC / THANE WEST, MH</span>
          </div>

          <div className="absolute bottom-[20vh] right-[22px] z-20 hidden md:block text-[9px] font-mono tracking-widest text-[var(--gold-light)] uppercase [writing-mode:vertical-lr] pointer-events-none select-none">
            ALTAMOUNTT — SPACE &amp; DESIGN
          </div>

          <div className="absolute inset-0 select-none pointer-events-none">
            <Image
              src={images.heroPoster}
              alt="Altamountt Space & Design interior project"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <video
            className="hero-video-bg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={images.heroPoster}
          >
            <source src="/video/altamountt-hero.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay-gradient" />

          <div className="hero-content-box">
            <p className="hero-kicker-text mask-text">
              <span className="mask-text-line">Altamountt · Thane &amp; Mumbai</span>
            </p>

            <h1 className="hero-title-main mask-text">
              <span className="mask-text-line">THOUGHTFUL DESIGN.</span>
              <span className="mask-text-line">PRECISE EXECUTION.</span>
            </h1>

            <div className="hero-bottom-grid">
              <p className="hero-sub-statement">
                Premium residential and commercial interiors across Thane and Mumbai — from concept to handover.
              </p>

              <div className="hero-actions-row">
                <a href="#selected-projects" className="hero-btn-primary">
                  VIEW OUR WORK <span>→</span>
                </a>
                <Link href="/contact" className="hero-btn-secondary">
                  START A PROJECT <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-scroll-indicator">
            <span>SCROLL</span>
            <div className="scroll-line-bar" />
          </div>
        </section>

        {/* 02 — COMMERCIAL STORY INTRODUCTION */}
        <section className="relative bg-[var(--bg-ivory)] overflow-hidden pt-24 pb-12" id="commercial-intro">
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="mono text-[10px] text-[var(--gold-dark)] tracking-widest block mb-4 uppercase">02 / PORTFOLIO CASE STUDIES</span>
              <h2 className="heading-editorial text-4xl md:text-6xl tracking-tight leading-[0.95]" data-reveal="up">
                <span>SPACES THAT</span>
                <span><em>BUILD BRANDS.</em></span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-2">
                From open corporate offices in BKC to high-end styling salons and wellness spaces, we execute commercial interiors with strict spatial efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* 03 — COMMERCIAL PROJECTS ASYMMETRIC PORTFOLIO */}
        <section className="bg-[var(--bg-ivory)] relative overflow-hidden pb-24" id="commercial-projects">
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* GOOGLE BKC — LARGE FEATURE PROJECT */}
            {commercialProjects.filter(p => p.slug === "google-bkc").map((project) => (
              <article key={project.slug} className="group relative w-full mb-28" data-reveal="up">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-4 border-b border-[var(--line)] pb-3">
                    <div className="flex items-center gap-3">
                      <span className="mono text-sm text-[var(--gold-dark)]">01</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-[var(--ink)]">{project.title}</h3>
                    </div>
                    <span className="mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest md:text-right">BKC, Mumbai · Corporate Workplace</span>
                  </div>

                  <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                    <div className="media-reveal-wrap overflow-hidden h-[50vh] md:h-[65vh] w-full relative">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                        style={{ objectPosition: "center 40%" }}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-start mt-5 gap-4">
                    <p className="text-xs text-[var(--ink-muted)] max-w-sm leading-relaxed">
                      High-performance workspace resolved around open flow, wave-patterned ceilings, and bespoke concrete features.
                    </p>
                    <div className="flex gap-8 text-[10px] font-mono uppercase text-[var(--ink-muted)]">
                      <span>ROLE / {project.role}</span>
                      <span>AREA / {project.area}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}

            {/* LAKME & PACHOULI — ASYMMETRIC COLUMN SPLIT */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              {/* LAKME SALON — VERTICAL CROP (LEFT COLUMN) */}
              {commercialProjects.filter(p => p.slug === "lakme-salon").map((project) => (
                <article key={project.slug} className="group flex flex-col md:col-span-5 md:mt-12" data-reveal="up">
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="flex items-end justify-between mb-4 border-b border-[var(--line)] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[10px] text-[var(--gold-dark)]">02</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">{project.title}</h3>
                      </div>
                      <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">Versova / Retail</span>
                    </div>

                    <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                      <div className="media-reveal-wrap overflow-hidden relative aspect-[3/4] md:h-[50vh]">
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                      <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                        Premium salon framing treatment zones, architectural copper details, and raw brick accents.
                      </p>
                      <span className="mono text-[9px] text-[var(--gold-dark)] uppercase mt-1">ROLE / {project.role}</span>
                    </div>
                  </Link>
                </article>
              ))}

              {/* PACHOULI WELLNESS — HORIZONTAL CROP (RIGHT COLUMN) */}
              {commercialProjects.filter(p => p.slug === "pachouli-wellness").map((project) => (
                <article key={project.slug} className="group flex flex-col md:col-span-7" data-reveal="up">
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="flex items-end justify-between mb-4 border-b border-[var(--line)] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[10px] text-[var(--gold-dark)]">03</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">{project.title}</h3>
                      </div>
                      <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">Andheri / Wellness</span>
                    </div>

                    <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                      <div className="media-reveal-wrap overflow-hidden relative aspect-[4/3] md:h-[42vh]">
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                      <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                        Wellness clinic utilizing organic textures, fluted wall screens, and integrated spatial flow.
                      </p>
                      <span className="mono text-[9px] text-[var(--gold-dark)] uppercase mt-1">ROLE / {project.role}</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — PROJECT IN PROGRESS */}
        <section className="py-24 lg:py-32 bg-[var(--bg-ivory)] relative overflow-hidden border-t border-[var(--line)]" id="project-in-progress">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 relative flex flex-col justify-center min-w-0" data-reveal="up">
                <div className="flex items-center gap-4 mb-6">
                  <span className="micro-label-editorial">04 / ON SITE EVIDENCE</span>
                </div>

                <h2 className="heading-editorial text-5xl md:text-[clamp(3.5rem,5vw,6rem)] mb-8 leading-[0.95] tracking-tight">
                  <span>DESIGN IS</span>
                  <span> ONLY THE</span>
                  <span><em className="text-[var(--gold-dark)]"> BEGINNING.</em></span>
                </h2>

                <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed max-w-sm mt-4 border-t border-[var(--line)] pt-6">
                  From planning and drawings to execution on site, we manage carpentry, civil work, electrical routing, and installation.
                </p>

                {/* Restrained technical metadata */}
                <div className="mt-8 text-[10px] font-mono text-[var(--ink-muted)] flex flex-col gap-1">
                  <span>PHASE / SITE EXECUTION</span>
                  <span>STATUS / IN PROGRESS</span>
                  <span>LOCATION / THANE, MAHARASHTRA</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-6 flex flex-col items-center lg:items-end min-w-0">
                <div className="editorial-image-frame corner-bracket-wrap w-full lg:w-[45vw] lg:max-w-[460px] shadow-2xl rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--bg-sand)]">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <video
                      src="https://res.cloudinary.com/haulskyj/video/upload/v1787590125/video-progress.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — RESIDENTIAL STORY INTRODUCTION */}
        <section className="relative bg-[var(--bg-ivory)] overflow-hidden pt-24 pb-12 border-t border-[var(--line)]" id="residential-intro">
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="mono text-[10px] text-[var(--gold-dark)] tracking-widest block mb-4 uppercase">05 / PORTFOLIO CASE STUDIES</span>
              <h2 className="heading-editorial text-4xl md:text-6xl tracking-tight leading-[0.95]" data-reveal="up">
                <span>SPACES MADE</span>
                <span><em>FOR LIVING.</em></span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-2">
                Thoughtfully planned homes where proportion, material, light, and everyday functionality come together to support your daily rituals.
              </p>
            </div>
          </div>
        </section>

        {/* 06 — RESIDENTIAL PROJECTS ASYMMETRIC PORTFOLIO */}
        <section className="bg-[var(--bg-ivory)] relative overflow-hidden pb-24" id="residential-projects">
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* SELECTED RESIDENCE, VIVEAREA — LARGE FEATURE */}
            {residentialProjects.map((project) => (
              <article key={project.slug} className="group relative w-full mb-28" data-reveal="up">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-4 border-b border-[var(--line)] pb-3">
                    <div className="flex items-center gap-3">
                      <span className="mono text-sm text-[var(--gold-dark)]">01</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-[var(--ink)]">{project.title}</h3>
                    </div>
                    <span className="mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest md:text-right">Thane West · Residential Flat</span>
                  </div>

                  <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                    <div className="media-reveal-wrap overflow-hidden h-[50vh] md:h-[65vh] w-full relative">
                      <img
                        src="/client-work/projects/residential/bedroom-ilaf-wardrobe.jpg"
                        alt={project.title}
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                        style={{ objectPosition: "center center" }}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-start mt-5 gap-4">
                    <p className="text-xs text-[var(--ink-muted)] max-w-sm leading-relaxed">
                      A warm and elegant residence featuring custom wood joinery details, warm ceiling illumination, and textured fabrics.
                    </p>
                    <div className="flex gap-8 text-[10px] font-mono uppercase text-[var(--ink-muted)]">
                      <span>ROLE / {project.role}</span>
                      <span>AREA / {project.area}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}

            {/* BEDROOM & DINING — ASYMMETRIC GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              {/* MASTER BEDROOM — VERTICAL CROP (LEFT) */}
              <article className="group flex flex-col md:col-span-5 md:mt-12" data-reveal="up">
                <Link href="/projects/selected-residence" className="block">
                  <div className="flex items-end justify-between mb-4 border-b border-[var(--line)] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="mono text-[10px] text-[var(--gold-dark)]">02</span>
                      <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">Master Suites</h3>
                    </div>
                    <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">Thane West / Bedroom</span>
                  </div>

                  <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                    <div className="media-reveal-wrap overflow-hidden relative aspect-[3/4] md:h-[50vh]">
                      <img
                        src={images.bedroom}
                        alt="Master Suites"
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-1">
                    <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                      Textured master suite layout focusing on textured fabrics, integrated wardrobes, and custom illumination.
                    </p>
                    <span className="mono text-[9px] text-[var(--gold-dark)] uppercase mt-1">ROLE / Space planning &amp; styling</span>
                  </div>
                </Link>
              </article>

              {/* DINING AREA — HORIZONTAL CROP (RIGHT) */}
              <article className="group flex flex-col md:col-span-7" data-reveal="up">
                <Link href="/projects/selected-residence" className="block">
                  <div className="flex items-end justify-between mb-4 border-b border-[var(--line)] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="mono text-[10px] text-[var(--gold-dark)]">03</span>
                      <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">Dining Interiors</h3>
                    </div>
                    <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">Thane West / Dining</span>
                  </div>

                  <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                    <div className="media-reveal-wrap overflow-hidden relative aspect-[4/3] md:h-[42vh]">
                      <img
                        src={images.dining}
                        alt="Dining Interiors"
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-1">
                    <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                      Curated dining setups featuring marble tables, brass frames, and tailored ergonomic seating.
                    </p>
                    <span className="mono text-[9px] text-[var(--gold-dark)] uppercase mt-1">ROLE / Furniture curation &amp; lighting</span>
                  </div>
                </Link>
              </article>
            </div>

            <div className="mt-20 text-center">
              <Link href="/projects" className="hero-btn-primary">
                VIEW ALL PROJECTS <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 07 — FURNITURE & LIVING SPACES HORIZONTAL CAROUSEL (DARK THEME) */}
        <section className="section-pad bg-[#151412] text-white overflow-hidden relative" id="furniture-showcase">
          <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="mono text-[10px] text-[var(--gold-light)] tracking-widest block mb-4 uppercase">
                PORTFOLIO
              </p>
              <h2 className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--bg-ivory)]">
                <span>FURNITURE.</span>
                <span className="block mt-2"><em className="text-[var(--gold)]">COMFORT. CRAFTED.</em></span>
              </h2>
              <p className="text-xs text-[var(--ink-light-muted)] max-w-md mt-6 leading-relaxed">
                Thoughtfully selected furniture and curated living spaces that blend comfort, aesthetics and functionality.
              </p>
            </div>
            
            <div className="flex flex-col items-start lg:items-end gap-4">
              <p className="text-xs text-[var(--ink-light-muted)] max-w-xs text-left lg:text-right italic">
                Every piece is chosen with intent. Every space is built for real life.
              </p>
              <div className="flex gap-4 items-center">
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  disabled={sliderIndex === 0}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Previous slide"
                >
                  <span className="rotate-180 block">→</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={sliderIndex === furnitureImages.length - 1}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Next slide"
                >
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slider Container wrapper with dragging/touch event binding */}
          <div 
            className="w-full relative px-6 cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(-${sliderIndex * (typeof window !== "undefined" && window.innerWidth < 768 ? 85 : 34)}%)`,
              }}
            >
              {furnitureImages.map((img, idx) => (
                <div 
                  key={idx}
                  className="w-[80vw] md:w-[35vw] lg:w-[34vw] flex-shrink-0 px-1 transition-opacity duration-300"
                  style={{
                    opacity: Math.abs(sliderIndex - idx) <= 2 ? 1 : 0.4
                  }}
                >
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-[#1E1D1A]">
                    <img 
                      src={img} 
                      alt={`Furniture Layout ${idx + 1}`} 
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider bottom progress bar */}
          <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-center">
            <div className="w-48 h-[2px] bg-white/10 relative rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--gold)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  width: `${((sliderIndex + 1) / furnitureImages.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Carousel footer columns */}
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "PREMIUM SELECTION",
                desc: "Carefully sourced for quality and comfort.",
                icon: (
                  <svg className="w-6 h-6 stroke-current text-[var(--gold)]" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12a2.25 2.25 0 002.25-2.25V3M3.75 3h16.5M3.75 3v11.25M6 21h12m-9-4.5v4.5m6-4.5v4.5" />
                  </svg>
                )
              },
              {
                title: "DESIGN-LED CHOICES",
                desc: "Furniture that complements your space beautifully.",
                icon: (
                  <svg className="w-6 h-6 stroke-current text-[var(--gold)]" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 14.122A3 3 0 0014.122 9.53M9.53 14.122a3 3 0 104.591-4.592M9.53 14.122L3 20.65M14.122 9.53L20.65 3M16.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                )
              },
              {
                title: "BUILT FOR REAL LIFE",
                desc: "Durable, functional and made for everyday living.",
                icon: (
                  <svg className="w-6 h-6 stroke-current text-[var(--gold)]" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                )
              },
              {
                title: "MADE TO FIT",
                desc: "Perfectly scaled and suited to your lifestyle.",
                icon: (
                  <svg className="w-6 h-6 stroke-current text-[var(--gold)]" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15M3 9h18M3 15h18" />
                  </svg>
                )
              }
            ].map((col, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">{col.icon}</div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-wider text-[var(--bg-ivory)] uppercase mb-2">
                    {col.title}
                  </h4>
                  <p className="text-[11px] text-[var(--ink-light-muted)] leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 08 — WHY ALTAMOUNTT */}
        <section className="section-pad bg-[var(--bg-sand)]" id="why-altamountt">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[var(--line)] pb-6">
              <div>
                <p className="eyebrow">06 / METHODOLOGY</p>
                <h2 className="heading-editorial">
                  <span>FROM FIRST CONVERSATION</span>
                  <span><em>TO HANDOVER.</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] max-w-sm">
                A structured turnkey design and execution workflow eliminating contractor misalignment.
              </p>
            </div>

            <div className="process-table">
              {[
                {
                  num: "01",
                  title: "DISCOVER",
                  desc: "In-depth discovery session exploring your spatial goals, daily rituals, aesthetic preferences, and budget parameters.",
                },
                {
                  num: "02",
                  title: "DESIGN",
                  desc: "Translating concepts into 2D architectural layouts, 3D renders, lighting plans, and tactile mood boards.",
                },
                {
                  num: "03",
                  title: "PLAN",
                  desc: "Meticulously resolving joinery details, finishes, hardware, lighting circuits, and material procurement schedules.",
                },
                {
                  num: "04",
                  title: "EXECUTE",
                  desc: "Dedicated project management supervising carpentry, civil works, electrical integration, and quality craftsmanship.",
                },
                {
                  num: "05",
                  title: "HANDOVER",
                  desc: "Flawless turnkey delivery of your fully finished, styled space with warranties and post-move support.",
                },
              ].map((step, idx) => (
                <div key={step.num} className="process-row-item" data-reveal="up">
                  <span className="process-num">{step.num}</span>
                  <h3 className="process-name">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                  <span className="process-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — REVIEWS */}
        <section className="luxury-testimonials bg-[var(--bg-ivory)] relative overflow-hidden" id="reviews">
          <div className="luxury-testimonials-shell">
            {/* HEADER */}
            <div className="luxury-testimonials-header pb-8 border-b border-[var(--line)]">
              <div className="luxury-testimonials-title-block">
                <p className="micro-label-editorial">07 / GOOGLE REVIEWS</p>
                <h2 className="luxury-testimonials-heading">
                  <span>5.0 ★★★★★</span>
                  <span>ON GOOGLE · <em>10+ REVIEWS</em></span>
                </h2>
              </div>

              <div className="luxury-testimonials-intro mt-4 md:mt-0">
                <p className="text-sm text-[var(--ink-muted)] mb-4">
                  Genuine reviews from clients who have trusted our design-led process.
                </p>
                <a
                  href="https://www.google.com/search?q=altamountt+thane+bhaynder&oq=altamountt+thane+bhaynder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIRgVMgcIAhAhGI8CMgcIAxAhGI8C0gEINjczNGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3be7bbc7a174eccd:0x7ed13fb7d65a6862,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-rating group border-b border-[var(--gold-dark)] pb-1 w-fit flex items-center gap-2 hover:text-[var(--gold-dark)] transition-all"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">READ ALL REVIEWS ON GOOGLE ↗</span>
                </a>
              </div>
            </div>

            {/* REVIEW GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {clientTestimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={`${testimonial.author}-${index}`}
                  className="bg-[var(--bg-sand)] p-8 rounded-xl flex flex-col justify-between h-72 hover:shadow-md transition-shadow duration-300"
                  data-reveal="up"
                >
                  <div>
                    <span className="text-[var(--gold-dark)] text-sm mb-3 block">★★★★★</span>
                    <blockquote className="text-xs md:text-sm text-[var(--ink-muted)] italic leading-relaxed">
                      “{testimonial.quote}”
                    </blockquote>
                  </div>
                  <div className="border-t border-[var(--line)] pt-4 mt-4">
                    <strong className="text-xs text-[var(--ink)] block">{testimonial.author}</strong>
                    <span className="text-[10px] font-mono text-[var(--ink-muted)]">{testimonial.location} · Google Review</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — FINAL CTA */}
        <section className="section-pad bg-[var(--bg-dark)] text-white" id="contact">
          <div className="max-w-7xl mx-auto text-center px-6">
            <p className="eyebrow dark justify-center">08 / START A PROJECT</p>
            <h2 className="heading-editorial mb-12 text-[var(--bg-ivory)]">
              <span>LET&apos;S CREATE</span>
              <span><em>SOMETHING REMARKABLE.</em></span>
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
              <a
                href={`tel:${studioInfo.phone}`}
                className="mono text-xs tracking-widest text-white border border-[rgba(245,242,235,0.2)] rounded-full py-4 px-8 hover:bg-white hover:text-black transition-all"
              >
                CALL: {studioInfo.phoneDisplay}
              </a>
              <a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-primary py-4 px-8"
              >
                WHATSAPP CHAT
              </a>
              <a
                href={`mailto:${studioInfo.email}`}
                className="mono text-xs tracking-widest text-white border border-[rgba(245,242,235,0.2)] rounded-full py-4 px-8 hover:bg-white hover:text-black transition-all"
              >
                EMAIL US
              </a>
              <a
                href="https://www.instagram.com/altamountt_interiors?igsi=MTYzOHlnMXVsZXlpbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs tracking-widest text-white border border-[rgba(245,242,235,0.2)] rounded-full py-4 px-8 hover:bg-white hover:text-black transition-all"
              >
                INSTAGRAM ↗
              </a>
              <Link
                href="/contact"
                className="hero-btn-primary py-4 px-8"
              >
                REQUEST A CONSULTATION <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* MOBILE STICKY WHATSAPP CTA */}
      <div className="fixed bottom-6 right-6 z-[120] md:hidden">
        <a
          href={studioInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.59 1.977 14.13 1.011 11.5 1.011c-5.45 0-9.88 4.379-9.884 9.808-.002 1.83.476 3.62 1.387 5.2l-.994 3.63 3.738-.98c1.554.848 3.125 1.288 4.828 1.285zm11.375-7.6c-.321-.16-1.9-.938-2.193-1.047-.295-.11-.51-.16-.723.16-.213.32-.826 1.047-1.012 1.261-.187.212-.375.24-.697.08-.321-.16-1.356-.5-2.583-1.593-.956-.85-1.6-1.9-1.787-2.22-.188-.32-.02-.492.14-.652.14-.144.32-.374.48-.561.16-.188.214-.32.32-.534.106-.214.053-.4-.027-.56-.08-.16-.723-1.742-.99-2.392-.26-.628-.523-.54-.723-.55-.186-.01-.4-.01-.613-.01s-.56.08-.853.4c-.293.32-1.12 1.1-1.12 2.68 0 1.58 1.147 3.11 1.307 3.32.16.21 2.257 3.447 5.47 4.837.763.33 1.36.527 1.824.674.767.244 1.467.21 2.02.127.618-.093 1.9-.777 2.166-1.49.266-.713.266-1.325.187-1.447-.08-.122-.294-.213-.615-.373z" />
          </svg>
          <span className="font-mono text-[9px] tracking-widest font-semibold ml-2">CHAT</span>
        </a>
      </div>

      <Footer />
    </div>
  );
}

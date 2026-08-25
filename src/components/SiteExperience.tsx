"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  brandPrinciples,
  clientTestimonials,
  imageStackScenes,
  images,
  materialsDetails,
  pinnedStoryScenes,
  process,
  projectsList,
  selectedClients,
  servicesData,
  studioInfo,
} from "@/data/content";
import { Footer, Navigation } from "@/components/SiteChrome";

gsap.registerPlugin(ScrollTrigger);

export function SiteExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStoryScene, setActiveStoryScene] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const isDraggingSlider = useRef(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. HERO LOAD CHOREOGRAPHY (Mandatory Left->Right Masked Reveal)
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

      // 2. SIGNATURE IMAGE STACK MOMENT (Fixed Pin Scroll Animation with invalidateOnRefresh - Desktop Only)
      const stackCards = gsap.utils.toArray<HTMLElement>(".stack-layer-card");
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (stackCards.length >= 3) {
          const stackTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".image-stack-section",
              start: "top top",
              end: "+=1500",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Layer 2 rises over Layer 1
          stackTl.fromTo(
            stackCards[1],
            { yPercent: 100, scale: 0.92, opacity: 0 },
            { yPercent: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
          );

          // Layer 3 slides over Layer 2 and expands
          stackTl.fromTo(
            stackCards[2],
            { xPercent: 100, scale: 0.9, opacity: 0 },
            { xPercent: 0, scale: 1.02, opacity: 1, duration: 1, ease: "power2.out" }
          );
        }
      });

      mm.add("(max-width: 1023px)", () => {
        // Staggered native scroll reveals on mobile for stable scrolling
        if (stackCards.length >= 3) {
          stackCards.forEach((card, idx) => {
            if (idx === 0) return;
            gsap.fromTo(
              card,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  toggleActions: "play none none reverse",
                  invalidateOnRefresh: true,
                }
              }
            );
          });
        }
      });

      // 3. BEFORE / AFTER SCROLL SYNC (Technical drawing to finished space)
      gsap.to(".comparison-after-layer", {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
        scrollTrigger: {
          trigger: ".comparison-container",
          start: "top 85%",
          end: "bottom 15%",
          scrub: true,
          onUpdate: (self) => {
            if (!isDraggingSlider.current) {
              setSliderPos((1 - self.progress) * 100);
            }
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Interactive Dragging handler for Before/After Slider
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingSlider.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    handleSliderMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDraggingSlider.current) {
      handleSliderMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingSlider.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {}
  };

  return (
    <div ref={containerRef} className="page-wrapper">
      <Navigation />

      <main id="main-content">
        {/* 01. HERO SECTION — 100VH VIDEO WITH MASKED TEXT REVEAL */}
        <section className="hero-section" id="hero">
          <div className="absolute inset-0 select-none pointer-events-none">
            <Image 
              src={images.heroPoster} 
              alt="Altamountt Space & Design luxury interior poster" 
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
              <span className="mask-text-line">Altamountt · Thane, Maharashtra</span>
            </p>

            <h1 className="hero-title-main mask-text">
              <span className="mask-text-line">ALTAMOUNTT</span>
              <span className="mask-text-line">SPACE &amp; DESIGN</span>
            </h1>

            <div className="hero-bottom-grid">
              <p className="hero-sub-statement">
                Crafting luxury interiors.<br />
                Defining contemporary lifestyles across Thane &amp; Mumbai.
              </p>

              <div className="hero-actions-row">
                <a href="#commercial-intro" className="hero-btn-primary">
                  Explore Our Spaces <span>→</span>
                </a>
                <a href="#contact" className="hero-btn-secondary">
                  Start a Project <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-scroll-indicator">
            <span>SCROLL</span>
            <div className="scroll-line-bar" />
          </div>
        </section>

        {/* 02. COMMERCIAL INTRODUCTION */}
        <section className="relative bg-[var(--bg-ivory)] overflow-hidden flex items-center py-16 lg:py-32 lg:h-auto lg:min-h-[620px] lg:max-h-[780px]" id="commercial-intro">
          {/* Subtle architectural vertical grid lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: Large editorial typography */}
            <div className="lg:col-span-7 relative z-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[var(--gold-dark)]" />
                <span className="mono text-[10px] text-[var(--gold-dark)] tracking-[0.25em] uppercase">01 / COMMERCIAL</span>
              </div>
              <h2 className="heading-editorial text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] translate-x-[-2px]" data-text-reveal="up">
                <span>SPACES THAT</span>
                <span><em className="text-[var(--gold-dark)] font-serif italic">BUILD BRANDS.</em></span>
              </h2>
              {/* Desktop Only Description & CTA */}
              <div className="mt-8 max-w-md hidden lg:block">
                <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed mb-6">
                  From workplaces and retail environments to hospitality and wellness spaces, we create commercial interiors that balance identity, functionality and experience.
                </p>
                <Link href="/services" className="hero-btn-primary">
                  EXPLORE COMMERCIAL WORK <span>→</span>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Large cropped commercial photograph entering from side */}
            <div className="lg:col-span-5 relative h-full flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden group shadow-xl">
                <div className="media-reveal-wrap h-full w-full relative overflow-hidden" data-reveal="right">
                  <img 
                    src="/client-work/projects/commercial/g-potrait.png" 
                    alt="Commercial Reception Interior Design" 
                    className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                </div>
                {/* Micro metadata over image */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[9px] font-mono text-white bg-[rgba(21,20,18,0.85)] px-3 py-2 backdrop-blur-sm">
                  <span>GOOGLE BKC / RECEPTION</span>
                  <span>19.1175° N, 72.8631° E</span>
                </div>
              </div>
            </div>

            {/* Mobile Only Description & CTA */}
            <div className="block lg:hidden mt-4 w-full">
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
                From workplaces and retail environments to hospitality and wellness spaces, we create commercial interiors that balance identity, functionality and experience.
              </p>
              <Link href="/services" className="hero-btn-primary inline-flex">
                EXPLORE COMMERCIAL WORK <span>→</span>
              </Link>
            </div>

          </div>
        </section>

        {/* 03. COMMERCIAL PORTFOLIO */}
        <section className="section-pad-sm bg-[var(--bg-dark)] text-white relative overflow-hidden" id="commercial-work">
          {/* Subtle horizontal baseline rule */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(245,242,235,0.08)]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col mb-16">
              <span className="mono text-[10px] text-[var(--gold-light)] tracking-widest block mb-2">SELECTED SHOWCASE</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[var(--bg-ivory)]">SELECTED COMMERCIAL WORK</h2>
            </div>

            <div className="flex flex-col gap-24 lg:gap-36">
              {/* GOOGLE: LARGE FEATURE PROJECT */}
              {selectedClients
                .filter((client) => client.name === "GOOGLE")
                .map((client) => (
                  <article key={client.name} className="group relative w-full">
                    <div className="flex items-end justify-between mb-4 border-b border-[rgba(245,242,235,0.1)] pb-3">
                      <div className="flex items-center gap-3">
                        <span className="mono text-sm text-[var(--gold-light)] font-semibold">01</span>
                        <h3 className="text-2xl md:text-3xl font-serif text-white">{client.name}</h3>
                      </div>
                      <span className="mono text-[10px] text-[var(--ink-light-muted)] uppercase tracking-widest">BKC / MUMBAI · WORKPLACE</span>
                    </div>

                    <div className="media-reveal-wrap overflow-hidden h-[50vh] md:h-[70vh] lg:h-[75vh] w-full relative transition-transform duration-700 ease-out group-hover:scale-[1.005]" data-reveal="scale">
                       <img 
                         src={client.image} 
                         alt={client.name} 
                         className="media-reveal-inner object-cover w-full h-full" 
                         style={{ objectPosition: "center 40%" }}
                         loading="lazy" 
                       />
                    </div>
                    
                    <div className="flex justify-between items-start mt-4">
                      <p className="text-xs text-[var(--ink-light-muted)] max-w-sm leading-relaxed">
                        High-performance workspace resolved around open flow, wave-patterned ceilings, and bespoke concrete features.
                      </p>
                      <Link href="/projects/google-bkc" className="text-xs text-[var(--gold-light)] uppercase tracking-widest hover:text-white transition-colors border-b border-current pb-[2px]">
                        EXPLORE CASE STUDY →
                      </Link>
                    </div>
                  </article>
                ))}

              {/* LAKME + PACHOULI: ASYMMETRIC GRID WITH DIFFERENT HEIGHTS & VERTICAL POSITIONS */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
                {selectedClients
                  .filter((client) => client.name !== "GOOGLE")
                  .map((client, idx) => (
                    <article 
                      key={client.name} 
                      className={`group flex flex-col justify-end md:col-span-6 ${idx === 0 ? "lg:col-span-5 md:mt-12" : "lg:col-span-7 lg:mt-0"}`}
                    >
                       <div className="flex items-end justify-between mb-4 border-b border-[rgba(245,242,235,0.1)] pb-2">
                         <div className="flex items-center gap-2">
                           <span className="mono text-[10px] text-[var(--gold-light)]">0{idx + 2}</span>
                           <h3 className="text-xl md:text-2xl font-serif text-white">{client.name}</h3>
                         </div>
                         <span className="mono text-[9px] text-[var(--ink-light-muted)] uppercase tracking-widest">
                           {client.descriptor.split('·')[0]}
                         </span>
                       </div>

                       <div 
                         className={`media-reveal-wrap overflow-hidden relative transition-transform duration-700 ease-out group-hover:scale-[1.01] ${idx === 0 ? "aspect-[3/4] md:h-[55vh]" : "aspect-[4/3] md:h-[45vh]"}`} 
                         data-reveal={idx === 0 ? "up" : "right"}
                       >
                          <img src={client.image} alt={client.name} className="media-reveal-inner object-cover w-full h-full" loading="lazy" />
                       </div>

                       <div className="flex justify-between items-start mt-4">
                          <p className="text-[11px] text-[var(--ink-light-muted)] leading-normal max-w-xs">
                            {idx === 0 
                              ? "Premium salon framing treatment zones, architectural copper details, and raw brick accents."
                              : "Wellness clinic utilizing organic textures, fluted wall screens, and integrated spatial flow."
                            }
                          </p>
                          <Link href={idx === 0 ? "/projects/lakme-salon" : "/projects/pachouli-wellness"} className="text-[10px] text-[var(--gold-light)] uppercase tracking-widest hover:text-white transition-colors flex-shrink-0 ml-4 border-b border-current pb-[1px]">
                            EXPLORE →
                          </Link>
                       </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04. COMMERCIAL SERVICES / CAPABILITIES */}
        <section className="section-pad bg-[var(--bg-dark)] text-white relative overflow-hidden" id="commercial-capabilities">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="max-w-7xl mx-auto h-full w-full border-x border-white grid grid-cols-4">
              <div className="border-r border-white h-full" />
              <div className="border-r border-white h-full" />
              <div className="border-r border-white h-full" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow dark">02 / CAPABILITIES</p>
                <h2 className="heading-editorial text-4xl md:text-6xl" data-text-reveal="left">
                  <span>COMMERCIAL</span>
                  <span><em>SPECIALIZATIONS.</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-light-muted)] max-w-xs leading-relaxed">
                Engineering commercial venues with high spatial efficiency, acoustic comfort, and brand identity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
              {[
                { title: "Workplace Interiors", desc: "High-productivity corporate hubs and executive suites.", num: "01" },
                { title: "Retail & Brand Spaces", desc: "Flagship showrooms and experiential retail outlets.", num: "02" },
                { title: "Hospitality & Lounges", desc: "Engaging cafes, diners, and boutique lounge experiences.", num: "03" },
                { title: "Salon & Wellness", desc: "Modern premium styling salons, clinics, and spas.", num: "04" },
                { title: "Interior Architecture", desc: "Transformative structural reconfiguration and custom joinery.", num: "05" },
                { title: "Turnkey Execution", desc: "Flawless site construction management from sketch to handover.", num: "06" }
              ].map((cap, idx) => (
                <div key={cap.title} className="border-t border-[rgba(245,242,235,0.15)] pt-6 flex flex-col justify-between h-48 group hover:border-[var(--gold)] transition-colors duration-500">
                  <div>
                    <span className="mono text-[10px] text-[var(--gold-light)] block mb-3">{cap.num} // SPECIFICATION</span>
                    <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-[var(--gold-light)] transition-colors duration-500">{cap.title}</h3>
                  </div>
                  <p className="text-xs text-[var(--ink-light-muted)] leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05. PROJECT IN PROGRESS VIDEO */}
        <section className="py-24 lg:py-32 bg-[var(--bg-ivory)] relative overflow-hidden" id="project-in-progress">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* LEFT 42% */}
             <div className="lg:col-span-6 relative flex flex-col justify-center min-w-0">
                {/* Thin gold vertical line running from heading area toward the video */}
                <div className="hidden lg:block absolute left-[-24px] top-0 bottom-[-40px] w-[1px] bg-[var(--gold-dark)] opacity-30" />

                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-[1px] bg-[var(--gold-dark)]" />
                  <p className="eyebrow dark !mb-0 text-[var(--gold-dark)]">PROJECT IN PROGRESS</p>
                </div>
                
               <h2
                  className="heading-editorial text-5xl md:text-[clamp(4rem,5.8vw,6.5rem)] mb-8 leading-[0.9] tracking-[-0.025em] overflow-visible"
                  data-text-reveal="left"
                >
                  <span className="block whitespace-normal md:whitespace-nowrap">DESIGN IS</span>
                  <span className="block whitespace-normal md:whitespace-nowrap">ONLY THE</span>
                  <span className="block whitespace-normal md:whitespace-nowrap">
                    <em className="text-[var(--gold-dark)]">BEGINNING.</em>
                  </span>
                </h2>
                
                <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed max-w-sm mt-4 border-t border-[var(--line)] pt-6">
                  From drawings and planning to execution on site, every project is shaped through careful coordination and attention to detail.
                </p>

                {/* Staggered vertical coordinates text for design detail */}
                <div className="mt-8 flex flex-col gap-1 text-[10px] font-mono text-[var(--ink-muted)] uppercase tracking-widest border-l-2 border-[var(--gold-dark)] pl-4">
                  <span>PHASE / SITE SURVEY &amp; EXECUTION</span>
                  <span>COORD / 19.2638° N, 72.9815° E</span>
                </div>
              </div>

              {/* RIGHT 58% */}
              <div className="lg:col-span-6 flex flex-col items-center lg:items-end min-w-0">
                {/* Video container with targeted styling (width 42-48vw, height 600-720px on desktop) */}
                <div className="relative w-full lg:w-[45vw] lg:max-w-[500px] aspect-[9/16] shadow-2xl p-2 border border-[rgba(21,20,18,0.12)] bg-white rounded-sm">
                  <div className="media-reveal-wrap h-full w-full relative overflow-hidden" data-reveal="scale">
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
                  
                  {/* Subtle metadata beneath it */}
                  <div className="flex justify-between w-full mt-3 px-1 text-[10px] font-mono tracking-widest text-[var(--ink-muted)] uppercase">
                    <span>COMMERCIAL · IN PROGRESS</span>
                    <span>THANE, MAHARASHTRA</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 06. COMMERCIAL → RESIDENTIAL TRANSITION */}
        <section className="relative py-32 lg:py-48 bg-black text-white overflow-hidden flex items-center min-h-[50vh] lg:min-h-[65vh]" id="transition">
          {/* Large cropped residential background image at very low opacity for depth */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              src={images.living} 
              alt="Bespoke Residential Living Space" 
              className="w-full h-full object-cover filter grayscale scale-105" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-[var(--gold)]" />
              <p className="eyebrow dark !mb-0 text-[var(--gold)]">02 / RESIDENTIAL</p>
              <span className="w-8 h-[1px] bg-[var(--gold)]" />
            </div>
            
            <h2 className="heading-editorial text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] max-w-4xl mx-auto" data-text-reveal="up">
              <span>SPACES MADE</span>
              <span><em className="text-[var(--gold)] font-serif italic">FOR LIVING.</em></span>
            </h2>
            
            <p className="text-sm md:text-base text-[var(--ink-light-muted)] mt-8 max-w-md leading-relaxed mx-auto border-t border-[rgba(245,242,235,0.2)] pt-6">
              From considered layouts to refined details, we create homes shaped around the people who live in them.
            </p>
          </div>
        </section>

        {/* 07. RESIDENTIAL INTRO */}
        <section className="py-24 lg:py-36 bg-[var(--bg-ivory)] relative overflow-hidden" id="residential-intro">
          {/* Subtle background detail */}
          <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT COLUMN: Large residential image */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] overflow-hidden group shadow-lg">
                <div className="media-reveal-wrap h-full w-full relative overflow-hidden" data-reveal="left">
                  <img 
                    src={images.penthouse} 
                    alt="Luxury residential design in Thane" 
                    className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                </div>
                <div className="absolute bottom-4 left-4 text-[9px] font-mono text-white bg-[rgba(21,20,18,0.85)] px-3 py-1.5 backdrop-blur-sm uppercase">
                  TYPOLOGY / RESIDENTIAL
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Oversized typography and metadata */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-[var(--gold-dark)]" />
                <span className="mono text-[10px] text-[var(--gold-dark)] tracking-widest uppercase">RESIDENTIAL · BESPOKE INTERIORS</span>
              </div>
              
              <h3 className="heading-editorial text-4xl md:text-6xl mb-6 leading-[0.95]" data-text-reveal="right">
                <span>HOMES WITH</span>
                <span><em>A POINT OF VIEW.</em></span>
              </h3>
              
              <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed mb-8 max-w-sm border-b border-[var(--line)] pb-6">
                Thoughtfully planned homes where proportion, material, light and everyday functionality come together.
              </p>
              
              <Link href="/services/residential" className="hero-btn-primary">
                EXPLORE RESIDENTIAL WORK <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 08. RESIDENTIAL PORTFOLIO */}
        <section className="py-24 lg:py-36 bg-[var(--bg-ivory)] relative" id="residential-work">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col mb-16 border-b border-[var(--line)] pb-4">
              <span className="mono text-[10px] text-[var(--gold-dark)] tracking-widest block mb-2">CURATED GALLERY</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight">RESIDENTIAL WORK</h2>
            </div>

            <div className="flex flex-col gap-24 lg:gap-36">
              {/* Item 1: Large Master Suite Image */}
              <article className="group relative w-full">
                <div className="flex justify-between items-end mb-4">
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs text-[var(--gold-dark)]">01</span>
                    <h3 className="text-xl md:text-2xl font-serif">MASTER SUITES</h3>
                  </div>
                  <span className="mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest">BEDROOM / THANE</span>
                </div>
                
                <div className="media-reveal-wrap h-[55vh] md:h-[75vh] w-full mb-4 relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.005]" data-reveal="up">
                  <img src={images.bedroom} alt="Master Bedroom Suite design" className="media-reveal-inner object-cover w-full h-full" loading="lazy" />
                </div>
                
                <p className="text-xs text-[var(--ink-muted)] max-w-xs leading-normal">
                  Tactile master suite layouts focusing on textured fabrics, integrated wardrobes, and custom illumination.
                </p>
              </article>

              {/* Items 2 & 3: Asymmetric columns */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
                
                {/* Dining (Portrait) */}
                <article className="group flex flex-col justify-end md:col-span-5 md:mt-12">
                  <div className="flex justify-between items-end mb-4 border-b border-[var(--line)] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="mono text-[10px] text-[var(--gold-dark)]">02</span>
                      <h3 className="text-lg md:text-xl font-serif">DINING INTERIORS</h3>
                    </div>
                    <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">DINING ROOM</span>
                  </div>

                  <div className="media-reveal-wrap overflow-hidden relative aspect-[3/4] md:h-[55vh] transition-transform duration-700 ease-out group-hover:scale-[1.01]" data-reveal="left">
                    <img src={images.dining} alt="Architectural dining layout" className="media-reveal-inner object-cover w-full h-full" loading="lazy" />
                  </div>
                  
                  <p className="text-[11px] text-[var(--ink-muted)] leading-normal mt-4 max-w-xs">
                    Curated dining setups featuring marble tables, brass frames, and tailored ergonomic seating.
                  </p>
                </article>

                {/* Living (Large/Landscape style) */}
                <article className="group flex flex-col justify-end md:col-span-7">
                  <div className="flex justify-between items-end mb-4 border-b border-[var(--line)] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="mono text-[10px] text-[var(--gold-dark)]">03</span>
                      <h3 className="text-lg md:text-xl font-serif">LIVING SPACES</h3>
                    </div>
                    <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">LIVING &amp; LOUNGE</span>
                  </div>

                  <div className="media-reveal-wrap overflow-hidden relative aspect-[4/3] md:h-[45vh] transition-transform duration-700 ease-out group-hover:scale-[1.01]" data-reveal="right">
                    <img src={images.living} alt="Bespoke luxury living room design" className="media-reveal-inner object-cover w-full h-full" loading="lazy" />
                  </div>

                  <p className="text-[11px] text-[var(--ink-muted)] leading-normal mt-4 max-w-xs">
                    Expansive open-plan lounge layout integrated with modular media wall storage and custom stone details.
                  </p>
                </article>
              </div>

              {/* Item 4: Large Bespoke Kitchen */}
              <article className="group relative w-full">
                <div className="flex justify-between items-end mb-4">
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs text-[var(--gold-dark)]">04</span>
                    <h3 className="text-xl md:text-2xl font-serif">BESPOKE KITCHENS</h3>
                  </div>
                  <span className="mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest">KITCHEN / EXECUTION</span>
                </div>
                
                <div className="media-reveal-wrap h-[55vh] md:h-[75vh] w-full mb-4 relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.005]" data-reveal="scale">
                  <img src={images.kitchen} alt="Modern luxury modular kitchen" className="media-reveal-inner object-cover w-full h-full" loading="lazy" />
                </div>
                
                <p className="text-xs text-[var(--ink-muted)] max-w-xs leading-normal">
                  Bespoke layout configuration optimizing workflow efficiency, integrated appliances, and luxury surfaces.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* DESIGN WITH PRECISION (Image Stack) */}
        <section className="image-stack-section lg:h-screen lg:flex lg:flex-col lg:justify-center lg:py-0 py-16 px-6 relative overflow-hidden bg-[var(--bg-dark-surface)]" id="image-stack">
          {/* Architectural grid lines background for depth */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-7xl mx-auto h-full w-full border-x border-white grid grid-cols-6">
              <div className="border-r border-white h-full" />
              <div className="border-r border-white h-full" />
              <div className="border-r border-white h-full" />
              <div className="border-r border-white h-full" />
              <div className="border-r border-white h-full" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto mb-12 text-center px-6 relative z-10">
            <p className="eyebrow dark justify-center">Layered Architecture</p>
            <h2 className="heading-editorial text-4xl md:text-6xl" data-text-reveal="left">
              <span>DESIGN WITH</span>
              <span><em>PRECISION.</em></span>
            </h2>
            <p className="text-sm text-[var(--ink-light-muted)] mt-4">
              Watch structural planning, bespoke finishes, and custom millwork integrate seamlessly.
            </p>
          </div>

          <div className="stack-stage-container w-full max-w-[1050px] mx-auto relative h-[60vh] md:h-[65vh] z-10">
            {imageStackScenes.map((item, idx) => (
              <div
                key={item.id}
                className="stack-layer-card"
                style={{ zIndex: idx + 1 }}
              >
                <img src={item.image} alt={item.title} />
                
                {/* Floating tags */}
                <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 bg-[rgba(21,20,18,0.85)] backdrop-blur-md px-3 py-1.5 text-[9px] font-mono tracking-widest text-[var(--gold-light)] rounded-sm">
                  <span>0{idx+1} / PROCESS STATE</span>
                </div>

                <div className="stack-card-caption">
                  <span className="mono text-[10px] text-[var(--gold-light)] block mb-1">
                    {item.label}
                  </span>
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <p className="text-xs text-[var(--ink-light-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MATERIALS & DETAILS TACTILE SECTION */}
        <section className="section-pad bg-[var(--bg-ivory)]" id="materials-details">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow">Tactile Craftsmanship</p>
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>DETAILS</span>
                  <span><em>MATTER.</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] max-w-sm">
                Stone, grain, metal, and light. The understated decisions that make an interior unmistakably yours.
              </p>
            </div>

            <div className="materials-tactile-grid">
              {materialsDetails.map((mat) => (
                <div key={mat.title} className="material-card-item">
                  <div className="material-card-img media-reveal-wrap" data-reveal={mat.preset}>
                    <img src={mat.image} alt={mat.title} className="media-reveal-inner" loading="lazy" />
                  </div>
                  <h3 className="material-card-title">{mat.title}</h3>
                  <p className="material-card-sub">{mat.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCESSIBLE LUXURY PRINCIPLES */}
        <section className="section-pad bg-[var(--bg-sand)]" id="principles">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 media-reveal-wrap h-[450px] md:h-[620px]" data-reveal="up">
                <img
                  src={images.kitchen}
                  alt="Precision bespoke kitchen design"
                  className="media-reveal-inner"
                  loading="lazy"
                />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="eyebrow">Accessible Luxury</p>
                <h2 className="heading-editorial mb-6" data-text-reveal="left">
                  <span>DESIGNED FOR YOUR BUDGET.</span>
                  <span><em>BUILT FOR YOUR LIFE.</em></span>
                </h2>
                <i className="gold-line" data-gold-line />

                <div className="flex flex-col gap-6">
                  {brandPrinciples.map((principle) => (
                    <div key={principle.title} className="border-t border-[var(--line)] pt-4">
                      <h3 className="text-xl font-serif font-medium mb-1">
                        {principle.title}
                      </h3>
                      <p className="text-sm font-semibold text-[var(--gold-dark)] mb-1">
                        {principle.subtitle}
                      </p>
                      <p className="text-xs md:text-sm text-[var(--ink-muted)] leading-relaxed">
                        {principle.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09. DESIGN / DRAWING → SPACE (Before/After Slider with actual drawing1.png) */}
        <section className="section-pad-sm bg-[var(--bg-dark)] text-white" id="transformation">
          <div className="max-w-7xl mx-auto mb-10 px-6">
            <p className="eyebrow dark">Design Process</p>
            <h2 className="heading-editorial" data-text-reveal="left">
              <span>FROM DRAWING</span>
              <span><em>TO SPACE.</em></span>
            </h2>
            <p className="text-sm text-[var(--ink-light-muted)] mt-4">
              Drag the divider or scroll to witness how we translate precise CAD engineering layouts and architectural drawings into stunning finished interior spaces.
            </p>
          </div>

          <div
            ref={sliderContainerRef}
            className="comparison-container max-w-7xl mx-auto"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* BEFORE LAYER (Real client blueprint layout) */}
            <div className="comparison-image-layer">
              <img src="/client-work/interiors/drawing1.png" alt="Technical interior drawing layout" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
              <div className="comparison-badge" style={{ left: "3rem", color: 'black' }}>
                TECHNICAL DRAWING
              </div>
            </div>

            {/* AFTER LAYER (Finished project wardrobe space) */}
            <div
              className="comparison-image-layer comparison-after-layer"
              style={{
                clipPath: `inset(0 0 0 ${sliderPos}%)`,
              }}
            >
              <img src={images.flutedWood} alt="Finished completed residence wardrobe interior" />
              <div className="comparison-badge" style={{ right: "3rem" }}>
                FINISHED SPACE
              </div>
            </div>

            {/* DIVIDER HANDLE */}
            <div
              className="comparison-divider"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="comparison-divider-handle">
                ↔
              </div>
            </div>
          </div>
        </section>

        {/* 10. SERVICES OVERVIEW */}
        <section className="section-pad bg-[var(--bg-dark)] text-[var(--bg-ivory)]" id="services">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow dark">Services Overview</p>
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>ONE STUDIO.</span>
                  <span><em>EVERY DETAIL.</em></span>
                </h2>
              </div>
              <Link
                href="/services"
                className="mono text-xs text-[var(--gold-light)] flex items-center gap-2 border-b border-[var(--gold-light)] pb-1 w-fit hover:text-white hover:border-white transition-colors"
              >
                View Full Service Matrix <span>→</span>
              </Link>
            </div>

            <div className="services-editorial-grid">
              {servicesData.map((service, index) => {
                const revealPreset = index % 2 === 0 ? "up" : "right";
                return (
                  <article
                    key={service.id}
                    className="service-card-item"
                    data-reveal={revealPreset}
                  >
                    <div className="service-card-bg">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-card-overlay" />

                    <div className="service-card-content">
                      <div>
                        <span className="service-card-num">{service.number}</span>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-desc">{service.tagline}</p>
                      </div>

                      <div>
                        <ul className="service-card-list">
                          {service.subservices.slice(0, 3).map((sub) => (
                            <li key={sub}>{sub}</li>
                          ))}
                        </ul>

                        <Link href={`/services/${service.id}`} className="service-card-link">
                          Explore Category <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11. ALTAMOUNTT POINT OF VIEW */}
        <section className="section-pad !pt-32 md:!pt-40 lg:!pt-48" id="brand-statement">
          <div className="max-w-7xl mx-auto px-6">
            <p className="eyebrow">The Altamountt Point of View</p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* TEXT */}
              <div className="lg:col-span-6">
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>YOUR <em className="word-accent">SPACE.</em></span>
                  <span>YOUR <em className="word-accent">STORY.</em></span>
                  <span>OUR <em className="word-accent">DESIGN.</em></span>
                </h2>

                <i className="gold-line" data-gold-line />

                <p className="text-lg md:text-xl text-[var(--ink-muted)] leading-relaxed max-w-xl">
                  From thoughtful spatial reconfiguration to complete turnkey execution,
                  Altamountt creates architectural interiors that balance timeless elegance,
                  practical functionality, and realistic budgets.
                </p>

                <div className="trusted-by mt-12 pt-7 max-w-xl">
                  <div className="trusted-by-heading">
                    <span className="trusted-by-line" />
                    <span>Trusted By</span>
                  </div>

                  <div className="trusted-by-list">
                    <span>GOOGLE</span>
                    <span>LAKMÉ</span>
                    <span>PACHOULI</span>
                  </div>
                </div>
              </div>

              {/* IMAGE (Residential penthouse image) */}
              <div className="lg:col-span-6 flex flex-col gap-8">
                <div className="media-reveal-wrap brand-video-wrap h-[520px] md:h-[540px] lg:h-[500px] overflow-hidden rounded-xl" data-reveal="up">
                  <img 
                    src={images.penthouse} 
                    alt="Bespoke Residential Penthouse View by Altamountt" 
                    className="media-reveal-inner object-cover w-full h-full" 
                    loading="lazy" 
                  />
                </div>

                <div className="border-t border-[var(--line)] pt-6 flex justify-between items-center text-xs font-mono tracking-widest text-[var(--ink-muted)]">
                  <span>LOCATION: ASHAR - THANE WEST</span>
                  <span>TYPOLOGY: RESIDENTIAL PENTHOUSE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. PROCESS SECTION */}
        <section className="section-pad bg-[var(--bg-ivory)]" id="process">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow">Our Five-Step Methodology</p>
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>FROM CONCEPT</span>
                  <span><em>TO KEYS.</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] max-w-sm">
                A structured, transparent turnkey workflow eliminating stress, hidden costs, and contractor misalignment.
              </p>
            </div>

            <div className="process-table">
              {process.map(([num, name, desc]) => (
                <div key={num} className="process-row-item">
                  <span className="process-num">{num}</span>
                  <h3 className="process-name">{name}</h3>
                  <p className="process-desc">{desc}</p>
                  <span className="process-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. TESTIMONIALS */}
        <section className="luxury-testimonials" id="testimonials">
          <div className="luxury-testimonials-shell">
            {/* HEADER */}
            <div className="luxury-testimonials-header">
              <div className="luxury-testimonials-title-block">
                <p className="luxury-testimonials-eyebrow">Client Experiences</p>
                <h2 className="luxury-testimonials-heading" data-text-reveal="left">
                  <span>THE CLIENT</span>
                  <span><em>COMES FIRST.</em></span>
                </h2>
              </div>

              <div className="luxury-testimonials-intro">
                <p>
                  Every space begins with understanding the people who will experience it. Our approach brings together thoughtful design, practical functionality and meticulous execution.
                </p>

                <a 
                  href="https://www.google.com/search?q=altamountt+thane+bhaynder&oq=altamountt+thane+bhaynder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIRgVMgcIAhAhGI8CMgcIAxAhGI8C0gEINjczNGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3be7bbc7a174eccd:0x7ed13fb7d65a6862,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-rating group"
                >
                  <span className="luxury-rating-number">5.0</span>
                  <div className="luxury-rating-details">
                    <div className="luxury-rating-stars text-[var(--gold)] group-hover:text-white transition-colors">★★★★★</div>
                    <span className="group-hover:underline text-[var(--ink-muted)]">
                      {studioInfo.reviewCount}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* FEATURED REVIEW */}
            <a 
              href="https://www.google.com/search?q=altamountt+thane+bhaynder&oq=altamountt+thane+bhaynder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIRgVMgcIAhAhGI8CMgcIAxAhGI8C0gEINjczNGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3be7bbc7a174eccd:0x7ed13fb7d65a6862,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-featured-review block group"
              data-reveal="up"
            >
              <div className="luxury-quote-symbol">“</div>
              <div className="luxury-featured-review-content">
                <span className="luxury-review-label group-hover:text-[var(--gold)] transition-colors">01 / FEATURED REVIEW</span>
                <blockquote>“{clientTestimonials[0].quote}”</blockquote>
                <div className="luxury-featured-review-author">
                  <span className="luxury-author-line" />
                  <div>
                    <strong>{clientTestimonials[0].author}</strong>
                    <span>{clientTestimonials[0].location} · Google Review</span>
                  </div>
                </div>
              </div>
            </a>

            {/* REVIEW GRID */}
            <div className="luxury-review-grid">
              {clientTestimonials.slice(1, 5).map((testimonial, index) => (
                <a 
                  key={`${testimonial.author}-${index}`}
                  href="https://www.google.com/search?q=altamountt+thane+bhaynder&oq=altamountt+thane+bhaynder&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIRgVMgcIAhAhGI8CMgcIAxAhGI8C0gEINjczNGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3be7bbc7a174eccd:0x7ed13fb7d65a6862,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-review-card block group"
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                >
                  <div className="luxury-review-card-top">
                    <span className="luxury-review-number">0{index + 2}</span>
                    <span className="luxury-review-stars text-[var(--gold)]">★★★★★</span>
                  </div>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <div className="luxury-review-card-footer">
                    <div>
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.location} · Google Review</span>
                    </div>
                    <span className="luxury-review-arrow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </div>
                </a>
              ))}
            </div>

            {/* BOTTOM STATEMENT */}
            <div className="luxury-testimonials-bottom">
              <span className="luxury-bottom-line" />
              <p>
                Designed around people. <em>Built around trust.</em>
              </p>
              <span className="luxury-bottom-line" />
            </div>
          </div>
        </section>

        {/* 14. FINAL CINEMATIC */}
        <section className="relative h-[85vh] min-h-[550px] overflow-hidden bg-black text-white" id="cinematic-final">
          <div className="media-reveal-wrap h-full" data-reveal="scale">
            <img
              src={images.final}
              alt="Immaculately completed Altamountt residence"
              className="media-reveal-inner opacity-80"
              loading="lazy"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,20,18,0.85)] via-[rgba(21,20,18,0.3)] to-transparent flex flex-col justify-end p-8 md:p-16">
            <div className="max-w-7xl mx-auto w-full">
              <p className="eyebrow dark">Make It Yours</p>
              <h2 className="heading-editorial max-w-2xl" data-text-reveal="left">
                <span>A SPACE WORTH</span>
                <span><em>COMING HOME TO.</em></span>
              </h2>
            </div>
          </div>
        </section>

        {/* 15. FINAL CTA */}
        <section className="section-pad bg-[var(--bg-dark)] text-white" id="contact">
          <div className="max-w-7xl mx-auto text-center px-6">
            <p className="eyebrow dark justify-center">Let's Begin</p>
            <h2 className="heading-editorial mb-12" data-text-reveal="up">
              <span>LET'S CREATE</span>
              <span><em>SOMETHING REMARKABLE.</em></span>
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
              <a 
                href={`tel:${studioInfo.phoneDisplay.replace(/\s+/g, '')}`} 
                className="mono text-xs tracking-widest text-white border border-[rgba(245,242,235,0.2)] rounded-full py-4 px-8 hover:bg-white hover:text-black transition-all"
              >
                CALL
              </a>
              <a 
                href={studioInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn-primary py-4 px-8"
              >
                WHATSAPP
              </a>
              <a 
                href={`mailto:${studioInfo.email}`} 
                className="mono text-xs tracking-widest text-white border border-[rgba(245,242,235,0.2)] rounded-full py-4 px-8 hover:bg-white hover:text-black transition-all"
              >
                EMAIL
              </a>
              <a 
                href="https://www.instagram.com/altamountt_interiors?igsi=MTYzOHlnMXVsZXlpbw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mono text-xs tracking-widest text-white border border-[rgba(245,242,235,0.2)] rounded-full py-4 px-8 hover:bg-white hover:text-black transition-all"
              >
                INSTAGRAM
              </a>
              <Link 
                href="/contact" 
                className="hero-btn-primary py-4 px-8"
              >
                START A PROJECT <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useLayoutEffect, useRef } from "react";
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

export function SiteExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Filter 4 strongest projects for Selected Projects section
  const selectedProjects = projectsList.filter((p) =>
    ["google-bkc", "selected-residence", "lakme-salon", "pachouli-wellness"].includes(p.slug)
  );

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

        {/* 02 — SELECTED PROJECTS */}
        <section className="section-pad bg-[var(--bg-ivory)] relative overflow-hidden" id="selected-projects">
          {/* Subtle architectural vertical grid lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col mb-16 border-b border-[var(--line)] pb-4">
              <span className="mono text-[10px] text-[var(--gold-dark)] tracking-widest block mb-2">02 / PORTFOLIO SHAPING SPACE</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight">SELECTED WORK</h2>
            </div>

            <div className="flex flex-col gap-24 md:gap-32">
              {selectedProjects.map((project, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <article
                    key={project.slug}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
                    data-reveal="up"
                  >
                    {/* Image Column */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="editorial-image-frame corner-bracket-wrap shadow-xl">
                        <div className="relative aspect-[16/10] overflow-hidden group">
                          <img
                            src={project.heroImage}
                            alt={project.title}
                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Micro metadata over image */}
                          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[9px] font-mono text-white bg-[rgba(21,20,18,0.85)] px-3 py-2 backdrop-blur-sm">
                            <span>{project.title.toUpperCase()}</span>
                            <span>{project.location.toUpperCase()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}>
                      <span className="mono text-[10px] text-[var(--gold-dark)] mb-2">0{idx + 1} / {project.category.toUpperCase()}</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-[var(--ink)] mb-3 leading-snug">
                        {project.title}
                      </h3>
                      <div className="mb-4 text-xs font-mono text-[var(--ink-muted)] flex flex-col gap-1 border-y border-[var(--line)] py-3">
                        <span>ROLE / {project.role}</span>
                        <span>SCOPE / {project.scope}</span>
                        {project.area && <span>AREA / {project.area}</span>}
                      </div>
                      <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
                        {project.intro}
                      </p>
                      <Link href={`/projects/${project.slug}`} className="text-xs text-[var(--gold-dark)] font-semibold tracking-widest uppercase hover:text-black transition-colors border-b border-current pb-[2px] w-fit">
                        VIEW PROJECT →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <Link href="/projects" className="hero-btn-primary">
                VIEW ALL PROJECTS <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 03 — WHAT WE DO */}
        <section className="section-pad bg-[var(--bg-dark)] text-white relative overflow-hidden" id="what-we-do">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[rgba(245,242,235,0.15)] pb-6">
              <div>
                <p className="eyebrow dark">03 / SPECIALIZATIONS</p>
                <h2 className="heading-editorial text-4xl md:text-6xl">
                  <span>WHAT WE</span>
                  <span><em>DO.</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-light-muted)] max-w-sm leading-relaxed">
                Straightforward spatial planning, turnkey contracting, and functional interiors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  id: "residential",
                  title: "RESIDENTIAL",
                  tagline: "Homes designed around how you live.",
                  desc: "Considered layouts, space optimization, and materials specified for Thane's climate, ensuring beautiful and liveable spaces.",
                },
                {
                  id: "commercial",
                  title: "COMMERCIAL",
                  tagline: "Workplaces, retail and wellness spaces designed around your brand.",
                  desc: "We design and build spaces that work beautifully for the people who use them and the brands they represent.",
                },
                {
                  id: "turnkey",
                  title: "TURNKEY SOLUTIONS",
                  tagline: "One team from design through execution and handover.",
                  desc: "Single-point accountability managing budgeting, material procurement, civil work, and detailing.",
                },
              ].map((service) => (
                <div
                  key={service.id}
                  className="border-t border-[rgba(245,242,235,0.15)] pt-6 flex flex-col justify-between h-64 group hover:border-[var(--gold)] transition-colors duration-500"
                  data-reveal="up"
                >
                  <div>
                    <h3 className="text-xl font-serif text-[var(--gold-light)] mb-2 group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[var(--gold-light)] font-semibold mb-3 leading-normal">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-[var(--ink-light-muted)] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <Link href={`/services#${service.id}`} className="text-[10px] text-[var(--gold-light)] uppercase tracking-widest hover:text-white transition-colors border-b border-current pb-[1px] w-fit">
                    LEARN MORE →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — WHY ALTAMOUNTT */}
        <section className="section-pad bg-[var(--bg-sand)]" id="why-altamountt">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[var(--line)] pb-6">
              <div>
                <p className="eyebrow">04 / CORE VALUES</p>
                <h2 className="heading-editorial">
                  <span>WHY</span>
                  <span><em>ALTAMOUNTT?</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] max-w-sm">
                Thoughtful spatial planning, budget-conscious decisions, and turnkey execution under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  title: "DESIGN-LED",
                  desc: "Every project begins with considered spatial planning. We resolve the architectural envelope and light flow before selecting finishes.",
                  image: images.detail,
                },
                {
                  num: "02",
                  title: "BUDGET-CONSCIOUS",
                  desc: "Premium design without unnecessary budget inflation. We combine high-impact finishes with durable value-engineered substrates.",
                  image: images.material,
                },
                {
                  num: "03",
                  title: "ONE POINT OF ACCOUNTABILITY",
                  desc: "Design, coordination, and turnkey execution under one roof. No vendor blame games, only scheduled delivery.",
                  image: images.officeInterior,
                },
                {
                  num: "04",
                  title: "BUILT FOR REAL LIFE",
                  desc: "Beautiful spaces designed for everyday use. We build using BWP substrates and textures calibrated for real life.",
                  image: images.living,
                },
              ].map((value) => (
                <div
                  key={value.num}
                  className="bg-[var(--bg-ivory)] border border-[var(--line)] flex flex-col justify-between hover:shadow-lg transition-all duration-500 rounded-2xl overflow-hidden group"
                  data-reveal="up"
                >
                  {/* Image Header with rounded-t corners */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--bg-sand)]">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[rgba(21,20,18,0.9)] text-[var(--gold-light)] px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase rounded">
                      VALUE / {value.num}
                    </div>
                  </div>

                  {/* Explicit padding and typography styles to avoid global reset conflicts */}
                  <div style={{ padding: "28px 24px 28px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3
                      className="text-[var(--ink)] font-serif"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "-0.015em",
                        lineHeight: "1.3",
                        marginBottom: "12px",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-[var(--ink-muted)]"
                      style={{
                        fontSize: "12.5px",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — PROJECT IN PROGRESS */}
        <section className="py-24 lg:py-32 bg-[var(--bg-ivory)] relative overflow-hidden" id="project-in-progress">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 relative flex flex-col justify-center min-w-0" data-reveal="up">
                <div className="flex items-center gap-4 mb-6">
                  <span className="micro-label-editorial">05 / ON SITE EVIDENCE</span>
                </div>

                <h2 className="heading-editorial text-5xl md:text-[clamp(3.5rem,5vw,6rem)] mb-8 leading-[0.95] tracking-tight">
                  <span>DESIGN IS</span>
                  <span>ONLY THE</span>
                  <span><em className="text-[var(--gold-dark)]">BEGINNING.</em></span>
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
                <div className="editorial-image-frame corner-bracket-wrap w-full lg:w-[45vw] lg:max-w-[460px] shadow-2xl">
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

        {/* 06 — OUR PROCESS */}
        <section className="section-pad bg-[var(--bg-sand)]" id="process">
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

"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
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

      // 2. EDITORIAL COLLAGE PARALLAX
      gsap.to(".collage-floating", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".collage-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 3. PINNED PROJECT STORY (The Signature ScrollTrigger "WOW" Experience)
      const storyLayers = gsap.utils.toArray<HTMLElement>(".pinned-story-layer");
      const totalScenes = pinnedStoryScenes.length;

      const storyTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pinned-story-section",
          start: "top top",
          end: `+=${totalScenes * 1200}`,
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const index = Math.min(
              totalScenes - 1,
              Math.floor(self.progress * totalScenes)
            );
            setActiveStoryScene(index);
          },
        },
      });

      storyLayers.forEach((layer, i) => {
        if (i === 0) return;

        storyTl
          .fromTo(
            layer,
            {
              clipPath: "inset(100% 0% 0% 0%)",
              yPercent: 15,
              scale: 1.15,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              yPercent: 0,
              scale: 1,
              duration: 1,
              ease: "power2.inOut",
            },
            `scene-${i}`
          )
          .to(
            storyLayers[i - 1]?.querySelector("img") || {},
            {
              scale: 0.95,
              opacity: 0.6,
              duration: 1,
            },
            `scene-${i}`
          );
      });

      // 4. SIGNATURE IMAGE STACK MOMENT
      const stackCards = gsap.utils.toArray<HTMLElement>(".stack-layer-card");
      if (stackCards.length >= 3) {
        const stackTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".image-stack-section",
            start: "top top",
            end: "+=2200",
            pin: true,
            scrub: 0.8,
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

      // 5. BEFORE / AFTER SCROLL SYNC
      gsap.to(".comparison-after-layer", {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
        scrollTrigger: {
          trigger: ".comparison-container",
          start: "top 80%",
          end: "bottom 20%",
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

  const currentScene = pinnedStoryScenes[activeStoryScene];

  return (
    <div ref={containerRef} className="page-wrapper">
      <Navigation />

      <main id="main-content">
        {/* HERO SECTION — 100VH VIDEO WITH MASKED TEXT REVEAL */}
        <section className="hero-section" id="hero">
          <video
            className="hero-video-bg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
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
                <a href="#projects" className="hero-btn-primary">
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

        {/* BRAND STATEMENT SECTION */}
        <section className="section-pad" id="brand-statement">
          <div className="max-w-7xl mx-auto">
            <p className="eyebrow">The Altamountt Point of View</p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>YOUR SPACE.</span>
                  <span>YOUR STORY.</span>
                  <span>OUR DESIGN.</span>
                </h2>
                <i className="gold-line" data-gold-line />
                <p className="text-lg md:text-xl text-[var(--ink-muted)] leading-relaxed max-w-xl">
                  From thoughtful spatial reconfiguration to complete turnkey execution,
                  Altamountt creates architectural interiors that balance timeless elegance,
                  practical functionality, and realistic budgets.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="media-reveal-wrap h-[380px] md:h-[460px]" data-reveal="up">
                  <img
                    src={images.lounge}
                    alt="Altamountt luxury lounge interior"
                    className="media-reveal-inner"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-[var(--line)] pt-6 flex justify-between items-center text-xs font-mono tracking-widest text-[var(--ink-muted)]">
                  <span>LOCATION: THANE WEST</span>
                  <span>TYPOLOGY: RESIDENTIAL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL IMAGE COLLAGE (ASYMMETRIC DEPTH) */}
        <section className="section-pad-sm bg-[var(--bg-sand)]" id="about-preview">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow">A Home in Layers</p>
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>DESIGNED</span>
                  <span><em>AROUND YOU.</em></span>
                </h2>
              </div>
              <p className="text-sm md:text-base text-[var(--ink-muted)] max-w-sm leading-relaxed">
                Composed in light, tactile materials, and an intimate understanding of daily living rituals.
              </p>
            </div>

            <div className="collage-grid">
              <div className="collage-tall media-reveal-wrap" data-reveal="up">
                <img
                  src={images.dining}
                  alt="Sculptural dining room interior in Thane"
                  className="media-reveal-inner"
                  loading="lazy"
                />
              </div>

              <div className="collage-offset media-reveal-wrap" data-reveal="right">
                <img
                  src={images.bedroom}
                  alt="Textured master suite interior"
                  className="media-reveal-inner"
                  loading="lazy"
                />
              </div>

              <div className="collage-floating media-reveal-wrap" data-reveal="parallax">
                <img
                  src={images.detail}
                  alt="Architectural joinery detail"
                  className="media-reveal-inner"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES (LARGE VISUAL CATEGORIES) */}
        <section className="section-pad bg-[var(--bg-dark)] text-[var(--bg-ivory)]" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow dark">What We Create</p>
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>SPACES WITH</span>
                  <span><em>PURPOSE.</em></span>
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

                        <Link href="/services" className="service-card-link">
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

        {/* FEATURED PROJECTS (EDITORIAL ASYMMETRIC GALLERY) */}
        <section className="section-pad" id="projects">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow">Selected Work</p>
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>FEATURED</span>
                  <span><em>PORTFOLIO.</em></span>
                </h2>
              </div>
              <Link
                href="/projects"
                className="mono text-xs text-[var(--ink)] flex items-center gap-2 border-b border-current pb-1 w-fit hover:text-[var(--gold-dark)] transition-colors"
              >
                Explore All Projects <span>→</span>
              </Link>
            </div>

            <div className="projects-editorial-grid">
              {projectsList.map((project, idx) => {
                const isEven = idx % 2 !== 0;
                const preset = idx === 0 ? "up" : idx === 1 ? "left" : idx === 2 ? "right" : "scale";

                return (
                  <article
                    key={project.slug}
                    className={`project-item-editorial ${isEven ? "offset" : ""}`}
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <div className="project-img-box media-reveal-wrap" data-reveal={preset}>
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="media-reveal-inner"
                          loading="lazy"
                        />
                      </div>
                    </Link>

                    <div className="project-meta-row">
                      <span>0{idx + 1} · {project.location}</span>
                      <span>{project.category}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="project-title-link">
                      {project.title}
                    </Link>

                    <p className="text-sm text-[var(--ink-muted)] mb-4 line-clamp-2">
                      {project.intro}
                    </p>

                    <Link href={`/projects/${project.slug}`} className="project-view-cta">
                      View Project Story <span>→</span>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PINNED PROJECT STORY (THE SIGNATURE "WOW" EXPERIENCE) */}
        <section className="pinned-story-section" id="story-experience">
          <div className="pinned-story-left">
            <div>
              <p className="eyebrow dark">Interactive Project Journey</p>
              <span className="mono text-xs text-[var(--gold-light)] block mb-3">
                {currentScene.tag}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif leading-none mb-6">
                {currentScene.title}
              </h2>
              <i className="gold-line dark" />
              <p className="text-base text-[var(--ink-light-muted)] leading-relaxed max-w-md">
                {currentScene.subtitle}
              </p>
            </div>

            <div>
              <div className="pinned-story-nav mb-4">
                {pinnedStoryScenes.map((scene, i) => (
                  <div
                    key={scene.title}
                    className={`pinned-story-dot ${i === activeStoryScene ? "active" : ""}`}
                  />
                ))}
              </div>
              <span className="mono text-[10px] text-[var(--ink-light-muted)]">
                SCROLL DOWN TO PROGRESS SCENE (0{activeStoryScene + 1} / 05)
              </span>
            </div>
          </div>

          <div className="pinned-story-right">
            {pinnedStoryScenes.map((scene, i) => (
              <div
                key={scene.title}
                className="pinned-story-layer"
                style={{ zIndex: i + 1 }}
              >
                <img src={scene.image} alt={scene.title} />
              </div>
            ))}
          </div>
        </section>

        {/* SIGNATURE IMAGE STACK MOMENT (OVERLAPPING LAYERED EXPERIENCE) */}
        <section className="image-stack-section" id="image-stack">
          <div className="max-w-7xl mx-auto mb-12 text-center">
            <p className="eyebrow dark justify-center">Layered Architecture</p>
            <h2 className="heading-editorial" data-text-reveal="left">
              <span>DESIGN IN</span>
              <span><em>PROGRESSION.</em></span>
            </h2>
            <p className="text-sm text-[var(--ink-light-muted)] mt-4">
              Watch structural planning, bespoke finishes, and custom millwork integrate seamlessly.
            </p>
          </div>

          <div className="stack-stage-container">
            {imageStackScenes.map((item, idx) => (
              <div
                key={item.id}
                className="stack-layer-card"
                style={{ zIndex: idx + 1 }}
              >
                <img src={item.image} alt={item.title} />
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
          <div className="max-w-7xl mx-auto">
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
          <div className="max-w-7xl mx-auto">
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

        {/* BEFORE / AFTER INTERACTIVE COMPARISON */}
        <section className="section-pad-sm bg-[var(--bg-dark)] text-white" id="transformation">
          <div className="max-w-7xl mx-auto mb-10">
            <p className="eyebrow dark">The Transformation</p>
            <h2 className="heading-editorial" data-text-reveal="left">
              <span>POTENTIAL,</span>
              <span><em>REVEALED.</em></span>
            </h2>
            <p className="text-sm text-[var(--ink-light-muted)] mt-4">
              Drag the divider or scroll to witness the spatial transformation from standard builder layout to customized sanctuary.
            </p>
          </div>

          <div
            ref={sliderContainerRef}
            className="comparison-container max-w-7xl mx-auto"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* BEFORE LAYER */}
            <div className="comparison-image-layer">
              <img src={images.beforeBath} alt="Space before transformation" />
              <div className="comparison-badge" style={{ left: "3rem" }}>
                BEFORE
              </div>
            </div>

            {/* AFTER LAYER (CLIPPED) */}
            <div
              className="comparison-image-layer comparison-after-layer"
              style={{
                clipPath: `inset(0 0 0 ${sliderPos}%)`,
              }}
            >
              <img src={images.afterBath} alt="Space after Altamountt design transformation" />
              <div className="comparison-badge" style={{ right: "3rem" }}>
                AFTER · ALTAMOUNTT
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

        {/* PROCESS SECTION */}
        <section className="section-pad bg-[var(--bg-ivory)]" id="process">
          <div className="max-w-7xl mx-auto">
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

        {/* PHILOSOPHY & TESTIMONIAL */}
        <section className="section-pad text-center bg-[var(--bg-sand)]" id="testimonials">
          <div className="max-w-4xl mx-auto">
            <p className="eyebrow justify-center">Customer-First Philosophy</p>
            <h2 className="heading-editorial mb-8" data-text-reveal="left">
              <span>THE CLIENT</span>
              <span><em>COMES FIRST.</em></span>
            </h2>

            <div className="inline-flex items-center gap-3 bg-[var(--bg-ivory)] px-6 py-3 rounded-full mb-12">
              <span className="text-2xl font-serif font-bold">5.0</span>
              <span className="text-[var(--gold-dark)]">★★★★★</span>
              <span className="text-xs font-mono tracking-wider text-[var(--ink-muted)] uppercase">
                {studioInfo.reviewCount}
              </span>
            </div>

            <blockquote className="text-2xl md:text-4xl font-serif italic text-[var(--ink)] leading-relaxed mb-8">
              &ldquo;{clientTestimonials[0].quote}&rdquo;
            </blockquote>

            <p className="font-mono text-xs tracking-widest text-[var(--gold-dark)] uppercase">
              — {clientTestimonials[0].author} · {clientTestimonials[0].location}
            </p>
          </div>
        </section>

        {/* FINAL CINEMATIC IMAGE */}
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

        {/* CTA / CONTACT INQUIRY SECTION */}
        <section className="section-pad bg-[var(--bg-dark)] text-white" id="contact">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-6">
                <p className="eyebrow dark">Let&apos;s Begin</p>
                <h2 className="heading-editorial mb-8" data-text-reveal="left">
                  <span>READY TO</span>
                  <span><em>REIMAGINE</em></span>
                  <span>YOUR SPACE?</span>
                </h2>
                <i className="gold-line dark" />
                <p className="text-base text-[var(--ink-light-muted)] max-w-md leading-relaxed mb-10">
                  Whether you are planning a complete apartment renovation, villa interior, or bespoke commercial environment in Thane or Mumbai, let&apos;s talk.
                </p>

                <div className="flex flex-col gap-4 max-w-md">
                  <a
                    href={studioInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-primary w-full justify-between"
                  >
                    <span>Connect on WhatsApp</span>
                    <span>→</span>
                  </a>

                  <a
                    href={`tel:${studioInfo.phone}`}
                    className="mono text-xs tracking-widest text-[var(--gold-light)] border border-[rgba(245,242,235,0.2)] rounded-full py-4 px-6 text-center hover:bg-[var(--gold-dark)] hover:text-white transition-colors"
                  >
                    Direct Call: {studioInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[var(--bg-dark-surface)] p-8 md:p-12 border border-[var(--line-dark)] rounded-2xl">
                <h3 className="text-2xl font-serif mb-6">Studio Direct Inquiries</h3>
                <div className="flex flex-col gap-6 text-sm text-[var(--ink-light-muted)]">
                  <div>
                    <h4 className="mono text-xs text-[var(--gold-light)] mb-1">STUDIO LOCATION</h4>
                    <p className="text-white leading-relaxed">{studioInfo.address}</p>
                  </div>
                  <div>
                    <h4 className="mono text-xs text-[var(--gold-light)] mb-1">OFFICE HOURS</h4>
                    <p className="text-white">Monday – Saturday: 10:00 AM – 7:30 PM (By Appointment)</p>
                  </div>
                  <div>
                    <h4 className="mono text-xs text-[var(--gold-light)] mb-1">DIRECT EMAIL</h4>
                    <p className="text-white">{studioInfo.email}</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--line-dark)]">
                    <a
                      href={studioInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono text-xs text-[var(--gold-light)] underline uppercase tracking-wider"
                    >
                      Open Google Maps Location ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

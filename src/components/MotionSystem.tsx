"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MotionSystem() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. SIGNATURE IMAGE REVEALS (Individually Triggered & Calibrated Timing)
      const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      revealElements.forEach((el) => {
        const preset = el.dataset.reveal || "up";
        const media = el.querySelector("img, video, .media-reveal-inner");
        if (!media) return;

        gsap.set(el, { overflow: "hidden", position: "relative" });

        // TRIGGER TIMING CALIBRATION:
        // Animation starts precisely when the top of the image enters the lower 16-18% of the viewport (top 82%-84%)
        if (preset === "up" || preset === "bottom") {
          // PRESET 1 — BOTTOM REVEAL (Signature Altamountt Motion)
          // Starts when image top enters 82% of viewport; plays full crisp reveal over 1.1s
          gsap.fromTo(
            el,
            {
              clipPath: "inset(100% 0% 0% 0%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el, // Individual image container as trigger
                start: "top 82%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );

          // Post-reveal subtle continuous parallax
          gsap.fromTo(
            media,
            {
              yPercent: 8,
              scale: 1.12,
            },
            {
              yPercent: -8,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            }
          );
        } else if (preset === "left") {
          // PRESET 2 — LEFT REVEAL
          gsap.fromTo(
            el,
            {
              clipPath: "inset(0% 0% 0% 100%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );

          gsap.fromTo(
            media,
            {
              xPercent: -8,
              scale: 1.08,
            },
            {
              xPercent: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        } else if (preset === "right") {
          // PRESET 3 — RIGHT REVEAL
          gsap.fromTo(
            el,
            {
              clipPath: "inset(0% 100% 0% 0%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );

          gsap.fromTo(
            media,
            {
              xPercent: 8,
              scale: 1.08,
            },
            {
              xPercent: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        } else if (preset === "scale") {
          // PRESET 4 — CINEMATIC SCALE
          gsap.fromTo(
            el,
            {
              clipPath: "inset(6% 6% 6% 6%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.25,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );

          gsap.fromTo(
            media,
            {
              scale: 1.18,
              opacity: 0.88,
            },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        } else if (preset === "parallax") {
          // PRESET 5 — PARALLAX SCRUB
          gsap.fromTo(
            el,
            {
              clipPath: "inset(40% 0% 0% 0%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );

          gsap.fromTo(
            media,
            { yPercent: 12, scale: 1.15 },
            {
              yPercent: -12,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        } else if (preset === "expand") {
          // PRESET 6 — EXPANSION
          gsap.fromTo(
            el,
            {
              scale: 0.94,
              borderRadius: "20px",
            },
            {
              scale: 1,
              borderRadius: "0px",
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });

      // 2. MASKED TEXT REVEALS (Triggered when text enters top 84%)
      const textRevealElements = gsap.utils.toArray<HTMLElement>("[data-text-reveal]");
      textRevealElements.forEach((el) => {
        const mode = el.dataset.textReveal || "left";
        const spans = el.querySelectorAll("span");

        if (mode === "left") {
          gsap.fromTo(
            spans,
            {
              xPercent: -105,
              clipPath: "inset(0 0 0 100%)",
              opacity: 0,
            },
            {
              xPercent: 0,
              clipPath: "inset(0 0 0 0%)",
              opacity: 1,
              duration: 1.05,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 84%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );
        } else {
          gsap.fromTo(
            spans,
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.95,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 84%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });

      // 3. CHAMPAGNE GOLD LINE DRAWING
      const goldLines = gsap.utils.toArray<HTMLElement>("[data-gold-line]");
      goldLines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 86%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // 4. FORM FIELDS STAGGER REVEAL
      const forms = gsap.utils.toArray<HTMLElement>("[data-form-reveal]");
      forms.forEach((form) => {
        const items = form.querySelectorAll(".inquiry-field-wrap, .inquiry-submit-btn, label, button");
        gsap.from(items, {
          y: 25,
          opacity: 0,
          duration: 0.75,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: form,
            start: "top 82%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      // 5. STAGGER CARD GROUPS
      const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-stagger-group]");
      staggerGroups.forEach((group) => {
        const cards = group.children;
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 82%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      // 6. CUSTOM MAGNETIC LUXURY CURSOR (Desktop pointer:fine only)
      const cursor = document.querySelector<HTMLElement>(".custom-cursor");
      if (cursor && window.matchMedia("(pointer:fine)").matches) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const onMouseMove = (e: MouseEvent) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        };

        const renderCursor = () => {
          currentX += (mouseX - currentX) * 0.18;
          currentY += (mouseY - currentY) * 0.18;
          gsap.set(cursor, { x: currentX, y: currentY });
          requestAnimationFrame(renderCursor);
        };

        window.addEventListener("mousemove", onMouseMove);
        const rafId = requestAnimationFrame(renderCursor);

        const hoverTargets = document.querySelectorAll(
          "a, button, [data-reveal], .project-img-box, .service-card-item, .comparison-container, .stack-layer-card, .material-card-img"
        );

        const onMouseEnter = () => cursor.classList.add("active");
        const onMouseLeave = () => cursor.classList.remove("active");

        hoverTargets.forEach((target) => {
          target.addEventListener("mouseenter", onMouseEnter);
          target.addEventListener("mouseleave", onMouseLeave);
        });

        return () => {
          window.removeEventListener("mousemove", onMouseMove);
          cancelAnimationFrame(rafId);
          hoverTargets.forEach((target) => {
            target.removeEventListener("mouseenter", onMouseEnter);
            target.removeEventListener("mouseleave", onMouseLeave);
          });
        };
      }
    });

    // Refresh ScrollTrigger after initial mount and asset render
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <span>VIEW</span>
    </div>
  );
}

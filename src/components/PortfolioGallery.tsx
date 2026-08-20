"use client";

import Link from "next/link";
import { useState } from "react";
import { projectsList } from "@/data/content";

type Filter = "all" | "residential" | "commercial";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
];

const presets = ["up", "left", "right", "scale"] as const;

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleProjects = projectsList.filter((project) =>
    filter === "all" ? true : filter === "residential" ? project.category.includes("Residential") : !project.category.includes("Residential")
  );

  return (
    <section className="section-pad bg-[var(--bg-ivory)]" aria-labelledby="portfolio-gallery-title">
      <div className="max-w-7xl mx-auto">
        <div className="portfolio-gallery-head">
          <div>
            <p className="eyebrow mb-3">Actual Client Work</p>
            <h2 id="portfolio-gallery-title" className="heading-editorial">A PORTFOLIO<br /><em>IN CONTEXT.</em></h2>
          </div>
          <div className="portfolio-filter" aria-label="Filter projects">
            {filters.map((item) => (
              <button type="button" key={item.id} onClick={() => setFilter(item.id)} className={filter === item.id ? "active" : ""}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-editorial-flow">
          {visibleProjects.map((project, index) => (
            <article key={project.slug} className={`portfolio-project portfolio-project-${index + 1} portfolio-project-${project.slug}`}>
              <div className="portfolio-project-number">0{index + 1} / {project.category}</div>
              <Link href={`/projects/${project.slug}`} className="portfolio-project-primary-link">
                <div className="portfolio-project-image media-reveal-wrap" data-reveal={presets[index % presets.length]}>
                  <img src={project.heroImage} alt={project.title} className="media-reveal-inner" loading="lazy" />
                </div>
              </Link>
              <div className="portfolio-project-copy">
                <p className="mono text-[10px] tracking-[0.16em] text-[var(--gold-dark)] uppercase mb-4">{project.location} · {project.year}</p>
                <Link href={`/projects/${project.slug}`} className="portfolio-project-title">{project.title}</Link>
                <p>{project.subtitle}</p>
                <Link href={`/projects/${project.slug}`} className="project-view-cta">View Project Story <span>→</span></Link>
              </div>
              {index === 3 && project.gallery[1] && (
                <div className="portfolio-project-detail media-reveal-wrap" data-reveal="parallax">
                  <img src={project.gallery[1].image} alt={`${project.title} — ${project.gallery[1].title}`} className="media-reveal-inner" loading="lazy" />
                </div>
              )}
            </article>
          ))}
        </div>

        <section className="portfolio-story-break" aria-label="The spaces we create">
          <div className="portfolio-story-copy">
            <p className="eyebrow">The Spaces We Create</p>
            <h2 className="heading-editorial" data-text-reveal="left"><span>DESIGNED FOR</span><span><em>THE WAY LIFE MOVES.</em></span></h2>
            <i className="gold-line" data-gold-line />
            <p>From the tactility of a private residence to the clarity of a workplace, the common thread is an interior made to be experienced over time.</p>
          </div>
          <div className="portfolio-story-main media-reveal-wrap" data-reveal="up">
            <img src={projectsList[2].gallery[1].image} alt="Pachouli Wellness treatment room" className="media-reveal-inner" loading="lazy" />
          </div>
          <div className="portfolio-story-detail media-reveal-wrap" data-reveal="parallax">
            <img src={projectsList[0].gallery[3].image} alt="Residential wardrobe detail" className="media-reveal-inner" loading="lazy" />
          </div>
        </section>
      </div>
    </section>
  );
}

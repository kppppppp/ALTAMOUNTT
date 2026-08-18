import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { images, projectsList } from "@/data/content";

export const metadata: Metadata = {
  title: "Selected Projects | Altamountt Space & Design · Thane",
  description:
    "Explore our portfolio of luxury residential apartments, penthouses, and turnkey villas designed and executed across Thane and Mumbai.",
};

// Layout variants for visual richness
const layouts = [
  { aspect: "h-[52vw] min-h-[400px] max-h-[680px]", offset: "" },
  { aspect: "h-[38vw] min-h-[320px] max-h-[520px]", offset: "lg:mt-[10vw]" },
  { aspect: "h-[48vw] min-h-[360px] max-h-[620px]", offset: "" },
  { aspect: "h-[42vw] min-h-[340px] max-h-[560px]", offset: "lg:mt-[6vw]" },
];

const presets = ["up", "left", "right", "scale"] as const;

export default function Projects() {
  return (
    <PageShell>
      <main>
        {/* ═══ 1. CINEMATIC HERO ═══ */}
        <section className="page-hero-img">
          <img src={projectsList[0].heroImage} alt="Altamountt selected interior projects" loading="eager" />
          <div className="page-hero-img-overlay" />

          <div className="page-hero-img-content">
            <p className="eyebrow dark mb-5">Portfolio · Thane &amp; Mumbai</p>
            <h1 className="hero-title-main mask-text" style={{ color: "#FFFFFF" }}>
              <span className="mask-text-line">SELECTED</span>
              <span className="mask-text-line"><em style={{ color: "var(--gold-light)" }}>SPACES.</em></span>
            </h1>
            <p className="hero-sub-statement mt-5">
              Residential apartments, penthouses, villas, and commercial environments conceived
              with spatial clarity and obsessive craftsmanship.
            </p>
          </div>

          <div className="scroll-ind">
            <span>SCROLL</span>
            <div className="scroll-ind-line" />
          </div>
        </section>

        {/* ═══ 2. ASYMMETRIC EDITORIAL PROJECT GALLERY ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            {/* Intro line */}
            <div className="flex items-center justify-between mb-14 border-b border-[var(--line)] pb-6">
              <p className="eyebrow mb-0">Selected Works</p>
              <p className="mono text-xs text-[var(--ink-muted)]">{projectsList.length} Projects</p>
            </div>

            {/* 2-column offset grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-20 lg:gap-y-28">
              {projectsList.map((project, idx) => {
                const layout = layouts[idx % layouts.length];
                const preset = presets[idx % presets.length];

                return (
                  <article key={project.slug} className={`flex flex-col ${layout.offset}`}>
                    <Link href={`/projects/${project.slug}`}>
                      <div className={`project-img-box media-reveal-wrap ${layout.aspect}`} data-reveal={preset}>
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="media-reveal-inner"
                          loading="lazy"
                        />
                        {/* Hover label */}
                        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(21,20,18,0)] transition-colors duration-500 hover:bg-[rgba(21,20,18,0.35)] z-10 group">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 font-mono text-xs tracking-widest text-white border border-white/60 px-5 py-2 rounded-full">
                            VIEW PROJECT
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="project-meta-row mt-5">
                      <span>0{idx + 1} · {project.location}</span>
                      <span>{project.year}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="project-title-link">
                      {project.title}
                    </Link>

                    <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                      {project.subtitle}
                    </p>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="mono text-[10px] text-[var(--gold-dark)] border border-[var(--gold-dark)] px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="mono text-[10px] text-[var(--ink-muted)]">{project.scope}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="project-view-cta">
                      View Case Study <span>→</span>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 3. BOTTOM INQUIRY PROMPT ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow dark">Custom Spatial Design</p>
                <h2 className="heading-editorial mb-6" data-text-reveal="left">
                  <span>YOUR PROJECT</span>
                  <span>BELONGS IN</span>
                  <span><em>THIS PORTFOLIO.</em></span>
                </h2>
                <p className="text-base text-[var(--ink-light-muted)] leading-relaxed max-w-lg mb-10">
                  We welcome prospective homeowners, developers, and commercial clients for
                  spatial design consultations at our studio in Bhayandarpada, Thane.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="hero-btn-primary">
                    Start a Design Conversation <span>→</span>
                  </Link>
                  <Link href="/services" className="hero-btn-secondary">
                    Explore Services →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 media-reveal-wrap" style={{ height: "36vw", minHeight: 300, maxHeight: 460 }} data-reveal="right">
                <img src={images.warmRoom} alt="Altamountt luxury portfolio" className="media-reveal-inner" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

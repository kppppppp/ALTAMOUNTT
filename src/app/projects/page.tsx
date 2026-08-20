import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { images, projectsList } from "@/data/content";

export const metadata: Metadata = {
  title: "Selected Projects | Altamountt Space & Design · Thane",
  description:
    "Explore our portfolio of luxury residential apartments, penthouses, and turnkey villas designed and executed across Thane and Mumbai.",
};

export default function Projects() {
  return (
    <PageShell>
      <main>
        {/* ═══ 1. CINEMATIC HERO ═══ */}
        <section className="page-hero-img">
          <img src={projectsList[1].heroImage} alt="Altamountt selected commercial interior projects" loading="eager" />
          <div className="page-hero-img-overlay" />

          <div className="page-hero-img-content">
            <p className="eyebrow dark mb-5">Selected Work · Thane &amp; Mumbai</p>
            <h1 className="hero-title-main mask-text" style={{ color: "#FFFFFF" }}>
              <span className="mask-text-line">SPACES SHAPED</span>
              <span className="mask-text-line"><em style={{ color: "var(--gold-light)" }}>WITH INTENTION.</em></span>
            </h1>
            <p className="hero-sub-statement mt-5">
              A selection of residential and commercial spaces designed by Altamountt Space &amp; Design.
            </p>
          </div>

          <div className="scroll-ind">
            <span>SCROLL</span>
            <div className="scroll-ind-line" />
          </div>
        </section>

        <PortfolioGallery />

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

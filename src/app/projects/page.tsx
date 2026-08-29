import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { images, projectsList, selectedClients } from "@/data/content";

export const metadata: Metadata = {
  title: "Selected Projects | Altamountt Space & Design · Thane",
  description:
    "Explore our portfolio of luxury residential apartments, penthouses, and turnkey villas designed and executed across Thane and Mumbai.",
};

export default function Projects() {
  const googleProject = projectsList.find(p => p.slug === "google-bkc") || projectsList[1];
  const lakmeProject = projectsList.find(p => p.slug === "lakme-salon") || projectsList[3];
  const pachouliProject = projectsList.find(p => p.slug === "pachouli-wellness") || projectsList[2];
  const resProject = projectsList.find(p => p.slug === "selected-residence") || projectsList[0];

  return (
    <PageShell>
      <main className="bg-[var(--bg-ivory)] min-h-screen">
        {/* ═══ 1. EDITORIAL HERO ═══ */}
        <section className="relative overflow-hidden projects-hero-section bg-[var(--bg-ivory)]">
          {/* Subtle grid lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="mono text-[10px] text-[var(--gold-dark)] tracking-[0.25em] uppercase mb-4 block">
                SELECTED WORK
              </span>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[var(--ink)] mb-8 overflow-visible">
                SPACES <br className="md:hidden" />
                THAT <em className="text-[var(--gold-dark)] italic">SPEAK.</em>
              </h1>
              
              <p className="text-sm md:text-base text-[var(--ink-muted)] max-w-lg leading-relaxed">
                We design and execute commercial workspaces, experiential retail showrooms, boutique wellness clinics, and bespoke residential homes across Thane &amp; Mumbai.
              </p>

              <div className="w-16 h-[1.5px] bg-[var(--gold)] mt-8" />
            </div>
          </div>
        </section>

        {/* ═══ 2. COMMERCIAL CHAPTER ═══ */}
        <section className="py-16 lg:py-24 border-t border-[rgba(21,20,18,0.1)] relative bg-[var(--bg-ivory)]">
          {/* Big architectural background number */}
          <div className="bg-section-number right-[8%] top-4 select-none pointer-events-none opacity-20 lg:opacity-10">01</div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <span className="micro-label-editorial">01 / COMMERCIAL PROJECTS</span>
            </div>

            <div className="flex flex-col gap-24 lg:gap-32">
              {/* GOOGLE OFFICE BKC — CASE STUDY FEATURE */}
              <article className="group relative w-full">
                <Link href={`/projects/${googleProject.slug}`} className="block">
                  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-6 border-b border-[rgba(21,20,18,0.15)] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="mono text-sm text-[var(--gold-dark)] font-semibold">01</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-[var(--ink)]">{googleProject.title}</h3>
                    </div>
                    <span className="mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest md:text-right">BKC, Mumbai · Corporate Workplace</span>
                  </div>

                  <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                    <div className="media-reveal-wrap overflow-hidden h-[45vh] md:h-[65vh] w-full relative">
                      <img 
                        src={googleProject.heroImage} 
                        alt={googleProject.title} 
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]" 
                        style={{ objectPosition: "center 40%" }}
                        loading="lazy" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-between items-start mt-6 gap-4">
                    <p className="text-xs text-[var(--ink-muted)] max-w-md leading-relaxed">
                      A premium corporate workspace designed for Google, centering around open flow, wave-patterned ceilings, and bespoke concrete features.
                    </p>
                    <div className="flex gap-8 text-[10px] font-mono uppercase text-[var(--ink-muted)]">
                      <span>ROLE / {googleProject.role}</span>
                      <span>AREA / {googleProject.area}</span>
                    </div>
                  </div>
                </Link>
              </article>

              {/* LAKME & PACHOULI — ASYMMETRIC GRID SPLIT */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                {/* LAKME SALON — VERTICAL */}
                <article className="group flex flex-col md:col-span-5 md:mt-12">
                  <Link href={`/projects/${lakmeProject.slug}`} className="block">
                    <div className="flex items-end justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[10px] text-[var(--gold-dark)]">02</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">{lakmeProject.title}</h3>
                      </div>
                      <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">Versova / Retail</span>
                    </div>

                    <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                      <div className="media-reveal-wrap overflow-hidden relative aspect-[3/4] md:h-[50vh]">
                        <img 
                          src={lakmeProject.heroImage} 
                          alt={lakmeProject.title} 
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                          loading="lazy" 
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-col gap-1">
                      <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                        A luxury beauty salon focusing on raw brick textures, warm copper installations, and specialized treatment lighting.
                      </p>
                      <span className="mono text-[9px] text-[var(--gold-dark)] uppercase mt-1">ROLE / {lakmeProject.role}</span>
                    </div>
                  </Link>
                </article>

                {/* PACHOULI WELLNESS — HORIZONTAL */}
                <article className="group flex flex-col md:col-span-7">
                  <Link href={`/projects/${pachouliProject.slug}`} className="block">
                    <div className="flex items-end justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[10px] text-[var(--gold-dark)]">03</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">{pachouliProject.title}</h3>
                      </div>
                      <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">Andheri / Wellness</span>
                    </div>

                    <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                      <div className="media-reveal-wrap overflow-hidden relative aspect-[4/3] md:h-[42vh]">
                        <img 
                          src={pachouliProject.heroImage} 
                          alt={pachouliProject.title} 
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                          loading="lazy" 
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                      <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                        A premium wellness clinic framing textured wood overlays, corporate identity signatures, and organic sand tones.
                      </p>
                      <span className="mono text-[9px] text-[var(--gold-dark)] uppercase mt-1">ROLE / {pachouliProject.role}</span>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. RESIDENTIAL CHAPTER ═══ */}
        <section className="py-24 lg:py-32 border-t border-[rgba(21,20,18,0.1)] relative bg-[var(--bg-ivory)]">
          {/* Big architectural background number */}
          <div className="bg-section-number left-[8%] top-4 select-none pointer-events-none opacity-20 lg:opacity-10">02</div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <span className="micro-label-editorial">02 / RESIDENTIAL PROJECTS</span>
            </div>

            <div className="flex flex-col gap-24 lg:gap-32">
              {/* LARGE RESIDENCE FEATURE */}
              <article className="group relative w-full">
                <Link href={`/projects/${resProject.slug}`} className="block">
                  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-6 border-b border-[rgba(21,20,18,0.15)] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="mono text-sm text-[var(--gold-dark)] font-semibold">01</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-[var(--ink)]">Selected Residence, Vivearea</h3>
                    </div>
                    <span className="mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest md:text-right">Thane West · Residential Flat</span>
                  </div>

                  <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                    <div className="media-reveal-wrap overflow-hidden h-[45vh] md:h-[65vh] w-full relative">
                      <img 
                        src="/client-work/projects/residential/bedroom-ilaf-wardrobe.jpg" 
                        alt="Selected Residence, Vivearea" 
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]" 
                        loading="lazy" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-between items-start mt-6 gap-4">
                    <p className="text-xs text-[var(--ink-muted)] max-w-md leading-relaxed">
                      A warm and elegant residence featuring custom wood joinery details, warm ceiling illumination, and textured fabrics.
                    </p>
                    <div className="flex gap-8 text-[10px] font-mono uppercase text-[var(--ink-muted)]">
                      <span>ROLE / {resProject.role}</span>
                      <span>AREA / {resProject.area}</span>
                    </div>
                  </div>
                </Link>
              </article>

              {/* MASTER BEDROOM + DINING — ASYMMETRIC GRID */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                {/* BEDROOM */}
                <article className="group flex flex-col md:col-span-5 md:mt-12">
                  <Link href={`/projects/${resProject.slug}`} className="block">
                    <div className="flex items-end justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-2">
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
                          alt="Master Suite" 
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                          loading="lazy" 
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-col gap-1">
                      <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                        A textured master suite highlighting sage green panel lines, modular wardrobes, and acoustic ceiling fixtures.
                      </p>
                      <span className="mono text-[9px] text-[var(--gold-dark)] uppercase mt-1">ROLE / Space planning &amp; styling</span>
                    </div>
                  </Link>
                </article>

                {/* DINING */}
                <article className="group flex flex-col md:col-span-7">
                  <Link href={`/projects/${resProject.slug}`} className="block">
                    <div className="flex items-end justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-2">
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
                        An elegant dining space focusing on white marble slab tables, brass accents, and curved ergonomic seating.
                      </p>
                      <span className="mono text-[9px] text-[var(--gold-dark)] uppercase mt-1">ROLE / Furniture curation &amp; lighting</span>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4. BOTTOM INQUIRY PROMPT ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow dark">Custom Spatial Design</p>
                <h2 className="heading-editorial mb-6 text-[var(--bg-ivory)]" data-text-reveal="left">
                  <span>YOUR PROJECT</span>
                  <span>BELONGS IN</span>
                  <span><em>THIS PORTFOLIO.</em></span>
                </h2>
                <p className="text-base text-[var(--ink-light-muted)] leading-relaxed max-w-lg mb-10">
                  We welcome prospective homeowners, developers, and commercial clients for spatial design consultations at our studio in Bhayandarpada, Thane.
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

              <div className="lg:col-span-5 media-reveal-wrap rounded-xl overflow-hidden border border-white/10" style={{ height: "36vw", minHeight: 300, maxHeight: 460 }} data-reveal="right">
                <img src={images.warmRoom} alt="Altamountt luxury portfolio" className="media-reveal-inner" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

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
        <section className="page-editorial-hero overflow-hidden corner-bracket-wrap">
          {/* Subtle grid lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="micro-label-editorial">SELECTED WORK</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <h1 className="page-editorial-hero__heading">
                  <span>SPACES THAT</span>
                  <br className="hidden md:inline" />
                  <span><em className="text-[var(--gold-dark)] font-serif italic">SPEAK.</em></span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="page-editorial-hero__desc">
                  We design and execute commercial workspaces, experiential retail showrooms, boutique wellness clinics, and bespoke residential homes across Thane &amp; Mumbai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. COMMERCIAL CHAPTER ═══ */}
        <section className="py-16 lg:py-24 border-t border-[rgba(21,20,18,0.1)] relative">
          {/* Big architectural background number */}
          <div className="bg-section-number right-[8%] top-4 select-none pointer-events-none opacity-20 lg:opacity-10">01</div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <span className="micro-label-editorial">01 / COMMERCIAL</span>
            </div>

            <div className="flex flex-col gap-24 lg:gap-36">
              {/* GOOGLE FEATURE */}
              <article className="group relative w-full">
                <Link href={`/projects/${googleProject.slug}`} className="block">
                  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-3">
                    <div className="flex items-center gap-3">
                      <span className="mono text-sm text-[var(--gold-dark)] font-semibold">01</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-[var(--ink)]">{googleProject.title}</h3>
                    </div>
                    <span className="mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest md:text-right">BKC, MUMBAI · WORKPLACE</span>
                  </div>

                  <div className="editorial-image-frame corner-bracket-wrap shadow-xl">
                    <div className="media-reveal-wrap overflow-hidden h-[50vh] md:h-[70vh] lg:h-[75vh] w-full relative">
                       <img 
                         src={googleProject.heroImage} 
                         alt={googleProject.title} 
                         className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                         style={{ objectPosition: "center 40%" }}
                         loading="lazy" 
                       />
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                         <span className="mono text-xs tracking-widest text-white border border-white/40 bg-black/40 px-6 py-3 backdrop-blur-sm">VIEW PROJECT →</span>
                       </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mt-4">
                    <p className="text-xs text-[var(--ink-muted)] max-w-sm leading-relaxed">
                      A premium corporate workspace designed for Google, centering around open flow, wave-patterned ceilings, and bespoke features.
                    </p>
                  </div>
                </Link>
              </article>

              {/* LAKME + PACHOULI */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
                {/* LAKME */}
                <article className="group flex flex-col justify-end md:col-span-5 md:mt-12">
                  <Link href={`/projects/${lakmeProject.slug}`} className="block">
                    <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[10px] text-[var(--gold-dark)]">02</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">{lakmeProject.title}</h3>
                      </div>
                      <span className="mono text-[9px] text-[var(--ink-muted)] uppercase md:text-right">VERSOVA / SALON</span>
                    </div>

                    <div className="editorial-image-frame corner-bracket-wrap shadow-xl">
                      <div className="media-reveal-wrap overflow-hidden relative aspect-[3/4] md:h-[55vh]">
                        <img 
                          src={lakmeProject.heroImage} 
                          alt={lakmeProject.title} 
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="mono text-xs tracking-widest text-white border border-white/40 bg-black/40 px-5 py-2.5 backdrop-blur-sm">VIEW →</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[11px] text-[var(--ink-muted)] leading-normal mt-4">
                      A luxury beauty salon focusing on raw brick textures, warm copper installations, and specialized treatment lighting.
                    </p>
                  </Link>
                </article>

                {/* PACHOULI */}
                <article className="group flex flex-col justify-end md:col-span-7">
                  <Link href={`/projects/${pachouliProject.slug}`} className="block">
                    <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[10px] text-[var(--gold-dark)]">03</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">{pachouliProject.title}</h3>
                      </div>
                      <span className="mono text-[9px] text-[var(--ink-muted)] uppercase md:text-right">ANDHERI / WELLNESS</span>
                    </div>

                    <div className="editorial-image-frame corner-bracket-wrap shadow-xl">
                      <div className="media-reveal-wrap overflow-hidden relative aspect-[4/3] md:h-[45vh]">
                        <img 
                          src={pachouliProject.heroImage} 
                          alt={pachouliProject.title} 
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="mono text-xs tracking-widest text-white border border-white/40 bg-black/40 px-5 py-2.5 backdrop-blur-sm">VIEW →</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-[var(--ink-muted)] leading-normal mt-4">
                      A premium wellness clinic framing textured wood overlays, corporate identity signatures, and organic sand tones.
                    </p>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. RESIDENTIAL CHAPTER ═══ */}
        <section className="py-24 lg:py-32 border-t border-[rgba(21,20,18,0.1)] relative">
          {/* Big architectural background number */}
          <div className="bg-section-number left-[8%] top-4 select-none pointer-events-none opacity-20 lg:opacity-10">02</div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <span className="micro-label-editorial">02 / RESIDENTIAL</span>
            </div>

            <div className="flex flex-col gap-24 lg:gap-36">
              {/* LARGE LIVING SPACE FEATURE */}
              <article className="group relative w-full">
                <Link href={`/projects/${resProject.slug}`} className="block">
                  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-3">
                    <div className="flex items-center gap-3">
                      <span className="mono text-sm text-[var(--gold-dark)] font-semibold">01</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-[var(--ink)]">LIVING &amp; LOUNGE</h3>
                    </div>
                    <span className="mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest md:text-right">MUMBAI · LIVING SPACES</span>
                  </div>

                  <div className="editorial-image-frame corner-bracket-wrap shadow-xl">
                    <div className="media-reveal-wrap overflow-hidden h-[50vh] md:h-[70vh] lg:h-[75vh] w-full relative">
                       <img 
                         src={images.living} 
                         alt="Luxury Residential Living &amp; Lounge" 
                         className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                         loading="lazy" 
                       />
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                         <span className="mono text-xs tracking-widest text-white border border-white/40 bg-black/40 px-6 py-3 backdrop-blur-sm">VIEW PROJECT STORY →</span>
                       </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mt-4">
                    <p className="text-xs text-[var(--ink-muted)] max-w-sm leading-relaxed">
                      A welcoming spatial layout anchored by a marble TV wall, leather sofa sets, and custom light schemes.
                    </p>
                  </div>
                </Link>
              </article>

              {/* MASTER BEDROOM + DINING */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
                {/* BEDROOM */}
                <article className="group flex flex-col justify-end md:col-span-5 md:mt-12">
                  <Link href={`/projects/${resProject.slug}`} className="block">
                    <div className="flex items-end justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[10px] text-[var(--gold-dark)]">02</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">MASTER SUITES</h3>
                      </div>
                      <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">BEDROOM / MASTER</span>
                    </div>

                    <div className="media-reveal-wrap overflow-hidden relative aspect-[3/4] md:h-[55vh] shadow-xl rounded-sm">
                      <img 
                        src={images.bedroom} 
                        alt="Bespoke Master Suite Bedroom" 
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="mono text-xs tracking-widest text-white border border-white/40 bg-black/40 px-5 py-2.5 backdrop-blur-sm">VIEW →</span>
                      </div>
                    </div>
                    
                    <p className="text-[11px] text-[var(--ink-muted)] leading-normal mt-4">
                      A textured master suite highlighting sage green panel lines, modular wardrobes, and acoustic circles.
                    </p>
                  </Link>
                </article>

                {/* DINING */}
                <article className="group flex flex-col justify-end md:col-span-7">
                  <Link href={`/projects/${resProject.slug}`} className="block">
                    <div className="flex items-end justify-between mb-4 border-b border-[rgba(21,20,18,0.15)] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[10px] text-[var(--gold-dark)]">03</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)]">DINING INTERIORS</h3>
                      </div>
                      <span className="mono text-[9px] text-[var(--ink-muted)] uppercase">DINING ROOM</span>
                    </div>

                    <div className="media-reveal-wrap overflow-hidden relative aspect-[4/3] md:h-[45vh] shadow-xl rounded-sm">
                      <img 
                        src={images.dining} 
                        alt="Bespoke Dining Area design" 
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="mono text-xs tracking-widest text-white border border-white/40 bg-black/40 px-5 py-2.5 backdrop-blur-sm">VIEW →</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[var(--ink-muted)] leading-normal mt-4">
                      An elegant dining space focusing on white marble slab tables, brass accents, and curved ergonomic seating.
                    </p>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4. BOTTOM INQUIRY PROMPT ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white">
          <div className="max-w-7xl mx-auto">
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

              <div className="lg:col-span-5 media-reveal-wrap rounded-sm" style={{ height: "36vw", minHeight: 300, maxHeight: 460 }} data-reveal="right">
                <img src={images.warmRoom} alt="Altamountt luxury portfolio" className="media-reveal-inner" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

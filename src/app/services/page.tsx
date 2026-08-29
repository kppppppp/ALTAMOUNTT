import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { allServicesGrouped, images, servicesData, servicesProcess, studioInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "Interior Design Services | Altamountt Space & Design · Thane",
  description:
    "From residential luxury interiors and commercial architecture to full turnkey execution — explore Altamountt's complete service offering across Thane and Mumbai.",
};

export default function ServicesPage() {
  const [res, com, arch, tkey] = servicesData;

  // Real proof projects list based on existing project data
  const proofProjects = [
    {
      category: "COMMERCIAL WORKPLACE",
      title: "Google BKC",
      location: "BKC, Mumbai",
      role: "Space Planning & Interior Execution",
      image: "/client-work/projects/commercial/google-bkc-reception.webp",
      link: "/projects/google-bkc"
    },
    {
      category: "LUXURY RESIDENTIAL",
      title: "Vivearea Residence",
      location: "Thane West",
      role: "Interior Design & Custom Joinery",
      image: "/client-work/projects/residential/bedroom-ilaf-wardrobe.jpg",
      link: "/projects/selected-residence"
    },
    {
      category: "EXPERIENTIAL RETAIL",
      title: "Lakmé Salon",
      location: "Versova, Mumbai",
      role: "Design & Turnkey Contracting",
      image: "/client-work/projects/commercial/lakme-salon-interior-01.webp",
      link: "/projects/lakme-salon"
    },
    {
      category: "BOUTIQUE CLINIC",
      title: "Pachouli Wellness",
      location: "Andheri, Mumbai",
      role: "Tactile Space Planning & Build",
      image: "/client-work/projects/commercial/pachouli-wellness-reception.webp",
      link: "/projects/pachouli-wellness"
    }
  ];

  return (
    <PageShell>
      <main className="bg-[var(--bg-ivory)] min-h-screen">
        {/* ═══ 1. EDITORIAL HERO (SPLIT LAYOUT) ═══ */}
        <section className="relative overflow-hidden services-hero-section bg-[var(--bg-ivory)]">
          {/* Subtle architectural vertical grid lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left Column — Text & Hierarchy */}
              <div className="lg:col-span-7">
                <span className="mono text-[10px] text-[var(--gold-dark)] tracking-[0.25em] uppercase mb-4 block">
                  SERVICES / WHAT WE DO
                </span>
                
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] text-[var(--ink)] mb-8 overflow-visible">
                  SPACES <br className="hidden md:inline" />
                  THAT <em className="text-[var(--gold-dark)] italic">SPEAK.</em>
                </h1>
                
                <p className="text-sm md:text-base text-[var(--ink-muted)] max-w-lg leading-relaxed mb-8">
                  Every Altamountt project begins with spatial planning. We resolve the layout, circulation, and light vectors first — then coordinate materials, custom millwork, and full turnkey execution.
                </p>

                {/* Subservice metadata layers */}
                <div className="border-t border-[var(--line)] pt-6 flex flex-wrap gap-8 text-[9px] font-mono text-[var(--ink-muted)] tracking-wider uppercase">
                  <div>
                    <span className="text-[var(--gold-dark)] mr-1">01 /</span> Residential
                  </div>
                  <div>
                    <span className="text-[var(--gold-dark)] mr-1">02 /</span> Commercial
                  </div>
                  <div>
                    <span className="text-[var(--gold-dark)] mr-1">03 /</span> Turnkey Execution
                  </div>
                </div>
              </div>

              {/* Right Column — Large Portrait visual anchor */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="editorial-image-frame corner-bracket-wrap w-full max-w-[420px] shadow-2xl overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-sand)]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={images.servicesHero} 
                      alt="Altamountt turnkey interior design services" 
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. EDITORIAL STATEMENT ═══ */}
        <section className="section-pad bg-[var(--bg-sand)] relative overflow-hidden border-y border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <p className="eyebrow">Studio Practice</p>
                <h2 className="heading-editorial mb-6" data-text-reveal="left">
                  <span>FROM FIRST SKETCH</span>
                  <span><em>TO FINAL DETAIL.</em></span>
                </h2>
                <div className="w-16 h-[1.5px] bg-[var(--gold)] mb-6" />
                <p className="text-base text-[var(--ink-muted)] leading-relaxed mb-6">
                  We don&apos;t just draft layout concepts — we manage carpentry, structural civil works, smart automation, and final handover under one single contract.
                </p>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="editorial-image-frame corner-bracket-wrap shadow-xl overflow-hidden rounded-xl border border-[var(--line)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={images.living} 
                      alt="Altamountt living room styling and layout" 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. SERVICE CATEGORIES (ASYMMETRIC FLOW) ═══ */}
        <section className="bg-[var(--bg-ivory)] relative overflow-hidden py-24" id="categories">
          {/* Subtle grid lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-28 lg:gap-36">
            
            {/* 01 / RESIDENTIAL INTERIORS — TEXT LEFT, IMAGE RIGHT */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="mono text-sm text-[var(--gold-dark)] block mb-2">{res.number} / 04</span>
                <h3 className="font-serif text-3xl md:text-4xl text-[var(--ink)] mb-4 tracking-tight leading-none">
                  {res.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed mb-6">
                  {res.tagline} {res.description}
                </p>

                {/* Subservice tags list */}
                <div className="svc-tag-list mb-8 border-t border-[var(--line)] pt-6">
                  {res.subservices.map((s) => (
                    <div key={s} className="svc-tag-item">
                      <span className="svc-tag-dot" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <Link href="/services/residential" className="hero-btn-primary inline-flex w-fit">
                  Explore Residential <span>→</span>
                </Link>
              </div>

              <div className="lg:col-span-7 flex justify-end w-full">
                <div className="editorial-image-frame corner-bracket-wrap w-full max-w-[620px] shadow-xl overflow-hidden rounded-xl border border-[var(--line)]">
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <img 
                      src="/client-work/projects/residential/bedroom-ilaf-wardrobe.jpg" 
                      alt="Luxury Residential Bedroom" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </article>

            {/* 02 / COMMERCIAL — IMAGE LEFT, TEXT RIGHT */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1 flex justify-start w-full">
                <div className="editorial-image-frame corner-bracket-wrap w-full max-w-[620px] shadow-xl overflow-hidden rounded-xl border border-[var(--line)]">
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <img 
                      src="/client-work/projects/commercial/google-bkc-meeting.webp" 
                      alt="Google BKC Workspace Meeting Area" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <span className="mono text-sm text-[var(--gold-dark)] block mb-2">{com.number} / 04</span>
                <h3 className="font-serif text-3xl md:text-4xl text-[var(--ink)] mb-4 tracking-tight leading-none">
                  {com.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed mb-6">
                  {com.tagline} {com.description}
                </p>

                {/* Subservice tags list */}
                <div className="svc-tag-list mb-8 border-t border-[var(--line)] pt-6">
                  {com.subservices.map((s) => (
                    <div key={s} className="svc-tag-item">
                      <span className="svc-tag-dot" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <Link href="/services/commercial" className="hero-btn-primary inline-flex w-fit">
                  Explore Commercial <span>→</span>
                </Link>
              </div>
            </article>

            {/* 03 / INTERIOR ARCHITECTURE — TEXT LEFT, IMAGE RIGHT */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="mono text-sm text-[var(--gold-dark)] block mb-2">{arch.number} / 04</span>
                <h3 className="font-serif text-3xl md:text-4xl text-[var(--ink)] mb-4 tracking-tight leading-none">
                  {arch.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed mb-6">
                  {arch.tagline} {arch.description}
                </p>

                {/* Subservice tags list */}
                <div className="svc-tag-list mb-8 border-t border-[var(--line)] pt-6">
                  {arch.subservices.map((s) => (
                    <div key={s} className="svc-tag-item">
                      <span className="svc-tag-dot" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <Link href="/services/architecture" className="hero-btn-primary inline-flex w-fit">
                  Explore Architecture <span>→</span>
                </Link>
              </div>

              <div className="lg:col-span-7 flex justify-end w-full">
                <div className="editorial-image-frame corner-bracket-wrap w-full max-w-[620px] shadow-xl overflow-hidden rounded-xl border border-[var(--line)]">
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <img 
                      src="/client-work/interiors/img12.jpeg" 
                      alt="Bespoke Interior Architecture Details" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </article>

            {/* 04 / TURNKEY SOLUTIONS — IMAGE LEFT, TEXT RIGHT */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1 flex justify-start w-full">
                <div className="editorial-image-frame corner-bracket-wrap w-full max-w-[620px] shadow-xl overflow-hidden rounded-xl border border-[var(--line)]">
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <img 
                      src="/client-work/interiors/img11.jpeg" 
                      alt="Turnkey Design Completion & Handover" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <span className="mono text-sm text-[var(--gold-dark)] block mb-2">{tkey.number} / 04</span>
                <h3 className="font-serif text-3xl md:text-4xl text-[var(--ink)] mb-4 tracking-tight leading-none">
                  {tkey.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed mb-6">
                  {tkey.tagline} {tkey.description}
                </p>

                {/* Subservice tags list */}
                <div className="svc-tag-list mb-8 border-t border-[var(--line)] pt-6">
                  {tkey.subservices.map((s) => (
                    <div key={s} className="svc-tag-item">
                      <span className="svc-tag-dot" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <Link href="/services/turnkey" className="hero-btn-primary inline-flex w-fit">
                  Explore Turnkey <span>→</span>
                </Link>
              </div>
            </article>

          </div>
        </section>

        {/* ═══ 4. COMPLETE SERVICE MATRIX ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 z-10 relative">
            <div className="mb-16 border-b border-white/10 pb-6">
              <p className="eyebrow dark">Capability Spectrum</p>
              <h2 className="heading-editorial text-[var(--bg-ivory)]">
                <span>EVERY SERVICE</span>
                <span><em>WE OFFER.</em></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {allServicesGrouped.slice(0, 4).map((group) => (
                <div key={group.category} className="border-t border-white/10 pt-6">
                  <h3 className="text-xs font-mono font-bold tracking-wider text-[var(--gold-light)] mb-4 uppercase">
                    {group.category}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-[var(--ink-light-muted)] leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 5. SOPHISTICATED PROCESS SECTION ═══ */}
        <section className="section-pad bg-[var(--bg-sand)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 border-b border-[var(--line)] pb-6">
              <p className="eyebrow">Our Methodology</p>
              <h2 className="heading-editorial">
                <span>HOW WE</span>
                <span><em>WORK.</em></span>
              </h2>
            </div>

            <div className="process-table">
              {servicesProcess.map((step, i) => (
                <div key={step.num} className="process-row-item">
                  <span className="process-num">{step.num}</span>
                  <h3 className="process-name">{step.title.toUpperCase()}</h3>
                  <p className="process-desc text-sm">{step.desc}</p>
                  <span className="process-arrow text-[var(--gold-dark)]">
                    {i < servicesProcess.length - 1 ? "↓" : "✓"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 6. REAL PROJECT PROOF (SEE IT BUILT) ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)] relative overflow-hidden border-t border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16 border-b border-[var(--line)] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="eyebrow">Portfolio Proof</p>
                <h2 className="heading-editorial">
                  <span>SEE IT</span>
                  <span><em>BUILT.</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] max-w-sm leading-relaxed">
                A selection of corporate workspaces, beauty retail, wellness, and bespoke private suites designed and built on site by Altamountt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {proofProjects.map((project, idx) => (
                <article key={idx} className="group relative">
                  <Link href={project.link} className="block">
                    <div className="flex justify-between items-end mb-4 border-b border-[var(--line)] pb-2">
                      <div>
                        <span className="mono text-[9px] text-[var(--gold-dark)] block mb-1">{project.category}</span>
                        <h3 className="text-xl font-serif text-[var(--ink)]">{project.title}</h3>
                      </div>
                      <span className="mono text-[10px] text-[var(--ink-muted)] uppercase">{project.location}</span>
                    </div>

                    <div className="editorial-image-frame corner-bracket-wrap shadow-lg overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-sand)]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="mt-4 text-[10px] font-mono text-[var(--ink-muted)] uppercase flex justify-between">
                      <span>{project.role}</span>
                      <span className="text-[var(--gold-dark)]">VIEW CASE STUDY →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 7. CONVERSION CTA ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <p className="eyebrow dark justify-center">DESIGN CONSULTATION</p>
            <h2 className="heading-editorial mb-8 text-[var(--bg-ivory)]">
              <span>HAVE A SPACE</span>
              <span><em>IN MIND?</em></span>
            </h2>
            <p className="text-base text-[var(--ink-light-muted)] leading-relaxed max-w-lg mx-auto mb-12">
              Let&apos;s discuss your workspace layout, retail showroom guidelines, or luxury residential blueprints at our studio in Thane.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="hero-btn-primary py-4 px-8 w-full sm:w-auto text-center">
                BOOK A CONSULTATION
              </Link>
              <a 
                href={studioInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn-secondary py-4 px-8 w-full sm:w-auto text-center border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                WHATSAPP US <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { allServicesGrouped, images, servicesData, servicesProcess } from "@/data/content";

export const metadata: Metadata = {
  title: "Interior Design Services | Altamountt Space & Design · Thane",
  description:
    "From residential luxury interiors and commercial architecture to full turnkey execution — explore Altamountt's complete service offering across Thane and Mumbai.",
};

export default function ServicesPage() {
  const [res, com, arch, tkey] = servicesData;

  return (
    <PageShell>
      <main className="services-page">
        {/* ═══ 1. CINEMATIC HERO ═══ */}
        <section className="page-hero-img">
          <img src={images.servicesHero} alt="Altamountt interior design services" loading="eager" />
          <div className="page-hero-img-overlay" />

          <div className="page-hero-img-content">
            <p className="eyebrow dark mb-5">Services &amp; Turnkey Architecture · Thane &amp; Mumbai</p>
            <h1 className="hero-title-main mask-text" style={{ color: "#FFFFFF" }}>
              <span className="mask-text-line">DESIGN.</span>
              <span className="mask-text-line"><em style={{ color: "var(--gold-light)" }}>DETAIL.</em></span>
              <span className="mask-text-line">DELIVERY.</span>
            </h1>
          </div>

          <div className="scroll-ind">
            <span>SCROLL</span>
            <div className="scroll-ind-line" />
          </div>
        </section>

        {/* ═══ 2. EDITORIAL STATEMENT ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <p className="eyebrow">What We Do</p>
                <h2 className="heading-editorial mb-6" data-text-reveal="left">
                  <span>FROM FIRST SKETCH</span>
                  <span><em>TO FINAL DETAIL.</em></span>
                </h2>
                <i className="gold-line" data-gold-line />
                <p className="text-base md:text-lg text-[var(--ink-muted)] leading-relaxed mb-4">
                  Every Altamountt project begins with listening. We study how you live, work, or host — then
                  translate those rhythms into spatial architecture, material specifications, and turnkey execution.
                </p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  From residential luxury homes to customized corporate workspaces, our studio maintains
                  the same obsessive quality standard throughout.
                </p>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="media-reveal-wrap" style={{ height: "45vw", minHeight: 360, maxHeight: 580 }} data-reveal="right">
                  <img src={images.living} alt="Altamountt living room design" className="media-reveal-inner" loading="lazy" />
                </div>
                {/* Floating detail */}
                <div className="hidden lg:block absolute -bottom-10 -left-10 w-52 h-52 shadow-2xl overflow-hidden border-4 border-[var(--bg-ivory)]" data-reveal="parallax">
                  <img src={images.detail} alt="Joinery detail" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. RESIDENTIAL SECTION (editorial vertical flow) ═══ */}
        <section className="section-pad bg-[var(--bg-sand)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <span className="service-section-number">{res.number} <small>/ 04</small></span>
                <h2 className="heading-editorial mb-4" data-text-reveal="left">
                  <span>RESIDENTIAL</span>
                  <span><em>INTERIORS.</em></span>
                </h2>
                <i className="gold-line" data-gold-line />
                <p className="text-base md:text-lg text-[var(--ink-muted)] leading-relaxed mb-8">{res.description}</p>

                <div className="svc-tag-list mb-8 border-t border-[var(--line)] pt-6">
                  {res.subservices.map((s) => (
                    <div key={s} className="svc-tag-item">
                      <span className="svc-tag-dot" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="hero-btn-primary" style={{ display: "inline-flex", width: "fit-content" }}>
                  Inquire for Residence <span>→</span>
                </Link>
              </div>

              {/* Editorial Vertical Image Stack: Living -> Kitchen -> Study */}
              <div className="lg:col-span-7 flex flex-col gap-10">
                <div className="media-reveal-wrap" style={{ height: "40vw", minHeight: 300, maxHeight: 520 }} data-reveal="left">
                  <img src={images.living} alt="Residential living room TV unit design" className="media-reveal-inner" loading="lazy" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="media-reveal-wrap" style={{ height: "35vw", minHeight: 260, maxHeight: 420 }} data-reveal="up">
                    <img src={images.kitchen} alt="Modular kitchen layout" className="media-reveal-inner" loading="lazy" />
                  </div>
                  <div className="media-reveal-wrap" style={{ height: "35vw", minHeight: 260, maxHeight: 420 }} data-reveal="right">
                    <img src={images.bedroom} alt="Bespoke bedroom layout" className="media-reveal-inner" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4. COMMERCIAL SECTION (editorial vertical flow) ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              {/* Images on Left */}
              <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">
                <div className="media-reveal-wrap" style={{ height: "40vw", minHeight: 300, maxHeight: 520 }} data-reveal="left">
                  <img src={images.architectural} alt="Google BKC reception desk" className="media-reveal-inner" loading="lazy" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="media-reveal-wrap" style={{ height: "35vw", minHeight: 260, maxHeight: 420 }} data-reveal="up">
                    <img src="/client-work/projects/commercial/lakme-salon-interior-01.webp" alt="Lakme Salon interior Versova" className="media-reveal-inner" loading="lazy" />
                  </div>
                  <div className="media-reveal-wrap" style={{ height: "35vw", minHeight: 260, maxHeight: 420 }} data-reveal="right">
                    <img src="/client-work/projects/commercial/google-bkc-meeting.webp" alt="Google BKC meeting space" className="media-reveal-inner" loading="lazy" />
                  </div>
                </div>
              </div>

              {/* Text on Right */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <span className="service-section-number">{com.number} <small>/ 04</small></span>
                <h2 className="heading-editorial mb-4" data-text-reveal="left">
                  <span>COMMERCIAL</span>
                  <span><em>&amp; HOSPITALITY.</em></span>
                </h2>
                <i className="gold-line" data-gold-line />
                <p className="text-base md:text-lg text-[var(--ink-muted)] leading-relaxed mb-8">{com.description}</p>

                <div className="svc-tag-list mb-8 border-t border-[var(--line)] pt-6">
                  {com.subservices.map((s) => (
                    <div key={s} className="svc-tag-item">
                      <span className="svc-tag-dot" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="hero-btn-primary" style={{ display: "inline-flex", width: "fit-content" }}>
                  Inquire for Commercial <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. INTERIOR ARCHITECTURE — FULL WIDTH + TEXT OVERLAY ═══ */}
        <section className="section-pad-sm bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="svc-full">
              <div className="svc-full-img" data-reveal="scale">
                <img src={arch.image} alt="Interior architecture by Altamountt" className="w-full h-full object-cover media-reveal-inner" loading="lazy" />
              </div>

              <div className="svc-card-overlay">
                <span className="service-section-number service-section-number-light">{arch.number} <small>/ 04</small></span>
                <h2 className="text-2xl md:text-4xl font-serif text-white mb-3">{arch.title}</h2>
                <i className="gold-line dark" style={{ width: 50, margin: "0.75rem 0" }} data-gold-line />
                <p className="text-xs md:text-sm text-[var(--ink-light-muted)] leading-relaxed mb-6">{arch.description}</p>
                <div className="svc-tag-list border-t border-[rgba(245,242,235,0.15)] pt-4 mb-6">
                  {arch.subservices.map((s) => (
                    <div key={s} className="svc-tag-item" style={{ color: "var(--ink-light-muted)" }}>
                      <span className="svc-tag-dot" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="hero-btn-primary" style={{ display: "inline-flex", width: "fit-content" }}>
                  Discuss Architecture <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. TURNKEY SOLUTIONS ═══ */}
        <section className="section-pad bg-[var(--bg-sand)]">
          <div className="max-w-7xl mx-auto svc-row">
            {/* Large hero image with floating detail */}
            <div className="relative">
              <div className="media-reveal-wrap" style={{ height: "52vw", minHeight: 380, maxHeight: 640 }} data-reveal="up">
                <img src={tkey.image} alt="Turnkey completed interior" className="media-reveal-inner" loading="lazy" />
              </div>
              <div className="hidden md:block absolute -bottom-8 -right-8 w-44 h-44 shadow-2xl overflow-hidden border-4 border-[var(--bg-sand)]" data-reveal="parallax">
                <img src={images.detail} alt="Turnkey detail" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            <div>
              <span className="service-section-number">{tkey.number} <small>/ 04</small></span>
              <h2 className="heading-editorial mb-4" data-text-reveal="left">
                <span>FROM CONCEPT</span>
                <span><em>TO COMPLETION.</em></span>
              </h2>
              <i className="gold-line" data-gold-line />
              <p className="text-base text-[var(--ink-muted)] leading-relaxed mb-6">{tkey.description}</p>

              <div className="svc-tag-list mb-8 border-t border-[var(--line)] pt-4">
                {tkey.subservices.map((s) => (
                  <div key={s} className="svc-tag-item">
                    <span className="svc-tag-dot" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="hero-btn-primary" style={{ display: "inline-flex", width: "fit-content" }}>
                Start Turnkey Project <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ 7. COMPLETE SERVICE MATRIX ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="eyebrow dark justify-center">Complete Capability</p>
              <h2 className="heading-editorial mb-4" data-text-reveal="left">
                <span>EVERY SERVICE</span>
                <span><em>WE OFFER.</em></span>
              </h2>
              <p className="text-sm text-[var(--ink-light-muted)] max-w-xl mx-auto">
                Each service can be commissioned individually or seamlessly bundled into a full turnkey contract.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {allServicesGrouped.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-serif text-[var(--gold-light)] mb-4 pb-2 border-b border-[var(--line-dark)] uppercase tracking-widest">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[var(--ink-light-muted)]">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--gold)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 8. 5-STEP PROCESS ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="eyebrow">Our Methodology</p>
              <h2 className="heading-editorial" data-text-reveal="left">
                <span>HOW WE</span>
                <span><em>WORK.</em></span>
              </h2>
            </div>

            <div className="process-table">
              {servicesProcess.map((step, i) => (
                <div key={step.num} className="process-row-item">
                  <span className="process-num">{step.num}</span>
                  <h3 className="process-name">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                  <span className="process-arrow">{i < servicesProcess.length - 1 ? "↓" : "✓"}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 9. FINAL CTA IMAGE ═══ */}
        <section className="relative overflow-hidden" style={{ height: "65vw", minHeight: 420, maxHeight: 740 }}>
          <div className="media-reveal-wrap w-full h-full" data-reveal="expand">
            <img src={images.architectural} alt="Ready to transform your space" className="media-reveal-inner" loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,20,18,0.9)] via-[rgba(21,20,18,0.22)] to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 px-6 text-center text-white">
            <h2 className="heading-editorial mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)" }} data-text-reveal="left">
              <span>READY TO TRANSFORM</span>
              <span><em>YOUR SPACE?</em></span>
            </h2>
            <Link href="/contact" className="hero-btn-primary">
              Start a Project <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

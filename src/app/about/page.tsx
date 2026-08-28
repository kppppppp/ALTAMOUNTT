import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { images, studioInfo, founderInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "About Altamountt | Interior Design Studio · Thane",
  description:
    "Altamountt Space & Design is a luxury interior design and turnkey architecture studio based in Thane, Maharashtra. Discover our philosophy, design process, and what sets us apart.",
};

const pillars = [
  {
    num: "01",
    title: "Design",
    subtitle: "Architectural Vision",
    body: "Aesthetic concepts with a strong architectural point of view — spaces that feel sophisticated without being sterile.",
    img: images.living,
  },
  {
    num: "02",
    title: "Function",
    subtitle: "Ergonomic Flow",
    body: "Every square inch is engineered around the rhythm of your day — intuitive movement, zero clutter.",
    img: images.kitchen,
  },
  {
    num: "03",
    title: "Detail",
    subtitle: "Precision Craft",
    body: "Obsessive shadow gaps, hand-finished joinery, natural stone selection, and concealed lighting circuits.",
    img: images.material,
  },
  {
    num: "04",
    title: "Value",
    subtitle: "Financial Intelligence",
    body: "Luxury aesthetics and durable materials specified with complete transparency and realistic budgets.",
    img: images.warmRoom,
  },
];

export default function About() {
  return (
    <PageShell>
      <main>
        {/* ═══ 1. CINEMATIC HERO ═══ */}
        <section className="page-hero-img" id="about-hero">
          <img
            src={images.aboutHero}
            alt="Altamountt Space & Design — luxury interior architecture"
            loading="eager"
          />
          <div className="page-hero-img-overlay" />

          <div className="page-hero-img-content">
            <p
              className="eyebrow dark mb-6"
              style={{ opacity: 0 }}
              data-hero-item
            >
              About Altamountt · Thane, Maharashtra
            </p>
            <h1
              className="hero-title-main mask-text"
              style={{ color: "#FFFFFF" }}
            >
              <span className="mask-text-line">SPACES THAT</span>
              <span className="mask-text-line">
                <em style={{ color: "var(--gold-light)" }}>FEEL LIKE YOU.</em>
              </span>
            </h1>
            <p
              className="hero-sub-statement mt-6"
              style={{ opacity: 0 }}
              data-hero-item
            >
              A Thane-based studio delivering thoughtful spatial design,<br />
              premium materials, and complete turnkey execution.
            </p>
          </div>

          <div className="scroll-ind">
            <span>SCROLL</span>
            <div className="scroll-ind-line" />
          </div>
        </section>

        {/* ═══ 2. WHO WE ARE — SPLIT (image left, text right) ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)] relative overflow-hidden">
          {/* Big architectural background number */}
          <div className="bg-section-number right-[8%] top-4 select-none pointer-events-none opacity-20 lg:opacity-10">01</div>

          <div className="max-w-7xl mx-auto about-split relative z-10">
            {/* Image */}
            <div className="editorial-image-frame corner-bracket-wrap shadow-xl">
              <div className="media-reveal-wrap h-full w-full relative" style={{ height: "55vw", minHeight: 420, maxHeight: 680 }} data-reveal="left">
                <img src={images.lounge} alt="Altamountt luxury lounge interior" className="media-reveal-inner object-cover w-full h-full" loading="lazy" />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="micro-label-editorial">01 / THE STUDIO</span>
              </div>
              <h2 className="heading-editorial mb-6" data-text-reveal="left">
                <span>WE BUILD</span>
                <span><em>SPACES TO LIVE IN.</em></span>
              </h2>
              <i className="gold-line" data-gold-line />
              <p className="text-base md:text-lg text-[var(--ink-muted)] leading-relaxed mb-5">
                Founded in Thane, Maharashtra, Altamountt Space &amp; Design was born from a conviction:
                true luxury should be liveable. We sculpt apartments, penthouses, and commercial
                environments where spatial clarity, natural light, and bespoke craftsmanship converge.
              </p>
              <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed mb-8">
                We unite spatial planning, material procurement, contractor supervision, and turnkey delivery
                under one roof — a single-source team accountable for every decision from first sketch to final keys.
              </p>
              <div className="flex flex-wrap gap-8 font-mono text-xs tracking-widest text-[var(--ink-muted)] uppercase border-t border-[var(--line)] pt-6">
                <span>Studio: Bhayandarpada, Thane</span>
                <span>Typology: Turnkey Architecture</span>
                <span>Since: 2018</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. ARCHITECTURAL MOMENT — REVERSE SPLIT (text left, image right) ═══ */}
        <section className="section-pad bg-[var(--bg-sand)] relative overflow-hidden">
          {/* Big architectural background number */}
          <div className="bg-section-number left-[8%] top-4 select-none pointer-events-none opacity-20 lg:opacity-10">02</div>

          <div className="max-w-7xl mx-auto about-split relative z-10">
            {/* Text */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="micro-label-editorial">02 / PHILOSOPHY</span>
              </div>
              <h2 className="heading-editorial mb-6" data-text-reveal="left">
                <span>EVERY ROOM</span>
                <span>HAS A</span>
                <span><em>REASON.</em></span>
              </h2>
              <i className="gold-line" data-gold-line />
              <p className="text-base md:text-lg text-[var(--ink-muted)] leading-relaxed mb-5">
                We do not decorate — we design spatially. Our process begins with the structural opportunity
                of your space: light paths, circulation, load-bearing constraints, and acoustic behaviour.
              </p>
              <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed mb-8">
                Only after exhausting the spatial potential do we select materials, textures, and finishes
                that amplify the architecture rather than mask it.
              </p>
              <Link href="/services" className="hero-btn-primary" style={{ display: "inline-flex", width: "fit-content" }}>
                Explore Our Services <span>→</span>
              </Link>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 editorial-image-frame corner-bracket-wrap shadow-xl">
              <div className="media-reveal-wrap h-full w-full relative" style={{ height: "55vw", minHeight: 400, maxHeight: 660 }} data-reveal="right">
                <img src={images.dining} alt="Altamountt architectural dining room interior" className="media-reveal-inner object-cover w-full h-full" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4. FOUR DESIGN PILLARS ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow dark">Design Philosophy</p>
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>FOUR PRINCIPLES.</span>
                  <span><em>ONE STUDIO.</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-light-muted)] max-w-xs">
                Every drawing, specification, and site decision is measured against these four foundations.
              </p>
            </div>

            <div className="about-pillar-row">
              {pillars.map((p) => (
                <article key={p.num} className="pillar-item">
                  <span className="pillar-num">{p.num}</span>

                  <div className="pillar-img-wrap" data-reveal={p.num === "01" ? "up" : p.num === "02" ? "left" : p.num === "03" ? "right" : "scale"}>
                    <img src={p.img} alt={p.title} className="media-reveal-inner" loading="lazy" />
                  </div>

                  <div>
                    <p className="mono text-[10px] text-[var(--gold-light)] mb-1">{p.subtitle}</p>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{p.title}</h3>
                    <i className="gold-line dark" style={{ width: 40, margin: "0.75rem 0" }} data-gold-line />
                    <p className="text-sm text-[var(--ink-light-muted)] leading-relaxed">{p.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 5. OUR TEAM — REAL COMPANY CREDIBILITY ═══ */}
        <section className="section-pad bg-[var(--bg-sand)]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow">The Studio Team</p>
                <h2 className="heading-editorial" data-text-reveal="left">
                  <span>REAL PEOPLE.</span>
                  <span><em>REAL EXECUTION.</em></span>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] max-w-sm">
                No stock images. Our projects are designed and managed by verified interior professionals on site.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left — Landscape Portrait showing full office context */}
              <div className="lg:col-span-8 flex justify-center w-full">
                <div className="w-full shadow-2xl rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--bg-sand)]">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={founderInfo.image}
                      alt={founderInfo.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Right — Biography content */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <span className="mono text-[10px] text-[var(--gold-dark)] tracking-[0.2em] uppercase mb-3 block">
                  {founderInfo.role}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-[var(--ink)] mb-5 tracking-tight leading-none">
                  {founderInfo.name}
                </h3>
                
                <div className="w-16 h-[1.5px] bg-[var(--gold)] mb-6" />

                <p className="text-base md:text-lg text-[var(--ink-muted)] leading-relaxed mb-8 max-w-xl">
                  {founderInfo.desc}
                </p>

                {/* Structured architectural details */}
                <div className="border-t border-[var(--line)] pt-6 grid grid-cols-2 gap-6 max-w-lg">
                  <div>
                    <span className="mono text-[9px] text-[var(--ink-muted)] block uppercase mb-1">Focus</span>
                    <span className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wide">Spatial &amp; Material Direction</span>
                  </div>
                  <div>
                    <span className="mono text-[9px] text-[var(--ink-muted)] block uppercase mb-1">Practice</span>
                    <span className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wide">Turnkey Design &amp; Build</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. CUSTOMER FIRST — TRUST SECTION ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left — Large Statement */}
              <div className="lg:col-span-6">
                <p className="eyebrow">Client Trust</p>
                <h2 className="heading-editorial mb-6" data-text-reveal="left">
                  <span>YOUR SPACE.</span>
                  <span><em>YOUR WAY.</em></span>
                </h2>
                <i className="gold-line" data-gold-line />
                <p className="text-base md:text-lg text-[var(--ink-muted)] leading-relaxed mb-6">
                  We do not impose styles. We listen, observe, and translate your rituals, aspirations,
                  and budget realities into a space that feels irreplaceable.
                </p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-10">
                  Our 5.0 Google reputation is built on on-time delivery, zero hidden costs, and a craftsmanship
                  standard our clients walk into and immediately understand.
                </p>

                {/* Rating block */}
                <div className="flex items-center gap-6 bg-[var(--bg-sand)] px-6 py-5 rounded-2xl w-fit mb-10">
                  <div>
                    <span className="text-4xl font-serif font-bold text-[var(--ink)]">{studioInfo.rating}</span>
                    <span className="ml-2 text-[var(--gold-dark)] text-xl">★★★★★</span>
                    <p className="mono text-[10px] text-[var(--ink-muted)] mt-1 tracking-widest">{studioInfo.reviewCount} · Google</p>
                  </div>
                  <div className="h-12 w-px bg-[var(--line)]" />
                  <p className="text-xs text-[var(--ink-muted)] leading-relaxed max-w-[180px]">
                    Rated across Thane &amp; Mumbai residential projects.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="hero-btn-primary" style={{ display: "inline-flex", width: "fit-content" }}>
                    Start Your Project <span>→</span>
                  </Link>
                  <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">
                    WhatsApp Direct ↗
                  </a>
                </div>
              </div>

              {/* Right — Testimonial + Material Image */}
              <div className="lg:col-span-6 flex flex-col gap-8">
                <div className="media-reveal-wrap" style={{ height: "38vw", minHeight: 300, maxHeight: 480 }} data-reveal="right">
                  <img src={images.bedroom} alt="Altamountt completed master bedroom interior" className="media-reveal-inner" loading="lazy" />
                </div>

                <blockquote className="border-l-2 border-[var(--gold)] pl-6 py-2">
                  <p className="text-lg md:text-xl font-serif italic text-[var(--ink)] mb-3">
                    &ldquo;Altamountt transformed our Thane apartment into something we could not have imagined.
                    They were precise, honest, and endlessly patient.&rdquo;
                  </p>
                  <span className="mono text-xs text-[var(--gold-dark)]">— Rohan &amp; Sneha Joshi · Thane West</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. FINAL CINEMATIC IMAGE ═══ */}
        <section className="relative overflow-hidden" style={{ height: "70vw", minHeight: 460, maxHeight: 780 }}>
          <div className="media-reveal-wrap w-full h-full" data-reveal="scale">
            <img src={images.final} alt="Completed Altamountt turnkey interior" className="media-reveal-inner" loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,20,18,0.88)] via-[rgba(21,20,18,0.2)] to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center text-white px-6">
            <h2 className="heading-editorial mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)" }} data-text-reveal="left">
              <span>DESIGNING SPACES.</span>
              <span><em>DEFINING LIFESTYLES.</em></span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="hero-btn-primary">
                Start a Project with Us <span>→</span>
              </Link>
              <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">
                WhatsApp Us <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

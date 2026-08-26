import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { servicesData, projectsList, studioInfo } from "@/data/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.id }));
}

// Generate unique metadata for each service, prioritizing local search terms
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found" };

  const seoTitles: Record<string, string> = {
    residential: "Home Interior Designers in Thane West & Mumbai | Altamountt",
    commercial: "Commercial & Office Interior Designers in Thane | Altamountt",
    architecture: "Interior Architecture & Space Planning in Thane | Altamountt",
    turnkey: "Turnkey Interior Contractors in Thane & Mumbai | Altamountt",
  };

  const seoDescs: Record<string, string> = {
    residential: "Bespoke home interior designers in Thane and Mumbai. Complete space planning, modular kitchens, wardrobes, and styling for apartments, penthouses, and villas.",
    commercial: "Elevate your brand with premium commercial interior design in Thane. Corporate offices, wellness clinics, salons, and retail design from concept to execution.",
    architecture: "Refined spatial reconfiguration, custom architectural millwork, lighting layouts, and natural material selection in Thane & Mumbai.",
    turnkey: "End-to-end turnkey interior contracting. Single point of accountability from conceptual CAD blueprints to key handover within your budget.",
  };

  return {
    title: seoTitles[slug] || `${service.title} | Altamountt Space & Design`,
    description: seoDescs[slug] || service.tagline,
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);
  if (!service) notFound();

  // Load contextual copy & FAQs based on category
  const details: Record<
    string,
    {
      localContext: string;
      faqs: { q: string; a: string }[];
      locationList: string[];
    }
  > = {
    residential: {
      localContext: "Based in Bhayandarpada, Thane, our studio designs and executes premium apartments, penthouses, and villas across Thane West, Ghodbunder Road, Hiranandani Estate, and prime Mumbai neighborhoods. We specify materials like boiling waterproof (BWP) plywood blockboards to withstand the humid coastal climate.",
      faqs: [
        { q: "How much does a typical residential interior design project cost?", a: "Residential interior project costs vary depending on the area, material specifications, and styling requirements. We work with clients to design customized pricing layouts that prioritize high-durability substrates while keeping budgets transparent and controlled." },
        { q: "Do you handle custom wardrobes and modular kitchens?", a: "Yes, we specialize in custom modular kitchens and wardrobe layouts, using top-tier soft-close drawers and BWP blockboard carcass units." },
        { q: "Can I hire Altamountt only for design planning?", a: "Yes, we offer design-only packages which include CAD layouts, 3D renderings, and material selection schedules." },
      ],
      locationList: ["Thane West", "Ghodbunder Road", "Hiranandani Estate", "Majiwada", "Mumbai"],
    },
    commercial: {
      localContext: "We design and build commercial workspaces that elevate company credibility and drive workflow efficiency. From corporate offices in BKC to wellness clinics in Andheri and retail styling salons in Versova, our team manages design compliance and turnkey contracting.",
      faqs: [
        { q: "Have you worked with established national brands?", a: "Yes. Our team has coordinated office space layouts and interior styling for brands such as Google BKC, Lakmé Salon Versova, and Pachouli Wellness clinic Andheri." },
        { q: "How do you handle acoustic glass paneling and lighting?", a: "We integrate specialized acoustic partition walls, trimless recessed downlights, and custom linear ceiling fixtures that enhance workspace focus." },
        { q: "Do you handle commercial permissions and site guidelines?", a: "Yes, our turnkey team coordinates with corporate facility management and structural guidelines to ensure clean compliance." },
      ],
      locationList: ["Thane", "Bandra Kurla Complex (BKC)", "Andheri", "Versova", "Mumbai"],
    },
    architecture: {
      localContext: "Our interior architecture services focus on spatial reconfigurations, natural lighting pathways, custom doors, partition walls, and stone or masonry claddings. We align structural details before any decoration is specified.",
      faqs: [
        { q: "Do you handle structural wall modifications and masonry?", a: "Yes, we supervise tile laying, plumbing adjustments, partition wall relocations, and custom drop ceilings." },
        { q: "What is architectural millwork?", a: "It refers to custom-designed wood paneling, fluted timber claddings, precision joinery, and concealed hardware details engineered for your specific layout." },
      ],
      locationList: ["Thane West", "Ghodbunder Road", "Mumbai"],
    },
    turnkey: {
      localContext: "Our turnkey solution provides one single point of accountability. Altamountt handles scheduling, material procurement, civil supervision, carpentry fabrication, and final clean handover—preventing contractor misalignment and stress.",
      faqs: [
        { q: "Why choose turnkey execution over separate labor contractors?", a: "Turnkey execution eliminates the coordination gap. With a single team managing civil, electrical, plumbing, and carpentry, projects are completed on schedule with zero vendor blame games." },
        { q: "How do you manage project handover timelines?", a: "We prefabricate custom modular cabinets and joinery in our workshop before site assembly, reducing on-site dust, margins, and timeline delays." },
      ],
      locationList: ["Thane West", "Thane East", "Mumbai", "Navi Mumbai"],
    },
  };

  const contextData = details[slug] || {
    localContext: "Altamountt Space & Design executes high-end interior architecture projects across Thane & Mumbai, balancing architectural proportions with functional details.",
    faqs: [
      { q: "Do you work outside Thane?", a: "Yes, we regularly design and execute residential and commercial projects throughout Thane and Mumbai." },
    ],
    locationList: ["Thane", "Mumbai"],
  };

  // Find related projects for showcase
  const categoryProjects = projectsList.filter(
    (p) => p.category.toLowerCase().includes(slug) || p.slug.includes(slug)
  );

  return (
    <PageShell>
      <main className="bg-[var(--bg-ivory)] min-h-screen">
        {/* ═══ 1. HERO ═══ */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="mono text-[10px] text-[var(--gold-dark)] tracking-widest block mb-4 uppercase">
              SERVICES / {service.title}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[var(--ink)] tracking-tight leading-none mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--ink-muted)] leading-relaxed max-w-2xl">
              {service.tagline}
            </p>
          </div>
        </section>

        {/* ═══ 2. UNIQUE LOCAL CONTEXT ═══ */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Local Authority &amp; Execution Expertise</h2>
              <p className="text-base text-[var(--ink-muted)] leading-relaxed mb-6">
                {contextData.localContext}
              </p>
              <div className="border-t border-[var(--line)] pt-6 mt-8">
                <span className="mono text-[9px] text-[var(--ink-muted)] block mb-3 uppercase">Locations Served</span>
                <div className="flex flex-wrap gap-2">
                  {contextData.locationList.map((loc) => (
                    <span
                      key={loc}
                      className="bg-[var(--bg-sand)] text-[var(--ink-muted)] text-xs px-3 py-1.5 rounded-full"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* List of subservices */}
            <div className="lg:col-span-5 bg-[var(--bg-sand)] p-8 rounded-2xl">
              <h3 className="mono text-xs text-[var(--gold-dark)] mb-6 uppercase tracking-wider">
                Category Scope &amp; Specifications
              </h3>
              <ul className="flex flex-col gap-4">
                {service.subservices.map((sub, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--ink)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ 3. CONTEXTUAL PROJECT PROOF ═══ */}
        {categoryProjects.length > 0 && (
          <section className="section-pad-sm bg-[var(--bg-dark)] text-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12 border-b border-[rgba(245,242,235,0.15)] pb-4">
                <span className="mono text-[10px] text-[var(--gold-light)] block mb-2 uppercase">REAL CASE STUDIES</span>
                <h2 className="text-2xl md:text-4xl font-serif text-[var(--bg-ivory)]">Selected Projects</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group block border border-[rgba(245,242,235,0.15)] p-6 hover:border-[var(--gold)] transition-colors duration-300 rounded-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                    </div>
                    <span className="mono text-[9px] text-[var(--gold-light)] block mb-1">
                      {project.location.toUpperCase()} · {project.year}
                    </span>
                    <h3 className="text-xl font-serif group-hover:text-[var(--gold-light)] transition-colors mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--ink-light-muted)] leading-relaxed line-clamp-2">
                      {project.intro}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ 4. DYNAMIC FAQS ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)] border-t border-[var(--line)]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-center mb-12">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              {contextData.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-[var(--line)] pb-6">
                  <h3 className="text-lg font-serif mb-2 text-[var(--ink)] flex items-start gap-3">
                    <span className="text-[var(--gold-dark)]">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 5. CTA ═══ */}
        <section className="py-20 bg-[var(--bg-dark)] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="eyebrow dark justify-center">DESIGN CONSULTATION</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[var(--bg-ivory)]">
              Planning a Project in Thane or Mumbai?
            </h2>
            <p className="text-sm text-[var(--ink-light-muted)] leading-relaxed mb-10">
              Speak with our Principal Designer and get professional spatial advice, hardware choices, and a budget layout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="hero-btn-primary py-4 px-10">
                START A PROJECT <span>→</span>
              </Link>
              <a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary py-4 px-10 border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                WHATSAPP CHAT <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

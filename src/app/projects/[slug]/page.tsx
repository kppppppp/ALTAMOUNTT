import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { projectsList, images } from "@/data/content";

export async function generateStaticParams() {
  return projectsList.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Altamountt Space & Design`,
    description: `${project.subtitle} — ${project.intro}`,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projectsList.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) notFound();

  const project = projectsList[projectIndex];
  const nextProject = projectsList[(projectIndex + 1) % projectsList.length];

  return (
    <PageShell>
      <main>
        {/* ═══ 1. FULLSCREEN PROJECT HERO ═══ */}
        <section
          style={{
            position: "relative",
            height: "100vh",
            minHeight: 600,
            overflow: "hidden",
            background: "var(--bg-dark)",
          }}
        >
          <div className="media-reveal-wrap w-full h-full" data-reveal="scale">
            <img
              src={project.heroImage}
              alt={project.title}
              className="media-reveal-inner"
              style={{ opacity: 0.78 }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(21,20,18,0.95) 0%, rgba(21,20,18,0.3) 55%, rgba(21,20,18,0.15) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "max(5vw, env(safe-area-inset-left))",
              right: "max(5vw, env(safe-area-inset-right))",
              bottom: "max(7vh, calc(env(safe-area-inset-bottom) + 3rem))",
              color: "#FFFFFF",
              zIndex: 10,
            }}
          >
            <p className="eyebrow dark mb-4">
              {project.category} · {project.location}
            </p>
            <h1
              className="hero-title-main mask-text mb-4"
              style={{ color: "#FFFFFF" }}
            >
              <span className="mask-text-line">{project.title}</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                color: "rgba(245,242,235,0.85)",
                maxWidth: 520,
                lineHeight: 1.55,
              }}
            >
              {project.subtitle}
            </p>
          </div>
        </section>

        {/* ═══ 2. PROJECT SPECIFICATIONS + NARRATIVE ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Spec matrix */}
              <div className="lg:col-span-4">
                <div className="bg-[var(--bg-sand)] rounded-2xl p-8 sticky top-24">
                  <p className="mono text-xs text-[var(--gold-dark)] mb-6">Project Specifications</p>

                  {[
                    ["Location", project.location],
                    ["Typology", project.category],
                    ["Year", project.year],
                    ["Scope", project.scope],
                  ].map(([label, val]) => (
                    <div key={label} className="py-3 border-b border-[var(--line)]">
                      <span className="mono text-[10px] text-[var(--ink-muted)] block mb-0.5">{label}</span>
                      <span className="text-sm font-semibold text-[var(--ink)]">{val}</span>
                    </div>
                  ))}

                  <div className="mt-6">
                    <Link href="/contact" className="hero-btn-primary w-full justify-center">
                      Inquire About This Project <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Story narrative */}
              <div className="lg:col-span-8">
                <p className="eyebrow">Architectural Narrative</p>
                <h2 className="heading-editorial mb-6" data-text-reveal="left">
                  <span>SPACE CONCEIVED</span>
                  <span><em>FOR REAL LIFE.</em></span>
                </h2>
                <i className="gold-line" data-gold-line />

                <p className="text-lg md:text-xl text-[var(--ink)] leading-relaxed mb-5">
                  {project.intro}
                </p>
                <p className="text-base text-[var(--ink-muted)] leading-relaxed mb-10">
                  {project.concept}
                </p>

                {/* Client quote */}
                <div className="border-l-[3px] border-[var(--gold)] pl-6 py-2 bg-[rgba(184,154,112,0.07)] rounded-r-lg">
                  <blockquote className="text-lg md:text-xl font-serif italic text-[var(--ink)] mb-2">
                    &ldquo;{project.quote}&rdquo;
                  </blockquote>
                  <span className="mono text-xs text-[var(--gold-dark)]">— {project.clientFeedback}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. CASE STUDY GALLERY ═══ */}
        <section className="px-5 md:px-12 pb-24 md:pb-36 bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-[var(--line)] pt-8 mb-12 flex items-center justify-between">
              <p className="eyebrow mb-0">Photography</p>
              <span className="mono text-xs text-[var(--ink-muted)]">{project.gallery.length} views</span>
            </div>

            <div className="flex flex-col gap-20 md:gap-28">
              {project.gallery.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.title}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    <div
                      className={`lg:col-span-8 ${
                        isEven ? "" : "lg:col-start-5"
                      }`}
                    >
                      <div
                        className="media-reveal-wrap"
                        style={{ height: "45vw", minHeight: 320, maxHeight: 600 }}
                        data-reveal={item.preset}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="media-reveal-inner"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div
                      className={`lg:col-span-4 flex flex-col justify-end pb-4 ${
                        isEven ? "" : "lg:col-start-1"
                      }`}
                    >
                      <span className="mono text-xs text-[var(--gold-dark)] mb-2">
                        VIEW 0{index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif mb-2">{item.title}</h3>
                      <i className="gold-line" style={{ width: 40, margin: "0.75rem 0" }} data-gold-line />
                      <p className="text-xs md:text-sm text-[var(--ink-muted)] leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 4. FINAL LARGE IMAGE ═══ */}
        <section className="px-5 md:px-12 pb-20 bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="media-reveal-wrap" style={{ height: "42vw", minHeight: 300, maxHeight: 560 }} data-reveal="expand">
              <img src={images.final} alt="Completed interior atmosphere" className="media-reveal-inner" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ═══ 5. NEXT PROJECT TRANSITION ═══ */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            height: "55vw",
            minHeight: 380,
            maxHeight: 640,
          }}
        >
          <div className="media-reveal-wrap w-full h-full" data-reveal="up">
            <img
              src={nextProject.heroImage}
              alt={nextProject.title}
              className="media-reveal-inner"
              style={{ opacity: 0.55 }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(21,20,18,0.72)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#FFFFFF",
              padding: "0 6vw",
            }}
          >
            <p className="eyebrow dark mb-4">Next Case Study</p>
            <h2 className="heading-editorial mb-3" data-text-reveal="left">
              <span>{nextProject.title}</span>
            </h2>
            <p className="text-sm text-[var(--ink-light-muted)] mb-8">
              {nextProject.subtitle} · {nextProject.location}
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="hero-btn-primary"
            >
              Explore Next Project <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

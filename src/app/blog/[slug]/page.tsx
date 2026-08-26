import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { blogArticles } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Altamountt Insights`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  // Get related stories based on slugs mapped in project data
  const relatedArticles = blogArticles.filter((a) => 
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <PageShell>
      <main className="bg-[var(--bg-ivory)] min-h-screen">
        {/* ═══ 1. ARTICLE HEADER ═══ */}
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
          {/* Subtle grid lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6 text-xs font-mono tracking-widest text-[var(--gold-dark)] uppercase">
              <span>{article.category}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--ink)] tracking-tight leading-tight mb-8">
              {article.title}
            </h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24">
          <div className="editorial-image-frame corner-bracket-wrap shadow-xl">
            <div className="media-reveal-wrap overflow-hidden aspect-[16/9] md:h-[65vh] w-full relative">
              <img 
                src={article.image} 
                alt={article.title} 
                className="media-reveal-inner object-cover w-full h-full"
                loading="eager" 
              />
            </div>
          </div>
        </section>

        {/* ═══ 3. EDITORIAL CONTENT BLOCK (Reading width: max 780px) ═══ */}
        <section className="max-w-4xl mx-auto px-6 mb-20 lg:mb-32 relative">
          {/* Subtle layout borders to frame content */}
          <div className="absolute left-[-2vw] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.08)] pointer-events-none" />
          
          <div className="max-w-[760px] mx-auto flex flex-col gap-8 text-[var(--ink)] text-base md:text-lg leading-relaxed font-normal">
            {article.content.map((p, idx) => (
              <p key={idx} className="first-letter:font-serif first-letter:text-3xl first-letter:float-left first-letter:mr-2 first-letter:font-bold first-letter:text-[var(--gold-dark)] first-letter:leading-none">
                {idx === 0 ? p : p}
              </p>
            ))}

            {article.pullQuote && (
              <blockquote className="my-10 border-l-4 border-[var(--gold-dark)] pl-6 py-2 italic font-serif text-xl md:text-2xl text-[var(--gold-dark)] leading-normal">
                “{article.pullQuote}”
              </blockquote>
            )}
          </div>
        </section>

        {/* ═══ 4. RELATED STORIES ═══ */}
        {relatedArticles.length > 0 && (
          <section className="py-16 border-t border-[rgba(21,20,18,0.1)] relative">
            <div className="max-w-7xl mx-auto px-6">
              <span className="mono text-[10px] text-[var(--gold-dark)] tracking-widest block mb-10 uppercase text-center">RELATED STORIES</span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
                {relatedArticles.map((rel) => (
                  <article key={rel.slug} className="group flex flex-col h-full">
                    <Link href={`/blog/${rel.slug}`} className="block">
                      <div className="media-reveal-wrap overflow-hidden aspect-[4/3] relative mb-4 shadow-md rounded-sm">
                        <img 
                          src={rel.image} 
                          alt={rel.title} 
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                          loading="lazy" 
                        />
                      </div>
                    </Link>

                    <div className="flex items-center gap-2 mb-2 text-[9px] font-mono tracking-widest text-[var(--ink-muted)] uppercase">
                      <span className="text-[var(--gold-dark)]">{rel.category}</span>
                      <span>·</span>
                      <span>{rel.date}</span>
                    </div>

                    <Link href={`/blog/${rel.slug}`} className="block mb-3 flex-grow">
                      <h3 className="text-lg md:text-xl font-serif text-[var(--ink)] hover:text-[var(--gold-dark)] transition-colors leading-tight">
                        {rel.title}
                      </h3>
                    </Link>

                    <Link href={`/blog/${rel.slug}`} className="text-[10px] text-[var(--gold-dark)] font-semibold tracking-widest uppercase hover:text-black transition-colors border-b border-current pb-[1px] w-fit">
                      READ STORY →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ 5. CTA INQUIRY PROMPT ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <p className="eyebrow dark justify-center">Let's Create Together</p>
            <h2 className="heading-editorial mb-8 text-[var(--bg-ivory)]" data-text-reveal="left">
              <span>HAVE A SPACE</span>
              <span>IN MIND?</span>
            </h2>
            <p className="text-base text-[var(--ink-light-muted)] max-w-md mx-auto leading-relaxed mb-10">
              Start a project discussion with our team to bring your design layout and visual concepts to turnkey reality on site.
            </p>
            <Link href="/contact" className="hero-btn-primary py-4 px-10">
              START A PROJECT <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

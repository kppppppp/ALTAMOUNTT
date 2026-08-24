import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { blogArticles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights & Journal | Altamountt Space & Design",
  description:
    "A collection of ideas on luxury interior design, architecture, materials selection, turnkey planning, and contemporary living by Altamountt.",
};

export default function Blog() {
  const featuredArticle = blogArticles[0];
  const secondaryArticles = blogArticles.slice(1, 4);
  const remainingArticles = blogArticles.slice(4);

  return (
    <PageShell>
      <main className="bg-[var(--bg-ivory)] min-h-screen">
        {/* ═══ 1. EDITORIAL HERO ═══ */}
        <section className="page-editorial-hero overflow-hidden">
          {/* Subtle grid lines */}
          <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />
          <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-[rgba(21,20,18,0.06)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[var(--gold-dark)]" />
              <span className="mono text-xs text-[var(--gold-dark)] tracking-[0.2em] uppercase">JOURNAL</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <h1 className="page-editorial-hero__heading">
                  <span>THE ALTAMOUNTT</span>
                  <br className="hidden md:inline" />
                  <span><em className="text-[var(--gold-dark)] font-serif italic">JOURNAL.</em></span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="page-editorial-hero__desc">
                  A collection of ideas on interiors, architecture, materials, planning, execution and contemporary living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. FEATURED ARTICLE ═══ */}
        <section className="py-12 border-t border-[rgba(21,20,18,0.1)] relative">
          <div className="max-w-7xl mx-auto px-6">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
              <div className="lg:col-span-7">
                <Link href={`/blog/${featuredArticle.slug}`} className="block">
                  <div className="media-reveal-wrap overflow-hidden aspect-[16/10] md:h-[50vh] relative shadow-xl rounded-sm">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title} 
                      className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                      loading="eager" 
                    />
                  </div>
                </Link>
              </div>
              
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-[10px] font-mono tracking-widest text-[var(--ink-muted)]">
                  <span className="text-[var(--gold-dark)]">{featuredArticle.category}</span>
                  <span>·</span>
                  <span>{featuredArticle.date}</span>
                  <span>·</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                
                <Link href={`/blog/${featuredArticle.slug}`} className="block">
                  <h2 className="text-3xl md:text-4xl font-serif text-[var(--ink)] mb-4 hover:text-[var(--gold-dark)] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                </Link>
                
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                
                <Link href={`/blog/${featuredArticle.slug}`} className="text-xs text-[var(--gold-dark)] font-semibold tracking-widest uppercase hover:text-black transition-colors border-b border-current pb-1 w-fit">
                  READ ARTICLE →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ═══ 3. SECONDARY ARTICLES ═══ */}
        <section className="py-16 border-t border-[rgba(21,20,18,0.1)] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {secondaryArticles.map((article, idx) => (
                <article key={article.slug} className="group flex flex-col h-full">
                  <Link href={`/blog/${article.slug}`} className="block">
                    <div className="media-reveal-wrap overflow-hidden aspect-[4/3] relative mb-6 shadow-md rounded-sm">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                        loading="lazy" 
                      />
                    </div>
                  </Link>

                  <div className="flex items-center gap-2 mb-3 text-[9px] font-mono tracking-widest text-[var(--ink-muted)] uppercase">
                    <span className="text-[var(--gold-dark)]">{article.category}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>

                  <Link href={`/blog/${article.slug}`} className="block mb-4 flex-grow">
                    <h3 className="text-xl md:text-2xl font-serif text-[var(--ink)] hover:text-[var(--gold-dark)] transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </Link>

                  <Link href={`/blog/${article.slug}`} className="text-[10px] text-[var(--gold-dark)] font-semibold tracking-widest uppercase hover:text-black transition-colors border-b border-current pb-[1px] w-fit">
                    READ →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 4. REMAINING ARTICLES (Asymmetrical Grid Layout) ═══ */}
        {remainingArticles.length > 0 && (
          <section className="py-16 border-t border-[rgba(21,20,18,0.1)] relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {remainingArticles.map((article, idx) => (
                  <article key={article.slug} className={`group flex flex-col lg:col-span-6 ${idx === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                    <Link href={`/blog/${article.slug}`} className="block">
                      <div className="media-reveal-wrap overflow-hidden aspect-[16/10] relative mb-6 shadow-md rounded-sm">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="media-reveal-inner object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                          loading="lazy" 
                        />
                      </div>
                    </Link>

                    <div className="flex items-center gap-2 mb-3 text-[9px] font-mono tracking-widest text-[var(--ink-muted)] uppercase">
                      <span className="text-[var(--gold-dark)]">{article.category}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>

                    <Link href={`/blog/${article.slug}`} className="block mb-4">
                      <h3 className="text-2xl font-serif text-[var(--ink)] hover:text-[var(--gold-dark)] transition-colors leading-tight">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-[var(--ink-muted)] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <Link href={`/blog/${article.slug}`} className="text-[10px] text-[var(--gold-dark)] font-semibold tracking-widest uppercase hover:text-black transition-colors border-b border-current pb-[1px] w-fit">
                      READ ARTICLE →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ 5. JOURNAL CTA ═══ */}
        <section className="section-pad bg-[var(--bg-dark)] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <p className="eyebrow dark justify-center">Design Partnership</p>
            <h2 className="heading-editorial mb-8 text-[var(--bg-ivory)]" data-text-reveal="left">
              <span>HAVE A SPACE</span>
              <span>IN MIND?</span>
            </h2>
            <p className="text-base text-[var(--ink-light-muted)] max-w-md mx-auto leading-relaxed mb-10">
              Let's talk about planning your residential or turnkey commercial interior space. Start a consultation session with Altamountt today.
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

import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
import { images, studioInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Altamountt | Interior Design Studio · Thane",
  description:
    "Start your interior design project with Altamountt Space & Design. Reach our studio in Bhayandarpada, Thane by phone, WhatsApp or our inquiry form.",
};


const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(studioInfo.address)}&output=embed`;

export default function Contact() {
  return (
    <PageShell>
      <main className="contact-page">
        <section className="page-hero-img">
          <img src={images.contactHero} alt="Altamountt studio — contact us" loading="eager" />
          <div className="page-hero-img-overlay" />

          <div className="page-hero-img-content">
            <p className="eyebrow dark mb-5">Get in touch · Thane, Maharashtra</p>
            <h1 className="hero-title-main mask-text" style={{ color: "#FFFFFF" }}>
              <span className="mask-text-line">LET&apos;S CREATE</span>
              <span className="mask-text-line">
                <em style={{ color: "var(--gold-light)" }}>YOUR SPACE.</em>
              </span>
            </h1>
            <p className="hero-sub-statement mt-5">
              Every considered interior begins with a conversation.
              <br />
              Tell us about your space, your vision, and how you want to live in it.
            </p>
          </div>

          <div className="scroll-ind">
            <span>SCROLL</span>
            <div className="scroll-ind-line" />
          </div>
        </section>

        <section className="section-pad">
          <div className="max-w-7xl mx-auto contact-split">
            <div className="contact-map-panel" data-reveal="up">
              <iframe
                title="Altamountt studio location"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <aside className="contact-info-panel">
              <p className="eyebrow">Visit the studio</p>
              <h2 className="heading-editorial" data-text-reveal="left">
                <span>THANE,</span>
                <span>
                  <em>MAHARASHTRA.</em>
                </span>
              </h2>
              <i className="gold-line" data-gold-line />
              <p className="contact-info-copy">
                A Wing, JVM Sky Court, Shop No. 18, Bhayandarpada, Thane, Maharashtra 400615.
                Appointments are welcome for project discussions, space planning reviews, and
                material consultations.
              </p>

              <div className="contact-detail-stack">
                <a className="contact-reach-card" href={`tel:${studioInfo.phone}`}>
                  <span className="contact-reach-icon">📞</span>
                  <div>
                    <p className="mono text-[10px] text-[var(--ink-muted)] mb-0.5">Phone</p>
                    <p className="text-sm font-semibold text-[var(--ink)]">{studioInfo.phoneDisplay}</p>
                  </div>
                  <span className="ml-auto text-[var(--gold-dark)]">→</span>
                </a>

                <a className="contact-reach-card" href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <span className="contact-reach-icon">💬</span>
                  <div>
                    <p className="mono text-[10px] text-[var(--ink-muted)] mb-0.5">WhatsApp</p>
                    <p className="text-sm font-semibold text-[var(--ink)]">Start a private chat</p>
                  </div>
                  <span className="ml-auto text-[var(--gold-dark)]">→</span>
                </a>

                <a className="contact-reach-card" href={`mailto:${studioInfo.email}`}>
                  <span className="contact-reach-icon">✉</span>
                  <div>
                    <p className="mono text-[10px] text-[var(--ink-muted)] mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-[var(--ink)]">{studioInfo.email}</p>
                  </div>
                  <span className="ml-auto text-[var(--gold-dark)]">→</span>
                </a>
              </div>

              <div className="contact-hours">
                <div>
                  <span className="mono text-[10px] text-[var(--gold-dark)]">Office Hours</span>
                  <p>Monday - Saturday</p>
                  <p>10:00 AM - 7:30 PM</p>
                </div>
                <a href={studioInfo.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions ↗
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-pad pt-0 relative overflow-hidden">
          {/* Big architectural background number */}
          <div className="bg-section-number right-[8%] top-4 select-none pointer-events-none opacity-20 lg:opacity-10">05</div>

          <div className="max-w-7xl mx-auto contact-form-grid relative z-10">
            <div className="contact-form-copy">
              <div className="flex items-center gap-3 mb-6">
                <span className="micro-label-editorial">05 / START A PROJECT</span>
              </div>
              <h2 className="heading-editorial" data-text-reveal="left">
                <span>READY TO</span>
                <span>
                  <em>REIMAGINE YOUR SPACE?</em>
                </span>
              </h2>
              <i className="gold-line" data-gold-line />
              <p>
                Tell us about your current space, your timeline, and the kind of atmosphere you
                want to live in. We&apos;ll come back with a thoughtful, studio-led response.
              </p>
              <div className="contact-cta-row">
                <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
                  WhatsApp Us <span>→</span>
                </a>
                <Link href="/projects" className="hero-btn-secondary">
                  Start a Project <span>→</span>
                </Link>
              </div>
            </div>

            <div className="contact-form-shell" data-reveal="right">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="section-pad-sm px-5 md:px-12 bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[images.lounge, images.dining, images.bedroom].map((img, i) => (
                <div
                  key={img}
                  className="media-reveal-wrap"
                  style={{ height: "26vw", minHeight: 180, maxHeight: 380 }}
                  data-reveal={["up", "scale", "right"][i] as string}
                >
                  <img src={img} alt="Altamountt completed interior space" className="media-reveal-inner" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden" style={{ height: "60vw", minHeight: 380, maxHeight: 700 }}>
          <div className="media-reveal-wrap w-full h-full" data-reveal="parallax">
            <img src={images.warmRoom} alt="Altamountt — a space made for you" className="media-reveal-inner" loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,20,18,0.9)] via-[rgba(21,20,18,0.25)] to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 md:pb-20 text-center text-white px-6">
            <h2 className="heading-editorial mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 5rem)" }} data-text-reveal="left">
              <span>YOUR SPACE IS</span>
              <span>
                <em>WAITING FOR YOU.</em>
              </span>
            </h2>
            <p className="max-w-xl text-sm md:text-base text-white/80 leading-relaxed mb-8">
              Share your vision with our studio and we&apos;ll help shape an interior that feels warm, architectural, and completely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
                WhatsApp Us Now <span>→</span>
              </a>
              <Link href="/projects" className="hero-btn-secondary">
                View Projects <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

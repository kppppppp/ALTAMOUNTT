import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { studioInfo, images } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Altamountt | Interior Design Studio · Thane",
  description:
    "Start your interior design project with Altamountt Space & Design. Reach our studio in Bhayandarpada, Thane by phone, WhatsApp or our inquiry form.",
};

const inquiryTypes = [
  "Residential Interior Design",
  "Commercial / Hospitality",
  "Architecture & Renovation",
  "Turnkey Project",
  "Budget Consultation",
  "Other",
];

export default function Contact() {
  return (
    <PageShell>
      <main>
        {/* ═══ 1. CINEMATIC HERO ═══ */}
        <section className="page-hero-img">
          <img src={images.contactHero} alt="Altamountt studio — contact us" loading="eager" />
          <div className="page-hero-img-overlay" />

          <div className="page-hero-img-content">
            <p className="eyebrow dark mb-5">Get in Touch · Thane, Maharashtra</p>
            <h1 className="hero-title-main mask-text" style={{ color: "#FFFFFF" }}>
              <span className="mask-text-line">LET&rsquo;S BUILD</span>
              <span className="mask-text-line">
                <em style={{ color: "var(--gold-light)" }}>YOUR SPACE.</em>
              </span>
            </h1>
            <p className="hero-sub-statement mt-5">
              Every great space begins with a single conversation.
              <br />
              Tell us about your project — we will do the rest.
            </p>
          </div>

          <div className="scroll-ind">
            <span>SCROLL</span>
            <div className="scroll-ind-line" />
          </div>
        </section>

        {/* ═══ 2. CONTACT SPLIT: Studio Info + Inquiry Form ═══ */}
        <section className="section-pad bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* LEFT — Studio Info */}
            <div className="lg:col-span-5">
              <p className="eyebrow mb-1">Our Studio</p>
              <h2 className="heading-editorial mb-6" data-text-reveal="left">
                <span>VISIT US IN</span>
                <span><em>THANE.</em></span>
              </h2>
              <i className="gold-line" data-gold-line />

              <p className="text-base text-[var(--ink-muted)] leading-relaxed mb-10">
                Our studio is located in Bhayandarpada, Thane West. Appointments are welcome —
                walk in with images, floor plans, or just an idea.
              </p>

              {/* Address + Rating block */}
              <div className="rounded-2xl bg-[var(--bg-sand)] p-6 mb-8">
                <p className="mono text-xs text-[var(--gold-dark)] mb-3">Studio Location</p>
                <p className="text-sm font-semibold text-[var(--ink)] mb-1">{studioInfo.address}</p>
                <a href={studioInfo.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="mono text-xs text-[var(--gold-dark)] hover:text-[var(--ink)] transition-colors">
                  Open in Google Maps ↗
                </a>

                <div className="mt-6 pt-6 border-t border-[var(--line)] flex items-center gap-4">
                  <div>
                    <span className="text-2xl font-serif font-bold">{studioInfo.rating}</span>
                    <span className="ml-2 text-[var(--gold-dark)]">★★★★★</span>
                  </div>
                  <div className="h-8 w-px bg-[var(--line)]" />
                  <span className="text-xs text-[var(--ink-muted)]">{studioInfo.reviewCount} Google reviews</span>
                </div>
              </div>

              {/* Direct contact CTAs */}
              <div className="flex flex-col gap-3">
                <a href={`tel:${studioInfo.phone}`}
                  className="contact-reach-card">
                  <span className="contact-reach-icon">📞</span>
                  <div>
                    <p className="mono text-[10px] text-[var(--ink-muted)] mb-0.5">Call Direct</p>
                    <p className="text-sm font-semibold text-[var(--ink)]">{studioInfo.phoneDisplay}</p>
                  </div>
                  <span className="ml-auto text-[var(--gold-dark)]">→</span>
                </a>

                <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="contact-reach-card">
                  <span className="contact-reach-icon">💬</span>
                  <div>
                    <p className="mono text-[10px] text-[var(--ink-muted)] mb-0.5">WhatsApp</p>
                    <p className="text-sm font-semibold text-[var(--ink)]">Chat Instantly</p>
                  </div>
                  <span className="ml-auto text-[var(--gold-dark)]">→</span>
                </a>

                <a href={`mailto:${studioInfo.email}`}
                  className="contact-reach-card">
                  <span className="contact-reach-icon">✉</span>
                  <div>
                    <p className="mono text-[10px] text-[var(--ink-muted)] mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-[var(--ink)]">{studioInfo.email}</p>
                  </div>
                  <span className="ml-auto text-[var(--gold-dark)]">→</span>
                </a>
              </div>
            </div>

            {/* RIGHT — Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[var(--bg-dark)] rounded-3xl p-8 md:p-12" data-reveal="right">
                <p className="eyebrow dark mb-2">Inquiry Form</p>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-8">Tell us about your project</h3>

                <form
                  action={studioInfo.whatsappUrl}
                  method="GET"
                  target="_blank"
                  className="flex flex-col gap-6"
                >
                  {/* Name */}
                  <div className="form-field-dark">
                    <label htmlFor="name" className="form-label-dark">Full Name *</label>
                    <input type="text" id="name" name="name" placeholder="Rohan Mehta"
                      className="form-input-dark" required />
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-field-dark">
                      <label htmlFor="phone" className="form-label-dark">Phone *</label>
                      <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210"
                        className="form-input-dark" required />
                    </div>
                    <div className="form-field-dark">
                      <label htmlFor="email" className="form-label-dark">Email</label>
                      <input type="email" id="email" name="email" placeholder="you@email.com"
                        className="form-input-dark" />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="form-field-dark">
                    <label htmlFor="type" className="form-label-dark">Inquiry Type</label>
                    <select id="type" name="type" className="form-input-dark form-select-dark">
                      <option value="">Select a service category</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="form-field-dark">
                    <label htmlFor="budget" className="form-label-dark">Approximate Budget</label>
                    <select id="budget" name="budget" className="form-input-dark form-select-dark">
                      <option value="">Select a budget range</option>
                      <option>₹ 5L – 15L</option>
                      <option>₹ 15L – 35L</option>
                      <option>₹ 35L – 75L</option>
                      <option>₹ 75L – 1.5 Cr</option>
                      <option>₹ 1.5 Cr +</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-field-dark">
                    <label htmlFor="message" className="form-label-dark">Tell Us About Your Space</label>
                    <textarea id="message" name="message" rows={4}
                      placeholder="Describe your space, timeline, and vision. Any floor plans or inspirations are welcome."
                      className="form-input-dark resize-none" />
                  </div>

                  {/* Submit */}
                  <button type="submit" className="hero-btn-primary w-full justify-center">
                    Send Inquiry — We Respond Within 24h <span>→</span>
                  </button>

                  <p className="mono text-[10px] text-[var(--ink-light-muted)] text-center tracking-widest">
                    OR REACH US DIRECTLY VIA WHATSAPP — RESPONSE WITHIN 1 HOUR
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. LOCATION IMAGE STRIP ═══ */}
        <section className="section-pad-sm px-5 md:px-12 bg-[var(--bg-ivory)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[images.lounge, images.dining, images.bedroom].map((img, i) => (
                <div key={i} className="media-reveal-wrap"
                  style={{ height: "26vw", minHeight: 180, maxHeight: 380 }}
                  data-reveal={["up", "scale", "right"][i] as string}>
                  <img src={img} alt="Altamountt completed interior space" className="media-reveal-inner" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 4. FINAL CTA IMAGE ═══ */}
        <section className="relative overflow-hidden" style={{ height: "60vw", minHeight: 380, maxHeight: 700 }}>
          <div className="media-reveal-wrap w-full h-full" data-reveal="parallax">
            <img src={images.warmRoom} alt="Altamountt — a space made for you" className="media-reveal-inner" loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,20,18,0.9)] via-[rgba(21,20,18,0.25)] to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 md:pb-20 text-center text-white px-6">
            <h2 className="heading-editorial mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 5rem)" }} data-text-reveal="left">
              <span>YOUR SPACE IS</span>
              <span><em>WAITING FOR YOU.</em></span>
            </h2>
            <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
              WhatsApp Us Now <span>→</span>
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

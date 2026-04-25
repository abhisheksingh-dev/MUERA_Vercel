import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "MUERA redefines made-to-measure tailoring — simplifying the process without compromising quality. Learn about our story and Mueller Bespoke heritage.",
};

const PHILOSOPHY_ITEMS = [
  {
    num: "01",
    title: "Reduction to what matters",
    text: "We remove every step that does not add value. What remains is pure craft.",
  },
  {
    num: "02",
    title: "Precision in every detail",
    text: "From the first measurement to the final stitch, we maintain uncompromising standards.",
  },
  {
    num: "03",
    title: "Style for everyday life",
    text: "A MUERA suit is made to be worn — not just admired. Refined, functional, timeless.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── ABOUT HERO ─────────────────────────────── */}
      <section className="about-hero" aria-label="About MUERA">
        <div className="container">
          <p className="section-label">About us</p>
          <h1 className="section-title section-title--light" style={{ maxWidth: 600 }}>
            About MUERA
          </h1>
          <div className="divider" style={{ background: "rgba(245,243,239,0.2)" }} />
          <p style={{ color: "rgba(245,243,239,0.65)", maxWidth: 520, fontSize: "1.0625rem" }}>
            MUERA redefines made-to-measure tailoring — simplifying the process
            without compromising quality.
          </p>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-off-white)" }} aria-label="Our story">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <p className="section-label">The idea</p>
              <h2 className="section-title">Where MUERA began</h2>
              <div className="divider" />
              <p>
                Traditional tailoring is often complex and time-consuming. Long
                appointments, uncertain timelines, and opaque pricing create
                friction that discourages many from ever experiencing a truly
                perfect fit.
              </p>
              <br />
              <p>
                MUERA was created to remove that friction — maintaining precision
                and quality while making the process accessible, transparent, and
                entirely digital.
              </p>
            </div>

            <div>
              <p className="section-label">Mueller Bespoke</p>
              <h2 className="section-title">Swiss heritage, modern thinking</h2>
              <div className="divider" />
              <p>
                Every suit crafted through MUERA is made by Mueller Bespoke — a
                house built on decades of tailoring experience, precision, and an
                unwavering commitment to quality.
              </p>
              <br />
              <p>
                We combine that deep craft tradition with a carefully designed
                digital process, so you receive a suit that feels entirely personal
                without the complexity of a traditional atelier.
              </p>
              <div style={{ marginTop: "2.5rem" }}>
                <Link href="/configurator" className="btn btn--primary" id="about-story-cta">
                  Create Your Suit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FABRIC VISUAL ──────────────────────────── */}
      <section style={{ position: "relative", height: "380px", overflow: "hidden" }} aria-hidden="true">
        <Image
          src="/fabric-texture.png"
          alt="Premium suit fabric texture"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.8 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(11,11,11,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
              color: "var(--color-off-white)",
              textAlign: "center",
              maxWidth: 640,
              padding: "0 2rem",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            &ldquo;Luxury is not about loudness.<br />It is about the quiet confidence of a perfect fit.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── PHILOSOPHY ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-off-white)" }} aria-label="Our philosophy">
        <div className="container">
          <p className="section-label">Our approach</p>
          <h2 className="section-title" style={{ maxWidth: 480 }}>
            Three principles that guide everything we do
          </h2>
          <div className="divider" />

          <div className="philosophy-items" style={{ maxWidth: 680 }}>
            {PHILOSOPHY_ITEMS.map((item) => (
              <div className="philosophy-item" key={item.num}>
                <span className="philosophy-item__num" aria-hidden="true">{item.num}</span>
                <div>
                  <h3 className="philosophy-item__title">{item.title}</h3>
                  <p className="philosophy-item__text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────── */}
      <section className="cta-banner" aria-label="Start your suit">
        <div className="container">
          <p className="section-label" style={{ color: "var(--color-gold)", textAlign: "center" }}>
            Ready?
          </p>
          <h2 className="cta-banner__title">Experience the difference</h2>
          <p className="cta-banner__text">
            Start your personalized suit today.
          </p>
          <Link href="/configurator" className="btn btn--primary-light" id="about-final-cta">
            Create Your Suit
          </Link>
        </div>
      </section>
    </>
  );
}

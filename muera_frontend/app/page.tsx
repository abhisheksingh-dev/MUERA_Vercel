import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MUERA — Perfect Fit. Without Complexity.",
  description:
    "MUERA by Mueller Bespoke. Made-to-measure suits, configured online and crafted with precision. Premium fabrics and transparent pricing.",
};

/* ── SVG Icons ─────────────────────────────────────────────── */
function IconFabric() {
  return (
    <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="8" y="8" width="36" height="36" rx="2" />
      <path d="M8 20h36M8 32h36M20 8v36M32 8v36" />
    </svg>
  );
}
function IconMeasure() {
  return (
    <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="26" cy="26" r="18" />
      <path d="M26 8v4M26 40v4M8 26h4M40 26h4M26 26l8-8" />
      <circle cx="26" cy="26" r="3" />
    </svg>
  );
}
function IconDeliver() {
  return (
    <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="6" y="14" width="30" height="24" rx="2" />
      <path d="M36 20h6l4 8v10h-10V20z" />
      <circle cx="14" cy="42" r="4" />
      <circle cx="40" cy="42" r="4" />
    </svg>
  );
}

function IconFit() {
  return (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M22 6c-4 0-7 3-7 7v2l-7 4v14h28V19l-7-4v-2c0-4-3-7-7-7z" />
      <path d="M15 19h14" />
    </svg>
  );
}
function IconFabricSmall() {
  return (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M8 36L22 8l14 28" />
      <path d="M13 26h18" />
    </svg>
  );
}
function IconPrice() {
  return (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <circle cx="22" cy="22" r="16" />
      <path d="M22 14v2M22 28v2M18 18a4 4 0 018 0c0 2.5-4 4-4 4M18 26h8" />
    </svg>
  );
}

const PROCESS_STEPS = [
  {
    num: "01",
    icon: <IconFabric />,
    title: "Configure",
    text: "Choose your fabric, fit and details online.",
  },
  {
    num: "02",
    icon: <IconMeasure />,
    title: "Measure",
    text: "Get measured via partner or guided instructions.",
  },
  {
    num: "03",
    icon: <IconDeliver />,
    title: "Receive",
    text: "Your suit is crafted and delivered within weeks.",
  },
];

const VALUE_ITEMS = [
  "Perfect fit without tailoring complexity",
  "Premium fabrics and precise craftsmanship",
  "Transparent pricing — no surprises",
  "Crafted by Mueller Bespoke",
];

const TRUST_CARDS = [
  {
    icon: <IconFit />,
    title: "Perfect fit without complexity",
    text: "Our digital process ensures a precise fit without the traditional friction.",
  },
  {
    icon: <IconFabricSmall />,
    title: "Premium fabrics & craftsmanship",
    text: "Only the finest materials, selected and crafted with uncompromising standards.",
  },
  {
    icon: <IconPrice />,
    title: "Transparent pricing",
    text: "No hidden costs. You know exactly what you pay for before you commit.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero — Perfect fit. Without complexity.">
        <Image
          src="/hero-suit.png"
          alt="Man in a perfectly tailored MUERA suit"
          fill
          priority
          sizes="100vw"
          className="hero__bg"
        />
        <div className="hero__overlay" aria-hidden="true" />

        <div className="container" style={{ width: "100%" }}>
          <div className="hero__content">
            <p className="hero__eyebrow animate-fade-up animate-delay-1">
              MUERA by Mueller Bespoke
            </p>
            <h1 className="hero__title animate-fade-up animate-delay-2">
              Perfect fit.<br />Without complexity.
            </h1>
            <p className="hero__sub animate-fade-up animate-delay-3">
              Made-to-measure suits, configured online and crafted with precision.
            </p>
            <p className="hero__brand animate-fade-up animate-delay-4">
              MUERA&nbsp;&nbsp;—&nbsp;&nbsp;Mueller Bespoke
            </p>
            <div className="hero__ctas animate-fade-up animate-delay-5">
              <Link href="/configurator" className="btn btn--primary-light" id="hero-cta-primary">
                Create Your Suit
              </Link>
              <a href="#process" className="btn btn--outline" id="hero-cta-secondary">
                How it works
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 4v12M4 10l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section id="process" className="section" style={{ background: "var(--color-off-white)" }} aria-label="Three-step process">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label">The process</p>
          <h2 className="section-title">Your suit in three steps</h2>
          <div className="divider divider--center" />
        </div>

        <div className="container">
          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <article className="process-step" key={step.num}>
                <span className="process-step__num" aria-hidden="true">{step.num}</span>
                <div className="process-step__icon" aria-hidden="true">{step.icon}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__text">{step.text}</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/configurator" className="btn btn--outline-dark" id="process-cta">
              Create Your Suit
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ────────────────────────────── */}
      <section className="section value-section" aria-label="Why MUERA">
        <div className="container">
          <div className="value-grid">
            <div>
              <p className="section-label" style={{ color: "var(--color-gold)" }}>Why MUERA</p>
              <h2 className="section-title section-title--light">
                Precision without compromise
              </h2>
              <div className="divider" style={{ background: "rgba(245,243,239,0.2)" }} />
              <ul className="value-list" aria-label="Value propositions">
                {VALUE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: "2.5rem" }}>
                <Link href="/configurator" className="btn btn--primary-light" id="value-cta">
                  Create Your Suit
                </Link>
              </div>
            </div>

            <div className="value-img-wrap">
              <Image
                src="/suit-label.png"
                alt="MUERA by Mueller Bespoke — suit interior label"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="value-img-badge">
                Mueller Bespoke
                <span>crafted in Switzerland</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ─────────────────────────────────── */}
      <section className="section trust-section" aria-label="Craft meets precision">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label">Our commitment</p>
          <h2 className="section-title">Craft meets precision</h2>
          <div className="divider divider--center" />
          <p style={{ maxWidth: 540, marginInline: "auto", marginTop: "0.5rem" }}>
            Behind MUERA stands Mueller Bespoke — combining traditional tailoring
            expertise with a modern digital experience.
          </p>
        </div>

        <div className="container" style={{ marginTop: "0" }}>
          <div className="trust-grid">
            {TRUST_CARDS.map((card) => (
              <article className="trust-card" key={card.title}>
                <div className="trust-card__icon" aria-hidden="true">{card.icon}</div>
                <h3 className="trust-card__title">{card.title}</h3>
                <p className="trust-card__text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="cta-banner" aria-label="Start your suit">
        <div className="container">
          <p className="section-label" style={{ color: "var(--color-gold)", textAlign: "center" }}>
            Begin
          </p>
          <h2 className="cta-banner__title">Start your suit</h2>
          <p className="cta-banner__text">
            Create your personalized suit in minutes.
          </p>
          <Link href="/configurator" className="btn btn--primary-light" id="final-cta">
            Create Your Suit
          </Link>
        </div>
      </section>
    </>
  );
}

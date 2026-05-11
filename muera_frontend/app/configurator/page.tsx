import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Configurator",
  description:
    "Configure your MUERA made-to-measure suit. Choose your fabric, fit and details — then get measured and receive your perfect suit.",
};

const STEPS = [
  { num: "01", label: "Choose fabric & style" },
  { num: "02", label: "Select your fit" },
  { num: "03", label: "Submit measurements" },
  { num: "04", label: "Receive your suit" },
];

export default function ConfiguratorPage() {
  return (
    <>
      {/* ── CONFIGURATOR HERO ─────────────────────── */}
      <section className="config-hero" aria-label="Start the MUERA configurator">
        <Image
          src="/fabric-texture.png"
          alt="Premium fabric texture background"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="config-hero__bg"
        />
        <div className="config-hero__overlay" aria-hidden="true" />

        <div className="container" style={{ width: "100%", position: "relative", zIndex: 2 }}>
          <div className="config-hero__content" style={{ paddingTop: "4rem" }}>
            <p
              className="section-label animate-fade-up animate-delay-1"
              style={{ color: "var(--color-gold)", textAlign: "center" }}
            >
              Made-to-Measure
            </p>
            <h1
              className="animate-fade-up animate-delay-2"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--color-off-white)",
                textAlign: "center",
                marginBottom: "1.25rem",
              }}
            >
              Your suit,<br />configured.
            </h1>
            <div className="divider divider--center animate-fade-up animate-delay-3" style={{ background: "rgba(198,169,107,0.5)" }} />
            <p
              className="animate-fade-up animate-delay-3"
              style={{
                color: "rgba(245,243,239,0.65)",
                textAlign: "center",
                marginBottom: "2.75rem",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
              }}
            >
              You will be redirected to our external configurator,
              powered by Mirrorsize 3D technology.
            </p>

            {/* Steps preview */}
            <div
              className="animate-fade-up animate-delay-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1px",
                background: "rgba(245,243,239,0.08)",
                marginBottom: "3rem",
              }}
            >
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  style={{
                    background: "rgba(26,34,48,0.5)",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      color: "rgba(198,169,107,0.5)",
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(245,243,239,0.7)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="animate-fade-up animate-delay-5"
              style={{ textAlign: "center", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              {/* Link to actual Mirrorsize configurator — update URL as needed */}
              <Link
                href="/configurator/studio"
                className="btn btn--primary-light"
                id="configurator-start-btn"
              >
                Start Configuration
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn--outline" id="configurator-contact-link">
                Have a question?
              </Link>
            </div>

            <p
              style={{
                textAlign: "center",
                marginTop: "2rem",
                fontSize: "0.75rem",
                color: "rgba(245,243,239,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              Powered by Mirrorsize 3D Configurator &nbsp;·&nbsp; Mueller Bespoke
            </p>
          </div>
        </div>
      </section>

      {/* ── REASSURANCE ──────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--color-off-white)", paddingBlock: "80px" }}
        aria-label="Process reassurance"
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label">What to expect</p>
          <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            Simple, transparent, precise
          </h2>
          <p style={{ maxWidth: 480, marginInline: "auto", marginBottom: "2.5rem" }}>
            The configurator guides you through fabric, fit and style choices.
            Once complete, we guide you through measurement — then your suit is
            crafted and delivered within a few weeks.
          </p>
          <Link href="/contact" className="btn btn--outline-dark" id="config-reassure-contact">
            Any questions? Contact us
          </Link>
        </div>
      </section>
    </>
  );
}

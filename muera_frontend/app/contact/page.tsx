import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MUERA. We are here to assist you with your made-to-measure suit. Email us at info@muera.ch.",
};

function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <rect x="2" y="5" width="18" height="13" rx="1.5" />
      <path d="M2 5l9 8 9-8" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M11 2C7.68 2 5 4.68 5 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.32-2.68-6-6-6z" />
      <circle cx="11" cy="8" r="2.2" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ── CONTACT HERO ─────────────────────────── */}
      <section className="contact-hero" aria-label="Contact MUERA">
        <div className="container">
          <p className="section-label">Get in touch</p>
          <h1 className="section-title" style={{ maxWidth: 520 }}>
            Contact
          </h1>
          <div className="divider" />
          <p style={{ fontSize: "1.0625rem" }}>
            We are here to assist you.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ─────────────────────────── */}
      <section className="section" style={{ background: "var(--color-off-white)" }} aria-label="Contact details and form">
        <div className="container">
          <div className="contact-grid">
            {/* Details */}
            <div>
              <p className="section-label">Details</p>
              <h2 className="section-title" style={{ fontSize: "1.75rem" }}>
                Reach us directly
              </h2>
              <div className="divider" />

              <div>
                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <IconMail />
                  </span>
                  <div>
                    <p className="contact-detail__label">Email</p>
                    <a
                      href="mailto:info@muera.ch"
                      className="contact-detail__value"
                      id="contact-email"
                    >
                      info@muera.ch
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <IconPin />
                  </span>
                  <div>
                    <p className="contact-detail__label">Location</p>
                    <p className="contact-detail__value" style={{ fontFamily: "var(--font-serif)" }}>
                      Switzerland
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "3rem",
                  padding: "2rem",
                  background: "var(--color-navy)",
                  color: "var(--color-off-white)",
                }}
              >
                <p style={{ color: "rgba(245,243,239,0.55)", fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Or start your suit directly
                </p>
                <p style={{ color: "rgba(245,243,239,0.75)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
                  Skip the wait — configure your suit online in minutes.
                </p>
                <Link href="/configurator" className="btn btn--primary-light" id="contact-config-cta">
                  Create Your Suit
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="section-label">Message</p>
              <h2 className="section-title" style={{ fontSize: "1.75rem" }}>
                Send a message
              </h2>
              <div className="divider" />

              <form className="contact-form" aria-label="Contact form" action="mailto:info@muera.ch" method="POST" encType="text/plain">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Full name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email-input" className="form-label">Email address</label>
                  <input
                    type="email"
                    id="contact-email-input"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    className="form-input"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your enquiry…"
                    required
                  />
                </div>

                <button type="submit" className="btn btn--primary" id="contact-submit" style={{ alignSelf: "flex-start" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

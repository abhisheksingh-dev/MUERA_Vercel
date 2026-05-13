import { getTranslations } from "next-intl/server";
import Link from "next/link";

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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const commonT = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <section className="contact-hero" aria-label={t("heroTitle")}>
        <div className="container">
          <p className="section-label">{t("heroLabel")}</p>
          <h1 className="section-title" style={{ maxWidth: 520 }}>
            {t("heroTitle")}
          </h1>
          <div className="divider" />
          <p style={{ fontSize: "1.0625rem" }}>
            {t("heroText")}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-off-white)" }} aria-label={t("detailsTitle")}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <p className="section-label">{t("detailsLabel")}</p>
              <h2 className="section-title" style={{ fontSize: "1.75rem" }}>
                {t("detailsTitle")}
              </h2>
              <div className="divider" />

              <div>
                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <IconMail />
                  </span>
                  <div>
                    <p className="contact-detail__label">{t("emailLabel")}</p>
                    <a href="mailto:info@muera.ch" className="contact-detail__value" id="contact-email">
                      info@muera.ch
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <IconPin />
                  </span>
                  <div>
                    <p className="contact-detail__label">{t("locationLabel")}</p>
                    <p className="contact-detail__value" style={{ fontFamily: "var(--font-serif)" }}>
                      {t("locationValue")}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "3rem", padding: "2rem", background: "var(--color-navy)", color: "var(--color-off-white)" }}>
                <p style={{ color: "rgba(245,243,239,0.55)", fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {t("ctaLabel")}
                </p>
                <p style={{ color: "rgba(245,243,239,0.75)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
                  {t("ctaText")}
                </p>
                <Link href="/configurator" className="btn btn--primary-light" id="contact-config-cta">
                  {t("ctaButton")}
                </Link>
              </div>
            </div>

            <div>
              <p className="section-label">{t("formLabel")}</p>
              <h2 className="section-title" style={{ fontSize: "1.75rem" }}>
                {t("formTitle")}
              </h2>
              <div className="divider" />

              <form className="contact-form" aria-label={t("formTitle")} action="mailto:info@muera.ch" method="POST" encType="text/plain">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">{t("formNameLabel")}</label>
                  <input type="text" id="contact-name" name="name" className="form-input" placeholder={t("formNamePlaceholder")} required autoComplete="name" />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email-input" className="form-label">{t("formEmailLabel")}</label>
                  <input type="email" id="contact-email-input" name="email" className="form-input" placeholder={t("formEmailPlaceholder")} required autoComplete="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">{t("formSubjectLabel")}</label>
                  <input type="text" id="contact-subject" name="subject" className="form-input" placeholder={t("formSubjectPlaceholder")} />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">{t("formMessageLabel")}</label>
                  <textarea id="contact-message" name="message" className="form-textarea" placeholder={t("formMessagePlaceholder")} required />
                </div>

                <button type="submit" className="btn btn--primary" id="contact-submit" style={{ alignSelf: "flex-start" }}>
                  {t("formSubmit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

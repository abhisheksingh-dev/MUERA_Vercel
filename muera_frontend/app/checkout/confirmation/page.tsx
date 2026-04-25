import Link from "next/link";

export default function ConfirmationPage() {
  // Static order number — in production this would come from the API
  const orderNumber = `MR-${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <section className="confirmation-hero" aria-label="Order confirmed">
      <div style={{ maxWidth: 560 }}>
        {/* Checkmark */}
        <div className="confirmation-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 14l6 6 12-12" />
          </svg>
        </div>

        <p className="confirmation-order-no">Order confirmed</p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-black)", marginBottom: "1rem", lineHeight: 1.2 }}>
          Thank you for your order.
        </h1>

        <div className="divider divider--center" />

        <p style={{ color: "var(--color-mid-gray)", marginBottom: "0.625rem", fontSize: "1rem" }}>
          Order number: <strong style={{ color: "var(--color-black)", fontFamily: "var(--font-serif)" }}>{orderNumber}</strong>
        </p>
        <p style={{ color: "var(--color-mid-gray)", maxWidth: 420, marginInline: "auto", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "2.5rem" }}>
          A confirmation email has been sent to your address. Your suit is now in production.
          We will notify you when it ships.
        </p>

        {/* Timeline */}
        <div style={{ border: "1px solid var(--color-light-gray)", padding: "1.5rem 2rem", marginBottom: "2.5rem", textAlign: "left" }}>
          <p style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-mid-gray)", marginBottom: "1.25rem" }}>
            What happens next
          </p>
          {[
            { step: "01", title: "Order confirmed", desc: "You will receive an email with your order details." },
            { step: "02", title: "In production", desc: "Your garment enters our tailoring process." },
            { step: "03", title: "Quality check", desc: "Each piece is inspected before dispatch." },
            { step: "04", title: "Dispatched", desc: "Shipped and tracked to your address." },
          ].map((s) => (
            <div key={s.step} style={{ display: "flex", gap: "1.25rem", paddingBlock: "0.875rem", borderBottom: "1px solid var(--color-light-gray)" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-beige)", flexShrink: 0, lineHeight: 1 }}>
                {s.step}
              </span>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.9375rem", color: "var(--color-black)", marginBottom: "0.2rem" }}>{s.title}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-mid-gray)" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/shop" className="btn btn--primary" id="confirmation-shop-btn">
            Continue Shopping
          </Link>
          <Link href="/contact" className="btn btn--outline-dark" id="confirmation-contact-btn">
            Have a question?
          </Link>
        </div>
      </div>
    </section>
  );
}

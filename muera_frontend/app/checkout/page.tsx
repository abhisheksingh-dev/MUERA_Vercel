"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

type PaymentMethod = "card" | "twint" | "invoice";

function CheckoutContent() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (items.length === 0) router.push("/shop");
  }, [items.length, router]);

  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setSubmitting(true);
    setErrorMessage(null);

    if (paymentMethod === "card") {
      const cardElement = elements.getElement(CardElement);
      if (cardElement) {
        const { error, paymentMethod: stripePaymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            name: (document.getElementById("co-first-name") as HTMLInputElement)?.value + " " + (document.getElementById("co-last-name") as HTMLInputElement)?.value,
            email: (document.getElementById("co-email") as HTMLInputElement)?.value,
          },
        });

        if (error) {
          setErrorMessage(error.message || "An error occurred with your payment.");
          setSubmitting(false);
          return;
        }
        
        console.log("Payment successful, method ID:", stripePaymentMethod.id);
        
        // Save order to backend
        try {
          await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              total_amount: total,
              status: 'paid',
              payment_method: 'card',
              stripe_payment_id: stripePaymentMethod.id,
              items: items,
              shipping_address: {
                name: (document.getElementById("co-first-name") as HTMLInputElement)?.value + " " + (document.getElementById("co-last-name") as HTMLInputElement)?.value,
                email: (document.getElementById("co-email") as HTMLInputElement)?.value,
                address: (document.getElementById("co-address") as HTMLInputElement)?.value,
                city: (document.getElementById("co-city") as HTMLInputElement)?.value,
                postal: (document.getElementById("co-postal") as HTMLInputElement)?.value,
                country: (document.getElementById("co-country") as HTMLSelectElement)?.value,
              }
            })
          });
        } catch (e) {
          console.error("Failed to save order", e);
        }
      }
    } else {
      await new Promise((r) => setTimeout(r, 1800));
      
      // Save order to backend
      try {
        await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            total_amount: total,
            status: 'pending',
            payment_method: paymentMethod,
            items: items,
            shipping_address: {
              name: (document.getElementById("co-first-name") as HTMLInputElement)?.value + " " + (document.getElementById("co-last-name") as HTMLInputElement)?.value,
              email: (document.getElementById("co-email") as HTMLInputElement)?.value,
              address: (document.getElementById("co-address") as HTMLInputElement)?.value,
              city: (document.getElementById("co-city") as HTMLInputElement)?.value,
              postal: (document.getElementById("co-postal") as HTMLInputElement)?.value,
              country: (document.getElementById("co-country") as HTMLSelectElement)?.value,
            }
          })
        });
      } catch (e) {
        console.error("Failed to save order", e);
      }
    }

    clearCart();
    router.push("/checkout/confirmation");
  };

  if (items.length === 0) return null; // useEffect will redirect

  return (
    <div className="container">
      <div className="checkout-layout">
        {/* ── Form ─────────────────────────────────────────── */}
        <form onSubmit={handleSubmit} noValidate aria-label="Checkout form">
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", marginBottom: "2.5rem" }}>
            Checkout
          </h1>

          {/* Contact */}
          <div className="checkout-section">
            <h2 className="checkout-section__title">Contact</h2>
            <div className="form-group">
              <label htmlFor="co-email" className="form-label">Email address</label>
              <input type="email" id="co-email" name="email" className="form-input" placeholder="your@email.com" required autoComplete="email" />
            </div>
          </div>

          {/* Shipping */}
          <div className="checkout-section">
            <h2 className="checkout-section__title">Shipping Address</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="co-first-name" className="form-label">First name</label>
                <input type="text" id="co-first-name" name="firstName" className="form-input" placeholder="Max" required autoComplete="given-name" />
              </div>
              <div className="form-group">
                <label htmlFor="co-last-name" className="form-label">Last name</label>
                <input type="text" id="co-last-name" name="lastName" className="form-input" placeholder="Müller" required autoComplete="family-name" />
              </div>
            </div>
            <div className="form-group" style={{ marginTop: "1rem" }}>
              <label htmlFor="co-address" className="form-label">Address</label>
              <input type="text" id="co-address" name="address" className="form-input" placeholder="Bahnhofstrasse 1" required autoComplete="street-address" />
            </div>
            <div className="form-row" style={{ marginTop: "1rem" }}>
              <div className="form-group">
                <label htmlFor="co-postal" className="form-label">Postal code</label>
                <input type="text" id="co-postal" name="postal" className="form-input" placeholder="8001" required autoComplete="postal-code" />
              </div>
              <div className="form-group">
                <label htmlFor="co-city" className="form-label">City</label>
                <input type="text" id="co-city" name="city" className="form-input" placeholder="Zürich" required autoComplete="address-level2" />
              </div>
            </div>
            <div className="form-group" style={{ marginTop: "1rem" }}>
              <label htmlFor="co-country" className="form-label">Country</label>
              <select id="co-country" name="country" className="form-input" required autoComplete="country" defaultValue="CH">
                <option value="CH">Switzerland</option>
                <option value="DE">Germany</option>
                <option value="AT">Austria</option>
                <option value="FR">France</option>
                <option value="IT">Italy</option>
                <option value="GB">United Kingdom</option>
              </select>
            </div>
          </div>

          {/* Payment */}
          <div className="checkout-section">
            <h2 className="checkout-section__title">Payment</h2>
            <div className="payment-methods" role="group" aria-label="Payment method">
              {(["card", "twint", "invoice"] as PaymentMethod[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`payment-method-btn${paymentMethod === m ? " payment-method-btn--active" : ""}`}
                  onClick={() => setPaymentMethod(m)}
                  id={`payment-${m}`}
                  aria-pressed={paymentMethod === m}
                >
                  {m === "card" ? "Credit Card" : m === "twint" ? "TWINT" : "Invoice"}
                </button>
              ))}
            </div>

            {paymentMethod === "card" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="form-group">
                  <label htmlFor="co-card-name" className="form-label">Name on card</label>
                  <input type="text" id="co-card-name" className="stripe-input" placeholder="Max Müller" required autoComplete="cc-name" />
                </div>
                <div className="form-group" style={{ padding: "12px", border: "1px solid var(--color-light-gray)", backgroundColor: "#fafafa" }}>
                  <CardElement options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }} />
                </div>
                {errorMessage && (
                  <div style={{ color: "#9e2146", fontSize: "0.875rem" }}>{errorMessage}</div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--color-mid-gray)" strokeWidth="1.3" aria-hidden="true">
                    <rect x="2" y="5" width="10" height="7" rx="1" />
                    <path d="M4 5V4a3 3 0 016 0v1" />
                  </svg>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-mid-gray)" }}>Secured by Stripe. We never store your card details.</span>
                </div>
              </div>
            )}

            {paymentMethod === "twint" && (
              <div style={{ padding: "2rem", border: "1px solid var(--color-light-gray)", textAlign: "center" }}>
                <p style={{ color: "var(--color-mid-gray)", fontSize: "0.9375rem" }}>
                  You will be redirected to TWINT after clicking Place Order.
                </p>
              </div>
            )}

            {paymentMethod === "invoice" && (
              <div style={{ padding: "2rem", border: "1px solid var(--color-light-gray)" }}>
                <p style={{ color: "var(--color-mid-gray)", fontSize: "0.9375rem" }}>
                  Payment by invoice is available for orders under CHF 3,000. An invoice will be sent to your email within 24 hours of order confirmation. Payment due within 30 days.
                </p>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn--primary"
            id="co-submit"
            disabled={submitting}
            style={{ width: "100%", justifyContent: "center", opacity: submitting ? 0.7 : 1 }}
          >
            {submitting ? "Processing…" : `Place Order — ${formatPrice(total)}`}
          </button>

          <p style={{ fontSize: "0.75rem", color: "var(--color-mid-gray)", marginTop: "1rem", textAlign: "center" }}>
            By placing your order you agree to our{" "}
            <a href="/privacy" style={{ color: "var(--color-black)" }}>Privacy Policy</a>{" "}
            and{" "}
            <a href="/style-guide" style={{ color: "var(--color-black)" }}>Terms of Service</a>.
          </p>
        </form>

        {/* ── Order Summary ─────────────────────────────── */}
        <aside className="checkout-order-summary" aria-label="Order summary">
          <h2 className="checkout-order-summary__title">Your Order</h2>

          {items.map((item) => (
            <div key={item.lineKey} className="checkout-summary-item">
              <div className="checkout-summary-item__img">
                <Image
                  src={item.product.variants[0].images[0]}
                  alt={item.product.name}
                  fill
                  sizes="64px"
                  style={{ objectFit: "cover" }}
                />
                {item.quantity > 1 && (
                  <span style={{
                    position: "absolute", top: -6, right: -6,
                    background: "var(--color-black)", color: "#fff",
                    fontSize: "0.625rem", width: 18, height: 18,
                    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {item.quantity}
                  </span>
                )}
              </div>
              <div>
                <p className="checkout-summary-item__name">{item.product.name}</p>
                <p className="checkout-summary-item__meta">
                  {item.selectedColor} · {item.selectedSize}
                  {item.customized && " · 3D Custom"}
                </p>
              </div>
              <p className="checkout-summary-item__price">{formatPrice(item.product.price * item.quantity)}</p>
            </div>
          ))}

          <div className="checkout-totals">
            <div className="checkout-total-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="checkout-total-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="checkout-total-row checkout-total-row--grand">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutContent />
    </Elements>
  );
}

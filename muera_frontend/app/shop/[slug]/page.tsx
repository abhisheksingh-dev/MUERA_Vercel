"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

/* ── Simple Accordion ──────────────────────────────────────── */
function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pdp-accordion__item">
      <button
        className="pdp-accordion__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {title}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M7 2v10M2 7h10" />
        </svg>
      </button>
      {open && <div className="pdp-accordion__body">{children}</div>}
    </div>
  );
}

/* ── Toast ──────────────────────────────────────────────────── */
function Toast({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="toast" role="status" aria-live="polite">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 9l4 4 8-8" />
      </svg>
      <p className="toast__text">Added to cart</p>
      <Link href="/cart" className="toast__link">View cart →</Link>
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [toast, setToast] = useState(false);

  if (!product) return notFound();

  const related = getRelatedProducts(product, 3);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    addItem({
      product,
      selectedColor: product.variants[selectedColor].color,
      selectedSize,
      quantity: 1,
      customized: false,
    });
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  };

  return (
    <>
      <div className="container">
        <div className="pdp-grid">
          {/* Gallery */}
          <div className="pdp-gallery">
            <div className="pdp-gallery__main">
              <Image
                src={product.variants[selectedColor].images[0]}
                alt={`${product.name} in ${product.variants[selectedColor].color}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {product.hasConfigurator && (
                <div className="pdp-gallery__configurator-overlay">
                  <span style={{ color: "var(--color-gold)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    3D Customisable
                  </span>
                  <a
                    href={product.configuratorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary-light"
                    style={{ padding: "10px 18px", fontSize: "0.75rem" }}
                  >
                    Customise →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            {/* Breadcrumb */}
            <nav className="pdp-info__breadcrumb" aria-label="Breadcrumb">
              <Link href="/shop">Shop</Link>
              <span aria-hidden="true">›</span>
              <Link href={`/shop?category=${product.category}`}>{product.category}</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "var(--color-black)" }}>{product.name}</span>
            </nav>

            {product.badge && (
              <span className="product-card__badge" style={{ position: "static", display: "inline-block", marginBottom: "1rem" }}>
                {product.badge}
              </span>
            )}

            <h1 className="pdp-info__name">{product.name}</h1>
            <p className="pdp-info__tagline">{product.tagline}</p>

            <div className="pdp-info__price-row">
              <span className="pdp-info__price">{formatPrice(product.price)}</span>
              {product.comparePrice && (
                <span className="pdp-info__compare">{formatPrice(product.comparePrice)}</span>
              )}
            </div>

            <p className="pdp-info__delivery">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <rect x="1" y="4" width="9" height="7" rx="1" />
                <path d="M10 6h2l1 2v3h-3V6z" />
                <circle cx="3.5" cy="12" r="1" />
                <circle cx="10.5" cy="12" r="1" />
              </svg>
              Delivery: {product.deliveryTime}
            </p>

            <div className="divider" />

            {/* Color */}
            <p className="pdp-selector-label">
              Colour <span>— {product.variants[selectedColor].color}</span>
            </p>
            <div className="pdp-swatches" role="radiogroup" aria-label="Select colour">
              {product.variants.map((v, i) => (
                <button
                  key={v.color}
                  className={`pdp-swatch${selectedColor === i ? " pdp-swatch--active" : ""}`}
                  style={{ background: v.colorHex }}
                  onClick={() => setSelectedColor(i)}
                  aria-label={v.color}
                  aria-pressed={selectedColor === i}
                  title={v.color}
                />
              ))}
            </div>

            {/* Size */}
            <p className="pdp-selector-label" style={sizeError ? { color: "#c0392b" } : {}}>
              Size {sizeError && <span style={{ color: "#c0392b" }}>— Please select a size</span>}
            </p>
            <div className="pdp-sizes" role="radiogroup" aria-label="Select size">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`pdp-size-btn${selectedSize === size ? " pdp-size-btn--active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                  aria-label={`Size ${size}`}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="pdp-cta-row">
              <button className="btn btn--primary" id="pdp-add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <Link href="/checkout" className="btn btn--outline-dark" id="pdp-buy-now">
                Buy Now
              </Link>
            </div>

            {/* Configurator upsell */}
            {product.hasConfigurator && (
              <div className="pdp-configurator-card">
                <div className="pdp-configurator-card__icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                    <path d="M11 2a9 9 0 100 18A9 9 0 0011 2z" />
                    <path d="M11 7v4l3 3" />
                  </svg>
                </div>
                <div>
                  <h3 className="pdp-configurator-card__title">Customise with 3D Configurator</h3>
                  <p className="pdp-configurator-card__text">
                    Choose your exact fabric, lapel shape, lining, buttons and more — fully visualised in 3D before you order.
                  </p>
                  <a
                    href={product.configuratorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdp-configurator-card__link"
                    id="pdp-configurator-link"
                  >
                    Open 3D Configurator
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M2 6h8M6 2l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* Accordion */}
            <div className="pdp-accordion">
              <Accordion title="Product Details">
                <ul>
                  {product.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </Accordion>
              {product.fabricInfo && (
                <Accordion title="Fabric & Material">
                  <p>{product.fabricInfo}</p>
                </Accordion>
              )}
              {product.careInstructions && (
                <Accordion title="Care Instructions">
                  <ul>
                    {product.careInstructions.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </Accordion>
              )}
              <Accordion title="Delivery & Returns">
                <p>
                  Made-to-order items: {product.deliveryTime}. Standard items ship within 5–7 business days.
                  Returns accepted within 14 days of delivery on unaltered items. Made-to-measure garments are non-refundable but we will always work to get the fit right.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="section" style={{ background: "var(--color-off-white)", paddingTop: "3rem" }} aria-label="You may also like">
          <div className="container">
            <p className="section-label">You may also like</p>
            <h2 className="section-title" style={{ marginBottom: "2rem" }}>Complete the look</h2>
            <div className="related-grid">
              {related.map((rp) => (
                <Link key={rp.id} href={`/shop/${rp.slug}`} className="product-card" id={`related-${rp.id}`}>
                  <div className="product-card__img-wrap">
                    <Image
                      src={rp.variants[0].images[0]}
                      alt={rp.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    {rp.hasConfigurator && (
                      <span className="product-card__configurator-tag">
                        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="5" cy="5" r="4" /><path d="M3 5h4M5 3v4" /></svg>
                        3D
                      </span>
                    )}
                  </div>
                  <div className="product-card__body">
                    <h3 className="product-card__name">{rp.name}</h3>
                    <p className="product-card__price">{formatPrice(rp.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Toast visible={toast} />
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORIES, formatPrice, type ProductCategory } from "@/data/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filtered = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="shop-hero" aria-label="MUERA Shop">
        <div className="container">
          <p className="section-label" style={{ color: "var(--color-gold)" }}>The Collection</p>
          <h1 className="section-title section-title--light" style={{ maxWidth: 560 }}>
            Shop
          </h1>
          <div className="divider" style={{ background: "rgba(245,243,239,0.2)" }} />
          <p style={{ color: "rgba(245,243,239,0.6)", maxWidth: 480, fontSize: "1.0625rem" }}>
            Premium made-to-measure suits and accessories. Select any suit to configure with our 3D tool.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section" style={{ background: "var(--color-off-white)", paddingTop: "3rem" }} aria-label="Product catalogue">
        <div className="container">
          {/* Filter bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div className="category-filter" role="group" aria-label="Filter by category">
              {CATEGORIES.map(({ value, label }) => (
                <button
                  key={value}
                  className={`category-filter__btn${activeCategory === value ? " category-filter__btn--active" : ""}`}
                  onClick={() => setActiveCategory(value)}
                  id={`filter-${value}`}
                  aria-pressed={activeCategory === value}
                >
                  {label}
                </button>
              ))}
            </div>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-mid-gray)" }}>
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
          </div>

          {/* Grid */}
          <div className="product-grid" aria-label="Products">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="product-card"
                id={`product-card-${product.id}`}
                aria-label={`${product.name} — ${formatPrice(product.price)}`}
              >
                <div className="product-card__img-wrap">
                  <Image
                    src={product.variants[0].images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 540px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {product.badge && (
                    <span className="product-card__badge">{product.badge}</span>
                  )}
                  {product.hasConfigurator && (
                    <span className="product-card__configurator-tag">
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                        <circle cx="5" cy="5" r="4" />
                        <path d="M3 5h4M5 3v4" />
                      </svg>
                      3D Configurator
                    </span>
                  )}
                </div>
                <div className="product-card__body">
                  <p className="product-card__cat">{product.category}</p>
                  <h2 className="product-card__name">{product.name}</h2>
                  <p className="product-card__tagline">{product.tagline}</p>
                  <div className="product-card__price-row">
                    <span className="product-card__price">{formatPrice(product.price)}</span>
                    {product.comparePrice && (
                      <span className="product-card__compare">{formatPrice(product.comparePrice)}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator Banner */}
      <section className="cta-banner" aria-label="3D Configurator">
        <div className="container">
          <p className="section-label" style={{ color: "var(--color-gold)", textAlign: "center" }}>Made-to-Measure</p>
          <h2 className="cta-banner__title">Want something truly yours?</h2>
          <p className="cta-banner__text">
            Skip the catalogue. Use our 3D configurator to design your suit from scratch.
          </p>
          <Link href="/configurator" className="btn btn--primary-light" id="shop-config-cta">
            Open Configurator
          </Link>
        </div>
      </section>
    </>
  );
}

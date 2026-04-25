"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Configurator", href: "/configurator" },
];

function CartIcon({ count }: { count: number }) {
  return (
    <Link href="/cart" className="nav__cart" aria-label={`Cart — ${count} item${count !== 1 ? "s" : ""}`} id="nav-cart">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M2 2h2l2.4 10.4A1 1 0 007.4 14h7.2a1 1 0 001-.76L17 6H5" />
        <circle cx="8" cy="17" r="1" />
        <circle cx="14" cy="17" r="1" />
      </svg>
      {count > 0 && <span className="nav__cart-badge">{count > 9 ? "9+" : count}</span>}
    </Link>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  const isLightPage = pathname !== "/" && pathname !== "/configurator";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navClass = ["nav", isLightPage || scrolled ? "nav--light" : ""].filter(Boolean).join(" ");

  return (
    <header>
      <nav className={navClass} aria-label="Primary navigation">
        <Link href="/" className="nav__logo" aria-label="MUERA — Home">
          MUERA
        </Link>

        <ul className={`nav__links${mobileOpen ? " nav__links--open" : ""}`} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="nav__link"
                aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="nav__actions">
            {
              !mobileOpen && <CartIcon count={totalItems} />
            }

            <Link href="/configurator" className="btn btn--nav-cta" id="nav-cta">
              Create Your Suit
            </Link>
          </li>
        </ul>

        <div className="nav__right-mobile">
          <CartIcon count={totalItems} />
          <button
            className="nav__mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            id="mobile-nav-toggle"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l14 14M18 4L4 18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6h16M3 11h16M3 16h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

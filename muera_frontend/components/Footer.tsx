import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Configurator", href: "/configurator" },
  { label: "Privacy", href: "/privacy" },
  { label: "Style Guide", href: "/style-guide" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Link href="/" className="footer__logo" aria-label="MUERA — Home">
            MUERA
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="footer__links" role="list">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="footer__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="footer__copy">
            crafted in Switzerland &nbsp;·&nbsp; © {new Date().getFullYear()} MUERA
          </p>
        </div>
      </div>
    </footer>
  );
}

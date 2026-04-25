import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MUERA — Made-to-Measure Suits by Mueller Bespoke",
    template: "%s | MUERA",
  },
  description:
    "MUERA by Mueller Bespoke offers premium made-to-measure suits configured online and crafted with precision. Perfect fit without complexity.",
  keywords: [
    "made-to-measure suits",
    "bespoke suits",
    "custom suits",
    "Mueller Bespoke",
    "MUERA",
    "luxury menswear",
    "Switzerland",
  ],
  openGraph: {
    title: "MUERA — Made-to-Measure Suits by Mueller Bespoke",
    description:
      "Perfect fit. Without complexity. Premium made-to-measure suits, configured online and crafted with precision.",
    url: "https://muera.ch",
    siteName: "MUERA",
    locale: "en_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUERA — Made-to-Measure Suits",
    description: "Perfect fit. Without complexity.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://muera.ch"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

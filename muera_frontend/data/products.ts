export type ProductCategory = "suits" | "shirts" | "outerwear" | "accessories";

export interface ProductVariant {
  color: string;
  colorHex: string;
  images: string[];
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  comparePrice?: number;
  category: ProductCategory;
  badge?: string; // e.g. "New", "Bestseller", "Limited"
  hasConfigurator: boolean; // whether "Customize with 3D" option is available
  configuratorUrl?: string;
  description: string;
  details: string[];
  fabricInfo?: string;
  sizes: string[];
  variants: ProductVariant[];
  careInstructions?: string[];
  deliveryTime: string;
  sku: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "the-muera-classic",
    name: "The Muera Classic",
    tagline: "Our signature two-piece. Made to order.",
    price: 1490,
    comparePrice: 1890,
    category: "suits",
    badge: "Bestseller",
    hasConfigurator: true,
    configuratorUrl: "https://mirrorsize.com",
    description:
      "The Muera Classic is our signature made-to-measure two-piece suit. Crafted from a 120s Super Wool in a deep navy, it is the ideal suit for those who value precision without complexity. Configure your fabric, lapel, lining and fit entirely online.",
    details: [
      "120s Super Wool — Italian origin",
      "Full canvas construction",
      "Two-button, notch lapel",
      "Single back vent",
      "Bemberg silk lining",
      "Ticket pocket available on request",
    ],
    fabricInfo: "100% Super 120s Merino Wool — woven in Biella, Italy",
    sizes: ["44", "46", "48", "50", "52", "54", "56"],
    variants: [
      { color: "Navy", colorHex: "#1A2230", images: ["/products/navy-suit.png"], stock: 12 },
      { color: "Midnight Blue", colorHex: "#0D1B2A", images: ["/products/navy-suit.png"], stock: 8 },
    ],
    careInstructions: ["Dry clean only", "Store on a wide-shouldered hanger", "Steam, do not iron directly"],
    deliveryTime: "4–6 weeks",
    sku: "MR-CS-001",
  },
  {
    id: "2",
    slug: "the-charcoal-three-piece",
    name: "The Charcoal Three-Piece",
    tagline: "Authority with restraint.",
    price: 1790,
    category: "suits",
    badge: "New",
    hasConfigurator: true,
    configuratorUrl: "https://mirrorsize.com",
    description:
      "A charcoal herringbone three-piece suit that communicates authority without aggression. Waistcoat cut slim, trousers tailored straight. The herringbone weave adds texture without loudness — this is power dressing, redefined.",
    details: [
      "130s Super Wool Herringbone",
      "Three-piece: jacket, waistcoat, trousers",
      "Peak lapel option available",
      "Double or single vent",
      "Custom monogram inside breast pocket",
      "Matching waistcoat with welt pockets",
    ],
    fabricInfo: "100% Super 130s Wool — Dormeuil, France",
    sizes: ["44", "46", "48", "50", "52", "54", "56"],
    variants: [
      { color: "Charcoal", colorHex: "#36454F", images: ["/products/charcoal-suit.png"], stock: 6 },
      { color: "Dark Grey", colorHex: "#4A4A4A", images: ["/products/charcoal-suit.png"], stock: 10 },
    ],
    careInstructions: ["Dry clean only", "Steam after each wear", "Rotate between wears"],
    deliveryTime: "5–7 weeks",
    sku: "MR-TP-002",
  },
  {
    id: "3",
    slug: "the-black-tuxedo",
    name: "The Black Tuxedo",
    tagline: "For evenings that demand more.",
    price: 2190,
    category: "suits",
    badge: "Limited",
    hasConfigurator: true,
    configuratorUrl: "https://mirrorsize.com",
    description:
      "A midnight black tuxedo crafted from a wool-silk blend with grosgrain-facing peak lapels. Every detail — from the trouser braid to the silk lining — is considered. Available in standard or slim fit, fully configurable online.",
    details: [
      "Wool-silk blend — 80/20",
      "Grosgrain or satin lapel facing",
      "Peak or shawl lapel",
      "Single-button closure",
      "Trouser braid to match lapel",
      "Ivory silk jacquard lining",
    ],
    fabricInfo: "80% Wool, 20% Silk — Scabal, Belgium",
    sizes: ["44", "46", "48", "50", "52", "54"],
    variants: [
      { color: "Midnight Black", colorHex: "#0B0B0B", images: ["/products/tuxedo.png"], stock: 4 },
    ],
    careInstructions: ["Dry clean only", "Store in provided garment bag", "Professional pressing recommended"],
    deliveryTime: "6–8 weeks",
    sku: "MR-TX-003",
  },
  {
    id: "4",
    slug: "egyptian-cotton-dress-shirt",
    name: "Egyptian Cotton Dress Shirt",
    tagline: "The foundation of every great suit.",
    price: 195,
    category: "shirts",
    hasConfigurator: false,
    description:
      "A two-ply Egyptian cotton dress shirt with a soft-fold collar, single-button barrel cuffs and a clean placket. It does not compete — it completes. Made in Portugal, available in four collar shapes.",
    details: [
      "2-ply Egyptian cotton — 140 thread count",
      "Soft-fold or spread collar options",
      "Single or double cuff",
      "Mother-of-pearl buttons",
      "Curved hem for tucking",
      "Made in Portugal",
    ],
    fabricInfo: "100% Egyptian Cotton — 2-ply, 140TC",
    sizes: ["S", "M", "L", "XL", "XXL", "37", "38", "39", "40", "41", "42", "43"],
    variants: [
      { color: "White", colorHex: "#FAFAFA", images: ["/products/dress-shirt.png"], stock: 30 },
      { color: "Cream", colorHex: "#F5F0E8", images: ["/products/dress-shirt.png"], stock: 24 },
      { color: "Light Blue", colorHex: "#C8D8E8", images: ["/products/dress-shirt.png"], stock: 18 },
    ],
    careInstructions: ["Machine wash 30°C", "Iron whilst damp", "Do not bleach"],
    deliveryTime: "5–7 business days",
    sku: "MR-SH-004",
  },
  {
    id: "5",
    slug: "the-camel-overcoat",
    name: "The Camel Overcoat",
    tagline: "Warmth without bulk.",
    price: 1290,
    category: "outerwear",
    badge: "New",
    hasConfigurator: false,
    description:
      "A double-breasted camel wool overcoat that drapes without weighing. Cut generously over the shoulders to layer effortlessly over your suit. A coat for those who understand that warmth does not require bulk.",
    details: [
      "Pure Camel Hair and Cashmere blend",
      "Double-breasted, six-button",
      "Notch lapel",
      "Belted back optional",
      "Full silk lining",
      "Handmade in Italy",
    ],
    fabricInfo: "70% Camel Hair, 30% Cashmere — Loro Piana, Italy",
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: [
      { color: "Camel", colorHex: "#C19A6B", images: ["/products/overcoat.png"], stock: 8 },
      { color: "Oat", colorHex: "#D4C5A9", images: ["/products/overcoat.png"], stock: 5 },
    ],
    careInstructions: ["Dry clean only", "Air after wearing", "Store with cedar"],
    deliveryTime: "5–7 business days",
    sku: "MR-OC-005",
  },
  {
    id: "6",
    slug: "accessories-edit",
    name: "The Accessories Edit",
    tagline: "Details that define the whole.",
    price: 290,
    category: "accessories",
    hasConfigurator: false,
    description:
      "A curated set of finishing accessories: two silk pocket squares (navy and ivory), a charcoal Merino wool tie, and a slim card wallet in full-grain leather. Presented in a MUERA gift box — a complete first suit set.",
    details: [
      "Two silk pocket squares — navy & ivory",
      "Merino wool tie — charcoal grey",
      "Full-grain leather card wallet — tan",
      "Presented in branded MUERA gift box",
      "Silk pocket squares hand-rolled edge",
    ],
    fabricInfo: "100% Silk (pocket squares) · 100% Merino Wool (tie) · Full-grain leather",
    sizes: ["One Size"],
    variants: [
      { color: "Navy / Ivory / Charcoal", colorHex: "#1A2230", images: ["/products/accessories.png"], stock: 20 },
    ],
    careInstructions: ["Pocket squares: hand wash cold", "Tie: dry clean only"],
    deliveryTime: "3–5 business days",
    sku: "MR-AC-006",
  },
];

export const CATEGORIES: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "suits", label: "Suits" },
  { value: "shirts", label: "Shirts" },
  { value: "outerwear", label: "Outerwear" },
  { value: "accessories", label: "Accessories" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  return PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category)
    .concat(PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF", minimumFractionDigits: 0 }).format(price);
}

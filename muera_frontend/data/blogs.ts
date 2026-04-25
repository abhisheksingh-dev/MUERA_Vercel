export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const BLOGS: BlogPost[] = [
  {
    id: "1",
    slug: "the-art-of-bespoke",
    title: "The Art of Bespoke: Why Fit Matters More Than Fabric",
    excerpt: "Explore the philosophy behind our made-to-measure process and why a perfect fit is the ultimate luxury.",
    content: `
      <p>When discussing luxury suiting, the conversation often gravitates towards fabric. While we source only the finest materials from Italy and the UK, we believe the true hallmark of a premium suit is its fit.</p>
      
      <h2>The Foundation of Confidence</h2>
      <p>A perfectly tailored suit does more than look good—it changes how you carry yourself. It removes the minor frictions of daily life, allowing you to focus entirely on your work and interactions.</p>
      
      <p>Our digital measurement process eliminates the guesswork, creating a 3D model of your body to ensure every seam aligns with your natural posture. This is the essence of modern bespoke: precision driven by technology, finished by master craftsmen.</p>
    `,
    author: "Mueller Bespoke",
    date: "2026-04-12",
    category: "Craftsmanship",
    image: "/blog-1.png",
    readTime: "4 min read",
  },
  {
    id: "2",
    slug: "understanding-wool-grades",
    title: "Understanding Wool Grades: From Super 100s to 150s",
    excerpt: "A comprehensive guide to decoding wool terminology and choosing the right fabric for your next suit.",
    content: `
      <p>The "Super" numbering system in wool can be confusing. Does a higher number always mean a better suit? Not necessarily.</p>
      
      <h2>What Do the Numbers Mean?</h2>
      <p>The numbers refer to the fineness of the individual wool fibers. A Super 100s wool has fibers of a certain maximum thickness, while Super 150s fibers are even finer.</p>
      
      <ul>
        <li><strong>Super 100s - 120s:</strong> The sweet spot for everyday wear. Durable, wrinkle-resistant, and comfortable.</li>
        <li><strong>Super 130s - 150s:</strong> Exceptionally soft and luxurious, ideal for special occasions or low-friction office environments.</li>
      </ul>
      
      <p>At MUERA, we curate our fabrics to balance luxury with longevity, ensuring your investment stands the test of time.</p>
    `,
    author: "Mueller Bespoke",
    date: "2026-03-28",
    category: "Materials",
    image: "/hero-suit.png",
    readTime: "6 min read",
  },
  {
    id: "3",
    slug: "caring-for-your-suit",
    title: "How to Care for Your Made-to-Measure Suit",
    excerpt: "Extend the life of your MUERA suit with these essential care and maintenance tips.",
    content: `
      <p>A bespoke suit is an investment. With proper care, it can last for decades.</p>
      
      <h2>The Golden Rules of Suit Care</h2>
      <ol>
        <li><strong>Rotate Your Suits:</strong> Never wear the same suit two days in a row. Wool needs time to rest and recover its shape.</li>
        <li><strong>Use the Right Hanger:</strong> Always use a wide-shouldered wooden hanger to support the jacket's structure.</li>
        <li><strong>Brush, Don't Dry Clean:</strong> Dry cleaning exposes the fabric to harsh chemicals. Instead, brush your suit after each wear to remove dust and dirt. Only dry clean once or twice a season.</li>
      </ol>
    `,
    author: "Mueller Bespoke",
    date: "2026-03-10",
    category: "Maintenance",
    image: "/hero-suit.png",
    readTime: "3 min read",
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS.find((b) => b.slug === slug);
}

export function getRecentBlogs(count = 3): BlogPost[] {
  return [...BLOGS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}

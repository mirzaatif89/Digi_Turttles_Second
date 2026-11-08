import p1 from "@/assets/portfolio/project-1.webp";
import p2 from "@/assets/portfolio/project-2.webp";
import p3 from "@/assets/portfolio/project-3.webp";
import p4 from "@/assets/portfolio/project-4.webp";
import p5 from "@/assets/portfolio/project-5.webp";
import p6 from "@/assets/portfolio/project-6.webp";
import p7 from "@/assets/portfolio/project-7.webp";
import p8 from "@/assets/portfolio/project-8.webp";
import p10 from "@/assets/portfolio/project-10.webp";
import p11 from "@/assets/portfolio/project-11.webp";
import p12 from "@/assets/portfolio/project-12.webp";

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Web Development",
  "Branding",
  "Digital Marketing",
  "Social Media",
  "Creative Design",
] as const;

export type PortfolioCategory = Exclude<(typeof PORTFOLIO_CATEGORIES)[number], "All">;

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  tools: string[];
};

// Sample showcase projects — replace with your real case studies.
export const PROJECTS: Project[] = [
  {
    slug: "aurora-skin-ecommerce",
    title: "Aurora Skin E-commerce Experience",
    client: "Aurora Skin",
    category: "Web Development",
    year: "2026",
    image: p1,
    summary: "A soft, luxurious online store designed to make premium skincare feel personal.",
    challenge:
      "The brand sold mostly through Instagram DMs and needed a store that matched its premium positioning while staying fast on mobile.",
    approach:
      "We designed a calm, editorial shopping experience with rich product storytelling, a streamlined checkout and a lightweight front-end tuned for mobile speed.",
    deliverables: ["UX & UI design", "E-commerce build", "Product photography direction", "SEO setup"],
    tools: ["Figma", "React", "Node.js", "Shopify"],
  },
  {
    slug: "nexa-pay-brand-identity",
    title: "Nexa Pay Brand Identity",
    client: "Nexa Pay",
    category: "Branding",
    year: "2026",
    image: p2,
    summary: "A confident fintech identity built on trust, clarity and forward motion.",
    challenge:
      "A new payments startup needed to look established and trustworthy from day one in a crowded market.",
    approach:
      "We built a geometric leaf mark symbolizing growth, a deep navy and teal palette, and a complete stationery and app-icon system.",
    deliverables: ["Brand strategy", "Logo system", "Stationery", "Brand guidelines"],
    tools: ["Illustrator", "Figma", "InDesign"],
  },
  {
    slug: "brewhaus-cafe-social",
    title: "Brewhaus Café Social Campaign",
    client: "Brewhaus Café",
    category: "Social Media",
    year: "2026",
    image: p3,
    summary: "A warm, cohesive Instagram presence that turns coffee moments into community.",
    challenge:
      "The café had great coffee but an inconsistent feed that didn't reflect the experience inside.",
    approach:
      "We planned a monthly content calendar, shot a library of latte-art and lifestyle content, and introduced a consistent warm visual grade.",
    deliverables: ["Content strategy", "Photography", "Reels", "Community management"],
    tools: ["Lightroom", "CapCut", "Meta Business Suite"],
  },
  {
    slug: "tranquil-stays-booking",
    title: "Tranquil Stays Booking Platform",
    client: "Tranquil Stays",
    category: "Web Development",
    year: "2025",
    image: p4,
    summary: "An elegant booking website for boutique stays with a frictionless reservation flow.",
    challenge:
      "Guests were dropping off during a long, confusing booking process on the old website.",
    approach:
      "We redesigned the journey around a single search bar, beautiful room galleries and a three-step booking flow.",
    deliverables: ["UX research", "Web design", "Booking integration", "Performance optimization"],
    tools: ["Figma", "React", "Node.js"],
  },
  {
    slug: "zenfit-studio-social-ads",
    title: "Zenfit Studio Social Ads",
    client: "Zenfit Studio",
    category: "Social Media",
    year: "2026",
    image: p5,
    summary: "High-energy vertical ad creatives for a fitness studio launch.",
    challenge:
      "A new studio needed to stand out in a saturated fitness market and fill its first classes.",
    approach:
      "We produced bold orange-and-black creatives, short-form videos and story ads tailored for each audience segment.",
    deliverables: ["Creative direction", "Ad creatives", "Short-form video", "Campaign setup"],
    tools: ["Photoshop", "Premiere Pro", "Meta Ads"],
  },
  {
    slug: "orbitly-saas-dashboard",
    title: "Orbitly SaaS Analytics Dashboard",
    client: "Orbitly",
    category: "Web Development",
    year: "2025",
    image: p6,
    summary: "A clear, data-rich dashboard that makes complex analytics easy to act on.",
    challenge: "Users found the old dashboard overwhelming and rarely explored beyond the first screen.",
    approach:
      "We restructured information hierarchy, designed a dark UI with focused cyan highlights and built reusable chart components.",
    deliverables: ["Product design", "Design system", "Front-end development"],
    tools: ["Figma", "React", "TypeScript"],
  },
  {
    slug: "spice-route-restaurant-branding",
    title: "Spice Route Restaurant Branding",
    client: "Spice Route",
    category: "Branding",
    year: "2025",
    image: p7,
    summary: "A rich terracotta-and-gold identity that brings heritage flavors to modern dining.",
    challenge: "A family restaurant expanding to new branches needed a brand that felt premium yet rooted.",
    approach:
      "We crafted a lotus-inspired emblem, warm earthy palette and a full packaging, menu and signage system.",
    deliverables: ["Identity design", "Packaging", "Menu design", "Signage"],
    tools: ["Illustrator", "Photoshop", "Dimension"],
  },
  {
    slug: "vertex-realty-lead-generation",
    title: "Vertex Realty Lead Generation",
    client: "Vertex Realty",
    category: "Digital Marketing",
    year: "2026",
    image: p8,
    summary: "Landing pages and campaigns built to capture qualified property buyers.",
    challenge: "The agency was spending on ads but leads were unqualified and hard to follow up.",
    approach:
      "We built focused landing pages, a qualification form, CRM automation and retargeting campaigns across search and social.",
    deliverables: ["Landing pages", "Ad campaigns", "CRM automation", "Reporting dashboard"],
    tools: ["Google Ads", "Meta Ads", "HubSpot"],
  },
  {
    slug: "pulse-audio-product-creatives",
    title: "Pulse Audio Product Creatives",
    client: "Pulse Audio",
    category: "Creative Design",
    year: "2026",
    image: p10,
    summary: "Vibrant, splash-driven product visuals for a headphone launch.",
    challenge: "The product needed hero visuals that felt as energetic as its sound.",
    approach:
      "We designed a bold gradient-and-splash visual language used across launch posts, banners and packaging inserts.",
    deliverables: ["Key visuals", "Social creatives", "Launch kit"],
    tools: ["Photoshop", "Blender", "After Effects"],
  },
  {
    slug: "voltra-motors-launch-campaign",
    title: "Voltra Motors Launch Campaign",
    client: "Voltra Motors",
    category: "Digital Marketing",
    year: "2025",
    image: p11,
    summary: "A cinematic, multi-channel launch for a new electric sedan.",
    challenge: "Introduce a new EV to a skeptical audience and drive test-drive bookings.",
    approach:
      "We created a cinematic campaign across digital billboards, YouTube pre-roll and social, all pointing to a test-drive booking page.",
    deliverables: ["Campaign concept", "Video ads", "Out-of-home creatives", "Booking funnel"],
    tools: ["Premiere Pro", "Google Ads", "YouTube Ads"],
  },
  {
    slug: "form-and-field-poster-series",
    title: "Form & Field Poster Series",
    client: "Form & Field Studio",
    category: "Creative Design",
    year: "2026",
    image: p12,
    summary: "A bold geometric poster series for an art and design exhibition.",
    challenge: "Create a visual series that feels unified yet lets every poster stand on its own.",
    approach:
      "We developed a modular shape system in teal, coral and black, printed as a limited-edition series.",
    deliverables: ["Poster series", "Exhibition graphics", "Social teasers"],
    tools: ["Illustrator", "InDesign"],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

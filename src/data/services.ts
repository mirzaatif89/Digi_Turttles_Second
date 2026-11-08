import {
  Bot,
  Clapperboard,
  CodeXml,
  Magnet,
  Megaphone,
  PenTool,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Grow your presence online.",
    description:
      "Full-funnel strategy, campaigns and performance marketing that turn attention into measurable business growth.",
    icon: Megaphone,
    features: ["Growth strategy", "Paid campaigns", "Funnels & retargeting", "Monthly reporting"],
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Be found when it matters.",
    description:
      "On-page, off-page and technical SEO that improves organic visibility and long-term discoverability.",
    icon: Search,
    features: ["Technical audits", "Keyword strategy", "Content optimization", "Local SEO"],
  },
  {
    slug: "branding-identity",
    title: "Branding & Identity",
    short: "Build a powerful brand identity.",
    description:
      "Positioning, visual identity and brand direction designed to make you memorable and trusted.",
    icon: PenTool,
    features: ["Brand strategy", "Logo & visual system", "Brand guidelines", "Packaging & print"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Fast, beautiful, conversion-ready.",
    description:
      "Modern, responsive websites and web apps engineered for speed, SEO and conversions.",
    icon: CodeXml,
    features: ["UI/UX design", "React & Node.js builds", "E-commerce", "Care & maintenance"],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    short: "Get qualified leads for your business.",
    description:
      "Targeted digital systems that find, nurture and deliver qualified business opportunities.",
    icon: Magnet,
    features: ["Landing pages", "Lead magnets", "CRM setup", "Email nurturing"],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    short: "Consistent, scroll-stopping content.",
    description:
      "Planning, creating and managing content that builds community and keeps your brand top of mind.",
    icon: Share2,
    features: ["Content calendars", "Community management", "Creative design", "Insights"],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    short: "Automate & scale your business.",
    description:
      "AI-powered workflows that remove repetitive work across sales, support and operations.",
    icon: Bot,
    features: ["Workflow automation", "AI chat assistants", "CRM & tool integrations", "Training"],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    short: "Stories that sell.",
    description:
      "Copy, photography, short-form video and creatives produced to perform on every platform.",
    icon: Clapperboard,
    features: ["Short-form video", "Photography", "Copywriting", "Ad creatives"],
  },
];

export const PROCESS = [
  { step: "01", title: "Discover", text: "We learn your goals, audience and the problem worth solving." },
  { step: "02", title: "Strategize", text: "A clear plan with priorities, channels and success measures." },
  { step: "03", title: "Build", text: "Design, development and content executed by specialists." },
  { step: "04", title: "Launch", text: "We ship, test and optimize in real conditions." },
  { step: "05", title: "Grow", text: "Ongoing improvement, reporting and systems that scale." },
];

import b1 from "@/assets/blog/post-1.webp";
import b2 from "@/assets/blog/post-2.webp";
import b3 from "@/assets/blog/post-3.webp";
import b4 from "@/assets/blog/post-4.webp";
import b5 from "@/assets/blog/post-5.webp";
import b6 from "@/assets/blog/post-6.webp";
import b7 from "@/assets/blog/post-7.webp";
import b8 from "@/assets/blog/post-8.webp";
import b9 from "@/assets/blog/post-9.webp";
import b10 from "@/assets/blog/post-10.webp";
import b11 from "@/assets/blog/post-11.webp";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: string;
  author: string;
  image: string;
  body: { heading?: string; text: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "top-10-ai-tools-for-productivity",
    title: "Top 10 AI Tools for Productivity in 2026",
    excerpt: "The AI tools our team actually uses every day to write, design, plan and automate faster.",
    category: "AI",
    date: "2026-11-02",
    readTime: "6 min read",
    author: "Hamza Siddiqui",
    image: b1,
    body: [
      { text: "AI is no longer a futuristic extra — it is a daily productivity layer. The trick is not using more tools, but using the right few really well." },
      { heading: "Start with your bottlenecks", text: "List the tasks that drain your time each week: writing first drafts, summarizing meetings, resizing creatives, answering repeated questions. Each of these has an AI tool that can cut the effort in half." },
      { heading: "Our everyday stack", text: "A writing assistant for drafts and outlines, a meeting note-taker, an image generator for concept boards, an automation platform to connect apps, and a chat assistant trained on your own documents. Together they free hours every week." },
      { heading: "Keep the human in the loop", text: "AI is a brilliant first draft machine. Your judgment, taste and knowledge of the client are what turn that draft into great work. Review, edit and make it yours." },
    ],
  },
  {
    slug: "digital-marketing-trends-2026",
    title: "Digital Marketing Trends Shaping 2026",
    excerpt: "From AI search to creator-led content — the shifts every brand should plan for this year.",
    category: "Marketing",
    date: "2026-10-27",
    readTime: "7 min read",
    author: "Sara Khan",
    image: b2,
    body: [
      { text: "Marketing is moving faster than ever. Here are the trends we see changing results for our clients right now." },
      { heading: "Search is becoming conversational", text: "People increasingly ask AI assistants instead of typing keywords. Clear, helpful, well-structured content wins in both traditional and AI-powered search." },
      { heading: "Creators over ads", text: "Audiences trust people more than banners. Partnering with niche creators and building your own founder-led content consistently outperforms polished ads." },
      { heading: "First-party data matters", text: "With privacy changes, the brands that own their email lists, communities and CRM data will have the strongest marketing engines." },
    ],
  },
  {
    slug: "build-a-freelance-career-from-zero",
    title: "How to Build a Freelance Career from Zero",
    excerpt: "A practical roadmap from your first skill to your first paying client — the turtle way.",
    category: "Career",
    date: "2026-10-20",
    readTime: "8 min read",
    author: "Usman Ahmed",
    image: b3,
    body: [
      { text: "Every freelancer starts as a little turtle: no portfolio, no clients, lots of doubts. The ones who succeed simply keep moving." },
      { heading: "Pick one skill and go deep", text: "Choose a skill with clear market demand — design, video editing, SEO, web development — and commit to it for three months before adding anything else." },
      { heading: "Build proof, not just certificates", text: "Create three to five portfolio pieces that solve realistic problems. Redesign a local business's social posts or build a demo website. Proof beats promises." },
      { heading: "Land the first client", text: "Start with your network, then platforms. Price fairly, over-deliver and ask for a testimonial. Your first five clients are your real course." },
    ],
  },
  {
    slug: "seo-in-the-age-of-ai-search",
    title: "SEO in the Age of AI Search",
    excerpt: "What still works, what has changed and how to keep your business discoverable.",
    category: "SEO",
    date: "2026-10-12",
    readTime: "6 min read",
    author: "Bilal Hussain",
    image: b4,
    body: [
      { text: "AI search hasn't killed SEO — it has raised the bar. Thin content is out; genuinely helpful expertise is in." },
      { heading: "Technical foundations still win", text: "Fast pages, clean structure, mobile-friendly design and proper metadata remain the base every search system relies on." },
      { heading: "Answer real questions", text: "Build pages around the questions your customers actually ask. Clear headings, FAQs and specific examples help both people and AI understand you." },
      { heading: "Earn trust signals", text: "Reviews, mentions, author expertise and consistent business information all tell search engines you are a reliable source." },
    ],
  },
  {
    slug: "logo-design-principles-for-beginners",
    title: "Logo Design Principles Every Beginner Should Know",
    excerpt: "Simplicity, memorability and meaning — the fundamentals behind logos that last.",
    category: "Design",
    date: "2026-10-05",
    readTime: "5 min read",
    author: "Mahnoor Tariq",
    image: b5,
    body: [
      { text: "A great logo isn't decoration. It is a compact story about who a brand is." },
      { heading: "Simple scales", text: "If your logo doesn't work at favicon size or in one color, it isn't finished. Strip it down until only the essential idea remains." },
      { heading: "Meaning creates memory", text: "Our own turtle mark combines a circuit-patterned head with the letters D and G — technology plus the patient, persistent turtle mindset." },
      { heading: "Test in the real world", text: "Place your logo on signage, social avatars, merchandise and dark backgrounds before you call it done." },
    ],
  },
  {
    slug: "budgeting-basics-for-freelancers",
    title: "Budgeting Basics for Freelancers and Small Businesses",
    excerpt: "Irregular income doesn't have to mean financial stress. A simple system that works.",
    category: "Finance",
    date: "2026-09-28",
    readTime: "6 min read",
    author: "Omar Farooq",
    image: b6,
    body: [
      { text: "Independence isn't only about earning — it is about managing what you earn." },
      { heading: "Pay yourself a salary", text: "Move all income into a business account, then pay yourself a fixed monthly amount. Good months fund the slow ones." },
      { heading: "Separate taxes and savings", text: "Set aside a fixed percentage of every payment for taxes and emergencies the day it arrives." },
      { heading: "Review monthly", text: "Thirty minutes a month reviewing income, expenses and upcoming bills keeps surprises away and decisions clear." },
    ],
  },
  {
    slug: "short-form-video-editing-tips",
    title: "Short-Form Video Editing That Keeps People Watching",
    excerpt: "Hooks, pacing and captions — editing techniques behind high-retention reels.",
    category: "Video",
    date: "2026-09-21",
    readTime: "5 min read",
    author: "Fatima Noor",
    image: b7,
    body: [
      { text: "In short-form video, the first two seconds decide everything." },
      { heading: "Lead with the hook", text: "Open on the most interesting moment, a bold statement or a visual surprise. Context can come later." },
      { heading: "Cut the air", text: "Remove pauses, breaths and filler. Fast but clear pacing respects the viewer's time." },
      { heading: "Captions are not optional", text: "Most people watch muted. Bold, well-timed captions dramatically improve retention and accessibility." },
    ],
  },
  {
    slug: "building-a-personal-brand-on-social-media",
    title: "Building a Personal Brand on Social Media",
    excerpt: "How professionals and founders can grow trust and opportunities by showing their work.",
    category: "Social Media",
    date: "2026-09-14",
    readTime: "6 min read",
    author: "Ayesha Fatima",
    image: b8,
    body: [
      { text: "Your personal brand is what people say about you when you're not in the room — social media just makes the room bigger." },
      { heading: "Show the process", text: "Share what you're learning, building and fixing. Behind-the-scenes content builds trust faster than polished highlights." },
      { heading: "Pick a lane", text: "Be known for one or two topics. Consistency in theme makes it easy for people to remember and recommend you." },
      { heading: "Engage like a human", text: "Reply, comment and support others. Community is built in conversations, not broadcasts." },
    ],
  },
  {
    slug: "business-workflows-to-automate",
    title: "5 Business Workflows You Should Automate Today",
    excerpt: "Simple AI automations that save hours every week for small teams.",
    category: "AI",
    date: "2026-09-07",
    readTime: "7 min read",
    author: "Hamza Siddiqui",
    image: b9,
    body: [
      { text: "You don't need a big tech team to benefit from automation. Start small and compound the time you save." },
      { heading: "1. Lead capture to CRM", text: "Send every form, WhatsApp and ad lead into one CRM automatically, tagged by source." },
      { heading: "2. Instant follow-ups", text: "Trigger a personalized welcome email or message the moment a lead arrives." },
      { heading: "3–5. Invoices, reports and FAQs", text: "Auto-generate invoices, weekly performance reports and let an AI assistant answer common customer questions 24/7." },
    ],
  },
  {
    slug: "brand-positioning-crowded-market",
    title: "Brand Positioning: Finding Your Place in a Crowded Market",
    excerpt: "Why the most successful brands decide clearly who they are — and who they are not.",
    category: "Branding",
    date: "2026-08-31",
    readTime: "6 min read",
    author: "Zainab Malik",
    image: b10,
    body: [
      { text: "In a crowded market, trying to appeal to everyone makes you invisible to everyone." },
      { heading: "Define your one thing", text: "What do you do better or differently than anyone else? Write it in one sentence a customer would understand." },
      { heading: "Know your audience deeply", text: "Positioning lives in your customer's mind. Talk to them, listen to their words and reflect them back." },
      { heading: "Live it everywhere", text: "Your website, social content, sales calls and customer service should all express the same promise." },
    ],
  },
  {
    slug: "your-website-is-your-best-salesperson",
    title: "Why Your Business Website Is Your Best Salesperson",
    excerpt: "A fast, clear website works 24/7 to build trust and convert visitors into customers.",
    category: "Web",
    date: "2026-08-24",
    readTime: "5 min read",
    author: "Ali Haider",
    image: b11,
    body: [
      { text: "Social media gets attention. Your website closes the deal." },
      { heading: "Speed is trust", text: "Every second of loading time loses visitors. Modern frameworks like React with optimized images keep things instant." },
      { heading: "Clarity converts", text: "Visitors should understand what you do, who it's for and what to do next within five seconds." },
      { heading: "Built to grow", text: "A well-structured website supports SEO, campaigns and new services as your business evolves." },
    ],
  },
];

export const BLOG_CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[(m ?? 1) - 1]} ${d}, ${y}`;
}

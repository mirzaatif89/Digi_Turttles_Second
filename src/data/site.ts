export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const CONTACT = {
  email: "hello@digiturtles.com",
  phone: "+92 300 1234567",
  whatsapp: "+92 300 1234567",
  address: "Karachi, Pakistan",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM",
};

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "X", href: "https://x.com", icon: "twitter" },
] as const;

/** Brand names shown in the "Brands we work with" strip above the home footer. */
export const BRANDS = [
  "Google",
  "Meta",
  "Microsoft",
  "Shopify",
  "AWS",
  "YouTube",
  "HubSpot",
  "Canva",
  "LinkedIn",
  "TikTok",
  "Upwork",
  "Fiverr",
];

export const STATS = [
  { value: 8, suffix: "+", label: "Career-ready courses" },
  { value: 8, suffix: "", label: "Agency services" },
  { value: 5, suffix: "", label: "Steps: Learn → Monetize" },
  { value: 1, suffix: "", label: "Ecosystem under one roof" },
];

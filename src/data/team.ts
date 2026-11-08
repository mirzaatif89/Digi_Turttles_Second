import m1 from "@/assets/team/member-1.webp";
import m2 from "@/assets/team/member-2.webp";
import m3 from "@/assets/team/member-3.webp";
import m4 from "@/assets/team/member-4.webp";
import m5 from "@/assets/team/member-5.webp";
import m6 from "@/assets/team/member-6.webp";
import m7 from "@/assets/team/member-7.webp";
import m8 from "@/assets/team/member-8.webp";
import m9 from "@/assets/team/member-9.webp";
import m10 from "@/assets/team/member-10.webp";
import m11 from "@/assets/team/member-11.webp";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  socials: { linkedin?: string; instagram?: string; twitter?: string };
};

const s = { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://x.com" };

export const TEAM: TeamMember[] = [
  {
    name: "Atif Mirza",
    role: "Founder & CEO",
    image: m1,
    bio: "Started Digi Turtles with one belief: every expert begins as a beginner. Leads vision, partnerships and growth.",
    skills: ["Strategy", "Leadership", "Growth"],
    socials: s,
  },
  {
    name: "Sara Khan",
    role: "Head of Marketing",
    image: m2,
    bio: "Builds campaigns that connect brands with the right people and turn attention into action.",
    skills: ["Campaigns", "Funnels", "Analytics"],
    socials: s,
  },
  {
    name: "Usman Ahmed",
    role: "Lead Instructor",
    image: m3,
    bio: "Designs practical, project-first learning paths that move students from theory to real work.",
    skills: ["Curriculum", "Mentoring", "Digital Skills"],
    socials: s,
  },
  {
    name: "Ayesha Fatima",
    role: "Community Lead",
    image: m4,
    bio: "Keeps the turtle community supportive, connected and moving forward together.",
    skills: ["Community", "Events", "Student Success"],
    socials: s,
  },
  {
    name: "Hamza Siddiqui",
    role: "AI Automation Engineer",
    image: m5,
    bio: "Automates repetitive workflows with AI so teams can focus on work that matters.",
    skills: ["AI Agents", "Integrations", "Python"],
    socials: s,
  },
  {
    name: "Zainab Malik",
    role: "Creative Director",
    image: m6,
    bio: "Shapes the visual voice of every project, from brand systems to campaign creatives.",
    skills: ["Art Direction", "Branding", "Storytelling"],
    socials: s,
  },
  {
    name: "Bilal Hussain",
    role: "SEO Strategist",
    image: m7,
    bio: "Helps brands get discovered with technical SEO and content that search engines love.",
    skills: ["Technical SEO", "Content", "Local SEO"],
    socials: s,
  },
  {
    name: "Mahnoor Tariq",
    role: "Brand & Graphic Designer",
    image: m8,
    bio: "Crafts identities, social creatives and visuals that make brands instantly recognizable.",
    skills: ["Identity", "Illustration", "Social Creatives"],
    socials: s,
  },
  {
    name: "Ali Haider",
    role: "Full-Stack Developer",
    image: m9,
    bio: "Engineers fast, modern websites and web apps with React and Node.js.",
    skills: ["React", "Node.js", "Performance"],
    socials: s,
  },
  {
    name: "Fatima Noor",
    role: "Content & Video Lead",
    image: m10,
    bio: "Produces short-form video and content that keeps audiences watching and coming back.",
    skills: ["Video", "Reels", "Copywriting"],
    socials: s,
  },
  {
    name: "Omar Farooq",
    role: "Finance & Budgeting Mentor",
    image: m11,
    bio: "Teaches freelancers and small businesses to plan, budget and grow with confidence.",
    skills: ["Budgeting", "Planning", "Business Finance"],
    socials: s,
  },
];

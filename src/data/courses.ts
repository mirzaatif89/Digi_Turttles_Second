import c1 from "@/assets/courses/course-1.webp";
import c2 from "@/assets/courses/course-2.webp";
import c3 from "@/assets/courses/course-3.webp";
import c4 from "@/assets/courses/course-4.webp";
import c5 from "@/assets/courses/course-5.webp";
import c6 from "@/assets/courses/course-6.webp";
import c7 from "@/assets/courses/course-7.webp";
import c8 from "@/assets/courses/course-8.webp";

export type Course = {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
};

export const COURSES: Course[] = [
  {
    title: "AI Automation",
    description: "AI tools, workflow automation and practical AI implementation for real businesses.",
    image: c1,
    duration: "8 weeks",
    level: "Beginner → Pro",
  },
  {
    title: "Digital Marketing",
    description: "Strategy, social media, campaigns, content, funnels and performance marketing.",
    image: c2,
    duration: "10 weeks",
    level: "Beginner",
  },
  {
    title: "Graphic Designing",
    description: "Design fundamentals, branding assets, social creatives and visual communication.",
    image: c3,
    duration: "10 weeks",
    level: "Beginner",
  },
  {
    title: "SEO",
    description: "On-page, off-page and technical SEO with keyword strategy and real implementation.",
    image: c4,
    duration: "6 weeks",
    level: "Intermediate",
  },
  {
    title: "Finance & Budgeting",
    description: "Budget planning, financial organization and practical money management.",
    image: c5,
    duration: "4 weeks",
    level: "All levels",
  },
  {
    title: "Video Editing",
    description: "Editing workflow, storytelling, short-form content and professional post-production.",
    image: c6,
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    title: "Web Development",
    description: "Build modern, responsive websites with HTML, CSS, JavaScript, React and Node.js.",
    image: c7,
    duration: "12 weeks",
    level: "Beginner → Pro",
  },
  {
    title: "Photography & Videography",
    description: "Camera fundamentals, composition, lighting, shooting and production workflow.",
    image: c8,
    duration: "6 weeks",
    level: "Beginner",
  },
];

export const TEACHING_MODEL = ["Learn", "Practice", "Build", "Showcase", "Monetize"];

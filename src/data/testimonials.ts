import a1 from "@/assets/avatars/client-1.webp";
import a2 from "@/assets/avatars/client-2.webp";
import a3 from "@/assets/avatars/client-3.webp";
import a4 from "@/assets/avatars/client-4.webp";
import a5 from "@/assets/avatars/client-5.webp";
import a6 from "@/assets/avatars/client-6.webp";
import a7 from "@/assets/avatars/client-7.webp";
import a8 from "@/assets/avatars/client-8.webp";
import a9 from "@/assets/avatars/client-9.webp";
import a10 from "@/assets/avatars/client-10.webp";

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
};

// Sample reviews — replace with real client and student feedback.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Hamza Ali",
    role: "Student, AI Automation",
    image: a1,
    rating: 5,
    quote:
      "Digi Turtles has completely changed my career. The courses are practical and the support is amazing!",
  },
  {
    name: "Nadia Rehman",
    role: "Founder, Nur Textiles",
    image: a2,
    rating: 5,
    quote:
      "They rebuilt our brand and website from scratch. We finally look like the premium company we are.",
  },
  {
    name: "Tariq Mehmood",
    role: "Owner, Mehmood Electronics",
    image: a3,
    rating: 5,
    quote:
      "The lead generation system brings us new customer inquiries every week. Clear, honest and professional team.",
  },
  {
    name: "Areeba Yousaf",
    role: "Student, Graphic Designing",
    image: a4,
    rating: 5,
    quote:
      "I started with zero design knowledge. Now I'm taking freelance projects and building my own portfolio.",
  },
  {
    name: "Saad Qureshi",
    role: "Co-founder, Ledgerly",
    image: a5,
    rating: 5,
    quote:
      "Their AI automation saved our support team hours every day. Smart people who actually understand business.",
  },
  {
    name: "Kiran Joseph",
    role: "Freelance Content Writer",
    image: a6,
    rating: 4,
    quote:
      "The digital marketing course gave me a real framework. The mentors genuinely care about your progress.",
  },
  {
    name: "Imran Sheikh",
    role: "Owner, Karahi House",
    image: a7,
    rating: 5,
    quote:
      "Our social media went from silent to buzzing. The content they shoot for us looks incredible.",
  },
  {
    name: "Shazia Parveen",
    role: "Director, Bright Future School",
    image: a8,
    rating: 5,
    quote:
      "Admissions inquiries grew after our new website and SEO work. The team was responsive at every step.",
  },
  {
    name: "Danish Iqbal",
    role: "Founder, IronCore Fitness",
    image: a9,
    rating: 5,
    quote:
      "Strategy, creatives and ads — all handled under one roof. It feels like having an in-house growth team.",
  },
  {
    name: "Rabia Anwar",
    role: "Owner, Rabia's Boutique",
    image: a10,
    rating: 5,
    quote:
      "From logo to Instagram shop, they built a brand my customers love. Highly recommended!",
  },
];

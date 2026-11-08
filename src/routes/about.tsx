import post10 from "@/assets/blog/post-10.webp";
import post2 from "@/assets/blog/post-2.webp";
import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, Quote, Users } from "lucide-react";

import aboutStudio from "@/assets/about-studio.webp";
import { Reveal, TiltCard } from "@/components/site/motion";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/sections/shared";
import { LogoScene } from "@/components/three/LazyScenes";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Digi Turtles — Our Story & Philosophy" },
      { name: "description", content: "Digital skills + the turtle mindset. Discover the story, philosophy and ecosystem behind Digi Turtles." },
      { property: "og:title", content: "About Digi Turtles" },
      { property: "og:description", content: "The story, philosophy and growth ecosystem behind Digi Turtles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PHILOSOPHY = [
  { t: "Start Small", d: "Every expert begins as a beginner. We do not judge the starting point." },
  { t: "Keep Moving", d: "Progress comes from consistency. Small steps compound over time." },
  { t: "Learn by Doing", d: "Knowledge becomes valuable when it is applied to real problems." },
  { t: "Build Independence", d: "The goal is not permanent dependence on a teacher or agency." },
  { t: "Help Others Grow", d: "When one turtle becomes skilled, it helps the next turtle move forward." },
];

const SIDES = [
  { icon: GraduationCap, img: post10, t: "Institute", d: "Practical education, skills and career-oriented learning." },
  { icon: Briefcase, img: post2, t: "Agency", d: "Real-world B2B services that help businesses generate leads, build brands and grow digitally." },
  { icon: Users, img: aboutStudio, t: "Community", d: "A culture where people learn from real work, support each other and become more independent." },
];

const LEVELS = [
  { t: "Little Turtle", d: "Beginner with curiosity and potential." },
  { t: "Growing Turtle", d: "Actively learning and practicing." },
  { t: "Skilled Turtle", d: "Capable of producing real work." },
  { t: "Ninja Turtle", d: "Disciplined, independent and able to solve problems." },
  { t: "Mentor Turtle", d: "Helps the next generation grow." },
];

const ROADMAP = [
  { t: "Foundation", d: "Brand identity, website, course structure, service packages and portfolio." },
  { t: "Proof", d: "Initial cohorts, client projects, testimonials and case studies." },
  { t: "Scale", d: "Advanced programs, stronger B2B sales and delivery teams." },
  { t: "Ecosystem", d: "Connecting students, mentors, freelancers, creators and businesses." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="Our Story"
        title="Every Journey Begins With"
        highlight="One Bold Step."
        description="For a sea turtle, the journey begins the moment it breaks free from the sand and heads to the ocean. Your growth begins the same way."
      />

      <section className="section-ice py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <TiltCard className="rounded-3xl" max={5}>
              <img src={aboutStudio} alt="Digi Turtles team and students collaborating" width={1536} height={1024} loading="lazy" className="rounded-3xl shadow-soft" />
            </TiltCard>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Digital Skills +"
              highlight="The Turtle Mindset"
              tone="light"
              text="Growth does not come from speed alone. It comes from learning, consistency, discipline and the willingness to keep moving. The turtle represents someone who may start small — but keeps going. With the right guidance, that turtle becomes skilled, confident and independent."
            />
            <Reveal delay={0.2}>
              <figure className="glass-light mt-8 rounded-2xl p-6">
                <Quote className="h-8 w-8 text-turquoise" />
                <blockquote className="mt-3 font-display text-lg leading-relaxed">
                  “We started with the idea of the turtle — not because it is the fastest, but because it keeps moving.”
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-abyss relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Two Sides of Growth" title="One Roof." highlight="One Ecosystem." align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SIDES.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1}>
                <TiltCard className="h-full rounded-3xl">
                  <div className="group relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-cyan/15">
                    <img src={s.img} alt={s.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/70 to-abyss/10" />
                    <div className="relative flex h-full flex-col justify-end p-7">
                      <s.icon className="h-6 w-6 text-cyan" />
                      <h3 className="mt-4 text-2xl font-semibold">{s.t}</h3>
                      <p className="mt-2 text-abyss-muted">{s.d}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-3 font-display text-lg font-semibold">
              {["Learn", "Work", "Grow", "Teach", "Empower"].map((w, i, a) => (
                <span key={w} className="flex items-center gap-3">
                  <span className="glass-dark rounded-full px-5 py-2 text-cyan">{w}</span>
                  {i < a.length - 1 && <span className="text-abyss-muted">→</span>}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-ice py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="The Turtle Philosophy" title="Principles We" highlight="Live By" tone="light" text="Don't just learn. Become independent." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <TiltCard className="h-full rounded-3xl">
                  <div className="glass-light h-full rounded-3xl p-6">
                    <span className="font-display text-4xl font-bold text-gradient-deep">0{i + 1}</span>
                    <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-abyss relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The Ninja Turtle Path" title="From Little Turtle" highlight="to Ninja Turtle." />
            <ol className="mt-10 space-y-4">
              {LEVELS.map((l, i) => (
                <Reveal key={l.t} delay={i * 0.08}>
                  <li className="glass-dark flex items-center gap-5 rounded-2xl p-5">
                    <span className="icon-3d h-12 w-12 shrink-0 font-display font-bold">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{l.t}</h3>
                      <p className="text-sm text-abyss-muted">{l.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="relative h-[380px] md:h-[520px]">
            <LogoScene />
          </Reveal>
        </div>
      </section>

      <section className="section-ice py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Growth Roadmap" title="Where We're" highlight="Heading" tone="light" align="center" />
          <div className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div className="absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-turquoise to-transparent md:block" />
            {ROADMAP.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.1}>
                <div className="relative text-center">
                  <span className="icon-3d mx-auto h-16 w-16 font-display text-lg font-bold">P{i + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold">{r.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl leading-relaxed font-semibold">
              We do not want people to stay beginners forever. We give them knowledge, practical experience, confidence and a
              path toward <span className="text-gradient-deep">independence.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Play, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

import heroOcean from "@/assets/hero-ocean.webp";
import { Button } from "@/components/ui/button";
import { CourseCard, PostCard, ProjectCard, TeamCard } from "@/components/site/cards";
import { Reveal, SplitWords, TiltCard } from "@/components/site/motion";
import { SectionHeading } from "@/components/site/PageHeader";
import { BrandMarquee, CtaSection, FaqSection, TestimonialsSection } from "@/components/sections/shared";
import { HeroScene, LogoScene } from "@/components/three/LazyScenes";
import { BLOG_POSTS } from "@/data/blog";
import { COURSES, TEACHING_MODEL } from "@/data/courses";
import { PROJECTS } from "@/data/portfolio";
import { SERVICES } from "@/data/services";
import { SERVICE_IMAGES } from "@/data/service-images";
import aboutStudio from "@/assets/about-studio.webp";
import { TEAM } from "@/data/team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digi Turtles — Learn. Build. Grow. Become Independent." },
      {
        name: "description",
        content:
          "Digi Turtles is a digital marketing agency and professional skills institute. Grow your business or learn future-ready digital skills.",
      },
      { property: "og:title", content: "Digi Turtles — Digital Agency + Institute" },
      { property: "og:description", content: "We transform ideas into powerful digital experiences and future-ready skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <CoursesPreview />
      <TeamPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <BlogPreview />
      <FaqSection />
      <CtaSection />
      <BrandMarquee />
    </>
  );
}

function Hero() {
  return (
    <section className="section-abyss relative min-h-[100svh] overflow-hidden">
      <motion.img
        src={heroOcean}
        alt=""
        width={1920}
        height={1088}
        fetchPriority="high"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-abyss to-transparent" />
      <HeroScene />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-start px-6 pt-32 pb-24 md:justify-center md:pt-28">
        <div className="pointer-events-auto max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-xs font-semibold tracking-[0.2em] text-cyan uppercase"
          >
            <span className="h-2 w-2 animate-glow rounded-full bg-cyan shadow-[0_0_6px_var(--cyan)]" />
            Digital Agency + Institute
          </motion.span>
          <h1 className="mt-6 text-5xl leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
            <SplitWords text="Learn. Build. Grow." delay={0.4} />
            <br />
            <SplitWords text="Become Independent." className="text-gradient-cyan" delay={0.58} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.58 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-abyss-muted md:text-lg"
          >
            We transform ideas into powerful digital experiences, helping businesses grow and individuals develop
            future-ready skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.58 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/services">
                Explore Our Services <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/services" hash="courses">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-cyan/60">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Discover Our Courses
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] tracking-[0.3em] text-abyss-muted uppercase md:flex">
        Scroll
        <span className="relative h-10 w-6 rounded-full border border-cyan/40">
          <span className="absolute top-2 left-1/2 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-cyan" />
        </span>
      </div>
    </section>
  );
}

const PILLARS = [
  { icon: GraduationCap, title: "Learn", text: "Practical education & career-ready skills." },
  { icon: TrendingUp, title: "Create", text: "Real-world projects & digital growth for brands." },
  { icon: Users, title: "Grow", text: "A supportive community that builds independence." },
];

function AboutPreview() {
  return (
    <section className="section-abyss relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal className="relative h-[380px] md:h-[500px]">
          <div className="absolute inset-10 rounded-full bg-cyan/10 blur-3xl" />
          <LogoScene />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About Digi Turtles"
            title="More Than a Brand."
            highlight="It's a Movement."
            text="Inspired by the journey of a sea turtle — we believe growth comes from learning, consistency and never giving up. Digi Turtles combines digital innovation, professional education, creativity and business growth under one roof."
          />
          <div className="mt-10 grid gap-6 border-t border-cyan/15 pt-6 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <span className="font-display text-xs text-abyss-muted">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-abyss-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <Button asChild variant="glass" className="mt-10 h-12 px-7">
              <Link to="/about">
                Know More <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-ice relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Digital Solutions for"
            highlight="Modern Businesses"
            tone="light"
            text="From strategy to execution — everything your brand needs to grow, in one place."
          />
          <Button asChild variant="navy" className="h-12 shrink-0 px-7">
            <Link to="/services">
              Explore All Services <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link
                to="/services"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-abyss shadow-soft"
              >
                <img
                  src={SERVICE_IMAGES[s.slug] ?? heroOcean}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/50 to-transparent" />
                <span className="absolute top-4 left-4 font-display text-xs font-semibold text-abyss-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-abyss-foreground">
                  <h3 className="flex items-center justify-between gap-3 font-display text-lg font-semibold">
                    {s.title}
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-rotate-45" />
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-abyss-muted">{s.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoursesPreview() {
  return (
    <section className="relative overflow-hidden bg-abyss py-24 text-abyss-foreground md:py-32">
      <img src={aboutStudio} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss/70 to-abyss" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Courses"
          title="Learn Skills That"
          highlight="Build Your Future"
          text="Practical, project-first programs designed to make you capable, confident and independent."
        />
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {TEACHING_MODEL.map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                <span className="glass-dark rounded-full px-4 py-1.5 font-display text-sm font-medium text-cyan">{s}</span>
                {i < TEACHING_MODEL.length - 1 && <ArrowRight className="h-4 w-4 text-abyss-muted" />}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.08}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamPreview() {
  return (
    <section className="section-ice py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Team"
            title="The Minds Behind"
            highlight="Digi Turtles"
            tone="light"
            text="A passionate team of strategists, creators, engineers and mentors."
          />
          <Button asChild variant="navy" className="h-12 shrink-0 px-7">
            <Link to="/team">
              Meet Our Team <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {TEAM.slice(0, 4).map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <TeamCard member={m} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  const items = PROJECTS.slice(0, 5);
  return (
    <section className="section-abyss relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Creative Work."
            highlight="Real Impact."
            text="A selection of websites, brands and campaigns crafted by our team."
          />
          <Button asChild variant="glass" className="h-12 shrink-0 px-7">
            <Link to="/portfolio">
              View Portfolio <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <ProjectCard project={p} tall={i === 0} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const [first, ...rest] = BLOG_POSTS;
  return (
    <section className="section-ice py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Blog"
            title="Insights That"
            highlight="Inspire Growth"
            tone="light"
            text="Tips, guides and updates to help you learn and grow."
          />
          <Button asChild variant="navy" className="h-12 shrink-0 px-7">
            <Link to="/blog">
              All Articles <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {first && (
            <Reveal className="lg:col-span-3">
              <PostCard post={first} featured />
            </Reveal>
          )}
          {rest.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

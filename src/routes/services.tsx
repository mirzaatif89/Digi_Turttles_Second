import { createFileRoute } from "@tanstack/react-router";

import { CourseCard, ServiceCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/motion";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { CtaSection, FaqSection } from "@/components/sections/shared";
import { COURSES, TEACHING_MODEL } from "@/data/courses";
import { PROCESS, SERVICES } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Courses — Digi Turtles" },
      {
        name: "description",
        content: "Digital marketing, SEO, branding, web development, lead generation, AI automation and career-ready courses.",
      },
      { property: "og:title", content: "Digi Turtles Services & Courses" },
      { property: "og:description", content: "Digital solutions for modern businesses and skills that build your future." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="What We Do"
        title="Digital Solutions for"
        highlight="Modern Businesses"
        description="A growth partner, not just a vendor — strategy, execution, systems and measurable outcomes."
      />
      <section className="section-ice py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.08}>
              <ServiceCard service={s} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-abyss relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Our Process" title="How We Turn Ideas" highlight="Into Growth" align="center" />
          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="glass-dark glow-border h-full rounded-3xl p-6">
                  <span className="text-gradient-cyan font-display text-4xl font-bold">{p.step}</span>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-abyss-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="relative overflow-hidden bg-abyss-2 py-24 text-abyss-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Digi Turtles Institute"
            title="Learn Skills That"
            highlight="Build Your Future"
            text={`Our teaching model: ${TEACHING_MODEL.join(" → ")}.`}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 0.08}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}

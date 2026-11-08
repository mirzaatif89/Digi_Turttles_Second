import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import ctaOcean from "@/assets/cta-ocean.webp";
import { Button } from "@/components/ui/button";
import { Reveal, SplitWords } from "@/components/site/motion";
import { SectionHeading } from "@/components/site/PageHeader";
import { TestimonialCard } from "@/components/site/cards";
import { AmbientScene } from "@/components/three/LazyScenes";
import { FAQS } from "@/data/faqs";
import { BRANDS } from "@/data/site";
import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const rowA = TESTIMONIALS.slice(0, 5);
  const rowB = TESTIMONIALS.slice(5);
  return (
    <section className="section-abyss relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Testimonials" title="What Our" highlight="Clients Say" text="Real stories. Real growth." />
          <Reveal>
            <div className="glass-dark rounded-2xl px-6 py-4 text-center">
              <p className="font-display text-4xl font-bold text-cyan">4.9</p>
              <p className="text-xs text-abyss-muted">Average rating from {TESTIMONIALS.length} reviews</p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="mask-fade-x relative mt-14 space-y-6">
        {[rowA, rowB].map((row, r) => (
          <div key={r} className="group flex overflow-hidden">
            <div
              className={cn(
                "flex w-max gap-6 pr-6 animate-marquee group-hover:[animation-play-state:paused]",
                r === 1 && "[animation-direction:reverse]",
              )}
            >
              {[...row, ...row].map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} t={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FaqSection({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={cn("relative py-24 md:py-32", tone === "light" ? "section-ice" : "section-abyss")}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions?"
            highlight="We've got answers."
            tone={tone}
            text="Everything you need to know about our courses, services and how we work."
          />
          <Reveal delay={0.2}>
            <Button asChild variant={tone === "light" ? "navy" : "hero"} className="mt-8 h-12 px-7">
              <Link to="/contact">
                Ask us anything <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
        <div className="space-y-3 lg:col-span-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl transition-shadow duration-300",
                    tone === "light" ? "glass-light" : "glass-dark",
                    isOpen && "shadow-glow",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-semibold md:p-6"
                  >
                    {f.q}
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                        isOpen ? "rotate-45 bg-cyan text-abyss" : "border border-turquoise/50",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <p className="px-5 pb-6 text-sm leading-relaxed opacity-75 md:px-6">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="section-abyss relative overflow-hidden py-20 md:py-28">
      <img src={ctaOcean} alt="" width={1920} height={1088} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss/30 to-abyss" />
      <div className="absolute inset-0">
        <AmbientScene density={0.7} />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow justify-center">Work with us</p>
        <h2 className="mt-5 text-4xl leading-tight font-bold md:text-6xl">
          <SplitWords text="Have a project" /> <SplitWords text="in mind?" className="text-gradient-cyan" delay={0.2} />
        </h2>
        <Reveal delay={0.3}>
          <p className="mt-6 text-lg text-abyss-muted">Tell us what you're building. We reply within one working day.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start a project <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/services" hash="courses">Join a course</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BrandMarquee() {
  return (
    <section className="section-abyss relative border-t border-cyan/10 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-display text-xs font-semibold tracking-[0.3em] text-abyss-muted uppercase">
          Platforms & partners we work with
        </p>
      </div>
      <div className="mask-fade-x group mt-8 flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-2xl font-bold whitespace-nowrap text-silver/60 transition-colors duration-300 hover:text-cyan md:text-3xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

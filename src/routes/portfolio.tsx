import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { ProjectCard } from "@/components/site/cards";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/sections/shared";
import { PORTFOLIO_CATEGORIES, PROJECTS } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Creative Work. Real Impact. | Digi Turtles" },
      { name: "description", content: "Websites, brand identities, social campaigns and creative design by Digi Turtles." },
      { property: "og:title", content: "Digi Turtles Portfolio" },
      { property: "og:description", content: "Creative work. Real impact." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [cat, setCat] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>("All");
  const list = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
  return (
    <>
      <PageHeader
        crumb="Portfolio"
        eyebrow="Our Work"
        title="Creative Work."
        highlight="Real Impact."
        description="A curated selection of websites, brands, campaigns and creatives crafted by our team."
      />
      <section className="section-abyss py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={cn(
                  "relative rounded-full px-5 py-2 font-display text-sm font-medium transition-colors",
                  cat === c ? "text-abyss" : "glass-dark text-abyss-muted hover:text-cyan",
                )}
              >
                {cat === c && (
                  <motion.span layoutId="pf-cat" className="absolute inset-0 rounded-full bg-[image:var(--gradient-cyan)] shadow-glow" />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
          <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformPerspective: 1000 }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}

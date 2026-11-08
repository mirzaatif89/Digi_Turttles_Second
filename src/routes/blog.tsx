import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PostCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/motion";
import { PageHeader } from "@/components/site/PageHeader";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/data/blog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Insights That Inspire Growth | Digi Turtles" },
      { name: "description", content: "Guides on AI, digital marketing, SEO, design, freelancing and business growth." },
      { property: "og:title", content: "Digi Turtles Blog" },
      { property: "og:description", content: "Insights that inspire growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === cat);
  const [featured, ...rest] = list;
  return (
    <>
      <PageHeader
        crumb="Blog"
        eyebrow="Our Blog"
        title="Insights That"
        highlight="Inspire Growth"
        description="Tips, guides and stories from our agency and institute to help you learn, build and grow."
      />
      <section className="section-ice py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full px-5 py-2 font-display text-sm font-medium transition-all",
                  cat === c ? "bg-abyss text-abyss-foreground shadow-glow" : "glass-light hover:text-abyss-2",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured && (
              <Reveal key={`f-${featured.slug}`} className="md:col-span-2 lg:col-span-3">
                <PostCard post={featured} featured />
              </Reveal>
            )}
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

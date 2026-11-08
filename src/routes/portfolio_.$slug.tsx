import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/motion";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/sections/shared";
import { getProject, PROJECTS } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio_/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} | Digi Turtles Portfolio` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Project unavailable | Digi Turtles" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  return (
    <>
      <PageHeader crumb="Portfolio" eyebrow={project.category} title={project.title} description={project.summary} />
      <section className="section-ice py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <img src={project.image} alt={project.title} width={900} height={675} className="w-full rounded-3xl shadow-soft" />
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.challenge}</p>
              </Reveal>
              <Reveal>
                <h2 className="text-2xl font-bold">Our Approach</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.approach}</p>
              </Reveal>
            </div>
            <Reveal>
              <aside className="glass-light space-y-6 rounded-3xl p-7">
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">Client</p>
                  <p className="font-display font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">Year</p>
                  <p className="font-display font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">Deliverables</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-turquoise" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
          <Button asChild variant="outlineCyan" className="mt-12 h-11 px-6">
            <Link to="/portfolio">
              <ArrowLeft /> Back to Portfolio
            </Link>
          </Button>
          <h2 className="mt-20 text-2xl font-bold">More Projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}

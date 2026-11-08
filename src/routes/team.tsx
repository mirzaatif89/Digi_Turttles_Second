import { createFileRoute } from "@tanstack/react-router";

import { TeamCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/motion";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/sections/shared";
import { TEAM } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Digi Turtles" },
      { name: "description", content: "Meet the strategists, creators, engineers and mentors behind Digi Turtles." },
      { property: "og:title", content: "The Minds Behind Digi Turtles" },
      { property: "og:description", content: "Meet the Digi Turtles team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        crumb="Team"
        eyebrow="Our Team"
        title="The Minds Behind"
        highlight="Digi Turtles"
        description="We were once little turtles too. We kept learning, kept working and kept moving — now we help the next turtles grow."
      />
      <section className="section-ice py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-5 px-6 md:grid-cols-3 md:gap-y-14 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.08} className="min-w-0 self-start">
              <TeamCard member={m} index={i} />
              <p className="mt-3 hidden min-h-12 px-1 text-sm leading-relaxed text-muted-foreground md:block">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, Clock, Quote, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/data/blog";
import { formatDate } from "@/data/blog";
import type { Course } from "@/data/courses";
import type { Project } from "@/data/portfolio";
import type { Service } from "@/data/services";
import type { TeamMember } from "@/data/team";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { TiltCard } from "./motion";
import { SocialIcon } from "./SocialIcon";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  const Icon = service.icon;
  return (
    <TiltCard className="h-full rounded-3xl">
      <div className="glass-light glow-border flex h-full flex-col rounded-3xl p-6 transition-shadow duration-500 group-hover/tilt:shadow-glow">
        <div className="icon-3d h-16 w-16 transition-transform duration-500 [transform:translateZ(40px)] group-hover/tilt:-translate-y-1 group-hover/tilt:rotate-6">
          <Icon className="h-7 w-7" strokeWidth={2.2} />
        </div>
        <h3 className="mt-6 text-lg font-semibold [transform:translateZ(30px)]">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {detailed ? service.description : service.short}
        </p>
        {detailed && (
          <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-foreground/80">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-turquoise shadow-[0_0_6px_var(--cyan)]" />
                {f}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto flex items-center gap-1 pt-6 font-display text-sm font-semibold text-abyss-2 opacity-70 transition-all group-hover/tilt:gap-2 group-hover/tilt:opacity-100">
          Learn more <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </TiltCard>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <TiltCard className="h-full rounded-3xl" max={6}>
      <article className="glass-dark glow-border flex h-full flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={course.image}
            alt={`${course.title} course`}
            width={720}
            height={540}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover/tilt:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/10 to-transparent" />
          <span className="absolute top-4 left-4 rounded-full bg-abyss/70 px-3 py-1 text-[0.7rem] font-semibold text-cyan backdrop-blur">
            {course.level}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-xs text-abyss-muted">
            <Clock className="h-3.5 w-3.5 text-cyan" /> {course.duration}
          </div>
          <h3 className="mt-2 text-xl font-semibold">{course.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-abyss-muted">{course.description}</p>
          <Button asChild variant="glass" className="mt-auto h-10 self-start px-5 text-sm">
            <Link to="/contact" search={{ interest: course.title }}>
              Explore Course <ArrowRight />
            </Link>
          </Button>
        </div>
      </article>
    </TiltCard>
  );
}

export function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  return (
    <TiltCard className="rounded-3xl" max={8}>
      <article className="glass-light flex flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-square overflow-hidden bg-[image:var(--gradient-abyss)]">
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            width={560}
            height={560}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover/tilt:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100" />
          <div className="absolute inset-x-0 bottom-4 flex translate-y-6 justify-center gap-2 opacity-0 transition-all duration-500 group-hover/tilt:translate-y-0 group-hover/tilt:opacity-100">
            {(["linkedin", "instagram", "twitter"] as const).map((k) =>
              member.socials[k] ? (
                <a
                  key={k}
                  href={member.socials[k]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} on ${k}`}
                  className="glass-dark grid h-9 w-9 place-items-center rounded-full text-abyss-foreground hover:text-cyan"
                >
                  <SocialIcon name={k} className="h-4 w-4" />
                </a>
              ) : null,
            )}
          </div>
          <span className="absolute top-3 right-3 rounded-full bg-abyss/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold text-cyan backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="min-h-20 p-5">
          <h3 className="text-lg leading-snug font-semibold">{member.name}</h3>
          <p className="mt-1 text-sm leading-snug font-medium text-abyss-2/80">{member.role}</p>
        </div>
      </article>
    </TiltCard>
  );
}

export function ProjectCard({ project, className, tall = false }: { project: Project; className?: string; tall?: boolean }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className={cn("group relative block overflow-hidden rounded-3xl bg-abyss", className)}
    >
      <img
        src={project.image}
        alt={project.title}
        width={900}
        height={675}
        loading="lazy"
        className={cn(
          "w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1",
          tall ? "h-full min-h-[22rem]" : "aspect-[4/3] h-full",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-3xl ring-1 ring-cyan/0 transition-all duration-500 ring-inset group-hover:ring-cyan/60" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-abyss-foreground">
        <span className="rounded-full border border-cyan/40 bg-abyss/50 px-3 py-1 text-[0.7rem] font-semibold text-cyan backdrop-blur">
          {project.category}
        </span>
        <h3 className="mt-3 text-xl font-semibold md:text-2xl">{project.title}</h3>
        <p className="mt-1 max-h-0 overflow-hidden text-sm text-abyss-muted opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
          {project.summary}
        </p>
      </div>
      <span className="absolute top-5 right-5 grid h-11 w-11 -translate-y-2 place-items-center rounded-full bg-cyan text-abyss opacity-0 shadow-glow transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </Link>
  );
}

export function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={cn(
        "group glass-light flex h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow",
        featured ? "flex-col lg:flex-row" : "flex-col",
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "aspect-[16/10] lg:aspect-auto lg:w-3/5" : "aspect-[16/10]")}>
        <img
          src={post.image}
          alt={post.title}
          width={900}
          height={675}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 rounded-full bg-abyss/75 px-3 py-1 text-[0.7rem] font-semibold text-cyan backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:p-10")}>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-turquoise" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-turquoise" />
            {post.readTime}
          </span>
        </div>
        <h3 className={cn("mt-3 font-semibold leading-snug", featured ? "text-2xl md:text-3xl" : "text-lg")}>{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <span className="mt-auto flex items-center gap-2 pt-6 font-display text-sm font-semibold text-abyss-2">
          Read More
          <span className="grid h-8 w-8 place-items-center rounded-full border border-turquoise/50 transition-all group-hover:bg-cyan group-hover:text-abyss">
            <ArrowRight className="h-4 w-4" />
          </span>
        </span>
      </div>
    </Link>
  );
}

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={cn("h-4 w-4", i < rating ? "fill-star text-star" : "text-silver")} />
      ))}
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="glass-dark glow-border relative flex h-full w-[22rem] shrink-0 flex-col rounded-3xl p-7 md:w-[26rem]">
      <Quote className="absolute top-6 right-6 h-10 w-10 text-cyan/25" />
      <Stars rating={t.rating} />
      <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-abyss-foreground/90">“{t.quote}”</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-6">
        <img src={t.image} alt={t.name} width={200} height={200} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan/50" />
        <div>
          <p className="font-display font-semibold text-abyss-foreground">{t.name}</p>
          <p className="text-xs text-abyss-muted">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

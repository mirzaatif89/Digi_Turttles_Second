import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import heroOcean from "@/assets/hero-ocean.webp";
import heroTurtle from "@/assets/hero-turtle.webp";
import { AmbientScene } from "@/components/three/LazyScenes";
import { SplitWords } from "./motion";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  crumb: string;
}) {
  return (
    <section className="section-abyss relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <motion.img
        src={heroOcean}
        alt=""
        width={1920}
        height={1088}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/40 to-abyss" />
      <div className="absolute inset-0">
        <AmbientScene density={0.8} />
      </div>
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 80, rotate: -6 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-1/2 right-[-12%] w-[70%] -translate-y-1/2 opacity-25 sm:right-[-4%] sm:w-[48%] sm:opacity-60 lg:right-[2%] lg:w-[40%] lg:opacity-100"
      >
        <img
          src={heroTurtle}
          alt=""
          width={1200}
          height={900}
          className="animate-float h-auto w-full drop-shadow-[0_30px_40px_rgb(0_0_0/0.45)]"
        />
      </motion.div>
      <div className="relative mx-auto max-w-7xl px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-abyss-muted">
          <Link to="/" className="hover:text-cyan">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-cyan">{crumb}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] font-bold md:text-6xl lg:text-7xl">
          <SplitWords text={title} />{" "}
          {highlight && <SplitWords text={highlight} className="text-gradient-cyan" delay={0.2} />}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-abyss-muted md:text-lg"
        >
          {description}
        </motion.p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  text,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  text?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className ?? ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight font-bold md:text-5xl">
        <SplitWords text={title} />
        {highlight && (
          <>
            {" "}
            <SplitWords
              text={highlight}
              className={tone === "dark" ? "text-gradient-cyan" : "text-gradient-deep"}
              delay={0.15}
            />
          </>
        )}
      </h2>
      {text && <p className="mt-5 text-base leading-relaxed opacity-75 md:text-lg">{text}</p>}
    </div>
  );
}

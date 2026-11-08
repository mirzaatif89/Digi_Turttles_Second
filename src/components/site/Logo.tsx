import { Link } from "@tanstack/react-router";

import emblem from "@/assets/brand/emblem.webp";
import { cn } from "@/lib/utils";

export function Logo({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <Link to="/" aria-label="Digi Turtles home" className={cn("group flex items-center gap-3", className)}>
      <span className="relative grid place-items-center">
                <img
          src={emblem}
          alt="Digi Turtles logo"
          width={400}
          height={364}
          className={cn(
            "relative w-auto drop-shadow-[0_2px_6px_rgb(0_0_0/0.5)] brightness-110 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3",
            size === "lg" ? "h-16" : "h-12 md:h-14",
          )}
        />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display font-bold tracking-wide text-abyss-foreground",
            size === "lg" ? "text-2xl" : "text-lg md:text-xl",
          )}
        >
          DIGI TURTLES
        </span>
        <span className="mt-1 block text-[0.68rem] tracking-[0.28em] text-silver">Where Ideas Evolve</span>
      </span>
    </Link>
  );
}

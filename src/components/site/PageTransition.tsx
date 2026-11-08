import { useRouterState } from "@tanstack/react-router";

import emblem from "@/assets/brand/emblem.webp";

/**
 * Curtain that sweeps up on every route change (and on first load).
 * Pure CSS animation, so it also runs on the server-rendered HTML before hydration.
 */
export function PageTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} aria-hidden="true">
      <div className="curtain-accent" />
      <div className="curtain">
        <div className="curtain-logo flex flex-col items-center gap-4">
          <img src={emblem} alt="" width={400} height={364} className="h-24 w-auto" />
          <span className="font-display text-sm font-semibold tracking-[0.35em] text-abyss-foreground">
            DIGI TURTLES
          </span>
        </div>
      </div>
    </div>
  );
}

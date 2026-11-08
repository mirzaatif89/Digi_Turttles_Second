import { useRouterState } from "@tanstack/react-router";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

/** Lenis inertia scrolling + scroll-to-top / scroll-to-hash on navigation. */
export function SmoothScroll() {
  const location = useRouterState({ select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }) });
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: { offset: -96 } });
    lenisRef.current = lenis;
    let id = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    const resume = () => {
      if (!document.hidden && !id) id = requestAnimationFrame(raf);
    };
    const pause = () => {
      if (!id) return;
      cancelAnimationFrame(id);
      id = 0;
    };
    const onVisibilityChange = () => (document.hidden ? pause() : resume());
    document.addEventListener("visibilitychange", onVisibilityChange);
    resume();
    return () => {
      pause();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    const hash = location.hash.replace(/^#/, "");
    if (hash) {
      const t = window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (!el) return;
        if (lenis) lenis.scrollTo(el, { offset: -96 });
        else el.scrollIntoView({ behavior: "smooth" });
      }, 500);
      return () => window.clearTimeout(t);
    }
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}

import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";

// three.js only ever loads in the browser: these modules are imported lazily after hydration.
const HeroSceneImpl = lazy(() => import("./HeroScene"));
const LogoSceneImpl = lazy(() => import("./LogoScene"));
const AmbientSceneImpl = lazy(() => import("./AmbientScene"));

/**
 * WebGL is expensive even when a canvas is below the fold. Keep the visual
 * composition identical, but create each scene only when it is close to view.
 */
function SceneGate({ children }: { children: ReactNode }) {
  const element = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const target = element.current;
    if (!target) return;
    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin: "180px 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={element} className="absolute inset-0" aria-hidden="true">
      {isNearViewport ? children : null}
    </div>
  );
}

export function HeroScene() {
  return (
    <SceneGate>
      <ClientOnly fallback={null}>
        <Suspense fallback={null}>
          <HeroSceneImpl />
        </Suspense>
      </ClientOnly>
    </SceneGate>
  );
}

export function LogoScene() {
  return (
    <SceneGate>
      <ClientOnly fallback={null}>
        <Suspense fallback={null}>
          <LogoSceneImpl />
        </Suspense>
      </ClientOnly>
    </SceneGate>
  );
}

export function AmbientScene({ density }: { density?: number }) {
  return (
    <SceneGate>
      <ClientOnly fallback={null}>
        <Suspense fallback={null}>
          <AmbientSceneImpl {...(density !== undefined ? { density } : {})} />
        </Suspense>
      </ClientOnly>
    </SceneGate>
  );
}

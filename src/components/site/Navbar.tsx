import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SOCIALS } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

function isActive(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");
}

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4 md:py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-500 md:px-6",
          scrolled ? "glass-dark mx-3 md:mx-auto" : "border border-transparent",
        )}
      >
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-cyan/15 bg-abyss/30 p-1 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.to);
              return (
                <li key={item.to} className="relative">
                  <Link
                    to={item.to}
                    className={cn(
                      "relative z-10 block rounded-full px-4 py-2 font-display text-sm font-medium transition-colors duration-300",
                      active ? "text-cyan" : "text-abyss-muted hover:text-abyss-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-cyan/10 shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--cyan)_35%,transparent)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    >
                      <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_6px_var(--cyan)]" />
                    </motion.span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" className="hidden h-11 px-6 sm:inline-flex">
            <Link to="/contact">
              Get Started <ArrowRight />
            </Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="glass-dark grid h-11 w-11 place-items-center rounded-full text-abyss-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="section-abyss fixed inset-0 -z-10 flex flex-col px-6 pt-28 pb-10 lg:hidden"
          >
            <ul className="relative space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    to={item.to}
                    className={cn(
                      "flex items-center justify-between border-b border-cyan/10 py-4 font-display text-3xl font-semibold",
                      isActive(pathname, item.to) ? "text-cyan" : "text-abyss-foreground",
                    )}
                  >
                    {item.label}
                    <ArrowRight className="h-5 w-5 opacity-60" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="relative mt-auto flex items-center justify-between">
              <Button asChild variant="hero" className="h-12 px-7">
                <Link to="/contact">Get Started</Link>
              </Button>
              <div className="flex gap-2">
                {SOCIALS.slice(0, 3).map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="glass-dark grid h-11 w-11 place-items-center rounded-full text-abyss-foreground">
                    <SocialIcon name={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { SERVICES } from "@/data/services";
import { CONTACT, NAV_ITEMS, SOCIALS } from "@/data/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="section-abyss relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-abyss-muted">
              A digital agency and professional skills institute helping businesses grow and individuals
              become independent — one consistent step at a time.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass-dark grid h-9 w-9 place-items-center rounded-full text-abyss-foreground transition-all hover:-translate-y-1 hover:text-cyan hover:shadow-glow"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterCol title="Quick Links">
              {NAV_ITEMS.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="footer-link">
                    {n.label}
                  </Link>
                </li>
              ))}
            </FooterCol>
            <FooterCol title="Services">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </FooterCol>
            <FooterCol title="Contact">
              <li className="flex gap-2 text-abyss-muted">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <a href={`mailto:${CONTACT.email}`} className="footer-link break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-2 text-abyss-muted">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="footer-link">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-2 text-abyss-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <span>{CONTACT.address}</span>
              </li>
            </FooterCol>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cyan/10 pt-6 text-xs text-abyss-muted md:flex-row">
          <p>© {new Date().getFullYear()} Digi Turtles. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Learn · Build · Grow · Become Independent</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 font-display text-xs font-semibold tracking-wider text-abyss-foreground uppercase">{title}</h3>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

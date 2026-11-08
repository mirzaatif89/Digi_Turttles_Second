import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Reveal, TiltCard } from "@/components/site/motion";
import { PageHeader } from "@/components/site/PageHeader";
import { FaqSection } from "@/components/sections/shared";
import { COURSES } from "@/data/courses";
import { SERVICES } from "@/data/services";
import { CONTACT } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { interest?: string } =>
    typeof s["interest"] === "string" ? { interest: s["interest"] } : {},
  head: () => ({
    meta: [
      { title: "Contact Us — Digi Turtles" },
      { name: "description", content: "Start your journey with Digi Turtles. Get in touch about courses or agency services." },
      { property: "og:title", content: "Contact Digi Turtles" },
      { property: "og:description", content: "Let's build something extraordinary together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(120),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[+\d\s-]*$/, "Only numbers, spaces, + and -"),
  interest: z.string().min(1, "Please choose an option"),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(1000),
});

type FormState = z.infer<typeof schema>;

const INFO = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp, href: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}` },
  { icon: MapPin, label: "Location", value: CONTACT.address },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];

function ContactPage() {
  const { interest } = Route.useSearch();
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", interest: interest ?? "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of r.error.issues) errs[issue.path[0] as keyof FormState] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const d = r.data;
    const text = `Hello Digi Turtles!\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || "-"}\nInterested in: ${d.interest}\n\n${d.message ?? ""}`;
    window.open(`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    window.setTimeout(() => {
      setSending(false);
      toast.success("Thank you! Our team will get back to you shortly.");
      setForm({ name: "", email: "", phone: "", interest: "", message: "" });
    }, 900);
  };

  const field = "w-full rounded-xl border border-input bg-card/80 px-4 py-3 text-sm outline-none transition-all focus:border-turquoise focus:shadow-glow";

  return (
    <>
      <PageHeader
        crumb="Contact Us"
        eyebrow="Get In Touch"
        title="Let's Build Something"
        highlight="Extraordinary."
        description="Want to learn a new skill or grow your business? Tell us where you are — we'll guide your next step."
      />
      <section className="section-ice py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {INFO.map((i, idx) => (
              <Reveal key={i.label} delay={idx * 0.06}>
                <TiltCard className="rounded-2xl" max={5}>
                  <div className="glass-light flex items-center gap-4 rounded-2xl p-5">
                    <span className="icon-3d h-12 w-12 shrink-0">
                      <i.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs tracking-widest text-muted-foreground uppercase">{i.label}</p>
                      {i.href ? (
                        <a href={i.href} className="font-display font-semibold hover:text-abyss-2">
                          {i.value}
                        </a>
                      ) : (
                        <p className="font-display font-semibold">{i.value}</p>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} noValidate className="glass-light glow-border rounded-3xl p-6 md:p-10">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We usually reply within one working day.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" error={errors.name}>
                  <input className={cn(field, errors.name && "border-destructive")} value={form.name} onChange={set("name")} placeholder="Your name" maxLength={80} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" className={cn(field, errors.email && "border-destructive")} value={form.email} onChange={set("email")} placeholder="you@email.com" maxLength={120} />
                </Field>
                <Field label="Phone (optional)" error={errors.phone}>
                  <input className={cn(field, errors.phone && "border-destructive")} value={form.phone} onChange={set("phone")} placeholder="+92 ..." maxLength={20} />
                </Field>
                <Field label="I'm interested in" error={errors.interest}>
                  <select className={cn(field, errors.interest && "border-destructive")} value={form.interest} onChange={set("interest")}>
                    <option value="">Choose an option</option>
                    <optgroup label="Agency services">
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Courses">
                      {COURSES.map((c) => (
                        <option key={c.title} value={c.title}>{c.title} course</option>
                      ))}
                    </optgroup>
                  </select>
                </Field>
                <Field label="Message" error={errors.message} className="sm:col-span-2">
                  <textarea rows={5} className={cn(field, "resize-none", errors.message && "border-destructive")} value={form.message} onChange={set("message")} placeholder="Tell us about your goals..." maxLength={1000} />
                </Field>
              </div>
              <Button type="submit" variant="navy" size="xl" className="mt-8" disabled={sending}>
                {sending ? "Sending..." : "Send Message"} <Send />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
      <FaqSection />
    </>
  );
}

function Field({ label, error, className, children }: { label: string; error?: string | undefined; className?: string; children: React.ReactNode }) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block font-display text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

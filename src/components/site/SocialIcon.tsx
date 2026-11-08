import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const MAP = { instagram: Instagram, linkedin: Linkedin, youtube: Youtube, facebook: Facebook, twitter: Twitter };

export function SocialIcon({ name, className }: { name: keyof typeof MAP; className?: string }) {
  const Icon = MAP[name];
  return <Icon className={className} />;
}

import { Link } from "react-router-dom";
import { Code2, Link2, Share2 } from "lucide-react";
import { APP_CONFIG, SOCIAL_LINKS } from "@/constants/appConfig";
import { FOOTER_LINKS } from "@/constants/routes";
import { Container } from "@/components/ui/Container";

const socialIcons = {
  twitter: Share2,
  linkedin: Link2,
  github: Code2,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 section-padding">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              to="/"
              className="font-display text-xl font-bold text-foreground"
            >
              {/* {APP_CONFIG.name} */}
              <img src="https://touchsky.in/img/Logo.png" alt="Touch Sky" />
            </Link>
            <p className="mt-4 text-sm text-text-secondary">
              {APP_CONFIG.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-secondary transition-all hover:border-primary hover:text-primary hover:shadow-glow"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>{APP_CONFIG.email}</li>
              <li>{APP_CONFIG.phone}</li>
              <li>{APP_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-text-secondary">
            © {APP_CONFIG.year} {APP_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

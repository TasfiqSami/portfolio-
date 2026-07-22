import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { LogoTA } from "./LogoTA";
import { site, nav } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2" aria-label="Home">
              <LogoTA className="h-8 w-8" />
              <span className="font-display text-sm font-bold tracking-wider">
                {site.name.toUpperCase()}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Building digital solutions that create real impact.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <FooterCol title="Navigation">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {["Web Development", "Backend Systems", "Minecraft Networks", "System Administration", "API Development"].map(
              (s) => (
                <li key={s} className="text-sm text-muted-foreground">
                  {s}
                </li>
              ),
            )}
          </FooterCol>

          <FooterCol title="Contact">
            <li className="text-sm text-muted-foreground">{site.email}</li>
            <li className="text-sm text-muted-foreground">{site.location}</li>
            <li className="text-sm text-muted-foreground">{site.phone}</li>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-primary" aria-hidden /> by {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2" role="list">
        {children}
      </ul>
    </div>
  );
}

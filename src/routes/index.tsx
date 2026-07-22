import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import { site, projects } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";
import { HeroOrb } from "@/components/HeroOrb";
import { StatCounter } from "@/components/StatCounter";
import { Reveal, Stagger, StaggerItem } from "@/components/SectionReveal";
import resume from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tasfiq Ahmed — Software Engineer & Minecraft Network Developer" },
      {
        name: "description",
        content:
          "Portfolio of Tasfiq Ahmed, a full-stack developer building scalable web apps and Minecraft networks.",
      },
      { property: "og:title", content: "Tasfiq Ahmed — Portfolio" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for work
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                Hi, I'm
                <br />
                <span className="text-gradient">Tasfiq Ahmed</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 font-display text-lg font-medium text-muted-foreground sm:text-xl">
                {site.title}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base text-muted-foreground">{site.tagline}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/contact">
                  <MagneticButton variant="primary">
                    Hire Me
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </MagneticButton>
                </Link>
                <MagneticButton
                  as="a"
                  href={resume.url}
                  download="Tasfiq_Ahmed_Resume.pdf"
                  variant="outline"
                >
                  Download CV
                  <Download className="h-4 w-4" aria-hidden />
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex items-center gap-3 text-muted-foreground">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary/60 hover:text-primary"
                >
                  <Github className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary/60 hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Email"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary/60 hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <HeroOrb />
          </Reveal>
        </div>

        <Stagger className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {site.stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="glass-panel rounded-2xl p-6">
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Featured work teaser */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Selected work</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            View all <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <StaggerItem key={p.title}>
              <article className="glass-panel group h-full overflow-hidden rounded-3xl p-1 transition-transform hover:-translate-y-1">
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}
                >
                  <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(60% 60% at 50% 40%, oklch(1 0 0 / 0.2), transparent)" }} />
                  <div className="absolute bottom-3 left-3 rounded-full bg-background/60 px-3 py-1 text-xs backdrop-blur">
                    {p.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "var(--gradient-radial)" }}
            />
            <Sparkles className="mx-auto h-6 w-6 text-primary" aria-hidden />
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              I'm currently taking on freelance and full-time opportunities. Let's build something great.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact">
                <MagneticButton variant="primary">
                  Get in touch <ArrowRight className="h-4 w-4" aria-hidden />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

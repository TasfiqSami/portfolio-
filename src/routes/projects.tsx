import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "@/components/SectionReveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tasfiq Ahmed" },
      {
        name: "description",
        content:
          "Selected projects — Minecraft networks, e-commerce platforms, backend APIs, infrastructure tooling.",
      },
      { property: "og:title", content: "Projects — Tasfiq Ahmed" },
      {
        property: "og:description",
        content: "A tour of the systems Tasfiq Ahmed has designed and shipped.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const filters: (ProjectCategory | "All")[] = ["All", "Web", "Minecraft", "Backend", "Infrastructure", "Tools"];

function Projects() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = useMemo(() => (f === "All" ? projects : projects.filter((p) => p.category === f)), [f]);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <p className="text-xs uppercase tracking-widest text-primary">Projects</p>
      <Reveal>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Selected <span className="text-gradient">work</span>
        </h1>
      </Reveal>

      <Reveal>
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((x) => (
            <button
              key={x}
              type="button"
              onClick={() => setF(x)}
              className={`min-h-9 rounded-full border px-4 py-1.5 text-xs transition-colors ${
                f === x
                  ? "border-primary/60 bg-primary/15 text-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {x}
            </button>
          ))}
        </div>
      </Reveal>

      <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
        {list.map((p) => (
          <StaggerItem key={p.title}>
            <article className="glass-panel group h-full overflow-hidden rounded-3xl p-1 transition-transform hover:-translate-y-1">
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: "radial-gradient(60% 60% at 50% 40%, oklch(1 0 0 / 0.2), transparent)" }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div
                    className="h-40 w-40 rounded-full"
                    style={{ background: "radial-gradient(circle, oklch(1 0 0 / 0.15), transparent 60%)" }}
                  />
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-background/60 px-3 py-1 text-xs backdrop-blur">
                  {p.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                  <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    {p.github && (
                      <a
                        href={p.github}
                        aria-label={`${p.title} on GitHub`}
                        className="grid h-9 w-9 place-items-center rounded-full border border-border"
                      >
                        <Github className="h-4 w-4" aria-hidden />
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        aria-label={`${p.title} live demo`}
                        className="grid h-9 w-9 place-items-center rounded-full border border-border"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
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
    </div>
  );
}

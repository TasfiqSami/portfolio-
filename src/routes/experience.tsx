import { createFileRoute } from "@tanstack/react-router";
import { experience } from "@/data/site";
import { Reveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Tasfiq Ahmed" },
      {
        name: "description",
        content: "Professional experience across freelance engineering, Minecraft networks, and system administration.",
      },
      { property: "og:title", content: "Experience — Tasfiq Ahmed" },
      { property: "og:description", content: "Roles, responsibilities, and outcomes." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <p className="text-xs uppercase tracking-widest text-primary">Experience</p>
      <Reveal>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          A <span className="text-gradient">record</span> of shipping.
        </h1>
      </Reveal>

      <div className="relative mt-14">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border sm:left-4" aria-hidden />
        <ul className="space-y-6" role="list">
          {experience.map((e) => (
            <li key={e.role}>
              <Reveal>
                <div className="relative pl-10 sm:pl-14">
                  <span className="absolute left-0 top-4 h-6 w-6 rounded-full border-2 border-primary bg-background ring-4 ring-background sm:left-1 sm:h-8 sm:w-8" />
                  <article className="glass-panel rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2 className="font-display text-xl font-semibold">{e.role}</h2>
                      <span className="text-xs text-muted-foreground">{e.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-primary">{e.company}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground" role="list">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { skillCategories } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "@/components/SectionReveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Tasfiq Ahmed" },
      {
        name: "description",
        content:
          "Technologies Tasfiq Ahmed works with — languages, frontend, backend, databases, cloud, Minecraft, and tools.",
      },
      { property: "og:title", content: "Skills — Tasfiq Ahmed" },
      {
        property: "og:description",
        content: "Full stack, backend, infrastructure, and Minecraft engineering expertise.",
      },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

function Skills() {
  const [active, setActive] = useState<string>("all");
  const visible =
    active === "all"
      ? skillCategories.flatMap((c) => c.skills.map((s) => ({ ...s, category: c.label })))
      : skillCategories
          .find((c) => c.id === active)!
          .skills.map((s) => ({ ...s, category: skillCategories.find((c) => c.id === active)!.label }));

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <p className="text-xs uppercase tracking-widest text-primary">Skills</p>
      <Reveal>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Technologies I <span className="text-gradient">work with</span>
        </h1>
      </Reveal>

      <Reveal>
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          <FilterChip active={active === "all"} onClick={() => setActive("all")}>
            All
          </FilterChip>
          {skillCategories.map((c) => (
            <FilterChip key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
              {c.label}
            </FilterChip>
          ))}
        </div>
      </Reveal>

      <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => (
          <StaggerItem key={`${s.category}-${s.name}`}>
            <div className="glass-panel group flex items-center justify-between rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40">
              <div>
                <p className="font-display text-base font-semibold">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.category}</p>
              </div>
              <span
                className={`rounded-full border px-2.5 py-1 text-[11px] ${
                  s.level === "Expert"
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : s.level === "Advanced"
                      ? "border-border bg-surface/60 text-foreground"
                      : "border-border text-muted-foreground"
                }`}
              >
                {s.level}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="tab"
      aria-selected={active}
      className={`min-h-9 rounded-full border px-4 py-1.5 text-xs transition-colors ${
        active
          ? "border-primary/60 bg-primary/15 text-foreground"
          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Code2, Shield, Zap, Cpu } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/SectionReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tasfiq Ahmed" },
      {
        name: "description",
        content:
          "Passionate software engineer with deep experience in full-stack development, system administration, and Minecraft network engineering.",
      },
      { property: "og:title", content: "About Tasfiq Ahmed" },
      {
        property: "og:description",
        content: "The journey, focus, and craft behind Tasfiq Ahmed's engineering work.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Code2, title: "Clean & efficient code", body: "Readable, tested, and easy to hand off." },
  { icon: Zap, title: "Performance focused", body: "Fast by default — measured, not guessed." },
  { icon: Shield, title: "Scalable architecture", body: "Systems that grow without falling over." },
  { icon: Cpu, title: "User experience driven", body: "Craft that respects the person on the other side." },
];

const journey = [
  { year: "2020", title: "Started building Minecraft plugins", body: "Java, Paper, and a whole lot of curiosity." },
  { year: "2021", title: "Went full-time freelance", body: "Shipping web apps and running production servers for clients worldwide." },
  { year: "2023", title: "Scaled network infrastructure", body: "Operating multi-node Minecraft networks for thousands of concurrent players." },
  { year: "2025", title: "Focused on product engineering", body: "End-to-end web platforms, payments, and developer tooling." },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <p className="text-xs uppercase tracking-widest text-primary">About</p>
      <Reveal>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Building digital solutions
          <br />
          that make an <span className="text-gradient">impact</span>.
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="glass-panel rounded-3xl p-6">
            <div className="flex items-center gap-2 border-b border-border pb-3 text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
              <span className="ml-3">developer.ts</span>
            </div>
            <pre className="mt-4 overflow-x-auto text-xs leading-6 text-muted-foreground sm:text-sm">
{`const developer = {
  name: "Tasfiq Ahmed",
  roles: [
    "Software Engineer",
    "Minecraft Network Developer",
    "System Administrator",
  ],
  focus: "Clean code, performance, integration",
  goal: "Make complex things simple",
};

console.log(developer);`}
            </pre>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-base text-muted-foreground">
              I'm a passionate developer and problem solver who loves building modern, efficient, and
              secure digital solutions. From web platforms to Minecraft networks, I turn ideas into
              reality.
            </p>
          </Reveal>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass-panel rounded-2xl p-4">
                  <v.icon className="h-5 w-5 text-primary" aria-hidden />
                  <p className="mt-2 font-medium">{v.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      <div className="mt-24">
        <p className="text-xs uppercase tracking-widest text-primary">Journey</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">A short timeline</h2>
        <div className="relative mt-10">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border sm:left-4" aria-hidden />
          <ul className="space-y-6" role="list">
            {journey.map((j) => (
              <li key={j.year}>
                <Reveal>
                  <div className="relative pl-10 sm:pl-14">
                    <span className="absolute left-0 top-2 grid h-6 w-6 place-items-center rounded-full bg-primary/20 text-[10px] font-semibold text-primary ring-4 ring-background sm:left-1 sm:h-8 sm:w-8 sm:text-xs">
                      {j.year.slice(2)}
                    </span>
                    <div className="glass-panel rounded-2xl p-5">
                      <p className="text-xs text-muted-foreground">{j.year}</p>
                      <h3 className="mt-1 font-display text-lg font-semibold">{j.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{j.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

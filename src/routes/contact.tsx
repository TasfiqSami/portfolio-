import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Check, Loader2 } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tasfiq Ahmed" },
      {
        name: "description",
        content: "Get in touch with Tasfiq Ahmed for freelance projects, collaboration, or a chat.",
      },
      { property: "og:title", content: "Contact — Tasfiq Ahmed" },
      { property: "og:description", content: "Freelance projects, collaborations, and hello messages welcome." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});
type FormValues = z.infer<typeof schema>;

function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (v: FormValues) => {
    setState("sending");
    const subject = encodeURIComponent(`New message from ${v.name}`);
    const body = encodeURIComponent(`${v.message}\n\n— ${v.name}\n${v.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setState("sent");
      reset();
      setTimeout(() => setState("idle"), 3500);
    }, 600);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <p className="text-xs uppercase tracking-widest text-primary">Contact</p>
      <Reveal>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Let's work <span className="text-gradient">together</span>
        </h1>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Have a project in mind or want to work together? I'd love to hear from you.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="glass-panel h-full rounded-3xl p-8">
            <h2 className="font-display text-lg font-semibold">Contact information</h2>
            <ul className="mt-6 space-y-4 text-sm" role="list">
              <InfoRow icon={<Mail className="h-4 w-4" aria-hidden />} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <InfoRow icon={<MapPin className="h-4 w-4" aria-hidden />} label="Location" value={site.location} />
              <InfoRow icon={<Phone className="h-4 w-4" aria-hidden />} label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} />
            </ul>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary/60 hover:text-primary"
                >
                  <Github className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary/60 hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="glass-panel rounded-3xl p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className="w-full min-h-11 rounded-xl border border-border bg-surface/40 px-4 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className="w-full min-h-11 rounded-xl border border-border bg-surface/40 px-4 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                  placeholder="you@example.com"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  rows={6}
                  {...register("message")}
                  className="w-full rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell me about your project…"
                />
              </Field>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                I'll open your email client to send the message.
              </p>
              <MagneticButton type="submit" variant="primary" disabled={state === "sending"}>
                {state === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending
                  </>
                ) : state === "sent" ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden /> Sent
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" aria-hidden />
                  </>
                )}
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="hover:text-primary">{inner}</a> : inner}</li>;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

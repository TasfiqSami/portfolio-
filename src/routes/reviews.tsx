import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { reviews } from "@/data/site";
import { Reveal } from "@/components/SectionReveal";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Tasfiq Ahmed" },
      {
        name: "description",
        content: "What clients and collaborators say about working with Tasfiq Ahmed.",
      },
      { property: "og:title", content: "Reviews — Tasfiq Ahmed" },
      { property: "og:description", content: "Testimonials from clients and collaborators." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  const [i, setI] = useState(0);
  const total = reviews.length;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);
  const r = reviews[i];

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <p className="text-xs uppercase tracking-widest text-primary">Reviews</p>
      <Reveal>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Kind words from <span className="text-gradient">clients</span>
        </h1>
      </Reveal>

      <div className="relative mt-14">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-14">
          <Quote
            className="absolute right-8 top-8 h-16 w-16 text-primary/15 sm:h-24 sm:w-24"
            aria-hidden
          />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" aria-hidden />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">
                "{r.quote}"
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div
                  className="grid h-12 w-12 place-items-center rounded-full font-display text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                  aria-hidden
                >
                  {r.name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-1.5" role="tablist" aria-label="Reviews">
            {reviews.map((_, k) => (
              <button
                key={k}
                type="button"
                aria-label={`Show review ${k + 1}`}
                aria-selected={k === i}
                role="tab"
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-primary" : "w-3 bg-border"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary/60 hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary/60 hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

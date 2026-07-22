import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { LogoTA } from "./LogoTA";
import { nav, site } from "@/data/site";
import resume from "@/assets/resume.pdf.asset.json";

export function FloatingNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -90 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className={`glass-panel flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-shadow ${
          scrolled ? "shadow-[0_10px_40px_-10px_oklch(0.1_0_0/0.6)]" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2 rounded-full px-2 py-1" aria-label="Home">
          <LogoTA className="h-7 w-7" />
          <span className="hidden font-display text-sm font-bold tracking-wider sm:inline">
            {site.name.toUpperCase()}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/15 ring-1 ring-inset ring-primary/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resume.url}
            download="Tasfiq_Ahmed_Resume.pdf"
            data-magnetic
            className="hidden min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.65_0.2_258/0.7)] transition-shadow hover:shadow-[0_12px_40px_-8px_oklch(0.65_0.2_258/0.9)] sm:inline-flex"
          >
            Download CV
            <Download className="h-4 w-4" aria-hidden />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-panel absolute left-4 right-4 top-20 rounded-3xl p-4 lg:hidden"
          >
            <ul className="flex flex-col" role="list">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground data-[status=active]:text-foreground"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={resume.url}
                  download="Tasfiq_Ahmed_Resume.pdf"
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                >
                  Download CV <Download className="h-4 w-4" aria-hidden />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

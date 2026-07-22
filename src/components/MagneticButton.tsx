import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  variant = "primary",
  className,
  children,
  as = "button",
  href,
  download,
  target,
  rel,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate3d(${x * 0.18}px, ${y * 0.25}px, 0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
    "transition-[background,color,box-shadow] duration-300 will-change-transform",
    "min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary" &&
      "bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.65_0.2_258/0.6)] hover:shadow-[0_20px_60px_-10px_oklch(0.65_0.2_258/0.8)]",
    variant === "outline" &&
      "border border-border bg-transparent text-foreground hover:border-primary/60 hover:bg-primary/5",
    variant === "ghost" && "text-muted-foreground hover:text-foreground",
    className,
  );

  if (as === "a") {
    return (
      <a
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        data-magnetic
        className={base}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-magnetic
      className={base}
      {...rest}
    >
      {children}
    </button>
  );
}

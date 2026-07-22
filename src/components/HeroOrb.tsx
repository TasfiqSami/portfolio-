import { LogoTA } from "./LogoTA";

export function HeroOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full opacity-70"
        style={{ background: "radial-gradient(circle at center, oklch(0.55 0.24 262 / 0.35), transparent 60%)" }}
      />
      {/* rings */}
      <div className="absolute inset-6 rounded-full border border-primary/20 animate-spin-slow" />
      <div
        className="absolute inset-16 rounded-full border border-primary/15"
        style={{ animation: "spin-slow 45s linear reverse infinite" }}
      />
      <div className="absolute inset-24 rounded-full border border-primary/10" />

      {/* orbiting dots */}
      <div className="absolute inset-6 animate-spin-slow" aria-hidden>
        <span className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_18px_oklch(0.72_0.18_258/0.9)]" />
      </div>
      <div
        className="absolute inset-16"
        style={{ animation: "spin-slow 20s linear infinite" }}
        aria-hidden
      >
        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_oklch(0.65_0.2_258/0.9)]" />
      </div>

      {/* logo */}
      <div className="absolute inset-0 grid place-items-center animate-float">
        <LogoTA className="w-1/2" glow />
      </div>

      {/* particles */}
      <svg aria-hidden className="absolute inset-0 h-full w-full">
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = (i / 18) * Math.PI * 2;
          const r = 45 + (i % 3) * 4;
          const cx = (50 + Math.cos(angle) * r).toFixed(3);
          const cy = (50 + Math.sin(angle) * r).toFixed(3);
          return (
            <circle
              key={i}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={i % 2 === 0 ? 1 : 1.5}
              fill="oklch(0.72 0.18 258)"
              opacity={0.6}
            />
          );
        })}
      </svg>
    </div>
  );
}

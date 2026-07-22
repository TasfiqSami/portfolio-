interface Props {
  className?: string;
  glow?: boolean;
  title?: string;
}

export function LogoTA({ className, glow = false, title = "TA logo" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
      style={glow ? { filter: "drop-shadow(0 0 12px oklch(0.65 0.2 258 / 0.6))" } : undefined}
    >
      <defs>
        <linearGradient id="ta-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.18 258)" />
          <stop offset="100%" stopColor="oklch(0.55 0.24 262)" />
        </linearGradient>
      </defs>
      {/* T */}
      <path
        d="M18 22 L60 22 L56 30 L46 30 L46 70 L38 78 L38 30 L22 30 Z"
        fill="url(#ta-grad)"
      />
      {/* A */}
      <path
        d="M58 78 L70 30 L82 78 L74 78 L72 68 L64 68 L62 78 Z M66 60 L70 44 L74 60 Z"
        fill="url(#ta-grad)"
      />
    </svg>
  );
}

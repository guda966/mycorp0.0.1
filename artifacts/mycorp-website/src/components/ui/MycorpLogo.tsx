interface MycorpLogoProps {
  size?: number;
  variant?: "icon" | "full" | "full-stacked";
  className?: string;
  dark?: boolean;
}

export function MycorpLogo({ size = 36, variant = "icon", className = "", dark = false }: MycorpLogoProps) {
  const id = `mcg-${size}`;
  const textColor = dark ? "#ffffff" : "#0F172A";
  const mutedColor = dark ? "rgba(148,163,184,0.9)" : "#64748B";

  const Icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MyCorp Solutions logo"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="55%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#67E8F9" stopOpacity="0" />
          <stop offset="50%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background rounded square */}
      <rect width="40" height="40" rx="10" fill={`url(#${id}-bg)`} />

      {/* Subtle inner glow */}
      <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.05" />

      {/* M letterform — two rising peaks like talent growth, connected by valley */}
      <path
        d="M8 29 L8 13 L20 23 L32 13 L32 29"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Cyan node dots at peaks — suggest network/tech nodes */}
      <circle cx="8" cy="13" r="2.2" fill="#67E8F9" />
      <circle cx="32" cy="13" r="2.2" fill="#67E8F9" />

      {/* Small center valley dot */}
      <circle cx="20" cy="23" r="1.4" fill="rgba(255,255,255,0.55)" />

      {/* Tech accent bar at base — horizontal line = technology */}
      <rect x="8" y="30.5" width="24" height="1.5" rx="0.75" fill={`url(#${id}-accent)`} />
    </svg>
  );

  if (variant === "icon") return <span className={className}>{Icon}</span>;

  if (variant === "full") {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        {Icon}
        <span>
          <span className="font-display font-bold text-xl leading-none tracking-tight" style={{ color: textColor }}>
            MyCorp
            <span style={{ color: "#0EA5E9" }}>.</span>
          </span>
        </span>
      </span>
    );
  }

  if (variant === "full-stacked") {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        {Icon}
        <span className="flex flex-col">
          <span className="font-display font-bold text-xl leading-tight tracking-tight" style={{ color: textColor }}>
            MyCorp<span style={{ color: "#0EA5E9" }}>.</span>
          </span>
          <span className="text-[10px] font-medium tracking-wide uppercase leading-none mt-0.5" style={{ color: mutedColor }}>
            Empowering Talent &amp; Technology
          </span>
        </span>
      </span>
    );
  }

  return <span className={className}>{Icon}</span>;
}

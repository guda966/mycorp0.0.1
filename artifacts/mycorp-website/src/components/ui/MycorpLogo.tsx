interface MycorpLogoProps {
  size?: number;
  variant?: "icon" | "full" | "full-stacked";
  className?: string;
  dark?: boolean;
}

function SvgIcon({ size }: { size: number }) {
  const id = `mcg-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
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
      <rect width="40" height="40" rx="10" fill={`url(#${id}-bg)`} />
      <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.05" />
      <path d="M8 29 L8 13 L20 23 L32 13 L32 29" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="8" cy="13" r="2.2" fill="#67E8F9" />
      <circle cx="32" cy="13" r="2.2" fill="#67E8F9" />
      <circle cx="20" cy="23" r="1.4" fill="rgba(255,255,255,0.55)" />
      <rect x="8" y="30.5" width="24" height="1.5" rx="0.75" fill={`url(#${id}-accent)`} />
    </svg>
  );
}

export function MycorpLogo({ variant = "icon", className = "", dark = false }: MycorpLogoProps) {
  if (variant === "icon") {
    return (
      <span className={className}>
        <SvgIcon size={38} />
      </span>
    );
  }

  if (dark) {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <SvgIcon size={38} />
        <span className="flex flex-col">
          <span className="font-display font-bold text-xl leading-tight tracking-tight text-white">
            MyCorp<span style={{ color: "#0EA5E9" }}>.</span>
          </span>
          <span className="text-[9px] font-semibold tracking-widest uppercase text-slate-400 leading-none mt-0.5">
            Empowering Talent &amp; Technology
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-col items-start ${className}`}>
      <img
        src="/mycorp-logo.png"
        alt="MyCorp Solutions – Empowering Talent & Technology"
        className="h-14 md:h-16 w-auto object-contain"
        draggable={false}
      />
      {variant === "full-stacked" && (
        <span className="text-[9px] font-semibold tracking-widest uppercase text-slate-400 leading-none pl-px">
          Empowering Talent &amp; Technology
        </span>
      )}
    </span>
  );
}

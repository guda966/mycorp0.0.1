interface MycorpLogoProps {
  className?: string;
  height?: number;
}

export function MycorpLogo({ className = "", height = 52 }: MycorpLogoProps) {
  return (
    <img
      src="/mycorp-logo.png"
      alt="MyCorp Solutions"
      style={{ height, width: "auto", objectFit: "contain" }}
      className={className}
      draggable={false}
    />
  );
}

interface MycorpLogoProps {
  className?: string;
}

export function MycorpLogo({ className = "" }: MycorpLogoProps) {
  return (
    <img
      src="/mycorp-logo.png"
      alt="MyCorp Solutions"
      className={className}
      style={{
        height: 52,
        width: "auto",
        display: "block",
      }}
      draggable={false}
    />
  );
}

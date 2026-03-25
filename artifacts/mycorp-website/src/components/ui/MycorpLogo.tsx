interface MycorpLogoProps {
  className?: string;
}

export function MycorpLogo({ className = "" }: MycorpLogoProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 210,
        height: 72,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <img
        src="/mycorp-logo.png"
        alt="MyCorp Solutions"
        style={{ height: 320, width: "auto", flexShrink: 0 }}
        draggable={false}
      />
    </span>
  );
}

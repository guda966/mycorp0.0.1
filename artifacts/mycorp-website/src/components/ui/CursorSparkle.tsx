import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  radius: number;
  hue: number;
}

export function CursorSparkle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>();
  const prevPos = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - prevPos.current.x;
      const dy = e.clientY - prevPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 4) return;
      prevPos.current = { x: e.clientX, y: e.clientY };

      const count = Math.min(5, 2 + Math.floor(dist / 12));
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.3;
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed * 0.6,
          vy: Math.sin(angle) * speed - 0.8,
          life: 0,
          maxLife: 30 + Math.random() * 20,
          radius: Math.random() * 3.5 + 2,
          hue: 190 + Math.random() * 40,
        });
      }
      if (particlesRef.current.length > 200) {
        particlesRef.current = particlesRef.current.slice(-200);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);

      for (const p of particlesRef.current) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;

        const t = p.life / p.maxLife;
        const opacity = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;

        const glowR = p.radius * 3.5;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        grad.addColorStop(0, `hsla(${p.hue}, 90%, 65%, ${opacity * 0.9})`);
        grad.addColorStop(0.4, `hsla(${p.hue}, 80%, 55%, ${opacity * 0.5})`);
        grad.addColorStop(1, `hsla(${p.hue}, 70%, 45%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (1 - t * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue - 10}, 100%, 80%, ${opacity * 0.85})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 dark:hidden"
      style={{ zIndex: 9999 }}
    />
  );
}

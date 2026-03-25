import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  rotation: number;
  rotSpeed: number;
}

const COLORS = ["#06b6d4", "#3b82f6", "#f59e0b", "#10b981", "#a855f7", "#f43f5e"];

export function CursorSparkle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>();
  const lastPos = useRef({ x: 0, y: 0 });

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

    const spawnParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed * 0.8,
          vy: Math.sin(angle) * speed - 1.2,
          life: 0,
          maxLife: 35 + Math.random() * 25,
          size: Math.random() * 5 + 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.25,
        });
      }
      if (particlesRef.current.length > 300) {
        particlesRef.current = particlesRef.current.slice(-300);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      lastPos.current = { x: e.clientX, y: e.clientY };
      if (dist > 3) {
        spawnParticles(e.clientX, e.clientY, Math.min(4, Math.ceil(dist / 8)));
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const drawStar = (ctx: CanvasRenderingContext2D, size: number) => {
      const points = 4;
      const outerR = size;
      const innerR = size * 0.35;
      ctx.beginPath();
      for (let i = 0; i < points * 2; i++) {
        const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
        const r = i % 2 === 0 ? outerR : innerR;
        if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
        else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);

      for (const p of particlesRef.current) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.rotation += p.rotSpeed;

        const t = p.life / p.maxLife;
        const opacity = t < 0.2 ? t / 0.2 : 1 - (t - 0.2) / 0.8;
        const scale = 1 - t * 0.5;

        ctx.save();
        ctx.globalAlpha = opacity * 0.9;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(scale, scale);

        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fillStyle = p.color;
        drawStar(ctx, p.size);
        ctx.fill();

        ctx.restore();
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

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
}

export function CursorSparkle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>();
  const lastPos = useRef({ x: -999, y: -999 });

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
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      if (dx * dx + dy * dy < 16) return;
      lastPos.current = { x: e.clientX, y: e.clientY };

      dotsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 0,
        maxLife: 28 + Math.random() * 10,
        size: Math.random() * 3 + 2,
      });

      if (dotsRef.current.length > 80) {
        dotsRef.current = dotsRef.current.slice(-80);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current = dotsRef.current.filter((d) => d.life < d.maxLife);

      for (const d of dotsRef.current) {
        d.life++;
        const t = d.life / d.maxLife;
        const opacity = (1 - t) * 0.55;

        const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.size * 2);
        grad.addColorStop(0, `rgba(6, 182, 212, ${opacity})`);
        grad.addColorStop(1, `rgba(59, 130, 246, 0)`);

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size * 2 * (1 - t * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = grad;
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

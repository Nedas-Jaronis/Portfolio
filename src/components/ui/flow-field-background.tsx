import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlowFieldBackgroundProps {
  className?: string;
  /**
   * Color of the particles in hex format.
   * Default: "#0ea5e9" (cyan matching primary)
   */
  color?: string;
  /**
   * The opacity of the trails (0.0 to 1.0).
   * Lower = longer trails. Higher = shorter trails.
   * Default: 0.08
   */
  trailOpacity?: number;
  /**
   * Number of particles. Default: 400
   */
  particleCount?: number;
  /**
   * Speed multiplier. Default: 0.4
   */
  speed?: number;
  /**
   * Target FPS for the animation. Default: 24
   */
  targetFps?: number;
}

export default function FlowFieldBackground({
  className,
  color = "#0ea5e9",
  trailOpacity = 0.08,
  particleCount = 400,
  speed = 0.4,
  targetFps = 24,
}: FlowFieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    let lastFrameTime = 0;
    const frameInterval = 1000 / targetFps;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      age: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 300 + 150;
      }

      update() {
        // Flow field angle based on position
        const angle =
          (Math.cos(this.x * 0.004) + Math.sin(this.y * 0.004)) * Math.PI;

        // Add force from flow field
        this.vx += Math.cos(angle) * 0.15 * speed;
        this.vy += Math.sin(angle) * 0.15 * speed;

        // Mouse repulsion
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 120;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          this.vx -= dx * force * 0.03;
          this.vy -= dy * force * 0.03;
        }

        // Apply velocity with friction
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.96;
        this.vy *= 0.96;

        // Aging
        this.age++;
        if (this.age > this.life) {
          this.reset();
        }

        // Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 300 + 150;
      }

      draw(context: CanvasRenderingContext2D) {
        // Fade in and out based on age
        const alpha = 1 - Math.abs(this.age / this.life - 0.5) * 2;
        context.globalAlpha = alpha * 0.8;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, 1.5, 1.5);
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // FPS throttling
      const elapsed = currentTime - lastFrameTime;
      if (elapsed < frameInterval) return;
      lastFrameTime = currentTime - (elapsed % frameInterval);

      // Dark navy background fade for trails (matches theme --background)
      ctx.fillStyle = `rgba(7, 11, 20, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    init();
    animationFrameId = requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, trailOpacity, particleCount, speed, targetFps]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      style={{ backgroundColor: "hsl(222 47% 5%)" }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

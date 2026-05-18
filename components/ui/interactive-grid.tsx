"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
}

interface InteractiveGridProps {
  dotDistance?: number;
  dotRadius?: number;
  minProximity?: number;
}

export function InteractiveGrid({
  dotDistance = 32,
  dotRadius = 1.2,
  minProximity = 180,
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame: number;

    const mouse = {
      x: -9999,
      y: -9999,
    };

    const dots: Dot[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      dots.length = 0;

      for (let x = 0; x < canvas.width; x += dotDistance) {
        for (let y = 0; y < canvas.height; y += dotDistance) {
          dots.push({ x, y });
        }
      }
    };

    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < minProximity) {
          const opacity = 1 - dist / minProximity;

          ctx.fillStyle = `rgba(200,255,0,${opacity * 0.9})`;

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = `rgba(200,255,0,${opacity * 0.12})`;

          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        } else {
          ctx.fillStyle = "rgba(255,255,255,0.08)";

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("resize", resizeCanvas);
    };
  }, [dotDistance, dotRadius, minProximity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
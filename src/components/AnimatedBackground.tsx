'use client';

import { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 80;
    const connectionDistanceThreshold = 100;
    const cursorDistanceThreshold = 150;

    // Resize canvas to match screen size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const colors = ['#3B82F6', '#14B8A6']; // Blue and Teal

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 1; // 1px to 3px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const alpha = Math.random() * 0.4 + 0.2; // opacity 0.2 to 0.6

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4, // slow speed
          vy: (Math.random() - 0.5) * 0.4,
          radius,
          color,
          alpha,
        });
      }
    };

    // Mouse interaction event listeners
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      cursorRef.current.x = null;
      cursorRef.current.y = null;
    };

    // Set up listeners
    window.addEventListener('resize', resizeCanvas);
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }

    // Initialize dimensions
    resizeCanvas();

    // Hex to RGBA helper
    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Main animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(p.color, p.alpha);
        ctx.fill();
      });

      // 2. Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistanceThreshold) {
            // Faint lines, opacity decays with distance
            const lineAlpha = (1 - dist / connectionDistanceThreshold) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${lineAlpha})`; // Teal faint lines
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Draw connection lines to mouse cursor
      const cursor = cursorRef.current;
      if (!isMobile && cursor.x !== null && cursor.y !== null) {
        particles.forEach((p) => {
          const dx = p.x - cursor.x!;
          const dy = p.y - cursor.y!;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cursorDistanceThreshold) {
            const lineAlpha = (1 - dist / cursorDistanceThreshold) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(cursor.x!, cursor.y!);
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`; // Blue cursor connection lines
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start loop
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="animatedBackground">
      <canvas ref={canvasRef} className="canvas" />
    </div>
  );
}

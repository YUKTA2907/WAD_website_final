import React, { useEffect, useRef } from 'react';

export default function BackgroundAnimation({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate circuit particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 25000), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const nodeColor = isDark ? '0, 240, 255' : '14, 165, 233';
      const lineColor = isDark ? '59, 130, 246' : '99, 102, 241';

      // Draw connecting circuit traces
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * (isDark ? 0.15 : 0.08);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            // Draw 90-degree circuit-like path
            if (i % 2 === 0) {
              ctx.lineTo(particles[i].x, particles[j].y);
            }
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${p.alpha * (isDark ? 0.7 : 0.4)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle radial ambient glows */}
      <div
        className={`absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-300/20'
        }`}
      />
      <div
        className={`absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-300/20'
        }`}
      />
      <div
        className={`absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[160px] pointer-events-none transition-opacity duration-700 ${
          isDark ? 'bg-purple-600/10' : 'bg-purple-300/15'
        }`}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
}

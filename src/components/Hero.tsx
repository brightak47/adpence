"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Terminal, Cpu, Network, ShieldCheck } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes for abstract AI network
    const particleCount = Math.min(Math.floor(width / 22), 65);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Stream pulses traveling along connections
    interface Pulse {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }
    const pulses: Pulse[] = [];

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        const dynamicAlpha = p.alpha + Math.sin(time * 2 + i) * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 140, 255, ${Math.max(0.1, dynamicAlpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(139, 92, 246, 0.4)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Connect nearby particles with lines
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Occasionally spawn a pulse
            if (Math.random() < 0.0008 && pulses.length < 8) {
              pulses.push({
                fromIndex: i,
                toIndex: j,
                progress: 0,
                speed: 0.012 + Math.random() * 0.015,
              });
            }
          }
        }
      }

      // Render traveling data stream pulses
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pulse = pulses[k];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(k, 1);
          continue;
        }

        const pA = particles[pulse.fromIndex];
        const pB = particles[pulse.toIndex];
        if (!pA || !pB) {
          pulses.splice(k, 1);
          continue;
        }

        const curX = pA.x + (pB.x - pA.x) * pulse.progress;
        const curY = pA.y + (pB.y - pA.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        aria-hidden="true"
      />

      {/* Ambient Radial Gradients & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-ambient-pulse" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Moving Tech Grid Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(139,92,246,0.15)] group hover:border-purple-500/40 transition-colors duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-300 font-medium">
            ADPENCE LLC · TECHNOLOGY COMPANY
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] sm:leading-[1.06] mb-8 font-sans">
          Building Technology. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-300 drop-shadow-[0_0_35px_rgba(139,92,246,0.25)]">
            Creating Opportunity.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl sm:max-w-3xl text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 sm:mb-12">
          Adpence builds AI-powered software, digital platforms, and technology businesses designed to solve real problems and create opportunities at global scale.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <Link
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-medium text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>Explore Our Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-base text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>About Adpence</span>
          </Link>
        </div>

        {/* Statement beneath CTA */}
        <div className="pt-6 border-t border-white/[0.08] w-full max-w-xl">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold flex items-center justify-center gap-3">
            <span>AI</span>
            <span className="text-purple-500">·</span>
            <span>Software</span>
            <span className="text-cyan-500">·</span>
            <span>Automation</span>
            <span className="text-emerald-500">·</span>
            <span>Innovation</span>
          </p>
        </div>

        {/* Micro-Features Floating Ribbon */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          {[
            { icon: Cpu, label: "AI-First Architectures", tag: "Multi-Model" },
            { icon: Network, label: "Venture Studio", tag: "7+ Ventures" },
            { icon: ShieldCheck, label: "Enterprise Engineering", tag: "Global Scale" },
            { icon: Terminal, label: "African Tech Engine", tag: "Global Reach" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center sm:items-start p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm text-left hover:border-white/[0.15] transition-colors"
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-mono uppercase text-slate-500">
                    {item.tag}
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-300">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

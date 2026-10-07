"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070A12] overflow-hidden border-t border-white/[0.08]">
      {/* Radiant glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-cyan-500/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono uppercase tracking-widest text-purple-300 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE EXPEDITION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white font-sans leading-[1.08] mb-8">
          Let&apos;s Build the Future.
        </h2>

        <p className="max-w-2xl sm:max-w-3xl text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-12">
          Whether you&apos;re looking for technology, collaboration, investment opportunities, or simply want to follow what we&apos;re building, we&apos;d love to connect.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="#ventures"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-medium text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>Explore Our Ventures</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-medium text-base text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Contact Adpence</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

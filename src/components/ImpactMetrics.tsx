"use client";

import { COMPANY_METRICS } from "@/data/projects";

export default function ImpactMetrics() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#070A12] border-y border-white/[0.06]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#090D18]/80 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
            >
              {/* Corner accent glow */}
              <div className="absolute -top-1 -right-1 w-8 h-8 rounded-tr-3xl bg-purple-500/10 group-hover:bg-purple-500/25 transition-colors pointer-events-none" />

              <div>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-2">
                  Metric // 0{idx + 1}
                </span>

                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                  {metric.value}
                </div>

                <div className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-2 font-mono">
                  {metric.label}
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-white/[0.04]">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

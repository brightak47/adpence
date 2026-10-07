"use client";

import { ComponentType } from "react";
import { Sparkles, KeyRound, Rocket, Globe2, LucideProps } from "lucide-react";
import { COMPANY_VALUES } from "@/data/projects";

export default function CompanyValues() {
  const iconMap: Record<string, ComponentType<LucideProps>> = {
    Sparkles,
    KeyRound,
    Rocket,
    Globe2,
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070B] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans mb-4">
            Our Core Values
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            The enduring principles guiding every algorithm we train, platform we launch, and venture we build.
          </p>
        </div>

        {/* 4 Elegant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_VALUES.map((val, idx) => {
            const Icon = iconMap[val.icon] || Sparkles;

            return (
              <div
                key={val.title}
                className="group relative rounded-3xl bg-[#090D17] border border-white/[0.08] hover:border-purple-500/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)]"
              >
                {/* Accent line top */}
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mb-6 group-hover:w-16 transition-all duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-purple-400 group-hover:text-cyan-400 group-hover:border-white/[0.2] transition-colors mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                    Value 0{idx + 1}
                  </span>

                  <h3 className="text-xl font-bold text-white tracking-wide font-mono mb-3">
                    {val.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-slate-500">
                  {val.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

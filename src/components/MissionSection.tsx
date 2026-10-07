"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Hammer, GraduationCap, Palette, TrendingUp } from "lucide-react";
import { MISSION_STEPS } from "@/data/projects";

export default function MissionSection() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Hammer, GraduationCap, Palette, TrendingUp];

  return (
    <section id="mission" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070B] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-indigo-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUR PHILOSOPHY</span>
        </div>

        {/* Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white font-sans leading-[1.08] mb-8">
          Technology Should <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-300">
            Create Opportunity.
          </span>
        </h2>

        {/* Core Mission Statement */}
        <p className="text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed max-w-4xl mb-16">
          We believe technology should do more than automate tasks. It should help people build businesses, develop careers, reach global customers, and participate in the digital economy.
        </p>

        {/* Highlight 4 Pillars: Build · Learn · Create · Scale */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 mb-6">
            The Flywheel of Opportunity
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MISSION_STEPS.map((item, index) => {
              const Icon = stepIcons[index];
              const isActive = activeStep === index;

              return (
                <div
                  key={item.keyword}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? "bg-[#0C101F] border-purple-500/60 shadow-[0_10px_35px_rgba(139,92,246,0.2)] -translate-y-1"
                      : "bg-[#080B14]/70 border-white/[0.06] hover:border-white/[0.15]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-slate-500">
                        {item.step}
                      </span>
                      <div
                        className={`p-2 rounded-xl ${
                          isActive
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-white/[0.03] text-slate-400"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1 font-mono">
                      {item.keyword}
                    </h3>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Large Statement Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-slate-900/40 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              Commitment to Economic Expansion
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Every platform we engineer is measured by the real-world leverage it unlocks.
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              From creators producing automated video to defenders training for SOC roles and merchants launching storefronts in minutes, we measure impact by economic independence.
            </p>
          </div>
          <a
            href="#ventures"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] transition-all"
          >
            <span>See the Products</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

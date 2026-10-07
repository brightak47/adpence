"use client";

import { useState, ComponentType } from "react";
import Image from "next/image";
import { Network, Cpu, Code2, Bot, Coins, LucideProps } from "lucide-react";
import { ECOSYSTEM_PILLARS, ADPENCE_PROJECTS } from "@/data/projects";

export default function EcosystemVisualization() {
  const [activePillarId, setActivePillarId] = useState<string>("ai");

  const activePillar = ECOSYSTEM_PILLARS.find((p) => p.id === activePillarId) || ECOSYSTEM_PILLARS[0];

  const pillarIcons: Record<string, ComponentType<LucideProps>> = {
    ai: Cpu,
    software: Code2,
    automation: Bot,
    "digital-business": Coins,
  };

  return (
    <section id="ecosystem" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070A11] overflow-hidden border-y border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-900/10 via-indigo-900/15 to-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>THE ADPENCE ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans mb-6">
            One Company. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-300">
              Multiple Opportunities.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Our products operate across different industries, but share the same foundation: technology, artificial intelligence, automation, and entrepreneurship.
          </p>
        </div>

        {/* Interactive Diagram Canvas / Hub */}
        <div className="relative rounded-3xl bg-[#090D17]/90 border border-white/[0.08] p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          {/* Subtle grid in diagram */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none rounded-3xl" />

          {/* Level 1: Central ADPENCE Studio Node */}
          <div className="flex flex-col items-center justify-center mb-12 relative z-10">
            <div className="relative group">
              {/* Outer pulsing ring */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="relative px-8 py-4 rounded-2xl bg-[#0A0E1A] border border-white/[0.2] flex items-center gap-3.5 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center p-1.5">
                  <Image
                    src="/assets/logos/adpence-mark.png"
                    alt="Adpence Mark"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-xl sm:text-2xl tracking-wider text-white font-mono flex items-center gap-2">
                    ADPENCE LLC
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      STUDIO ENGINE
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    AI Research · Software Engineering · Venture Incubation
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting lines down */}
            <div className="w-0.5 h-10 bg-gradient-to-b from-purple-500 via-indigo-500 to-slate-700 my-1 relative">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </div>

          {/* Level 2: Four Core Pillars (Interactive selectors) */}
          <div className="mb-14 relative z-10">
            <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
              Select a core architectural pillar to trace connected ventures:
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {ECOSYSTEM_PILLARS.map((pillar) => {
                const Icon = pillarIcons[pillar.id] || Cpu;
                const isSelected = pillar.id === activePillarId;

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`relative p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-white/[0.08] border-purple-500/80 shadow-[0_0_30px_rgba(139,92,246,0.3)] scale-[1.02]"
                        : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="p-2.5 rounded-xl"
                        style={{
                          backgroundColor: `${pillar.color}20`,
                          color: pillar.color,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      {isSelected && (
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-sm sm:text-base text-white tracking-wide font-mono">
                      {pillar.shortTitle}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5 line-clamp-1">
                      {pillar.tagline}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pillar Explanation Callout */}
          <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block mb-1">
                  Pillar Blueprint: {activePillar.title}
                </span>
                <p className="text-sm sm:text-base text-slate-200">
                  {activePillar.description}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 shrink-0">
                Connected Ventures:{" "}
                <span className="text-white font-bold">
                  {activePillar.connectedProjects.length}
                </span>
              </div>
            </div>
          </div>

          {/* Level 3: Connected Portfolio Ventures Node Grid */}
          <div className="relative z-10">
            <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
              Connected Venture Deployments
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {ADPENCE_PROJECTS.slice(0, 6).map((proj) => {
                const isConnected = activePillar.connectedProjects.includes(proj.name);

                return (
                  <div
                    key={proj.id}
                    className={`relative p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
                      isConnected
                        ? "bg-[#0F1424] border-purple-500/50 shadow-[0_0_25px_rgba(139,92,246,0.25)] scale-[1.03]"
                        : "bg-[#080B14]/60 border-white/[0.04] opacity-45 hover:opacity-75"
                    }`}
                  >
                    {/* Status dot */}
                    <div className="absolute top-2.5 right-2.5">
                      {isConnected ? (
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      )}
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-[#06080E] border border-white/[0.1] p-1.5 flex items-center justify-center mb-3">
                      <Image
                        src={proj.logo}
                        alt={proj.name}
                        width={36}
                        height={36}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white tracking-tight line-clamp-1">
                      {proj.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 line-clamp-1 mt-0.5">
                      {proj.category.split("·")[0]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

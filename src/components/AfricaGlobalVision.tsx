"use client";

import { useState } from "react";
import { Globe, Radio } from "lucide-react";

export default function AfricaGlobalVision() {
  const [activeHub, setActiveHub] = useState<string>("africa");

  const telemetryHubs = [
    {
      id: "africa",
      name: "African Innovation Base",
      role: "Creation, Ownership & R&D",
      nodes: "Accra · Nairobi · Lagos · Kigali",
      metrics: "Primary Talent Engine & Ground-Level Problem Solving",
      status: "Active Epicenter",
    },
    {
      id: "global",
      name: "Global Market Reach",
      role: "Worldwide Scale & Revenue",
      nodes: "London · New York · Singapore · San Francisco",
      metrics: "Cross-border distribution, foreign currency liquidity & tier-1 compliance",
      status: "Global Gateway",
    },
  ];

  return (
    <section id="vision" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#060910] overflow-hidden border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-900/10 via-purple-900/15 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Vision Editorial */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-emerald-400 mb-6">
              <Globe className="w-3.5 h-3.5" />
              <span>AFRICAN HERITAGE · GLOBAL DESTINATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans leading-[1.08] mb-6">
              Built With Africa in Mind. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                Designed for the World.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-6">
              Adpence believes Africa should not only consume technology—it should create, own, and export it.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              Our long-term ambition is to build globally competitive technology companies while creating jobs, entrepreneurial opportunities, and pathways into the digital economy.
            </p>

            {/* Strategic Pathway Flow */}
            <div className="w-full p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                    Africa
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 font-mono text-xs">
                  <span className="hidden sm:inline">────</span>
                  <span className="text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                    Technology & AI
                  </span>
                  <span className="hidden sm:inline">────▶</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                    Global Markets
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mb-0.5">
                  100%
                </div>
                <div className="text-xs font-mono uppercase text-slate-400">
                  IP & Venture Ownership
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 mb-0.5">
                  Borderless
                </div>
                <div className="text-xs font-mono uppercase text-slate-400">
                  Global Market Distribution
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Abstract Geographic & Data Network Visualization */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#090D18] border border-white/[0.1] p-6 sm:p-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Top Telemetry Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                    GLOBAL TELEMETRY ROUTER
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  SYSTEM STATUS: OPTIMAL
                </span>
              </div>

              {/* Abstract Topological Network SVG */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#04060C] border border-white/[0.06] flex items-center justify-center p-4 overflow-hidden">
                <svg
                  viewBox="0 0 500 350"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                    </linearGradient>
                    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="87" x2="500" y2="87" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="0" y1="175" x2="500" y2="175" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="0" y1="262" x2="500" y2="262" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="125" y1="0" x2="125" y2="350" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="250" y1="0" x2="250" y2="350" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="375" y1="0" x2="375" y2="350" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

                  {/* High speed data transmission arcs */}
                  <path
                    d="M 170 210 Q 250 110 380 90"
                    stroke="url(#streamGrad1)"
                    strokeWidth="2.5"
                    strokeDasharray="6 3"
                    className="animate-pulse"
                  />
                  <path
                    d="M 170 210 Q 220 180 370 170"
                    stroke="url(#streamGrad1)"
                    strokeWidth="2"
                  />
                  <path
                    d="M 170 210 Q 230 260 410 240"
                    stroke="url(#streamGrad1)"
                    strokeWidth="1.8"
                    strokeDasharray="5 5"
                  />
                  <path
                    d="M 170 210 Q 110 140 100 90"
                    stroke="rgba(139,92,246,0.6)"
                    strokeWidth="1.5"
                  />

                  {/* African Core Hub - Nexus */}
                  <circle cx="170" cy="210" r="32" fill="url(#hubGlow)" />
                  <circle cx="170" cy="210" r="16" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <circle cx="170" cy="210" r="6" fill="#6EE7B7" />
                  <text x="170" y="248" fill="#A7F3D0" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    AFRICA CORE HUB
                  </text>
                  <text x="170" y="260" fill="#6EE7B7" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    Accra · Lagos · Nairobi
                  </text>

                  {/* Node 1: North America */}
                  <circle cx="100" cy="90" r="8" fill="#1E1B4B" stroke="#818CF8" strokeWidth="1.5" />
                  <circle cx="100" cy="90" r="3" fill="#C7D2FE" />
                  <text x="100" y="75" fill="#E0E7FF" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    Silicon Valley / NY
                  </text>

                  {/* Node 2: Europe */}
                  <circle cx="380" cy="90" r="9" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="380" cy="90" r="3.5" fill="#BAE6FD" />
                  <text x="380" y="75" fill="#E0F2FE" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    London / EU
                  </text>

                  {/* Node 3: Middle East / Asia */}
                  <circle cx="370" cy="170" r="8" fill="#14532D" stroke="#34D399" strokeWidth="1.5" />
                  <circle cx="370" cy="170" r="3" fill="#A7F3D0" />
                  <text x="430" y="173" fill="#D1FAE5" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    Dubai / Singapore
                  </text>

                  {/* Node 4: Global Enterprise Clients */}
                  <circle cx="410" cy="240" r="7" fill="#312E81" stroke="#A78BFA" strokeWidth="1.5" />
                  <circle cx="410" cy="240" r="2.5" fill="#DDD6FE" />
                  <text x="410" y="260" fill="#EDE9FE" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    Global Markets
                  </text>
                </svg>

                {/* Corner watermarks */}
                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-500">
                  LATENCY: ~14ms · ENCRYPTION: TLS 1.3
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  DATA FLOW: 100% EXPORT
                </div>
              </div>

              {/* Interactive Telemetry Cards */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {telemetryHubs.map((hub) => (
                  <div
                    key={hub.id}
                    onClick={() => setActiveHub(hub.id)}
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition-colors ${
                      activeHub === hub.id
                        ? "bg-white/[0.06] border-emerald-500/40"
                        : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="text-xs font-bold font-mono text-white mb-0.5">
                      {hub.name}
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 mb-1">
                      {hub.nodes}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {hub.metrics}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

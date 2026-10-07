"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Terminal, Cpu, Shield } from "lucide-react";

export default function AboutAdpence() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070B] overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[450px] bg-purple-950/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl bg-[#090D17] border border-white/[0.1] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Card ambient header */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-purple-600/15 via-transparent to-transparent pointer-events-none" />

              {/* Company Logo Display */}
              <div className="relative w-20 h-20 rounded-2xl bg-[#070A12] border border-white/[0.15] p-3 flex items-center justify-center mb-6 shadow-xl">
                <Image
                  src="/assets/logos/adpence-logo.png"
                  alt="Adpence LLC"
                  width={68}
                  height={68}
                  className="object-contain"
                />
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold text-white tracking-tight font-sans">
                  Adpence LLC
                </div>
                <div className="text-xs font-mono text-purple-400 mt-1 uppercase tracking-wider">
                  Venture Studio & AI Innovation Engine
                </div>
              </div>

              {/* Strategic Pillars List */}
              <div className="space-y-3 mb-8">
                {[
                  { icon: Cpu, label: "AI-First Software Engineering" },
                  { icon: Terminal, label: "Proprietary Autonomous Platforms" },
                  { icon: Building2, label: "Venture Studio Incubation Model" },
                  { icon: Shield, label: "African Tech Export To Global Scale" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300 font-medium"
                    >
                      <Icon className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Corporate Identity Micro-Footer */}
              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>ESTABLISHED 2024+</span>
                <span className="text-emerald-400">STATUS: ACCELERATING</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-purple-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE COMPANY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans leading-[1.08] mb-8">
              We Build <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-300">
                What Comes Next.
              </span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
              <p>
                Adpence LLC is an AI-first technology company focused on building software, digital platforms, and technology-driven businesses.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Our portfolio spans artificial intelligence, cybersecurity, financial technology, sports technology, e-commerce, automation, and digital products. We reject superficial technology theater—we build real software that unlocks economic opportunity, generates sustainable revenue, and competes globally.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                With deep African roots and international execution standards, Adpence combines hungry entrepreneurial talent with cutting-edge artificial intelligence to deliver generational technological impact.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)]"
              >
                <span>Learn More About Adpence</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#ecosystem"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
              >
                <span>Explore the Flywheel</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

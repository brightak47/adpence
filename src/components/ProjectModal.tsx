"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#090D16] border border-white/[0.12] rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow header ambient */}
        <div
          className="absolute top-0 inset-x-0 h-40 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top, ${project.accentColor}, transparent 70%)`,
          }}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors border border-white/[0.08]"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Body */}
        <div className="relative p-6 sm:p-8 md:p-10">
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-widest text-purple-300 uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              {project.category}
            </span>
            <span
              className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${
                project.status === "Live"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                  : "bg-rose-500/10 text-rose-400 border-rose-500/25"
              }`}
            >
              {project.status === "Live" ? "● Live Platform" : "● In Incubation"}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#06080E] border border-white/[0.1] p-2 flex items-center justify-center shrink-0 shadow-lg">
              <Image
                src={project.logo}
                alt={`${project.name} Logo`}
                width={56}
                height={56}
                className="object-contain max-h-full max-w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.name}
              </h3>
              <p className="text-sm font-mono text-slate-400">
                Adpence Ecosystem Venture
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
            {project.extendedDescription || project.description}
          </p>

          {/* Impact Statement */}
          {project.impactStatement && (
            <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-purple-500 border-y border-r border-white/[0.06] mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                Core Impact Objective
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium">
                &ldquo;{project.impactStatement}&rdquo;
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Key Architectural Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: project.accentColor }}
                    />
                    <span className="text-xs sm:text-sm text-slate-300">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#06080E] border border-white/[0.06] mb-8">
              {project.stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-sm sm:text-base font-bold text-white font-mono">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer CTAs */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {project.url && project.url.startsWith("http") ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)]"
              >
                <span>{project.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] transition-all"
              >
                <span>{project.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

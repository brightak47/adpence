"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Sparkles, Eye } from "lucide-react";
import { ADPENCE_PROJECTS, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function ProjectPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { label: "All Ventures", value: "ALL" },
    { label: "AI & Media", value: "AI VIDEO · CREATOR TECHNOLOGY" },
    { label: "Ad-Tech & Influencer", value: "AI · INFLUENCER MARKETING & AD-TECH" },
    { label: "Sports Tech", value: "SPORTS TECHNOLOGY · AI" },
    { label: "Cybersecurity", value: "CYBERSECURITY · AI" },
    { label: "FinTech", value: "AI · FINANCIAL TECHNOLOGY" },
    { label: "E-Commerce", value: "AI · E-COMMERCE" },
    { label: "Future Pipeline", value: "IN DEVELOPMENT" },
  ];

  const filteredProjects = ADPENCE_PROJECTS.filter((proj) => {
    if (selectedCategory === "ALL") return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="products" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070B] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div id="ventures" className="flex flex-col items-start mb-14 scroll-mt-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & VENTURES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans mb-4">
            What We&apos;re Building
          </h2>
          <p className="max-w-3xl text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            A growing ecosystem of technology products designed to solve real-world problems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.value
                  ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Project Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => {
            // Layout asymmetry for editorial feel:
            const colSpan =
              idx % 4 === 0
                ? "lg:col-span-7"
                : idx % 4 === 1
                ? "lg:col-span-5"
                : idx % 4 === 2
                ? "lg:col-span-5"
                : "lg:col-span-7";

            return (
              <div
                key={project.id}
                className={`${colSpan} group relative rounded-3xl bg-[#090D16] border border-white/[0.08] hover:border-white/[0.22] p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] hover:-translate-y-1.5`}
              >
                {/* Ambient Card Radial Glow that intensifies on hover */}
                <div
                  className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${project.gradient} blur-xl pointer-events-none -z-10`}
                />

                {/* Subtle Grid texture inside card */}
                <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                    <div className="flex items-center gap-3.5">
                      {/* Project Logo Box */}
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#06080E] border border-white/[0.1] p-2 flex items-center justify-center shrink-0 shadow-md group-hover:border-white/[0.25] transition-colors">
                        <Image
                          src={project.logo}
                          alt={`${project.name} Logo`}
                          width={48}
                          height={48}
                          className="object-contain max-h-full max-w-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono tracking-widest text-purple-300 uppercase block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    {/* Status Pill */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border shrink-0 ${
                        project.status === "Live"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === "Live"
                            ? "bg-emerald-400 animate-pulse"
                            : "bg-rose-400"
                        }`}
                      />
                      {project.status}
                    </span>
                  </div>

                  {/* One-Line Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Preview / Product Visual Area */}
                <div className="relative w-full h-48 sm:h-56 my-4 rounded-2xl bg-[#06080F] border border-white/[0.06] overflow-hidden group-hover:border-white/[0.18] transition-all duration-500 flex items-center justify-center">
                  {/* Preview image */}
                  <Image
                    src={project.previewImage}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-top opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Glass gradient overlay to keep it high-tech & readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent opacity-90" />

                  {/* Overlay badge with interactive action */}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs cursor-pointer"
                    aria-label={`View ${project.name} deep dive`}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono uppercase tracking-wider backdrop-blur-md">
                      <Eye className="w-4 h-4 text-cyan-400" />
                      View Architecture & Details
                    </span>
                  </button>
                </div>

                {/* Card Footer CTAs */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between gap-4 mt-2 relative z-10">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect Stack</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Primary CTA */}
                  {project.url && project.url.startsWith("http") ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.1] hover:border-purple-500/40 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                    >
                      <span>{project.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-400" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.1] hover:border-purple-500/40 transition-all duration-300"
                    >
                      <span>{project.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

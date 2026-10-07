"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LegalModal from "./LegalModal";

// Custom Crisp Vector Brand Icons
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.32a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  const projects = [
    { name: "VideoPost AI", url: "https://videopostai.com", ext: true },
    { name: "FootPawa", url: "https://footpawa.com", ext: true },
    { name: "in2SOC", url: "https://in2soc.com", ext: true },
    { name: "Intelligenfy", url: "#products", ext: false },
    { name: "BuildAnyShop", url: "https://buildanyshop.com", ext: true },
    { name: "Adpence App", url: "https://adpence.app", ext: true },
  ];

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Ventures", href: "#ventures" },
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/adpence",
      icon: LinkedInIcon,
    },
    {
      name: "X",
      href: "https://x.com/adpence",
      icon: XIcon,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@adpence",
      icon: YouTubeIcon,
    },
  ];

  return (
    <footer className="relative bg-[#04060A] text-slate-400 border-t border-white/[0.08] pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-950/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Company Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-[#090D18] border border-white/[0.12] p-1.5 flex items-center justify-center shadow-lg group-hover:border-purple-500/40 transition-colors">
                <Image
                  src="/assets/logos/adpence-mark.png"
                  alt="Adpence Mark"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white font-sans">
                  ADPENCE
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 -mt-1">
                  LLC
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight mb-4">
              AI. Software. Opportunity.
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6 font-normal">
              Adpence is an AI-first technology company building innovative software, digital platforms, and technology-driven businesses for global markets.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
                    aria-label={`Follow Adpence on ${soc.name}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Column */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold mb-6">
              Ventures & Products
            </h3>
            <ul className="space-y-3">
              {projects.map((proj) => (
                <li key={proj.name}>
                  {proj.ext ? (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-sm text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      <span>{proj.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      href={proj.url}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {proj.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Adpence LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModalType("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              type="button"
              onClick={() => setLegalModalType("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-slate-700">·</span>
            <span className="text-purple-400">Building Globally</span>
          </div>
        </div>
      </div>

      {/* Interactive Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sparkles, Layers, Compass, Info, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products", icon: Layers },
    { name: "Ventures", href: "#ventures", icon: Sparkles },
    { name: "Ecosystem", href: "#ecosystem", icon: Compass },
    { name: "Vision", href: "#vision", icon: Compass },
    { name: "About", href: "#about", icon: Info },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05070B]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#070A11] rounded-[11px] flex items-center justify-center overflow-hidden p-1">
                  <Image
                    src="/assets/logos/adpence-mark.png"
                    alt="Adpence Mark"
                    width={28}
                    height={28}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 font-sans">
                  ADPENCE
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-mono -mt-1 uppercase">
                  LLC · Ventures
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.06]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="#ventures"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-medium text-white rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Our Technology</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#05070B]/95 backdrop-blur-2xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <div className="text-xs uppercase tracking-widest text-slate-500 font-mono mb-2">
              Navigation
            </div>
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/[0.04] text-slate-200 hover:text-white text-base font-medium transition-colors"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <Link
              href="#ventures"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-[0_0_25px_rgba(139,92,246,0.4)]"
            >
              <span>Explore Our Technology</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs text-slate-500 font-mono mt-2">
              Adpence LLC · AI. Software. Opportunity.
            </div>
          </div>
        </div>
      )}
    </>
  );
}

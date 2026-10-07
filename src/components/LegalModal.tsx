"use client";

import { useEffect } from "react";
import { X, Shield } from "lucide-react";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl my-8 bg-[#0A0E18] border border-white/[0.12] rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {isPrivacy ? "Privacy Policy" : "Terms of Service"}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              ADPENCE LLC · Last Updated 2026
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {isPrivacy ? (
            <>
              <p>
                Adpence LLC (&ldquo;Adpence&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) respects your privacy and is dedicated to protecting all data collected across our web properties, software applications, and venture platforms.
              </p>
              <h4 className="font-bold text-white uppercase font-mono text-xs mt-3">
                1. Data Collection & Processing
              </h4>
              <p>
                We only collect necessary technical telemetry, contact inquiry submissions, and performance logs required to operate and maintain our AI infrastructures and platforms. We do not sell or monetize personal data to third-party data brokers.
              </p>
              <h4 className="font-bold text-white uppercase font-mono text-xs mt-3">
                2. Artificial Intelligence Ethics & Data Isolation
              </h4>
              <p>
                User inputs across our autonomous platforms (including VideoPost AI, FootPawa, in2SOC, and BuildAnyShop) are processed in compliance with enterprise security protocols and isolated tenant boundaries.
              </p>
              <h4 className="font-bold text-white uppercase font-mono text-xs mt-3">
                3. Security Measures
              </h4>
              <p>
                We enforce multi-tenant cryptographic isolation, TLS 1.3 in-transit encryption, and SOC-grade defense architectures across our cloud systems.
              </p>
            </>
          ) : (
            <>
              <p>
                These Terms of Service govern your access to and use of websites, digital services, and platform previews operated by Adpence LLC.
              </p>
              <h4 className="font-bold text-white uppercase font-mono text-xs mt-3">
                1. Intellectual Property
              </h4>
              <p>
                All trademarks, logos, patents, architectures, designs, algorithmic frameworks, and digital assets associated with Adpence LLC, VideoPost AI, FootPawa, in2SOC, Intelligenfy, BuildAnyShop, and Adpence App (adpence.app) are the exclusive intellectual property of Adpence LLC and its subsidiaries.
              </p>
              <h4 className="font-bold text-white uppercase font-mono text-xs mt-3">
                2. Acceptable Use
              </h4>
              <p>
                You agree not to reverse engineer, decompile, scrape, or perform unauthorized security scans on any Adpence platform or associated APIs without written executive consent.
              </p>
              <h4 className="font-bold text-white uppercase font-mono text-xs mt-3">
                3. Jurisdiction
              </h4>
              <p>
                These terms are governed by and construed under the applicable laws governing Adpence LLC corporate entities and international commercial treaties.
              </p>
            </>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-white/[0.08] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.15]"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}

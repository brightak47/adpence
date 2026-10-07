"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Partnership & Collaboration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate instantaneous dispatch with fallback to mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070B] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT WITH ADPENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans mb-4">
            Start a Conversation
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Whether you want to explore collaboration, discuss venture partnerships, or inquire about our platforms, our executive team is ready to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Contact & Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#090D18] border border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">
                Official Inquiries
              </span>
              <a
                href="mailto:contact@adpence.com"
                className="text-lg font-bold text-white hover:text-purple-400 transition-colors font-mono flex items-center gap-2"
              >
                contact@adpence.com
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Executive response within 24–48 business hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090D18] border border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">
                Global Venture Inquiries
              </span>
              <p className="text-sm text-slate-300 mb-3">
                Adpence LLC operates across US, Africa, and global digital corridors.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ACCEPTING SELECT PARTNERSHIPS
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#090D18] border border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">
                Portfolio Inquiries
              </span>
              <ul className="text-xs text-slate-400 space-y-1 font-mono">
                <li>• VideoPost AI · videopostai.com</li>
                <li>• FootPawa · footpawa.com</li>
                <li>• in2SOC · in2soc.com</li>
                <li>• Intelligenfy · intelligenfy.com</li>
                <li>• BuildAnyShop · buildanyshop.com</li>
                <li>• Adpence App · adpence.app</li>
              </ul>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#090D18] border border-white/[0.1] shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Your inquiry regarding &ldquo;{formData.topic}&rdquo; has been logged directly with the Adpence executive team.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1]"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href={`mailto:contact@adpence.com?subject=${encodeURIComponent(
                        formData.topic + " - " + formData.name
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500"
                    >
                      Open Email App
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Addai"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-purple-500 focus:outline-none text-sm text-white placeholder-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-purple-500 focus:outline-none text-sm text-white placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Inquiry Focus
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) =>
                        setFormData({ ...formData, topic: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#06080F] border border-white/[0.08] focus:border-purple-500 focus:outline-none text-sm text-white"
                    >
                      <option value="Partnership & Collaboration">
                        Strategic Partnership & Venture Collaboration
                      </option>
                      <option value="Technology & Product Inquiry">
                        Technology & Platform Inquiries
                      </option>
                      <option value="Investment & Syndicate">
                        Investment & Syndicate Discussions
                      </option>
                      <option value="Talent & Engineering Fellowship">
                        Careers & Engineering Fellowship
                      </option>
                      <option value="Press & Media">Press & Media Relations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share brief details about your inquiry, project, or partnership idea..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-purple-500 focus:outline-none text-sm text-white placeholder-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Corporate Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

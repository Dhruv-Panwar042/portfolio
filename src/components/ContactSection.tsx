"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Copy, 
  Check, 
  Send, 
  Code2, 
  ExternalLink 
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState("SDE / Engineering Opportunity — [Company Name]");
  const [message, setMessage] = useState("Hi Dhruv, I reviewed your portfolio and would like to schedule an introductory discussion regarding an engineering opportunity at our team.");

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080d1a]/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let&apos;s Discuss Opportunities
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Currently sitting for <strong className="text-slate-200">2027 campus &amp; off-campus placements</strong>. Open to Full-Stack, Backend, and AI Engineering roles across India and remotely.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Direct Email</div>
                    <div className="text-slate-200 font-semibold">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Phone / WhatsApp</div>
                    <div className="text-slate-200 font-semibold">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Current Location &amp; Mobility</div>
                  <div className="text-slate-200 font-semibold">VIT Vellore • Open to Relocate Anywhere</div>
                </div>
              </div>

            </div>

            {/* Resume button & Profiles */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-755 border border-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-755 border border-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pre-populated Fast Recruiter Email Sender */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1224] border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <h3 className="font-bold text-white text-base">Direct Recruiter Outreach</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Response &lt; 12 Hours</span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5 text-[11px]">
                    To:
                  </label>
                  <input
                    type="text"
                    disabled
                    value={PERSONAL_INFO.email}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1.5 text-[11px]">
                    Subject:
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-500 font-sans text-sm"
                    placeholder="Subject line..."
                  />
                </div>

                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1.5 text-[11px]">
                    Message / Interview Invitation:
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-500 font-sans text-sm resize-none leading-relaxed"
                    placeholder="Your message..."
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-sans">
                    Opens your default email client with recipient &amp; body ready.
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

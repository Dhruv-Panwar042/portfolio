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
    <section id="contact" className="py-24 relative bg-white/80 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Mail className="w-3.5 h-3.5 text-slate-600" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Let&apos;s Discuss Opportunities
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 font-sans">
                Currently sitting for <strong className="text-slate-900 font-semibold">2027 campus &amp; off-campus placements</strong>. 
                Open to Full-Stack, Backend, and AI Engineering roles across India and remotely.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Email */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Direct Email</div>
                    <div className="text-slate-900 font-bold">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors border border-slate-200"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Phone / WhatsApp</div>
                    <div className="text-slate-900 font-bold">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors border border-slate-200"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Location &amp; Mobility</div>
                  <div className="text-slate-900 font-bold">VIT Vellore • Open to Relocate Anywhere</div>
                </div>
              </div>

            </div>

            {/* Resume button & Profiles */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interaction inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
                <ExternalLink className="w-3 h-3 opacity-75" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interaction inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold transition-colors shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-700" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interaction inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold transition-colors shadow-xs"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pre-populated Fast Recruiter Email Sender */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <h3 className="font-bold text-slate-900 text-base font-display">Direct Recruiter Outreach</h3>
                </div>
                <span className="text-xs font-mono text-slate-500 font-semibold">Response &lt; 12 Hours</span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-500 uppercase tracking-wider mb-1.5 text-[11px] font-bold">
                    To:
                  </label>
                  <input
                    type="text"
                    disabled
                    value={PERSONAL_INFO.email}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 cursor-not-allowed font-medium"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 uppercase tracking-wider mb-1.5 text-[11px] font-bold">
                    Subject:
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400 font-sans text-sm shadow-xs"
                    placeholder="Subject line..."
                  />
                </div>

                <div>
                  <label className="block text-slate-700 uppercase tracking-wider mb-1.5 text-[11px] font-bold">
                    Message / Interview Invitation:
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400 font-sans text-sm resize-none leading-relaxed shadow-xs"
                    placeholder="Your message..."
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 font-sans">
                    Opens default mail client with recipient &amp; body ready.
                  </span>

                  <button
                    type="submit"
                    className="btn-interaction inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-sm"
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

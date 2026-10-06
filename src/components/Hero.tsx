"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  ArrowRight, 
  FileText, 
  Code2, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink,
  Cpu,
  ShieldCheck,
  Zap
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to 2027 Full-Time SDE &amp; Intern Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm font-mono uppercase tracking-widest text-cyan-400">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mt-2">
                Full-Stack Engineer &amp; <span className="text-gradient-cyan">AI Systems Developer</span>
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Final-year Computer Science student at <strong className="text-slate-200">Vellore Institute of Technology (VIT)</strong>. 
              I engineer production backends with <strong className="text-slate-200">race-safe concurrency locks</strong>, memory-efficient 
              <strong className="text-slate-200"> vector search pipelines (slashing RAM by 53%)</strong>, and low-latency computer vision microservices.
            </p>

            {/* Key Skill Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                400+ DSA Solved (LeetCode &amp; CF)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Sub-300ms Low-Latency Inference
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                8.16 CGPA • VIT Vellore
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-750 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <button
                onClick={copyEmailToClipboard}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-sm transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-medium">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-mono">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-medium"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs font-medium"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode (218+)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Developer Profile Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0b1120] border border-slate-800 shadow-2xl shadow-cyan-950/20 overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 text-[11px] font-sans">engineer_profile.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>zsh</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-3.5 text-slate-300 overflow-x-auto">
                <div>
                  <span className="text-cyan-400">const</span> candidate = &#123;
                </div>
                <div className="pl-4 space-y-1 text-slate-300">
                  <p>
                    <span className="text-purple-400">name:</span> <span className="text-emerald-300">&quot;Dhruv Panwar&quot;</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">education:</span> <span className="text-emerald-300">&quot;B.Tech CSE @ VIT (8.16 CGPA)&quot;</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">targetRoles:</span> [
                    <span className="text-amber-300">&quot;Full-Stack SDE&quot;</span>, 
                    <span className="text-amber-300">&quot;Backend Engineer&quot;</span>, 
                    <span className="text-amber-300">&quot;AI Systems&quot;</span>
                    ],
                  </p>
                  <p>
                    <span className="text-purple-400">coreLanguages:</span> [
                    <span className="text-cyan-300">&quot;C++&quot;</span>, 
                    <span className="text-cyan-300">&quot;Python&quot;</span>, 
                    <span className="text-cyan-300">&quot;TypeScript&quot;</span>, 
                    <span className="text-cyan-300">&quot;SQL&quot;</span>
                    ],
                  </p>
                  <p>
                    <span className="text-purple-400">dsaSolved:</span> <span className="text-blue-400">400</span>, <span className="text-slate-500">// LeetCode + Codeforces</span>
                  </p>
                  <p>
                    <span className="text-purple-400">keyEngineeringWins:</span> &#123;
                  </p>
                  <div className="pl-4 space-y-0.5 text-slate-400">
                    <p><span className="text-slate-300">concurrency:</span> <span className="text-emerald-300">&quot;Race-safe slot holds (Postgres)&quot;</span>,</p>
                    <p><span className="text-slate-300">ramOptimization:</span> <span className="text-emerald-300">&quot;53% slashed via ONNX inference&quot;</span>,</p>
                    <p><span className="text-slate-300">latencyReduction:</span> <span className="text-emerald-300">&quot;35s → 1.2s via canvas downscale&quot;</span></p>
                  </div>
                  <p>&#125;,</p>
                  <p>
                    <span className="text-purple-400">internships:</span> <span className="text-emerald-300">&quot;MPOnline Limited (TCS JV)&quot;</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">certification:</span> <span className="text-emerald-300">&quot;Oracle Generative AI Professional&quot;</span>
                  </p>
                </div>
                <div>
                  &#125;;
                </div>
                
                <div className="pt-2 border-t border-slate-800 text-slate-400 flex items-center justify-between">
                  <span className="text-cyan-400 flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    status: ready_for_interview
                  </span>
                  <a 
                    href="#projects" 
                    className="text-slate-400 hover:text-cyan-300 text-[11px] underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>Run test suite</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

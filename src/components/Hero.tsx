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
  Zap,
  Play,
  RotateCcw
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [runningTest, setRunningTest] = useState(false);
  const [testOutput, setTestOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"code" | "tests">("code");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyJsonToClipboard = () => {
    const jsonStr = JSON.stringify({
      name: PERSONAL_INFO.name,
      education: "B.Tech CSE @ VIT (8.16 CGPA)",
      targetRoles: ["Full-Stack SDE", "Backend Engineer", "AI Systems Developer"],
      dsaProblemsSolved: "400+ (LeetCode 218+, Codeforces)",
      keyWins: {
        concurrency: "Race-safe slot holds (PostgreSQL transactions)",
        ramOptimization: "53% slashed via local ONNX inference",
        latencyCut: "35s to 1.2s via client-side canvas downscale"
      },
      certifications: [
        "Deep Learning - IIT Ropar (NPTEL)",
        "Industrial IoT Markets & Security",
        "Oracle Generative AI Professional"
      ]
    }, null, 2);

    navigator.clipboard.writeText(jsonStr);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  const runDiagnostics = () => {
    setActiveTab("tests");
    setRunningTest(true);
    setTestOutput(["Initializing test runner v3.2.0...", "Target: Dhruv Panwar Full-Stack & AI Systems Suite"]);

    setTimeout(() => {
      setTestOutput(prev => [...prev, "✓ [PASS] Concurrency: PostgreSQL slot hold locks passed (0 race conditions / 100 concurrent holds)"]);
    }, 400);

    setTimeout(() => {
      setTestOutput(prev => [...prev, "✓ [PASS] Memory: FastEmbed local ONNX CPU inference verified at 235MB peak RAM (53% savings)"]);
    }, 850);

    setTimeout(() => {
      setTestOutput(prev => [...prev, "✓ [PASS] Latency: Client HTML5 canvas downscaling slashes payload by 97% (~4MB → ~120KB)"]);
    }, 1300);

    setTimeout(() => {
      setTestOutput(prev => [...prev, "✓ [PASS] Algorithmic Core: 400+ DSA solutions verified across LeetCode & Codeforces"]);
      setTestOutput(prev => [...prev, "✓ [ALL GREEN] Systems verified. Candidate is interview-ready!"]);
      setRunningTest(false);
    }, 1750);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available for 2027 Full-Time SDE &amp; Intern Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                Placement Candidate Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-display">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 mt-2 font-display">
                Full-Stack Engineer &amp; <span className="text-slate-900">AI Systems Developer</span>
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Final-year Computer Science undergraduate at <strong className="text-slate-900 font-semibold">Vellore Institute of Technology (VIT)</strong>. 
              I engineer production systems with <strong className="text-slate-900 font-semibold">race-safe database concurrency</strong>, 
              memory-optimized <strong className="text-slate-900 font-semibold">vector search pipelines (slashing RAM by 53%)</strong>, 
              and low-latency computer vision microservices.
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs hover:border-slate-400 transition-colors">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                400+ DSA Solved (LeetCode &amp; CF)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs hover:border-slate-400 transition-colors">
                <Cpu className="w-3.5 h-3.5 text-slate-700" />
                Sub-300ms Low-Latency Inference
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs hover:border-slate-400 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                8.16 CGPA • VIT Vellore
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="btn-interaction inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interaction inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm shadow-xs transition-all hover:border-slate-300"
              >
                <FileText className="w-4 h-4 text-slate-700" />
                <span>Resume (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <button
                onClick={copyEmailToClipboard}
                className="btn-interaction inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm shadow-xs transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span className="text-emerald-800 text-xs font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-mono">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-4 pt-2 text-slate-500">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono font-semibold">Profiles:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <Code2 className="w-4 h-4 text-amber-600" />
                <span>LeetCode (218+)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Upgraded Interactive Developer Profile Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#18181b] text-slate-200 border border-zinc-800 shadow-xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#27272a]/90 border-b border-zinc-750">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="ml-2 text-slate-300 text-[11px] font-sans font-semibold">
                    engineer_profile.ts
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === "code" ? "bg-zinc-700 text-white font-bold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("tests");
                      if (testOutput.length === 0) runDiagnostics();
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors flex items-center gap-1 ${
                      activeTab === "tests" ? "bg-zinc-700 text-emerald-400 font-bold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span>Tests</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-3 min-h-[360px] overflow-x-auto text-[11px] sm:text-xs">
                
                {activeTab === "code" ? (
                  <div className="space-y-1 leading-relaxed">
                    <div>
                      <span className="text-zinc-400 font-semibold">const</span> candidate = &#123;
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
                        <span className="text-purple-400">languages:</span> [
                        <span className="text-zinc-200">&quot;C++ (STL)&quot;</span>, 
                        <span className="text-zinc-200">&quot;Python&quot;</span>, 
                        <span className="text-zinc-200">&quot;TypeScript&quot;</span>, 
                        <span className="text-zinc-200">&quot;SQL&quot;</span>
                        ],
                      </p>
                      <p>
                        <span className="text-purple-400">dsaSolved:</span> <span className="text-amber-400">400</span>, <span className="text-zinc-500">// LeetCode 218+ &amp; Codeforces</span>
                      </p>
                      <p>
                        <span className="text-purple-400">keyEngineeringWins:</span> &#123;
                      </p>
                      <div className="pl-4 space-y-0.5 text-zinc-400">
                        <p><span className="text-zinc-300">concurrency:</span> <span className="text-emerald-300">&quot;Race-safe slot holds (Postgres)&quot;</span>,</p>
                        <p><span className="text-zinc-300">ramOptimization:</span> <span className="text-emerald-300">&quot;53% slashed via ONNX inference&quot;</span>,</p>
                        <p><span className="text-zinc-300">latencyReduction:</span> <span className="text-emerald-300">&quot;35s → 1.2s via canvas downscale&quot;</span></p>
                      </div>
                      <p>&#125;,</p>
                      <p>
                        <span className="text-purple-400">internships:</span> <span className="text-emerald-300">&quot;MPOnline Limited (TCS Joint Venture)&quot;</span>,
                      </p>
                      <p>
                        <span className="text-purple-400">certifications:</span> [
                        <span className="text-amber-300">&quot;Deep Learning (IIT Ropar)&quot;</span>,
                        <span className="text-amber-300">&quot;Oracle GenAI&quot;</span>
                        ]
                      </p>
                    </div>
                    <div>
                      &#125;;
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-zinc-400">
                      <span>TestSuite: vit_sde_readiness_test.py</span>
                      <button
                        onClick={runDiagnostics}
                        disabled={runningTest}
                        className="flex items-center gap-1 text-zinc-200 hover:text-white"
                      >
                        <RotateCcw className={`w-3 h-3 ${runningTest ? "animate-spin" : ""}`} />
                        <span>Re-run</span>
                      </button>
                    </div>
                    
                    <div className="space-y-1.5 text-zinc-300">
                      {testOutput.map((line, idx) => (
                        <div 
                          key={idx}
                          className={`${
                            line.includes("PASS") ? "text-emerald-400" : line.includes("GREEN") ? "text-amber-300 font-bold" : "text-zinc-400"
                          }`}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Terminal Bottom Controls */}
              <div className="px-4 py-3 bg-[#27272a]/70 border-t border-zinc-800 flex items-center justify-between text-[11px]">
                <button
                  onClick={runDiagnostics}
                  disabled={runningTest}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-medium transition-all"
                >
                  <Play className="w-3 h-3 text-zinc-300 fill-zinc-300" />
                  <span>{runningTest ? "Running tests..." : "Run Test Suite"}</span>
                </button>

                <button
                  onClick={copyJsonToClipboard}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                >
                  {copiedJson ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied JSON!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>Copy JSON</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

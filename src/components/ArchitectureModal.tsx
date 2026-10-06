"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolioData";
import { 
  X, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Zap, 
  Server, 
  Database 
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ArchitectureModal({ project, onClose }: ArchitectureModalProps) {
  const [activeTab, setActiveTab] = useState<"architecture" | "concurrency" | "impact">("architecture");

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0c1222] border border-slate-700/80 shadow-2xl shadow-cyan-950/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0f172a]/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800 text-cyan-300 border border-slate-700">
                  {project.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-[#0a0f1e]/60 text-xs font-mono">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-2 border-b-2 font-medium transition-colors ${
              activeTab === "architecture"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            System Pipeline &amp; Design
          </button>
          <button
            onClick={() => setActiveTab("concurrency")}
            className={`px-3 py-2 border-b-2 font-medium transition-colors ${
              activeTab === "concurrency"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Key Engineering Decisions
          </button>
          <button
            onClick={() => setActiveTab("impact")}
            className={`px-3 py-2 border-b-2 font-medium transition-colors ${
              activeTab === "impact"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Metrics &amp; Benchmarks
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          {/* Tab 1: Architecture Pipeline */}
          {activeTab === "architecture" && (
            <div className="space-y-6">
              
              {/* Architecture Blueprint Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs">
                <div className="text-slate-400 uppercase tracking-wider text-[11px] font-semibold mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyan-400" />
                  <span>Component Flow &amp; Data Pipeline</span>
                </div>
                
                {project.id === "healthcare-manager" && (
                  <div className="space-y-3 text-slate-300">
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-cyan-300">1. Client Tier:</strong> Patient/Doctor/Admin Portals (React + Vite + Tailwind CSS) with JWT auth and real-time appointment slot state.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-emerald-300">2. Concurrency Engine:</strong> Express API + PostgreSQL (Prisma). Implements atomic slot holds with TTL timestamp expiration, preventing double bookings under high concurrent traffic.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-purple-300">3. AI Triage Pipeline:</strong> Groq LLM evaluates patient symptom descriptions during slot confirmation; outputs physician pre-visit summary and patient plain-language care plan.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-amber-300">4. Async Workers:</strong> node-cron orchestrator handling hold auto-expiry, Google Calendar OAuth event synchronization, and Nodemailer SMTP retries.
                    </div>
                  </div>
                )}

                {project.id === "docuvault-ai" && (
                  <div className="space-y-3 text-slate-300">
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-cyan-300">1. Zero-Disk Ingestion:</strong> Multi-PDF uploads parsed directly in RAM via <code className="text-pink-300">io.BytesIO</code> with pypdf, eliminating filesystem locks and temporary storage overhead.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-emerald-300">2. Local ONNX Inference:</strong> FastEmbed running <code className="text-emerald-300">all-MiniLM-L6-v2</code> on CPU. Generates 384-dimensional dense embeddings without external API costs or rate limit bottlenecks.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-purple-300">3. Memory-Optimized FAISS:</strong> Slashed peak vector indexing RAM by 53% (~235MB vs. ~500MB with PyTorch), fitting comfortably in cloud free-tier 512MB RAM containers.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-amber-300">4. Resilient LLM Routing:</strong> Gemini 2.5 Flash with fallback cascading (Flash Lite -&gt; Flash Latest) to handle HTTP 429 rate limits gracefully + ReportLab PDF brief export.
                    </div>
                  </div>
                )}

                {project.id === "visionmind-ai" && (
                  <div className="space-y-3 text-slate-300">
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-cyan-300">1. Client Downscale Engine:</strong> Browser-side HTML5 canvas downscaling slashes raw ~4MB images to ~120KB (97% payload cut), cutting cloud latency from 35s to 1.2s on 0.5 vCPU hosts.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-emerald-300">2. Ultralytics YOLOv8n:</strong> Sub-300ms CPU inference across 80 object classes at 640x640 resolution with OpenCV annotation bounding boxes.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-purple-300">3. Multimodal Reasoning:</strong> Gemini Vision API interpreting scene context, spatial relationships, and automated object counting.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-amber-300">4. Automated Audits:</strong> Programmatic multi-page ReportLab PDF generation streaming forensic inspection briefs in under 600ms.
                    </div>
                  </div>
                )}

                {project.id !== "healthcare-manager" && project.id !== "docuvault-ai" && project.id !== "visionmind-ai" && (
                  <div className="space-y-2">
                    {project.architecturePoints.map((pt, i) => (
                      <div key={i} className="p-2.5 rounded bg-slate-800/60 border border-slate-700/60">
                        {pt}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Core Features List */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                  Key Technical Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Concurrency & Engineering Decisions */}
          {activeTab === "concurrency" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Engineering Rationale &amp; Trade-offs
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Architectural Pillars
                </h5>
                {project.architecturePoints.map((point, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Metrics & Impact */}
          {activeTab === "impact" && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Tech Stack &amp; Dependencies:</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0f172a] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.apiUrl && (
              <a
                href={project.apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-mono transition-colors"
              >
                <Database className="w-3.5 h-3.5" />
                <span>API Docs</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors border border-slate-700"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

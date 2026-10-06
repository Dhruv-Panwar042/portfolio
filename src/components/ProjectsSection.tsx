"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/portfolioData";
import ArchitectureModal from "./ArchitectureModal";
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Database 
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectForModal, setActiveProjectForModal] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack", "AI & ML", "Systems"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Work &amp; Microservices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Systems built with careful attention to <strong className="text-slate-200">concurrency boundaries</strong>, 
              <strong className="text-slate-200"> memory efficiency</strong>, and <strong className="text-slate-200">end-to-end latency</strong>.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm shadow-cyan-500/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between rounded-2xl bg-[#0d1322] border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                project.featured
                  ? "border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-cyan-950/30"
                  : "border-slate-800 hover:border-slate-700 hover:shadow-slate-900/40"
              }`}
            >
              <div>
                {/* Screenshot preview or visual banner */}
                {project.screenshots && project.screenshots.length > 0 ? (
                  <div className="relative w-full h-48 bg-slate-950 overflow-hidden rounded-t-2xl border-b border-slate-800/80 group">
                    <Image
                      src={project.screenshots[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent opacity-90" />
                    
                    {/* Category pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-900/90 text-cyan-300 border border-slate-700/80 backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                          Production Deployed
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-800 text-cyan-300 border border-slate-700/80">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Production Deployed
                      </span>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Metrics row */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center font-mono">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="space-y-0.5">
                        <div className="text-xs font-bold text-cyan-300 truncate">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400 self-center">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveProjectForModal(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium transition-all"
                  >
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>System Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold tracking-wide transition-all"
                  >
                    <span>Open Live Application</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      {activeProjectForModal && (
        <ArchitectureModal
          project={activeProjectForModal}
          onClose={() => setActiveProjectForModal(null)}
        />
      )}
    </section>
  );
}

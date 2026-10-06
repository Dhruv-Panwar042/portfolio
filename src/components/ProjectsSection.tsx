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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Systems &amp; Microservices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-sans">
              Engineered with rigorous attention to <strong className="text-slate-900 font-semibold">concurrency safety</strong>, 
              <strong className="text-slate-900 font-semibold"> RAM efficiency</strong>, and <strong className="text-slate-900 font-semibold">latency SLAs</strong>.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/30"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
              className={`flex flex-col justify-between rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1.5 ${
                project.featured
                  ? "border-sky-200 shadow-sm shadow-sky-500/5 hover:border-sky-400"
                  : "border-slate-200/90 shadow-xs hover:border-slate-300"
              }`}
            >
              <div>
                {/* Screenshot preview or visual banner */}
                {project.screenshots && project.screenshots.length > 0 ? (
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden rounded-t-2xl border-b border-slate-200/80 group">
                    <Image
                      src={project.screenshots[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-80" />
                    
                    {/* Category pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-md bg-white/95 text-sky-800 border border-slate-200/90 shadow-xs backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-emerald-500 text-white shadow-xs">
                          Deployed
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-md bg-sky-50 text-sky-800 border border-sky-200">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-emerald-500 text-white shadow-xs">
                        Deployed
                      </span>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors font-display leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-sky-600 font-mono font-semibold mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-sans">
                    {project.description}
                  </p>

                  {/* Key Metrics row */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center font-mono">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="space-y-0.5">
                        <div className="text-xs font-bold text-sky-700 truncate">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
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
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500 self-center">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-2.5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveProjectForModal(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Layers className="w-3.5 h-3.5 text-sky-600" />
                    <span>System Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all hover:scale-105 active:scale-95"
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
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold tracking-wide transition-all hover:border-sky-300"
                  >
                    <span>Open Live Application</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-600" />
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

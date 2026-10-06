"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/portfolioData";
import ArchitectureModal from "./ArchitectureModal";
import { 
  Layers, 
  Sparkles, 
  ArrowUpRight 
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-slate-600" />
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
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-white border border-slate-200 shadow-xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
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
              className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-400 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Screenshot preview or visual banner */}
                {project.screenshots && project.screenshots.length > 0 ? (
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden rounded-t-2xl border-b border-slate-200 group">
                    <Image
                      src={project.screenshots[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top opacity-95 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent opacity-80" />
                    
                    {/* Category pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-white/95 text-slate-800 border border-slate-200 shadow-xs backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-emerald-600 text-white shadow-xs">
                          Deployed
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-emerald-600 text-white shadow-xs">
                        Deployed
                      </span>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 transition-colors font-display leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-sans">
                    {project.description}
                  </p>

                  {/* Key Metrics row */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-mono">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900 truncate">
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
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 text-slate-700 border border-slate-200"
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-slate-600" />
                    <span>System Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-colors"
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
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide transition-colors"
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

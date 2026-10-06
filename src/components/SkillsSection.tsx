"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { 
  Code, 
  Server, 
  Cpu, 
  Terminal, 
  Sparkles,
  Layers,
  Wrench
} from "lucide-react";

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Languages")) return <Code className="w-4 h-4 text-cyan-400" />;
    if (category.includes("Backend")) return <Server className="w-4 h-4 text-emerald-400" />;
    if (category.includes("AI")) return <Cpu className="w-4 h-4 text-purple-400" />;
    return <Wrench className="w-4 h-4 text-blue-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-[#090e1c]/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A balanced toolkit combining high-performance systems engineering with modern full-stack 
            and applied AI technologies.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((catGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c1224] border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {catGroup.category}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between"
                    >
                      <span className="text-xs font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                          skill.level === "Advanced"
                            ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                            : skill.level === "Proficient"
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                            : "bg-slate-800 text-slate-400 border border-slate-700"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-4 text-[11px] font-mono text-slate-400">
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

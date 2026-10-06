"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { 
  Code, 
  Server, 
  Cpu, 
  Wrench, 
  Sparkles 
} from "lucide-react";

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Languages")) return <Code className="w-4 h-4 text-slate-700" />;
    if (category.includes("Backend")) return <Server className="w-4 h-4 text-slate-700" />;
    if (category.includes("AI")) return <Cpu className="w-4 h-4 text-slate-700" />;
    return <Wrench className="w-4 h-4 text-slate-700" />;
  };

  return (
    <section id="skills" className="py-20 bg-white/70 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-slate-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            A balanced engineering toolkit combining low-level systems efficiency with modern full-stack 
            and applied AI technologies.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((catGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition-all shadow-xs flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-4">
                  <div className="p-2 rounded-xl bg-slate-100 border border-slate-200">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight font-display">
                    {catGroup.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                    >
                      <span className="text-xs font-semibold text-slate-800">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          skill.level === "Advanced"
                            ? "bg-slate-900 text-white"
                            : skill.level === "Proficient"
                            ? "bg-slate-200 text-slate-800"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] font-mono text-slate-400 font-semibold">
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

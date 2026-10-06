"use client";

import React from "react";
import { QUICK_STATS } from "@/data/portfolioData";
import { 
  Code2, 
  Rocket, 
  Cpu, 
  Zap, 
  GraduationCap 
} from "lucide-react";

export default function StatsBar() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Code2 className="w-5 h-5 text-amber-400" />;
      case 1: return <Rocket className="w-5 h-5 text-cyan-400" />;
      case 2: return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 3: return <Zap className="w-5 h-5 text-blue-400" />;
      case 4: return <GraduationCap className="w-5 h-5 text-purple-400" />;
      default: return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-8 border-y border-slate-800/80 bg-[#0a0f1d]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y lg:divide-y-0 sm:divide-x-0 divide-slate-800/40">
          {QUICK_STATS.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all hover:bg-slate-800/30 ${
                idx > 1 ? "pt-5 sm:pt-4" : ""
              }`}
            >
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50 mb-3 shadow-inner">
                {getIcon(idx)}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 max-w-[160px]">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

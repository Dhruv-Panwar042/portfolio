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
      case 0: return <Code2 className="w-5 h-5 text-amber-700" />;
      case 1: return <Rocket className="w-5 h-5 text-slate-800" />;
      case 2: return <Cpu className="w-5 h-5 text-emerald-700" />;
      case 3: return <Zap className="w-5 h-5 text-slate-800" />;
      case 4: return <GraduationCap className="w-5 h-5 text-slate-800" />;
      default: return <Code2 className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section className="py-8 border-y border-slate-200/90 bg-white/70 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y lg:divide-y-0 sm:divide-x-0 divide-slate-100">
          {QUICK_STATS.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all hover:bg-slate-50/80 hover:-translate-y-0.5 ${
                idx > 1 ? "pt-5 sm:pt-4" : ""
              }`}
            >
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-3 shadow-xs">
                {getIcon(idx)}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 max-w-[160px]">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

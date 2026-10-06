"use client";

import React from "react";
import { EDUCATION_DATA, CERTIFICATIONS } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#0c1222] border transition-all ${
                    idx === 0 
                      ? "border-cyan-500/30 shadow-lg shadow-cyan-950/20" 
                      : "border-slate-800"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {edu.institution}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 self-start sm:self-auto">
                        {edu.grade}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 mt-1">
                        {edu.duration}
                      </span>
                    </div>
                  </div>

                  {edu.details && (
                    <p className="pt-3 text-xs text-slate-300 leading-relaxed">
                      {edu.details}
                    </p>
                  )}

                  <div className="pt-3 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Industry Recognition</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Certifications
              </h2>
            </div>

            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      {cert.badgeText && (
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          {cert.badgeText}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono mt-0.5">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

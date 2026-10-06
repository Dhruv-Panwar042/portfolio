"use client";

import React from "react";
import { EDUCATION_DATA, CERTIFICATIONS } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Hash
} from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-white border transition-all ${
                    idx === 0 
                      ? "border-sky-300 shadow-sm shadow-sky-500/10" 
                      : "border-slate-200/90 shadow-xs"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight font-display">
                        {edu.institution}
                      </h3>
                      <p className="text-xs font-bold text-sky-700 mt-0.5">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                        {edu.grade}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 mt-1 font-semibold">
                        {edu.duration}
                      </span>
                    </div>
                  </div>

                  {edu.details && (
                    <p className="pt-3 text-xs text-slate-600 leading-relaxed font-sans">
                      {edu.details}
                    </p>
                  )}

                  <div className="pt-3 flex items-center gap-2 text-[11px] font-mono text-slate-500 font-medium">
                    <MapPin className="w-3 h-3 text-sky-600" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div id="certifications" className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Industry Recognition</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between hover:-translate-y-0.5"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      {cert.badgeText && (
                        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                          {cert.badgeText}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight font-display">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-sky-700 font-mono font-semibold mt-0.5">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {cert.description}
                    </p>

                    {cert.credentialId && (
                      <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                        <Hash className="w-3 h-3 text-slate-400" />
                        <span className="text-slate-400">Credential ID:</span>
                        <span className="text-slate-700 font-semibold select-all">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center gap-2 text-[11px] font-mono text-emerald-700 font-bold">
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

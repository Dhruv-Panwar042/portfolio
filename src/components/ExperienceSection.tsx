"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2 
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industry Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Work Experience &amp; Internships
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Practical enterprise experience in <strong className="text-slate-900 font-semibold">agile software delivery</strong>, 
            enterprise REST APIs, and production <strong className="text-slate-900 font-semibold">data &amp; ML pipelines</strong>.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight font-display">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-bold text-sky-700 font-sans">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="py-6 space-y-3">
                <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">
                  Key Accomplishments &amp; Impact
                </h4>
                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-500 mr-2">Tools &amp; Paradigms:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

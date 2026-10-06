"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  ArrowUp, 
  Code2, 
  Mail, 
  FileText 
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white border-t border-slate-200/90 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-base font-bold text-slate-900 tracking-tight font-display">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-slate-500 font-sans">
              B.Tech Computer Science Engineering • Vellore Institute of Technology (VIT &apos;27)
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-500">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110 active:scale-95"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110 active:scale-95"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110 active:scale-95"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110 active:scale-95"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js, React 19, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-700 font-mono font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Status: Placement Ready &amp; Deployments Online</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

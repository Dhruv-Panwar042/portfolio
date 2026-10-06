"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  FileText, 
  Code2, 
  Menu, 
  X, 
  ExternalLink,
  Sparkles
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "DSA & Problem Solving", href: "#dsa" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm shadow-slate-200/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-slate-900 hover:text-sky-600 transition-colors"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white font-mono font-bold text-sm shadow-md shadow-sky-500/25 group-hover:scale-105 group-hover:rotate-3 transition-transform">
            DP
          </span>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-slate-900 text-base leading-none">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-sky-600 font-mono font-semibold tracking-wider mt-0.5 flex items-center gap-1">
              <span>VIT &apos;27</span>
              <span className="inline-block w-1 h-1 rounded-full bg-slate-300" />
              <span>SDE &amp; AI</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50/80 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all hover:scale-110 active:scale-95"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all hover:scale-110 active:scale-95"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all hover:scale-110 active:scale-95"
          >
            <Code2 className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 text-xs font-bold tracking-wide transition-all shadow-sm shadow-sky-500/25 hover:shadow-md hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg bg-sky-50 border border-sky-200 text-sky-700 font-semibold"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-5 space-y-1.5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 flex items-center gap-4 px-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 flex items-center gap-1.5 text-xs font-medium"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 flex items-center gap-1.5 text-xs font-medium"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 flex items-center gap-1.5 text-xs font-medium"
            >
              <Code2 className="w-4 h-4" /> LeetCode
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React from "react";

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 3.543 5.618 5.618 0 0 0 3.328 3.243 5.617 5.617 0 0 0 4.673-.418l4.475-2.855a1.404 1.404 0 0 0 .641-1.18 1.39 1.39 0 0 0-.64-1.182 1.39 1.39 0 0 0-1.516.094l-4.474 2.855a2.825 2.825 0 0 1-2.348.21 2.826 2.826 0 0 1-1.674-1.63 2.78 2.78 0 0 1-.136-1.782c.105-.494.34-1.025.688-1.464l3.853-4.126 5.405-5.788A1.377 1.377 0 0 0 13.483 0zm2.296 11.23a1.404 1.404 0 0 0-1.405 1.405v.006a1.404 1.404 0 0 0 1.405 1.404h6.816a1.404 1.404 0 0 0 1.405-1.404v-.006a1.404 1.404 0 0 0-1.405-1.405h-6.816z" />
    </svg>
  );
}

"use client";

import React, { useState } from "react";
import { DSA_HIGHLIGHTS } from "@/data/portfolioData";
import { 
  Code2, 
  ExternalLink, 
  Trophy, 
  Terminal, 
  CheckCircle2, 
  Flame, 
  Cpu, 
  ChevronRight,
  GitBranch,
  Copy,
  Check
} from "lucide-react";

export default function DSASection() {
  const [activeCodeTab, setActiveCodeTab] = useState<"binarySearch" | "graphTraversal" | "dynamicProg">("binarySearch");
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    binarySearch: `// Monotonic Predicate Binary Search Pattern (C++)
int lowerBoundSearch(const vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    int ans = nums.size();
    while (left <= right) {
        int mid = left + (right - left) / 2; // Prevent 32-bit overflow
        if (nums[mid] >= target) {
            ans = mid;        // Feasible space: record and search left
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}`,
    graphTraversal: `// Shortest Path via Dijkstra with Min-Heap (C++)
vector<int> dijkstra(int n, const vector<vector<pair<int, int>>>& adj, int src) {
    vector<int> dist(n, 1e9);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
    dist[src] = 0;
    pq.push({0, src});

    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d > dist[u]) continue; // Lazy deletion / prune stale nodes

        for (auto& [v, weight] : adj[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,
    dynamicProg: `// Space-Optimized State Transition (C++)
int maxProfitKnapsack(int W, const vector<int>& wt, const vector<int>& val) {
    int n = wt.size();
    vector<int> dp(W + 1, 0); // O(W) auxiliary space instead of O(N*W)

    for (int i = 0; i < n; i++) {
        for (int w = W; w >= wt[i]; w--) { // Reverse iteration prevents re-computation
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);
        }
    }
    return dp[W];
}`
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="dsa" className="py-20 relative bg-white/70 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Competitive Programming &amp; Algorithmic Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Data Structures &amp; Problem Solving
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-sans">
              Rigorous foundation in low-level algorithmic efficiency, asymptotic complexity analysis, 
              and memory constraints in <strong className="text-slate-900 font-semibold">C++ (STL)</strong> and <strong className="text-slate-900 font-semibold">Python</strong>.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-mono text-sm self-start md:self-auto shadow-xs">
            <Flame className="w-4 h-4 text-amber-600" />
            <span className="font-bold">400+ Problems</span> Solved Across Platforms
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* LeetCode Card */}
          <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm shadow-amber-500/5 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base font-display">LeetCode</h3>
                    <p className="text-xs text-slate-500 font-mono">@DhruvPanwar</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-amber-100 text-amber-900">
                  218+ Solved
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Extensive focus on Graphs, Dynamic Programming, Binary Search, Trees, and Two-Pointer sliding windows.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <a
                href="https://leetcode.com/u/DhruvPanwar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold tracking-wide transition-all"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Codeforces Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base font-display">Codeforces</h3>
                    <p className="text-xs text-slate-500 font-mono">@dhruvspanwar12</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-sky-100 text-sky-900">
                  87+ Solved
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Regular participation in timed algorithmic rounds emphasizing rapid correctness and edge-case resilience.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <a
                href="https://codeforces.com/profile/dhruvspanwar12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 text-xs font-bold tracking-wide transition-all"
              >
                <span>View Codeforces Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Foundations Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-display">Core Focus Areas</h3>
                  <p className="text-xs text-slate-500 font-mono">C++ STL &amp; Complexity</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Graphs: BFS/DFS, Dijkstra, Disjoint Set Union</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>DP: 1D/2D memoization &amp; space reduction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Trees: LCA, Segment Trees, Binary Search Trees</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-500 font-mono font-medium">
              <span>Primary: C++20 / C++17</span>
              <span className="text-emerald-700 font-bold">Optimal O(N log N)</span>
            </div>
          </div>

        </div>

        {/* Code Inspection & Algorithmic Patterns View */}
        <div className="rounded-2xl bg-[#0f172a] text-slate-200 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-[#1e293b]/90 border-b border-slate-700/80 gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span className="font-bold text-white">Algorithmic Implementation Patterns</span>
              <span className="text-slate-400">| Standard C++ STL</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveCodeTab("binarySearch")}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    activeCodeTab === "binarySearch"
                      ? "bg-sky-500 text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Binary Search
                </button>
                <button
                  onClick={() => setActiveCodeTab("graphTraversal")}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    activeCodeTab === "graphTraversal"
                      ? "bg-sky-500 text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Dijkstra
                </button>
                <button
                  onClick={() => setActiveCodeTab("dynamicProg")}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    activeCodeTab === "dynamicProg"
                      ? "bg-sky-500 text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Space-Optimized DP
                </button>
              </div>

              <button
                onClick={copySnippet}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy code template"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-6 bg-[#070b14] overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
            <pre className="text-slate-200">
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>
          </div>

          <div className="px-6 py-3 bg-[#0f172a] border-t border-slate-800 text-[11px] text-slate-400 font-mono flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Asymptotic Optimality
            </span>
            <span className="text-slate-400">
              Applied directly in system indexing and graph traversal workflows
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

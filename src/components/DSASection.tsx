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
  GitBranch
} from "lucide-react";

export default function DSASection() {
  const [activeCodeTab, setActiveCodeTab] = useState<"binarySearch" | "graphTraversal" | "dynamicProg">("binarySearch");

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

  return (
    <section id="dsa" className="py-20 relative bg-[#090e1c]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Competitive Programming &amp; Algorithmic Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Data Structures &amp; Problem Solving
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Strong grounding in low-level algorithmic efficiency, asymptotic complexity analysis, 
              and memory constraints in <strong className="text-slate-200">C++ (STL)</strong> and <strong className="text-slate-200">Python</strong>.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-sm self-start md:self-auto">
            <Flame className="w-4 h-4 text-amber-400" />
            <span className="font-bold">400+ Problems</span> Solved Across Platforms
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* LeetCode Card */}
          <div className="p-6 rounded-2xl bg-[#0c1224] border border-amber-500/30 shadow-lg shadow-amber-950/10 flex flex-col justify-between hover:border-amber-400/60 transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">LeetCode</h3>
                    <p className="text-xs text-slate-400 font-mono">@DhruvPanwar</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  218+ Solved
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extensive focus on Graphs, Dynamic Programming, Binary Search, Trees, and Two-Pointer sliding windows.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6">
              <a
                href="https://leetcode.com/u/DhruvPanwar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold tracking-wide transition-all"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Codeforces Card */}
          <div className="p-6 rounded-2xl bg-[#0c1224] border border-slate-800 shadow-lg flex flex-col justify-between hover:border-cyan-500/50 transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Codeforces</h3>
                    <p className="text-xs text-slate-400 font-mono">@dhruvspanwar12</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  87+ Solved
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Regular participation in timed algorithmic rounds emphasizing rapid correctness and edge-case resilience.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6">
              <a
                href="https://codeforces.com/profile/dhruvspanwar12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold tracking-wide transition-all"
              >
                <span>View Codeforces Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Foundations Card */}
          <div className="p-6 rounded-2xl bg-[#0c1224] border border-slate-800 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Core Focus Areas</h3>
                  <p className="text-xs text-slate-400 font-mono">C++ STL &amp; Complexity</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Graphs: BFS/DFS, Dijkstra, Disjoint Set Union</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>DP: 1D/2D memoization &amp; space reduction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Trees: LCA, Segment Trees, Binary Search Trees</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Primary: C++20 / C++17</span>
              <span className="text-emerald-400">Time: Optimal O(N log N)</span>
            </div>
          </div>

        </div>

        {/* Code Inspection & Algorithmic Patterns View */}
        <div className="rounded-2xl bg-[#0b101e] border border-slate-800 overflow-hidden shadow-2xl">
          <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-[#0e1526] border-b border-slate-800 gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold text-white">Algorithmic Implementation Patterns</span>
              <span className="text-slate-500">| Standard C++ STL</span>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveCodeTab("binarySearch")}
                className={`px-3 py-1 rounded transition-colors ${
                  activeCodeTab === "binarySearch"
                    ? "bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Binary Search
              </button>
              <button
                onClick={() => setActiveCodeTab("graphTraversal")}
                className={`px-3 py-1 rounded transition-colors ${
                  activeCodeTab === "graphTraversal"
                    ? "bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Dijkstra Shortest Path
              </button>
              <button
                onClick={() => setActiveCodeTab("dynamicProg")}
                className={`px-3 py-1 rounded transition-colors ${
                  activeCodeTab === "dynamicProg"
                    ? "bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Space-Optimized DP
              </button>
            </div>
          </div>

          <div className="p-6 bg-[#070b14] overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
            <pre className="text-slate-200">
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>
          </div>

          <div className="px-6 py-3 bg-[#0a0f1d] border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Asymptotic Optimality
            </span>
            <span className="text-slate-500">
              Applied directly in system indexing and graph traversal workflows
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "Engineering Autonomous Control Loops: The Future of Real-Time AI Systems",
    category: "Systems Engineering",
    readTime: "7 min read",
    date: "Jul 2026",
    summary: "An architectural deep-dive into building self-correcting automation pipelines that handle real-world sensor and data anomalies without human intervention.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    content: `
      <h2 class="text-2xl font-bold text-purple-300 mt-6 mb-3">Beyond Basic Triggers</h2>
      <p class="text-slate-300 mb-4">Traditional software execution is linear: input leads to processing, which leads to a hardcoded output. However, true autonomous engineering requires closed-loop feedback mechanisms where the system evaluates its own error margins and dynamically rewrites its execution path.</p>
      
      <div class="my-6 p-4 bg-purple-950/50 rounded-xl border border-purple-500/30">
        <h4 class="font-bold text-purple-300 mb-2">⚙️ Core Architectural Blueprint</h4>
        <p class="text-sm text-slate-300">By combining edge webhooks with distributed processing nodes, you can achieve sub-second fault recovery in automated environments.</p>
      </div>

      <h3 class="text-xl font-semibold text-purple-200 mt-6 mb-2">Minimizing Latency in Distributed Nodes</h3>
      <p class="text-slate-300 mb-4">When designing heavy data pipelines, optimizing the communication protocol between the primary inference engine and auxiliary micro-services dictates whether your system scales or bottlenecks.</p>

      <div class="my-8 p-6 bg-slate-900 rounded-xl border border-purple-500/40 text-center">
        <h4 class="font-bold text-white text-lg mb-2">🚀 Deploy Your Automation Pipeline Today</h4>
        <p class="text-sm text-slate-400 mb-4">Scale your workflows instantly with visual orchestration tools built for high-performance engineers.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-purple-900/50">Access Make.com Free Tier →</a>
      </div>
    `
  },
  {
    id: 2,
    title: "Optimizing Micro-Controller Logic for Edge AI and Smart Automation",
    category: "Hardware & IoT",
    readTime: "9 min read",
    date: "Jul 2026",
    summary: "Bridging physical hardware sensors with intelligent cloud logic to build responsive, real-time automation frameworks.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
    content: `
      <h2 class="text-2xl font-bold text-purple-300 mt-6 mb-3">The Hardware-Software Interface</h2>
      <p class="text-slate-300 mb-4">Integrating intelligent control systems into physical architecture demands absolute precision. Whether dealing with signal noise, sensor drift, or power constraints, your code must account for real-world physical friction.</p>

      <h3 class="text-xl font-semibold text-purple-200 mt-6 mb-2">Signal Filtering & Noise Reduction</h3>
      <p class="text-slate-300 mb-4">Raw telemetry data is inherently noisy. Implementing adaptive filtering algorithms directly on the edge ensures that your automated actuators respond only to genuine structural triggers rather than transient electrical noise.</p>

      <div class="my-8 p-6 bg-slate-900 rounded-xl border border-purple-500/40 text-center">
        <h4 class="font-bold text-white text-lg mb-2">⚡ Automate Your Infrastructure</h4>
        <p class="text-sm text-slate-400 mb-4">Connect your physical data streams to powerful cloud automation workflows.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-purple-900/50">Start Building on Make →</a>
      </div>
    `
  },
  {
    id: 3,
    title: "High-Frequency Synthetic Index Modeling & Statistical Arbitrage",
    category: "Algorithmic Systems",
    readTime: "6 min read",
    date: "Jun 2026",
    summary: "Analyzing mathematical distribution models and volatility clusters in synthetic market environments.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    content: `
      <h2 class="text-2xl font-bold text-purple-300 mt-6 mb-3">Decoding Market Microstructure</h2>
      <p class="text-slate-300 mb-4">Synthetic instruments operate on algorithmic generation parameters that follow strict mathematical distributions. Understanding tick-level momentum shifts allows quantitative operators to map high-probability directional entries.</p>

      <h3 class="text-xl font-semibold text-purple-200 mt-6 mb-2">Risk Management via Dynamic Position Sizing</h3>
      <p class="text-slate-300 mb-4">No trading model is infallible. Long-term survivability relies entirely on strict mathematical risk boundaries and automated execution fail-safes.</p>
    `
  }
];

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Professional Brand Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedArticle(null)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-black text-xl shadow-lg shadow-purple-900/40">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wide bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                AGENTIC & CO.
              </span>
              <p className="text-[10px] tracking-widest text-purple-400 font-semibold uppercase">Advanced Systems Engineering</p>
            </div>
          </div>
          <a 
            href="https://www.make.com/en/register?pc=agenticblog" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-purple-600/30"
          >
            Deploy Automation →
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {!selectedArticle ? (
          <div>
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full mb-4">
                The Engineering Journal
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                Mastering Autonomous <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Intelligence</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Elite technical breakdowns, hardware integration strategies, and high-performance automation blueprints for modern builders.
              </p>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ARTICLES.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-slate-900/90 border border-slate-800/80 rounded-2xl overflow-hidden cursor-pointer hover:border-purple-500/60 transition-all duration-300 hover:-translate-y-1 shadow-xl"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 z-20 text-xs font-bold text-purple-300 bg-slate-950/80 backdrop-blur border border-purple-500/30 px-3 py-1 rounded-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center text-xs text-slate-500 mb-3">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="text-purple-400 text-sm font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Read Full Analysis →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="text-purple-400 font-bold mb-8 flex items-center gap-2 hover:text-purple-300 transition-colors"
            >
              ← Back to Journal Index
            </button>

            <article className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-purple-400 bg-purple-950 border border-purple-500/30 px-3 py-1 rounded-lg">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-slate-500">• Published {selectedArticle.date}</span>
                  <span className="text-xs text-slate-500">• {selectedArticle.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                  {selectedArticle.title}
                </h1>
              </div>

              <div className="h-72 rounded-2xl overflow-hidden mb-8 border border-slate-800">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div 
                className="text-slate-300 leading-relaxed space-y-4 text-base"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </article>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 mt-20 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Agentic & Co. Engineered for Autonomous Scale.</p>
      </footer>
    </div>
  );
}

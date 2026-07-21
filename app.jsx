const { useState, useEffect } = React;

const INITIAL_ARTICLES = [
  {
    id: "automated-lead-audits-make",
    title: "The $12k/Month Secret: Automating Local Business Audits using Make.com and Gemini",
    summary: "How smart solopreneurs are utilizing background APIs to run automated SEO and performance audits for local agencies—generating inbound clients while sleeping.",
    category: "Blueprints",
    readTime: "7 min",
    date: "July 20, 2026",
    author: "Osuji Joshua Kelechi",
    tags: ["Make.com", "Local SEO", "Gemini API", "Lead Generation"],
    views: "5.1k",
    likes: 412,
    content: `
      <p class="lead text-xl text-slate-300 mb-6 leading-relaxed">The easiest businesses to sell services to are local businesses who have terrible digital presence. But cold calling them is painful. Here is how we automated the entire pipeline.</p>
      
      <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Automated Strategy</h3>
      <p class="mb-4 text-slate-300 leading-relaxed">Instead of cold-calling, we send them a personalized, highly accurate audit of their website's flaws, accompanied by exact instructions on how to fix them. When they see the massive value upfront, they reach out to hire us to do it for them.</p>

      <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Make.com Connection</h3>
      <p class="mb-4 text-slate-300 leading-relaxed">Here is the exact layout of the background automation:</p>
      <ul class="list-disc pl-6 space-y-2 text-slate-300 mb-6">
        <li><strong>Google Maps Scraper:</strong> Pulls new local business listings automatically.</li>
        <li><strong>PageSpeed API:</strong> Tests their website speed and mobile responsiveness.</li>
        <li><strong>Gemini 2.5 Flash API:</strong> Evaluates their flaws and writes a friendly diagnostic email.</li>
        <li><strong>SendGrid API:</strong> Shoots the audit straight to the owner.</li>
      </ul>
    `
  },
  {
    id: "zero-to-first-ai-workflow",
    title: "Beginner Blueprint: Moving from Zero to Your First Live AI Automation Workflow in 60 Minutes",
    summary: "A completely non-technical, visual walkthrough of connecting your first API key to a visual builder to automate daily repetitive work tasks.",
    category: "Blueprints",
    readTime: "5 min",
    date: "July 18, 2026",
    author: "Osuji Joshua Kelechi",
    tags: ["Automation", "Beginner Guide", "Visual Builder", "Zero Code"],
    views: "8.2k",
    likes: 673,
    content: `
      <p class="lead text-xl text-slate-300 mb-6 leading-relaxed">You do not need a computer science degree to participate in the AI Agent economy. If you can drag and drop icons, you can build profitable background automation systems.</p>
      
      <h3 class="text-2xl font-bold text-white mt-8 mb-4">Step 1: The Visual Playground</h3>
      <p class="mb-4 text-slate-300 leading-relaxed">Sign up for a free account on Make.com. Make is a visual flowchart builder where bubbles represent different applications (Gmail, ChatGPT, Google Sheets).</p>

      <h3 class="text-2xl font-bold text-white mt-8 mb-4">Step 2: Securing Your Free Reasoning Keys</h3>
      <p class="mb-4 text-slate-300 leading-relaxed">Go to Google AI Studio, click "Get API Key", and copy your secret key string.</p>
    `
  }
];

function App() {
  const [articles, setArticles] = useState(INITIAL_ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [selectedArticle]);

  const categories = ["All", "Blueprints", "Case Studies", "Future Tech"];

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setSelectedArticle(null)}>
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-500/30">
              AV
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-white">Agentic Ventures</h1>
              <p className="text-xs text-indigo-400 font-medium">Autonomous Intelligence & Business</p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
            Subscribe
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex-grow w-full">
        {selectedArticle ? (
          /* Article Reader View */
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="text-indigo-400 hover:text-indigo-300 font-medium mb-8 inline-flex items-center space-x-2"
            >
              ← Back to articles
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 border border-indigo-800 px-3 py-1 rounded-full">
              {selectedArticle.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              {selectedArticle.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-slate-400 pb-8 border-b border-slate-800 mb-8">
              <span>By <strong>{selectedArticle.author}</strong></span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime} read</span>
            </div>
            <div 
              className="prose prose-invert max-w-none text-slate-300"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />
          </div>
        ) : (
          /* Homepage Grid View */
          <div>
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Master the AI Agent Economy
              </h2>
              <p className="text-slate-400 text-lg">
                Actionable playbooks, autonomous workflows, and monetization insights published weekly.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-2 border-b border-slate-800 mb-8 overflow-x-auto pb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeCategory === cat 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-slate-400 hover:bg-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles List */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map(article => (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-indigo-400 bg-indigo-950/60 border border-indigo-900/50 px-2.5 py-1 rounded-md">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-indigo-400 transition">
                      {article.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500 pt-4 border-t border-slate-800/60">
                    <span>{article.date}</span>
                    <span className="text-indigo-400 font-medium">Read blueprint →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/30 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Agentic Ventures. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

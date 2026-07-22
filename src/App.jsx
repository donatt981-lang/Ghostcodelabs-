import React, { useState } from 'react';

// Monetization Configs
const MAKE_AFFILIATE_URL = "https://www.make.com/en/register?pc=ghostcodelabs";

// AdSense Placeholder Component
const AdSenseBanner = ({ slotId, type = "banner" }) => {
  return (
    <div className="my-8 p-4 bg-slate-900/80 border border-slate-800 rounded-2xl text-center overflow-hidden">
      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block mb-2">Advertisement</span>
      {/* Replace 'ca-pub-XXXXXXXXXXXXXXXX' with your real Google AdSense Publisher ID */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot={slotId || "1234567890"}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <div className="py-6 px-4 bg-slate-950/50 rounded-xl border border-dashed border-slate-800 text-xs text-slate-500">
        Google AdSense Space ({type})
      </div>
    </div>
  );
};

const ARTICLES = [
  {
    id: 1,
    title: "Beyond the Black Box: Demystifying AI-Driven Driver Monitoring Systems (DMS) in 2026",
    category: "Automotive AI",
    readTime: "10 min read",
    date: "July 2026",
    summary: "An engineering deep-dive into sub-50ms computer vision pipelines, gaze vectoring, and neural edge inference built to comply with global Driver Drowsiness warning mandates.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/JE99gacIDd8",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Driver Drowsiness and Attention Warning (DDAW) systems are no longer optional features—global vehicle regulations are mandating continuous, active monitoring. However, relying on cloud processing creates dangerous latency lags, making real-time edge inference on local NPU hardware essential.</p>
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Sub-50ms Computer Vision Pipelines</h2>
      <p class="text-slate-300 mb-4">Modern cabin telemetry utilizes near-infrared (NIR) illuminated sensors paired with quantized Convolutional Neural Networks (CNNs). Operating at frame rates above 60 FPS, the vision pipeline continually evaluates three critical biometrics:</p>
      <ul class="list-disc list-inside text-slate-300 space-y-2 mb-6">
        <li><strong class="text-white">PERCLOS (Percentage of Eye Closure):</strong> Calculating the duration ratio where pupils are 80% to 100% covered over rolling time windows.</li>
        <li><strong class="text-white">Gaze Vectoring:</strong> Mapping multi-axis ocular trajectory against forward telemetry to detect driver distraction.</li>
        <li><strong class="text-white">Head-Pose Kinematics:</strong> Tracking pitch, roll, and neck drops indicative of early microsleep onset.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Reverse Engineering the CAN-Bus: Sniffing Hidden Powertrain Telemetry",
    category: "Vehicle Bus Systems",
    readTime: "11 min read",
    date: "July 2026",
    summary: "A step-by-step technical teardown on capturing, filtering, and decoding high-speed differential CAN traffic using SocketCAN, custom Python scripts, and OBD-II hardware interfaces.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/fNcJuWDjQUY",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Interfacing custom safety modules, auxiliary sensor arrays, or digital dashboards into factory vehicle architectures requires direct communication with the Controller Area Network (CAN-bus).</p>
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Differential Signal Processing and Framing</h2>
      <p class="text-slate-300 mb-4">High-speed CAN networks operate at 500 kbps over twisted-pair differential lines (CAN_H and CAN_L). To isolate specific telemetry values like throttle position or wheel speed without flooding the bus, developers utilize bitwise masking and delta state analysis.</p>
    `
  },
  {
    id: 3,
    title: "Centralized Zone Architectures: Why Legacy ECUs Are Obsolete",
    category: "Systems Engineering",
    readTime: "9 min read",
    date: "July 2026",
    summary: "Why traditional distributed vehicle architectures carrying over 100 individual ECUs are being replaced by high-speed deterministic Ethernet backbones and centralized domain compute.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/Vw6ItojaDe0",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">The classical automotive model—where every individual function requires a dedicated Electronic Control Unit (ECU)—has hit a wall. Modern vehicles carry miles of copper wiring harnesses, creating massive weight penalties.</p>
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Zone-Based Paradigm Shift</h2>
      <p class="text-slate-300 mb-4">Software-Defined Vehicles (SDVs) solve this by consolidating processing into centralized compute blocks fed by regional zone controllers connected via Time-Sensitive Networking (TSN).</p>
    `
  },
  {
    id: 4,
    title: "Vector Databases Exposed: The Engine Powering Modern AI Memory",
    category: "Data Architecture",
    readTime: "12 min read",
    date: "July 2026",
    summary: "An exhaustive engineering teardown of high-dimensional embedding spaces, approximate nearest neighbor search, and why relational databases collapse under AI scale.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/JE99gacIDd8",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Standard SQL and NoSQL databases were built for exact rows and rigid primary keys. AI models operate in semantic proximity and multi-dimensional vector spaces.</p>
    `
  },
  {
    id: 5,
    title: "Zero-Latency Webhook Routing: Building Event-Driven Systems",
    category: "Systems Engineering",
    readTime: "11 min read",
    date: "July 2026",
    summary: "How to decouple monolithic applications and handle millions of concurrent inbound signals using edge-computed serverless endpoints and message queues.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/fNcJuWDjQUY",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">When thousands of IoT devices or API nodes fire calls simultaneously, synchronous thread pools fail. True high-performance design uses asynchronous edge ingestion and message queues.</p>
    `
  }
];

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const categories = ['All', 'Automotive AI', 'Vehicle Bus Systems', 'Systems Engineering', 'Data Architecture'];

  const filteredArticles = ARTICLES.filter(art => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Monetization Announcement Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-4 py-2 text-center text-xs font-bold text-slate-950 flex items-center justify-center gap-2 shadow-md">
        <span>⚡ POWER YOUR AI WORKFLOWS:</span>
        <a 
          href={MAKE_AFFILIATE_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:text-white transition-colors"
        >
          Automate complex systems visually with Make.com →
        </a>
      </div>

      {/* Main Header Nav */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedArticle(null)}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-wider text-white">GHOSTCODE LABS</span>
              <p className="text-[10px] tracking-widest text-emerald-400 font-bold uppercase">Underground Engineering & AI</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={MAKE_AFFILIATE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:inline-flex bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/20 items-center gap-2"
            >
              🚀 Try Make.com Free
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Header Google AdSense Placement */}
        <AdSenseBanner slotId="header-slot" type="Leaderboard Header" />

        {!selectedArticle ? (
          <div>
            {/* Hero Banner Section */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 mb-10 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <span className="inline-block text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-4">
                ACTIVE NODE • ENGINE RUNNING
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                Built for <span className="text-emerald-400">Minds Who Build</span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                No fluff. Deep technical investigations, vehicle bus telemetry, edge AI architectures, and raw code blueprints for engineers.
              </p>

              {/* Make.com Featured Hero Monetization CTA */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-950 border border-emerald-500/40 p-4 rounded-2xl shadow-xl max-w-xl mx-auto text-left">
                <div className="text-3xl">⚙️</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Automate Your Systems Visual-First</h4>
                  <p className="text-xs text-slate-400">Connect APIs, databases, and LLM triggers in minutes with Make.</p>
                </div>
                <a 
                  href={MAKE_AFFILIATE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all whitespace-nowrap shadow-md shadow-emerald-500/20"
                >
                  Start Building →
                </a>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat 
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' 
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <input 
                type="text" 
                placeholder="Search blueprints & topics..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-72 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Article Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <React.Fragment key={article.id}>
                  <div 
                    onClick={() => setSelectedArticle(article)}
                    className="group bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-slate-950/90 text-emerald-400 border border-emerald-500/40 text-[11px] font-bold px-3 py-1 rounded-lg">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center text-xs text-slate-500 mb-3 font-semibold">
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button className="w-full bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 border border-emerald-500/30 font-bold text-xs py-3 rounded-xl transition-all">
                        Read Blueprint & View Video →
                      </button>
                    </div>
                  </div>

                  {/* Insert AdSense Slot After Second Article */}
                  {idx === 1 && (
                    <div className="md:col-span-3">
                      <AdSenseBanner slotId="in-feed-slot" type="In-Feed Content Stream Ad" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Inline Make.com Native Sponsorship Box */}
            <div className="my-16 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 border border-emerald-500/40 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="max-w-xl">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">PRO TOOL INTEGRATION</span>
                <h3 className="text-2xl font-black text-white mb-2">Build Enterprise Automations Without Code Clutter</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Connect your webhooks, database instances, and AI agents seamlessly. Make.com provides a visual builder for engineers who value execution speed.
                </p>
              </div>
              <a 
                href={MAKE_AFFILIATE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 whitespace-nowrap"
              >
                Claim Free Make Account →
              </a>
            </div>

            {/* Newsletter Monetization & Lead Capture */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 text-center max-w-xl mx-auto shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to Underground Tech Drops</h3>
              <p className="text-slate-400 text-xs mb-6">Get raw engineering articles, hardware blueprints, and automation workflows delivered direct.</p>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input 
                    type="email" 
                    required 
                    placeholder="engineer@domain.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 flex-1"
                  />
                  <button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-all">
                    Join Node
                  </button>
                </form>
              ) : (
                <p className="text-emerald-400 text-xs font-bold bg-emerald-950/50 p-3 rounded-xl border border-emerald-500/30">
                  ✓ Subscribed successfully! You're in the queue.
                </p>
              )}
            </div>

          </div>
        ) : (
          /* Article Detail View */
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="text-emerald-400 text-sm font-bold mb-6 flex items-center gap-2 hover:underline"
            >
              ← Back to Index
            </button>

            <article className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-500/40 px-3 py-1 rounded-lg">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-500">• {selectedArticle.date}</span>
                <span className="text-xs text-slate-500">• {selectedArticle.readTime}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {selectedArticle.title}
              </h1>

              <div className="h-80 rounded-2xl overflow-hidden mb-8 border border-slate-800">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              {/* Embedded Video Breakdown */}
              {selectedArticle.videoUrl && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wider">📺 Technical Video Breakdown</h3>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black">
                    <iframe 
                      src={selectedArticle.videoUrl} 
                      title="Technical Overview"
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Article Mid-Content AdSense Slot */}
              <AdSenseBanner slotId="article-mid-slot" type="Article Native Banner" />

              <div 
                className="text-slate-300 leading-relaxed space-y-6 text-base"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

              {/* Make.com Callout Inside Article */}
              <div className="my-10 p-6 bg-slate-950 rounded-2xl border border-emerald-500/40 text-center">
                <h4 class="font-bold text-white text-base mb-2">Automate This System Architecture</h4>
                <p class="text-xs text-slate-400 mb-4">You can visually link these data streams using Make's automation tools.</p>
                <a 
                  href={MAKE_AFFILIATE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all"
                >
                  Create Your Free Make.com Account →
                </a>
              </div>

              {/* Bottom Article AdSense */}
              <AdSenseBanner slotId="article-bottom-slot" type="Bottom Article Banner" />
            </article>
          </div>
        )}

        {/* Footer AdSense Placement */}
        <AdSenseBanner slotId="footer-slot" type="Footer Leaderboard" />

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-xs">
        <p>© 2026 Ghostcode Labs. Underground Systems & AI Intelligence.</p>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 7,
    title: "Beyond the Black Box: Demystifying AI-Driven Driver Monitoring Systems (DMS) in 2026",
    category: "Automotive Safety & AI",
    readTime: "10 min read",
    date: "July 2026",
    summary: "An engineering deep-dive into sub-50ms computer vision pipelines, gaze vectoring, and neural edge inference built to comply with global Driver Drowsiness and Attention Warning (DDAW) mandates.",
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

      <div class="my-8 p-6 bg-slate-900 rounded-2xl border border-emerald-500/40 shadow-xl">
        <h4 class="font-extrabold text-emerald-400 text-lg mb-2">⚡ Edge Hardware Optimization Note</h4>
        <p class="text-slate-300 text-sm leading-relaxed">Quantizing model weights to INT8 precision allows full facial landmark tracking models to run under 3 watts of power on local automotive NPUs, guaranteeing low-latency response times without overheating cabin electronics.</p>
      </div>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Preventing Alert Fatigue</h3>
      <p class="text-slate-300 mb-4">A critical failure mode in driver safety systems is false-positive fatigue alerts. Systems must dynamically fuse optical gaze vectors with physical steering torque sensors before triggering audio-haptic warnings to maintain driver trust.</p>
    `
  },
  {
    id: 8,
    title: "Reverse Engineering the CAN-Bus: Sniffing Hidden Powertrain Telemetry",
    category: "Vehicle Bus Systems",
    readTime: "11 min read",
    date: "July 2026",
    summary: "A step-by-step technical teardown on capturing, filtering, and decoding high-speed differential CAN traffic using SocketCAN, custom Python scripts, and OBD-II hardware interfaces.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/fNcJuWDjQUY",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Interfacing custom safety modules, auxiliary sensor arrays, or digital dashboards into factory vehicle architectures requires direct communication with the Controller Area Network (CAN-bus). Because automotive OEMs rarely publish proprietary arbitration IDs, reverse engineering synthetic CAN frames is an essential skill for custom automotive builders.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Differential Signal Processing and Framing</h2>
      <p class="text-slate-300 mb-4">High-speed CAN networks operate at 500 kbps over twisted-pair differential lines (CAN_H and CAN_L). To isolate specific telemetry values like throttle position or wheel speed without flooding the bus:</p>

      <ol class="list-decimal list-inside text-slate-300 space-y-3 mb-6">
        <li><strong class="text-white">Hardware Pairing:</strong> Connect an isolated CAN transceiver (like an MCP2515 or SocketCAN USB interface) directly into the diagnostic OBD-II bus.</li>
        <li><strong class="text-white">Bitwise Filtering:</strong> Apply bitwise masks in your code to ignore auxiliary body modules and focus exclusively on high-frequency powertrain IDs.</li>
        <li><strong class="text-white">Delta State Analysis:</strong> Record baseline logs while static, then actuate physical components (such as depressing the throttle in 10% increments) to isolate byte shifts.</li>
      </ol>

      <div class="my-8 p-6 bg-slate-900 rounded-2xl border border-emerald-500/40 shadow-xl">
        <h4 class="font-extrabold text-emerald-400 text-lg mb-2">🛠️ Lab Testing Safety Protocol</h4>
        <p class="text-slate-300 text-sm leading-relaxed">Always perform frame injection tests in read-only mode first. Writing invalid arbitration frames to an active bus can trigger limp-mode flags or lock ECU memory registers.</p>
      </div>
    `
  },
  {
    id: 9,
    title: "Centralized Zone Architectures: Why Legacy ECUs Are Obsolete",
    category: "Systems Engineering",
    readTime: "9 min read",
    date: "July 2026",
    summary: "Why traditional distributed vehicle architectures carrying over 100 individual ECUs are being replaced by high-speed deterministic Ethernet backbones and centralized domain compute.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/Vw6ItojaDe0",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">The classical automotive model—where every individual function requires a dedicated Electronic Control Unit (ECU)—has hit a wall. Modern luxury vehicles carry miles of copper wiring harnesses, creating massive weight penalties and manufacturing bottlenecks.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Zone-Based Paradigm Shift</h2>
      <p class="text-slate-300 mb-4">Software-Defined Vehicles (SDVs) solve this by consolidating processing into centralized compute blocks fed by regional zone controllers:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <h4 class="text-emerald-400 font-bold mb-1">Zone Controllers</h4>
          <p class="text-xs text-slate-400">Positioned in the vehicle corners to handle localized I/O, power routing, and sensor aggregation.</p>
        </div>
        <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <h4 class="text-emerald-400 font-bold mb-1">Central System Compute</h4>
          <p class="text-xs text-slate-400">High-performance SoC clusters dedicated to heavy workloads like ADAS fusion and autonomous path planning.</p>
        </div>
      </div>

      <p class="text-slate-300 mb-4">By deploying Time-Sensitive Networking (TSN) over Automotive Ethernet, developers can push over-the-air (OTA) updates and dynamically reconfigure vehicle hardware modules without changing physical wiring layout.</p>
    `
  },
  {
    id: 4,
    title: "Vector Databases Exposed: The Underground Engine Powering Modern AI Memory",
    category: "Data Architecture",
    readTime: "12 min read",
    date: "July 2026",
    summary: "An exhaustive engineering teardown of high-dimensional embedding spaces, approximate nearest neighbor search, and why traditional relational databases completely collapse under AI scale.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/JE99gacIDd8",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Standard SQL and NoSQL databases were built for accountants and rigid spreadsheets—storing exact rows, precise primary keys, and static string matches. But artificial intelligence models do not think in exact rigid boundaries; they operate entirely in semantic proximity, multi-dimensional vector spaces, and probability distributions.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Brutal Math Behind High-Dimensional Spaces</h2>
      <p class="text-slate-300 mb-4">When a massive text corpus, codebase, or sensor log is ingested by an embedding model, it is mapped into a coordinate field consisting of thousands of dimensions. Traditional relational databases choke when trying to query this volume because calculating exact Euclidean distance across millions of high-dimensional vectors creates an insurmountable CPU bottleneck.</p>
      
      <p class="text-slate-300 mb-4">Underground architects bypass this by implementing Approximate Nearest Neighbor (ANN) algorithms coupled with Hierarchical Navigable Small World (HNSW) graphs. Instead of searching every single vector node, the system traverses localized mathematical clusters, dropping query execution times from seconds down to microseconds.</p>

      <div class="my-8 p-6 bg-slate-900 rounded-2xl border border-emerald-500/40 shadow-xl">
        <h4 class="font-extrabold text-emerald-400 text-lg mb-2">⚡ Final Project & Thesis Blueprint Note</h4>
        <p class="text-slate-300 text-sm leading-relaxed">If you are deploying Retrieval-Augmented Generation (RAG) for your final-year engineering project, balancing document chunk sizes with overlapping boundary tokens is the single variable that separates a system yielding precise technical answers from one producing hallucinated noise.</p>
      </div>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Architecting Fault-Tolerant Retrieval Loops</h3>
      <p class="text-slate-300 mb-4">When designing production pipelines, your database indexing parameters must match your hardware memory constraints. Setting an overly dense construction parameter on your index graph will exhaust RAM under heavy multi-user concurrent loads.</p>

      <div class="my-10 p-8 bg-slate-900/90 rounded-2xl border border-emerald-500/50 text-center shadow-2xl">
        <h4 class="font-black text-white text-xl mb-3">Automate Your Data Infrastructure</h4>
        <p class="text-sm text-slate-400 mb-6 max-w-lg mx-auto">Connect your database event triggers directly to visual orchestration pipelines.</p>
        <a href="https://www.make.com/en/register?pc=ghostcodelabs" target="_blank" rel="noopener noreferrer" class="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20 text-base">Claim Your Free Make.com Account →</a>
      </div>
    `
  },
  {
    id: 5,
    title: "Zero-Latency Webhook Routing: Building Unbreakable Event-Driven Systems",
    category: "Systems Engineering",
    readTime: "11 min read",
    date: "July 2026",
    summary: "How elite builders decouple monolithic applications and handle millions of concurrent inbound signals using edge-computed serverless endpoints and message queues.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/fNcJuWDjQUY",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Monolithic codebases are ticking time bombs under heavy concurrent loads. When thousands of IoT devices, payment gateways, or user interfaces fire API calls simultaneously, a synchronous thread pool will inevitably saturate, drop connections, and crash your application server.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Art of Asynchronous Decoupling</h2>
      <p class="text-slate-300 mb-4">True high-performance system design relies on an absolute separation of concerns between inbound ingestion and backend execution. When a webhook hits your server, your edge worker should never attempt to process the heavy logic synchronously.</p>
      
      <p class="text-slate-300 mb-4">Instead, the edge function validates the cryptographic signature of the payload, issues an immediate HTTP 200 acknowledgment to the sender, and pushes the raw payload into an isolated distributed message broker queue (such as Redis streams or Apache Kafka) for background processing.</p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Handling Retries and Exponential Backoffs</h3>
      <p class="text-slate-300 mb-4">External APIs fail constantly. If your downstream worker crashes during payload transformation, a poorly configured webhook listener will lose data permanently. Implementing idempotency keys and jittered exponential backoff retry loops ensures zero packet loss under catastrophic network failures.</p>
    `
  },
  {
    id: 6,
    title: "Synthetic Volatility: The Mathematical Code Behind Algorithmic Risk Loops",
    category: "Quantitative Tech",
    readTime: "13 min read",
    date: "July 2026",
    summary: "A rigorous mathematical breakdown of stochastic differential equations, pseudo-random distribution models, and programmatic risk management architectures.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/Vw6ItojaDe0",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Analyzing continuous price volatility and synthetic asset structures requires mathematical frameworks that model complex stochastic environments without relying on fragile historical charting assumptions.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Programming Stochastic Differential Equations</h2>
      <p class="text-slate-300 mb-4">Quantitative engineers building automated trading simulators and risk-assessment engines rely on custom script loops that factor in volatility clustering. By modeling variance as a dynamic, self-correcting variable rather than a static constant, simulation models match real-world stress conditions much more accurately.</p>

      <div class="my-8 p-6 bg-slate-900 rounded-2xl border border-emerald-500/40 shadow-xl">
        <h4 class="font-extrabold text-emerald-400 text-lg mb-2">📐 Mathematical Specification Note</h4>
        <p class="text-slate-300 text-sm leading-relaxed">When coding mathematical models in Python or JavaScript, floating-point rounding errors accumulate rapidly during iterative loops. Utilizing high-precision numerical libraries prevents compounding calculation drift over long simulation runs.</p>
      </div>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Automating Circuit Breakers</h3>
      <p class="text-slate-300 mb-4">No algorithmic script should run unsupervised without automated safety tripwires. Hardcoding real-time drawdown thresholds that automatically sever execution threads protects your capital when unexpected anomaly spikes occur in the telemetry feed.</p>
    `
  },
  {
    id: 1,
    title: "Building Autonomous Agent Loops: How to Make LLMs Execute Tasks While You Sleep",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "July 2026",
    summary: "Stop treating AI like a static chat box. Here is the exact architectural blueprint for chaining language models into self-correcting execution loops.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/zjkBMFhNj_g",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Most people use artificial intelligence like a glorified search engine—type a prompt, read the text, close the tab. But underground builders and systems engineers are using multi-stage agent loops to automate entire digital workflows from end to end.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Anatomy of an Autonomous Loop</h2>
      <p class="text-slate-300 mb-4">An agentic loop consists of three core phases: Perception, Reasoning, and Execution. Instead of generating a single output, the model evaluates its own code or data response, checks for compilation or logical errors, and refines the payload before sending it downstream.</p>
      
      <div class="my-8 p-6 bg-slate-900 rounded-2xl border border-emerald-500/40 shadow-xl">
        <h4 class="font-extrabold text-emerald-400 text-lg mb-2">⚡ Project Architecture Note</h4>
        <p class="text-slate-300 text-sm leading-relaxed">By combining edge webhooks with distributed JSON payloads, you can build self-healing pipelines that require zero human intervention once deployed.</p>
      </div>

      <div class="my-10 p-8 bg-slate-900/90 rounded-2xl border border-emerald-500/50 text-center shadow-2xl">
        <h4 class="font-black text-white text-xl mb-3">Scale Your Workflow Automation</h4>
        <p class="text-sm text-slate-400 mb-6 max-w-lg mx-auto">Connect your automated trigger scripts to enterprise visual orchestration builders.</p>
        <a href="https://www.make.com/en/register?pc=ghostcodelabs" target="_blank" rel="noopener noreferrer" class="inline-block bg-emerald-600 hover:bg-emerald-500 text-slate-950 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/50 text-base">Claim Your Free Make.com Account →</a>
      </div>
    `
  },
  {
    id: 2,
    title: "The Reality of Edge Computing: Why Local Neural Nets Beat Cloud Latency",
    category: "Systems Engineering",
    readTime: "9 min read",
    date: "July 2026",
    summary: "An engineering deep-dive into deploying compressed computer vision models directly onto micro-silicon hardware nodes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/7EhRkOXpby0",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Relying on cloud server round-trips for real-time sensor data introduces fatal latency spikes. When handling high-frequency telemetry, intelligence must live directly on the physical hardware.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Optimizing Memory Bandwidth on Silicon Nodes</h2>
      <p class="text-slate-300 mb-4">When compiling neural weights for edge deployment, quantization and pruning techniques reduce memory overhead without sacrificing inference accuracy.</p>
    `
  },
  {
    id: 3,
    title: "Advanced Prompt Chaining: Forcing LLMs to Write Production-Grade Code",
    category: "Software Architecture",
    readTime: "7 min read",
    date: "July 2026",
    summary: "How to eliminate hallucinations by setting up adversarial verification steps between multiple model instances.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Generic prompts yield generic code. If you want production-ready architecture, you have to force models through strict adversarial code-review pipelines.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Multi-Stage Audit Protocol</h2>
      <p class="text-slate-300 mb-4">Model A writes the baseline logic; Model B analyzes it specifically for security vulnerabilities and race conditions; Model C compiles the final tested patch.</p>
    `
  }
];

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Brand Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedArticle(null)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-500 flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-950/50 text-slate-950">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                GHOSTCODE LABS
              </span>
              <p className="text-[10px] tracking-widest text-emerald-400 font-bold uppercase">Underground Engineering & AI</p>
            </div>
          </div>
          <a 
            href="https://www.make.com/en/register?pc=ghostcodelabs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20"
          >
            Deploy Systems →
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {!selectedArticle ? (
          <div>
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-950/90 border border-emerald-500/40 px-4 py-1.5 rounded-full mb-6 shadow-inner">
                💀 Raw Engineering Blueprints & AI Intelligence
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                Built for <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Minds Who Build</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                No fluff. Deep technical investigations, autonomous system architectures, and raw project breakdowns for high-performance builders.
              </p>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {ARTICLES.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-slate-900/90 border border-slate-800/90 rounded-2xl overflow-hidden cursor-pointer hover:border-emerald-500/80 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-3 left-3 z-20 text-xs font-bold text-emerald-300 bg-slate-950/90 backdrop-blur border border-emerald-500/40 px-3 py-1 rounded-lg">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center text-xs text-slate-400 mb-3 font-medium">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <div className="text-emerald-400 text-sm font-bold flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
                      Read Breakdown →
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Subscription Box */}
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/40 rounded-3xl p-8 md:p-12 text-center shadow-2xl mb-12">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-2xl font-black text-white mb-3">Lock In Your Access</h3>
              <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                Get our raw engineering breakdowns and technical project drops straight to your inbox.
              </p>
              {!emailSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email address..." 
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 flex-1 max-w-sm"
                  />
                  <button 
                    type="submit" 
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-900/50 border border-emerald-500/50 rounded-xl p-4 text-emerald-200 font-semibold text-sm">
                  ✓ Success! You are locked in.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="text-emerald-400 font-bold mb-8 flex items-center gap-2 hover:text-emerald-300 transition-colors"
            >
              ← Back to Index
            </button>

            <article className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/40 px-3 py-1 rounded-lg">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-slate-400">• Published {selectedArticle.date}</span>
                  <span className="text-xs text-slate-400">• {selectedArticle.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6 text-white">
                  {selectedArticle.title}
                </h1>
              </div>

              <div className="h-80 md:h-96 rounded-2xl overflow-hidden mb-10 border border-slate-800 shadow-xl">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Educational Video Embed */}
              {selectedArticle.videoUrl && (
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-emerald-300 mb-3">📺 Technical Video Breakdown</h3>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
                    <iframe 
                      src={selectedArticle.videoUrl} 
                      title="Educational Technical Breakdown"
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              <div 
                className="text-slate-300 leading-relaxed space-y-6 text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </article>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 mt-20 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Ghostcode Labs. Raw Intelligence & Systems.</p>
      </footer>
    </div>
  );
}

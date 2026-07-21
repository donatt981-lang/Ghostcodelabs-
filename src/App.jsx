import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "Building Autonomous Workflows with LLMs & Make.com",
    category: "AI Automation",
    readTime: "5 min read",
    date: "Jul 2026",
    summary: "How to connect modern LLMs directly to Make.com to automate content generation, customer support, and business workflows without writing backend code.",
    content: `
      <h2>The Shift to Agentic Workflows</h2>
      <p>Traditional automation involved simple linear triggers: <em>"When an email arrives, save the attachment to Google Drive."</em> Today, AI agents allow us to introduce decision-making loops into our business processes.</p>
      
      <h3>Why Make.com is the Ultimate Engine</h3>
      <p>While custom code gives you control, Make.com provides a visual builder that dramatically speeds up development while remaining flexible enough to handle complex API calls.</p>

      <div style="margin: 1.5rem 0; padding: 1rem; background-color: rgba(147, 51, 234, 0.2); border-radius: 0.5rem; border: 1px solid rgba(168, 85, 247, 0.4);">
        <h4 style="font-weight: bold; color: #d8b4fe; margin-bottom: 0.5rem;">🚀 Ready to build your own AI automation?</h4>
        <p style="font-size: 0.875rem; color: #cbd5e1; margin-bottom: 0.75rem;">Get started for free on Make.com and build your first autonomous workflow today.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #9333ea; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; font-weight: 600; text-decoration: none;">Claim Your Free Make.com Plan →</a>
      </div>

      <p>By connecting custom webhooks directly to OpenAI or Gemini endpoints inside Make, you can parse raw data, format outputs, and post directly to CMS platforms automatically.</p>
    `
  },
  {
    id: 2,
    title: "The Solopreneur AI Stack for 2026",
    category: "Solopreneurship",
    readTime: "7 min read",
    date: "Jul 2026",
    summary: "A curated list of no-code tools and AI models that allow a single founder to operate with the efficiency of a 10-person team.",
    content: `
      <h2>Leveraging AI as a Force Multiplier</h2>
      <p>Running a digital business solo used to mean spending 80% of your time on operational overhead. With modern automation pipelines, that dynamic is flipped.</p>

      <h3>Core Infrastructure</h3>
      <ul>
        <li><strong>Content Pipeline:</strong> Gemini API + Custom Prompt Templates</li>
        <li><strong>Workflow Orchestration:</strong> Make.com</li>
        <li><strong>Frontend Hosting:</strong> Vercel</li>
      </ul>

      <div style="margin: 1.5rem 0; padding: 1rem; background-color: rgba(147, 51, 234, 0.2); border-radius: 0.5rem; border: 1px solid rgba(168, 85, 247, 0.4);">
        <h4 style="font-weight: bold; color: #d8b4fe; margin-bottom: 0.5rem;">⚡ Automate Your Solopreneur Stack</h4>
        <p style="font-size: 0.875rem; color: #cbd5e1; margin-bottom: 0.75rem;">Connect your favorite apps and put your business on autopilot with Make.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #9333ea; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; font-weight: 600; text-decoration: none;">Try Make for Free →</a>
      </div>
    `
  },
  {
    id: 3,
    title: "Prompt Engineering Formulas for Technical Writing",
    category: "Prompting",
    readTime: "4 min read",
    date: "Jun 2026",
    summary: "Master structured prompt patterns like RTF (Role, Task, Format) to produce clean, publish-ready documentation and blog posts.",
    content: `
      <h2>The RTF Prompting Framework</h2>
      <p>To get high-quality outputs consistently, structure your prompts into clear sections rather than asking open-ended questions.</p>
      
      <p>When generating automated tutorials, feed the AI a strict JSON schema or HTML structure to ensure seamless integration into your web application.</p>
    `
  }
];

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div style="min-height: 100vh; background-color: #020617; color: #f8fafc; font-family: system-ui, -apple-system, sans-serif;">
      {/* Header */}
      <header style="border-bottom: 1px solid #1e293b; background-color: rgba(15, 23, 42, 0.8); backdrop-filter: blur(8px); position: sticky; top: 0; z-index: 50;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: bold; font-size: 1.25rem;">
            <span style="color: #a855f7;">✨ Agentic</span>
            <span>Blog</span>
          </div>
          <a 
            href="https://www.make.com/en/register?pc=agenticblog" 
            target="_blank" 
            rel="noopener noreferrer" 
            style="background-color: #9333ea; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; text-decoration: none;"
          >
            Try Make Free
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main style="max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem;">
        {!selectedArticle ? (
          <div>
            <div style="text-align: center; margin-bottom: 3rem;">
              <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">
                Autonomous Systems & <span style="color: #c084fc;">AI Automation</span>
              </h1>
              <p style="color: #94a3b8; max-width: 600px; margin: 0 auto;">
                Blueprints, workflows, and insights for building intelligent applications and automated systems.
              </p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
              {ARTICLES.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 0.75rem; padding: 1.5rem; cursor: pointer; transition: all 0.2s;"
                >
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                    <span style="font-size: 0.75rem; font-weight: 600; color: #c084fc; background-color: rgba(168, 85, 247, 0.1); padding: 0.25rem 0.5rem; border-radius: 0.25rem;">
                      {article.category}
                    </span>
                    <span style="font-size: 0.75rem; color: #64748b;">{article.readTime}</span>
                  </div>
                  <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">{article.title}</h2>
                  <p style="color: #94a3b8; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem;">{article.summary}</p>
                  <div style="color: #a855f7; font-size: 0.875rem; font-weight: 600; display: flex; align-items: center; gap: 0.25rem;">
                    Read Article →
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style="max-width: 800px; margin: 0 auto;">
            <button 
              onClick={() => setSelectedArticle(null)}
              style="background: none; border: none; color: #a855f7; font-weight: 600; cursor: pointer; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"
            >
              ← Back to articles
            </button>

            <article>
              <div style="margin-bottom: 2rem;">
                <span style="font-size: 0.875rem; font-weight: 600; color: #c084fc; background-color: rgba(168, 85, 247, 0.1); padding: 0.25rem 0.75rem; border-radius: 0.25rem;">
                  {selectedArticle.category}
                </span>
                <h1 style="font-size: 2.25rem; font-weight: 800; margin-top: 0.75rem; margin-bottom: 0.5rem;">
                  {selectedArticle.title}
                </h1>
                <p style="color: #64748b; font-size: 0.875rem;">Published {selectedArticle.date} • {selectedArticle.readTime}</p>
              </div>

              <div 
                style="color: #cbd5e1; line-height: 1.75;"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </article>
          </div>
        )}
      </main>
    </div>
  );
}

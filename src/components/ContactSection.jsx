import React, { useState } from 'react';
import { identity } from '../data/identity';
import { links } from '../data/links';
import { Mail, Github, Instagram, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(identity.publicEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          setFormSubmitted(true);
          return;
        }
      } catch (err) {
        console.error('Form dispatch fallback to mailto:', err);
      }
    }
    // Fallback: Safe client-side message draft handler
    const mailtoUrl = `mailto:${identity.publicEmail}?subject=Project inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0FB5AE] border-b-4 border-[#16120F] text-[#16120F] relative overflow-hidden">
      
      {/* Background Section Accent Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Contact Proposal & Pointing Cutout */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            <h2 className="text-fluid-h2 font-black tracking-tight text-[#16120F] leading-tight">
              Got a project, a story, or a strange idea?
            </h2>

            <p className="text-fluid-lead text-[#16120F]/90 font-medium leading-relaxed max-w-[65ch]">
              Whether it's a product to build, a film to shoot or a story to tell, I'd love to hear it. Let's make something unmistakable.
            </p>

            {/* Email Quick Action Card with Pointing Cutout */}
            <div className="relative bg-[#FFFDF6] p-6 rounded-lg border-4 border-[#16120F] shadow-[8px_8px_0px_#16120F] max-w-md">
              
              <div className="text-xs font-mono font-bold text-[#16120F]/70 uppercase mb-2">
                PRIMARY EMAIL
              </div>

              <div className="flex items-center justify-between gap-3 bg-[#0FB5AE]/15 p-3 rounded border-2 border-[#16120F]">
                <span className="font-mono font-bold text-sm sm:text-base text-[#16120F] select-all">
                  {identity.publicEmail}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFB703] text-[#16120F] border-2 border-[#16120F] rounded font-bold text-xs shadow-[2px_2px_0px_#16120F] hover:bg-[#16120F] hover:text-[#FFFDF6] transition-all"
                  aria-label="Copy Atif's email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-700" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Smaller Cutout pointing towards email button */}
              <div className="absolute -top-16 -right-10 hidden sm:block w-28 pointer-events-none filter drop-shadow-[4px_4px_0px_#16120F] rotate-12">
                <img
                  src="/assets/atif-cutout.webp"
                  alt="Mini Atif cutout pointing toward direct email contact button"
                  width="112"
                  height="136"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-[#16120F]/15 flex items-center justify-between text-xs font-mono text-[#16120F]/70">
                <span>Secondary: {identity.secondaryEmail}</span>
                <span>Response: &lt; 24h</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={links.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#16120F] text-[#FFFDF6] rounded-md font-bold text-xs shadow-[3px_3px_0px_#FFFDF6] hover:bg-[#5B2EE0] transition-colors"
              >
                <Github size={14} />
                <span>GitHub ({links.github.handle})</span>
              </a>

              <a
                href={links.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#E5383B] text-[#FFFDF6] rounded-md font-bold text-xs shadow-[3px_3px_0px_#16120F] hover:bg-[#FFB703] hover:text-[#16120F] transition-colors"
              >
                <Instagram size={14} />
                <span>Instagram ({links.instagram.handle})</span>
              </a>

              <a
                href={links.grayvale.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFDF6] text-[#16120F] border-2 border-[#16120F] rounded-md font-bold text-xs shadow-[3px_3px_0px_#16120F] hover:bg-[#FFB703] transition-colors"
              >
                <span>Grayvale Systems</span>
              </a>
            </div>

          </div>

          {/* Right: Direct Client-Side Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFDF6] p-6 sm:p-8 rounded-lg border-4 border-[#16120F] shadow-[10px_10px_0px_#16120F]">
              
              <div className="flex items-center gap-2 pb-4 mb-4 border-b-2 border-[#16120F]">
                <MessageSquare size={16} className="text-[#0FB5AE]" />
                <h3 className="text-xl font-black text-[#16120F]">
                  Send a dispatch
                </h3>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-[#0FB5AE] border-2 border-[#16120F] rounded-full mx-auto flex items-center justify-center text-xl shadow-[3px_3px_0px_#16120F]">
                    ✓
                  </div>
                  <h4 className="text-xl font-black text-[#16120F]">
                    Draft launched!
                  </h4>
                  <p className="text-sm text-[#16120F]/80">
                    Your email client should open with your message prepared for Atif.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono font-bold underline mt-2 text-[#5B2EE0]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#16120F] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FFFDF6] border-2 border-[#16120F] rounded-md font-medium text-sm text-[#16120F] placeholder-[#16120F]/40 shadow-[2px_2px_0px_#16120F] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#16120F] mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FFFDF6] border-2 border-[#16120F] rounded-md font-medium text-sm text-[#16120F] placeholder-[#16120F]/40 shadow-[2px_2px_0px_#16120F] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#16120F] mb-1">
                      The Idea / Scope / Timeline
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about what you're building, shooting, or exploring..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FFFDF6] border-2 border-[#16120F] rounded-md font-medium text-sm text-[#16120F] placeholder-[#16120F]/40 shadow-[2px_2px_0px_#16120F] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FFB703] text-[#16120F] font-black text-sm uppercase tracking-wide rounded-md border-2 border-[#16120F] shadow-[4px_4px_0px_#16120F] hover:shadow-[2px_2px_0px_#16120F] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Send directly to Atif</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}


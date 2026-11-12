import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Film, Volume2, VolumeX, Menu, X } from 'lucide-react';

export default function Navbar({ voice, setVoice }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "The Lab", href: "#lab" },
    { label: "The Studio", href: "#studio" },
    { label: "Sticker Board", href: "#stickers" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFDF6]/95 backdrop-blur-md py-3 border-b-2 border-[#16120F] shadow-[0_4px_0_0_#16120F]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xl font-black tracking-tight text-[#16120F] focus:outline-none"
        >
          <span className="w-8 h-8 rounded-md bg-[#FFB703] border-2 border-[#16120F] flex items-center justify-center text-sm font-black shadow-[2px_2px_0px_#16120F] group-hover:-rotate-6 transition-transform">
            AK
          </span>
          <span className={voice === 'engineer' ? 'font-engineer tracking-tight' : 'font-creator tracking-normal font-bold'}>
            Atif Khan
          </span>
          <span className="hidden sm:inline-block text-xs uppercase px-2 py-0.5 rounded border border-[#16120F] bg-[#0FB5AE]/15 font-mono font-bold">
            Bhopal, IN
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-[#16120F] hover:text-[#0FB5AE] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#16120F] hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Voice Toggle Switch (Lab / Studio) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#16120F] p-1 rounded-full border-2 border-[#16120F] shadow-[3px_3px_0px_#FFB703]">
            <button
              onClick={() => setVoice('engineer')}
              aria-pressed={voice === 'engineer'}
              title="Switch to Engineer Voice (The Lab)"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                voice === 'engineer'
                  ? 'bg-[#0FB5AE] text-[#16120F] shadow-[1px_1px_0px_#FFFDF6]'
                  : 'text-[#FFFDF6] hover:text-[#0FB5AE]'
              }`}
            >
              <Terminal size={14} />
              <span className="hidden sm:inline font-mono">The Lab</span>
            </button>

            <button
              onClick={() => setVoice('creator')}
              aria-pressed={voice === 'creator'}
              title="Switch to Creator Voice (The Studio)"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                voice === 'creator'
                  ? 'bg-[#5B2EE0] text-[#FFFDF6] shadow-[1px_1px_0px_#FFB703]'
                  : 'text-[#FFFDF6] hover:text-[#FFB703]'
              }`}
            >
              <Film size={14} />
              <span className="hidden sm:inline font-creator">The Studio</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border-2 border-[#16120F] bg-[#FFFDF6] shadow-[2px_2px_0px_#16120F] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF6] border-b-2 border-[#16120F] px-6 py-6 shadow-[0_8px_0_0_#16120F] animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#16120F] py-2 border-b border-[#16120F]/10 hover:text-[#0FB5AE]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs text-[#16120F]/70 font-mono">
              <span>Status: Active in Bhopal</span>
              <span className="text-[#0FB5AE] font-bold">● Available for Work</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


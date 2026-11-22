import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Film, Volume2, VolumeX, Menu, X, Star, Code, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ voice, setVoice, activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technicalNavItems = [
    { label: "About", href: "#about" },
    { label: "The Lab", href: "#lab" },
    { label: "The Studio", href: "#studio" },
    { label: "Stickers", href: "#stickers" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" }
  ];

  const creativeNavItems = [
    { label: "Screenplays", href: "#screenwriting" },
    { label: "Cinema", href: "#framebyframe" },
    { label: "@recommends", href: "#recommends" },
    { label: "Library", href: "#library" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#creative-contact" }
  ];

  const navItems = activeTab === 'creative' ? creativeNavItems : technicalNavItems;
  const isY2K = theme === 'y2k';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isY2K
            ? "bg-[#000354]/95 backdrop-blur-md py-3 border-b-2 border-[#EF3969] shadow-[0_4px_0_0_#EF3969]"
            : "bg-[#FFFDF6]/95 backdrop-blur-md py-3 border-b-2 border-[#16120F] shadow-[0_4px_0_0_#16120F]"
          : "bg-transparent py-5"
      }`}
    >
      {/* Y2K Tartan Underline */}
      {isY2K && (
        <div className="absolute bottom-0 left-0 right-0 h-1 tartan-pattern pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#"
          className={`group flex items-center gap-2.5 text-xl font-black tracking-tight focus:outline-none ${
            isY2K ? 'text-[#E1C296]' : 'text-[#16120F]'
          }`}
        >
          <span
            className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-black transition-transform group-hover:-rotate-6 ${
              isY2K
                ? 'bg-[#EF3969] border-2 border-[#000354] text-[#000354] shadow-[2px_2px_0px_#E1C296]'
                : 'bg-[#FFB703] border-2 border-[#16120F] text-[#16120F] shadow-[2px_2px_0px_#16120F]'
            }`}
          >
            {isY2K ? '★' : 'AK'}
          </span>
          <span className={voice === 'engineer' ? 'font-engineer tracking-tight' : 'font-creator tracking-normal font-bold'}>
            Atif Khan
          </span>
          <span
            className={`hidden sm:inline-block text-xs uppercase px-2 py-0.5 rounded font-mono font-bold ${
              isY2K
                ? 'border border-[#EF3969] bg-[#EF3969]/20 text-[#E1C296]'
                : 'border border-[#16120F] bg-[#0FB5AE]/15 text-[#16120F]'
            }`}
          >
            {activeTab === 'creative' ? '★ CREATIVE' : 'BHOPAL, IN'}
          </span>
        </a>

        {/* TOP-LEVEL SEGMENTED SWITCH: Technical ⇄ Creative */}
        <div className="flex items-center p-1 rounded-full border-2 border-current bg-current/5 shadow-sm">
          <button
            onClick={() => setActiveTab('technical')}
            aria-pressed={activeTab === 'technical'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono transition-all ${
              activeTab === 'technical'
                ? isY2K
                  ? 'bg-[#EF3969] text-[#000354] shadow-[1px_1px_0px_#E1C296]'
                  : 'bg-[#0FB5AE] text-[#16120F] shadow-[2px_2px_0px_#16120F]'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Code size={13} />
            <span>Technical</span>
          </button>

          <button
            onClick={() => setActiveTab('creative')}
            aria-pressed={activeTab === 'creative'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono transition-all ${
              activeTab === 'creative'
                ? 'bg-[#EF3969] text-[#000354] shadow-[2px_2px_0px_#E1C296]'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <span>★</span>
            <span>Creative</span>
          </button>
        </div>

        {/* Desktop Section Links */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-mono font-bold uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all ${
                isY2K
                  ? 'text-[#E1C296] hover:text-[#EF3969] after:bg-[#EF3969]'
                  : 'text-[#16120F] hover:text-[#0FB5AE] after:bg-[#16120F]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Theme Switcher & Voice/Top */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* THEME TOGGLE BUTTON (Classic ⇄ Y2K Tartan) */}
          <button
            onClick={toggleTheme}
            aria-pressed={isY2K}
            title={isY2K ? "Switch to Theme 1: Classic" : "Switch to Theme 2: Y2K Tartan Zine"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono transition-all focus:outline-none focus-visible:ring-2 ${
              isY2K
                ? 'bg-[#EF3969] text-[#000354] border-2 border-[#E1C296] shadow-[2px_2px_0px_#E1C296] hover:scale-105'
                : 'bg-[#FFFDF6] text-[#16120F] border-2 border-[#16120F] shadow-[2px_2px_0px_#16120F] hover:bg-[#FFB703]'
            }`}
          >
            <span className={isY2K ? "text-[#000354] animate-spin" : "text-[#FFB703]"}>
              ★
            </span>
            <span className="hidden sm:inline">
              {isY2K ? "Y2K Zine" : "Classic"}
            </span>
            <span className="sm:hidden font-black">
              {isY2K ? "Y2K" : "T1"}
            </span>
          </button>

          {/* Voice Switcher (Only shown on technical tab for clarity) */}
          {activeTab === 'technical' && (
            <div
              className={`hidden sm:flex items-center p-1 rounded-full border-2 ${
                isY2K
                  ? 'bg-[#000354] border-[#E1C296] shadow-[2px_2px_0px_#EF3969]'
                  : 'bg-[#16120F] border-[#16120F] shadow-[2px_2px_0px_#FFB703]'
              }`}
            >
              <button
                onClick={() => setVoice('engineer')}
                aria-pressed={voice === 'engineer'}
                title="Switch to Engineer Voice"
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold font-mono transition-all ${
                  voice === 'engineer'
                    ? isY2K
                      ? 'bg-[#EF3969] text-[#000354]'
                      : 'bg-[#0FB5AE] text-[#16120F]'
                    : 'text-[#FFFDF6] hover:text-[#0FB5AE]'
                }`}
              >
                Lab
              </button>
              <button
                onClick={() => setVoice('creator')}
                aria-pressed={voice === 'creator'}
                title="Switch to Creator Voice"
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold font-mono transition-all ${
                  voice === 'creator'
                    ? isY2K
                      ? 'bg-[#E1C296] text-[#000354]'
                      : 'bg-[#5B2EE0] text-[#FFFDF6]'
                    : 'text-[#FFFDF6] hover:text-[#FFB703]'
                }`}
              >
                Studio
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md border-2 focus:outline-none ${
              isY2K
                ? 'border-[#E1C296] bg-[#000354] text-[#E1C296] shadow-[2px_2px_0px_#EF3969]'
                : 'border-[#16120F] bg-[#FFFDF6] text-[#16120F] shadow-[2px_2px_0px_#16120F]'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-6 py-6 border-b-2 animate-in slide-in-from-top-2 ${
            isY2K
              ? 'bg-[#000354] border-[#EF3969] text-[#E1C296] shadow-[0_8px_0_0_#EF3969]'
              : 'bg-[#FFFDF6] border-[#16120F] text-[#16120F] shadow-[0_8px_0_0_#16120F]'
          }`}
        >
          <div className="flex flex-col gap-4">
            {/* Tab switch inside mobile menu */}
            <div className="flex items-center gap-2 pb-3 border-b border-current/20">
              <button
                onClick={() => { setActiveTab('technical'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-mono font-bold rounded border ${
                  activeTab === 'technical'
                    ? 'bg-[#0FB5AE] text-[#16120F] border-current'
                    : 'border-current/30'
                }`}
              >
                Technical Tab
              </button>
              <button
                onClick={() => { setActiveTab('creative'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-mono font-bold rounded border ${
                  activeTab === 'creative'
                    ? 'bg-[#EF3969] text-[#000354] border-current font-black'
                    : 'border-current/30'
                }`}
              >
                ★ Creative Tab
              </button>
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold py-1.5 border-b transition-colors font-mono ${
                  isY2K
                    ? 'border-[#EF3969]/20 hover:text-[#EF3969]'
                    : 'border-[#16120F]/10 hover:text-[#0FB5AE]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs font-mono opacity-80">
              <span>Bhopal, MP, India</span>
              <span className="font-bold text-[#EF3969]">● Available for Work</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

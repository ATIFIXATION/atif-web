import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import LabSection from './components/LabSection';
import StickerBoard from './components/StickerBoard';
import StudioSection from './components/StudioSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import TartanViewportFrame from './components/TartanViewportFrame';
import ThemeStarTransition from './components/ThemeStarTransition';
import Y2KStarCursor from './components/Y2KStarCursor';

function PortfolioApp() {
  const [voice, setVoice] = useState('engineer'); // 'engineer' | 'creator'
  const { theme } = useTheme();
  const isY2K = theme === 'y2k';

  return (
    <div
      className={`min-h-screen antialiased transition-colors duration-300 ${
        isY2K ? 'bg-[#000354] text-[#E1C296]' : 'bg-[#FFFDF6] text-[#16120F]'
      } ${voice === 'engineer' ? 'theme-engineer' : 'theme-creator'}`}
    >
      {/* Viewport Tartan Frame for Theme 2 (Zero layout shift) */}
      <TartanViewportFrame />

      {/* Dramatic Fullscreen Hot-Pink Star Reveal Transition */}
      <ThemeStarTransition />

      {/* Desktop Star Cursor Trail for Y2K Theme */}
      <Y2KStarCursor />

      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#FFB703] text-[#16120F] font-black text-xs uppercase border-2 border-[#16120F] shadow-[3px_3px_0px_#16120F] rounded"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar voice={voice} setVoice={setVoice} />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* 1. Hero: Classic Variable Font OR Y2K Split-Block Star Window */}
        <Hero voice={voice} setVoice={setVoice} />

        {/* Section Divider: Wavy Inked Line in Classic / Mini Tartan Star Strip in Y2K */}
        <div className="w-full py-3 overflow-hidden pointer-events-none select-none">
          {isY2K ? (
            <div className="flex items-center justify-center gap-4 text-[#EF3969] text-xs font-mono font-bold tracking-widest">
              <span>★ ★ ★</span>
              <span className="w-16 h-0.5 bg-[#EF3969]" />
              <span className="text-[#E1C296]">THE TWO WORLDS</span>
              <span className="w-16 h-0.5 bg-[#EF3969]" />
              <span>★ ★ ★</span>
            </div>
          ) : (
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 1200 30" fill="none" preserveAspectRatio="none">
              <path
                d="M 0 15 Q 150 0, 300 15 T 600 15 T 900 15 T 1200 15"
                stroke="#16120F"
                strokeWidth="3"
                strokeDasharray="10 8"
              />
            </svg>
          )}
        </div>

        {/* 2. About: Two brains. One builder. */}
        <AboutSection />

        {/* 3. The Lab: Technical Quarter (Lagoon Field in Classic / Navy in Y2K) */}
        <LabSection />

        {/* 4. Signature Draggable Sticker Board */}
        <StickerBoard />

        {/* 5. The Studio: Creative Realm (Ultraviolet in Classic / Navy in Y2K) */}
        <StudioSection />

        {/* 6. Experience & Trajectory (Vertical Timeline) */}
        <ExperienceSection />

        {/* 7. Achievements & Hackathon Podiums */}
        <AchievementsSection />

        {/* 8. Contact Section (Direct Dispatch) */}
        <ContactSection />
      </main>

      {/* Footer: Interactive Stage Band */}
      <Footer voice={voice} setVoice={setVoice} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

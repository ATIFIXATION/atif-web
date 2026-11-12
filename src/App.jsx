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

export default function App() {
  const [voice, setVoice] = useState('engineer'); // 'engineer' | 'creator'

  return (
    <div className={`min-h-screen bg-[#FFFDF6] text-[#16120F] antialiased ${
      voice === 'engineer' ? 'theme-engineer' : 'theme-creator'
    }`}>
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
        {/* 1. Hero with reactive variable font & marker scribble */}
        <Hero voice={voice} setVoice={setVoice} />

        {/* Playful Hand-Drawn Wavy Line Divider */}
        <div className="w-full bg-[#FFFDF6] py-3 overflow-hidden pointer-events-none">
          <svg className="w-full h-8 overflow-visible" viewBox="0 0 1200 30" fill="none" preserveAspectRatio="none">
            <path
              d="M 0 15 Q 150 0, 300 15 T 600 15 T 900 15 T 1200 15"
              stroke="#16120F"
              strokeWidth="3"
              strokeDasharray="10 8"
            />
          </svg>
        </div>

        {/* 2. About: Two brains. One builder. */}
        <AboutSection />

        {/* 3. The Lab: Technical Quarter (Lagoon Field) */}
        <LabSection />

        {/* 4. Signature Draggable Sticker Board */}
        <StickerBoard />

        {/* 5. The Studio: Creative Realm (Ultraviolet Field) */}
        <StudioSection />

        {/* 6. Experience & Trajectory (Vertical Timeline) */}
        <ExperienceSection />

        {/* 7. Achievements & Hackathon Podiums */}
        <AchievementsSection />

        {/* 8. Contact Section (Direct Dispatch) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer voice={voice} setVoice={setVoice} />
    </div>
  );
}


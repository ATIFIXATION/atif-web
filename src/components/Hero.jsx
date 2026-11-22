import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Sparkles, Terminal, Film, Code, Compass, Star } from 'lucide-react';
import { heroStickers } from '../data/stickers';
import { identity } from '../data/identity';
import { useTheme } from '../context/ThemeContext';

export default function Hero({ voice, setVoice }) {
  const { theme } = useTheme();
  const isY2K = theme === 'y2k';
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef(null);

  // Track cursor position across hero for variable font axis manipulation
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  // Font variation settings dynamic calculation
  const engineerVariation = `"wght" ${Math.round(400 + mousePos.x * 500)}, "wdth" ${Math.round(75 + mousePos.y * 25)}, "opsz" ${Math.round(36 + mousePos.x * 60)}`;
  const creatorVariation = `"wght" ${Math.round(400 + mousePos.x * 450)}, "SOFT" ${Math.round(mousePos.y * 100)}, "WONK" ${mousePos.x > 0.5 ? 1 : 0}, "opsz" 72`;

  // ========================================================
  // THEME 2: Y2K TARTAN ZINE HERO (COLOR-BLOCK SPLIT + STAR WINDOW)
  // ========================================================
  if (isY2K) {
    return (
      <section
        ref={containerRef}
        id="hero-y2k"
        className="relative min-h-screen pt-20 flex flex-col justify-between overflow-hidden bg-[#000354] text-[#E1C296] select-none"
      >
        {/* Subtle Film Grain Overlay */}
        <div className="absolute inset-0 film-grain pointer-events-none z-10" />

        {/* 50/50 COLOR-BLOCK SPLIT */}
        <div className="relative w-full flex-1 flex flex-col">
          
          {/* TOP 50% BLOCK: FLAT HOT PINK SLAB */}
          <div className="relative w-full bg-[#EF3969] border-b-4 border-[#E1C296] py-12 sm:py-16 px-4 flex flex-col items-center justify-center">
            
            {/* Top Tape Label */}
            <div className="mb-4 inline-flex items-center gap-2 y2k-tape-label text-xs sm:text-sm -rotate-1">
              <span className="text-[#EF3969]">★</span>
              <span>ISSUE NO. 02 · Y2K TARTAN EDITION</span>
              <span className="text-[#EF3969]">★</span>
            </div>

            {/* STAR CLIP-PATH WINDOW REVEALING HERO ASSET */}
            <div className="relative group my-2">
              {/* Outer pink shadow glow */}
              <div className="absolute -inset-2 bg-[#000354] star-clip-window rotate-6 opacity-60" />
              
              {/* Star Cutout Container */}
              <div
                style={{
                  width: 'clamp(180px, 28vw, 300px)',
                  height: 'clamp(180px, 28vw, 300px)'
                }}
                className="relative star-clip-window bg-[#000354] border-4 border-[#E1C296] overflow-hidden flex items-center justify-center shadow-[6px_6px_0px_#000354]"
              >
                {/* Hero Asset revealed inside star slot */}
                <div
                  style={{
                    backgroundImage: 'var(--hero-image)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top'
                  }}
                  className="w-full h-full y2k-photo scale-110 group-hover:scale-125 transition-transform duration-700"
                />

                {/* Duotone Overlay tint */}
                <div className="absolute inset-0 bg-[#000354]/30 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Solid Pink Star Sticker Badge */}
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#EF3969] border-2 border-[#E1C296] flex items-center justify-center text-[#000354] font-black text-sm star-clip-window shadow-[2px_2px_0px_#000354] rotate-12">
                ★
              </div>
            </div>

            <p className="mt-3 text-xs font-mono font-bold text-[#000354] tracking-widest uppercase">
              BHOPAL, MADHYA PRADESH · 2024–2028
            </p>
          </div>

          {/* BOTTOM 50% BLOCK: DEEP ULTRAMARINE NAVY PHOTO / TEXT BLOCK */}
          <div className="relative w-full bg-[#000354] py-12 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center text-center my-auto">
            
            {/* Chunky Y2K ALL CAPS Headline */}
            <h1 className="text-fluid-hero font-black tracking-tighter text-[#E1C296] uppercase leading-none font-engineer">
              ATIF KHAN
            </h1>

            {/* Tape-Label Chips Cluster */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 my-6">
              <span className="y2k-tape-label -rotate-2">
                ★ FRAMEBYFRAME
              </span>
              <span className="y2k-tape-label rotate-1 bg-[#EF3969] text-[#000354] border-[#000354]">
                NOVEL: VETHARA
              </span>
              <span className="y2k-tape-label -rotate-1">
                SCREENPLAY: BLOOD DEBT
              </span>
              <span className="y2k-tape-label rotate-2">
                MERN / AI STACK
              </span>
            </div>

            {/* Sub-headline & Bio */}
            <p className="text-fluid-h3 font-black text-[#E6B886] max-w-2xl mx-auto mb-2 font-mono">
              ENGINEER BY LOGIC. CREATOR BY INSTINCT.
            </p>
            <p className="text-sm sm:text-base font-mono text-[#E1C296]/85 max-w-xl mx-auto mb-8">
              B.Tech AI & Data Science @ LNCT Bhopal · Researcher @ Techtonic · Co-author of "The Frequency of the Dead"
            </p>

            {/* Y2K Brutalist Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#lab"
                className="px-6 py-3 bg-[#EF3969] text-[#000354] font-mono font-black text-sm uppercase rounded-none border-2 border-[#E1C296] shadow-[4px_4px_0px_#E1C296] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#E1C296] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
              >
                <Terminal size={16} />
                <span>[ LAB PROJECTS ]</span>
              </a>

              <a
                href="#studio"
                className="px-6 py-3 bg-[#000F5C] text-[#E1C296] font-mono font-black text-sm uppercase rounded-none border-2 border-[#EF3969] shadow-[4px_4px_0px_#EF3969] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#EF3969] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
              >
                <Film size={16} />
                <span>[ THE STUDIO ]</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-[#E1C296] text-[#000354] font-mono font-black text-sm uppercase rounded-none border-2 border-[#000354] shadow-[4px_4px_0px_#EF3969] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#EF3969] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <span>[ DISPATCH ]</span>
              </a>
            </div>

          </div>

        </div>

        {/* Y2K Tartan Strip Divider Footer */}
        <div className="w-full h-3 tartan-pattern border-t-2 border-[#E1C296]" />
      </section>
    );
  }

  // ========================================================
  // THEME 1: CLASSIC HERO (DEFAULT - UNTOUCHED)
  // ========================================================
  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden transition-colors duration-700 select-none ${
        voice === 'engineer' ? 'bg-[#0FB5AE]/10' : 'bg-[#5B2EE0]/10'
      }`}
    >
      {/* Background Section Accent Grid */}
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Top Voice Morpher Banner */}
      <div className="max-w-6xl mx-auto px-4 w-full text-center mb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-[#16120F] bg-[#FFFDF6] shadow-[2px_2px_0px_#16120F] text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-[#E5383B] animate-ping" />
          <span>Active voice:</span>
          <span className={voice === 'engineer' ? 'text-[#0FB5AE]' : 'text-[#5B2EE0]'}>
            {voice === 'engineer' ? 'Engineer (The Lab)' : 'Creator (The Studio)'}
          </span>
          <button
            onClick={() => setVoice(voice === 'engineer' ? 'creator' : 'engineer')}
            className="ml-2 underline hover:text-[#FFB703] transition-colors"
          >
            Switch voice ⇄
          </button>
        </div>
      </div>

      {/* Wordmark Centerpiece & Overlapping Cutout */}
      <div className="relative max-w-6xl mx-auto px-4 w-full flex flex-col items-center justify-center my-auto">
        
        {/* Floating Interactive Draggable Stickers in Hero */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {heroStickers.map((sticker, idx) => (
            <motion.div
              key={sticker.id}
              drag
              dragConstraints={containerRef}
              whileDrag={{ scale: 1.15, rotate: 0 }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, type: 'spring', stiffness: 200 }}
              style={{
                left: `calc(50% + ${sticker.x - 280}px)`,
                top: `calc(50% + ${sticker.y - 140}px)`,
                backgroundColor: sticker.color,
                color: sticker.textColor,
                transform: `rotate(${sticker.rotate}deg)`,
                boxShadow: "4px 4px 0px #16120F"
              }}
              className="pointer-events-auto absolute z-20 cursor-grab active:cursor-grabbing px-3 py-1.5 rounded-md border-2 border-[#16120F] text-xs font-black tracking-wide select-none transition-shadow"
            >
              {sticker.text}
            </motion.div>
          ))}
        </div>

        {/* Wordmark Container */}
        <div className="relative text-center w-full z-10">
          <h1
            style={{
              fontVariationSettings: voice === 'engineer' ? engineerVariation : creatorVariation
            }}
            className={`text-fluid-hero font-black tracking-tighter text-[#16120F] transition-all duration-150 ${
              voice === 'engineer' ? 'font-engineer' : 'font-creator'
            }`}
          >
            Atif Khan
          </h1>

          {/* Hand-drawn SVG Marker Stroke scribbling over the name */}
          <div className="absolute -inset-x-4 top-1/2 -translate-y-1/2 pointer-events-none z-20 flex justify-center">
            <svg
              className="w-full max-w-4xl h-24 sm:h-36 overflow-visible"
              viewBox="0 0 800 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Loop / wavy scribble marker path */}
              <path
                d="M 20 65 Q 120 15, 240 70 T 460 60 T 680 75 Q 760 85, 785 55 Q 720 105, 540 85 T 260 90 Q 80 95, 35 75"
                stroke={voice === 'engineer' ? '#0FB5AE' : '#FFB703'}
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
                className="animate-marker"
              />
              <path
                d="M 50 68 Q 220 30, 420 75 T 750 65"
                stroke={voice === 'engineer' ? '#16120F' : '#E5383B'}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 6"
                opacity="0.5"
                className="animate-marker"
              />
            </svg>
          </div>
        </div>

        {/* Tilted Cutout Portrait of Atif overlapping the wordmark */}
        <div className="relative z-15 -mt-10 sm:-mt-16 md:-mt-20 flex justify-center">
          <motion.div
            initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
            animate={{ scale: 1, rotate: -2.5, opacity: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 120, delay: 0.3 }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            className="relative cursor-pointer group"
          >
            {/* Cutout Image with hard offset ink shadow */}
            <div className="relative w-56 sm:w-72 md:w-84 lg:w-96 select-none filter drop-shadow-[8px_10px_0px_#16120F]">
              <img
                src="/assets/atif-cutout.webp"
                alt="Contemplative portrait cutout of Atif Khan in denim jacket with cinematic lighting"
                width="384"
                height="468"
                className="w-full h-auto object-contain pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Sticker attached to Atif's jacket */}
            <div className="absolute bottom-4 -right-2 bg-[#FFB703] text-[#16120F] border-2 border-[#16120F] px-2.5 py-1 text-[11px] font-black uppercase rounded shadow-[2px_2px_0px_#16120F] rotate-6 group-hover:rotate-0 transition-transform">
              Bhopal 📍
            </div>
          </motion.div>
        </div>

        {/* Tagline & Core Proposition */}
        <div className="relative z-20 mt-6 text-center max-w-2xl mx-auto px-4">
          <p className="text-fluid-h3 font-black tracking-tight text-[#16120F] mb-3">
            {identity.tagline}
          </p>
          <p className="text-fluid-lead text-[#16120F]/85 mx-auto font-medium">
            AI & Data Science undergraduate building MERN applications & vision pipelines by day, and directing cinematic stories & novels by night.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#lab"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0FB5AE] text-[#16120F] font-bold text-sm sm:text-base rounded-md border-2 border-[#16120F] shadow-[4px_4px_0px_#16120F] hover:shadow-[2px_2px_0px_#16120F] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <Terminal size={18} />
              <span>See my work</span>
            </a>

            <a
              href="#studio"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#5B2EE0] text-[#FFFDF6] font-bold text-sm sm:text-base rounded-md border-2 border-[#16120F] shadow-[4px_4px_0px_#16120F] hover:shadow-[2px_2px_0px_#16120F] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <Film size={18} />
              <span>The Studio</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFFDF6] text-[#16120F] font-bold text-sm sm:text-base rounded-md border-2 border-[#16120F] shadow-[4px_4px_0px_#16120F] hover:shadow-[2px_2px_0px_#16120F] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Say hello</span>
            </a>
          </div>
        </div>

      </div>

      {/* Hero Footnote Indicator */}
      <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between text-xs font-mono text-[#16120F]/70 pt-8 border-t border-[#16120F]/15">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0FB5AE]" />
          <span>Interactive Variable Font (Hover / Tilt to modulate)</span>
        </div>
        <a href="#about" className="flex items-center gap-1 hover:text-[#0FB5AE] font-bold transition-colors">
          <span>Scroll down</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

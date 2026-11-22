import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { links } from '../data/links';
import { identity } from '../data/identity';
import { CROWD_ELEMENTS } from '../data/footerCrowd';
import { ArrowUp, Instagram, Github, Linkedin, Mail, Sparkles, Volume2, Clapperboard, Heart, Terminal, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer({ voice, setVoice }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.15, once: false });
  const { theme } = useTheme();
  const isY2K = theme === 'y2k';

  // Mouse tracking state for cursor reactions and parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  const [isHoveringStage, setIsHoveringStage] = useState(false);

  // Prop interaction state (triggers temporary micro-animations on click)
  const [triggeredProps, setTriggeredProps] = useState({});
  const [floatingParticles, setFloatingParticles] = useState([]);

  // Check prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle cursor movement inside stage area
  const handleMouseMove = useCallback((e) => {
    if (!stageRef.current || prefersReducedMotion) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normalizedX = (x / rect.width) * 2 - 1; // -1 (left) to +1 (right)
    const normalizedY = (y / rect.height) * 2 - 1; // -1 (top) to +1 (bottom)

    setMousePos({ x, y, normalizedX, normalizedY });
  }, [prefersReducedMotion]);

  // Trigger interactive prop micro-actions
  const triggerPropAction = (elementId, actionType, event) => {
    if (event) event.stopPropagation();

    // Trigger state flag
    setTriggeredProps((prev) => ({
      ...prev,
      [elementId]: true
    }));

    // Spawn floating particle for heart or snap
    if (actionType === 'burst' || actionType === 'clap' || actionType === 'flash') {
      const rect = event?.currentTarget?.getBoundingClientRect();
      const stageRect = stageRef.current?.getBoundingClientRect();
      if (rect && stageRect) {
        const particleX = rect.left - stageRect.left + rect.width / 2;
        const particleY = rect.top - stageRect.top;
        const newParticle = {
          id: Date.now() + Math.random(),
          x: particleX,
          y: particleY,
          type: actionType,
          color: actionType === 'burst' ? '#E5383B' : actionType === 'clap' ? '#FFB703' : '#0FB5AE'
        };
        setFloatingParticles((prev) => [...prev, newParticle]);

        setTimeout(() => {
          setFloatingParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 1200);
      }
    }

    // Auto-reset triggered flag
    setTimeout(() => {
      setTriggeredProps((prev) => ({
        ...prev,
        [elementId]: false
      }));
    }, actionType === 'poof' ? 1400 : 800);
  };

  // Parallax layers calculation based on depth
  const getParallaxStyle = (depth) => {
    if (prefersReducedMotion || !isHoveringStage) {
      return { transform: 'translate3d(0, 0, 0)' };
    }
    const factors = { 1: 8, 2: 18, 3: 28 };
    const moveX = (mousePos.normalizedX || 0) * (factors[depth] || 15);
    const moveY = (mousePos.normalizedY || 0) * ((factors[depth] || 15) * 0.4);
    return {
      transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
      transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.38, 0.9)'
    };
  };

  return (
    <footer
      ref={containerRef}
      className={`relative w-full overflow-hidden transition-colors duration-300 ${
        isY2K ? 'bg-[#000354] text-[#E1C296]' : 'bg-[#16120F] text-[#FFFDF6]'
      }`}
      aria-label="Portfolio Stage Footer"
    >
      {/* 1. TOP HEADER & NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b ${
          isY2K ? 'border-[#EF3969]/30' : 'border-[#FFFDF6]/15'
        }`}>
          
          {/* Main Stage Headline & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-2xl"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border ${
              isY2K
                ? 'bg-[#EF3969]/20 text-[#EF3969] border-[#EF3969]/40'
                : 'bg-[#FFFDF6]/10 text-[#FFB703] border-[#FFFDF6]/20'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${isY2K ? 'bg-[#EF3969]' : 'bg-[#FFB703]'}`} />
              <span>{isY2K ? "★ THE Y2K CURTAIN CALL ★" : "THE STAGE & CURTAIN CALL"}</span>
            </div>

            <h2 className="text-fluid-h2 font-black tracking-tight leading-none font-engineer">
              {isY2K ? "SEE YOU AROUND." : "See you around."}
            </h2>

            <p className={`text-base sm:text-lg font-body font-normal ${isY2K ? 'text-[#E1C296]/90' : 'text-[#FFFDF6]/80'}`}>
              Writer. Filmmaker. Developer. <span className={isY2K ? "text-[#EF3969] font-bold" : "text-[#FFB703] font-semibold"}>Bhopal → Vethara.</span>
            </p>

            <p className={`text-xs font-mono ${isY2K ? 'text-[#E6B886]' : 'text-[#0FB5AE]'}`}>
              B.Tech AI & Data Science @ LNCT · Part-time Researcher @ Techtonic
            </p>
          </motion.div>

          {/* Nav Links, Socials & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-6"
          >
            {/* Quick Navigation Links */}
            <nav className="flex flex-wrap items-center gap-5 text-sm font-mono" aria-label="Footer Navigation">
              <a href="#about" className={isY2K ? "hover:text-[#EF3969] transition-colors" : "hover:text-[#FFB703] transition-colors"}>
                About
              </a>
              <a href="#lab" className={isY2K ? "hover:text-[#EF3969] transition-colors" : "hover:text-[#0FB5AE] transition-colors"}>
                The Lab
              </a>
              <a href="#studio" className={isY2K ? "hover:text-[#EF3969] transition-colors" : "hover:text-[#5B2EE0] transition-colors"}>
                The Studio
              </a>
              <a href="#experience" className={isY2K ? "hover:text-[#EF3969] transition-colors" : "hover:text-[#FFFDF6] transition-colors"}>
                Trajectory
              </a>
              <a href="#contact" className={isY2K ? "hover:text-[#EF3969] transition-colors" : "hover:text-[#E5383B] transition-colors"}>
                Contact
              </a>
            </nav>

            {/* Social Icons & Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Instagram */}
              <a
                href={links.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @atifrecommends"
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all hover:scale-105 ${
                  isY2K
                    ? 'bg-[#000F5C] border-[#EF3969] text-[#E1C296] hover:bg-[#EF3969] hover:text-[#000354]'
                    : 'bg-[#FFFDF6]/10 border-[#FFFDF6]/20 text-[#FFFDF6] hover:bg-[#E5383B] hover:text-[#FFFDF6]'
                }`}
              >
                <Instagram size={18} />
              </a>

              {/* GitHub */}
              <a
                href={links.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub @ATIFIXATION"
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all hover:scale-105 ${
                  isY2K
                    ? 'bg-[#000F5C] border-[#EF3969] text-[#E1C296] hover:bg-[#E1C296] hover:text-[#000354]'
                    : 'bg-[#FFFDF6]/10 border-[#FFFDF6]/20 text-[#FFFDF6] hover:bg-[#FFFDF6] hover:text-[#16120F]'
                }`}
              >
                <Github size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href={links.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Atif Khan"
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all hover:scale-105 ${
                  isY2K
                    ? 'bg-[#000F5C] border-[#EF3969] text-[#E1C296] hover:bg-[#EF3969] hover:text-[#000354]'
                    : 'bg-[#FFFDF6]/10 border-[#FFFDF6]/20 text-[#FFFDF6] hover:bg-[#0FB5AE] hover:text-[#16120F]'
                }`}
              >
                <Linkedin size={18} />
              </a>

              {/* Email */}
              <a
                href={`mailto:${identity.publicEmail}`}
                aria-label="Email Atif Khan"
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all hover:scale-105 ${
                  isY2K
                    ? 'bg-[#000F5C] border-[#EF3969] text-[#E1C296] hover:bg-[#E1C296] hover:text-[#000354]'
                    : 'bg-[#FFFDF6]/10 border-[#FFFDF6]/20 text-[#FFFDF6] hover:bg-[#FFB703] hover:text-[#16120F]'
                }`}
              >
                <Mail size={18} />
              </a>

              {/* Voice Switcher */}
              <button
                onClick={() => setVoice(voice === 'engineer' ? 'creator' : 'engineer')}
                className={`px-3 py-2 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isY2K
                    ? 'border-[#EF3969] bg-[#000F5C] text-[#E1C296] hover:bg-[#EF3969] hover:text-[#000354]'
                    : 'border-[#FFFDF6]/30 text-[#FFFDF6] hover:bg-[#FFFDF6] hover:text-[#16120F]'
                }`}
                title="Toggle Portfolio Voice"
              >
                <span>Voice:</span>
                <span className={`font-bold ${isY2K ? 'text-[#EF3969]' : 'text-[#FFB703]'}`}>
                  {voice === 'engineer' ? 'Engineer ⇄' : 'Creator ⇄'}
                </span>
              </button>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] ${
                  isY2K
                    ? 'bg-[#EF3969] text-[#000354] border border-[#E1C296] shadow-[2px_2px_0px_#E1C296] hover:bg-[#E1C296]'
                    : 'bg-[#FFB703] text-[#16120F] shadow-[2px_2px_0px_#FFFDF6] hover:bg-[#0FB5AE]'
                }`}
                aria-label="Scroll back to top"
              >
                <span>Top</span>
                <ArrowUp size={14} />
              </button>
            </div>

          </motion.div>
        </div>
      </div>

      {/* 2. THE STAGE: FULL-WIDTH INKED BAND (RESKINNED FOR Y2K) */}
      <section
        ref={stageRef}
        id="stage-area"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringStage(true)}
        onMouseLeave={() => {
          setIsHoveringStage(false);
          setMousePos({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
        }}
        className={`relative w-full border-t-4 border-b-4 overflow-hidden select-none cursor-default transition-colors duration-300 ${
          isY2K
            ? 'bg-[#000F5C] border-[#EF3969]'
            : 'bg-[#FFFDF6] border-[#16120F]'
        }`}
        style={{ height: 'clamp(380px, 46vw, 540px)' }}
        aria-label="Interactive character stage"
      >
        {/* Y2K Tartan Trim Edge */}
        {isY2K && (
          <div className="absolute top-0 left-0 right-0 h-1.5 tartan-pattern z-30 pointer-events-none" />
        )}

        {/* Subtle Film Grain Texture Overlay */}
        <div className="absolute inset-0 film-grain pointer-events-none z-10" />

        {/* GIANT DRIFTING GHOST WORDMARK */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className={`w-[140%] text-center whitespace-nowrap animate-stage-drift font-black tracking-tighter leading-none text-[15vw] lg:text-[18vw] font-engineer ${
              isY2K ? 'text-[#E1C296]/[0.05]' : 'text-[#16120F]/[0.045]'
            }`}
          >
            {isY2K
              ? 'ATIF KHAN · Y2K TARTAN ZINE · VETHARA · '
              : 'ATIF KHAN · FRAMEBYFRAME · VETHARA · '}
          </div>
        </div>

        {/* AMBIENT FLOATING DUST MOTES */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
          <span className={`absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full animate-float-slow ${
            isY2K ? 'bg-[#EF3969]/30' : 'bg-[#16120F]/15'
          }`} />
          <span className={`absolute top-[35%] right-[22%] w-2 h-2 rounded-full animate-float-slow ${
            isY2K ? 'bg-[#E1C296]/30' : 'bg-[#FFB703]/25'
          }`} style={{ animationDelay: '-2s' }} />
          <span className={`absolute top-[60%] left-[45%] w-1 h-1 rounded-full animate-float-slow ${
            isY2K ? 'bg-[#EF3969]/30' : 'bg-[#0FB5AE]/30'
          }`} style={{ animationDelay: '-4s' }} />
        </div>

        {/* POPPING PARTICLES CONTAINER */}
        <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
          {floatingParticles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ scale: 0.5, opacity: 1, y: 0 }}
              animate={{ scale: 1.5, opacity: 0, y: -60, x: (Math.random() - 0.5) * 40 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute font-black text-sm flex items-center justify-center"
              style={{ left: `${p.x}px`, top: `${p.y}px`, color: p.color }}
            >
              {p.type === 'burst' ? '★' : p.type === 'clap' ? '🎬' : '⚡'}
            </motion.div>
          ))}
        </div>

        {/* STAGE FLOOR CONTACT LINE */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-10 border-t-2 z-20 pointer-events-none ${
            isY2K
              ? 'border-[#EF3969] bg-[#000354]/40'
              : 'border-[#16120F] bg-[#16120F]/[0.02]'
          }`}
          aria-hidden="true"
        >
          {/* Inked Stage Floorboards lines */}
          <div className="w-full h-full flex justify-between px-8 opacity-25">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`w-[1px] h-full ${isY2K ? 'bg-[#EF3969]' : 'bg-[#16120F]'}`}
              />
            ))}
          </div>
        </div>

        {/* STAGE CHARACTERS & PROPS CONTAINER (DATA-DRIVEN) */}
        <div className="relative w-full h-full max-w-7xl mx-auto px-2 sm:px-4">
          {CROWD_ELEMENTS.map((el, index) => {
            const isTriggered = !!triggeredProps[el.id];
            const isHero = el.id === 'atif-hero';

            // Calculate cursor delta for head tracking on desktop
            let cursorDeltaX = 0;
            let cursorDeltaY = 0;
            if (stageRef.current && isHoveringStage && !prefersReducedMotion) {
              const rect = stageRef.current.getBoundingClientRect();
              const elementScreenX = rect.left + (rect.width * el.baseX) / 100;
              const elementScreenY = rect.top + (rect.height * el.baseY) / 100;
              cursorDeltaX = (mousePos.x - (elementScreenX - rect.left)) * 0.15;
              cursorDeltaY = (mousePos.y - (elementScreenY - rect.top)) * 0.15;
            }

            return (
              <motion.div
                key={el.id}
                initial={{ opacity: 0, y: 60 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 60 }
                }
                transition={{
                  duration: 0.65,
                  delay: prefersReducedMotion ? 0 : 0.05 + index * 0.045,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  position: 'absolute',
                  left: `${el.baseX}%`,
                  bottom: `${100 - el.baseY}%`,
                  transform: 'translate(-50%, 50%)',
                  zIndex: el.depth === 3 ? 30 : el.depth === 2 ? 20 : 10,
                  ...getParallaxStyle(el.depth)
                }}
                className={`transition-transform duration-75 ${
                  !el.mobile ? 'hidden md:block' : 'block'
                }`}
                onClick={(e) => {
                  if (el.interactive) {
                    triggerPropAction(el.id, el.action, e);
                  }
                }}
              >
                {el.render({
                  isTriggered,
                  cursorDeltaX,
                  cursorDeltaY,
                  isHero
                })}
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Hint Badge (Bottom Left) */}
        <div className="absolute bottom-2 left-4 z-30 pointer-events-none hidden sm:flex items-center gap-1.5 text-[11px] font-mono opacity-70">
          <Sparkles size={12} className={isY2K ? "text-[#EF3969]" : "text-[#FFB703]"} />
          <span>Interactive Stage: Tap props & move cursor</span>
        </div>

      </section>

      {/* 3. COLOPHON & COPYRIGHT BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-80">
          
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isY2K ? 'bg-[#EF3969]' : 'bg-[#0FB5AE]'}`} />
            <span>© {new Date().getFullYear()} Atif Khan. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className={`px-2 py-0.5 rounded text-[11px] border ${
              isY2K
                ? 'bg-[#000F5C] text-[#EF3969] border-[#EF3969]'
                : 'bg-[#FFFDF6]/10 text-[#FFB703] border-[#FFFDF6]/15'
            }`}>
              23.2599° N, 77.4126° E · Bhopal, India
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={links.previousPortfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className={isY2K ? "hover:text-[#EF3969] transition-colors underline" : "hover:text-[#FFB703] transition-colors underline"}
            >
              Earlier version
            </a>
            <a
              href={links.grayvale.url}
              target="_blank"
              rel="noopener noreferrer"
              className={isY2K ? "hover:text-[#EF3969] transition-colors" : "hover:text-[#0FB5AE] transition-colors"}
            >
              Grayvale Systems
            </a>
            <a
              href={links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className={isY2K ? "hover:text-[#EF3969] transition-colors" : "hover:text-[#FFFDF6] transition-colors"}
            >
              GitHub Source
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Film,
  BookOpen,
  Camera,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Play,
  Instagram,
  Radio,
  FileText,
  Eye,
  EyeOff,
  Maximize2,
  RefreshCw,
  Send,
  Mail,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { creativeWorks } from '../data/creative';
import { portfolioPhotos } from '../data/photos';
import { identity } from '../data/identity';
import { links } from '../data/links';
import PhotoLightbox from './PhotoLightbox';
import { useTheme } from '../context/ThemeContext';

export default function CreativeTab({ onSwitchToTechnical }) {
  const { theme } = useTheme();
  const isY2K = theme === 'y2k';

  // State for active photo lightbox
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showOriginalPhotos, setShowOriginalPhotos] = useState(false);

  // Screenwriting drawer state
  const [expandedScript, setExpandedScript] = useState('frequency-of-the-dead');

  // Video modal state
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Embedded Library state (Iframe with loading & fallback detection)
  const [libraryLoaded, setLibraryLoaded] = useState(false);
  const [libraryFailed, setLibraryFailed] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Timeout detection: if iframe hasn't loaded in 7 seconds, show clean fallback card
    const timer = setTimeout(() => {
      if (!libraryLoaded) {
        setLibraryFailed(true);
      }
    }, 7000);
    return () => clearTimeout(timer);
  }, [libraryLoaded]);

  const influences = [
    "Fyodor Dostoevsky",
    "Franz Kafka",
    "Albert Camus",
    "Friedrich Nietzsche",
    "Marcus Aurelius",
    "Urdu Literature & Adab",
    "Stoicism & Logic",
    "Alfred Hitchcock",
    "David Fincher",
    "Chungking Express"
  ];

  return (
    <div className="w-full select-none">
      
      {/* ========================================================
          A) HERO: THE Y2K PHOTO BLOCK
          ======================================================== */}
      <section
        id="creative-hero"
        className="relative pt-24 pb-16 overflow-hidden bg-[#000354] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="absolute inset-0 film-grain pointer-events-none z-10" />

        {/* 50/50 COLOR-BLOCK SPLIT */}
        <div className="relative w-full flex flex-col">
          
          {/* TOP 50% FLAT HOT PINK SLAB */}
          <div className="relative w-full bg-[#EF3969] border-b-4 border-[#E1C296] py-14 px-4 flex flex-col items-center justify-center">
            
            {/* Top Tape Label Chip */}
            <div className="mb-4 inline-flex items-center gap-2 y2k-tape-label text-xs sm:text-sm -rotate-1">
              <span className="text-[#EF3969]">★</span>
              <span>CREATIVE REALM · FILM & LITERATURE</span>
              <span className="text-[#EF3969]">★</span>
            </div>

            {/* STAR-WINDOW CUTOUT REVEALING HERO ASSET */}
            <div className="relative group my-2">
              <div className="absolute -inset-2 bg-[#000354] star-clip-window rotate-6 opacity-60" />
              
              <div
                style={{
                  width: 'clamp(200px, 32vw, 320px)',
                  height: 'clamp(200px, 32vw, 320px)'
                }}
                className="relative star-clip-window bg-[#000354] border-4 border-[#E1C296] overflow-hidden flex items-center justify-center shadow-[6px_6px_0px_#000354]"
              >
                {/* Hero Photo (film-still-agent.jpg) */}
                <div
                  style={{
                    backgroundImage: 'url("/assets/photos/film-still-agent.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 20%'
                  }}
                  className="w-full h-full y2k-photo scale-105 group-hover:scale-120 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-[#000354]/20 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Star Sticker (Carefully placed in corner so it NEVER covers his face!) */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-[#EF3969] border-2 border-[#E1C296] text-[#000354] font-black font-mono text-xs shadow-[2px_2px_0px_#000354] rotate-6">
                ★ CREATIVE
              </div>
            </div>

            <p className="mt-4 text-xs font-mono font-bold text-[#000354] tracking-widest uppercase">
              BHOPAL, MADHYA PRADESH · SCREENPLAY & CINEMA
            </p>
          </div>

          {/* BOTTOM 50% ULTRAMARINE NAVY PHOTO / TEXT BLOCK */}
          <div className="relative w-full bg-[#000354] py-12 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center text-center my-auto">
            
            <h1 className="text-fluid-hero font-black tracking-tighter text-[#E1C296] uppercase leading-none font-engineer">
              ATIF KHAN
            </h1>

            <p className="text-xl sm:text-2xl font-black text-[#E6B886] font-mono tracking-tight mt-3">
              Writer. Filmmaker. Storyteller.
            </p>

            {/* Tape-Label Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 my-6">
              <span className="y2k-tape-label -rotate-2">
                ★ FRAMEBYFRAME
              </span>
              <span className="y2k-tape-label rotate-1 bg-[#EF3969] text-[#000354] border-[#000354]">
                SCREENPLAY: VETHARA
              </span>
              <span className="y2k-tape-label -rotate-1">
                SCREENPLAY: BLOOD DEBT
              </span>
              <span className="y2k-tape-label rotate-2">
                @ATIFRECOMMENDS
              </span>
            </div>

            <p className="text-sm sm:text-base font-mono text-[#E1C296]/85 max-w-2xl mx-auto mb-8 leading-relaxed">
              Co-author of the supernatural screenplay <span className="text-[#EF3969] font-bold">The Frequency of the Dead</span> with Muhammad Rehaan, director of <span className="text-[#E6B886] font-bold">The Dostoevsky Files</span>, and curator of existential literature essays.
            </p>

            {/* Cross-Link Back to Technical */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#screenwriting"
                className="px-6 py-3 bg-[#EF3969] text-[#000354] font-mono font-black text-sm uppercase border-2 border-[#E1C296] shadow-[4px_4px_0px_#E1C296] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
              >
                <FileText size={16} />
                <span>[ SCREENPLAYS ]</span>
              </a>

              <a
                href="#gallery"
                className="px-6 py-3 bg-[#000F5C] text-[#E1C296] font-mono font-black text-sm uppercase border-2 border-[#EF3969] shadow-[4px_4px_0px_#EF3969] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Camera size={16} />
                <span>[ BEHIND THE FRAMES ]</span>
              </a>

              <button
                onClick={onSwitchToTechnical}
                className="px-6 py-3 bg-[#E1C296] text-[#000354] font-mono font-black text-sm uppercase border-2 border-[#000354] shadow-[4px_4px_0px_#EF3969] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>[ SEE WHAT I BUILD → ]</span>
              </button>
            </div>

          </div>

        </div>

        {/* Tartan Divider Strip */}
        <div className="w-full h-3 tartan-pattern border-t-2 border-[#E1C296]" />
      </section>

      {/* ========================================================
          B) SCREENWRITING: "THE FREQUENCY OF THE DEAD" & "BLOOD DEBT"
          ======================================================== */}
      <section
        id="screenwriting"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000F5C] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b-2 border-[#E1C296]/20">
            <div>
              <div className="inline-flex items-center gap-2 y2k-tape-label text-xs mb-2">
                <span>★ ORIGINAL SCREENPLAYS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-engineer uppercase tracking-tight text-[#E1C296]">
                Words for the Screen
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#E6B886] max-w-md">
              High-stakes narratives, dark comedy banter, and metaphysical industrial mysteries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Screenplay 1: The Frequency of the Dead */}
            <div className="p-6 sm:p-8 bg-[#000354] border-4 border-[#E1C296] rounded-lg shadow-[8px_8px_0px_#EF3969] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="y2k-tape-label text-xs">
                    ★ FEATURE SCREENPLAY
                  </span>
                  <span className="px-2.5 py-1 bg-[#EF3969] text-[#000354] font-mono text-xs font-black uppercase">
                    DRAFT COMPLETE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-engineer text-[#E1C296] tracking-tight">
                  The Frequency of the Dead
                </h3>

                <p className="text-xs font-mono text-[#E6B886] mt-1 mb-4">
                  Co-written with <span className="text-[#E1C296] font-bold">Muhammad Rehaan</span> · Setting: <span className="text-[#EF3969] font-bold">Vethara</span>
                </p>

                <div className="p-4 bg-[#000F5C] border-2 border-[#E1C296]/40 rounded mb-4 text-xs font-mono leading-relaxed">
                  <span className="text-[#EF3969] font-bold block mb-1">▸ LOGLINE:</span>
                  When an abandoned shortwave frequency begins broadcasting the voices of the missing across the industrial city of Vethara, two university students trace the transmission into an underground network of psychic resonances, forgotten radio towers, and unresolved guilt.
                </div>

                <p className="text-xs font-mono text-[#E1C296]/80 leading-relaxed mb-6">
                  Explores sound frequencies, post-industrial folklore, and the existential weight of grief. Structured as an atmospheric slow-burn psychological thriller.
                </p>
              </div>

              {/* Treatment Drawer Trigger */}
              <div className="pt-4 border-t border-[#E1C296]/20 flex items-center justify-between">
                <button
                  onClick={() => setExpandedScript(expandedScript === 'frequency' ? null : 'frequency')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-[#EF3969] hover:underline"
                >
                  <span>{expandedScript === 'frequency' ? '[- Close Treatment]' : '[+ Read Synopsis & Treatment]'}</span>
                </button>
                <span className="text-[11px] font-mono text-[#E6B886]">Genre: Supernatural Noir</span>
              </div>

              {/* Treatment Drawer */}
              {expandedScript === 'frequency' && (
                <div className="mt-4 p-4 bg-[#000F5C] border-2 border-[#EF3969] text-xs font-mono text-[#E1C296]/90 space-y-2">
                  <div className="text-[#EF3969] font-bold">ACT I OVERVIEW:</div>
                  <p>In the fog-laden factory district of Sector 7, nocturnal audio engineer KABIR intercepts an anomalous voice on 104.2 MHz repeating his deceased sister's final voicemail word for word.</p>
                  <p className="opacity-75 italic">"The city does not bury its memories; it merely broadcasts them at frequencies humans learned to ignore."</p>
                </div>
              )}
            </div>

            {/* Screenplay 2: BLOOD DEBT */}
            <div className="p-6 sm:p-8 bg-[#000354] border-4 border-[#EF3969] rounded-lg shadow-[8px_8px_0px_#E1C296] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="y2k-tape-label text-xs bg-[#EF3969] text-[#000354]">
                    ★ DARK COMEDY SCREENPLAY
                  </span>
                  <span className="px-2.5 py-1 bg-[#E1C296] text-[#000354] font-mono text-xs font-black uppercase">
                    FIRST DRAFT
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-engineer text-[#E1C296] tracking-tight">
                  BLOOD DEBT
                </h3>

                <p className="text-xs font-mono text-[#E6B886] mt-1 mb-4">
                  Written by <span className="text-[#E1C296] font-bold">Atif Khan</span> · Setting: <span className="text-[#EF3969] font-bold">Bhopal (Old City & Ring Road)</span>
                </p>

                <div className="p-4 bg-[#000F5C] border-2 border-[#EF3969]/40 rounded mb-4 text-xs font-mono leading-relaxed">
                  <span className="text-[#EF3969] font-bold block mb-1">▸ LOGLINE:</span>
                  A desperate engineering dropout and his volatile childhood friend attempt to blackmail a notorious local financier named Khan Saab, only to discover their mark is already being audited by a ruthless cartel.
                </div>

                <p className="text-xs font-mono text-[#E1C296]/80 leading-relaxed mb-6">
                  Fast-paced, cynical humor exploring youth desperation, debt culture, and the absurdity of provincial organized crime.
                </p>
              </div>

              {/* Sample Scene Trigger */}
              <div className="pt-4 border-t border-[#E1C296]/20 flex items-center justify-between">
                <button
                  onClick={() => setExpandedScript(expandedScript === 'blood-debt' ? null : 'blood-debt')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-[#E1C296] hover:underline"
                >
                  <span>{expandedScript === 'blood-debt' ? '[- Close Excerpt]' : '[+ Read Sample Scene]'}</span>
                </button>
                <span className="text-[11px] font-mono text-[#E6B886]">Genre: Crime Satire</span>
              </div>

              {/* Sample Scene Excerpt */}
              {expandedScript === 'blood-debt' && (
                <div className="mt-4 p-4 bg-[#000F5C] border-2 border-[#E1C296] text-xs font-mono text-[#E1C296] space-y-2">
                  <div className="text-[#EF3969] font-bold font-screenplay">EXT. LALGHATI TEA STALL - NIGHT</div>
                  <p className="font-screenplay opacity-80">Neon smog hangs over the highway. Imran taps his burner phone against the table.</p>
                  <p className="font-screenplay"><span className="text-[#E6B886] font-bold">RAHUL:</span> "He is not calling, Imran. Khan Saab doesn't negotiate on Tuesdays."</p>
                  <p className="font-screenplay"><span className="text-[#EF3969] font-bold">IMRAN:</span> "(beat) Then we negotiate with the nephew."</p>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          C) FRAMEBYFRAME: CINEMA & VIDEO ESSAYS
          ======================================================== */}
      <section
        id="framebyframe"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000354] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b-2 border-[#E1C296]/20">
            <div>
              <div className="inline-flex items-center gap-2 y2k-tape-label text-xs mb-2">
                <span>★ FRAMEBYFRAME IMPRINT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-engineer uppercase tracking-tight text-[#E1C296]">
                The Dostoevsky Files & Cinema Grid
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#E6B886] max-w-md">
              Cinematic short-form video essays, 35mm pacing, and color-graded vignettes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creativeWorks.framebyframe.series.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#000F5C] border-4 border-[#E1C296] rounded-lg overflow-hidden shadow-[8px_8px_0px_#EF3969]"
              >
                {/* Poster Frame */}
                <div className="relative aspect-video bg-[#000354] overflow-hidden">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 y2k-photo"
                  />
                  <div className="absolute inset-0 bg-[#000354]/40 group-hover:bg-[#000354]/20 transition-colors flex items-center justify-center">
                    <button
                      onClick={() => setActiveVideoModal(item)}
                      className="w-14 h-14 rounded-full bg-[#EF3969] text-[#000354] border-2 border-[#E1C296] flex items-center justify-center shadow-[4px_4px_0px_#000354] group-hover:scale-110 active:scale-95 transition-all"
                      aria-label={`Play ${item.title}`}
                    >
                      <Play size={24} className="ml-1 fill-current" />
                    </button>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#000354]/90 text-[#E1C296] font-mono text-xs border border-[#E1C296]">
                    {item.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-[#EF3969] font-bold mb-2">
                    <span>★ {item.episode}</span>
                    <span className="text-[#E6B886]">{item.status}</span>
                  </div>

                  <h3 className="text-xl font-black font-engineer text-[#E1C296] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-[#E1C296]/80 mt-2 leading-relaxed">
                    {item.logline}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          D) @ATIFRECOMMENDS: BOOKS, FILM & PSYCHOLOGY
          ======================================================== */}
      <section
        id="recommends"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000F5C] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b-2 border-[#E1C296]/20">
            <div>
              <div className="inline-flex items-center gap-2 y2k-tape-label text-xs mb-2">
                <span>★ @ATIFRECOMMENDS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-engineer uppercase tracking-tight text-[#E1C296]">
                Philosophy & Psychology Cards
              </h2>
            </div>
            <a
              href="https://instagram.com/atifrecommends"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF3969] text-[#000354] font-mono text-xs font-bold uppercase border-2 border-[#E1C296] shadow-[3px_3px_0px_#000354] hover:bg-[#E1C296] transition-all"
            >
              <Instagram size={14} />
              <span>Visit @atifrecommends</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creativeWorks.atifrecommends.posts.map((post) => (
              <div
                key={post.id}
                className="p-5 bg-[#000354] border-2 border-[#E1C296] rounded-md shadow-[4px_4px_0px_#EF3969] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#EF3969] font-bold mb-2">
                    <span>★ {post.tag}</span>
                    <span className="text-[#E6B886]">{post.author}</span>
                  </div>

                  <h3 className="text-base font-black text-[#E1C296] font-engineer mb-3">
                    {post.work}
                  </h3>

                  <p className="text-xs font-mono text-[#E1C296]/90 italic leading-relaxed">
                    "{post.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E1C296]/20 text-[11px] font-mono text-[#E6B886] flex items-center justify-between">
                  <span>Editorial Card</span>
                  <Instagram size={12} className="text-[#EF3969]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          E) THE LIBRARY (EMBEDDED BOOK SUMMARIES)
          ======================================================== */}
      <section
        id="library"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000354] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-[#E1C296]/20">
            <div>
              <div className="inline-flex items-center gap-2 y2k-tape-label text-xs mb-2">
                <span>★ EMBEDDED SHELF</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-engineer uppercase tracking-tight text-[#E1C296]">
                The Library: My Book Summaries
              </h2>
            </div>
            
            <a
              href="https://atifixation.github.io/atifrecommends/homepage.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#000F5C] text-[#E1C296] border border-[#E1C296] font-mono text-xs font-bold rounded shadow-[2px_2px_0px_#EF3969] hover:bg-[#EF3969] hover:text-[#000354] transition-all"
            >
              <span>Open in new tab</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Embedded Tartan Frame Container */}
          <div className="relative p-2 sm:p-4 tartan-pattern rounded-lg border-4 border-[#E1C296] shadow-[10px_10px_0px_#EF3969] overflow-hidden">
            
            {/* Card Header Bar */}
            <div className="w-full bg-[#000354] p-3 border-2 border-[#E1C296] rounded-t flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF3969]" />
                <span className="w-3 h-3 rounded-full bg-[#E6B886]" />
                <span className="w-3 h-3 rounded-full bg-[#206749]" />
                <span className="ml-2 font-bold text-[#E1C296] truncate">
                  https://atifixation.github.io/atifrecommends/homepage.html
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-[#E6B886] hidden sm:inline">
                  Interactive Sandbox
                </span>
              </div>
            </div>

            {/* Iframe or Fallback Card */}
            <div className="relative w-full h-[520px] sm:h-[620px] bg-[#000F5C] border-2 border-t-0 border-[#E1C296] overflow-hidden flex items-center justify-center">
              
              {/* Fallback Card if embed blocked or failed */}
              {libraryFailed ? (
                <div className="p-8 text-center max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EF3969] text-[#000354] mx-auto flex items-center justify-center font-black text-2xl border-2 border-[#E1C296]">
                    ★
                  </div>
                  <h3 className="text-xl font-black font-engineer text-[#E1C296]">
                    The Library is Ready to Explore
                  </h3>
                  <p className="text-xs font-mono text-[#E6B886] leading-relaxed">
                    Browser security protocols prevent inline embedding of third-party domains. Click below to launch the standalone interactive summary reader directly!
                  </p>
                  <a
                    href="https://atifixation.github.io/atifrecommends/homepage.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#EF3969] text-[#000354] font-mono font-black text-sm uppercase border-2 border-[#E1C296] shadow-[4px_4px_0px_#000354] hover:bg-[#E1C296] transition-all"
                  >
                    <span>Open the Library →</span>
                  </a>
                </div>
              ) : (
                <>
                  {!libraryLoaded && (
                    <div className="absolute inset-0 bg-[#000F5C] flex flex-col items-center justify-center gap-3 text-xs font-mono text-[#E1C296] z-10">
                      <RefreshCw size={24} className="animate-spin text-[#EF3969]" />
                      <span>Loading book summaries...</span>
                    </div>
                  )}

                  <iframe
                    ref={iframeRef}
                    src="https://atifixation.github.io/atifrecommends/homepage.html"
                    title="The Library: Atif Khan Book Summaries"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    loading="lazy"
                    onLoad={() => setLibraryLoaded(true)}
                    className="w-full h-full border-none"
                  />
                </>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          F) PHOTO GALLERY: "BEHIND THE FRAMES"
          ======================================================== */}
      <section
        id="gallery"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000F5C] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b-2 border-[#E1C296]/20">
            <div>
              <div className="inline-flex items-center gap-2 y2k-tape-label text-xs mb-2">
                <span>★ BEHIND THE FRAMES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-engineer uppercase tracking-tight text-[#E1C296]">
                Photo Essay & Stills
              </h2>
            </div>

            {/* Toggle Raw Color vs Y2K Duotone */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowOriginalPhotos(!showOriginalPhotos)}
                className="flex items-center gap-2 px-4 py-2 bg-[#000354] text-[#E1C296] border-2 border-[#E1C296] font-mono text-xs font-bold rounded shadow-[2px_2px_0px_#EF3969] hover:bg-[#EF3969] hover:text-[#000354] transition-all"
              >
                {showOriginalPhotos ? <EyeOff size={14} /> : <Eye size={14} />}
                <span>{showOriginalPhotos ? "Show Y2K Duotone" : "Show Raw Color"}</span>
              </button>
            </div>
          </div>

          {/* Mixed Collage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* 1. HERO SPLIT: Film Still Agent (Bleeds across pink & navy) */}
            <div
              onClick={() => setSelectedPhoto(portfolioPhotos[0])}
              className="md:col-span-8 cursor-pointer group relative bg-[#000354] border-4 border-[#E1C296] rounded-lg overflow-hidden shadow-[8px_8px_0px_#EF3969] hover:-translate-y-1 transition-transform"
            >
              <div className="h-96 sm:h-[480px] overflow-hidden relative">
                <img
                  src={portfolioPhotos[0].src}
                  alt={portfolioPhotos[0].alt}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    showOriginalPhotos ? 'no-y2k-filter' : 'y2k-photo'
                  }`}
                />
                
                {/* Safe Corner Sticker */}
                <div className="absolute top-4 right-4 y2k-tape-label text-xs rotate-3">
                  ★ HERO FILM STILL
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#000354] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-[#E1C296] font-engineer">
                    {portfolioPhotos[0].title}
                  </h3>
                  <p className="text-xs font-mono text-[#E6B886]">
                    {portfolioPhotos[0].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. POLAROID CARD: Candid Portrait with Tape Corner */}
            <div
              onClick={() => setSelectedPhoto(portfolioPhotos[2])}
              className="md:col-span-4 cursor-pointer group relative bg-[#FFFDF6] text-[#16120F] p-3 pb-6 border-4 border-[#16120F] rounded shadow-[6px_6px_0px_#EF3969] rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all"
            >
              {/* Masking tape on top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#E1C296]/80 border border-[#16120F]/30 -rotate-2 shadow-sm" />

              <div className="aspect-[4/5] bg-[#16120F] overflow-hidden rounded-xs">
                <img
                  src={portfolioPhotos[2].src}
                  alt={portfolioPhotos[2].alt}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    showOriginalPhotos ? 'no-y2k-filter' : 'y2k-photo'
                  }`}
                />
              </div>

              <div className="mt-3 text-center">
                <h4 className="text-sm font-bold font-mono text-[#16120F]">
                  {portfolioPhotos[2].title}
                </h4>
                <p className="text-[10px] font-mono text-[#16120F]/60">
                  {portfolioPhotos[2].subtitle}
                </p>
              </div>
            </div>

            {/* 3. TARTAN MAT SHOWCASE: Motion Blur Kurta */}
            <div
              onClick={() => setSelectedPhoto(portfolioPhotos[1])}
              className="md:col-span-6 cursor-pointer group relative p-3 tartan-pattern rounded-lg border-4 border-[#E1C296] shadow-[8px_8px_0px_#EF3969] hover:-translate-y-1 transition-transform"
            >
              <div className="relative aspect-[4/5] bg-[#000354] rounded overflow-hidden border-2 border-[#E1C296]">
                <img
                  src={portfolioPhotos[1].src}
                  alt={portfolioPhotos[1].alt}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    showOriginalPhotos ? 'no-y2k-filter' : 'y2k-photo'
                  }`}
                />
                <div className="absolute bottom-3 left-3 bg-[#000354]/90 px-3 py-1 border border-[#E1C296] text-xs font-mono font-bold text-[#E1C296]">
                  ★ Vethara Motion Blur
                </div>
              </div>
            </div>

            {/* 4. STAR REVEAL: Zine Art Cover */}
            <div
              onClick={() => setSelectedPhoto(portfolioPhotos[4])}
              className="md:col-span-6 cursor-pointer group relative bg-[#000354] border-4 border-[#EF3969] rounded-lg overflow-hidden p-6 shadow-[8px_8px_0px_#E1C296] hover:-translate-y-1 transition-transform flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="y2k-tape-label text-xs">
                  ★ ORIGINAL ART DIRECTION
                </span>
                <span className="text-[#EF3969] font-black text-sm">2024</span>
              </div>

              <div className="relative aspect-[3/4] max-h-72 bg-[#000F5C] rounded border-2 border-[#E1C296] overflow-hidden mx-auto">
                <img
                  src={portfolioPhotos[4].src}
                  alt={portfolioPhotos[4].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-base font-black text-[#E1C296] font-engineer">
                  {portfolioPhotos[4].title}
                </h4>
                <p className="text-xs font-mono text-[#E6B886]">
                  {portfolioPhotos[4].subtitle}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          G) INFLUENCES STRIP (ANIMATED MARQUEE)
          ======================================================== */}
      <section className="py-6 bg-[#EF3969] text-[#000354] border-b-4 border-[#E1C296] overflow-hidden select-none">
        <div className="w-full whitespace-nowrap flex items-center gap-6 animate-stage-drift text-sm sm:text-base font-black font-mono tracking-wider uppercase">
          {influences.concat(influences).map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              <span className="text-[#000354]">★</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ========================================================
          H) CONTACT: "LET'S MAKE SOMETHING." PINK SLAB
          ======================================================== */}
      <section
        id="creative-contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EF3969] text-[#000354] border-b-4 border-[#000354]"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#000354] text-[#E1C296] border border-[#E1C296] text-xs font-mono font-black uppercase">
            <span>★ READY FOR COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-engineer uppercase tracking-tight text-[#000354] leading-tight">
            Let's Make Something.
          </h2>

          <p className="text-base sm:text-lg font-mono text-[#000354]/90 max-w-xl mx-auto">
            Got a film to produce, a screenplay to develop, or a story waiting to be told? Write to me directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${identity.publicEmail}`}
              className="px-6 py-3.5 bg-[#000354] text-[#E1C296] font-mono font-black text-sm uppercase border-2 border-[#E1C296] shadow-[4px_4px_0px_#000354] hover:bg-[#000F5C] transition-all flex items-center gap-2"
            >
              <Mail size={16} />
              <span>[ SEND EMAIL ]</span>
            </a>

            <a
              href="https://instagram.com/atifrecommends"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#E1C296] text-[#000354] font-mono font-black text-sm uppercase border-2 border-[#000354] shadow-[4px_4px_0px_#000354] hover:bg-[#FFFDF6] transition-all flex items-center gap-2"
            >
              <Instagram size={16} />
              <span>[ INSTAGRAM @ATIFRECOMMENDS ]</span>
            </a>

            <button
              onClick={onSwitchToTechnical}
              className="px-6 py-3.5 bg-[#000F5C] text-[#EF3969] font-mono font-black text-sm uppercase border-2 border-[#EF3969] shadow-[4px_4px_0px_#000354] hover:bg-[#000354] transition-all flex items-center gap-2"
            >
              <span>[ SEE WHAT I BUILD → ]</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoLightbox
          photo={selectedPhoto}
          photos={portfolioPhotos}
          onClose={() => setSelectedPhoto(null)}
          onSelect={setSelectedPhoto}
        />
      )}

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-[99999] bg-[#000354]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#000F5C] border-4 border-[#E1C296] rounded-lg p-6 shadow-[10px_10px_0px_#EF3969]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E1C296]/30">
              <h3 className="font-engineer font-black text-lg text-[#E1C296]">
                {activeVideoModal.title} · {activeVideoModal.episode}
              </h3>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="px-2.5 py-1 bg-[#EF3969] text-[#000354] font-mono font-bold text-xs uppercase"
              >
                Close
              </button>
            </div>

            <div className="aspect-video bg-[#000354] border-2 border-[#E1C296] rounded flex flex-col items-center justify-center p-8 text-center">
              <Film size={48} className="text-[#EF3969] mb-4" />
              <p className="text-sm font-mono text-[#E1C296] font-bold">
                {activeVideoModal.title}
              </p>
              <p className="text-xs font-mono text-[#E6B886] mt-1 max-w-md">
                {activeVideoModal.logline}
              </p>
              <p className="text-[11px] font-mono text-[#E1C296]/60 mt-4">
                [VIDEO FILE SLOT: Drop video file into /public/assets/ to stream directly]
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

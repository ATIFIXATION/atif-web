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
  ChevronDown,
  Filter,
  Image as ImageIcon,
  Type,
  X,
  Hash,
  Calendar
} from 'lucide-react';
import { creativeWorks } from '../data/creative';
import { portfolioPhotos } from '../data/photos';
import { identity } from '../data/identity';
import { links } from '../data/links';
import PhotoLightbox from './PhotoLightbox';
import { useTheme } from '../context/ThemeContext';
import socialManifest from '../data/social/manifest.json';

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

  // Social Manifest states
  const [socialFilter, setSocialFilter] = useState('all');
  const [poemViewModes, setPoemViewModes] = useState({}); // { [id]: 'text' | 'image' }
  const [selectedSocialPost, setSelectedSocialPost] = useState(null);

  const poems = socialManifest.filter((p) => p.tag === 'poem');
  const curatedEssays = socialManifest.filter((p) => p.tag !== 'poem');
  const filteredEssays = socialFilter === 'all'
    ? curatedEssays
    : curatedEssays.filter((p) => p.tag === socialFilter);

  const togglePoemMode = (id) => {
    setPoemViewModes((prev) => ({
      ...prev,
      [id]: prev[id] === 'image' ? 'text' : 'image',
    }));
  };

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
          D1) POEMS & VERSE: ZINE ARCHIVE (REAL TEXT + ZINE STYLING)
          ======================================================== */}
      <section
        id="poems"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000F5C] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b-2 border-[#E1C296]/20">
            <div>
              <div className="inline-flex items-center gap-2 y2k-tape-label text-xs mb-2">
                <span>★ ORIGINAL WRITING & VERSE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-engineer uppercase tracking-tight text-[#E1C296]">
                Poems & Philosophical Verse
              </h2>
              <p className="text-xs font-mono text-[#E6B886] mt-1 max-w-xl">
                Written and curated by Atif Khan. Rendered as authentic zine text cards with line-level typography, Urdu/Unicode preservation, and instant toggle to view the original Instagram post photo.
              </p>
            </div>

            <a
              href="https://instagram.com/atifrecommends"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF3969] text-[#000354] font-mono text-xs font-bold uppercase border-2 border-[#E1C296] shadow-[3px_3px_0px_#000354] hover:bg-[#E1C296] transition-all self-start sm:self-end"
            >
              <Instagram size={14} />
              <span>@atifrecommends</span>
            </a>
          </div>

          {/* Grid of Zine Poem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {poems.map((poem, index) => {
              const isImageMode = poemViewModes[poem.id] === 'image';
              const isPinkSlab = index % 2 === 1;

              return (
                <div
                  key={poem.id}
                  className="relative p-1.5 tartan-pattern rounded-lg border-4 border-[#E1C296] shadow-[8px_8px_0px_#EF3969] transition-transform hover:-translate-y-1"
                >
                  <div
                    className={`relative p-6 sm:p-8 rounded border-2 border-[#E1C296] flex flex-col justify-between min-h-[440px] ${
                      isPinkSlab
                        ? 'bg-[#EF3969] text-[#000354]'
                        : 'bg-[#000354] text-[#E1C296]'
                    }`}
                  >
                    {/* Card Top Utility Bar */}
                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-current/20 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="y2k-tape-label text-[11px] font-black uppercase">
                          ★ POEM · {poem.postType.toUpperCase()}
                        </span>
                        <span className="opacity-70 text-[10px] hidden sm:inline">
                          {poem.date}
                        </span>
                      </div>

                      {/* Read as Text / Read as Image Toggle */}
                      <button
                        onClick={() => togglePoemMode(poem.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded border transition-all ${
                          isPinkSlab
                            ? 'bg-[#000354] text-[#E1C296] border-[#000354] hover:bg-[#000F5C]'
                            : 'bg-[#EF3969] text-[#000354] border-[#E1C296] hover:bg-[#E1C296]'
                        }`}
                        title="Toggle between real text and the original post image"
                      >
                        {isImageMode ? (
                          <>
                            <Type size={12} />
                            <span>Read as Text</span>
                          </>
                        ) : (
                          <>
                            <ImageIcon size={12} />
                            <span>Read as Image</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Card Body: Text or Image */}
                    {isImageMode ? (
                      <div className="my-auto relative aspect-square w-full rounded overflow-hidden border-2 border-current shadow-inner bg-[#000354]">
                        <img
                          src={poem.originalImage}
                          alt={poem.title}
                          className="w-full h-full object-cover y2k-photo"
                        />
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#000354]/90 text-[#E1C296] text-[10px] font-mono border border-[#E1C296]">
                          Original Post Photo
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col justify-between my-2">
                        <div>
                          <h3
                            dir="auto"
                            className="text-2xl sm:text-3xl font-black font-engineer tracking-tight mb-2"
                          >
                            {poem.title}
                          </h3>

                          {/* Star Divider */}
                          <div className="flex items-center gap-2 my-4 opacity-50 text-xs">
                            <span>★</span>
                            <span className="w-8 h-px bg-current" />
                            <span>★</span>
                            <span className="w-8 h-px bg-current" />
                            <span>★</span>
                          </div>

                          {/* Stanza Lines Preserved */}
                          <p
                            dir="auto"
                            className={`font-mono text-sm sm:text-base leading-relaxed whitespace-pre-line tracking-wide select-text ${
                              isPinkSlab ? 'text-[#000354]' : 'text-[#E1C296]/95'
                            }`}
                          >
                            {poem.caption}
                          </p>
                        </div>

                        {/* Signature bottom-right */}
                        <div className="mt-6 pt-4 border-t border-current/15 flex items-center justify-between text-xs font-mono">
                          <span className="opacity-70 text-[11px] italic">
                            Atif Khan · @atifrecommends
                          </span>
                          <span className="font-bold tracking-wider">
                            ★ ATIF KHAN
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Card Footer: Hashtags & Link to Post */}
                    <div className="mt-4 pt-3 border-t border-current/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {poem.hashtags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] opacity-75 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={poem.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 font-bold text-xs uppercase hover:underline ${
                          isPinkSlab ? 'text-[#000354]' : 'text-[#EF3969]'
                        }`}
                      >
                        <span>View on Instagram</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          D2) BOOKS / FILM / PSYCHOLOGY: FILTERABLE GRID
          ======================================================== */}
      <section
        id="recommends"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000354] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-[#E1C296]/20">
            <div>
              <div className="inline-flex items-center gap-2 y2k-tape-label text-xs mb-2">
                <span>★ @ATIFRECOMMENDS ESSAY VAULT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-engineer uppercase tracking-tight text-[#E1C296]">
                Books, Film & Psychology Cards
              </h2>
              <p className="text-xs font-mono text-[#E6B886] mt-1 max-w-xl">
                Curated literary critiques, cinematic breakdowns, and cognitive psychology notes. Click any card to launch the full formatted essay & quote lightbox.
              </p>
            </div>

            {/* Filter Tabs / Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { key: 'all', label: 'All', count: curatedEssays.length },
                { key: 'book', label: 'Books', count: curatedEssays.filter(p => p.tag === 'book').length },
                { key: 'film', label: 'Film', count: curatedEssays.filter(p => p.tag === 'film').length },
                { key: 'psychology', label: 'Psychology', count: curatedEssays.filter(p => p.tag === 'psychology').length },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setSocialFilter(f.key)}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-bold uppercase border-2 transition-all flex items-center gap-1.5 ${
                    socialFilter === f.key
                      ? 'bg-[#EF3969] text-[#000354] border-[#E1C296] shadow-[2px_2px_0px_#000354]'
                      : 'bg-[#000F5C] text-[#E1C296] border-[#E1C296]/40 hover:border-[#EF3969]'
                  }`}
                >
                  <span>{f.label}</span>
                  <span className="text-[10px] opacity-75">({f.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filterable Essays Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEssays.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedSocialPost(post)}
                className="group cursor-pointer bg-[#000F5C] border-2 border-[#E1C296] rounded-lg overflow-hidden shadow-[6px_6px_0px_#EF3969] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#EF3969] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative aspect-video bg-[#000354] overflow-hidden border-b-2 border-[#E1C296]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 y2k-photo"
                    />
                    
                    {/* Tape Label with Category */}
                    <div className="absolute top-2.5 left-2.5 y2k-tape-label text-[10px]">
                      ★ {post.tag.toUpperCase()}
                    </div>

                    {/* Post Type Pill */}
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#000354]/90 text-[#E1C296] text-[10px] font-mono border border-[#E1C296]">
                      {post.postType.toUpperCase()}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#000F5C] via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-5">
                    <div className="text-[11px] font-mono text-[#EF3969] font-bold mb-1 flex items-center justify-between">
                      <span>★ {post.author}</span>
                      <span className="text-[#E6B886] opacity-75">{post.date}</span>
                    </div>

                    <h3 className="text-lg font-black text-[#E1C296] font-engineer group-hover:text-[#EF3969] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs font-mono text-[#E1C296]/80 mt-2.5 line-clamp-3 leading-relaxed italic">
                      "{post.excerpt}"
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-[#E1C296]/20 flex items-center justify-between text-xs font-mono text-[#E6B886]">
                  <span className="group-hover:text-[#EF3969] flex items-center gap-1 font-bold">
                    <span>Read full essay</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <Instagram size={13} className="text-[#EF3969]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          D3) LIVE FROM INSTAGRAM: OFFICIAL EMBED & PROFILE CARD
          ======================================================== */}
      <section
        id="live-instagram"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#000F5C] text-[#E1C296] border-b-4 border-[#EF3969]"
      >
        <div className="max-w-4xl mx-auto">
          
          <div className="relative p-2 sm:p-4 tartan-pattern rounded-lg border-4 border-[#E1C296] shadow-[8px_8px_0px_#EF3969]">
            <div className="bg-[#000354] p-6 sm:p-8 rounded border-2 border-[#E1C296] flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="space-y-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 y2k-tape-label text-xs">
                  <span>★ LIVE FEED & REELS</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black font-engineer text-[#E1C296]">
                  Live from Instagram · @atifrecommends
                </h3>

                <p className="text-xs font-mono text-[#E6B886] max-w-lg leading-relaxed">
                  Daily visual dissections of Kafka, Dostoevsky, screenplay pacing, and psychology experiments. All original text and cinematography created in Bhopal, India.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-[#000F5C] border border-[#E1C296]/40 rounded text-[#E1C296]">
                    ✦ 16 Curated Works
                  </span>
                  <span className="px-2.5 py-1 bg-[#000F5C] border border-[#E1C296]/40 rounded text-[#E1C296]">
                    ✦ Books & Film
                  </span>
                  <span className="px-2.5 py-1 bg-[#000F5C] border border-[#E1C296]/40 rounded text-[#E1C296]">
                    ✦ Original Urdu & Verse
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://instagram.com/atifrecommends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#EF3969] text-[#000354] font-mono font-black text-sm uppercase border-2 border-[#E1C296] shadow-[4px_4px_0px_#000354] hover:bg-[#E1C296] transition-all flex items-center justify-center gap-2"
                >
                  <Instagram size={16} />
                  <span>Follow @atifrecommends</span>
                </a>

                <span className="text-[10px] font-mono text-[#E6B886]/70">
                  Open official Instagram app or web
                </span>
              </div>

            </div>
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

      {/* Social Post Lightbox Modal */}
      {selectedSocialPost && (
        <div
          className="fixed inset-0 z-[99999] bg-[#000354]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedSocialPost(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#000F5C] border-4 border-[#E1C296] rounded-lg shadow-[12px_12px_0px_#EF3969] overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="bg-[#000354] px-6 py-3 border-b-2 border-[#E1C296] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="y2k-tape-label text-[11px]">
                  ★ {selectedSocialPost.tag.toUpperCase()} · {selectedSocialPost.postType.toUpperCase()}
                </span>
                <span className="text-[#E6B886] opacity-75 hidden sm:inline">
                  {selectedSocialPost.date}
                </span>
              </div>

              <button
                onClick={() => setSelectedSocialPost(null)}
                className="w-7 h-7 rounded bg-[#EF3969] text-[#000354] font-bold flex items-center justify-center hover:bg-[#E1C296] transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Media Column */}
              <div className="md:col-span-5 space-y-4">
                <div className="relative aspect-square w-full bg-[#000354] border-2 border-[#E1C296] rounded overflow-hidden shadow-[4px_4px_0px_#EF3969]">
                  <img
                    src={selectedSocialPost.image}
                    alt={selectedSocialPost.title}
                    className="w-full h-full object-cover y2k-photo"
                  />
                </div>

                <div className="p-3 bg-[#000354] border border-[#E1C296]/30 rounded text-xs font-mono space-y-1">
                  <div className="flex justify-between text-[#E6B886]">
                    <span className="opacity-70">Author / Subject:</span>
                    <span className="font-bold text-[#E1C296]">{selectedSocialPost.author}</span>
                  </div>
                  <div className="flex justify-between text-[#E6B886]">
                    <span className="opacity-70">Published:</span>
                    <span className="text-[#E1C296]">{selectedSocialPost.date}</span>
                  </div>
                </div>
              </div>

              {/* Text / Caption Column */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4 text-left">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-engineer text-[#E1C296] leading-tight">
                    {selectedSocialPost.title}
                  </h3>

                  <div className="flex items-center gap-2 my-3 opacity-60 text-xs text-[#E1C296]">
                    <span>★</span>
                    <span className="w-10 h-px bg-current" />
                    <span>★</span>
                  </div>

                  {/* Full formatted caption */}
                  <div className="max-h-64 sm:max-h-80 overflow-y-auto pr-2 custom-scrollbar text-xs sm:text-sm font-mono leading-relaxed text-[#E1C296]/95 whitespace-pre-line select-text">
                    {selectedSocialPost.caption}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E1C296]/20 space-y-3">
                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSocialPost.hashtags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-[#000354] text-[#E6B886] border border-[#E1C296]/30 text-[10px] font-mono rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Instagram Button */}
                  <a
                    href={selectedSocialPost.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EF3969] text-[#000354] font-mono font-black text-xs uppercase border-2 border-[#E1C296] shadow-[3px_3px_0px_#000354] hover:bg-[#E1C296] transition-all"
                  >
                    <Instagram size={14} />
                    <span>View Original Post on Instagram →</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}


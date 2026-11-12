import React, { useState, useRef } from 'react';
import { creativeWorks } from '../data/creative';
import { Film, Volume2, VolumeX, Instagram, Sparkles, BookOpen, Clapperboard, ExternalLink } from 'lucide-react';

export default function StudioSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (nextMuted === false) {
      videoRef.current.play();
    }
  };

  const { framebyframe, atifrecommends, novel, screenwriting, posters } = creativeWorks;

  return (
    <section id="studio" className="py-24 bg-[#5B2EE0] border-b-4 border-[#16120F] text-[#FFFDF6] relative overflow-hidden">
      
      {/* Visual Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-fluid-h2 font-black tracking-tight text-[#FFFDF6] font-creator font-creator-wonk">
              Creator by instinct.
            </h2>
            <p className="text-fluid-lead text-[#FFFDF6]/90 font-medium max-w-[65ch] mt-3 font-body">
              35mm textures, high-stakes screenplays, existential literature, and cinematic short-form video.
            </p>
          </div>

          <div className="bg-[#16120F] p-4 rounded-md border-2 border-[#FFB703] shadow-[4px_4px_0px_#FFB703] max-w-xs text-[#FFFDF6]">
            <span className="text-xs font-mono text-[#FFB703] block font-bold">
              Cinematic creed
            </span>
            <p className="text-xs font-bold mt-1 font-body">
              "Every frame, sentence, and cut is a deliberate choice about where to place the light."
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* 1. Phone-Shaped Reel Frame + FrameByFrame Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Oversized 9:16 Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 rounded-[44px] bg-[#16120F] p-3.5 border-4 border-[#16120F] shadow-[12px_12px_0px_#16120F]">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#16120F] rounded-full z-20 flex items-center justify-center">
                <span className="w-10 h-1 bg-[#333] rounded-full" />
              </div>

              {/* Video Screen Container */}
              <div className="relative w-full aspect-[9/16] rounded-[32px] overflow-hidden bg-[#16120F] border-2 border-[#333] flex flex-col justify-between p-6">
                {framebyframe.reelVideo ? (
                  <>
                    <video
                      ref={videoRef}
                      src={framebyframe.reelVideo}
                      poster={framebyframe.posterFrame}
                      playsInline
                      autoPlay
                      loop
                      muted={isMuted}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Sound Tap Overlay Button */}
                    <button
                      onClick={toggleSound}
                      className="absolute bottom-4 right-4 z-30 p-2.5 bg-[#16120F]/90 backdrop-blur-md text-[#FFFDF6] border-2 border-[#FFB703] rounded-full shadow-[2px_2px_0px_#FFB703] hover:scale-110 active:scale-95 transition-all"
                      aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-[#FFB703] animate-pulse" />}
                    </button>

                    {/* Audio Waves Status Pill */}
                    <div className="absolute bottom-4 left-4 z-30 px-3 py-1 bg-[#16120F]/80 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-mono flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isMuted ? 'bg-[#E5383B]' : 'bg-[#0FB5AE] animate-ping'}`} />
                      <span>{isMuted ? 'MUTED (TAP 🔊)' : 'LIVE AUDIO'}</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Top status bar in phone */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#FFFDF6]/70 pt-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E5383B] animate-ping" />
                        <span className="font-bold text-[#E5383B]">REC</span>
                      </div>
                      <span>24 FPS // 4K</span>
                    </div>

                    {/* Center Slate Graphic */}
                    <div className="relative z-10 my-auto text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E5383B] border-2 border-[#FFFDF6] flex items-center justify-center text-[#FFFDF6] shadow-[4px_4px_0px_#FFB703]">
                        <Film size={28} />
                      </div>

                      <div>
                        <div className="text-xs font-mono font-black text-[#FFB703] uppercase tracking-wider">
                          FRAMEBYFRAME
                        </div>
                        <h4 className="text-lg font-black text-[#FFFDF6] mt-1 font-creator">
                          Creative reel
                        </h4>
                        <p className="text-[11px] font-mono text-[#FFFDF6]/60 mt-1">
                          In Production · Sony ZV-E10 II
                        </p>
                      </div>

                      {/* Animated Audio Equalizer Mockup */}
                      <div className="flex items-center justify-center gap-1 h-8 pt-2">
                        {[40, 75, 90, 50, 85, 60, 95, 45, 70, 80].map((h, i) => (
                          <span
                            key={i}
                            className="w-1 bg-[#0FB5AE] rounded-full animate-pulse"
                            style={{
                              height: `${h}%`,
                              animationDelay: `${i * 0.12}s`,
                              animationDuration: '0.8s'
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom Slate info */}
                    <div className="relative z-10 p-3 bg-[#FFFDF6]/10 rounded-lg border border-[#FFFDF6]/20 text-center">
                      <span className="text-[10px] font-mono text-[#FFFDF6]/80 block">
                        CINEMATIC SEQUENCE
                      </span>
                      <span className="text-[9px] font-mono text-[#FFB703]">
                        TIMECODE: 00:00:24:18
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Tilted Sticker attached to phone frame */}
              <div className="absolute -bottom-3 -left-4 bg-[#FFB703] text-[#16120F] border-2 border-[#16120F] px-3 py-1 font-black text-xs uppercase rounded-md shadow-[3px_3px_0px_#16120F] -rotate-6">
                PORTFOLIO REEL // 4K
              </div>
            </div>
          </div>

          {/* Right: FrameByFrame Brand Card + Behind The Scenes */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="bg-[#FFFDF6] text-[#16120F] p-8 rounded-lg border-4 border-[#16120F] shadow-[8px_8px_0px_#16120F]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#16120F]">
                <div>
                  <span className="text-[10px] font-mono font-black text-[#5B2EE0] uppercase">
                    INDEPENDENT STUDIO IMPRINT
                  </span>
                  <h3 className="text-3xl font-black tracking-tight mt-0.5">
                    FrameByFrame
                  </h3>
                </div>
                <div className="w-12 h-12 bg-[#E5383B] border-2 border-[#16120F] rounded flex items-center justify-center text-[#FFFDF6] font-black text-xs shadow-[2px_2px_0px_#16120F]">
                  FBF
                </div>
              </div>

              <p className="text-base text-[#16120F]/85 leading-relaxed font-body">
                {framebyframe.description}
              </p>

              {/* Letterbox Behind-the-scenes shot */}
              <div className="mt-6 border-2 border-[#16120F] rounded-md overflow-hidden bg-[#16120F] shadow-[4px_4px_0px_#16120F]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={framebyframe.btsPhoto}
                    alt="Atif seen from behind in an old library surrounded by floor-to-ceiling stacks of books, researching stories"
                    width="640"
                    height="360"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-[#16120F]/90 text-[#FFB703] text-[10px] font-mono px-2 py-0.5 rounded border border-[#FFB703]">
                    BTS: THE LITERARY STACKS
                  </div>
                </div>
                <div className="p-3 bg-[#16120F] text-[#FFFDF6] text-xs font-mono">
                  {framebyframe.btsCaption}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 2. Novel: The Frequency of the Dead (Atmospheric Vethara Theme) */}
        <div className="p-8 sm:p-12 bg-[#16120F] text-[#FFFDF6] rounded-xl border-4 border-[#FFB703] shadow-[12px_12px_0px_#16120F] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-creator">
            VETHARA
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* 3D Book Cover Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group perspective-1000">
                <div className="relative w-64 sm:w-72 aspect-[2/3] rounded-lg border-4 border-[#FFB703] shadow-[8px_8px_0px_#5B2EE0] overflow-hidden transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-102">
                  <img
                    src={novel.cover}
                    alt="The Frequency of the Dead book cover by Atif Khan and Muhammad Rehaan set in Vethara"
                    width="288"
                    height="432"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#E5383B] text-[#FFFDF6] font-mono text-[10px] font-black uppercase px-2.5 py-1 rounded border-2 border-[#16120F] shadow-[2px_2px_0px_#16120F] rotate-3">
                  MANUSCRIPT COMPLETE
                </div>
              </div>
            </div>

            {/* Novel Details */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#FFB703] text-[#16120F] text-xs font-bold rounded">
                  {novel.genre}
                </span>
                <span className="px-2.5 py-0.5 bg-[#5B2EE0] text-[#FFFDF6] text-xs font-mono rounded">
                  Setting: {novel.setting}
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black font-creator text-[#FFFDF6] tracking-tight">
                {novel.title}
              </h3>
              <p className="text-sm font-mono text-[#FFB703]">
                Co-authored with {novel.coAuthor}
              </p>

              <p className="text-base text-[#FFFDF6]/85 leading-relaxed font-body">
                {novel.synopsis}
              </p>

              <div className="p-4 bg-[#FFFDF6]/5 border border-[#FFFDF6]/15 rounded-md text-xs font-mono text-[#FFFDF6]/80 leading-relaxed">
                <span className="text-[#0FB5AE] font-bold block mb-1">ATIF'S AUTHORIAL ROLE:</span>
                {novel.role}
              </div>

              <div className="pt-2">
                <span className="inline-block px-3 py-1.5 bg-[#FFFDF6]/10 border border-[#FFFDF6]/30 text-xs font-mono rounded text-[#FFFDF6]/60">
                  Excerpt PDF: [Pending Final Print Run]
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Screenwriting: BLOOD DEBT (Screenplay Format in Courier Type) */}
        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h3 className="text-fluid-h3 font-black tracking-tight text-[#FFFDF6] font-creator">
                Dialogue with teeth.
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FFFDF6]/70">
              Formatted in standard 12pt screenplay Courier
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Screenplay Paper View */}
            <div className="lg:col-span-8 screenplay-paper text-[#16120F] p-6 sm:p-10 rounded-sm border-4 border-[#16120F] shadow-[8px_8px_0px_#16120F]">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#16120F]/20 text-xs font-mono">
                <span className="font-bold">TITLE: BLOOD DEBT</span>
                <span>WRITTEN BY ATIF KHAN</span>
                <span className="bg-[#E5383B] text-[#FFFDF6] px-1.5 py-0.5 rounded text-[10px]">DRAFT 01</span>
              </div>

              {/* Slug line */}
              <div className="font-bold uppercase tracking-wider text-sm mb-4">
                {screenwriting[0].sampleScene.slug}
              </div>

              {/* Action paragraph */}
              <p className="text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {screenwriting[0].sampleScene.action}
              </p>

              {/* Dialogue */}
              <div className="space-y-4 max-w-lg mx-auto">
                {screenwriting[0].sampleScene.dialogue.map((d, i) => (
                  <div key={i} className="text-xs sm:text-sm">
                    <div className="font-bold text-center tracking-widest uppercase">
                      {d.speaker}
                    </div>
                    <div className="text-center sm:px-8 mt-0.5 whitespace-pre-line leading-relaxed">
                      {d.line}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[#16120F]/10 text-[11px] text-[#16120F]/60 flex justify-between">
                <span>SCENE 04</span>
                <span>CONTINUED...</span>
              </div>
            </div>

            {/* Screenplay Metadata Column */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div className="bg-[#FFFDF6] text-[#16120F] p-6 rounded-lg border-4 border-[#16120F] shadow-[6px_6px_0px_#16120F]">
                <span className="text-[10px] font-mono font-bold uppercase text-[#5B2EE0]">
                  LOGLINE & SYNOPSIS
                </span>
                <h4 className="text-xl font-black mt-1">BLOOD DEBT</h4>
                <p className="text-xs sm:text-sm text-[#16120F]/85 mt-2 leading-relaxed">
                  {screenwriting[0].logline}
                </p>
                <div className="mt-4 pt-3 border-t border-[#16120F]/15 flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold">Characters:</span>
                  <div className="flex gap-1">
                    {screenwriting[0].characters.map(c => (
                      <span key={c} className="text-[10px] font-bold px-2 py-0.5 bg-[#FFB703] border border-[#16120F] rounded">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFDF6] text-[#16120F] p-6 rounded-lg border-4 border-[#16120F] shadow-[6px_6px_0px_#16120F]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#E5383B]">
                    IN DEVELOPMENT
                  </span>
                  <span className="text-[10px] font-mono text-[#16120F]/50">Series Concept</span>
                </div>
                <h4 className="text-lg font-black mt-1">THE UNTITLED 90s PROJECT</h4>
                <p className="text-xs text-[#16120F]/85 mt-2 leading-relaxed">
                  {screenwriting[1].logline}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4. @atifrecommends Instagram Visual Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h3 className="text-fluid-h3 font-black text-[#FFFDF6] tracking-tight font-creator">
                Curating literature & psychology
              </h3>
            </div>

            <a
              href={atifrecommends.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFB703] text-[#16120F] font-bold text-xs rounded-md border-2 border-[#16120F] shadow-[3px_3px_0px_#16120F] hover:bg-[#FFFDF6] transition-colors"
            >
              <Instagram size={14} />
              <span>Visit @atifrecommends</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atifrecommends.posts.map((post) => (
              <a
                key={post.id}
                href={atifrecommends.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#16120F] rounded-lg border-3 border-[#16120F] shadow-[5px_5px_0px_#16120F] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:rotate-1"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={`@atifrecommends analysis of ${post.author} - ${post.work}`}
                    width="400"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFB703] text-[#16120F] text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded border border-[#16120F]">
                    {post.tag}
                  </div>
                </div>
                <div className="p-4 bg-[#FFFDF6] text-[#16120F] border-t-2 border-[#16120F]">
                  <div className="text-xs font-black uppercase tracking-tight">{post.author}</div>
                  <div className="text-[11px] font-mono text-[#5B2EE0] mt-0.5">{post.work}</div>
                  <p className="text-[11px] text-[#16120F]/80 italic mt-2 line-clamp-2">
                    "{post.quote}"
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 5. Poster Gallery on Reel Red Field */}
        <div className="bg-[#E5383B] p-8 sm:p-12 rounded-xl border-4 border-[#16120F] shadow-[10px_10px_0px_#16120F] text-[#FFFDF6]">
          
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-fluid-h3 font-black tracking-tight text-[#FFFDF6] font-creator">
                Dramatic chaotic red frames
              </h3>
            </div>
            <span className="text-xs font-mono text-[#FFFDF6]/80">
              Photorealistic keys & film-still layouts
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {posters.map((pos, idx) => (
              <div
                key={idx}
                className="group relative bg-[#16120F] rounded-md border-3 border-[#16120F] shadow-[4px_4px_0px_#16120F] overflow-hidden transition-all duration-300 hover:scale-103"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={pos.file}
                    alt={`${pos.title} poster designed by Atif Khan`}
                    width="300"
                    height="400"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#16120F] text-[#FFFDF6] border-t border-[#FFFDF6]/20">
                  <div className="text-xs font-black tracking-wider uppercase">{pos.title}</div>
                  <div className="text-[10px] font-mono text-[#FFB703] mt-0.5 truncate">{pos.caption}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}


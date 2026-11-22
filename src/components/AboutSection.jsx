import React from 'react';
import { identity } from '../data/identity';
import { Sparkles, MapPin, GraduationCap, Briefcase, BookOpen, Film, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function AboutSection() {
  const { theme } = useTheme();
  const isY2K = theme === 'y2k';

  return (
    <section
      id="about"
      className={`py-24 border-b-4 transition-colors duration-300 relative overflow-hidden ${
        isY2K
          ? 'bg-[#000354] border-[#EF3969] text-[#E1C296]'
          : 'bg-[#FFFDF6] border-[#16120F] text-[#16120F]'
      }`}
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-3">
          {isY2K && <span className="text-[#EF3969] text-2xl font-black">★</span>}
          <h2 className="text-fluid-h2 font-black tracking-tight font-engineer">
            {isY2K ? "TWO BRAINS. ONE BUILDER." : "Two brains. One builder."}
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tall Photo with film-frame / tartan edge and corner sticker */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative offset shadow block */}
              <div
                className={`absolute inset-0 translate-x-3 translate-y-3 rounded-lg ${
                  isY2K ? 'bg-[#EF3969]' : 'bg-[#16120F]'
                }`}
              />
              
              {/* Image Frame (Tartan pattern in Y2K) */}
              <div
                className={`relative p-3 border-4 rounded-lg overflow-hidden ${
                  isY2K
                    ? 'tartan-pattern border-[#E1C296]'
                    : 'bg-[#FFFDF6] border-[#16120F]'
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded ${
                    isY2K ? 'bg-[#000354] border-2 border-[#E1C296]' : 'bg-[#16120F]'
                  }`}
                >
                  <img
                    src="/assets/atif-about.webp"
                    alt="Atif Khan standing outdoors in traditional black embroidered kurta and white trousers against green garden foliage with confident relaxed posture"
                    width="480"
                    height="640"
                    className={`w-full h-auto object-cover hover:scale-102 transition-transform duration-500 ${
                      isY2K ? 'y2k-photo' : ''
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Film strip edge simulation */}
                  <div className="absolute top-0 bottom-0 left-0 w-3 bg-[#16120F]/80 flex flex-col justify-between py-2 items-center pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-2 rounded-xs opacity-75 ${
                          isY2K ? 'bg-[#EF3969]' : 'bg-[#FFFDF6]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Hand-drawn / Zine corner sticker */}
                <div
                  className={`absolute -top-3 -right-3 border-2 px-3 py-1 font-black text-xs rounded-md shadow-[3px_3px_0px_#000354] rotate-6 font-mono ${
                    isY2K
                      ? 'bg-[#EF3969] text-[#000354] border-[#E1C296]'
                      : 'bg-[#FFB703] text-[#16120F] border-[#16120F]'
                  }`}
                >
                  {isY2K ? '★ AUTHENTIC PHOTO' : 'Authentic photo'}
                </div>

                {/* Caption below photo */}
                <div
                  className={`mt-3 flex items-center justify-between text-xs font-mono px-1 ${
                    isY2K ? 'text-[#E6B886]' : 'text-[#16120F]/70'
                  }`}
                >
                  <span>Atif Khan</span>
                  <span>Bhopal, Madhya Pradesh</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Copy, Pull Quote, Currently Block, Facts Strip */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Pull Quote */}
            <div
              className={`p-6 border-l-6 rounded-r-lg border-y-2 border-r-2 ${
                isY2K
                  ? 'bg-[#000F5C] border-l-[#EF3969] border-[#E1C296] text-[#E1C296] shadow-[4px_4px_0px_#EF3969]'
                  : 'bg-[#0FB5AE]/15 border-l-[#0FB5AE] border-[#16120F] text-[#16120F] shadow-[4px_4px_0px_#16120F]'
              }`}
            >
              <blockquote className="text-fluid-h3 font-black leading-snug">
                "I'm a student who never picked a lane, and stopped feeling guilty about it."
              </blockquote>
            </div>

            {/* Prose narrative */}
            <div
              className={`text-fluid-body leading-relaxed flex flex-col gap-4 font-normal max-w-[65ch] ${
                isY2K ? 'text-[#E1C296]/90 font-mono text-sm sm:text-base' : 'text-[#16120F]/85'
              }`}
            >
              <p>
                I started with Python and Java, then fell into the web: HTML, CSS, Bootstrap, then React, Node and MongoDB. Somewhere along the way the AI bug bit me, and I began building things that see, read and decide.
              </p>
              <p>
                Off the keyboard I'm behind a camera or inside a story. I make cinematic video, design posters, review books and films, and write fiction. My heroes on the page are Dostoevsky, Kafka and Camus, and on screen I chase the look of cinematic vlogs and Netflix-style realism.
              </p>
              <p className={`font-bold ${isY2K ? 'text-[#EF3969]' : 'text-[#16120F]'}`}>
                {isY2K
                  ? "★ THIS PORTFOLIO IS BOTH HALVES OF ME, SIDE BY SIDE."
                  : "This portfolio is both halves of me, side by side."}
              </p>
            </div>

            {/* Quick-Facts Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {identity.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className={`p-3 border-2 rounded-md flex flex-col justify-between ${
                    isY2K
                      ? 'bg-[#000F5C] border-[#E1C296] shadow-[3px_3px_0px_#EF3969] text-[#E1C296]'
                      : 'bg-[#FFFDF6] border-[#16120F] shadow-[3px_3px_0px_#16120F] text-[#16120F]'
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider ${
                      isY2K ? 'text-[#E6B886]' : 'text-[#16120F]/60'
                    }`}
                  >
                    {fact.label}
                  </span>
                  <span className="text-xs sm:text-sm font-black mt-1 font-mono">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently Block (Live terminal feel) */}
            <div
              className={`p-5 rounded-lg border-2 ${
                isY2K
                  ? 'bg-[#000F5C] border-[#E1C296] text-[#E1C296] shadow-[6px_6px_0px_#EF3969]'
                  : 'bg-[#16120F] border-[#16120F] text-[#FFFDF6] shadow-[6px_6px_0px_#0FB5AE]'
              }`}
            >
              <div
                className={`flex items-center justify-between pb-3 mb-3 border-b ${
                  isY2K ? 'border-[#EF3969]/30' : 'border-[#FFFDF6]/20'
                }`}
              >
                <div
                  className={`flex items-center gap-2 text-xs font-mono font-bold ${
                    isY2K ? 'text-[#EF3969]' : 'text-[#0FB5AE]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full animate-ping ${
                      isY2K ? 'bg-[#EF3969]' : 'bg-[#0FB5AE]'
                    }`}
                  />
                  <span>CURRENTLY_DISPATCH</span>
                </div>
                <span
                  className={`text-[11px] font-mono ${
                    isY2K ? 'text-[#E6B886]' : 'text-[#FFFDF6]/50'
                  }`}
                >
                  Updated live
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className={isY2K ? "text-[#EF3969] block mb-0.5" : "text-[#FFB703] block mb-0.5"}>▸ LEARNING:</span>
                  <span className={isY2K ? "text-[#E1C296]" : "text-[#FFFDF6]/90"}>{identity.currently.learning}</span>
                </div>
                <div>
                  <span className={isY2K ? "text-[#E6B886] block mb-0.5" : "text-[#0FB5AE] block mb-0.5"}>▸ BUILDING:</span>
                  <span className={isY2K ? "text-[#E1C296]" : "text-[#FFFDF6]/90"}>{identity.currently.building}</span>
                </div>
                <div>
                  <span className={isY2K ? "text-[#EF3969] block mb-0.5" : "text-[#E5383B] block mb-0.5"}>▸ READING / WRITING:</span>
                  <span className={isY2K ? "text-[#E1C296]" : "text-[#FFFDF6]/90"}>{identity.currently.readingWriting}</span>
                </div>
                <div>
                  <span className={isY2K ? "text-[#E6B886] block mb-0.5" : "text-[#5B2EE0] block mb-0.5"}>▸ AIMING FOR:</span>
                  <span className={isY2K ? "text-[#E1C296]" : "text-[#FFFDF6]/90"}>{identity.currently.aimingFor}</span>
                </div>
              </div>
            </div>

            {/* Influences Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span
                className={`text-xs font-mono font-bold uppercase mr-1 ${
                  isY2K ? 'text-[#E6B886]' : 'text-[#16120F]/60'
                }`}
              >
                LITERARY ROOTS:
              </span>
              {identity.influences.map((author) => (
                <span
                  key={author}
                  className={`px-2.5 py-1 border text-xs font-bold rounded ${
                    isY2K
                      ? 'bg-[#000F5C] border-[#EF3969] text-[#E1C296] shadow-[2px_2px_0px_#EF3969]'
                      : 'bg-[#FFFDF6] border-[#16120F] text-[#16120F] shadow-[2px_2px_0px_#16120F]'
                  }`}
                >
                  {author}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

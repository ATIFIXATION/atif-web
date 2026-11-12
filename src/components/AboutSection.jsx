import React from 'react';
import { identity } from '../data/identity';
import { Sparkles, MapPin, GraduationCap, Briefcase, BookOpen, Film, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FFFDF6] border-b-4 border-[#16120F] relative overflow-hidden">
      
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-fluid-h2 font-black tracking-tight text-[#16120F]">
          Two brains. One builder.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tall Photo with film-frame / torn edge and corner sticker */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative offset shadow block */}
              <div className="absolute inset-0 bg-[#16120F] translate-x-3 translate-y-3 rounded-lg" />
              
              {/* Image Frame */}
              <div className="relative bg-[#FFFDF6] p-3 border-4 border-[#16120F] rounded-lg overflow-hidden">
                <div className="relative overflow-hidden rounded bg-[#16120F]">
                  <img
                    src="/assets/atif-about.webp"
                    alt="Atif Khan standing outdoors in traditional black embroidered kurta and white trousers against green garden foliage with confident relaxed posture"
                    width="480"
                    height="640"
                    className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Film strip edge simulation */}
                  <div className="absolute top-0 bottom-0 left-0 w-3 bg-[#16120F]/80 flex flex-col justify-between py-2 items-center pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <span key={i} className="w-1.5 h-2 bg-[#FFFDF6] rounded-xs opacity-75" />
                    ))}
                  </div>
                </div>

                {/* Hand-drawn corner sticker */}
                <div className="absolute -top-3 -right-3 bg-[#FFB703] text-[#16120F] border-2 border-[#16120F] px-3 py-1 font-black text-xs rounded-md shadow-[3px_3px_0px_#16120F] rotate-6">
                  Authentic photo
                </div>

                {/* Caption below photo */}
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#16120F]/70 px-1">
                  <span>Atif Khan</span>
                  <span>Bhopal, Madhya Pradesh</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Copy, Pull Quote, Currently Block, Facts Strip */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Pull Quote */}
            <div className="p-6 bg-[#0FB5AE]/15 border-l-6 border-[#0FB5AE] rounded-r-lg border-y-2 border-r-2 border-[#16120F] shadow-[4px_4px_0px_#16120F]">
              <blockquote className="text-fluid-h3 font-black text-[#16120F] leading-snug">
                "I'm a student who never picked a lane, and stopped feeling guilty about it."
              </blockquote>
            </div>

            {/* Prose narrative */}
            <div className="text-fluid-body text-[#16120F]/85 leading-relaxed flex flex-col gap-4 font-normal max-w-[65ch]">
              <p>
                I started with Python and Java, then fell into the web: HTML, CSS, Bootstrap, then React, Node and MongoDB. Somewhere along the way the AI bug bit me, and I began building things that see, read and decide.
              </p>
              <p>
                Off the keyboard I'm behind a camera or inside a story. I make cinematic video, design posters, review books and films, and write fiction. My heroes on the page are Dostoevsky, Kafka and Camus, and on screen I chase the look of cinematic vlogs and Netflix-style realism.
              </p>
              <p className="font-bold text-[#16120F]">
                This portfolio is both halves of me, side by side.
              </p>
            </div>

            {/* Quick-Facts Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {identity.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#FFFDF6] border-2 border-[#16120F] rounded-md shadow-[3px_3px_0px_#16120F] flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#16120F]/60">
                    {fact.label}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#16120F] mt-1">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently Block (Live terminal feel) */}
            <div className="p-5 bg-[#16120F] text-[#FFFDF6] rounded-lg border-2 border-[#16120F] shadow-[6px_6px_0px_#0FB5AE]">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#FFFDF6]/20">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0FB5AE]">
                  <span className="w-2 h-2 rounded-full bg-[#0FB5AE] animate-ping" />
                  <span>CURRENTLY_DISPATCH</span>
                </div>
                <span className="text-[11px] font-mono text-[#FFFDF6]/50">Updated live</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[#FFB703] block mb-0.5">▸ LEARNING:</span>
                  <span className="text-[#FFFDF6]/90">{identity.currently.learning}</span>
                </div>
                <div>
                  <span className="text-[#0FB5AE] block mb-0.5">▸ BUILDING:</span>
                  <span className="text-[#FFFDF6]/90">{identity.currently.building}</span>
                </div>
                <div>
                  <span className="text-[#E5383B] block mb-0.5">▸ READING / WRITING:</span>
                  <span className="text-[#FFFDF6]/90">{identity.currently.readingWriting}</span>
                </div>
                <div>
                  <span className="text-[#5B2EE0] block mb-0.5">▸ AIMING FOR:</span>
                  <span className="text-[#FFFDF6]/90">{identity.currently.aimingFor}</span>
                </div>
              </div>
            </div>

            {/* Influences Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono font-bold uppercase text-[#16120F]/60 mr-1">
                LITERARY ROOTS:
              </span>
              {identity.influences.map((author) => (
                <span
                  key={author}
                  className="px-2.5 py-1 bg-[#FFFDF6] border border-[#16120F] rounded text-xs font-bold text-[#16120F] shadow-[2px_2px_0px_#16120F]"
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


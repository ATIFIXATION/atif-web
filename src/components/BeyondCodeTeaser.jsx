import React from 'react';
import { Film, BookOpen, Camera, Sparkles, ArrowRight, Radio } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function BeyondCodeTeaser({ onSwitchToCreative }) {
  const { theme } = useTheme();
  const isY2K = theme === 'y2k';

  const cards = [
    {
      id: 'screenplay',
      tag: 'SCREENPLAY',
      title: 'The Frequency of the Dead',
      desc: 'Supernatural mystery set in Vethara, co-written with Muhammad Rehaan.',
      icon: Radio,
      accentColor: isY2K ? '#EF3969' : '#5B2EE0',
      action: 'Read Treatment'
    },
    {
      id: 'cinema',
      tag: 'CINEMATOGRAPHY',
      title: 'The Dostoevsky Files',
      desc: 'FrameByFrame video series analyzing Crime and Punishment with 35mm pacing.',
      icon: Film,
      accentColor: isY2K ? '#E6B886' : '#FFB703',
      action: 'Watch Episode'
    },
    {
      id: 'library',
      tag: 'BOOK SUMMARIES',
      title: 'The Library',
      desc: 'Deep philosophical and psychology book summaries on an embedded shelf.',
      icon: BookOpen,
      accentColor: isY2K ? '#EF3969' : '#0FB5AE',
      action: 'Open Shelf'
    },
    {
      id: 'photography',
      tag: 'PHOTO ESSAY',
      title: 'Behind the Frames',
      desc: 'Atmospheric stills, film lighting experiments, and candid director portraits.',
      icon: Camera,
      accentColor: isY2K ? '#E1C296' : '#E5383B',
      action: 'View Gallery'
    }
  ];

  return (
    <section
      id="beyond-code"
      className={`py-16 sm:py-20 border-b-4 transition-colors duration-300 relative overflow-hidden ${
        isY2K
          ? 'bg-[#000F5C] border-[#EF3969] text-[#E1C296]'
          : 'bg-[#FFFDF6] border-[#16120F] text-[#16120F]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-8 border-b-2 border-current/15">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-3 border ${
              isY2K
                ? 'bg-[#EF3969]/20 text-[#EF3969] border-[#EF3969]/40'
                : 'bg-[#FFB703]/20 text-[#16120F] border-[#16120F]'
            }`}>
              <Sparkles size={12} className={isY2K ? 'text-[#EF3969]' : 'text-[#FFB703]'} />
              <span>BEYOND THE TERMINAL</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-engineer">
              Beyond code. Inside stories.
            </h2>
          </div>

          <button
            onClick={onSwitchToCreative}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono font-bold text-xs sm:text-sm transition-all shadow-[3px_3px_0px_#16120F] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 ${
              isY2K
                ? 'bg-[#EF3969] text-[#000354] border-2 border-[#E1C296] shadow-[3px_3px_0px_#E1C296] hover:bg-[#E1C296]'
                : 'bg-[#5B2EE0] text-[#FFFDF6] border-2 border-[#16120F] hover:bg-[#16120F]'
            }`}
          >
            <span>See the creative side</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 4 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                onClick={onSwitchToCreative}
                className={`group cursor-pointer p-5 rounded-lg border-2 transition-all flex flex-col justify-between hover:-translate-y-1 ${
                  isY2K
                    ? 'bg-[#000354] border-[#E1C296] text-[#E1C296] shadow-[4px_4px_0px_#EF3969] hover:border-[#EF3969]'
                    : 'bg-[#FFFDF6] border-[#16120F] text-[#16120F] shadow-[4px_4px_0px_#16120F] hover:shadow-[6px_6px_0px_#16120F]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      style={{ color: c.accentColor }}
                      className="text-[10px] font-mono font-black tracking-wider uppercase"
                    >
                      ★ {c.tag}
                    </span>
                    <Icon size={18} style={{ color: c.accentColor }} />
                  </div>

                  <h3 className="text-base font-black tracking-tight mb-2 font-engineer group-hover:underline">
                    {c.title}
                  </h3>

                  <p className="text-xs font-mono opacity-80 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-mono font-bold">
                  <span className="opacity-70 group-hover:opacity-100">{c.action}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { boardStickers } from '../data/stickers';
import { Sparkles, Move, RotateCcw } from 'lucide-react';

export default function StickerBoard() {
  const boardRef = useRef(null);
  const [resetKey, setResetKey] = useState(0);

  return (
    <section id="stickers" className="py-24 bg-[#FFB703] border-y-4 border-[#16120F] relative overflow-hidden select-none">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#16120F 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-fluid-h2 font-black tracking-tight text-[#16120F]">
              The sticker board
            </h2>
            <p className="text-fluid-body text-[#16120F]/85 font-medium max-w-[65ch] mt-2">
              Pull, toss, and rearrange Atif's brain fragments. Every sticker settles with light spring physics.
            </p>
          </div>

          {/* Reset button */}
          <button
            onClick={() => setResetKey(k => k + 1)}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFDF6] text-[#16120F] border-2 border-[#16120F] rounded-md text-xs font-bold shadow-[2px_2px_0px_#16120F] hover:bg-[#16120F] hover:text-[#FFFDF6] transition-colors"
          >
            <RotateCcw size={13} />
            <span>Reset positions</span>
          </button>
        </div>

        {/* The Board Container */}
        <div
          ref={boardRef}
          key={resetKey}
          className="relative w-full h-[540px] sm:h-[580px] bg-[#FFFDF6] rounded-xl border-4 border-[#16120F] shadow-[10px_10px_0px_#16120F] p-4 overflow-hidden"
        >
          {/* Subtle notebook tab on edge */}
          <div className="absolute top-8 -right-1 bg-[#0FB5AE] border-2 border-[#16120F] text-[#16120F] px-3 py-1 font-mono font-black text-xs uppercase -rotate-90 origin-right rounded-t shadow-[2px_-2px_0px_#16120F]">
            STICKER_LOG
          </div>

          <div className="absolute top-4 left-4 text-xs font-mono text-[#16120F]/50 flex items-center gap-2">
            <Move size={14} />
            <span>touch & drag or use arrow keys when focused</span>
          </div>

          {/* Stickers */}
          {boardStickers.map((stk, idx) => {
            if (stk.isAvatar) {
              return (
                <motion.div
                  key={stk.id}
                  drag
                  dragConstraints={boardRef}
                  dragElastic={0.15}
                  whileDrag={{ scale: 1.15, rotate: 0, zIndex: 50 }}
                  whileHover={{ scale: 1.08 }}
                  tabIndex={0}
                  aria-label="Atif Khan photo sticker. That's me!"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx, type: 'spring' }}
                  style={{
                    left: stk.x,
                    top: stk.y,
                    transform: `rotate(${stk.rotate}deg)`
                  }}
                  className="absolute cursor-grab active:cursor-grabbing z-20 flex flex-col items-center group focus:outline-none focus:ring-4 focus:ring-[#5B2EE0]"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-[#FFFDF6] shadow-[4px_4px_0px_#16120F] overflow-hidden bg-[#16120F]">
                    <img
                      src={stk.image}
                      alt="Atif's face circle sticker"
                      width="112"
                      height="112"
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                  <span className="mt-1 px-2 py-0.5 bg-[#5B2EE0] text-[#FFFDF6] border-2 border-[#16120F] text-[10px] font-black uppercase rounded shadow-[2px_2px_0px_#16120F] rotate-3 group-hover:rotate-0 transition-transform">
                    {stk.label}
                  </span>
                </motion.div>
              );
            }

            if (stk.isHint) {
              return (
                <motion.div
                  key={stk.id}
                  drag
                  dragConstraints={boardRef}
                  dragElastic={0.15}
                  whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50 }}
                  whileHover={{ scale: 1.05 }}
                  tabIndex={0}
                  aria-label="Drag me sticker indicator"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx, type: 'spring' }}
                  style={{
                    left: stk.x,
                    top: stk.y,
                    transform: `rotate(${stk.rotate}deg)`,
                    backgroundColor: stk.bg,
                    color: stk.color
                  }}
                  className="absolute cursor-grab active:cursor-grabbing z-30 px-4 py-2.5 rounded-lg border-3 border-[#16120F] shadow-[5px_5px_0px_#16120F] focus:outline-none focus:ring-4 focus:ring-[#0FB5AE]"
                >
                  <div className="flex items-center gap-1.5 font-black text-sm uppercase tracking-wide">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5383B] animate-ping" />
                    <span>{stk.text}</span>
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-center mt-0.5 bg-[#16120F] text-[#FFFDF6] px-1 rounded">
                    {stk.badge}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={stk.id}
                drag
                dragConstraints={boardRef}
                dragElastic={0.15}
                whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50 }}
                whileHover={{ scale: 1.05 }}
                tabIndex={0}
                aria-label={`Sticker: ${stk.text}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * idx, type: 'spring' }}
                style={{
                  left: stk.x,
                  top: stk.y,
                  transform: `rotate(${stk.rotate}deg)`,
                  backgroundColor: stk.bg,
                  color: stk.color
                }}
                className="absolute cursor-grab active:cursor-grabbing z-10 px-3.5 py-2 rounded-md border-2 border-[#16120F] shadow-[4px_4px_0px_#16120F] text-left focus:outline-none focus:ring-4 focus:ring-[#16120F]"
              >
                <div className="text-xs sm:text-sm font-black uppercase tracking-tight">
                  {stk.text}
                </div>
                {stk.sub && (
                  <div className="text-[10px] font-mono opacity-80 mt-0.5">
                    {stk.sub}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


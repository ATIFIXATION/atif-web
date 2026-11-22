import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeStarTransition() {
  const { isTransitioning, transitionOrigin } = useTheme();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <div
          className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden flex items-center justify-center"
          aria-hidden="true"
        >
          {/* Expanding & Shrinking Hot-Pink Star */}
          <motion.div
            initial={{ scale: 0, rotate: -45, opacity: 1 }}
            animate={{
              scale: [0, 38, 38, 0],
              rotate: [-45, 15, 15, 75],
              opacity: [1, 1, 1, 0.95]
            }}
            transition={{
              duration: 0.95,
              times: [0, 0.45, 0.55, 1],
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{
              position: 'absolute',
              left: `${transitionOrigin.x}%`,
              top: `${transitionOrigin.y}%`,
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: '120px',
              backgroundColor: '#EF3969',
              boxShadow: '0 0 60px rgba(239, 57, 105, 0.8)'
            }}
            className="star-clip-window"
          />

          {/* Center Sound Wave / Glitch Flash Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.8] }}
            transition={{ duration: 0.95, times: [0, 0.5, 1] }}
            className="z-10 px-4 py-2 bg-[#000354] border-2 border-[#E1C296] text-[#E1C296] text-xs font-mono font-black uppercase tracking-widest shadow-[4px_4px_0px_#EF3969]"
          >
            ★ THEME SHIFT ★
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


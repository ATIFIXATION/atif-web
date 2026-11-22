import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Pure CSS Tartan Frame around the entire viewport in Theme 2 (Y2K Tartan Zine).
 * Desktop: 32px border; Mobile: 16px border.
 * Built with layered repeating-linear-gradients, zero layout shift, and no horizontal scroll.
 */
export default function TartanViewportFrame() {
  const { theme } = useTheme();

  if (theme !== 'y2k') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9990] select-none" aria-hidden="true">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-4 sm:h-8 tartan-pattern border-b-2 border-[#E1C296]" />
      
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-8 tartan-pattern border-t-2 border-[#E1C296]" />
      
      {/* Left Border */}
      <div className="absolute top-0 bottom-0 left-0 w-4 sm:w-8 tartan-pattern border-r-2 border-[#E1C296]" />
      
      {/* Right Border */}
      <div className="absolute top-0 bottom-0 right-0 w-4 sm:w-8 tartan-pattern border-l-2 border-[#E1C296]" />

      {/* 4 Corner Pink Star Badges */}
      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 text-xs sm:text-base text-[#EF3969] drop-shadow-[1px_1px_0px_#000354]">
        ★
      </div>
      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 text-xs sm:text-base text-[#EF3969] drop-shadow-[1px_1px_0px_#000354]">
        ★
      </div>
      <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 text-xs sm:text-base text-[#EF3969] drop-shadow-[1px_1px_0px_#000354]">
        ★
      </div>
      <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-xs sm:text-base text-[#EF3969] drop-shadow-[1px_1px_0px_#000354]">
        ★
      </div>
    </div>
  );
}


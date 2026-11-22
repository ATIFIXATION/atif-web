import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, EyeOff, Sparkles, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PhotoLightbox({ photo, photos, onClose, onSelect }) {
  const [showOriginal, setShowOriginal] = useState(false);

  // Keyboard navigation: Esc, Left, Right
  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const idx = photos.findIndex((p) => p.id === photo.id);
        const prev = photos[(idx - 1 + photos.length) % photos.length];
        onSelect(prev);
      } else if (e.key === 'ArrowRight') {
        const idx = photos.findIndex((p) => p.id === photo.id);
        const next = photos[(idx + 1) % photos.length];
        onSelect(next);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos, onClose, onSelect]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[99999] bg-[#000354]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
        role="dialog"
        aria-modal="true"
        aria-label={photo.title}
      >
        {/* Tartan accent border overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 tartan-pattern" />

        {/* Top Controls Bar */}
        <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-auto">
          {/* Photo Counter & Tag */}
          <div className="flex items-center gap-2">
            <span className="y2k-tape-label text-xs">
              ★ {currentIndex + 1} / {photos.length}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 bg-[#EF3969] text-[#000354] font-mono text-xs font-black uppercase border border-[#E1C296]">
              {photo.tag}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Show Original / Duotone Toggle */}
            <button
              onClick={() => setShowOriginal(!showOriginal)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#000F5C] text-[#E1C296] border border-[#E1C296] font-mono text-xs font-bold rounded shadow-[2px_2px_0px_#EF3969] hover:bg-[#EF3969] hover:text-[#000354] transition-all"
              title="Toggle Y2K Duotone Filter"
            >
              {showOriginal ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{showOriginal ? 'Duotone' : 'Raw Color'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded bg-[#EF3969] text-[#000354] border-2 border-[#E1C296] flex items-center justify-center shadow-[3px_3px_0px_#000354] hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            const prev = photos[(currentIndex - 1 + photos.length) % photos.length];
            onSelect(prev);
          }}
          className="absolute left-2 sm:left-6 z-40 w-12 h-12 rounded bg-[#000F5C] text-[#E1C296] border-2 border-[#E1C296] flex items-center justify-center shadow-[3px_3px_0px_#EF3969] hover:scale-110 active:scale-95 transition-all focus:outline-none"
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => {
            const next = photos[(currentIndex + 1) % photos.length];
            onSelect(next);
          }}
          className="absolute right-2 sm:right-6 z-40 w-12 h-12 rounded bg-[#000F5C] text-[#E1C296] border-2 border-[#E1C296] flex items-center justify-center shadow-[3px_3px_0px_#EF3969] hover:scale-110 active:scale-95 transition-all focus:outline-none"
          aria-label="Next photo"
        >
          <ChevronRight size={24} />
        </button>

        {/* Main Photo Card */}
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative max-w-4xl max-h-[85vh] bg-[#000F5C] border-4 border-[#E1C296] rounded-lg p-3 sm:p-4 shadow-[12px_12px_0px_#EF3969] flex flex-col items-center overflow-hidden z-20 pointer-events-auto"
        >
          {/* Tartan border matte */}
          <div className="absolute inset-0 tartan-pattern opacity-30 pointer-events-none" />

          {/* Image */}
          <div className="relative max-h-[65vh] w-auto overflow-hidden rounded border-2 border-[#E1C296] bg-[#000354]">
            <img
              src={photo.src}
              alt={photo.alt}
              className={`max-h-[65vh] w-auto object-contain transition-all duration-300 ${
                showOriginal ? 'no-y2k-filter' : 'y2k-photo'
              }`}
            />
          </div>

          {/* Metadata Footer */}
          <div className="w-full mt-3 pt-3 border-t border-[#E1C296]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-10 text-left">
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#E1C296] font-engineer">
                {photo.title}
              </h3>
              <p className="text-xs font-mono text-[#E6B886]">
                {photo.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-[#E1C296]/70">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-[#EF3969]" />
                {photo.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar size={12} className="text-[#EF3969]" />
                {photo.date}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


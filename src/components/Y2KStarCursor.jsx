import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Desktop Star Cursor Trail for Theme 2 (Y2K Tartan Zine).
 * Small pink star with trailing fade particles.
 * Disabled on touch screens or under prefers-reduced-motion.
 */
export default function Y2KStarCursor() {
  const { theme } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    setIsPointerFine(media.matches);
    const handler = (e) => setIsPointerFine(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (theme !== 'y2k' || !isPointerFine) return;

    let trailId = 0;
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Add trail point every few moves
      if (Math.random() > 0.4) {
        trailId++;
        const newPoint = { id: trailId, x: e.clientX, y: e.clientY };
        setTrail((prev) => [...prev.slice(-4), newPoint]);

        setTimeout(() => {
          setTrail((prev) => prev.filter((p) => p.id !== newPoint.id));
        }, 350);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [theme, isPointerFine]);

  if (theme !== 'y2k' || !isPointerFine) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99998] overflow-hidden" aria-hidden="true">
      {/* Trailing fading stars */}
      {trail.map((t, idx) => (
        <span
          key={t.id}
          style={{
            position: 'absolute',
            left: `${t.x}px`,
            top: `${t.y}px`,
            transform: `translate(-50%, -50%) scale(${0.4 + idx * 0.15}) rotate(${idx * 25}deg)`,
            opacity: 0.2 + idx * 0.2,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            color: '#EF3969'
          }}
          className="text-xs select-none"
        >
          ★
        </span>
      ))}

      {/* Main Cursor Star */}
      <span
        style={{
          position: 'absolute',
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
          color: '#EF3969',
          filter: 'drop-shadow(0 0 4px #000354)'
        }}
        className="text-sm font-black select-none"
      >
        ★
      </span>
    </div>
  );
}


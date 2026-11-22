import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext({
  theme: 'classic',
  toggleTheme: () => {},
  isTransitioning: false,
  transitionOrigin: { x: 50, y: 50 }
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('atif-portfolio-theme');
      return saved === 'y2k' ? 'y2k' : 'classic';
    } catch {
      return 'classic';
    }
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({ x: 50, y: 50 });

  // Keep DOM attribute & meta tag in sync
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('atif-portfolio-theme', theme);
      const meta = document.getElementById('meta-theme-color');
      if (meta) {
        meta.setAttribute('content', theme === 'y2k' ? '#000354' : '#FFFDF6');
      }
    } catch (e) {
      console.warn('Theme storage unavailable:', e);
    }
  }, [theme]);

  const toggleTheme = useCallback((event) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nextTheme = theme === 'classic' ? 'y2k' : 'classic';

    if (prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    // Calculate click coordinates in percentage of viewport for star expansion
    let originX = 50;
    let originY = 50;
    if (event?.clientX !== undefined && event?.clientY !== undefined) {
      originX = (event.clientX / window.innerWidth) * 100;
      originY = (event.clientY / window.innerHeight) * 100;
    }

    setTransitionOrigin({ x: originX, y: originY });
    setIsTransitioning(true);

    // At halfway (~450ms), the star covers 100% of the screen: swap the tokens underneath!
    setTimeout(() => {
      setTheme(nextTheme);
    }, 450);

    // After ~950ms, the star shrinks away to reveal the new theme
    setTimeout(() => {
      setIsTransitioning(false);
    }, 950);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning, transitionOrigin }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

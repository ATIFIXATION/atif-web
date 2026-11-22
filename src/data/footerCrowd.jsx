import React from 'react';

/**
 * Stage characters, literary caricatures, tech elements, and world props for Atif Khan's portfolio stage footer.
 * Drawn in uniform hand-inked line-art style (stroke: #16120F, fill: #FFFDF6, strokeWidth: 2-2.5px).
 * Exactly one thematic accent color per cluster:
 * - Lagoon (#0FB5AE): Tech & Code
 * - Ultraviolet (#5B2EE0): Vethara & Supernatural
 * - Saffron (#FFB703): Bhopal & @atifrecommends
 * - Reel Red (#E5383B): Film & REC
 */

export const CROWD_ELEMENTS = [
  // ==========================================
  // BACKGROUND LAYER (Depth 1 - Ghosts & Skylines)
  // ==========================================
  {
    id: 'bhopal-skyline',
    name: 'Taj-ul-Masajid Silhouette',
    cluster: 'bhopal',
    depth: 1,
    baseX: 18,
    baseY: 82,
    scale: 1.1,
    mobile: true,
    render: () => (
      <svg viewBox="0 0 200 90" className="w-48 sm:w-60 h-auto overflow-visible select-none opacity-40 hover:opacity-70 transition-opacity">
        {/* Minarets and central domes */}
        <g stroke="#16120F" strokeWidth="1.75" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
          {/* Left Minaret */}
          <rect x="20" y="10" width="10" height="70" />
          <path d="M20 10 L25 2 L30 10 Z" />
          <line x1="25" y1="2" x2="25" y2="0" />
          <line x1="20" y1="28" x2="30" y2="28" />
          <line x1="20" y1="50" x2="30" y2="50" />
          
          {/* Main Triple Domes */}
          <path d="M42 80 C42 45, 68 45, 68 80" />
          <path d="M55 45 L55 38" />
          {/* Central Grand Dome */}
          <path d="M72 80 C72 32, 118 32, 118 80" />
          <path d="M95 32 C95 24, 95 24, 95 20 L95 16" />
          <circle cx="95" cy="18" r="2" fill="#FFB703" stroke="#16120F" />
          {/* Right Dome */}
          <path d="M122 80 C122 45, 148 45, 148 80" />
          <path d="M135 45 L135 38" />
          
          {/* Right Minaret */}
          <rect x="160" y="10" width="10" height="70" />
          <path d="M160 10 L165 2 L170 10 Z" />
          <line x1="165" y1="2" x2="165" y2="0" />
          <line x1="160" y1="28" x2="170" y2="28" />
          <line x1="160" y1="50" x2="170" y2="50" />

          {/* Arched facade base */}
          <path d="M30 80 L160 80" />
          <path d="M85 80 C85 68, 105 68, 105 80" fill="#16120F" fillOpacity="0.08" />
          <path d="M50 80 C50 72, 60 72, 60 80" />
          <path d="M130 80 C130 72, 140 72, 140 80" />
        </g>
        {/* Subtle Upper Lake water ripples beneath */}
        <g stroke="#0FB5AE" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <path d="M10 85 C25 83, 40 87, 60 85" />
          <path d="M75 87 C95 85, 120 89, 145 86" />
          <path d="M155 84 C175 86, 185 83, 195 85" />
        </g>
      </svg>
    )
  },

  {
    id: 'vethara-skyline',
    name: 'Vethara Gothic Spire',
    cluster: 'vethara',
    depth: 1,
    baseX: 82,
    baseY: 82,
    scale: 1.05,
    mobile: false,
    render: () => (
      <svg viewBox="0 0 160 100" className="w-40 sm:w-52 h-auto overflow-visible select-none opacity-35 hover:opacity-65 transition-opacity">
        <g stroke="#16120F" strokeWidth="1.75" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
          {/* Clock tower / Spire of Vethara */}
          <path d="M30 100 L30 45 L50 10 L70 45 L70 100 Z" />
          <line x1="50" y1="10" x2="50" y2="0" />
          <circle cx="50" cy="5" r="2" fill="#5B2EE0" stroke="#16120F" />
          {/* Gothic Clock face */}
          <circle cx="50" cy="55" r="10" fill="#FFFDF6" />
          <line x1="50" y1="55" x2="50" y2="49" />
          <line x1="50" y1="55" x2="55" y2="55" />
          
          {/* Eerie tenements & rooftops */}
          <path d="M70 60 L95 48 L120 60 L120 100 L70 100" />
          <path d="M95 48 L95 38 L103 38 L103 52" />
          <rect x="80" y="68" width="8" height="12" rx="3" fill="#16120F" fillOpacity="0.1" />
          <rect x="102" y="68" width="8" height="12" rx="3" fill="#16120F" fillOpacity="0.1" />
          {/* Chimney smoke curl */}
          <path d="M99 38 C97 30, 105 24, 100 18 C95 12, 102 6, 98 2" stroke="#5B2EE0" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.7" />
        </g>
      </svg>
    )
  },

  {
    id: 'vethara-ghost',
    name: 'Translucent Vethara Ghost',
    cluster: 'vethara',
    depth: 1,
    baseX: 74,
    baseY: 42,
    scale: 0.9,
    mobile: true,
    interactive: true,
    action: 'poof',
    render: ({ isTriggered }) => (
      <div className={`transition-all duration-500 cursor-pointer ${isTriggered ? 'scale-0 opacity-0 -translate-y-8' : 'scale-100 opacity-75 hover:opacity-100'}`}>
        <svg viewBox="0 0 70 85" className="w-14 sm:w-16 h-auto overflow-visible select-none animate-float-slow">
          <g stroke="#16120F" strokeWidth="2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            {/* Sheet ghost body */}
            <path d="M15 45 C15 15, 55 15, 55 45 C55 65, 58 75, 52 75 C47 75, 45 68, 40 73 C35 78, 32 68, 27 73 C22 78, 20 69, 15 75 C10 75, 15 65, 15 45 Z" fill="#FFFDF6" fillOpacity="0.85" />
            {/* Eyes - mystical and curious */}
            <circle cx="28" cy="38" r="3.5" fill="#5B2EE0" />
            <circle cx="42" cy="38" r="3.5" fill="#5B2EE0" />
            <circle cx="29" cy="37" r="1" fill="#FFFDF6" />
            <circle cx="43" cy="37" r="1" fill="#FFFDF6" />
            {/* Little ghost hand waving */}
            <path d="M15 50 C8 48, 6 42, 10 40 C14 38, 16 44, 16 48" />
            {/* Subtle supernatural aura rings */}
            <ellipse cx="35" cy="80" rx="16" ry="4" stroke="#5B2EE0" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
          </g>
        </svg>
      </div>
    )
  },

  // ==========================================
  // MID LAYER (Depth 2 - Literary Figures & Tech Props)
  // ==========================================
  {
    id: 'marcus-aurelius',
    name: 'Marcus Aurelius Bust',
    cluster: 'literature',
    depth: 2,
    baseX: 8,
    baseY: 82,
    scale: 0.95,
    mobile: false,
    render: ({ cursorDeltaX }) => {
      const tilt = Math.max(-6, Math.min(6, (cursorDeltaX || 0) * 0.05));
      return (
        <svg viewBox="0 0 90 120" className="w-20 sm:w-24 h-auto overflow-visible select-none group cursor-help">
          <title>Marcus Aurelius — Meditations & Stoicism</title>
          {/* Classical Pedestal */}
          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="25" y="85" width="40" height="25" rx="2" />
            <line x1="20" y1="110" x2="70" y2="110" strokeWidth="3" />
            <line x1="22" y1="85" x2="68" y2="85" />
            <text x="45" y="102" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle" fill="#16120F" stroke="none" fontWeight="bold">STOIC</text>
            
            {/* Head & Laurel Wreath (rotates slightly with cursor) */}
            <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '45px 70px', transition: 'transform 0.15s ease-out' }}>
              {/* Shoulders / Toga drape */}
              <path d="M22 85 C22 72, 35 70, 45 70 C55 70, 68 72, 68 85 Z" fill="#FFFDF6" />
              <path d="M30 75 Q45 82 60 75" fill="none" strokeWidth="1.75" />
              {/* Neck */}
              <rect x="39" y="58" width="12" height="14" />
              {/* Head contour */}
              <path d="M32 40 C32 25, 58 25, 58 40 C58 55, 52 62, 45 62 C38 62, 32 55, 32 40 Z" />
              {/* Curly Roman hair & beard */}
              <path d="M31 35 C28 32, 29 22, 40 20 C48 18, 59 22, 59 32 C61 38, 59 44, 57 46" fill="none" strokeWidth="2.2" />
              <path d="M35 48 C35 58, 40 64, 45 64 C50 64, 55 58, 55 48" fill="#16120F" fillOpacity="0.12" strokeWidth="2" />
              {/* Laurel Wreath in Saffron */}
              <path d="M30 30 C35 24, 45 22, 60 28" fill="none" stroke="#FFB703" strokeWidth="2.5" />
              <circle cx="34" cy="27" r="2.5" fill="#FFB703" stroke="#16120F" strokeWidth="1.5" />
              <circle cx="44" cy="23" r="2.5" fill="#FFB703" stroke="#16120F" strokeWidth="1.5" />
              <circle cx="55" cy="25" r="2.5" fill="#FFB703" stroke="#16120F" strokeWidth="1.5" />
              {/* Facial features */}
              <line x1="39" y1="38" x2="43" y2="38" strokeWidth="2" />
              <line x1="47" y1="38" x2="51" y2="38" strokeWidth="2" />
              <path d="M45 38 L45 46 L43 47" strokeWidth="1.5" />
              <path d="M41 52 Q45 54 49 52" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      );
    }
  },

  {
    id: 'dostoevsky',
    name: 'Fyodor Dostoevsky',
    cluster: 'literature',
    depth: 2,
    baseX: 25,
    baseY: 82,
    scale: 1.0,
    mobile: true,
    render: ({ cursorDeltaX }) => {
      const tilt = Math.max(-8, Math.min(8, (cursorDeltaX || 0) * 0.06));
      return (
        <svg viewBox="0 0 100 135" className="w-24 sm:w-28 h-auto overflow-visible select-none group cursor-pointer">
          <title>Fyodor Dostoevsky — Crime and Punishment</title>
          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            {/* Coat & body */}
            <path d="M25 130 L28 75 C28 62, 72 62, 72 75 L75 130 Z" fill="#16120F" />
            {/* White collar popping */}
            <polygon points="45,72 40,82 48,80" fill="#FFFDF6" stroke="#16120F" strokeWidth="1.5" />
            <polygon points="55,72 60,82 52,80" fill="#FFFDF6" stroke="#16120F" strokeWidth="1.5" />
            <line x1="50" y1="80" x2="50" y2="125" stroke="#FFFDF6" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Book held in hand */}
            <g transform="translate(62, 90) rotate(12)">
              <rect x="0" y="0" width="18" height="26" rx="2" fill="#5B2EE0" stroke="#16120F" strokeWidth="2" />
              <line x1="4" y1="0" x2="4" y2="26" stroke="#FFFDF6" strokeWidth="1.5" />
              <line x1="8" y1="8" x2="14" y2="8" stroke="#FFFDF6" strokeWidth="1.5" />
            </g>

            {/* Head group (tilts towards cursor) */}
            <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '50px 65px', transition: 'transform 0.12s ease-out' }}>
              {/* Intense forehead & high hairline */}
              <path d="M35 48 C34 25, 66 25, 65 48 C65 60, 58 68, 50 68 C42 68, 35 60, 35 48 Z" fill="#FFFDF6" />
              {/* Receding hair line */}
              <path d="M35 38 C32 30, 38 22, 50 22 C62 22, 68 30, 65 38 C62 32, 58 30, 50 30 C42 30, 38 32, 35 38 Z" fill="#16120F" />
              {/* Iconic Russian bushy beard */}
              <path d="M34 46 C32 62, 38 78, 50 78 C62 78, 68 62, 66 46 C60 52, 54 54, 50 54 C46 54, 40 52, 34 46 Z" fill="#16120F" />
              {/* Deep, piercing eyes under dark brow */}
              <path d="M40 38 L47 40" strokeWidth="2.5" />
              <path d="M60 38 L53 40" strokeWidth="2.5" />
              <circle cx="43" cy="42" r="1.8" fill="#16120F" />
              <circle cx="57" cy="42" r="1.8" fill="#16120F" />
              {/* Stern nose & furrowed brow */}
              <path d="M50 37 L50 48 L48 49" strokeWidth="1.75" />
              <line x1="48" y1="34" x2="52" y2="34" strokeWidth="1.2" />
            </g>
          </g>
        </svg>
      );
    }
  },

  {
    id: 'urdu-calligraphy',
    name: 'Urdu Script Calligraphy Banner',
    cluster: 'literature',
    depth: 2,
    baseX: 36,
    baseY: 48,
    scale: 0.9,
    mobile: false,
    render: () => (
      <svg viewBox="0 0 110 50" className="w-24 sm:w-28 h-auto overflow-visible select-none opacity-85 hover:opacity-100 transition-opacity">
        <g stroke="#16120F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Stylized Urdu calligraphy flourish: "ادب و جنون" (Literature & Obsession) */}
          <path d="M85 15 C75 10, 60 12, 52 20 C45 28, 50 38, 62 35 C70 32, 75 22, 60 22 C45 22, 30 35, 18 35 C10 35, 12 25, 20 22 C30 18, 40 18, 48 24" strokeWidth="2.5" />
          <line x1="88" y1="8" x2="88" y2="22" strokeWidth="2.5" />
          {/* Nuqtas (calligraphic dots) in Saffron */}
          <polygon points="68,14 71,11 74,14 71,17" fill="#FFB703" stroke="#16120F" strokeWidth="1.2" />
          <polygon points="26,38 29,35 32,38 29,41" fill="#FFB703" stroke="#16120F" strokeWidth="1.2" />
          <polygon points="33,38 36,35 39,38 36,41" fill="#FFB703" stroke="#16120F" strokeWidth="1.2" />
        </g>
      </svg>
    )
  },

  {
    id: 'vintage-radio',
    name: 'The Frequency Vintage Radio',
    cluster: 'vethara',
    depth: 2,
    baseX: 38,
    baseY: 82,
    scale: 1.0,
    mobile: true,
    interactive: true,
    action: 'spike',
    render: ({ isTriggered }) => (
      <div className="cursor-pointer group">
        <svg viewBox="0 0 100 80" className="w-20 sm:w-24 h-auto overflow-visible select-none">
          <title>The Frequency of the Dead — Click to tune frequency</title>
          {/* Animated Pulsing Waveform above the radio */}
          <g className={`transition-all duration-300 ${isTriggered ? 'stroke-[#FFB703] scale-125' : 'stroke-[#5B2EE0]'}`}>
            <path
              d={isTriggered
                ? "M10 12 Q20 -15, 30 20 T50 -20 T70 25 T90 12"
                : "M15 15 Q25 5, 35 15 T55 15 T75 15 T85 15"}
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-pulse"
            />
          </g>

          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            {/* Telescopic Antenna */}
            <line x1="25" y1="30" x2="10" y2="5" strokeWidth="2.5" />
            <circle cx="10" cy="5" r="3" fill="#5B2EE0" />

            {/* Radio Wooden Chassis */}
            <rect x="15" y="30" width="70" height="48" rx="6" fill="#FFFDF6" />
            <rect x="20" y="35" width="36" height="38" rx="3" fill="#16120F" fillOpacity="0.05" />

            {/* Speaker Grille lines */}
            <line x1="25" y1="42" x2="51" y2="42" strokeWidth="1.8" />
            <line x1="25" y1="48" x2="51" y2="48" strokeWidth="1.8" />
            <line x1="25" y1="54" x2="51" y2="54" strokeWidth="1.8" />
            <line x1="25" y1="60" x2="51" y2="60" strokeWidth="1.8" />
            <line x1="25" y1="66" x2="51" y2="66" strokeWidth="1.8" />

            {/* Tuning dial / knob */}
            <circle cx="70" cy="45" r="8" fill="#FFFDF6" />
            <line x1="70" y1="45" x2="75" y2="42" strokeWidth="2.2" stroke="#5B2EE0" />
            <circle cx="70" cy="64" r="5" fill="#FFFDF6" />

            {/* AM/FM Frequency window */}
            <rect x="60" y="33" width="20" height="5" rx="1" fill="#FFB703" stroke="#16120F" strokeWidth="1" />

            {/* Tiny legs */}
            <rect x="22" y="78" width="6" height="4" fill="#16120F" />
            <rect x="72" y="78" width="6" height="4" fill="#16120F" />
          </g>
        </svg>
      </div>
    )
  },

  // ==========================================
  // FOREGROUND LAYER (Depth 3 - Hero Center Atif & Direct Props)
  // ==========================================
  {
    id: 'atif-hero',
    name: 'Atif Khan (The Center)',
    cluster: 'hero',
    depth: 3,
    baseX: 50,
    baseY: 82,
    scale: 1.25,
    mobile: true,
    render: ({ cursorDeltaX, cursorDeltaY }) => {
      // Calculate realistic head rotation and subtle torso lean
      const headTurn = Math.max(-12, Math.min(12, (cursorDeltaX || 0) * 0.08));
      const headNod = Math.max(-5, Math.min(5, (cursorDeltaY || 0) * 0.04));
      
      return (
        <div className="relative group select-none">
          {/* Subtle floating badge above Atif */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-0.5 rounded-full bg-[#16120F] text-[#FFFDF6] text-[10px] font-mono font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-[2px_2px_0px_#FFB703]">
            ATIF KHAN · FOUNDER & WRITER
          </div>

          <svg viewBox="0 0 120 180" className="w-32 sm:w-40 md:w-44 h-auto overflow-visible">
            {/* Ground Contact Shadow */}
            <ellipse cx="60" cy="176" rx="34" ry="5" fill="#16120F" fillOpacity="0.25" />

            <g stroke="#16120F" strokeWidth="2.4" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
              
              {/* LEGS / TROUSERS: Sleek black trousers, modern cut */}
              <path d="M48 122 L44 172 L52 174 L56 125" fill="#16120F" />
              <path d="M64 125 L68 174 L76 172 L72 122" fill="#16120F" />
              {/* Shoes: Clean modern Chelsea boots with saffron stitch detail */}
              <path d="M42 172 C37 172, 36 176, 52 176 L52 172 Z" fill="#16120F" />
              <path d="M78 172 C83 172, 84 176, 68 176 L68 172 Z" fill="#16120F" />
              <line x1="42" y1="174" x2="50" y2="174" stroke="#FFB703" strokeWidth="1.2" />
              <line x1="70" y1="174" x2="78" y2="174" stroke="#FFB703" strokeWidth="1.2" />

              {/* TORSO / BLACK JACKET / OVER-SHIRT:
                  Tall, lean posture, minimalist all-black aesthetic */}
              <g className="animate-breathe">
                <path d="M38 68 C38 62, 82 62, 82 68 L86 124 L34 124 Z" fill="#16120F" />
                {/* Jacket lapel & subtle white collar accent */}
                <polygon points="54,63 60,78 48,74" fill="#FFFDF6" stroke="#16120F" strokeWidth="1.5" />
                <polygon points="66,63 60,78 72,74" fill="#FFFDF6" stroke="#16120F" strokeWidth="1.5" />
                {/* Center zipper / buttons */}
                <line x1="60" y1="78" x2="60" y2="124" stroke="#FFFDF6" strokeWidth="1.8" strokeDasharray="4 4" />
                {/* Minimalist studio badge on chest */}
                <rect x="42" y="76" width="6" height="4" rx="1" fill="#FFB703" stroke="none" />

                {/* LEFT ARM: Hand in pocket, relaxed silhouette */}
                <path d="M38 68 C30 80, 30 98, 36 112 L44 112" fill="none" stroke="#16120F" strokeWidth="7" strokeLinecap="round" />
                
                {/* RIGHT ARM: Holding a sleek black Moleskine notebook/script */}
                <path d="M82 68 C88 82, 88 98, 80 110 L75 106" fill="none" stroke="#16120F" strokeWidth="7" strokeLinecap="round" />
                {/* Moleskine Journal in hand */}
                <g transform="translate(74, 98) rotate(-15)">
                  <rect x="0" y="0" width="16" height="22" rx="2" fill="#16120F" stroke="#FFFDF6" strokeWidth="1.5" />
                  {/* Elastic band in Lagoon */}
                  <line x1="12" y1="0" x2="12" y2="22" stroke="#0FB5AE" strokeWidth="2" />
                  {/* Page edges */}
                  <line x1="0" y1="2" x2="16" y2="2" stroke="#FFFDF6" strokeWidth="1" />
                </g>
              </g>

              {/* HEAD & HAIR GROUP:
                  Follows cursor interactively! Thick wavy textured hair, calm confident expression */}
              <g
                style={{
                  transform: `translate(${headTurn * 0.4}px, ${headNod * 0.4}px) rotate(${headTurn}deg)`,
                  transformOrigin: '60px 58px',
                  transition: 'transform 0.08s ease-out'
                }}
              >
                {/* Neck */}
                <rect x="54" y="52" width="12" height="14" fill="#FFFDF6" />

                {/* Head / Jaw */}
                <path d="M45 35 C45 20, 75 20, 75 35 C75 52, 68 58, 60 58 C52 58, 45 52, 45 35 Z" fill="#FFFDF6" />

                {/* SIGNATURE WAVY TEXTURED HAIR (Dark, voluminous, stylish side-sweep) */}
                <path
                  d="M42 34 C38 20, 48 10, 60 10 C72 10, 80 18, 78 30 C76 24, 70 20, 62 20 C54 20, 48 24, 46 32 C43 32, 42 34, 42 34 Z"
                  fill="#16120F"
                />
                <path d="M43 28 C45 16, 58 14, 66 16 C76 18, 79 26, 76 34" fill="#16120F" />
                <path d="M40 32 C46 22, 54 22, 62 24" stroke="#FFFDF6" strokeWidth="1.2" fill="none" />
                <path d="M60 18 C68 20, 74 24, 74 30" stroke="#FFFDF6" strokeWidth="1.2" fill="none" />

                {/* Eyes - confident, friendly with randomized blinking */}
                <g className="animate-blink">
                  <ellipse cx="53" cy="36" rx="2.5" ry="1.8" fill="#16120F" />
                  <circle cx="54" cy="35.5" r="0.6" fill="#FFFDF6" />
                  <ellipse cx="67" cy="36" rx="2.5" ry="1.8" fill="#16120F" />
                  <circle cx="68" cy="35.5" r="0.6" fill="#FFFDF6" />
                </g>

                {/* Eyebrows */}
                <path d="M50 31 Q53 30 56 32" strokeWidth="2" stroke="#16120F" fill="none" />
                <path d="M64 32 Q67 30 70 31" strokeWidth="2" stroke="#16120F" fill="none" />

                {/* Nose & Subtle Smile */}
                <path d="M60 35 L60 43 L58 44" strokeWidth="1.6" fill="none" />
                <path d="M55 48 Q60 52 65 48" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              </g>

            </g>
          </svg>
        </div>
      );
    }
  },

  {
    id: 'film-clapper',
    name: 'Director Clapperboard',
    cluster: 'film',
    depth: 3,
    baseX: 62,
    baseY: 82,
    scale: 1.0,
    mobile: true,
    interactive: true,
    action: 'clap',
    render: ({ isTriggered }) => (
      <div className="cursor-pointer group">
        <svg viewBox="0 0 95 85" className="w-20 sm:w-24 h-auto overflow-visible select-none">
          <title>BLOOD DEBT — Click to snap clapperboard</title>
          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            
            {/* Clapperboard Bottom Body */}
            <rect x="15" y="32" width="65" height="46" rx="3" fill="#16120F" />
            
            {/* White chalk lines on board */}
            <text x="20" y="44" fontSize="6.5" fontFamily="var(--font-mono)" fill="#FFFDF6" stroke="none" fontWeight="bold">SCENE</text>
            <text x="22" y="55" fontSize="10" fontFamily="var(--font-screenplay)" fill="#FFB703" stroke="none" fontWeight="bold">01</text>
            
            <text x="44" y="44" fontSize="6.5" fontFamily="var(--font-mono)" fill="#FFFDF6" stroke="none" fontWeight="bold">TAKE</text>
            <text x="46" y="55" fontSize="10" fontFamily="var(--font-screenplay)" fill="#FFFDF6" stroke="none" fontWeight="bold">04</text>
            
            <text x="20" y="68" fontSize="7" fontFamily="var(--font-screenplay)" fill="#0FB5AE" stroke="none" fontWeight="bold">BLOOD DEBT</text>
            <text x="20" y="74" fontSize="5" fontFamily="var(--font-mono)" fill="#FFFDF6" stroke="none" opacity="0.8">DIR: ATIF KHAN</text>

            {/* Grid dividers */}
            <line x1="15" y1="58" x2="80" y2="58" stroke="#FFFDF6" strokeWidth="1" />
            <line x1="40" y1="32" x2="40" y2="58" stroke="#FFFDF6" strokeWidth="1" />
            <line x1="62" y1="32" x2="62" y2="58" stroke="#FFFDF6" strokeWidth="1" />

            {/* Top Snapping Arm (Snaps down when clicked!) */}
            <g
              style={{
                transform: isTriggered ? 'rotate(0deg)' : 'rotate(-24deg)',
                transformOrigin: '15px 32px',
                transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <rect x="15" y="20" width="65" height="12" rx="2" fill="#16120F" />
              {/* Chevron stripes */}
              <polygon points="20,20 28,20 23,32 15,32" fill="#FFFDF6" stroke="none" />
              <polygon points="35,20 43,20 38,32 30,32" fill="#FFFDF6" stroke="none" />
              <polygon points="50,20 58,20 53,32 45,32" fill="#FFFDF6" stroke="none" />
              <polygon points="65,20 73,20 68,32 60,32" fill="#FFFDF6" stroke="none" />
              {/* Hinge screw */}
              <circle cx="18" cy="26" r="2.5" fill="#FFB703" stroke="#16120F" strokeWidth="1" />
            </g>

          </g>
        </svg>
      </div>
    )
  },

  {
    id: 'film-camera',
    name: 'Cinema Camera & Blinking REC',
    cluster: 'film',
    depth: 3,
    baseX: 70,
    baseY: 82,
    scale: 1.05,
    mobile: false,
    interactive: true,
    action: 'flash',
    render: ({ isTriggered }) => (
      <div className="cursor-pointer group">
        <svg viewBox="0 0 110 130" className="w-24 sm:w-28 h-auto overflow-visible select-none">
          <title>FrameByFrame Cinema Rig — Click to flash</title>
          
          {/* Flash Beam on click */}
          {isTriggered && (
            <polygon points="12,42 -40,10 -40,74" fill="#FFB703" fillOpacity="0.4" stroke="none" />
          )}

          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            
            {/* Heavy Tripod Legs */}
            <line x1="55" y1="80" x2="25" y2="128" strokeWidth="2.6" />
            <line x1="55" y1="80" x2="55" y2="128" strokeWidth="2.6" />
            <line x1="55" y1="80" x2="85" y2="128" strokeWidth="2.6" />
            <line x1="36" y1="105" x2="74" y2="105" strokeWidth="1.5" />

            {/* Camera Body (Matte box & rig) */}
            <rect x="35" y="32" width="46" height="34" rx="4" fill="#16120F" />
            
            {/* Matte Box / Sun Hood on Left */}
            <polygon points="35,36 15,26 15,64 35,56" fill="#16120F" />
            <rect x="12" y="24" width="4" height="42" fill="#FFFDF6" />

            {/* Top Handle */}
            <path d="M42 32 L42 22 L72 22 L72 32" fill="none" strokeWidth="3" />

            {/* Dual Top Film Magazines */}
            <circle cx="48" cy="18" r="9" fill="#FFFDF6" />
            <circle cx="48" cy="18" r="3" fill="#16120F" />
            <circle cx="64" cy="18" r="9" fill="#FFFDF6" />
            <circle cx="64" cy="18" r="3" fill="#16120F" />

            {/* Viewfinder on Right */}
            <rect x="81" y="38" width="16" height="10" rx="2" fill="#FFFDF6" />
            <circle cx="97" cy="43" r="5" fill="#16120F" />

            {/* Blinking Red REC LED Light */}
            <circle cx="70" cy="40" r="3.5" fill="#E5383B" stroke="#16120F" strokeWidth="1" className="animate-ping opacity-75" />
            <circle cx="70" cy="40" r="3" fill="#E5383B" stroke="#16120F" strokeWidth="1" />
            <text x="60" y="42" fontSize="5" fontFamily="var(--font-mono)" fill="#FFFDF6" stroke="none" fontWeight="bold">REC</text>

            {/* Tripod Fluid Head */}
            <rect x="47" y="66" width="16" height="14" rx="2" fill="#FFFDF6" />
            <line x1="63" y1="72" x2="78" y2="66" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    )
  },

  {
    id: 'mern-laptop',
    name: 'Developer Laptop & Terminal',
    cluster: 'tech',
    depth: 3,
    baseX: 42,
    baseY: 82,
    scale: 0.95,
    mobile: true,
    interactive: true,
    action: 'code',
    render: ({ isTriggered }) => (
      <div className="cursor-pointer group">
        <svg viewBox="0 0 90 70" className="w-20 sm:w-22 h-auto overflow-visible select-none">
          <title>MERN Stack & Python Lab — Click to run code</title>
          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            
            {/* Screen bezel */}
            <rect x="12" y="10" width="66" height="44" rx="4" fill="#16120F" />
            {/* Screen display */}
            <rect x="16" y="14" width="58" height="36" rx="2" fill="#16120F" />
            
            {/* Terminal lines in Lagoon */}
            <g stroke="#0FB5AE" strokeWidth="1.5" strokeLinecap="round">
              <line x1="20" y1="20" x2="32" y2="20" />
              <line x1="36" y1="20" x2="52" y2="20" stroke="#FFB703" />
              <line x1="20" y1="26" x2="45" y2="26" />
              <line x1="20" y1="32" x2="58" y2="32" />
              <line x1="20" y1="38" x2="38" y2="38" stroke="#5B2EE0" />
              {/* Blinking prompt block */}
              <rect x="42" y="36" width="4" height="4" fill="#0FB5AE" stroke="none" className="animate-pulse" />
            </g>

            {/* Laptop Base / Keyboard deck */}
            <polygon points="5,56 85,56 78,64 12,64" fill="#FFFDF6" />
            <line x1="38" y1="60" x2="52" y2="60" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    )
  },

  {
    id: 'cravings-bag',
    name: 'Cravings Takeout Bag',
    cluster: 'tech',
    depth: 3,
    baseX: 32,
    baseY: 82,
    scale: 0.85,
    mobile: false,
    render: () => (
      <svg viewBox="0 0 70 75" className="w-14 sm:w-16 h-auto overflow-visible select-none group cursor-pointer">
        <title>Cravings — MERN Food Delivery App</title>
        <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
          {/* Paper bag body */}
          <polygon points="12,25 58,25 54,70 16,70" fill="#FFFDF6" />
          {/* Folded rim */}
          <polygon points="10,20 60,20 58,25 12,25" fill="#FFB703" />
          {/* Cut-out handle */}
          <rect x="27" y="28" width="16" height="6" rx="3" fill="#16120F" />
          {/* Cravings badge stamp */}
          <circle cx="35" cy="50" r="10" fill="#FFB703" stroke="#16120F" strokeWidth="1.5" />
          <path d="M30 49 Q35 55 40 49" fill="none" stroke="#16120F" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="46" x2="32" y2="44" strokeWidth="1.8" />
          <line x1="38" y1="46" x2="38" y2="44" strokeWidth="1.8" />
          {/* Rising steam curls */}
          <path d="M26 15 Q24 8 28 2" stroke="#FFB703" strokeWidth="1.5" fill="none" />
          <path d="M44 15 Q46 8 42 2" stroke="#FFB703" strokeWidth="1.5" fill="none" />
        </g>
      </svg>
    )
  },

  {
    id: 'careerlens-doc',
    name: 'CareerLens Resume Sheet',
    cluster: 'tech',
    depth: 3,
    baseX: 47,
    baseY: 82,
    scale: 0.8,
    mobile: false,
    render: () => (
      <svg viewBox="0 0 60 75" className="w-12 sm:w-14 h-auto overflow-visible select-none group cursor-pointer">
        <title>CareerLens — AI Resume Analyzer & Mock Interviews</title>
        <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
          {/* Document sheet with folded dog-ear */}
          <polygon points="10,10 40,10 52,22 52,70 10,70" fill="#FFFDF6" />
          <polygon points="40,10 40,22 52,22" fill="#16120F" fillOpacity="0.1" />
          {/* Lines of text */}
          <line x1="16" y1="20" x2="32" y2="20" strokeWidth="2" stroke="#16120F" />
          <line x1="16" y1="28" x2="44" y2="28" strokeWidth="1.5" stroke="#16120F" />
          <line x1="16" y1="35" x2="44" y2="35" strokeWidth="1.5" stroke="#16120F" />
          <line x1="16" y1="42" x2="36" y2="42" strokeWidth="1.5" stroke="#16120F" />
          {/* AI Score Badge in Lagoon */}
          <circle cx="36" cy="56" r="8" fill="#0FB5AE" stroke="#16120F" strokeWidth="1.8" />
          <path d="M32 56 L35 59 L41 53" fill="none" stroke="#FFFDF6" strokeWidth="2" />
        </g>
      </svg>
    )
  },

  {
    id: 'instagram-heart',
    name: '@atifrecommends Heart',
    cluster: 'recommends',
    depth: 3,
    baseX: 79,
    baseY: 62,
    scale: 0.9,
    mobile: true,
    interactive: true,
    action: 'burst',
    render: ({ isTriggered }) => (
      <div className="cursor-pointer group">
        <svg viewBox="0 0 60 60" className="w-12 sm:w-14 h-auto overflow-visible select-none">
          <title>@atifrecommends on Instagram — Click for love</title>
          
          {/* Mini burst particles when clicked */}
          {isTriggered && (
            <g className="animate-ping" stroke="#E5383B" strokeWidth="2">
              <circle cx="10" cy="15" r="2" fill="#E5383B" />
              <circle cx="50" cy="15" r="2" fill="#E5383B" />
              <circle cx="8" cy="45" r="2" fill="#FFB703" />
              <circle cx="52" cy="45" r="2" fill="#FFB703" />
            </g>
          )}

          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            {/* Speech bubble */}
            <path d="M10 26 C10 14, 20 8, 30 8 C40 8, 50 14, 50 26 C50 36, 42 42, 34 44 L32 52 L26 44 C16 43, 10 36, 10 26 Z" fill="#FFFDF6" />
            {/* Vibrant Heart inside */}
            <path
              d="M30 33 C30 33, 22 27, 22 21 C22 17, 25 15, 28 17 C30 19, 30 19, 30 19 C30 19, 30 19, 32 17 C35 15, 38 17, 38 21 C38 27, 30 33, 30 33 Z"
              fill="#E5383B"
              stroke="#16120F"
              strokeWidth="1.5"
              className="group-hover:scale-110 transition-transform origin-center"
            />
          </g>
        </svg>
      </div>
    )
  },

  {
    id: 'brain-book',
    name: 'Brain & Book Hybrid',
    cluster: 'recommends',
    depth: 3,
    baseX: 86,
    baseY: 82,
    scale: 0.95,
    mobile: false,
    render: () => (
      <svg viewBox="0 0 80 80" className="w-16 sm:w-20 h-auto overflow-visible select-none group cursor-pointer">
        <title>Psychology, Cinema & Literature — @atifrecommends</title>
        <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
          {/* Open Book Base */}
          <path d="M15 55 Q40 50 40 68 Q40 50 65 55 L65 72 Q40 66 40 76 Q40 66 15 72 Z" fill="#FFFDF6" />
          <line x1="40" y1="68" x2="40" y2="76" strokeWidth="2.5" />
          
          {/* Brain lobes blooming from pages */}
          {/* Left Hemisphere */}
          <path d="M38 52 C32 46, 20 48, 20 38 C20 32, 25 28, 22 22 C28 20, 34 26, 38 24 Z" fill="#5B2EE0" fillOpacity="0.15" />
          {/* Right Hemisphere */}
          <path d="M42 52 C48 46, 60 48, 60 38 C60 32, 55 28, 58 22 C52 20, 46 26, 42 24 Z" fill="#5B2EE0" fillOpacity="0.15" />
          {/* Synapse spark in Saffron */}
          <circle cx="40" cy="20" r="3.5" fill="#FFB703" stroke="#16120F" strokeWidth="1.5" />
          <line x1="40" y1="20" x2="35" y2="28" stroke="#FFB703" strokeWidth="1.5" />
          <line x1="40" y1="20" x2="45" y2="28" stroke="#FFB703" strokeWidth="1.5" />
        </g>
      </svg>
    )
  },

  {
    id: 'audience-reader',
    name: 'Curious Reader Student',
    cluster: 'audience',
    depth: 3,
    baseX: 14,
    baseY: 82,
    scale: 0.95,
    mobile: false,
    render: ({ cursorDeltaX }) => {
      const tilt = Math.max(-10, Math.min(10, (cursorDeltaX || 0) * 0.05));
      return (
        <svg viewBox="0 0 85 140" className="w-20 sm:w-24 h-auto overflow-visible select-none">
          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            {/* Trousers & shoes */}
            <path d="M30 95 L26 135 L34 135 L38 98" fill="#16120F" />
            <path d="M48 98 L52 135 L60 135 L56 95" fill="#16120F" />
            {/* Hoodie */}
            <path d="M24 55 C24 50, 62 50, 62 55 L65 98 L21 98 Z" fill="#0FB5AE" />
            {/* Round glasses & head */}
            <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '43px 48px', transition: 'transform 0.1s ease-out' }}>
              <circle cx="43" cy="36" r="14" fill="#FFFDF6" />
              {/* Hair */}
              <path d="M30 32 C32 20, 54 20, 56 32 Z" fill="#16120F" />
              {/* Round specs */}
              <circle cx="38" cy="36" r="4.5" fill="#FFFDF6" stroke="#16120F" strokeWidth="1.8" />
              <circle cx="48" cy="36" r="4.5" fill="#FFFDF6" stroke="#16120F" strokeWidth="1.8" />
              <line x1="42.5" y1="36" x2="43.5" y2="36" strokeWidth="1.8" />
            </g>
            {/* Open book in hands */}
            <path d="M26 75 L43 82 L60 75 L60 88 L43 94 L26 88 Z" fill="#FFFDF6" />
            <line x1="43" y1="82" x2="43" y2="94" strokeWidth="2" />
          </g>
        </svg>
      );
    }
  },

  {
    id: 'audience-cheerer',
    name: 'Waving Creative Collaborator',
    cluster: 'audience',
    depth: 3,
    baseX: 92,
    baseY: 82,
    scale: 0.95,
    mobile: false,
    render: ({ cursorDeltaX }) => {
      const tilt = Math.max(-8, Math.min(8, (cursorDeltaX || 0) * 0.05));
      return (
        <svg viewBox="0 0 90 145" className="w-20 sm:w-24 h-auto overflow-visible select-none">
          <g stroke="#16120F" strokeWidth="2.2" fill="#FFFDF6" strokeLinecap="round" strokeLinejoin="round">
            {/* Legs */}
            <path d="M32 98 L30 138 L38 138 L42 100" fill="#16120F" />
            <path d="M48 100 L52 138 L60 138 L58 98" fill="#16120F" />
            {/* Jacket */}
            <path d="M25 60 C25 54, 65 54, 65 60 L68 100 L22 100 Z" fill="#FFFDF6" />
            {/* Waving arm */}
            <path d="M65 65 C75 50, 78 40, 80 32" strokeWidth="4" strokeLinecap="round" />
            <circle cx="80" cy="30" r="3.5" fill="#FFB703" stroke="#16120F" strokeWidth="2" />
            {/* Head */}
            <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '45px 52px', transition: 'transform 0.1s ease-out' }}>
              <circle cx="45" cy="38" r="13" fill="#FFFDF6" />
              {/* Curly hair bun */}
              <circle cx="45" cy="22" r="7" fill="#16120F" />
              <path d="M33 34 C36 24, 54 24, 57 34 Z" fill="#16120F" />
              {/* Joyful wink */}
              <path d="M38 38 Q41 35 44 38" strokeWidth="1.8" fill="none" />
              <circle cx="51" cy="37" r="1.5" fill="#16120F" />
              <path d="M41 45 Q45 48 49 45" strokeWidth="1.8" fill="none" />
            </g>
          </g>
        </svg>
      );
    }
  }
];


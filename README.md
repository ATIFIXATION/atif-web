# Atif Khan — Personal Portfolio

> **Engineer by logic. Creator by instinct.**
> Live Website: [https://atif-web-mu.vercel.app](https://atif-web-mu.vercel.app)
> Repository: [https://github.com/ATIFIXATION/atif-web](https://github.com/ATIFIXATION/atif-web)
> A personal portfolio website for Atif Khan, an AI & Data Science engineering student and filmmaker-writer from Bhopal, India.

---

## Architecture & Visual Language

- **The One Big Idea:** Two typographic voices in active dialogue:
  - **Engineer voice (The Lab):** *Bricolage Grotesque* variable font set wide, tight, and structured over a saturated **Lagoon (`#0FB5AE`)** color field.
  - **Creator voice (The Studio):** *Fraunces* variable font (modulating `SOFT` and `WONK` axes) set over a saturated **Ultraviolet (`#5B2EE0`)** color field.
- **Hero Centerpiece:** The reactive variable wordmark **"Atif Khan"** tracks cursor movement and device tilt, accompanied by a hand-drawn SVG marker stroke that draws itself across the hero on load.
- **Atif's Cutout Portrait:** `atif-cutout.png` (transparent background) with a hard offset Ink shadow overlapping the wordmark.
- **Interactive Sticker Board:** 12 physics-enabled draggable stickers with light spring release, accessible keyboard arrow-key navigation, and Atif's circular portrait sticker.
- **Flagship Crossover Slot:** **ReelForge AI** (20-module autonomous video editing pipeline) bridging The Lab and The Studio.
- **Mobile First:** Optimized for Instagram traffic arriving on phones (360px to 1920px+).

---

## How to Edit Content

All content is strictly data-driven and lives in `/src/data/*.js`. You never need to touch React component code to update your info:

| Data File | What to Edit |
|---|---|
| `src/data/identity.js` | Name, location, degree, bio (50 & 150 words), quick facts, "Currently" block, influences. |
| `src/data/links.js` | GitHub, Instagram, Grayvale Systems, LinkedIn, Resume PDF link. |
| `src/data/skills.js` | Core, Working, and Exploring skill lists and focus areas. |
| `src/data/projects.js` | Project cards, story details (Context → Idea → Result), stack chips, GitHub/Live links. Items with `pending: true` are hidden. |
| `src/data/creative.js` | FrameByFrame details, @atifrecommends Instagram cards, *The Frequency of the Dead* novel lore, screenplays (*BLOOD DEBT*), and poster gallery. |
| `src/data/experience.js`| Techtonic timeline bullets, LNCT coursework, and certifications. |
| `src/data/achievements.js`| Hackathon podiums, SIH, Ideathon, and milestone records. |
| `src/data/stickers.js` | Draggable sticker text, colors, rotations, and positions. |

---

## How to Swap Assets

Drop your new files directly into `/public/assets/` using the exact names listed in `MISSING_ASSETS.md`:

- **Hero Cutout:** `/public/assets/atif-cutout.png`
- **Hero Portrait:** `/public/assets/atif-portrait.webp`
- **About Photo:** `/public/assets/atif-about.webp`
- **Studio BTS Photo:** `/public/assets/atif-shooting.webp`
- **Creative Reel Video:** `/public/assets/creative-reel.mp4`
- **Resume PDF:** `/public/assets/atif-khan-resume.pdf`

---

## Development & Deployment

### Start Local Dev Server
```bash
npm run dev
```

### Build for Production (Vercel Ready)
```bash
npm run build
```

The output in `/dist` is production-ready for deployment on Vercel, Netlify, or GitHub Pages.


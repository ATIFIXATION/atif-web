# MISSING_ASSETS.md — Atif Khan Portfolio

All assets currently wired into `/src/data/*.js` and referenced in components are cataloged here. The website is pre-configured to automatically load these files as soon as they are dropped into `/public/assets/` without requiring code edits.

---

## 1. Photos of Atif (Processed & Live)
| Filename | Status | Notes |
|---|---|---|
| `atif-portrait.webp` | **Ready** | Derived from `img4.jpeg`, high-res film-grained portrait. |
| `atif-cutout.png` | **Ready** | Transparent PNG cutout with alpha channel for hero & contact. |
| `atif-about.webp` | **Ready** | Derived from `img1.jpeg`, tall candid in black kurta outdoors. |
| `atif-shooting.webp` | **Ready** | Derived from `img2.HEIC`, BTS shot in book stacks for Studio. |
| `atif-studio-desk.webp` | **Ready** | Derived from `img3.jpeg`, candid desk study with vinyl graphic. |
| `atif-sticker-face.webp` | **Ready** | Circular face badge with white border for sticker board. |

---

## 2. Creative & Reel
| Filename | Status | Notes |
|---|---|---|
| `creative-reel.mp4` | **Pending Atif's Own Reel** | Reference video removed. Phone frame renders a 4K studio slate with audio waves until Atif adds his own reel. |
| `creative-reel-poster.webp` | **Pending** | Will be extracted when `creative-reel.mp4` is added. |
| `framebyframe-logo.svg` | **Ready** | Vector SVG logo for FrameByFrame studio. |
| `frequency-of-the-dead-cover.webp` | **Ready** | 2:3 ratio dark atmospheric supernatural novel cover. |
| `atifrecommends-01..04.webp` | **Ready** | 1080×1080 editorial carousel visual cards for Instagram grid. |
| `poster-01..04.webp` | **Ready** | Dramatic gritty posters on Reel Red background. |

---

## 3. Technical Project Covers
| Filename | Status | Notes |
|---|---|---|
| `cravings-cover.webp` | **Ready** | Stylized MERN + Three.js project banner. |
| `cravings-home.webp` | **Ready** | Frontend explore view. |
| `cravings-dashboard.webp` | **Ready** | Dashboard view. |
| `careerlens-cover.webp` | **Ready** | AI resume analyzer cover. |
| `agroscan-cover.webp` | **Ready** | Crop disease detection cover. |
| `reelforge-cover.webp` | **Ready** | Flagship crossover 20-module pipeline cover. |

---

## 4. Pending Files to Supply (Drop in `/public/assets/`)
| Filename | Purpose | Current Behavior |
|---|---|---|
| `atif-khan-resume.pdf` | Resume download button | Button hidden (`pending: true` in `links.js`) |
| `ricr-hackathon-certificate.pdf` | Verification for 3rd place podium | Tagged in data; link pending |
| `certifications.pdf` | Additional credential proofs | Listed in table without external PDF link |
| `writing-excerpt.pdf` | Excerpt for *The Frequency of the Dead* | Displayed as "[Pending Final Print Run]" |
| `poster-05.webp`, `poster-06.webp` | Extended poster gallery | 4 posters active; ready for more |

---

## 5. Pending Information from Atif
1. **LinkedIn profile URL**: Once created, update in `src/data/links.js`.
2. **Name spelling confirmation**: "Muhammad" vs "Mohammad" (`src/data/identity.js`).
3. **Techtonic dates & exact research scope**: Update in `src/data/experience.js`.
4. **GitHub & Live URLs** for Cravings, CareerLens, AgroScan AI, ReelForge AI once public.


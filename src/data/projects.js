export const projects = [
  {
    id: "reelforge-ai",
    title: "ReelForge AI",
    tagline: "Autonomous cinematic reel editor & 20-module pipeline",
    category: "AI × Video · Flagship Crossover",
    crossover: true, // Links The Lab & The Studio
    cover: "/assets/reelforge-cover.webp",
    story: {
      context: "Editing short-form cinematic videos manually takes hours of repetitive cutting, beat-matching, silence-stripping, and framing adjustments.",
      idea: "A 20-module modular Python pipeline combining OpenCV computer vision, FFmpeg automation, and audio wave analysis to autonomously edit raw clips into punchy cinematic reels.",
      result: "Demonstrated automated cut generation, aspect-ratio reframing for 9:16 mobile feeds, and rhythm-synced transitions. Reached out and pitched directly to founders of VideoVerse and Predis.ai."
    },
    stack: ["Python", "OpenCV", "FFmpeg", "NumPy", "Audio Analysis"],
    role: "System Architect & Pipeline Developer",
    status: "Pipeline Prototype",
    githubUrl: null, // [PENDING]
    liveUrl: null,   // [PENDING]
    verify: true,    // [VERIFY: Founder outreach mention]
    pending: false
  },
  {
    id: "cravings",
    title: "Cravings",
    tagline: "Food discovery, ambiance rankings & interactive 3D web experience",
    category: "Full-Stack · MERN & 3D",
    cover: "/assets/cravings-cover.webp",
    screens: ["/assets/cravings-home.webp", "/assets/cravings-dashboard.webp"],
    story: {
      context: "Standard food delivery platforms are sterile lists and discount banners; they fail to evoke the culinary vibe, social buzz, or true ambiance of dining out.",
      idea: "A social-first food discovery platform featuring restaurant curation, mood and ambiance rankings, interactive 3D dish mockups (Three.js), and animated discovery feeds.",
      result: "Architected complete MERN stack, implemented authentication, dynamic dish catalogs, and resolved complex cross-origin resource sharing (CORS) and API routing during deployment."
    },
    stack: ["React", "Vite", "Tailwind CSS v4", "daisyUI v5", "Node.js", "Express", "MongoDB", "Three.js", "GSAP"],
    role: "Full-Stack Developer",
    roleVerify: true, // [VERIFY: solo developer]
    status: "In Active Development",
    githubUrl: null, // [PENDING]
    liveUrl: null,   // [PENDING]
    verify: true,
    pending: false
  },
  {
    id: "careerlens",
    title: "CareerLens",
    tagline: "AI resume analyzer & realistic mock interview trainer",
    category: "AI / Career-Tech · Hackathon Project",
    cover: "/assets/careerlens-cover.webp",
    story: {
      context: "Job seekers struggle with generic feedback and lack realistic practice before high-stakes technical interviews.",
      idea: "An AI-powered career assistant providing instant resume scoring, keyword gap diagnostics, and interactive mock interview scenarios built during the Hack in Motion hackathon.",
      result: "Built a responsive, fluid front-end with real-time feedback loops and dynamic interview simulation prompts."
    },
    stack: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
    role: "Frontend Development",
    status: "Hack in Motion Build",
    githubUrl: null, // [PENDING]
    liveUrl: null,   // [PENDING]
    verify: false,
    pending: false
  },
  {
    id: "agroscan-ai",
    title: "AgroScan AI",
    tagline: "Crop disease detection via deep learning convolutional networks",
    category: "AI / Computer Vision · Ideathon 2K26",
    cover: "/assets/agroscan-cover.webp",
    story: {
      context: "Early visual identification of plant pathogens is critical for agricultural yield but inaccessible to smallholder farmers without agronomists.",
      idea: "A mobile-first Progressive Web App (PWA) powered by an EfficientNet-B4 deep learning model trained on the PlantVillage dataset for instant on-field crop diagnosis.",
      result: "Presented as a project submission at Ideathon 2K26, validating mobile camera inference workflow and offline-first progressive web app caching."
    },
    stack: ["EfficientNet-B4", "PlantVillage", "Flask", "React PWA", "Python"],
    role: "ML Inference & PWA Developer",
    status: "Ideathon 2K26 Submission",
    githubUrl: null, // [PENDING]
    liveUrl: null,   // [PENDING]
    verify: false,
    pending: false
  },
  {
    id: "grayvale-systems",
    title: "Grayvale Systems",
    tagline: "Centralized live deployment repository & web application hub",
    category: "Deployment & Engineering",
    cover: "/assets/cravings-home.webp",
    story: {
      context: "Managing multiple heterogeneous client projects, static sites, and web prototypes across differing sub-paths and build configurations.",
      idea: "A unified system deployment hub resolving Jekyll build failures, Vite subfolder asset paths, and automated deployment pipelines.",
      result: "Deployed and maintained multi-project suite live across GitHub Pages and Vercel cloud hosting."
    },
    stack: ["Vite", "JavaScript", "GitHub Pages", "Vercel", "Jekyll"],
    role: "Deployment & Systems Maintainer",
    status: "Live & Maintained",
    githubUrl: "https://github.com/ATIFIXATION",
    liveUrl: "https://grayvale.vercel.app/",
    verify: false,
    pending: false
  },
  {
    id: "client-builds",
    title: "Client & Studio Builds",
    tagline: "Syed Properties & Techtonic web implementations",
    category: "Frontend & UI Design",
    cover: "/assets/cravings-dashboard.webp",
    story: {
      context: "Crafting distinct digital presence for regional businesses and boutique technology studios.",
      idea: "Built Syed Properties with a high-contrast luxury CSS theme, and assisted with production front-end development for Techtonic studio.",
      result: "Delivered responsive, production-ready layouts tailored to commercial client brand identities."
    },
    stack: ["HTML5", "CSS3 / Custom Themes", "JavaScript", "Responsive Design"],
    role: "Frontend Developer",
    status: "Production Builds",
    githubUrl: null,
    liveUrl: null,
    verify: true, // [VERIFY: client vs practice]
    pending: false
  },
  // Items marked [PENDING] in PORTFOLIO_CONTENT.md are flagged pending: true and hidden
  {
    id: "arogyasathi",
    title: "ArogyaSathi",
    tagline: "Community healthcare coordination connecting citizens, ASHA workers & health officers",
    category: "Full-Stack · Healthcare",
    cover: "/assets/cravings-home.webp",
    story: {
      context: "Fragmented communication between rural citizens, community ASHA health workers, and supervisory medical officers.",
      idea: "A structured role-based workflow web application facilitating patient tracking, maternal health updates, and transparent service coordination.",
      result: "Architected React + Vite frontend, Express REST APIs, and PostgreSQL database with role-based permissions."
    },
    stack: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    role: "Full-Stack Developer",
    status: "Production Architecture",
    githubUrl: "https://github.com/ATIFIXATION/ArogyaSathi",
    liveUrl: null,
    verify: false,
    pending: false
  },
  {
    id: "playnexus",
    title: "PlayNEXUS",
    category: "AI / Sports-Tech",
    pending: true // Hidden until Atif confirms status
  }
];

export const earlierWork = [
  { name: "FakeStore React App", desc: "Catalog, cart state & FakeStore REST API", stack: "React · Vite" },
  { name: "User Management App", desc: "Full CRUD admin portal", stack: "Angular · Spring Boot" },
  { name: "Weather Radar App", desc: "Real-time OpenWeather client", stack: "JavaScript · Fetch API" }
];


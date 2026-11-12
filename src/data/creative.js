export const creativeWorks = {
  framebyframe: {
    brand: "FrameByFrame",
    tagline: "Cinematic video content & film-first storytelling",
    logo: "/assets/framebyframe-logo.svg",
    reelVideo: null, // [PENDING: Drop your creative-reel.mp4 into /public/assets/ when ready]
    reelPending: true,
    posterFrame: null,
    btsPhoto: "/assets/atif-shooting.webp",
    btsCaption: "Atif immersed in research & literature in the stacks, tracing visual metaphors for screen.",
    description: "FrameByFrame is Atif's independent filmmaking imprint, chasing the textural look of 35mm cinematic vlogs, grounded pacing, and Netflix-style realism. Driven by Sony ZV-E10 II and iPhone 15 cinematography with DaVinci Resolve color grading."
  },
  atifrecommends: {
    brand: "@atifrecommends",
    handle: "@atifrecommends",
    url: "https://instagram.com/atifrecommends",
    tagline: "Books, film, philosophy & psychology in cinematic cards",
    description: "A digital sanctuary dissecting existential literature, psychological friction, and cinema history into 1080×1080 editorial visual essays.",
    posts: [
      {
        id: "post-01",
        author: "Fyodor Dostoevsky",
        work: "Crime and Punishment",
        quote: "Suffering is the sole origin of consciousness.",
        image: "/assets/atifrecommends-01.webp",
        tag: "EXISTENTIALISM"
      },
      {
        id: "post-02",
        author: "Franz Kafka",
        work: "The Metamorphosis & The Trial",
        quote: "A cage went in search of a bird.",
        image: "/assets/atifrecommends-02.webp",
        tag: "ABSURDISM"
      },
      {
        id: "post-03",
        author: "Albert Camus",
        work: "The Myth of Sisyphus",
        quote: "In the midst of winter, I found there was, within me, an invincible summer.",
        image: "/assets/atifrecommends-03.webp",
        tag: "PHILOSOPHY"
      },
      {
        id: "post-04",
        author: "Cognitive Psychology",
        work: "The Resistance to Creation",
        quote: "Why our minds invent friction against the very work that matters most.",
        image: "/assets/atifrecommends-04.webp",
        tag: "PSYCHOLOGY"
      }
    ]
  },
  novel: {
    title: "The Frequency of the Dead",
    genre: "Supernatural · New Adult Fiction",
    coAuthor: "Muhammad Rehaan",
    setting: "Vethara — A fictional, fog-drenched industrial metropolis",
    cover: "/assets/frequency-of-the-dead-cover.webp",
    synopsis: "When an abandoned shortwave frequency begins broadcasting voices of the missing across the industrial city of Vethara, two university students trace the transmission into an underground network of forgotten archives, psychic resonances, and unresolved guilt.",
    role: "Co-Author: Wrote and formatted the complete manuscript, and spearheaded visual worldbuilding and book cover iterations.",
    status: "Manuscript Complete",
    excerptAvailable: false, // [PENDING: Show button once excerpt PDF is uploaded]
    verify: false
  },
  screenwriting: [
    {
      title: "BLOOD DEBT",
      format: "Feature Screenplay (Dark Comedy / Crime)",
      logline: "A desperate engineering dropout and his volatile childhood friend attempt to blackmail a notorious local financier named Khan Saab, only to discover their mark is already being audited by a ruthless cartel.",
      characters: ["Rahul", "Imran", "Khan Saab"],
      status: "First Draft Complete",
      sampleScene: {
        slug: "EXT. LALGHATI TEA STALL - NIGHT",
        action: "Neon smog hangs over Bhopal's ring road. IMRAN (21, cigarette smoke trailing his collar) taps his burner phone furiously against the laminate table. RAHUL (21, hoodie pulled low) checks his watch for the fourth time in sixty seconds.",
        dialogue: [
          { speaker: "RAHUL", line: "He's not calling, Imran. Khan Saab doesn't negotiate on Tuesdays. My uncle said he does hajj prep or accounts." },
          { speaker: "IMRAN", line: "He's got five hundred grams of unaccounted silver and your signature on an unpaid invoice. Trust me. He's calling." },
          { speaker: "RAHUL", line: "And if he brings his nephew?" },
          { speaker: "IMRAN", line: "(beat, deadpan)\nThen we negotiate with the nephew." }
        ]
      },
      verify: true // [VERIFY: logline wording]
    },
    {
      title: "THE UNTITLED 90s PROJECT",
      format: "Series Pitch / Concept",
      logline: "In an alternate 1990s India, an elite ancient residential university modeled after Nalanda guards centuries of occult scientific manuscripts while its teenage scholars unravel an escalating conspiracy.",
      characters: ["Anand", "Meera", "The Bursar"],
      status: "In Development",
      verify: true
    }
  ],
  posters: [
    { title: "BLOOD DEBT", caption: "Official screenplay concept poster · Chaotic Red Edition", file: "/assets/poster-01.webp" },
    { title: "VETHARA CHRONICLES", caption: "Atmospheric architectural mystery teaser", file: "/assets/poster-02.webp" },
    { title: "CRIME & PUNISHMENT", caption: "Cinematic video essay visual key", file: "/assets/poster-03.webp" },
    { title: "THE UNTITLED 90s", caption: "Period academia noir concept art", file: "/assets/poster-04.webp" }
  ]
};


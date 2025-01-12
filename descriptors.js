// Massive categorized list of music descriptors and prompts

// Tempo & Rhythm Descriptors
const tempoDescriptors = {
  slow: [
    "glacially slow",
    "meditative",
    "drowsy",
    "lethargic",
    "crawling",
    "time-stretched",
    "suspended in time",
    "languid",
    "leisurely",
    "unhurried"
  ],
  medium: [
    "walking pace",
    "mid-tempo",
    "steady",
    "flowing",
    "comfortable groove",
    "relaxed rhythm",
    "balanced pace",
    "moderate swing",
    "cruising speed",
    "natural flow"
  ],
  fast: [
    "breakneck",
    "frenetic",
    "lightning fast",
    "racing",
    "turbocharged",
    "hyperactive",
    "rushed",
    "urgent",
    "accelerating",
    "spiraling"
  ]
};

// Emotional Qualities
const emotionalQualities = {
  dark: [
    "melancholic",
    "haunting",
    "brooding",
    "somber",
    "gloomy",
    "mysterious",
    "foreboding",
    "ominous",
    "sinister",
    "murky"
  ],
  light: [
    "uplifting",
    "joyous",
    "playful",
    "carefree",
    "whimsical",
    "bright",
    "optimistic",
    "cheerful",
    "lighthearted",
    "bubbly"
  ],
  intense: [
    "passionate",
    "fierce",
    "aggressive",
    "furious",
    "explosive",
    "volatile",
    "electric",
    "intense",
    "burning",
    "raw"
  ]
};

// Texture & Timbre
const soundTextures = {
  smooth: [
    "silky",
    "velvet",
    "liquid",
    "flowing",
    "seamless",
    "polished",
    "glossy",
    "ethereal",
    "pristine",
    "crystalline"
  ],
  rough: [
    "gritty",
    "grainy",
    "distorted",
    "fuzzy",
    "crunchy",
    "harsh",
    "coarse",
    "jagged",
    "raw",
    "abrasive"
  ],
  layered: [
    "dense",
    "thick",
    "wall of sound",
    "layered",
    "textured",
    "complex",
    "rich",
    "deep",
    "massive",
    "orchestral"
  ]
};

// Genre Foundations
const genreRoots = {
  electronic: [
    "techno",
    "house",
    "trance",
    "dubstep",
    "ambient",
    "IDM",
    "breakbeat",
    "drum and bass",
    "synthwave",
    "glitch"
  ],
  rock: [
    "indie",
    "alternative",
    "punk",
    "metal",
    "progressive",
    "psychedelic",
    "garage",
    "grunge",
    "post-rock",
    "experimental"
  ],
  jazz: [
    "bebop",
    "swing",
    "fusion",
    "free jazz",
    "modal",
    "cool jazz",
    "hard bop",
    "avant-garde",
    "smooth jazz",
    "latin jazz"
  ],
  classical: [
    "baroque",
    "romantic",
    "contemporary",
    "minimalist",
    "orchestral",
    "chamber",
    "opera",
    "symphonic",
    "modernist",
    "neoclassical"
  ]
};

// Production Styles
const productionStyles = {
  modern: [
    "polished",
    "pristine",
    "digital",
    "clean",
    "hi-fi",
    "processed",
    "synthetic",
    "contemporary",
    "maximalist",
    "engineered"
  ],
  vintage: [
    "lo-fi",
    "analog",
    "tape",
    "vinyl",
    "warm",
    "dusty",
    "retro",
    "nostalgic",
    "classic",
    "traditional"
  ],
  experimental: [
    "glitchy",
    "deconstructed",
    "abstract",
    "avant-garde",
    "unconventional",
    "boundary-pushing",
    "innovative",
    "pioneering",
    "radical",
    "revolutionary"
  ]
};

// Atmospheric Elements
const atmospheres = {
  spaces: [
    "cavernous",
    "intimate",
    "spacious",
    "claustrophobic",
    "vast",
    "confined",
    "open",
    "enclosed",
    "expansive",
    "compressed"
  ],
  environments: [
    "underwater",
    "cosmic",
    "urban",
    "natural",
    "industrial",
    "pastoral",
    "subterranean",
    "celestial",
    "terrestrial",
    "ethereal"
  ],
  moods: [
    "dreamy",
    "nightmarish",
    "surreal",
    "psychedelic",
    "meditative",
    "tense",
    "peaceful",
    "chaotic",
    "transcendent",
    "grounding"
  ]
};

// Cultural & Regional Influences
const culturalInfluences = {
  global: [
    "afrobeat",
    "latin",
    "middle eastern",
    "asian",
    "nordic",
    "celtic",
    "mediterranean",
    "caribbean",
    "balkan",
    "indian"
  ],
  fusion: [
    "cross-cultural",
    "world fusion",
    "hybrid",
    "multicultural",
    "global fusion",
    "traditional-modern",
    "east-meets-west",
    "indigenous-electronic",
    "folk-tronica",
    "ethnic-digital"
  ]
};

// Compositional Elements
const composition = {
  structure: [
    "linear",
    "cyclical",
    "evolving",
    "static",
    "dynamic",
    "progressive",
    "minimalist",
    "maximalist",
    "structured",
    "freeform"
  ],
  harmony: [
    "consonant",
    "dissonant",
    "atonal",
    "microtonal",
    "polytonal",
    "modal",
    "chromatic",
    "harmonic",
    "inharmonic",
    "spectral"
  ],
  rhythm: [
    "polyrhythmic",
    "syncopated",
    "straight",
    "swung",
    "broken",
    "irregular",
    "steady",
    "fluid",
    "mechanical",
    "organic"
  ]
};

// Extended Techniques & Effects
const effects = {
  processing: [
    "reverberant",
    "delayed",
    "filtered",
    "modulated",
    "granular",
    "timestretched",
    "pitch-shifted",
    "vocoded",
    "bitcrushed",
    "saturated"
  ],
  performance: [
    "extended technique",
    "prepared instrument",
    "unconventional playing",
    "alternative tuning",
    "microscopic sound",
    "noise-based",
    "textural",
    "gestural",
    "percussive",
    "resonant"
  ]
};

// Hybrid & Contemporary Styles
const hybridStyles = {
  modern: [
    "post-digital",
    "vapourwave",
    "hyperpop",
    "deconstructed club",
    "future garage",
    "witch house",
    "cloud rap",
    "ambient pop",
    "experimental hip-hop",
    "neo-psychedelia"
  ],
  crossover: [
    "math rock",
    "nu jazz",
    "post-classical",
    "art pop",
    "industrial hip-hop",
    "folktronica",
    "chamber pop",
    "space music",
    "dark ambient",
    "drone metal"
  ]
};

// Time Period References
const timePeriods = {
  decades: [
    "50s influenced",
    "60s inspired",
    "70s throwback",
    "80s revival",
    "90s nostalgia",
    "Y2K era",
    "2010s sound",
    "contemporary",
    "retro-futuristic",
    "timeless"
  ],
  movements: [
    "modernist",
    "post-modern",
    "futurist",
    "primitivist",
    "revivalist",
    "traditionalist",
    "avant-garde",
    "contemporary",
    "classical",
    "progressive"
  ]
};

// Performance Dynamics
const performanceDynamics = {
  intensity: [
    "crescendo",
    "diminuendo",
    "swelling",
    "pulsating",
    "throbbing",
    "undulating",
    "cascading",
    "building",
    "explosive",
    "restrained"
  ],
  articulation: [
    "staccato",
    "legato",
    "pizzicato",
    "marcato",
    "glissando",
    "portamento",
    "tremolo",
    "vibrato",
    "sustained",
    "percussive"
  ]
};

// Sound Design Elements
const soundDesign = {
  synthesis: [
    "additive",
    "subtractive",
    "FM synthesis",
    "wavetable",
    "granular",
    "physical modeling",
    "analog modeling",
    "hybrid",
    "modular",
    "virtual analog"
  ],
  modulation: [
    "LFO-driven",
    "envelope-controlled",
    "randomized",
    "sequenced",
    "morphing",
    "evolving",
    "stepped",
    "wave-shaped",
    "sample and hold",
    "cross-modulated"
  ]
};

// Contemporary Trends
const contemporaryTrends = {
  internetAge: [
    "viral",
    "meme music",
    "extremely online",
    "post-internet",
    "algorithmic",
    "AI-generated",
    "blockchain",
    "crypto-aesthetic",
    "virtual reality",
    "augmented"
  ],
  socialMovements: [
    "protest music",
    "activist",
    "revolutionary",
    "anti-establishment",
    "underground",
    "countercultural",
    "political",
    "conscious",
    "resistance",
    "empowerment"
  ]
};

// Virtual Spaces
const virtualSpaces = {
  digital: [
    "cyber",
    "virtual",
    "digital",
    "network",
    "pixelated",
    "glitch",
    "bandwidth",
    "compressed",
    "encrypted",
    "decoded"
  ],
  gaming: [
    "8-bit",
    "16-bit",
    "chiptune",
    "console",
    "arcade",
    "boss music",
    "level theme",
    "RPG",
    "strategy",
    "platformer"
  ]
};
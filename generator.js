document.addEventListener('DOMContentLoaded', function() {
  // Combine all descriptor categories
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

  const allCategories = {
    'Tempo & Rhythm': tempoDescriptors,
    'Emotional Qualities': emotionalQualities,
    'Texture & Timbre': soundTextures,
    'Genre Foundations': genreRoots,
    'Production Styles': productionStyles,
    'Atmospheric Elements': atmospheres,
    'Cultural Influences': culturalInfluences,
    'Composition': composition,
    'Effects': effects,
    'Hybrid Styles': hybridStyles,
    'Time Periods': timePeriods
  };

  // Create checkboxes for each category
  const checkboxContainer = document.getElementById('categoryCheckboxes');
  Object.keys(allCategories).forEach(category => {
    const div = document.createElement('div');
    div.className = 'checkbox-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = category.replace(/\s+/g, '');
    checkbox.value = category;
    
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = category;
    
    div.appendChild(checkbox);
    div.appendChild(label);
    checkboxContainer.appendChild(div);
  });

  // Generate button click handler
  document.getElementById('generateBtn').addEventListener('click', function() {
    const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);
    
    if (selectedCategories.length === 0) {
      alert('Please select at least one category!');
      return;
    }

    const output = generatePrompt(selectedCategories, allCategories);
    const outputElement = document.getElementById('output');
    outputElement.textContent = output;
    outputElement.classList.remove('animate');
    void outputElement.offsetWidth; // Trigger reflow
    outputElement.classList.add('animate');
  });

  // Select/Deselect All buttons
  document.getElementById('selectAllBtn').addEventListener('click', function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = true);
  });

  document.getElementById('deselectAllBtn').addEventListener('click', function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
  });
});

function generatePrompt(selectedCategories, allCategories) {
  const selectedWords = [];
  
  // Get 2-3 random categories from the selected ones
  const numCategories = Math.floor(Math.random() * 2) + 2; // 2-3 categories
  const shuffledCategories = selectedCategories.sort(() => Math.random() - 0.5);
  const categoriesToUse = shuffledCategories.slice(0, numCategories);

  categoriesToUse.forEach(categoryName => {
    const category = allCategories[categoryName];
    // Get a random subcategory
    const subcategories = Object.keys(category);
    const randomSubcategory = subcategories[Math.floor(Math.random() * subcategories.length)];
    // Get a random word from the subcategory
    const words = category[randomSubcategory];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    selectedWords.push(randomWord);
  });

  // Shuffle the selected words and join them
  return selectedWords.sort(() => Math.random() - 0.5).join(' ');
}
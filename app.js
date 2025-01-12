document.addEventListener('DOMContentLoaded', function() {
  const room = new WebsimSocket();
  let currentPrompt = '';
  let selectedWords = new Set();

  // Mode switching
  const simpleModeBtn = document.getElementById('simpleMode');
  const advancedModeBtn = document.getElementById('advancedMode');
  const simpleInterface = document.getElementById('simpleInterface');
  const advancedInterface = document.getElementById('advancedInterface');

  simpleModeBtn.addEventListener('click', () => {
    simpleModeBtn.classList.add('active');
    advancedModeBtn.classList.remove('active');
    simpleInterface.classList.remove('hidden');
    advancedInterface.classList.add('hidden');
  });

  advancedModeBtn.addEventListener('click', () => {
    advancedModeBtn.classList.add('active');
    simpleModeBtn.classList.remove('active');
    advancedInterface.classList.remove('hidden');
    simpleInterface.classList.add('hidden');
    initializeAdvancedMode();
  });

  // Initialize Advanced Mode
  function initializeAdvancedMode() {
    const categoryList = document.getElementById('categoryList');
    const subcategoryList = document.getElementById('subcategoryList');
    const wordList = document.getElementById('wordList');
    const selectedWordsList = document.getElementById('selectedWordsList');

    categoryList.innerHTML = '';
    Object.keys(allCategories).forEach(category => {
      const div = document.createElement('div');
      div.className = 'category-item';
      div.textContent = category;
      div.addEventListener('click', () => showSubcategories(category));
      categoryList.appendChild(div);
    });

    function showSubcategories(category) {
      subcategoryList.innerHTML = '';
      const subcategories = allCategories[category];
      Object.keys(subcategories).forEach(subcategory => {
        const div = document.createElement('div');
        div.className = 'subcategory-item';
        div.textContent = subcategory;
        div.addEventListener('click', () => showWords(category, subcategory));
        subcategoryList.appendChild(div);
      });
    }

    function showWords(category, subcategory) {
      wordList.innerHTML = '';
      const words = allCategories[category][subcategory];
      words.forEach(word => {
        const div = document.createElement('div');
        div.className = 'word-item';
        if (selectedWords.has(word)) div.classList.add('selected');
        div.textContent = word;
        div.addEventListener('click', () => toggleWordSelection(word, div));
        wordList.appendChild(div);
      });
    }

    function toggleWordSelection(word, element) {
      if (selectedWords.has(word)) {
        selectedWords.delete(word);
        element.classList.remove('selected');
      } else {
        selectedWords.add(word);
        element.classList.add('selected');
      }
      updateSelectedWordsList();
    }

    function updateSelectedWordsList() {
      selectedWordsList.innerHTML = '';
      selectedWords.forEach(word => {
        const div = document.createElement('div');
        div.className = 'selected-word-item';
        div.textContent = word;
        div.addEventListener('click', () => {
          selectedWords.delete(word);
          updateSelectedWordsList();
          // Update word list selection state if visible
          const wordItems = wordList.querySelectorAll('.word-item');
          wordItems.forEach(item => {
            if (item.textContent === word) {
              item.classList.remove('selected');
            }
          });
        });
        selectedWordsList.appendChild(div);
      });
    }

    document.getElementById('generateFromSelected').addEventListener('click', () => {
      if (selectedWords.size === 0) {
        alert('Please select at least one word!');
        return;
      }
      const output = Array.from(selectedWords).sort(() => Math.random() - 0.5).join(' ');
      currentPrompt = output;
      updateOutput(output);
    });
  }

  // Simple Mode Implementation
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

  const wordCountSlider = document.getElementById('wordCountSlider');
  const wordCountDisplay = document.getElementById('wordCountDisplay');
  
  wordCountSlider.addEventListener('input', function() {
    wordCountDisplay.textContent = this.value;
  });

  function updateOutput(text) {
    const outputElement = document.getElementById('output');
    const outputTextElement = outputElement.querySelector('.output-text');
    outputTextElement.textContent = text;
    outputElement.classList.remove('animate');
    void outputElement.offsetWidth;
    outputElement.classList.add('animate');
  }

  document.getElementById('generateBtn').addEventListener('click', function() {
    const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);
    
    if (selectedCategories.length === 0) {
      alert('Please select at least one category!');
      return;
    }

    const wordCount = parseInt(wordCountSlider.value);
    const output = generatePrompt(selectedCategories, allCategories, wordCount);
    currentPrompt = output;
    updateOutput(output);
  });

  // File upload functionality
  const audioUpload = document.getElementById('audioUpload');
  const uploadBtn = document.getElementById('uploadBtn');

  audioUpload.addEventListener('change', function() {
    uploadBtn.disabled = !this.files.length;
  });

  uploadBtn.addEventListener('click', async function() {
    if (!audioUpload.files.length) return;
    
    const file = audioUpload.files[0];
    try {
      uploadBtn.disabled = true;
      uploadBtn.textContent = 'Uploading...';
      
      const audioUrl = await websim.upload(file);
      
      await room.collection('audio_entries').create({
        prompt: currentPrompt,
        audioUrl: audioUrl,
        timestamp: new Date().toISOString()
      });
      
      audioUpload.value = '';
      uploadBtn.textContent = 'Upload';
      uploadBtn.disabled = true;
      
    } catch (error) {
      console.error('Upload failed:', error);
      uploadBtn.textContent = 'Upload Failed';
      setTimeout(() => {
        uploadBtn.textContent = 'Upload';
        uploadBtn.disabled = false;
      }, 2000);
    }
  });

  // Gallery subscription
  room.collection('audio_entries').subscribe(function(entries) {
    const gallery = document.getElementById('audioGallery');
    gallery.innerHTML = '';
    
    entries.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .forEach(entry => {
        const audioEntry = document.createElement('div');
        audioEntry.className = 'audio-entry';
        
        const prompt = document.createElement('div');
        prompt.className = 'prompt';
        prompt.textContent = entry.prompt;
        
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = entry.audioUrl;
        
        const timestamp = document.createElement('div');
        timestamp.className = 'timestamp';
        timestamp.textContent = new Date(entry.created_at).toLocaleString();
        
        audioEntry.appendChild(prompt);
        audioEntry.appendChild(audio);
        audioEntry.appendChild(timestamp);
        gallery.appendChild(audioEntry);
      });
  });

  // Clipboard functionality
  const outputBox = document.getElementById('output');
  outputBox.addEventListener('click', async function() {
    const text = this.querySelector('.output-text').textContent;
    if (!text) return;
    
    try {
      await navigator.clipboard.writeText(text);
      this.classList.add('copied');
      setTimeout(() => this.classList.remove('copied'), 500);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  });

  // Select/Deselect All buttons
  document.getElementById('selectAllBtn').addEventListener('click', function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = true);
  });

  document.getElementById('deselectAllBtn').addEventListener('click', function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
  });
});

const allCategories = {
  'Tempo & Rhythm': {
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
  },
  'Emotional Qualities': {
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
  },
  'Texture & Timbre': {
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
  },
  'Genre Foundations': {
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
  },
  'Production Styles': {
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
  },
  'Atmospheric Elements': {
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
  },
  'Cultural Influences': {
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
  },
  'Composition': {
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
  },
  'Effects': {
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
  },
  'Hybrid Styles': {
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
  },
  'Time Periods': {
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
  }
};

function generatePrompt(selectedCategories, allCategories, wordCount) {
  const selectedWords = [];
  const iterations = Math.min(wordCount, selectedCategories.length);
  const shuffledCategories = selectedCategories.sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < wordCount; i++) {
    const categoryName = shuffledCategories[i % iterations];
    const category = allCategories[categoryName];
    const subcategories = Object.keys(category);
    const randomSubcategory = subcategories[Math.floor(Math.random() * subcategories.length)];
    const words = category[randomSubcategory];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    selectedWords.push(randomWord);
  }

  return selectedWords.sort(() => Math.random() - 0.5).join(' ');
}
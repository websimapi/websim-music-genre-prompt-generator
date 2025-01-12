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

  // Add word count slider functionality
  const wordCountSlider = document.getElementById('wordCountSlider');
  const wordCountDisplay = document.getElementById('wordCountDisplay');
  
  wordCountSlider.addEventListener('input', function() {
    wordCountDisplay.textContent = this.value;
  });

  // Add file upload functionality
  const audioUpload = document.getElementById('audioUpload');
  const uploadBtn = document.getElementById('uploadBtn');
  let currentPrompt = '';
  const room = new WebsimSocket();

  audioUpload.addEventListener('change', function() {
    uploadBtn.disabled = !this.files.length;
  });

  uploadBtn.addEventListener('click', async function() {
    if (!audioUpload.files.length) return;
    
    const file = audioUpload.files[0];
    try {
      uploadBtn.disabled = true;
      uploadBtn.textContent = 'Uploading...';
      
      // Upload the file to S3
      const audioUrl = await websim.upload(file);
      
      // Create a record in the collection
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

  // Subscribe to audio entries and update gallery
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

  // Add category dropdown population
  const categorySelect = document.getElementById('categorySelect');
  Object.keys(allCategories).forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  // Handle category selection change
  categorySelect.addEventListener('change', function() {
    const selectedCategory = this.value;
    const wordsListContainer = document.getElementById('wordsList');
    wordsListContainer.innerHTML = '';

    if (selectedCategory) {
      const category = allCategories[selectedCategory];
      Object.entries(category).forEach(([subcategory, words]) => {
        // Add subcategory header
        const headerDiv = document.createElement('div');
        headerDiv.className = 'subcategory-header';
        headerDiv.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
        wordsListContainer.appendChild(headerDiv);

        // Add words with checkboxes
        words.forEach(word => {
          const wordDiv = document.createElement('div');
          wordDiv.className = 'word-item';
          
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = `word-${word}`;
          checkbox.checked = true; // Default to checked
          checkbox.dataset.category = selectedCategory;
          checkbox.dataset.subcategory = subcategory;
          checkbox.dataset.word = word;
          
          const label = document.createElement('label');
          label.htmlFor = checkbox.id;
          label.textContent = word;
          
          wordDiv.appendChild(checkbox);
          wordDiv.appendChild(label);
          wordsListContainer.appendChild(wordDiv);
        });
      });
    }
  });

  // Generate button click handler
  document.getElementById('generateBtn').addEventListener('click', function() {
    const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);
    
    if (selectedCategories.length === 0) {
      alert('Please select at least one category!');
      return;
    }

    const wordCount = parseInt(wordCountSlider.value);
    const output = generatePrompt(selectedCategories, allCategories, wordCount);
    currentPrompt = output; // Store the current prompt
    
    const outputElement = document.getElementById('output');
    const outputTextElement = outputElement.querySelector('.output-text');
    outputTextElement.textContent = output;
    outputElement.classList.remove('animate');
    void outputElement.offsetWidth; // Trigger reflow
    outputElement.classList.add('animate');
  });

  function generatePrompt(selectedCategories, allCategories, wordCount) {
    const availableWords = [];
    
    selectedCategories.forEach(categoryName => {
      const category = allCategories[categoryName];
      Object.entries(category).forEach(([subcategory, words]) => {
        words.forEach(word => {
          const checkbox = document.querySelector(`input[data-category="${categoryName}"][data-subcategory="${subcategory}"][data-word="${word}"]`);
          if (!checkbox || checkbox.checked) {
            availableWords.push(word);
          }
        });
      });
    });

    if (availableWords.length === 0) {
      return "Please enable some words or select different categories";
    }

    const selectedWords = [];
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * availableWords.length);
      selectedWords.push(availableWords[randomIndex]);
    }

    return selectedWords.join(' ');
  }

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
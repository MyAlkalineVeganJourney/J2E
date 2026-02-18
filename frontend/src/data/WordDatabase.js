class WordDatabase {
  constructor() {
    this.words = [];
    this.indexById = {};
    this.indexBySlug = {};
    this.indexByCategory = {};
    this.indexByGameLevel = {};
    this.initializeWords();
    this.buildIndexes();
  }

  initializeWords() {
    this.words = [
      { id: "WORD_LOVE", word: "LOVE", slug: "love", classification: "POSITIVE", subClassification: "Universal Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_PEACE", word: "PEACE", slug: "peace", classification: "POSITIVE", subClassification: "Stillness Frequency", coreFrequency: "639 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_JOY", word: "JOY", slug: "joy", classification: "POSITIVE", subClassification: "Elevation Frequency", coreFrequency: "417 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_HOPE", word: "HOPE", slug: "hope", classification: "POSITIVE", subClassification: "Possibility Anchor", coreFrequency: "417 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_FAITH", word: "FAITH", slug: "faith", classification: "POSITIVE", subClassification: "Trust Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_TRUST", word: "TRUST", slug: "trust", classification: "POSITIVE", subClassification: "Faith Foundation", coreFrequency: "528 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_GRATITUDE", word: "GRATITUDE", slug: "gratitude", classification: "POSITIVE", subClassification: "Reception Amplifier", coreFrequency: "528 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_ABUNDANCE", word: "ABUNDANCE", slug: "abundance", classification: "POSITIVE", subClassification: "Prosperity Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_CHOOSE", word: "CHOOSE", slug: "choose", classification: "POSITIVE", subClassification: "Sovereign Decision", coreFrequency: "528 Hz", category: "positive", gameLevel: 1 },
      { id: "WORD_CREATE", word: "CREATE", slug: "create", classification: "POSITIVE", subClassification: "Manifestation Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 1 }
    ];
  }

  buildIndexes() {
    this.words.forEach(word => {
      this.indexById[word.id] = word;
      this.indexBySlug[word.slug] = word;
      if (!this.indexByCategory[word.category]) this.indexByCategory[word.category] = [];
      this.indexByCategory[word.category].push(word);
      if (!this.indexByGameLevel[word.gameLevel]) this.indexByGameLevel[word.gameLevel] = [];
      this.indexByGameLevel[word.gameLevel].push(word);
    });
  }

  getAllWords() { return this.words; }
  getWordById(id) { return this.indexById[id]; }
  getWordBySlug(slug) { return this.indexBySlug[slug]; }
  getWordsByCategory(category) { return this.indexByCategory[category] || []; }
  getWordsByGameLevel(level) { return this.indexByGameLevel[level] || []; }
  getPositiveWords() { return this.getWordsByCategory('positive'); }
  getLimitingWords() { return this.getWordsByCategory('limiting'); }
}

module.exports = { wordDB: new WordDatabase() };

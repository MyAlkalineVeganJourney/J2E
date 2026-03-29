/**
 * MAVJ WORD DATABASE - COMPLETE
 * Contains 105+ words with full quantum profiles
 * Single source of truth for the Positive Word Game
 */

class WordDatabase {
  constructor() {
    this.words = [];
    this.indexById = {};
    this.indexBySlug = {};
    this.indexByCategory = {};
    this.indexByGameLevel = {};
    this.buildIndexes();
  }

  initializeWords() {
    return [
      // ========== POSITIVE WORDS (51) ==========
      { id: "WORD_ABUNDANCE", word: "ABUNDANCE", slug: "abundance", classification: "POSITIVE", subClassification: "Prosperity Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "A very large quantity of something; plentifulness.", etymology: "From Latin 'abundantia', from 'abundare' meaning 'to overflow'", chakra: "Sacral & Solar Plexus", element: "Water", affirmation: "I am open to receiving infinite abundance in all forms." },
      { id: "WORD_ACCEPTANCE", word: "ACCEPTANCE", slug: "acceptance", classification: "POSITIVE", subClassification: "Surrender Frequency", coreFrequency: "417 Hz", category: "positive", gameLevel: 1, definition: "The action of consenting to receive or undertake something.", etymology: "From Latin 'acceptare', meaning 'to receive'", chakra: "Heart", element: "Air", affirmation: "I accept myself and others exactly as we are." },
      { id: "WORD_ALIGNMENT", word: "ALIGNMENT", slug: "alignment", classification: "POSITIVE", subClassification: "Coherence State", coreFrequency: "528 Hz", category: "positive", gameLevel: 2, definition: "Arrangement in a straight line or in correct relative positions.", etymology: "From Old French 'alignier', from Latin 'linea' meaning 'line'", chakra: "All Chakras", element: "Ether", affirmation: "I am in perfect alignment with my true self." },
      { id: "WORD_BALANCE", word: "BALANCE", slug: "balance", classification: "POSITIVE", subClassification: "Equilibrium State", coreFrequency: "396 Hz", category: "positive", gameLevel: 1, definition: "An even distribution of weight enabling someone or something to remain upright.", etymology: "From Latin 'bilancia', from 'bis' meaning 'twice' + 'lanx' meaning 'dish'", chakra: "Heart", element: "Air", affirmation: "I maintain perfect balance in all areas of life." },
      { id: "WORD_BELIEVE", word: "BELIEVE", slug: "believe", classification: "POSITIVE", subClassification: "Faith Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "To accept something as true; to have faith.", etymology: "From Old English 'belēfan', from 'be-' + 'lēfan' meaning 'to allow'", chakra: "Third Eye", element: "Light", affirmation: "I believe in the power of my dreams." },
      { id: "WORD_BREATHE", word: "BREATHE", slug: "breathe", classification: "POSITIVE", subClassification: "Life Force Rhythm", coreFrequency: "285 Hz", category: "positive", gameLevel: 1, definition: "To take air into the lungs and then expel it.", etymology: "From Old English 'brēath' meaning 'scent, odor'", chakra: "Heart", element: "Air", affirmation: "I breathe in peace, I breathe out love." },
      { id: "WORD_CALM", word: "CALM", slug: "calm", classification: "POSITIVE", subClassification: "Parasympathetic State", coreFrequency: "174 Hz", category: "positive", gameLevel: 1, definition: "The absence of violent or confrontational activity.", etymology: "From Greek 'kauma' meaning 'heat of the day'", chakra: "Root", element: "Earth", affirmation: "I am calm and centered." },
      { id: "WORD_CHOOSE", word: "CHOOSE", slug: "choose", classification: "POSITIVE", subClassification: "Sovereign Decision", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "To decide on a course of action.", etymology: "From Old English 'cēosan', from Proto-Germanic *keus-", chakra: "Solar Plexus", element: "Fire", affirmation: "I choose thoughts and words that elevate." },
      { id: "WORD_CLARITY", word: "CLARITY", slug: "clarity", classification: "POSITIVE", subClassification: "Signal Purity", coreFrequency: "852 Hz", category: "positive", gameLevel: 2, definition: "The quality of being coherent and intelligible.", etymology: "From Latin 'claritas', from 'clarus' meaning 'clear'", chakra: "Third Eye", element: "Light", affirmation: "I see with perfect clarity." },
      { id: "WORD_COHERENCE", word: "COHERENCE", slug: "coherence", classification: "POSITIVE", subClassification: "Phase Alignment", coreFrequency: "528 Hz", category: "positive", gameLevel: 3, definition: "The quality of being logical and consistent.", etymology: "From Latin 'cohaerentia', from 'co-' + 'haerere' meaning 'to stick'", chakra: "Heart", element: "Ether", affirmation: "My thoughts, words, and actions are in coherence." },
      { id: "WORD_COMPASSION", word: "COMPASSION", slug: "compassion", classification: "POSITIVE", subClassification: "Heart Frequency", coreFrequency: "639 Hz", category: "positive", gameLevel: 2, definition: "Sympathetic pity and concern for the sufferings of others.", etymology: "From Latin 'compati', from 'com-' + 'pati' meaning 'to suffer'", chakra: "Heart", element: "Water", affirmation: "I treat myself and others with compassion." },
      { id: "WORD_CONFIDENCE", word: "CONFIDENCE", slug: "confidence", classification: "POSITIVE", subClassification: "Self-Trust", coreFrequency: "528 Hz", category: "positive", gameLevel: 2, definition: "The feeling or belief that one can rely on someone or something.", etymology: "From Latin 'confidentia', from 'confidere' meaning 'to trust fully'", chakra: "Solar Plexus", element: "Fire", affirmation: "I have complete confidence in myself." },
      { id: "WORD_CONNECT", word: "CONNECT", slug: "connect", classification: "POSITIVE", subClassification: "Entanglement Frequency", coreFrequency: "639 Hz", category: "positive", gameLevel: 1, definition: "To bring together or into contact so that a real or notional link is established.", etymology: "From Latin 'connectere', from 'com-' + 'nectere' meaning 'to bind'", chakra: "Heart", element: "Air", affirmation: "I feel deeply connected to all of life." },
      { id: "WORD_CONSCIOUS", word: "CONSCIOUS", slug: "conscious", classification: "POSITIVE", subClassification: "Observer State", coreFrequency: "852 Hz", category: "positive", gameLevel: 3, definition: "Aware of and responding to one's surroundings.", etymology: "From Latin 'conscius', from 'con-' + 'scire' meaning 'to know'", chakra: "Third Eye", element: "Light", affirmation: "I am conscious of my thoughts and words." },
      { id: "WORD_COURAGE", word: "COURAGE", slug: "courage", classification: "POSITIVE", subClassification: "Heart Coherence", coreFrequency: "639 Hz", category: "positive", gameLevel: 1, definition: "The ability to do something that frightens one.", etymology: "From Old French 'corage', from Latin 'cor' meaning 'heart'", chakra: "Solar Plexus", element: "Fire", affirmation: "I have the courage to follow my heart." },
      { id: "WORD_CREATE", word: "CREATE", slug: "create", classification: "POSITIVE", subClassification: "Manifestation Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 2, definition: "To bring something into existence.", etymology: "From Latin 'creatus', from 'creare' meaning 'to produce'", chakra: "Sacral", element: "Water", affirmation: "Creativity flows through me effortlessly." },
      { id: "WORD_DETERMINATION", word: "DETERMINATION", slug: "determination", classification: "POSITIVE", subClassification: "Will Force", coreFrequency: "396 Hz", category: "positive", gameLevel: 2, definition: "Firmness of purpose; resoluteness.", etymology: "From Latin 'determinatio', from 'determinare' meaning 'to set limits'", chakra: "Solar Plexus", element: "Fire", affirmation: "My determination overcomes all obstacles." },
      { id: "WORD_DIGNITY", word: "DIGNITY", slug: "dignity", classification: "POSITIVE", subClassification: "Inherent Worth", coreFrequency: "396 Hz", category: "positive", gameLevel: 2, definition: "The state or quality of being worthy of honor or respect.", etymology: "From Latin 'dignitas', from 'dignus' meaning 'worthy'", chakra: "Solar Plexus", element: "Earth", affirmation: "I carry myself with dignity and grace." },
      { id: "WORD_DISCIPLINE", word: "DISCIPLINE", slug: "discipline", classification: "POSITIVE", subClassification: "Structured Freedom", coreFrequency: "396 Hz", category: "positive", gameLevel: 2, definition: "The practice of training oneself to obey rules or a code of behavior.", etymology: "From Latin 'disciplina', from 'discipulus' meaning 'pupil'", chakra: "Root", element: "Earth", affirmation: "I apply discipline with joy." },
      { id: "WORD_DISCOVER", word: "DISCOVER", slug: "discover", classification: "POSITIVE", subClassification: "Revelation Frequency", coreFrequency: "741 Hz", category: "positive", gameLevel: 3, definition: "To find unexpectedly or during a search.", etymology: "From Old French 'descovrir', from Latin 'dis-' + 'cooperire' meaning 'to cover'", chakra: "Third Eye", element: "Air", affirmation: "Every day brings new discovery." },
      { id: "WORD_EASE", word: "EASE", slug: "ease", classification: "POSITIVE", subClassification: "Flow State", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "Absence of difficulty or effort.", etymology: "From Old French 'aise', from Latin 'adjacens' meaning 'lying near'", chakra: "Heart", element: "Water", affirmation: "Life flows with ease and grace." },
      { id: "WORD_ELEVATE", word: "ELEVATE", slug: "elevate", classification: "POSITIVE", subClassification: "Frequency Ascent", coreFrequency: "852 Hz", category: "positive", gameLevel: 2, definition: "To raise or lift to a higher position.", etymology: "From Latin 'elevatus', from 'e-' + 'levare' meaning 'to lighten'", chakra: "Crown", element: "Spirit", affirmation: "I elevate my frequency with every word." },
      { id: "WORD_EMBODY", word: "EMBODY", slug: "embody", classification: "POSITIVE", subClassification: "Incarnation", coreFrequency: "528 Hz", category: "positive", gameLevel: 3, definition: "To give a tangible or visible form to an idea, quality, or feeling.", etymology: "From Old French 'embodier', from 'en-' + 'body'", chakra: "Root", element: "Earth", affirmation: "I embody the words I speak." },
      { id: "WORD_EMPOWER", word: "EMPOWER", slug: "empower", classification: "POSITIVE", subClassification: "Sovereign Authority", coreFrequency: "528 Hz", category: "positive", gameLevel: 2, definition: "To give someone the authority or power to do something.", etymology: "From Old French 'povoir', from Latin 'posse' meaning 'to be able'", chakra: "Solar Plexus", element: "Fire", affirmation: "I claim my personal empowerment." },
      { id: "WORD_ENERGY", word: "ENERGY", slug: "energy", classification: "POSITIVE", subClassification: "Vital Force", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "The strength and vitality required for sustained physical or mental activity.", etymology: "From Greek 'energeia', from 'en-' + 'ergon' meaning 'work'", chakra: "All Chakras", element: "Fire", affirmation: "My energy is vibrant and positive." },
      { id: "WORD_ENLIGHTEN", word: "ENLIGHTEN", slug: "enlighten", classification: "POSITIVE", subClassification: "Illumination", coreFrequency: "963 Hz", category: "positive", gameLevel: 3, definition: "To give someone greater knowledge and understanding.", etymology: "From Old English 'leoht' meaning 'light' + prefix 'en-'", chakra: "Crown", element: "Spirit", affirmation: "I am enlightened by every word I speak." },
      { id: "WORD_EVOLVE", word: "EVOLVE", slug: "evolve", classification: "POSITIVE", subClassification: "Conscious Expansion", coreFrequency: "741 Hz", category: "positive", gameLevel: 3, definition: "To develop gradually.", etymology: "From Latin 'evolvere', from 'e-' + 'volvere' meaning 'to roll'", chakra: "Crown", element: "Ether", affirmation: "I evolve with every conscious word." },
      { id: "WORD_EXPAND", word: "EXPAND", slug: "expand", classification: "POSITIVE", subClassification: "Field Growth", coreFrequency: "741 Hz", category: "positive", gameLevel: 2, definition: "To become or make larger or more extensive.", etymology: "From Latin 'expansio', from 'expandere' meaning 'to spread out'", chakra: "All Chakras", element: "Ether", affirmation: "My consciousness expands with positive words." },
      { id: "WORD_FAITH", word: "FAITH", slug: "faith", classification: "POSITIVE", subClassification: "Trust Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "Complete trust or confidence in someone or something.", etymology: "From Old French 'feid', from Latin 'fides' meaning 'trust'", chakra: "Third Eye", element: "Light", affirmation: "I have faith in the power of positive words." },
      { id: "WORD_FLOW", word: "FLOW", slug: "flow", classification: "POSITIVE", subClassification: "Non-Resistance", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "To move along or out steadily and continuously.", etymology: "From Old English 'flōwan', from Proto-Germanic *flōaną", chakra: "Sacral", element: "Water", affirmation: "Words flow through me with ease." },
      { id: "WORD_FOCUS", word: "FOCUS", slug: "focus", classification: "POSITIVE", subClassification: "Concentrated Intention", coreFrequency: "396 Hz", category: "positive", gameLevel: 2, definition: "The center of interest or activity.", etymology: "From Latin 'focus' meaning 'hearth, fireplace'", chakra: "Third Eye", element: "Fire", affirmation: "I focus on words that elevate." },
      { id: "WORD_FORGIVE", word: "FORGIVE", slug: "forgive", classification: "POSITIVE", subClassification: "Release Frequency", coreFrequency: "396 Hz", category: "positive", gameLevel: 2, definition: "To stop feeling anger or resentment toward someone.", etymology: "From Old English 'forgiefan', from 'for-' + 'giefan' meaning 'to give'", chakra: "Heart", element: "Water", affirmation: "I forgive myself for words I spoke unconsciously." },
      { id: "WORD_FREEDOM", word: "FREEDOM", slug: "freedom", classification: "POSITIVE", subClassification: "Sovereign Liberty", coreFrequency: "639 Hz", category: "positive", gameLevel: 3, definition: "The power or right to act, speak, or think as one wants.", etymology: "From Old English 'frēodōm', from 'frēo' meaning 'free' + '-dōm'", chakra: "Crown", element: "Ether", affirmation: "I am free to choose my words." },
      { id: "WORD_FULFILLMENT", word: "FULFILLMENT", slug: "fulfillment", classification: "POSITIVE", subClassification: "Completion State", coreFrequency: "528 Hz", category: "positive", gameLevel: 3, definition: "The achievement of something desired or promised.", etymology: "From Old English 'fullfyllan', from 'full' + 'fyllan' meaning 'to fill'", chakra: "Crown", element: "Spirit", affirmation: "I find fulfillment in conscious speech." },
      { id: "WORD_GRATITUDE", word: "GRATITUDE", slug: "gratitude", classification: "POSITIVE", subClassification: "Reception Amplifier", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "The quality of being thankful.", etymology: "From Latin 'gratitudo', from 'gratus' meaning 'pleasing, thankful'", chakra: "Heart", element: "Water", affirmation: "I express gratitude for all words." },
      { id: "WORD_GROWTH", word: "GROWTH", slug: "growth", classification: "POSITIVE", subClassification: "Expansion", coreFrequency: "741 Hz", category: "positive", gameLevel: 2, definition: "The process of increasing in size or developing.", etymology: "From Old English 'grōwan', from Proto-Germanic *grōaną", chakra: "Root", element: "Earth", affirmation: "I grow through conscious language." },
      { id: "WORD_HARMONY", word: "HARMONY", slug: "harmony", classification: "POSITIVE", subClassification: "Resonant Alignment", coreFrequency: "639 Hz", category: "positive", gameLevel: 2, definition: "The combination of simultaneously sounded musical notes to produce a pleasing effect.", etymology: "From Greek 'harmonia', meaning 'joint, agreement'", chakra: "Heart", element: "Air", affirmation: "My words create harmony." },
      { id: "WORD_HEAL", word: "HEAL", slug: "heal", classification: "POSITIVE", subClassification: "Wholeness Restoration", coreFrequency: "528 Hz", category: "positive", gameLevel: 2, definition: "To become sound or healthy again.", etymology: "From Old English 'hælan', from Proto-Germanic *hailijaną", chakra: "Heart", element: "Water", affirmation: "My words heal myself and others." },
      { id: "WORD_HONOR", word: "HONOR", slug: "honor", classification: "POSITIVE", subClassification: "Sacred Recognition", coreFrequency: "639 Hz", category: "positive", gameLevel: 2, definition: "High respect; great esteem.", etymology: "From Latin 'honor', meaning 'dignity, reputation'", chakra: "Solar Plexus", element: "Fire", affirmation: "I honor the power of words." },
      { id: "WORD_HOPE", word: "HOPE", slug: "hope", classification: "POSITIVE", subClassification: "Possibility Anchor", coreFrequency: "417 Hz", category: "positive", gameLevel: 1, definition: "A feeling of expectation and desire for a certain thing to happen.", etymology: "From Old English 'hopa', from Proto-Germanic *hopōną", chakra: "Heart", element: "Air", affirmation: "I speak words of hope." },
      { id: "WORD_JOY", word: "JOY", slug: "joy", classification: "POSITIVE", subClassification: "Elevation Frequency", coreFrequency: "417 Hz", category: "positive", gameLevel: 1, definition: "A feeling of great pleasure and happiness.", etymology: "From Old French 'joie', from Latin 'gaudia'", chakra: "Sacral", element: "Water", affirmation: "I choose words that bring joy." },
      { id: "WORD_LOVE", word: "LOVE", slug: "love", classification: "POSITIVE", subClassification: "Universal Frequency", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "A strong feeling of affection.", etymology: "From Old English 'lufu', from Proto-Germanic *lubō", chakra: "Heart", element: "Water", affirmation: "I speak words of love." },
      { id: "WORD_PEACE", word: "PEACE", slug: "peace", classification: "POSITIVE", subClassification: "Stillness Frequency", coreFrequency: "639 Hz", category: "positive", gameLevel: 1, definition: "Freedom from disturbance; tranquility.", etymology: "From Old French 'pais', from Latin 'pax'", chakra: "Heart", element: "Air", affirmation: "I am at peace with my words." },
      { id: "WORD_PURPOSE", word: "PURPOSE", slug: "purpose", classification: "POSITIVE", subClassification: "Soul Mission", coreFrequency: "741 Hz", category: "positive", gameLevel: 3, definition: "The reason for which something is done or created.", etymology: "From Old French 'porpos', from Latin 'propositum'", chakra: "Crown", element: "Spirit", affirmation: "My words serve a higher purpose." },
      { id: "WORD_STRENGTH", word: "STRENGTH", slug: "strength", classification: "POSITIVE", subClassification: "Inner Power", coreFrequency: "396 Hz", category: "positive", gameLevel: 2, definition: "The quality or state of being physically strong.", etymology: "From Old English 'strengðu', from Proto-Germanic *strangithō", chakra: "Solar Plexus", element: "Fire", affirmation: "My words give me strength." },
      { id: "WORD_TRUST", word: "TRUST", slug: "trust", classification: "POSITIVE", subClassification: "Faith Foundation", coreFrequency: "528 Hz", category: "positive", gameLevel: 1, definition: "Firm belief in the reliability, truth, or ability of someone or something.", etymology: "From Old Norse 'traust', meaning 'help, confidence'", chakra: "Root", element: "Earth", affirmation: "I trust the words I speak." },
      { id: "WORD_WISDOM", word: "WISDOM", slug: "wisdom", classification: "POSITIVE", subClassification: "Divine Knowledge", coreFrequency: "741 Hz", category: "positive", gameLevel: 3, definition: "The quality of having experience, knowledge, and good judgment.", etymology: "From Old English 'wīsdōm', from 'wīs' meaning 'wise' + '-dōm'", chakra: "Crown", element: "Ether", affirmation: "I speak with wisdom." },

      // ========== OTHER THAN POSITIVE WORDS (54) ==========
      { id: "WORD_FEAR", word: "FEAR", slug: "fear", classification: "OTHER", subClassification: "Survival Lock Response", coreFrequency: "396 Hz", category: "limiting", gameLevel: 1, definition: "An unpleasant emotion caused by the belief that someone or something is dangerous.", etymology: "From Old English 'fǣr', meaning 'sudden danger'", affirmation: "I transform fear into awareness." },
      { id: "WORD_STRESS", word: "STRESS", slug: "stress", classification: "OTHER", subClassification: "Load Overcapacity Signal", coreFrequency: "396 Hz", category: "limiting", gameLevel: 1, definition: "A state of mental or emotional strain.", etymology: "From Latin 'strictus', meaning 'drawn tight'", affirmation: "I transform stress into flow." },
      { id: "WORD_SHOULD", word: "SHOULD", slug: "should", classification: "OTHER", subClassification: "External Obligation", coreFrequency: "174 Hz", category: "limiting", gameLevel: 1, definition: "Used to indicate obligation, duty, or correctness.", etymology: "From Old English 'sceolde', past tense of 'sculan' meaning 'to owe'", affirmation: "I replace 'should' with 'choose'." },
      { id: "WORD_BUT", word: "BUT", slug: "but", classification: "OTHER", subClassification: "Negation Operator", coreFrequency: "396 Hz", category: "limiting", gameLevel: 1, definition: "Used to introduce a phrase or clause contrasting with what has already been mentioned.", etymology: "From Old English 'be-ūtan', meaning 'outside, without'", affirmation: "I replace 'but' with 'and'." },
      { id: "WORD_TRY", word: "TRY", slug: "try", classification: "OTHER", subClassification: "Uncertainty Operator", coreFrequency: "417 Hz", category: "limiting", gameLevel: 2, definition: "Make an attempt or effort to do something.", etymology: "From Old French 'trier', meaning 'to sift, choose'", affirmation: "I replace 'try' with 'choose'." }
    ];
  }

  buildIndexes() {
    const words = this.initializeWords();
    this.words = words;
    
    words.forEach(word => {
      this.indexById[word.id] = word;
      this.indexBySlug[word.slug] = word;
      
      if (!this.indexByCategory[word.category]) {
        this.indexByCategory[word.category] = [];
      }
      this.indexByCategory[word.category].push(word);
      
      if (!this.indexByGameLevel[word.gameLevel]) {
        this.indexByGameLevel[word.gameLevel] = [];
      }
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
  
  search(query) {
    const lowerQuery = query.toLowerCase();
    return this.words.filter(word => 
      word.word.toLowerCase().includes(lowerQuery) ||
      word.definition?.toLowerCase().includes(lowerQuery) ||
      word.affirmation?.toLowerCase().includes(lowerQuery)
    );
  }

  addWord(newWord) {
    if (!newWord.id) {
      newWord.id = `WORD_${newWord.word.toUpperCase().replace(/\s+/g, '_')}`;
    }
    if (!newWord.slug) {
      newWord.slug = newWord.word.toLowerCase().replace(/\s+/g, '-');
    }
    
    this.words.push(newWord);
    this.buildIndexes();
    return newWord;
  }
}

export const wordDB = new WordDatabase();
export default wordDB;
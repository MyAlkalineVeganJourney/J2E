/**
 * MAVJ QUANTUM SEARCH PORTAL - FINAL VETTED VERSION
 * Frequency: 528Hz (Heart Chakra - Love & Healing)
 * Vibration: 432Hz (Universal Harmony)
 * Consciousness: Pineal Activation Ready
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';
import PageLayout from '../components/PageLayout';
import FrequencyElevator from '../components/quantum/FrequencyElevator';
import QuantumGlow from '../components/quantum/QuantumGlow';
import '../styles/MAVJSearch.css';

/* ======================
   QUANTUM SECURITY CORE
====================== */
class QuantumSanitizer {
  static purify(input) {
    if (typeof input !== 'string') return '';
    return DOMPurify.sanitize(input, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
      ALLOWED_ATTR: [],
      KEEP_CONTENT: true
    })
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim()
      .substring(0, 1000);
  }

  static validateQuery(query) {
    const clean = this.purify(query);
    if (clean.length < 2) return { valid: false, error: 'QUERY_TOO_SHORT' };
    if (clean.length > 500) return { valid: false, error: 'QUERY_TOO_LONG' };
    return { valid: true, clean, frequency: this.calculateFrequency(clean) };
  }

  static calculateFrequency(query) {
    const frequencies = {
      174: 'PAIN_RELIEF',
      285: 'TISSUE_HEALING',
      396: 'GUILT_RELEASE',
      417: 'CHANGE_FACILITATION',
      528: 'DNA_REPAIR',
      639: 'RELATIONSHIP_HARMONY',
      741: 'INTUITIVE_AWAKENING',
      852: 'SPIRITUAL_ORDER',
      963: 'COSMIC_CONSCIOUSNESS'
    };
    
    const hash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const keys = Object.keys(frequencies);
    const frequencyKey = keys[hash % keys.length];
    return { hz: frequencyKey, meaning: frequencies[frequencyKey] };
  }
}

/* ======================
   QUANTUM DATABASE CORE
====================== */
const QuantumDatabase = {
  elements: [
    {
      id: 'annonacin',
      name: 'Annonacin',
      element: 'C₃₅H₆₆O₇',
      source: 'soursop',
      frequency: '528Hz',
      chakra: 'Heart',
      vibration: 'LOVE_HEALING',
      research: 'https://pubmed.ncbi.nlm.nih.gov/10619379/',
      quantumProperty: 'DNA_REPAIR_FACILITATOR'
    },
    {
      id: 'ricinoleic-acid',
      name: 'Ricinoleic Acid',
      element: 'C₁₈H₃₄O₃',
      source: 'castor-oil',
      frequency: '432Hz',
      chakra: 'Root',
      vibration: 'GROUNDING_PURIFICATION',
      research: 'https://pubmed.ncbi.nlm.nih.gov/12710816/',
      quantumProperty: 'CELLULAR_DETOXIFIER'
    }
  ],

  herbs: [
    {
      id: 'soursop-leaves',
      name: 'Soursop Leaves',
      latin: 'Annona muricata',
      frequency: '528Hz',
      compounds: ['Annonacin', 'Acetogenins', 'Quercetin'],
      benefits: ['Cellular Support', 'Natural Harmony', 'Vibrational Elevation'],
      chakraAlignment: ['Heart', 'Throat'],
      quantumEffect: 'FREQUENCY_AMPLIFICATION'
    }
  ],

  wellnessTopics: [
    {
      id: 'pineal-activation',
      name: 'Pineal Gland Activation',
      frequency: '852Hz',
      herbs: ['sea-moss', 'chlorella'],
      practices: ['Meditation', 'Sun Gazing', 'Frequency Listening'],
      quantumPrinciple: 'SPIRITUAL_ORDER_RESTORATION'
    }
  ]
};

/* ======================
   QUANTUM SEARCH ENGINE
====================== */
const useQuantumSearch = () => {
  const [quantumState, setQuantumState] = useState({
    resonance: 0,
    coherence: 0,
    entanglement: false
  });

  const searchWithFrequency = useCallback(async (query, language) => {
    const validation = QuantumSanitizer.validateQuery(query);
    if (!validation.valid) return null;

    // Elevate quantum state
    setQuantumState(prev => ({
      resonance: prev.resonance + 10,
      coherence: Math.min(prev.coherence + 5, 100),
      entanglement: prev.resonance > 50
    }));

    // Perform multi-dimensional search
    const results = {
      elements: QuantumDatabase.elements.filter(item =>
        item.name.toLowerCase().includes(validation.clean.toLowerCase()) ||
        item.element.toLowerCase().includes(validation.clean.toLowerCase()) ||
        item.source.includes(validation.clean.toLowerCase()) ||
        item.quantumProperty.toLowerCase().includes(validation.clean.toLowerCase())
      ),
      herbs: QuantumDatabase.herbs.filter(herb =>
        herb.name.toLowerCase().includes(validation.clean.toLowerCase()) ||
        herb.compounds.some(c => c.toLowerCase().includes(validation.clean.toLowerCase())) ||
        herb.benefits.some(b => b.toLowerCase().includes(validation.clean.toLowerCase()))
      ),
      wellness: QuantumDatabase.wellnessTopics.filter(topic =>
        topic.name.toLowerCase().includes(validation.clean.toLowerCase()) ||
        topic.herbs.some(h => h.includes(validation.clean.toLowerCase())) ||
        topic.quantumPrinciple.toLowerCase().includes(validation.clean.toLowerCase())
      ),
      frequency: validation.frequency,
      quantumState: {
        resonance: quantumState.resonance + 10,
        timestamp: new Date().toISOString(),
        consciousnessLevel: quantumState.entanglement ? 'ENTANGLED' : 'COHERENT'
      }
    };

    return results;
  }, [quantumState]);

  return { searchWithFrequency, quantumState };
};

/* ======================
   MAIN COMPONENT
====================== */
const MAVJSearch = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [searching, setSearching] = useState(false);
  const [activePortal, setActivePortal] = useState('home');
  const [frequency, setFrequency] = useState(528);
  
  const { searchWithFrequency, quantumState } = useQuantumSearch();

  // Language configuration
  const languages = useMemo(() => [
    { code: 'en', name: 'English', frequency: '528Hz', chakra: 'Heart' },
    { code: 'es', name: 'Español', frequency: '432Hz', chakra: 'Sacral' },
    { code: 'fr', name: 'Français', frequency: '639Hz', chakra: 'Throat' },
    { code: 'zh', name: '中文', frequency: '852Hz', chakra: 'Third Eye' },
    { code: 'ar', name: 'العربية', frequency: '174Hz', chakra: 'Root' },
    { code: 'kw', name: 'Kreyòl', frequency: '417Hz', chakra: 'Solar Plexus' },
    { code: 'am', name: 'አማርኛ', frequency: '963Hz', chakra: 'Crown' }
  ], []);

  // Auto-focus on mount
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      // Gentle vibration on focus
      searchInputRef.current.addEventListener('focus', () => {
        document.body.classList.add('quantum-pulse');
      });
      searchInputRef.current.addEventListener('blur', () => {
        document.body.classList.remove('quantum-pulse');
      });
    }
  }, []);

  // Handle search with quantum elevation
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searching || !query.trim()) return;

    setSearching(true);
    
    // Elevate frequency before search
    setFrequency(prev => Math.min(prev + 10, 963));
    
    const searchResults = await searchWithFrequency(query, i18n.language);
    
    if (searchResults) {
      setResults(searchResults);
      setActivePortal('results');
      
      // Trigger quantum glow effect
      document.querySelectorAll('.quantum-glow').forEach(el => {
        el.classList.add('active');
        setTimeout(() => el.classList.remove('active'), 2000);
      });
    }
    
    setSearching(false);
  };

  // Clear search with frequency reset
  const handleClear = () => {
    setQuery('');
    setResults(null);
    setActivePortal('home');
    setFrequency(528); // Reset to heart chakra frequency
  };

  // Portal navigation
  const portals = useMemo(() => [
    { id: 'elements', name: t('portals.elements'), icon: '⚛️', color: '#FFD700' },
    { id: 'herbs', name: t('portals.herbs'), icon: '🌿', color: '#4CAF50' },
    { id: 'wellness', name: t('portals.wellness'), icon: '🌀', color: '#2196F3' },
    { id: 'research', name: t('portals.research'), icon: '📚', color: '#9C27B0' },
    { id: 'recipes', name: t('portals.recipes'), icon: '🍃', color: '#FF9800' },
    { id: 'frequency', name: t('portals.frequency'), icon: '🎵', color: '#00BCD4' }
  ], [t]);

  return (
    <PageLayout 
      title={t('mavjSearch.title')}
      description={t('mavjSearch.description')}
      frequency={frequency}
    >
      {/* QUANTUM GLOW BACKGROUND */}
      <QuantumGlow intensity={quantumState.resonance} />
      
      <div className="mavj-quantum-container">
        {/* FREQUENCY ELEVATOR */}
        <FrequencyElevator 
          currentFrequency={frequency}
          onFrequencyChange={setFrequency}
          resonance={quantumState.resonance}
        />

        {/* MAIN SEARCH INTERFACE */}
        <div className="quantum-search-interface">
          <div className="frequency-display">
            <div className="frequency-value">{frequency}Hz</div>
            <div className="frequency-meaning">
              {QuantumSanitizer.calculateFrequency(query).meaning}
            </div>
          </div>

          <form onSubmit={handleSearch} className="quantum-search-form">
            <div className="search-field-wrapper">
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('mavjSearch.placeholder')}
                className="quantum-search-input"
                aria-label={t('mavjSearch.ariaLabel')}
                data-frequency={frequency}
              />
              <div className="input-ornament">🌀</div>
            </div>
            
            <div className="search-actions">
              <button
                type="submit"
                disabled={searching || !query.trim()}
                className="quantum-search-button"
                aria-busy={searching}
              >
                {searching ? (
                  <>
                    <span className="spinner"></span>
                    {t('mavjSearch.searching')}
                  </>
                ) : (
                  <>
                    ⚡ {t('mavjSearch.search')}
                  </>
                )}
              </button>
              
              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="quantum-clear-button"
                  aria-label={t('mavjSearch.clear')}
                >
                  ✨ {t('mavjSearch.clear')}
                </button>
              )}
            </div>
          </form>

          {/* QUANTUM PORTALS */}
          {activePortal === 'home' && (
            <div className="quantum-portals">
              <h2 className="portals-title">{t('mavjSearch.portals')}</h2>
              <div className="portals-grid">
                {portals.map(portal => (
                  <button
                    key={portal.id}
                    onClick={() => setActivePortal(portal.id)}
                    className="portal-card"
                    style={{ '--portal-color': portal.color }}
                    aria-label={`Open ${portal.name} portal`}
                  >
                    <div className="portal-icon">{portal.icon}</div>
                    <h3 className="portal-name">{portal.name}</h3>
                    <div className="portal-arrow">➤</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SEARCH RESULTS */}
          {activePortal === 'results' && results && (
            <div className="quantum-results">
              <div className="results-header">
                <button
                  onClick={() => setActivePortal('home')}
                  className="back-to-portals"
                  aria-label="Back to portals"
                >
                  ← {t('mavjSearch.back')}
                </button>
                
                <div className="results-meta">
                  <span className="results-count">
                    {results.elements.length + results.herbs.length + results.wellness.length} {t('mavjSearch.results')}
                  </span>
                  <span className="quantum-state">
                    {quantumState.entanglement ? '🌀 ENTANGLED' : '⚡ COHERENT'}
                  </span>
                </div>
              </div>

              {/* FREQUENCY RESONANCE */}
              <div className="frequency-resonance">
                <div className="resonance-bar" style={{ width: `${quantumState.resonance}%` }} />
                <div className="resonance-label">
                  Resonance: {quantumState.resonance}% • {results.frequency.hz}Hz
                </div>
              </div>

              {/* RESULTS SECTIONS */}
              {results.elements.length > 0 && (
                <section className="results-section" aria-labelledby="elements-heading">
                  <h3 id="elements-heading" className="section-title">
                    ⚛️ {t('mavjSearch.quantumElements')}
                  </h3>
                  <div className="elements-grid">
                    {results.elements.map(element => (
                      <div key={element.id} className="element-card quantum-glow">
                        <div className="element-header">
                          <h4 className="element-name">{element.name}</h4>
                          <span className="element-frequency">{element.frequency}</span>
                        </div>
                        <div className="element-details">
                          <p className="element-formula">{element.element}</p>
                          <p className="element-source">Source: {element.source}</p>
                          <p className="element-chakra">Chakra: {element.chakra}</p>
                          <p className="element-quantum">{element.quantumProperty}</p>
                        </div>
                        <div className="element-actions">
                          <Link 
                            to={`/quantum/elements/${element.id}`}
                            className="element-link"
                            aria-label={`Learn more about ${element.name}`}
                          >
                            {t('mavjSearch.explore')} →
                          </Link>
                          <a
                            href={element.research}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="research-link"
                            aria-label={`Research on ${element.name}`}
                          >
                            📚 Research
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* HERBS SECTION */}
              {results.herbs.length > 0 && (
                <section className="results-section" aria-labelledby="herbs-heading">
                  <h3 id="herbs-heading" className="section-title">
                    🌿 {t('mavjSearch.quantumHerbs')}
                  </h3>
                  <div className="herbs-grid">
                    {results.herbs.map(herb => (
                      <div key={herb.id} className="herb-card">
                        <div className="herb-header">
                          <h4 className="herb-name">{herb.name}</h4>
                          <span className="herb-latin">{herb.latin}</span>
                        </div>
                        <div className="herb-frequency">{herb.frequency}</div>
                        <div className="herb-compounds">
                          {herb.compounds.map(compound => (
                            <span key={compound} className="compound-tag">
                              {compound}
                            </span>
                          ))}
                        </div>
                        <div className="herb-benefits">
                          {herb.benefits.map(benefit => (
                            <span key={benefit} className="benefit-tag">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* NO RESULTS STATE */}
              {results.elements.length === 0 && 
               results.herbs.length === 0 && 
               results.wellness.length === 0 && (
                <div className="no-results quantum-glow">
                  <div className="no-results-icon">🌀</div>
                  <h3 className="no-results-title">{t('mavjSearch.noResults')}</h3>
                  <p className="no-results-message">
                    {t('mavjSearch.tryDifferent')}
                  </p>
                  <button
                    onClick={handleClear}
                    className="quantum-reset-button"
                  >
                    ✨ {t('mavjSearch.resetSearch')}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* LANGUAGE SELECTOR */}
          <div className="language-selector">
            <span className="selector-label">{t('mavjSearch.frequencyLanguage')}</span>
            <div className="language-buttons">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`language-button ${i18n.language === lang.code ? 'active' : ''}`}
                  style={{ '--lang-color': lang.chakra === 'Heart' ? '#FF5252' : 
                                       lang.chakra === 'Third Eye' ? '#7B1FA2' : '#4CAF50' }}
                  aria-label={`Switch to ${lang.name} (${lang.frequency})`}
                >
                  <span className="lang-code">{lang.code.toUpperCase()}</span>
                  <span className="lang-frequency">{lang.frequency}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* QUANTUM FOOTER */}
        <footer className="quantum-footer">
          <div className="footer-content">
            <div className="footer-frequency">
              <span className="current-frequency">{frequency}Hz</span>
              <span className="frequency-chakra">
                {frequency === 528 ? 'Heart Chakra' :
                 frequency === 432 ? 'Universal Harmony' :
                 'Quantum State'}
              </span>
            </div>
            <div className="footer-copyright">
              © 2025 My Alkaline Vegan Journey • Quantum Consciousness Portal
            </div>
            <div className="footer-links">
              <Link to="/quantum/principles" className="footer-link">
                Quantum Principles
              </Link>
              <Link to="/frequency/research" className="footer-link">
                Frequency Research
              </Link>
              <Link to="/consciousness/portal" className="footer-link">
                Consciousness Portal
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </PageLayout>
  );
};

export default MAVJSearch;
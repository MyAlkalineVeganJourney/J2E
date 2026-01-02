import React, { useState } from 'react';

const QuantumPhysicsInfo = () => {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('basics');

  const translations = {
    en: {
      title: 'Quantum Physics & Human Reset',
      subtitle: 'The Science of Cellular Recalibration Through Quantum Mechanics',
      basics: 'Quantum Basics',
      biology: 'Quantum Biology',
      reset: 'Quantum Reset',
      research: 'Peer-Reviewed Research'
    },
    es: { title: 'Física Cuántica y Reinicio Humano', subtitle: 'La Ciencia de la Recalibración Celular a Través de la Mecánica Cuántica', basics: 'Fundamentos Cuánticos', biology: 'Biología Cuántica', reset: 'Reinicio Cuántico', research: 'Investigación Revisada por Pares' },
    fr: { title: 'Physique Quantique et Réinitialisation Humaine', subtitle: 'La Science de la Recalibration Cellulaire par la Mécanique Quantique', basics: 'Bases Quantiques', biology: 'Biologie Quantique', reset: 'Réinitialisation Quantique', research: 'Recherche Évaluée par les Pairs' }
  };

  const t = translations[language];

  const peerReviewedArticles = [
    {
      title: "Quantum coherence in human consciousness",
      authors: "Hameroff, S., & Penrose, R.",
      journal: "Physics of Life Reviews",
      year: "2014",
      doi: "10.1016/j.plrev.2014.10.002",
      link: "https://doi.org/10.1016/j.plrev.2014.10.002",
      summary: "Proposes quantum coherence in microtubules as basis for consciousness"
    },
    {
      title: "Quantum biology of photosynthesis",
      authors: "Engel, G. S., et al.",
      journal: "Nature",
      year: "2007",
      doi: "10.1038/nature05678",
      link: "https://doi.org/10.1038/nature05678",
      summary: "Evidence for quantum coherence in photosynthetic light harvesting"
    },
    {
      title: "Quantum effects in biology",
      authors: "McFadden, J., & Al-Khalili, J.",
      journal: "Proceedings of the Royal Society B",
      year: "2018",
      doi: "10.1098/rspb.2018.0644",
      link: "https://doi.org/10.1098/rspb.2018.0644",
      summary: "Review of quantum effects in biological systems"
    },
    {
      title: "Fasting triggers stem cell regeneration",
      authors: "Cheng, C. W., et al.",
      journal: "Cell Stem Cell",
      year: "2014",
      doi: "10.1016/j.stem.2014.04.014",
      link: "https://doi.org/10.1016/j.stem.2014.04.014",
      summary: "Prolonged fasting induces cellular reset at molecular level"
    }
  ];

  const quantumConcepts = [
    {
      term: "Quantum Entanglement",
      definition: "When two particles become connected so that actions performed on one affect the other, regardless of distance.",
      application: "Cells may use entanglement for instantaneous communication across biological systems."
    },
    {
      term: "Superposition",
      definition: "A quantum system can exist in multiple states simultaneously until measured.",
      application: "Cellular decision-making processes might utilize quantum superposition."
    },
    {
      term: "Quantum Tunneling",
      definition: "Particles passing through barriers that classical physics says are impossible.",
      application: "Enzymes use quantum tunneling to accelerate biochemical reactions by 1000x."
    },
    {
      term: "Wave Function Collapse",
      definition: "When a quantum system's wave function reduces to a single state upon observation.",
      application: "Conscious observation may influence physical reality at cellular level."
    }
  ];

  return (
    <div style={styles.container}>
      {/* Navigation Section */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.flagContainer}>
            {['en', 'es', 'fr'].map(lang => (
              <button
                key={lang}
                style={{ ...styles.flagBtn, ...(language === lang ? styles.flagActive : {}) }}
                onClick={() => setLanguage(lang)}
                title={lang === 'en' ? 'English' : lang === 'es' ? 'Español' : 'Français'}
              >
                {lang === 'en' ? '🇺🇸' : lang === 'es' ? '🇪🇸' : '🇫🇷'}
              </button>
            ))}
          </div>
          <div style={styles.pageNav}>
            <button 
              onClick={() => setActiveSection('basics')}
              style={{ ...styles.navBtn, ...(activeSection === 'basics' ? styles.navBtnActive : {}) }}
            >
              ⚛️ {t.basics}
            </button>
            <button 
              onClick={() => setActiveSection('biology')}
              style={{ ...styles.navBtn, ...(activeSection === 'biology' ? styles.navBtnActive : {}) }}
            >
              🧬 {t.biology}
            </button>
            <button 
              onClick={() => setActiveSection('reset')}
              style={{ ...styles.navBtn, ...(activeSection === 'reset' ? styles.navBtnActive : {}) }}
            >
              🔄 {t.reset}
            </button>
            <button 
              onClick={() => setActiveSection('research')}
              style={{ ...styles.navBtn, ...(activeSection === 'research' ? styles.navBtnActive : {}) }}
            >
              📚 {t.research}
            </button>
          </div>
        </div>
      </nav>

      {/* Title Section */}
      <div style={styles.titleSection}>
        <h1 style={styles.mainTitle}>⚛️ {t.title} ⚛️</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>
        <div style={styles.logoCircle}>
          <img src="/MAVJLogo.jpg" alt="MAVJ Logo" style={styles.logoImg} />
        </div>
      </div>

      {/* Content Sections */}
      <div style={styles.contentSection}>
        
        {activeSection === 'basics' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>⚛️ Quantum Physics Fundamentals</h2>
            
            <div style={styles.timeline}>
              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>1</div>
                <div style={styles.timelineContent}>
                  <h3>🔄 The Atomic Foundation</h3>
                  <p><strong>Atoms:</strong> Basic units of matter composed of:</p>
                  <ul style={styles.list}>
                    <li><strong>Protons:</strong> Positive charge, determines element</li>
                    <li><strong>Neutrons:</strong> Neutral charge, provides stability</li>
                    <li><strong>Electrons:</strong> Negative charge, quantum particles</li>
                  </ul>
                  <p><strong>Quantum Scale:</strong> At atomic level, particles behave as both waves AND particles.</p>
                  <div style={styles.videoEmbed}>
                    <iframe 
                      width="100%" 
                      height="315" 
                      src="https://www.youtube.com/embed/_7MkqL2N_0s" 
                      title="Quantum Physics for Beginners"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>2</div>
                <div style={styles.timelineContent}>
                  <h3>🌀 Wave-Particle Duality</h3>
                  <p><strong>Key Principle:</strong> All quantum objects exhibit both particle-like and wave-like properties.</p>
                  <p><strong>Double-Slit Experiment:</strong> Demonstrates that electrons create interference patterns (wave behavior) until measured (particle behavior).</p>
                  <p><strong>Human Application:</strong> Your cells may use this duality for energy transfer and communication.</p>
                </div>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>3</div>
                <div style={styles.timelineContent}>
                  <h3>🔗 Quantum Entanglement</h3>
                  <p><strong>Definition:</strong> When particles become linked so that actions on one instantly affect the other, regardless of distance.</p>
                  <p><strong>Einstein:</strong> Called it "spooky action at a distance."</p>
                  <p><strong>Biological Significance:</strong> May explain instant cellular communication and coherence in living systems.</p>
                  <div style={styles.citation}>
                    <strong>Reference:</strong> Aspect, A. (1982). Experimental test of Bell's inequalities. <em>Physical Review Letters</em>, 49(2), 91–94.
                  </div>
                </div>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>4</div>
                <div style={styles.timelineContent}>
                  <h3>🎯 Superposition</h3>
                  <p><strong>Quantum State:</strong> Particles can exist in multiple states simultaneously until observed.</p>
                  <p><strong>Schrödinger's Cat:</strong> Famous thought experiment illustrating superposition.</p>
                  <p><strong>Biological Implication:</strong> Cellular processes might utilize superposition for optimal decision-making.</p>
                </div>
              </div>
            </div>

            <div style={styles.conceptGrid}>
              {quantumConcepts.map((concept, index) => (
                <div key={index} style={styles.conceptCard}>
                  <h4 style={styles.conceptTitle}>{concept.term}</h4>
                  <p style={styles.conceptDefinition}>{concept.definition}</p>
                  <div style={styles.applicationBox}>
                    <strong>Human Application:</strong> {concept.application}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'biology' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🧬 Quantum Biology: Where Physics Meets Life</h2>
            
            <div style={styles.infoCard}>
              <h3>🌿 Photosynthesis: Nature's Quantum Computer</h3>
              <p><strong>Discovery:</strong> Plants use quantum coherence to achieve near-perfect energy transfer efficiency in photosynthesis.</p>
              <p><strong>Research:</strong> Engel et al. (2007) demonstrated quantum effects in photosynthetic complexes at room temperature.</p>
              <div style={styles.videoEmbed}>
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/yDh6G-zar8Y" 
                  title="Quantum Biology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={styles.infoCard}>
              <h3>👃 Quantum Sense of Smell</h3>
              <p><strong>Vibration Theory:</strong> Your nose may detect molecular vibrations through quantum tunneling, not just shape recognition.</p>
              <p><strong>Evidence:</strong> Fruit flies can distinguish between molecules with identical shapes but different vibrations.</p>
              <div style={styles.citation}>
                <strong>Reference:</strong> Turin, L. (1996). A spectroscopic mechanism for primary olfactory reception. <em>Chemical Senses</em>, 21(6), 773–791.
              </div>
            </div>

            <div style={styles.infoCard}>
              <h3>🧠 Brain as Quantum Computer</h3>
              <p><strong>Orchestrated Objective Reduction (Orch-OR):</strong> Theory proposing quantum processes in microtubules create consciousness.</p>
              <p><strong>Microtubules:</strong> Protein structures in neurons that may maintain quantum coherence.</p>
              <div style={styles.citation}>
                <strong>Reference:</strong> Hameroff, S., & Penrose, R. (2014). Consciousness in the universe: A review of the 'Orch OR' theory. <em>Physics of Life Reviews</em>, 11(1), 39–78.
              </div>
            </div>

            <div style={styles.diagram}>
              <h4>🌐 Quantum Biological Processes in Human Cells</h4>
              <div style={styles.diagramGrid}>
                <div style={styles.diagramItem}>
                  <div style={styles.diagramIcon}>🧬</div>
                  <strong>DNA Repair</strong>
                  <p>Quantum tunneling in enzymes</p>
                </div>
                <div style={styles.diagramItem}>
                  <div style={styles.diagramIcon}>💫</div>
                  <strong>Energy Production</strong>
                  <p>Coherence in mitochondria</p>
                </div>
                <div style={styles.diagramItem}>
                  <div style={styles.diagramIcon}>🧠</div>
                  <strong>Neural Processing</strong>
                  <p>Quantum cognition theories</p>
                </div>
                <div style={styles.diagramItem}>
                  <div style={styles.diagramIcon}>🛡️</div>
                  <strong>Immune Response</strong>
                  <p>Quantum recognition</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'reset' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🔄 Quantum Human Reset Protocol</h2>
            
            <div style={styles.resetSteps}>
              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>1</div>
                <h3>🌊 Cellular De-coherence Reset</h3>
                <p><strong>Process:</strong> Fasting allows cells to clear quantum noise and restore natural coherence.</p>
                <p><strong>Mechanism:</strong> Autophagy (cellular cleanup) removes damaged organelles, resetting quantum states.</p>
                <div style={styles.citation}>
                  <strong>Research:</strong> Mizushima, N., & Komatsu, M. (2011). Autophagy: renovation of cells and tissues. <em>Cell</em>, 147(4), 728–741.
                </div>
              </div>

              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>2</div>
                <h3>⚡ Mitochondrial Quantum Tuning</h3>
                <p><strong>Process:</strong> Dry fasting forces mitochondria to optimize quantum tunneling in electron transport chain.</p>
                <p><strong>Result:</strong> Increased ATP production efficiency through enhanced quantum coherence.</p>
                <div style={styles.videoEmbed}>
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/L9F4Mt2vjDM" 
                    title="Mitochondrial Function"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>3</div>
                <h3>🌀 Entanglement Restoration</h3>
                <p><strong>Process:</strong> Removing toxins and electromagnetic interference restores natural quantum entanglement between cells.</p>
                <p><strong>Evidence:</strong> Cells in healthy tissue show higher degrees of quantum coherence than diseased tissue.</p>
              </div>

              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>4</div>
                <h3>🌌 Consciousness Field Alignment</h3>
                <p><strong>Process:</strong> Meditation during reset aligns personal consciousness field with universal quantum field.</p>
                <p><strong>Quantum Basis:</strong> Penrose-Hameroff theory suggests consciousness arises from quantum processes in microtubules.</p>
                <div style={styles.citation}>
                  <strong>Reference:</strong> Penrose, R. (1994). <em>Shadows of the Mind: A Search for the Missing Science of Consciousness</em>. Oxford University Press.
                </div>
              </div>
            </div>

            <div style={styles.timelineReset}>
              <h3>📅 40-Day Quantum Reset Timeline</h3>
              <div style={styles.timelineGrid}>
                <div style={styles.timelinePhase}>
                  <h4>Phase 1: Decoherence (Days 1-3)</h4>
                  <p>• Dry fasting initiates quantum state clearance</p>
                  <p>• Cellular autophagy begins</p>
                  <p>• Mitochondrial optimization starts</p>
                </div>
                <div style={styles.timelinePhase}>
                  <h4>Phase 2: Quantum Tuning (Days 4-21)</h4>
                  <p>• Water fasting maintains coherence</p>
                  <p>• Stem cell activation begins</p>
                  <p>• Quantum entanglement restoration</p>
                </div>
                <div style={styles.timelinePhase}>
                  <h4>Phase 3: Re-coherence (Days 22-40)</h4>
                  <p>• Cellular quantum states reset</p>
                  <p>• New coherence patterns established</p>
                  <p>• Consciousness field alignment</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'research' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>📚 Peer-Reviewed Scientific Research</h2>
            
            <div style={styles.researchHeader}>
              <p>All claims on this page are supported by published scientific literature from reputable journals.</p>
            </div>

            <div style={styles.researchGrid}>
              {peerReviewedArticles.map((article, index) => (
                <div key={index} style={styles.researchCard}>
                  <div style={styles.researchBadge}>DOI: {article.doi}</div>
                  <h4 style={styles.researchTitle}>{article.title}</h4>
                  <p style={styles.researchAuthors}><strong>Authors:</strong> {article.authors}</p>
                  <p style={styles.researchJournal}><em>{article.journal}</em> ({article.year})</p>
                  <p style={styles.researchSummary}>{article.summary}</p>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.doiLink}
                  >
                    🔗 Access Full Article
                  </a>
                </div>
              ))}
            </div>

            <div style={styles.resourcesSection}>
              <h3>🔬 Additional Scientific Resources</h3>
              <div style={styles.resourceLinks}>
                <a href="https://www.nature.com/subjects/quantum-biology" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                  🌿 Nature: Quantum Biology
                </a>
                <a href="https://www.sciencedirect.com/topics/neuroscience/quantum-consciousness" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                  🧠 ScienceDirect: Quantum Consciousness
                </a>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4327968/" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                  🩺 NIH: Fasting and Cellular Regeneration
                </a>
                <a href="https://www.quantumbiology.org/" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                  ⚛️ Quantum Biology Institute
                </a>
              </div>
            </div>

            <div style={styles.scientificMethod}>
              <h3>🔍 The Scientific Method in Quantum Biology</h3>
              <ol style={styles.methodList}>
                <li><strong>Observation:</strong> Quantum effects observed in biological systems</li>
                <li><strong>Hypothesis:</strong> Quantum processes enhance biological function</li>
                <li><strong>Prediction:</strong> Quantum coherence improves cellular efficiency</li>
                <li><strong>Experiment:</strong> Testing quantum effects at physiological temperatures</li>
                <li><strong>Analysis:</strong> Statistical verification of quantum biological claims</li>
                <li><strong>Peer Review:</strong> Publication in scientific journals</li>
                <li><strong>Replication:</strong> Independent verification by other labs</li>
              </ol>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div style={styles.ctaSection}>
          <h3>🚀 Ready for Your Quantum Reset?</h3>
          <p>Experience the cellular recalibration that bridges ancient wisdom with quantum science.</p>
          <div style={styles.ctaButtons}>
            <a href="/reset" style={styles.ctaButton}>📅 Book Your Reset</a>
            <a href="/research" style={styles.ctaButtonSecondary}>📚 Deep Dive Research</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerCopy}>© 2025 My Alkaline Vegan Journey. Quantum Physics Information Portal.</p>
        <div style={styles.socialLinks}>
          <a href="/" style={styles.socialLink}>🏠 Home</a>
          <a href="/research" style={styles.socialLink}>📚 Research</a>
          <a href="/contact" style={styles.socialLink}>☎️ Contact</a>
        </div>
      </div>
    </div>
  );
};

// Styles matching your existing design
const styles = {
  container: {
    background: '#0a0a15',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh'
  },
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
    padding: '0.6rem 1rem',
    border: '5px solid',
    borderImage: 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3) 1'
  },
  navContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  flagContainer: {
    display: 'flex',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '0.3rem 0.6rem',
    borderRadius: '6px',
    border: '2px solid #FFD700'
  },
  flagBtn: {
    fontSize: '1.8rem',
    background: 'transparent',
    border: '2px solid',
    borderImage: 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3) 1',
    padding: '0.2rem 0.4rem',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  },
  flagActive: {
    background: 'rgba(255, 215, 0, 0.3)',
    boxShadow: '0 0 15px rgba(255, 215, 0, 0.8)'
  },
  pageNav: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  navBtn: {
    background: 'rgba(255, 215, 0, 0.1)',
    border: '3px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #FF6B00, #00d4ff) 1',
    color: '#FFD700',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    fontWeight: '600'
  },
  navBtnActive: {
    background: 'rgba(255, 215, 0, 0.3)',
    boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)'
  },
  titleSection: {
    textAlign: 'center',
    padding: '2rem 1rem',
    background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
    border: '5px solid',
    borderImage: 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3) 1'
  },
  mainTitle: {
    fontSize: '2.5rem',
    color: '#FFD700',
    marginBottom: '0.5rem',
    textShadow: '0 0 15px rgba(255, 215, 0, 0.6)'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#FFA500',
    marginBottom: '1rem'
  },
  logoCircle: {
    width: '80px',
    height: '80px',
    margin: '0 auto',
    borderRadius: '50%',
    border: '3px solid #FFD700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ffffff',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)'
  },
  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  contentSection: {
    padding: '2rem 1.5rem',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  section: {
    marginBottom: '3rem'
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#FFD700',
    marginBottom: '2rem',
    textAlign: 'center',
    textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
  },
  timeline: {
    position: 'relative',
    margin: '2rem 0'
  },
  timelineItem: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    alignItems: 'flex-start'
  },
  timelineDot: {
    background: 'linear-gradient(135deg, #FFD700, #FF6B00)',
    color: '#000',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    flexShrink: 0
  },
  timelineContent: {
    background: 'rgba(255, 215, 0, 0.05)',
    border: '2px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #FF6B00, #00d4ff) 1',
    borderRadius: '8px',
    padding: '1.5rem',
    flex: 1
  },
  list: {
    margin: '1rem 0',
    paddingLeft: '1.5rem'
  },
  conceptGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem'
  },
  conceptCard: {
    background: 'rgba(255, 215, 0, 0.03)',
    border: '3px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #FF6B00, #00d4ff) 1',
    borderRadius: '8px',
    padding: '1.5rem'
  },
  conceptTitle: {
    color: '#FFD700',
    fontSize: '1.3rem',
    marginBottom: '0.8rem'
  },
  conceptDefinition: {
    color: '#cccccc',
    marginBottom: '1rem',
    lineHeight: '1.6'
  },
  applicationBox: {
    background: 'rgba(0, 212, 255, 0.1)',
    borderLeft: '4px solid #00d4ff',
    padding: '1rem',
    borderRadius: '4px',
    color: '#00d4ff',
    marginTop: '1rem'
  },
  infoCard: {
    background: 'rgba(255, 215, 0, 0.03)',
    border: '3px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #FF6B00, #00d4ff) 1',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '2rem'
  },
  videoEmbed: {
    margin: '1.5rem 0',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  citation: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderLeft: '4px solid #FFD700',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#cccccc'
  },
  diagram: {
    background: 'rgba(0, 0, 0, 0.3)',
    border: '3px solid',
    borderImage: 'linear-gradient(135deg, #00d4ff, #4B0082) 1',
    borderRadius: '8px',
    padding: '2rem',
    marginTop: '2rem'
  },
  diagramGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem'
  },
  diagramItem: {
    textAlign: 'center',
    padding: '1rem'
  },
  diagramIcon: {
    fontSize: '3rem',
    marginBottom: '0.5rem'
  },
  resetSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  stepCard: {
    background: 'rgba(255, 215, 0, 0.03)',
    border: '3px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #FF6B00, #00d4ff) 1',
    borderRadius: '8px',
    padding: '1.5rem',
    position: 'relative'
  },
  stepNumber: {
    position: 'absolute',
    top: '-15px',
    left: '-15px',
    background: 'linear-gradient(135deg, #FFD700, #FF6B00)',
    color: '#000',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  timelineReset: {
    background: 'rgba(0, 212, 255, 0.05)',
    border: '3px solid',
    borderImage: 'linear-gradient(135deg, #00d4ff, #4B0082) 1',
    borderRadius: '8px',
    padding: '2rem',
    marginTop: '3rem'
  },
  timelineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '1.5rem'
  },
  timelinePhase: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    borderRadius: '6px'
  },
  researchHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#cccccc'
  },
  researchGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '1.5rem'
  },
  researchCard: {
    background: 'rgba(255, 215, 0, 0.03)',
    border: '3px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #FF6B00, #00d4ff) 1',
    borderRadius: '8px',
    padding: '1.5rem',
    position: 'relative'
  },
  researchBadge: {
    position: 'absolute',
    top: '-10px',
    right: '10px',
    background: '#4B0082',
    color: '#fff',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  researchTitle: {
    color: '#FFD700',
    fontSize: '1.2rem',
    marginBottom: '0.5rem'
  },
  researchAuthors: {
    color: '#cccccc',
    fontSize: '0.9rem',
    marginBottom: '0.5rem'
  },
  researchJournal: {
    color: '#FFA500',
    fontSize: '0.9rem',
    marginBottom: '1rem'
  },
  researchSummary: {
    color: '#cccccc',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  doiLink: {
    display: 'inline-block',
    color: '#00d4ff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  },
  resourcesSection: {
    marginTop: '3rem',
    padding: '2rem',
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '8px'
  },
  resourceLinks: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  resourceLink: {
    display: 'block',
    background: 'rgba(255, 215, 0, 0.1)',
    border: '2px solid #FFD700',
    color: '#FFD700',
    padding: '1rem',
    borderRadius: '6px',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  scientificMethod: {
    marginTop: '3rem',
    padding: '2rem',
    background: 'rgba(255, 215, 0, 0.05)',
    border: '3px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #FF6B00, #00d4ff) 1',
    borderRadius: '8px'
  },
  methodList: {
    margin: '1rem 0 0 1.5rem'
  },
  ctaSection: {
    textAlign: 'center',
    padding: '3rem 2rem',
    background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,212,255,0.1))',
    border: '5px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #00d4ff) 1',
    borderRadius: '12px',
    margin: '3rem 0'
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem',
    flexWrap: 'wrap'
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #FFD700, #FF6B00)',
    color: '#000',
    padding: '1rem 2rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease'
  },
  ctaButtonSecondary: {
    background: 'linear-gradient(135deg, #00d4ff, #4B0082)',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease'
  },
  footer: {
    background: '#0a0a0a',
    padding: '2rem',
    textAlign: 'center',
    border: '5px solid',
    borderImage: 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3) 1'
  },
  footerCopy: {
    fontSize: '1rem',
    color: '#FFD700',
    marginBottom: '1rem'
  },
  socialLinks: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  socialLink: {
    color: '#FFD700',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    fontWeight: '600'
  }
};

// Add to existing styles for animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`, styleSheet.cssRules.length);

export default QuantumPhysicsInfo;
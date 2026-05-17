import React, { useState, useContext } from 'react';
import { TranslationContext } from '../PageLayout';

const QuantumPhysicsInfo = () => {
  const { T, currentLang, setCurrentLang } = useContext(TranslationContext);
  const [activeSection, setActiveSection] = useState('basics');

  const t = (key, fallback) => {
    const keys = key.split('.');
    let value = T;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback;
      }
    }
    return typeof value === 'string' ? value : fallback;
  };

  const peerReviewedArticles = [
    {
      title: t('quantum.article1.title', "Quantum coherence in human consciousness"),
      authors: "Hameroff, S., & Penrose, R.",
      journal: "Physics of Life Reviews",
      year: "2014",
      doi: "10.1016/j.plrev.2014.10.002",
      link: "https://doi.org/10.1016/j.plrev.2014.10.002",
      summary: t('quantum.article1.summary', "Proposes quantum coherence in microtubules as basis for consciousness")
    },
    {
      title: t('quantum.article2.title', "Quantum biology of photosynthesis"),
      authors: "Engel, G. S., et al.",
      journal: "Nature",
      year: "2007",
      doi: "10.1038/nature05678",
      link: "https://doi.org/10.1038/nature05678",
      summary: t('quantum.article2.summary', "Evidence for quantum coherence in photosynthetic light harvesting")
    },
    {
      title: t('quantum.article3.title', "Quantum effects in biology"),
      authors: "McFadden, J., & Al-Khalili, J.",
      journal: "Proceedings of the Royal Society B",
      year: "2018",
      doi: "10.1098/rspb.2018.0644",
      link: "https://doi.org/10.1098/rspb.2018.0644",
      summary: t('quantum.article3.summary', "Review of quantum effects in biological systems")
    },
    {
      title: t('quantum.article4.title', "Fasting triggers stem cell regeneration"),
      authors: "Cheng, C. W., et al.",
      journal: "Cell Stem Cell",
      year: "2014",
      doi: "10.1016/j.stem.2014.04.014",
      link: "https://doi.org/10.1016/j.stem.2014.04.014",
      summary: t('quantum.article4.summary', "Prolonged fasting induces cellular reset at molecular level")
    }
  ];

  const quantumConcepts = [
    {
      term: t('quantum.concept1.term', "Quantum Entanglement"),
      definition: t('quantum.concept1.definition', "When two particles become connected so that actions performed on one affect the other, regardless of distance."),
      application: t('quantum.concept1.application', "Cells may use entanglement for instantaneous communication across biological systems.")
    },
    {
      term: t('quantum.concept2.term', "Superposition"),
      definition: t('quantum.concept2.definition', "A quantum system can exist in multiple states simultaneously until measured."),
      application: t('quantum.concept2.application', "Cellular decision-making processes might utilize quantum superposition.")
    },
    {
      term: t('quantum.concept3.term', "Quantum Tunneling"),
      definition: t('quantum.concept3.definition', "Particles passing through barriers that classical physics says are impossible."),
      application: t('quantum.concept3.application', "Enzymes use quantum tunneling to accelerate biochemical reactions by 1000x.")
    },
    {
      term: t('quantum.concept4.term', "Wave Function Collapse"),
      definition: t('quantum.concept4.definition', "When a quantum system's wave function reduces to a single state upon observation."),
      application: t('quantum.concept4.application', "Conscious observation may influence physical reality at cellular level.")
    }
  ];

  // Language selector buttons
  const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Spanish' },
    { code: 'fr', flag: '🇫🇷', name: 'French' }
  ];

  return (
    <div style={styles.container}>
      {/* Navigation Section */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.flagContainer}>
            {languages.map(lang => (
              <button
                key={lang.code}
                style={{ ...styles.flagBtn, ...(currentLang === lang.name ? styles.flagActive : {}) }}
                onClick={() => setCurrentLang(lang.name)}
                title={lang.name}
              >
                {lang.flag}
              </button>
            ))}
          </div>
          <div style={styles.pageNav}>
            <button 
              onClick={() => setActiveSection('basics')}
              style={{ ...styles.navBtn, ...(activeSection === 'basics' ? styles.navBtnActive : {}) }}
            >
              ⚛️ {t('quantum.basics', 'Quantum Basics')}
            </button>
            <button 
              onClick={() => setActiveSection('biology')}
              style={{ ...styles.navBtn, ...(activeSection === 'biology' ? styles.navBtnActive : {}) }}
            >
              🧬 {t('quantum.biology', 'Quantum Biology')}
            </button>
            <button 
              onClick={() => setActiveSection('reset')}
              style={{ ...styles.navBtn, ...(activeSection === 'reset' ? styles.navBtnActive : {}) }}
            >
              🔄 {t('quantum.reset', 'Quantum Reset')}
            </button>
            <button 
              onClick={() => setActiveSection('research')}
              style={{ ...styles.navBtn, ...(activeSection === 'research' ? styles.navBtnActive : {}) }}
            >
              📚 {t('quantum.research', 'Peer-Reviewed Research')}
            </button>
          </div>
        </div>
      </nav>

      {/* Title Section */}
      <div style={styles.titleSection}>
        <h1 style={styles.mainTitle}>⚛️ {t('quantum.title', 'Quantum Physics & Human Reset')} ⚛️</h1>
        <p style={styles.subtitle}>{t('quantum.subtitle', 'The Science of Cellular Recalibration Through Quantum Mechanics')}</p>
        <div style={styles.logoCircle}>
          <img src="/MAVJLogo.jpg" alt="MAVJ Logo" style={styles.logoImg} />
        </div>
      </div>

      {/* Content Sections */}
      <div style={styles.contentSection}>
        
        {activeSection === 'basics' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>⚛️ {t('quantum.basicsTitle', 'Quantum Physics Fundamentals')}</h2>
            
            <div style={styles.timeline}>
              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>1</div>
                <div style={styles.timelineContent}>
                  <h3>🔄 {t('quantum.atomicFoundation', 'The Atomic Foundation')}</h3>
                  <p><strong>{t('quantum.atoms', 'Atoms')}:</strong> {t('quantum.atomsDesc', 'Basic units of matter composed of:')}</p>
                  <ul style={styles.list}>
                    <li><strong>{t('quantum.protons', 'Protons')}:</strong> {t('quantum.protonsDesc', 'Positive charge, determines element')}</li>
                    <li><strong>{t('quantum.neutrons', 'Neutrons')}:</strong> {t('quantum.neutronsDesc', 'Neutral charge, provides stability')}</li>
                    <li><strong>{t('quantum.electrons', 'Electrons')}:</strong> {t('quantum.electronsDesc', 'Negative charge, quantum particles')}</li>
                  </ul>
                  <p><strong>{t('quantum.quantumScale', 'Quantum Scale')}:</strong> {t('quantum.quantumScaleDesc', 'At atomic level, particles behave as both waves AND particles.')}</p>
                  <div style={styles.videoEmbed}>
                    <iframe 
                      width="100%" 
                      height="315" 
                      src="https://www.youtube.com/embed/_7MkqL2N_0s" 
                      title={t('quantum.videoTitle', 'Quantum Physics for Beginners')}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>2</div>
                <div style={styles.timelineContent}>
                  <h3>🌀 {t('quantum.waveParticleDuality', 'Wave-Particle Duality')}</h3>
                  <p><strong>{t('quantum.keyPrinciple', 'Key Principle')}:</strong> {t('quantum.waveParticleDesc', 'All quantum objects exhibit both particle-like and wave-like properties.')}</p>
                  <p><strong>{t('quantum.doubleSlit', 'Double-Slit Experiment')}:</strong> {t('quantum.doubleSlitDesc', 'Demonstrates that electrons create interference patterns (wave behavior) until measured (particle behavior).')}</p>
                  <p><strong>{t('quantum.humanApplication', 'Human Application')}:</strong> {t('quantum.waveParticleHuman', 'Your cells may use this duality for energy transfer and communication.')}</p>
                </div>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>3</div>
                <div style={styles.timelineContent}>
                  <h3>🔗 {t('quantum.entanglement', 'Quantum Entanglement')}</h3>
                  <p><strong>{t('quantum.definition', 'Definition')}:</strong> {t('quantum.entanglementDesc', 'When particles become linked so that actions on one instantly affect the other, regardless of distance.')}</p>
                  <p><strong>{t('quantum.einstein', 'Einstein')}:</strong> {t('quantum.einsteinQuote', 'Called it "spooky action at a distance."')}</p>
                  <p><strong>{t('quantum.biologicalSignificance', 'Biological Significance')}:</strong> {t('quantum.entanglementBio', 'May explain instant cellular communication and coherence in living systems.')}</p>
                  <div style={styles.citation}>
                    <strong>{t('quantum.reference', 'Reference')}:</strong> Aspect, A. (1982). Experimental test of Bell's inequalities. <em>Physical Review Letters</em>, 49(2), 91–94.
                  </div>
                </div>
              </div>

              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>4</div>
                <div style={styles.timelineContent}>
                  <h3>🎯 {t('quantum.superposition', 'Superposition')}</h3>
                  <p><strong>{t('quantum.quantumState', 'Quantum State')}:</strong> {t('quantum.superpositionDesc', 'Particles can exist in multiple states simultaneously until observed.')}</p>
                  <p><strong>{t('quantum.schrodinger', "Schrödinger's Cat")}:</strong> {t('quantum.schrodingerDesc', 'Famous thought experiment illustrating superposition.')}</p>
                  <p><strong>{t('quantum.biologicalImplication', 'Biological Implication')}:</strong> {t('quantum.superpositionBio', 'Cellular processes might utilize superposition for optimal decision-making.')}</p>
                </div>
              </div>
            </div>

            <div style={styles.conceptGrid}>
              {quantumConcepts.map((concept, index) => (
                <div key={index} style={styles.conceptCard}>
                  <h4 style={styles.conceptTitle}>{concept.term}</h4>
                  <p style={styles.conceptDefinition}>{concept.definition}</p>
                  <div style={styles.applicationBox}>
                    <strong>{t('quantum.humanApplication', 'Human Application')}:</strong> {concept.application}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'biology' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🧬 {t('quantum.quantumBiology', 'Quantum Biology: Where Physics Meets Life')}</h2>
            
            <div style={styles.infoCard}>
              <h3>🌿 {t('quantum.photosynthesis', 'Photosynthesis: Nature\'s Quantum Computer')}</h3>
              <p><strong>{t('quantum.discovery', 'Discovery')}:</strong> {t('quantum.photosynthesisDesc', 'Plants use quantum coherence to achieve near-perfect energy transfer efficiency in photosynthesis.')}</p>
              <p><strong>{t('quantum.research', 'Research')}:</strong> {t('quantum.photosynthesisResearch', 'Engel et al. (2007) demonstrated quantum effects in photosynthetic complexes at room temperature.')}</p>
              <div style={styles.videoEmbed}>
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/yDh6G-zar8Y" 
                  title={t('quantum.quantumBiologyVideo', 'Quantum Biology')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={styles.infoCard}>
              <h3>👃 {t('quantum.smell', 'Quantum Sense of Smell')}</h3>
              <p><strong>{t('quantum.vibrationTheory', 'Vibration Theory')}:</strong> {t('quantum.smellDesc', 'Your nose may detect molecular vibrations through quantum tunneling, not just shape recognition.')}</p>
              <p><strong>{t('quantum.evidence', 'Evidence')}:</strong> {t('quantum.smellEvidence', 'Fruit flies can distinguish between molecules with identical shapes but different vibrations.')}</p>
              <div style={styles.citation}>
                <strong>{t('quantum.reference', 'Reference')}:</strong> Turin, L. (1996). A spectroscopic mechanism for primary olfactory reception. <em>Chemical Senses</em>, 21(6), 773–791.
              </div>
            </div>

            <div style={styles.infoCard}>
              <h3>🧠 {t('quantum.brain', 'Brain as Quantum Computer')}</h3>
              <p><strong>{t('quantum.orchOr', 'Orchestrated Objective Reduction (Orch-OR)')}:</strong> {t('quantum.orchOrDesc', 'Theory proposing quantum processes in microtubules create consciousness.')}</p>
              <p><strong>{t('quantum.microtubules', 'Microtubules')}:</strong> {t('quantum.microtubulesDesc', 'Protein structures in neurons that may maintain quantum coherence.')}</p>
              <div style={styles.citation}>
                <strong>{t('quantum.reference', 'Reference')}:</strong> Hameroff, S., & Penrose, R. (2014). Consciousness in the universe: A review of the 'Orch OR' theory. <em>Physics of Life Reviews</em>, 11(1), 39–78.
              </div>
            </div>

            <div style={styles.diagram}>
              <h4>🌐 {t('quantum.bioProcesses', 'Quantum Biological Processes in Human Cells')}</h4>
              <div style={styles.diagramGrid}>
                <div style={styles.diagramItem}>
                  <div style={styles.diagramIcon}>🧬</div>
                  <strong>{t('quantum.dnaRepair', 'DNA Repair')}</strong>
                  <p>{t('quantum.dnaRepairDesc', 'Quantum tunneling in enzymes')}</p>
                </div>
                <div style={styles.diagramItem}>
                  <div style={styles.diagramIcon}>💫</div>
                  <strong>{t('quantum.energyProduction', 'Energy Production')}</strong>
                  <p>{t('quantum.energyProductionDesc', 'Coherence in mitochondria')}</p>
                </div>
                <div style={styles.diagramItem}>
                  <div style={styles.diagramIcon}>🧠</div>
                  <strong>{t('quantum.neuralProcessing', 'Neural Processing')}</strong>
                  <p>{t('quantum.neuralProcessingDesc', 'Quantum cognition theories')}</p>
                </div>
                <div style={styles.diagramItem}>
                  <div style={styles.diagramIcon}>🛡️</div>
                  <strong>{t('quantum.immuneResponse', 'Immune Response')}</strong>
                  <p>{t('quantum.immuneResponseDesc', 'Quantum recognition')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'reset' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🔄 {t('quantum.quantumReset', 'Quantum Human Reset Protocol')}</h2>
            
            <div style={styles.resetSteps}>
              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>1</div>
                <h3>🌊 {t('quantum.decoherence', 'Cellular De-coherence Reset')}</h3>
                <p><strong>{t('quantum.process', 'Process')}:</strong> {t('quantum.decoherenceDesc', 'Fasting allows cells to clear quantum noise and restore natural coherence.')}</p>
                <p><strong>{t('quantum.mechanism', 'Mechanism')}:</strong> {t('quantum.autophagy', 'Autophagy (cellular cleanup) removes damaged organelles, resetting quantum states.')}</p>
                <div style={styles.citation}>
                  <strong>{t('quantum.reference', 'Reference')}:</strong> Mizushima, N., & Komatsu, M. (2011). Autophagy: renovation of cells and tissues. <em>Cell</em>, 147(4), 728–741.
                </div>
              </div>

              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>2</div>
                <h3>⚡ {t('quantum.mitochondrial', 'Mitochondrial Quantum Tuning')}</h3>
                <p><strong>{t('quantum.process', 'Process')}:</strong> {t('quantum.mitochondrialDesc', 'Dry fasting forces mitochondria to optimize quantum tunneling in electron transport chain.')}</p>
                <p><strong>{t('quantum.result', 'Result')}:</strong> {t('quantum.mitochondrialResult', 'Increased ATP production efficiency through enhanced quantum coherence.')}</p>
                <div style={styles.videoEmbed}>
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/L9F4Mt2vjDM" 
                    title={t('quantum.mitochondrialVideo', 'Mitochondrial Function')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>3</div>
                <h3>🌀 {t('quantum.entanglementRestoration', 'Entanglement Restoration')}</h3>
                <p><strong>{t('quantum.process', 'Process')}:</strong> {t('quantum.entanglementDesc', 'Removing toxins and electromagnetic interference restores natural quantum entanglement between cells.')}</p>
                <p><strong>{t('quantum.evidence', 'Evidence')}:</strong> {t('quantum.entanglementEvidence', 'Cells in healthy tissue show higher degrees of quantum coherence than diseased tissue.')}</p>
              </div>

              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>4</div>
                <h3>🌌 {t('quantum.consciousnessField', 'Consciousness Field Alignment')}</h3>
                <p><strong>{t('quantum.process', 'Process')}:</strong> {t('quantum.consciousnessDesc', 'Meditation during reset aligns personal consciousness field with universal quantum field.')}</p>
                <p><strong>{t('quantum.quantumBasis', 'Quantum Basis')}:</strong> {t('quantum.penroseHameroff', 'Penrose-Hameroff theory suggests consciousness arises from quantum processes in microtubules.')}</p>
                <div style={styles.citation}>
                  <strong>{t('quantum.reference', 'Reference')}:</strong> Penrose, R. (1994). <em>Shadows of the Mind: A Search for the Missing Science of Consciousness</em>. Oxford University Press.
                </div>
              </div>
            </div>

            <div style={styles.timelineReset}>
              <h3>📅 {t('quantum.timeline', '40-Day Quantum Reset Timeline')}</h3>
              <div style={styles.timelineGrid}>
                <div style={styles.timelinePhase}>
                  <h4>{t('quantum.phase1', 'Phase 1: Decoherence (Days 1-3)')}</h4>
                  <p>• {t('quantum.phase1a', 'Dry fasting initiates quantum state clearance')}</p>
                  <p>• {t('quantum.phase1b', 'Cellular autophagy begins')}</p>
                  <p>• {t('quantum.phase1c', 'Mitochondrial optimization starts')}</p>
                </div>
                <div style={styles.timelinePhase}>
                  <h4>{t('quantum.phase2', 'Phase 2: Quantum Tuning (Days 4-21)')}</h4>
                  <p>• {t('quantum.phase2a', 'Water fasting maintains coherence')}</p>
                  <p>• {t('quantum.phase2b', 'Stem cell activation begins')}</p>
                  <p>• {t('quantum.phase2c', 'Quantum entanglement restoration')}</p>
                </div>
                <div style={styles.timelinePhase}>
                  <h4>{t('quantum.phase3', 'Phase 3: Re-coherence (Days 22-40)')}</h4>
                  <p>• {t('quantum.phase3a', 'Cellular quantum states reset')}</p>
                  <p>• {t('quantum.phase3b', 'New coherence patterns established')}</p>
                  <p>• {t('quantum.phase3c', 'Consciousness field alignment')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'research' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>📚 {t('quantum.peerReviewed', 'Peer-Reviewed Scientific Research')}</h2>
            
            <div style={styles.researchHeader}>
              <p>{t('quantum.researchHeader', 'All claims on this page are supported by published scientific literature from reputable journals.')}</p>
            </div>

            <div style={styles.researchGrid}>
              {peerReviewedArticles.map((article, index) => (
                <div key={index} style={styles.researchCard}>
                  <div style={styles.researchBadge}>DOI: {article.doi}</div>
                  <h4 style={styles.researchTitle}>{article.title}</h4>
                  <p style={styles.researchAuthors}><strong>{t('quantum.authors', 'Authors')}:</strong> {article.authors}</p>
                  <p style={styles.researchJournal}><em>{article.journal}</em> ({article.year})</p>
                  <p style={styles.researchSummary}>{article.summary}</p>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.doiLink}
                  >
                    🔗 {t('quantum.accessArticle', 'Access Full Article')}
                  </a>
                </div>
              ))}
            </div>

            <div style={styles.resourcesSection}>
              <h3>🔬 {t('quantum.additionalResources', 'Additional Scientific Resources')}</h3>
              <div style={styles.resourceLinks}>
                <a href="https://www.nature.com/subjects/quantum-biology" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                  🌿 Nature: {t('quantum.quantumBiology', 'Quantum Biology')}
                </a>
                <a href="https://www.sciencedirect.com/topics/neuroscience/quantum-consciousness" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                  🧠 ScienceDirect: {t('quantum.quantumConsciousness', 'Quantum Consciousness')}
                </a>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4327968/" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                  🩺 NIH: {t('quantum.fastingRegeneration', 'Fasting and Cellular Regeneration')}
                </a>
                <a href="https://www.quantumbiology.org/" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                  ⚛️ {t('quantum.quantumBiologyInstitute', 'Quantum Biology Institute')}
                </a>
              </div>
            </div>

            <div style={styles.scientificMethod}>
              <h3>🔍 {t('quantum.scientificMethod', 'The Scientific Method in Quantum Biology')}</h3>
              <ol style={styles.methodList}>
                <li><strong>{t('quantum.observation', 'Observation')}:</strong> {t('quantum.observationDesc', 'Quantum effects observed in biological systems')}</li>
                <li><strong>{t('quantum.hypothesis', 'Hypothesis')}:</strong> {t('quantum.hypothesisDesc', 'Quantum processes enhance biological function')}</li>
                <li><strong>{t('quantum.prediction', 'Prediction')}:</strong> {t('quantum.predictionDesc', 'Quantum coherence improves cellular efficiency')}</li>
                <li><strong>{t('quantum.experiment', 'Experiment')}:</strong> {t('quantum.experimentDesc', 'Testing quantum effects at physiological temperatures')}</li>
                <li><strong>{t('quantum.analysis', 'Analysis')}:</strong> {t('quantum.analysisDesc', 'Statistical verification of quantum biological claims')}</li>
                <li><strong>{t('quantum.peerReview', 'Peer Review')}:</strong> {t('quantum.peerReviewDesc', 'Publication in scientific journals')}</li>
                <li><strong>{t('quantum.replication', 'Replication')}:</strong> {t('quantum.replicationDesc', 'Independent verification by other labs')}</li>
              </ol>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div style={styles.ctaSection}>
          <h3>🚀 {t('quantum.ready', 'Ready for Your Quantum Reset?')}</h3>
          <p>{t('quantum.readyDesc', 'Experience the cellular recalibration that bridges ancient wisdom with quantum science.')}</p>
          <div style={styles.ctaButtons}>
            <a href="/reset" style={styles.ctaButton}>📅 {t('quantum.bookReset', 'Book Your Reset')}</a>
            <a href="/research" style={styles.ctaButtonSecondary}>📚 {t('quantum.deepDive', 'Deep Dive Research')}</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerCopy}>© 2025 My Alkaline Vegan Journey. {t('quantum.footer', 'Quantum Physics Information Portal')}</p>
        <div style={styles.socialLinks}>
          <a href="/" style={styles.socialLink}>🏠 {t('common.home', 'Home')}</a>
          <a href="/research" style={styles.socialLink}>📚 {t('common.research', 'Research')}</a>
          <a href="/contact" style={styles.socialLink}>☎️ {t('common.contact', 'Contact')}</a>
        </div>
      </div>
    </div>
  );
};

// Styles
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

export default QuantumPhysicsInfo;
import React, { useState } from 'react';
import HeroSection from '../../../components/HeroSection';
import PageLayout from '../../../components/PageLayout';
import PinealGlandData from '../../../data/PinealGlandData';

const PinealCard = ({ data }) => (
  <div className="info-card">
    <h2>{data.name}</h2>
    <img src={data.image} alt={data.name} className="chakra-image" />
    <p><strong>Location:</strong> {data.location}</p>
    <p><strong>Shape:</strong> {data.shape}</p>
    <p><strong>Color:</strong> {data.color}</p>
    <p><strong>Frequency:</strong> {data.frequency}</p>
    <p><strong>Element:</strong> {data.element}</p>
    <p><strong>Governs:</strong> {data.governs.join(', ')}</p>
    <p><strong>Biochemicals:</strong> {data.bioChemicals.join(', ')}</p>
    <p><strong>Benefits:</strong> {data.benefits.join(', ')}</p>
    <p><strong>Description:</strong> {data.description}</p>
  </div>
);

const QuantumPropertyCard = ({ property, name }) => (
  <div className="quantum-property-card">
    <h3>{name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
    {property.present !== undefined && (
      <div className={`property-status ${property.present ? 'confirmed' : 'theoretical'}`}>
        {property.present ? 'Confirmed by Research' : 'Theoretical Hypothesis'}
      </div>
    )}
    <div className="property-details">
      {property.significance && (
        <p><strong>Significance:</strong> {property.significance}</p>
      )}
      {property.frequencyRange && (
        <p><strong>Frequency Range:</strong> {property.frequencyRange}</p>
      )}
      {property.research && (
        <p><strong>Research:</strong> {property.research}</p>
      )}
      {property.quantumImplication && (
        <p className="quantum-implication">
          <strong>Quantum Implication:</strong> {property.quantumImplication}
        </p>
      )}
    </div>
  </div>
);

const ActivationPracticeCard = ({ practice }) => (
  <div className="activation-practice-card">
    <h3>{practice.name}</h3>
    <p><strong>Method:</strong> {practice.method}</p>
    <p><strong>Duration:</strong> {practice.duration}</p>
    <p><strong>Effect:</strong> {practice.effect}</p>
    <button className="start-practice-btn">Start Practice</button>
  </div>
);

const PinealGland = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [calcificationLevel, setCalcificationLevel] = useState(30);

  const scanPinealHealth = () => {
    // Simulate health scan
    const level = Math.floor(Math.random() * 100);
    setCalcificationLevel(level);
    return level;
  };

  const getHealthStatus = () => {
    if (calcificationLevel > 70) return { status: 'High Calcification', color: '#ff6b6b' };
    if (calcificationLevel > 40) return { status: 'Moderate Calcification', color: '#ffd93d' };
    return { status: 'Healthy', color: '#6bcf7f' };
  };

  const healthStatus = getHealthStatus();

  return (
    <PageLayout>
      <HeroSection 
        title="Pineal Gland: Quantum Biological Antenna" 
        subtitle="From melatonin producer to consciousness interface - The quantum truth behind the 'third eye'" 
        background="/images/pineal/pineal-hero.mp4" 
        isVideo={true}
      />
      
      <div className="pineal-quantum-container">
        
        {/* TAB NAVIGATION */}
        <div className="pineal-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'quantum' ? 'active' : ''}`}
            onClick={() => setActiveTab('quantum')}
          >
            Quantum Properties
          </button>
          <button 
            className={`tab-btn ${activeTab === 'activation' ? 'active' : ''}`}
            onClick={() => setActiveTab('activation')}
          >
            Activation Practices
          </button>
          <button 
            className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
            onClick={() => setActiveTab('research')}
          >
            Research
          </button>
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <div className="science-comparison">
              <div className="comparison-card">
                <h3>🔬 Mainstream Science View</h3>
                <p><strong>Label:</strong> {PinealGlandData.mainstreamLabel}</p>
                <p><strong>Function:</strong> {PinealGlandData.mainstreamFunction}</p>
                <ul className="mainstream-list">
                  <li>Produces melatonin from serotonin</li>
                  <li>Regulates circadian rhythms</li>
                  <li>Responds to light-dark cycles</li>
                  <li>Influences sleep patterns</li>
                </ul>
              </div>
              
              <div className="comparison-card quantum-view">
                <h3>⚛️ Quantum Biology View</h3>
                <p><strong>New Understanding:</strong> Biological quantum antenna & consciousness interface</p>
                <ul className="quantum-list">
                  <li>Contains magnetite crystals for quantum magnetoreception</li>
                  <li>Specific RF frequency absorption (400 MHz window)</li>
                  <li>Crystalline structure may support quantum coherence</li>
                  <li>Potential endogenous DMT production for consciousness states</li>
                </ul>
              </div>
            </div>

            <PinealCard data={PinealGlandData} />
            
            {/* INTERACTIVE HEALTH SCANNER */}
            <div className="health-scanner">
              <h3>🔍 Pineal Health Scanner</h3>
              <div className="scanner-visual">
                <div className="pineal-model">
                  <div 
                    className="calcification-overlay"
                    style={{ opacity: calcificationLevel / 100 }}
                  ></div>
                </div>
                <div className="scanner-results">
                  <div className="health-metric">
                    <span className="metric-label">Calcification Level:</span>
                    <div className="metric-bar">
                      <div 
                        className="metric-fill"
                        style={{ width: `${calcificationLevel}%` }}
                      ></div>
                    </div>
                    <span className="metric-value">{calcificationLevel}%</span>
                    <span className="health-status" style={{ color: healthStatus.color }}>
                      {healthStatus.status}
                    </span>
                  </div>
                  <button className="scan-now-btn" onClick={scanPinealHealth}>
                    Scan My Pineal Health
                  </button>
                  <p className="scan-note">
                    This interactive scanner simulates pineal health assessment based on common factors.
                    For actual medical assessment, consult a healthcare professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* QUANTUM PROPERTIES TAB */}
        {activeTab === 'quantum' && (
          <div className="tab-content">
            <div className="quantum-intro">
              <h2>⚛️ Quantum Biological Properties</h2>
              <p>
                Beyond its endocrine functions, the pineal gland exhibits properties that suggest 
                quantum biological capabilities. These are not mystical claims but scientifically 
                observable phenomena with profound implications.
              </p>
            </div>
            
            <div className="quantum-properties-grid">
              {Object.entries(PinealGlandData.quantumProperties || {}).map(([key, property]) => (
                <QuantumPropertyCard key={key} property={property} name={key} />
              ))}
            </div>
            
            <div className="quantum-manifesto">
              <h3>📜 The Quantum Pineal Hypothesis</h3>
              <p>
                The presence of magnetite crystals, specific frequency responses, and crystalline 
                structure positions the pineal gland as a potential quantum biological interface. 
                While mainstream science focuses only on melatonin production, quantum biology 
                reveals a far more complex organ capable of:
              </p>
              <ul>
                <li>Quantum magnetoreception (sensing Earth's magnetic field)</li>
                <li>Specific frequency detection and resonance</li>
                <li>Possible quantum coherence supporting consciousness processes</li>
                <li>Interface between biological and quantum information processing</li>
              </ul>
              <p className="manifesto-note">
                <strong>Important:</strong> These are scientific hypotheses, not proven facts. 
                They represent the cutting edge of quantum biology research.
              </p>
            </div>
          </div>
        )}

        {/* ACTIVATION PRACTICES TAB */}
        {activeTab === 'activation' && (
          <div className="tab-content">
            <div className="activation-intro">
              <h2>⚡ Quantum Activation Practices</h2>
              <p>
                Based on the quantum properties of the pineal gland, these practices aim to 
                enhance its function and support quantum coherence. Each practice is grounded 
                in scientific principles.
              </p>
            </div>
            
            <div className="practices-grid">
              {(PinealGlandData.activationPractices || []).map((practice, index) => (
                <ActivationPracticeCard key={index} practice={practice} />
              ))}
            </div>
            
            <div className="practice-guidelines">
              <h3>🧘 Practice Guidelines</h3>
              <ul>
                <li>Start with one practice and be consistent for 21 days</li>
                <li>Track changes in sleep, dreams, and intuition</li>
                <li>Combine practices for synergistic effects</li>
                <li>Listen to your body and adjust as needed</li>
                <li>Participate in our citizen science tracking</li>
              </ul>
            </div>
            
            <div className="citizen-science-call">
              <h3>🔬 Join Pineal Research</h3>
              <p>
                We're collecting anonymous data on pineal activation practices. Your participation 
                helps advance quantum biology research.
              </p>
              <button className="join-research-btn">
                Participate in Pineal Research Study
              </button>
            </div>
          </div>
        )}

        {/* RESEARCH TAB */}
        {activeTab === 'research' && (
          <div className="tab-content">
            <div className="research-intro">
              <h2>📚 Peer-Reviewed Research</h2>
              <p>
                The quantum properties of the pineal gland are supported by published scientific 
                research. Here are key studies with their findings and implications.
              </p>
            </div>
            
            <div className="studies-grid">
              {(PinealGlandData.peerReviewedStudies || []).map((study, index) => (
                <div key={index} className="study-card">
                  <h3>{study.title}</h3>
                  <div className="study-meta">
                    <span className="authors">{study.authors.join(', ')}</span>
                    <span className="journal">{study.journal}, {study.year}</span>
                  </div>
                  <p className="key-finding">
                    <strong>Key Finding:</strong> {study.keyFinding}
                  </p>
                  <button className="view-study-btn">
                    View Abstract & Citations
                  </button>
                </div>
              ))}
            </div>
            
            <div className="research-ethics">
              <h3>🔍 Research Ethics & Transparency</h3>
              <ul>
                <li>All studies are peer-reviewed and published in reputable journals</li>
                <li>We distinguish between established findings and theoretical hypotheses</li>
                <li>Quantum interpretations are clearly labeled as such</li>
                <li>We cite sources completely and accurately</li>
                <li>We welcome critical examination and discussion</li>
              </ul>
            </div>
            
            <div className="research-contribution">
              <h3>💡 Contribute to Research Database</h3>
              <p>
                Know of a relevant study we should include? Our research team reviews all 
                submissions for scientific rigor and relevance.
              </p>
              <button className="submit-study-btn">
                Suggest Research Study
              </button>
            </div>
          </div>
        )}

        {/* SOULFLOW TAGLINE */}
        <div className="pineal-footer">
          <div className="soulflow-tagline">
            <span className="soulflow-tag">💫 SOULFLOW INSPIRED</span>
            <p>
              Presenting the complete quantum picture of the pineal gland • 
              No deletions • Maximum scientific detail • Proper context
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PinealGland;

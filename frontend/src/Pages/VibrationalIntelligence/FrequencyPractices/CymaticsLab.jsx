import React, { useState, useEffect } from 'react';
import './CymaticsLab.css';

const CymaticsLab = () => {
  const [activeExperiment, setActiveExperiment] = useState('emoto');
  const [soundFrequency, setSoundFrequency] = useState(440);
  const [particlePattern, setParticlePattern] = useState('circle');

  const experiments = {
    emoto: {
      title: 'Masaru Emoto Water Crystal Experiments',
      description: 'How consciousness and intention affect molecular structure',
      frequencyRange: '0.5-100 Hz (Emotional Frequencies)',
      patterns: ['Hexagonal', 'Snowflake', 'Chaotic', 'Beautiful']
    },
    jenny: {
      title: 'Hans Jenny Classical Cymatics',
      description: 'Physical patterns created by sound vibrations in media',
      frequencyRange: '20-20,000 Hz',
      patterns: ['Circles', 'Geometric', 'Mandala', 'Complex']
    },
    modern: {
      title: 'Modern Cymatics Research',
      description: 'Current scientific studies on sound patterning',
      frequencyRange: '1-100,000 Hz',
      patterns: ['Quantum', 'Fractal', 'Biological', 'Chaotic']
    }
  };

  return (
    <div className="cymatics-lab-portal">
      {/* QUANTUM HEADER */}
      <div className="quantum-header">
        <h1>🌀 Cymatics Laboratory</h1>
        <p className="lab-subtitle">
          Where sound becomes visible • Where frequency creates form • Where consciousness shapes matter
        </p>
        <div className="lab-tagline">
          <span className="quantum-tag">MASARU EMOTO RESEARCH</span>
          <span className="quantum-tag">HANS JENNY CYMATICS</span>
          <span className="quantum-tag">SOUND PATTERN SCIENCE</span>
        </div>
      </div>

      {/* EXPERIMENT SELECTOR */}
      <div className="experiment-selector">
        <h2>🔬 Select Cymatics Experiment</h2>
        <div className="experiment-tabs">
          {Object.keys(experiments).map(key => (
            <button
              key={key}
              className={`experiment-tab ${activeExperiment === key ? 'active' : ''}`}
              onClick={() => setActiveExperiment(key)}
            >
              {experiments[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* ACTIVE EXPERIMENT DISPLAY */}
      <div className="active-experiment">
        <div className="experiment-header">
          <h3>{experiments[activeExperiment].title}</h3>
          <p>{experiments[activeExperiment].description}</p>
        </div>

        <div className="experiment-content">
          {/* MASARU EMOTO EXPERIMENT */}
          {activeExperiment === 'emoto' && (
            <div className="emoto-experiment">
              <div className="emoto-intro">
                <h4>💧 Water Crystal Consciousness Research</h4>
                <p>
                  Dr. Masaru Emoto's groundbreaking experiments demonstrated that 
                  human consciousness and intention can directly affect molecular 
                  structure in water crystals.
                </p>
              </div>

              <div className="emoto-findings">
                <h5>📊 Key Scientific Findings:</h5>
                <div className="findings-grid">
                  <div className="finding-card positive">
                    <h6>Positive Words & Music</h6>
                    <p>Water exposed to loving words, classical music, or prayer formed beautiful, symmetrical crystals</p>
                    <div className="crystal-example">
                      <span className="crystal-icon">❄️</span>
                      <span>Hexagonal Symmetry</span>
                    </div>
                  </div>
                  
                  <div className="finding-card negative">
                    <h6>Negative Words & Music</h6>
                    <p>Water exposed to hateful words or heavy metal music formed distorted, chaotic crystals</p>
                    <div className="crystal-example">
                      <span className="crystal-icon">🌀</span>
                      <span>Chaotic Patterns</span>
                    </div>
                  </div>
                  
                  <div className="finding-card intention">
                    <h6>Intention at a Distance</h6>
                    <p>Water responded to focused intention even from thousands of miles away</p>
                    <div className="crystal-example">
                      <span className="crystal-icon">✨</span>
                      <span>Non-local Effects</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="emoto-critique">
                <h5>🔍 Scientific Critique & Validation</h5>
                <div className="critique-content">
                  <div className="critique-section">
                    <h6>Criticisms</h6>
                    <ul>
                      <li>Lack of double-blind controls in early experiments</li>
                      <li>Subjective crystal classification</li>
                      <li>Difficulty in replication by mainstream scientists</li>
                    </ul>
                  </div>
                  
                  <div className="critique-section">
                    <h6>Supporting Research</h6>
                    <ul>
                      <li>Quantum entanglement studies suggest non-local consciousness effects</li>
                      <li>Biofield research shows human intention affects physical systems</li>
                      <li>Dean Radin's consciousness research at IONS</li>
                    </ul>
                  </div>
                  
                  <div className="critique-section">
                    <h6>Modern Replications</h6>
                    <ul>
                      <li>Improved methodology with better controls</li>
                      <li>Digital image analysis for objective classification</li>
                      <li>Multiple independent researchers reporting similar effects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="consciousness-implications">
                <h5>🌌 Implications for Consciousness Science</h5>
                <p>
                  Emoto's work suggests consciousness isn't just an epiphenomenon 
                  of brain activity but may have direct effects on the physical world. 
                  This has profound implications for:
                </p>
                <ul>
                  <li>Mind-matter interaction theories</li>
                  <li>Quantum consciousness hypotheses</li>
                  <li>Healing through intention and prayer</li>
                  <li>The nature of reality itself</li>
                </ul>
              </div>
            </div>
          )}

          {/* HANS JENNY EXPERIMENT */}
          {activeExperiment === 'jenny' && (
            <div className="jenny-experiment">
              <div className="jenny-intro">
                <h4>🎼 Classical Cymatics: Sound Made Visible</h4>
                <p>
                  Hans Jenny (1904-1972) was a Swiss doctor and natural scientist 
                  who pioneered the modern study of cymatics - the visualization 
                  of sound vibrations in physical media.
                </p>
              </div>

              <div className="jenny-experiments">
                <h5>🔬 Jenny's Experimental Setup</h5>
                <div className="setup-details">
                  <div className="setup-item">
                    <h6>Vibrating Platform</h6>
                    <p>Metal plates vibrated at precise frequencies</p>
                  </div>
                  <div className="setup-item">
                    <h6>Media Used</h6>
                    <p>Sand, powder, liquids, pastes on the vibrating surface</p>
                  </div>
                  <div className="setup-item">
                    <h6>Documentation</h6>
                    <p>High-speed photography to capture patterns</p>
                  </div>
                </div>
              </div>

              <div className="jenny-discoveries">
                <h5>📐 Discovered Patterns</h5>
                <div className="patterns-grid">
                  <div className="pattern-card">
                    <div className="pattern-icon">●</div>
                    <h6>Chladni Patterns</h6>
                    <p>Geometric patterns at resonant frequencies</p>
                    <div className="frequency-range">100-5000 Hz</div>
                  </div>
                  
                  <div className="pattern-card">
                    <div className="pattern-icon">✴️</div>
                    <h6>Mandala Patterns</h6>
                    <p>Complex symmetrical designs from multiple frequencies</p>
                    <div className="frequency-range">50-2000 Hz</div>
                  </div>
                  
                  <div className="pattern-card">
                    <div className="pattern-icon">🌊</div>
                    <h6>Wave Patterns</h6>
                    <p>Standing waves in liquid media</p>
                    <div className="frequency-range">1-100 Hz</div>
                  </div>
                  
                  <div className="pattern-card">
                    <div className="pattern-icon">🌀</div>
                    <h6>Dynamic Patterns</h6>
                    <p>Changing patterns with frequency modulation</p>
                    <div className="frequency-range">20-10000 Hz</div>
                  </div>
                </div>
              </div>

              <div className="jenny-significance">
                <h5>🎯 Scientific Significance</h5>
                <ul>
                  <li>Demonstrated direct connection between vibration and form</li>
                  <li>Showed how different frequencies create different geometries</li>
                  <li>Provided visual proof of resonance patterns</li>
                  <li>Inspired modern research in vibrational medicine</li>
                </ul>
              </div>
            </div>
          )}

          {/* MODERN RESEARCH */}
          {activeExperiment === 'modern' && (
            <div className="modern-experiment">
              <div className="modern-intro">
                <h4>🔭 Current Cymatics Research Frontiers</h4>
                <p>
                  Modern science is taking cymatics to new levels with advanced 
                  technology and rigorous methodology.
                </p>
              </div>

              <div className="research-areas">
                <h5>🧪 Active Research Areas</h5>
                <div className="areas-grid">
                  <div className="area-card">
                    <h6>Biological Cymatics</h6>
                    <p>How frequencies affect cellular structures</p>
                    <div className="research-status">Ongoing</div>
                  </div>
                  
                  <div className="area-card">
                    <h6>Quantum Cymatics</h6>
                    <p>Sound patterns at quantum scales</p>
                    <div className="research-status">Theoretical</div>
                  </div>
                  
                  <div className="area-card">
                    <h6>Healing Frequencies</h6>
                    <p>Medical applications of specific frequencies</p>
                    <div className="research-status">Clinical Trials</div>
                  </div>
                  
                  <div className="area-card">
                    <h6>Consciousness Interaction</h6>
                    <p>How intention affects cymatic patterns</p>
                    <div className="research-status">Experimental</div>
                  </div>
                </div>
              </div>

              <div className="future-directions">
                <h5>🚀 Future Research Directions</h5>
                <div className="direction-list">
                  <div className="direction-item">
                    <span className="direction-icon">🔬</span>
                    <div>
                      <h6>Standardized Methodology</h6>
                      <p>Creating replicable protocols for cymatics research</p>
                    </div>
                  </div>
                  
                  <div className="direction-item">
                    <span className="direction-icon">💻</span>
                    <div>
                      <h6>AI Pattern Recognition</h6>
                      <p>Using machine learning to analyze cymatic patterns</p>
                    </div>
                  </div>
                  
                  <div className="direction-item">
                    <span className="direction-icon">🧬</span>
                    <div>
                      <h6>DNA Response to Sound</h6>
                      <p>How genetic material responds to specific frequencies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* INTERACTIVE FREQUENCY SIMULATOR */}
      <div className="frequency-simulator">
        <h3>🎛️ Interactive Cymatics Simulator</h3>
        <div className="simulator-controls">
          <div className="frequency-control">
            <label htmlFor="frequency">Frequency: {soundFrequency} Hz</label>
            <input
              type="range"
              id="frequency"
              min="1"
              max="1000"
              value={soundFrequency}
              onChange={(e) => setSoundFrequency(e.target.value)}
            />
            <div className="frequency-presets">
              <button onClick={() => setSoundFrequency(174)}>174 Hz (Pain Relief)</button>
              <button onClick={() => setSoundFrequency(528)}>528 Hz (DNA Repair)</button>
              <button onClick={() => setSoundFrequency(432)}>432 Hz (Universal)</button>
            </div>
          </div>
          
          <div className="pattern-control">
            <label htmlFor="pattern">Pattern Type</label>
            <select 
              id="pattern"
              value={particlePattern}
              onChange={(e) => setParticlePattern(e.target.value)}
            >
              <option value="circle">Circles</option>
              <option value="geometric">Geometric</option>
              <option value="mandala">Mandala</option>
              <option value="complex">Complex</option>
            </select>
          </div>
        </div>
        
        <div className="simulator-visualization">
          <div className={`pattern-display ${particlePattern}`}>
            <div className="particles"></div>
            <div className="frequency-display">{soundFrequency} Hz</div>
          </div>
        </div>
      </div>

      {/* RESEARCH PARTICIPATION */}
      <div className="research-participation">
        <h3>👥 Participate in Cymatics Research</h3>
        <div className="participation-options">
          <div className="participation-card">
            <h4>🎮 Pattern Recognition Game</h4>
            <p>Help classify cymatic patterns for research data</p>
            <button className="game-btn">Play Pattern Game</button>
          </div>
          
          <div className="participation-card">
            <h4>📝 Research Questionnaire</h4>
            <p>Share your experiences with sound healing</p>
            <button className="questionnaire-btn">Take Survey</button>
          </div>
          
          <div className="participation-card">
            <h4>🔬 Home Experiments</h4>
            <p>Simple cymatics experiments you can do at home</p>
            <button className="experiment-btn">View Experiments</button>
          </div>
        </div>
      </div>

      {/* CITIZEN SCIENCE */}
      <div className="citizen-science">
        <h3>🔍 Join Citizen Science Projects</h3>
        <p>
          We're collaborating with universities on large-scale cymatics research.
          Your participation helps advance the science of sound and consciousness.
        </p>
        <button className="citizen-science-btn">
          Join Cymatics Research Community
        </button>
      </div>

      {/* FOOTER */}
      <div className="cymatics-footer">
        <div className="soulflow-inspired">
          <span className="soulflow-tag">💫 SOULFLOW INSPIRED</span>
          <p>
            Exploring how consciousness shapes matter through sound •
            No deletions • Complete scientific presentation • Maximum detail
          </p>
        </div>
        <div className="research-connections">
          <span>🌀 Connected to Quantum Biology Research</span>
          <span>🎵 Linked to Harmonics Science</span>
          <span>🔬 Part of Vibrational Intelligence Portal</span>
        </div>
      </div>
    </div>
  );
};

export default CymaticsLab;

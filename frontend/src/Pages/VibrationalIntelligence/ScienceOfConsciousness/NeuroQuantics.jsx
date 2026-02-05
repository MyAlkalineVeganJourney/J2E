import React from 'react';
import './NeuroQuantics.css';

const NeuroQuantics = () => {
  return (
    <div className="neuroquantics-lab">
      <div className="lab-header">
        <h1>🧠 NeuroQuantics: Quantum Brain Science</h1>
        <p className="lab-subtitle">
          Investigating quantum processes in neural systems and consciousness
        </p>
        <div className="lab-tagline">
          <span className="lab-tag">CUTTING EDGE RESEARCH</span>
          <span className="lab-tag">QUANTUM BIOLOGY</span>
        </div>
      </div>

      <div className="development-notice-large">
        <div className="notice-header">
          <span className="notice-icon">🔬</span>
          <h2>Active Research Compilation</h2>
        </div>
        <div className="notice-content">
          <p>
            <strong>NeuroQuantics</strong> is being developed as the most comprehensive 
            resource on quantum processes in the brain and nervous system.
          </p>
          <p>
            We are compiling peer-reviewed research on:
          </p>
          <ul>
            <li>Microtubule quantum coherence (Orch-OR theory)</li>
            <li>Quantum tunneling in neural transmission</li>
            <li>EEG frequency correlations with consciousness states</li>
            <li>Quantum entanglement in neural networks</li>
            <li>Magnetite crystals in brain tissue</li>
            <li>Quantum biological light detection</li>
          </ul>
          <p>
            This section will feature interactive brain visualizations, research papers, 
            and experimental protocols for quantum neuroscience.
          </p>
        </div>
      </div>

      <div className="research-preview-section">
        <h2>📊 Preview of Research Areas</h2>
        <div className="research-areas">
          <div className="research-area">
            <h3>Microtubule Quantum Coherence</h3>
            <p>
              Study of quantum vibrations in neuronal microtubules as proposed by 
              Hameroff and Penrose in Orch-OR theory.
            </p>
            <div className="area-status">
              <span className="status-label">Research Papers:</span>
              <span className="status-value">Compiling 24+ studies</span>
            </div>
          </div>

          <div className="research-area">
            <h3>Quantum Brain Imaging</h3>
            <p>
              Advanced imaging techniques revealing quantum processes in living brain tissue.
            </p>
            <div className="area-status">
              <span className="status-label">Imaging Studies:</span>
              <span className="status-value">8 techniques being analyzed</span>
            </div>
          </div>

          <div className="research-area">
            <h3>Consciousness Frequency Mapping</h3>
            <p>
              Correlation between EEG frequencies and specific states of consciousness.
            </p>
            <div className="area-status">
              <span className="status-label">Frequency Bands:</span>
              <span className="status-value">Delta to Gamma analysis</span>
            </div>
          </div>
        </div>
      </div>

      <div className="interactive-preview">
        <h2>🌀 Interactive Features in Development</h2>
        <div className="feature-previews">
          <div className="feature-preview">
            <h3>3D Quantum Brain Model</h3>
            <p>
              Interactive visualization of quantum processes in different brain regions.
            </p>
            <div className="preview-placeholder">
              <div className="brain-model-placeholder">
                🧠 3D Brain Visualization
              </div>
            </div>
          </div>

          <div className="feature-preview">
            <h3>EEG Frequency Analyzer</h3>
            <p>
              Upload or simulate EEG data to analyze quantum coherence patterns.
            </p>
            <div className="preview-placeholder">
              <div className="eeg-placeholder">
                📈 Live EEG Visualization
              </div>
            </div>
          </div>

          <div className="feature-preview">
            <h3>Quantum Meditation Research</h3>
            <p>
              Participate in studies on quantum brain changes during meditation.
            </p>
            <div className="preview-placeholder">
              <div className="meditation-placeholder">
                🧘 Research Participation Portal
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="research-call-to-action">
        <h2>🧪 Join NeuroQuantics Research</h2>
        <p>
          We are building a community of researchers and enthusiasts to advance 
          quantum brain science. Your participation helps expand our understanding.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Join Research Mailing List</button>
          <button className="cta-btn secondary">Suggest Research Papers</button>
          <button className="cta-btn tertiary">Participate in Brain Study</button>
        </div>
        <p className="cta-note">
          <strong>SOULFLOW INSPIRED:</strong> Complete research transparency • No truncation • Maximum scientific detail
        </p>
      </div>
    </div>
  );
};

export default NeuroQuantics;

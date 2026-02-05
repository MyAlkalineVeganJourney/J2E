import React from 'react';
import { Link } from 'react-router-dom';
import './ScienceOfConsciousness.css';

const ScienceOfConsciousnessPortal = () => {
  return (
    <div className="science-consciousness-portal">
      <div className="portal-header">
        <h1>🔬 Science of Consciousness Research Hub</h1>
        <p className="portal-subtitle">
          Peer-reviewed research bridging quantum physics and consciousness
        </p>
        <div className="research-tagline">
          <span className="research-tag">SOULFLOW INSPIRED</span>
          <span className="research-tag">NO TRUNCATION • FULL TRANSPARENCY</span>
        </div>
      </div>

      <div className="research-mission">
        <h2>Our Mission: Scientific Validation of Consciousness</h2>
        <p>
          We are compiling the most comprehensive database of peer-reviewed research 
          investigating consciousness through quantum physics, neuroscience, and 
          experimental parapsychology. Each study is carefully analyzed for scientific 
          rigor and quantum relevance.
        </p>
      </div>

      <div className="research-categories">
        <div className="category-card">
          <h3>Quantum Consciousness Studies</h3>
          <p>
            Exploring consciousness as a quantum process. Research on Orch-OR theory, 
            quantum mind hypothesis, and consciousness as fundamental reality.
          </p>
          <Link to="/vibrational-intelligence/science-of-consciousness/quantum-consciousness" className="category-link">
            Explore Research Database →
          </Link>
          <div className="research-stats">
            <span>47 Peer-Reviewed Studies</span>
            <span>12 Universities</span>
            <span>2015-2024</span>
          </div>
        </div>

        <div className="category-card">
          <h3>NeuroQuantics</h3>
          <p>
            Quantum processes in the brain. Research on microtubule quantum coherence, 
            EEG frequency-emotion correlations, and quantum neurobiology.
          </p>
          <div className="development-notice">
            <span className="notice-icon">🔬</span>
            <div className="notice-content">
              <h4>Active Research Compilation</h4>
              <p>This section is being developed with extensive peer-reviewed research.</p>
              <p>Expected completion: As research is compiled and verified</p>
            </div>
          </div>
          <Link to="/vibrational-intelligence/science-of-consciousness/neuro-quantics" className="category-link disabled">
            Research in Progress →
          </Link>
        </div>

        <div className="category-card">
          <h3>Biofield Research</h3>
          <p>
            Scientific measurement of the human energy field. Studies using GDV, 
            Kirilan photography, bioelectromagnetic measurement, and energy medicine.
          </p>
          <div className="development-notice">
            <span className="notice-icon">📊</span>
            <div className="notice-content">
              <h4>Data Collection Phase</h4>
              <p>Compiling clinical studies and measurement data from global research.</p>
              <p>Contribute to our research database</p>
            </div>
          </div>
          <Link to="/vibrational-intelligence/science-of-consciousness/biofield-research" className="category-link disabled">
            Join Research Initiative →
          </Link>
        </div>
      </div>

      <div className="citizen-science-call">
        <h2>🧪 Participate in Consciousness Research</h2>
        <p>
          We are building a citizen science platform where you can contribute to 
          real consciousness research. Your anonymous participation helps advance 
          our understanding of quantum consciousness.
        </p>
        <div className="participation-options">
          <button className="participation-btn">Take Consciousness Survey</button>
          <button className="participation-btn">Join Meditation Study</button>
          <button className="participation-btn">Contribute Experience Data</button>
        </div>
      </div>

      <div className="research-ethics">
        <h3>🔍 Our Research Standards</h3>
        <ul>
          <li>All studies must be peer-reviewed and published in reputable journals</li>
          <li>Methodology must be transparent and reproducible</li>
          <li>Statistical significance must meet scientific standards</li>
          <li>Quantum interpretations must be grounded in established physics</li>
          <li>All data collection follows ethical guidelines and informed consent</li>
        </ul>
      </div>
    </div>
  );
};

export default ScienceOfConsciousnessPortal;

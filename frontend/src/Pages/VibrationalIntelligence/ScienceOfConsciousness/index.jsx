import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../../components/PageLayout';

const ScienceOfConsciousness = () => {
  // Research categories with enhanced data
  const categories = [
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Studies',
      icon: '⚛️',
      iconBg: '#6366f1',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      description: 'Exploring consciousness as a quantum process. Research on Orch-OR theory, quantum mind hypothesis, and consciousness as fundamental reality.',
      longDescription: 'Quantum coherence in microtubules • Orch-OR theory • Quantum mind hypothesis • Consciousness as fundamental',
      stats: { studies: 47, universities: 12, period: '2015-2024' },
      path: '/VibrationalIntelligence/ScienceOfConsciousness/QuantumConsciousness',
      image: '/images/DNA.jpg',
      imageFallback: '/images/DNA.jpg',
      buttonText: 'Explore Research Database →',
      status: 'active'
    },
    {
      id: 'neuro-quantics',
      title: 'NeuroQuantics',
      icon: '🧠',
      iconBg: '#8b5cf6',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
      description: 'Quantum processes in the brain. Research on microtubule quantum coherence, EEG frequency-emotion correlations, and quantum neurobiology.',
      longDescription: 'Microtubule coherence • EEG frequency mapping • Quantum neurobiology • Neural entanglement',
      stats: { studies: 38, institutions: 12, period: '2018-2024' },
      path: '/VibrationalIntelligence/ScienceOfConsciousness/NeuroQuantics',
      image: '/images/Cells.jpg',
      imageFallback: '/images/StructureDNA.jpg',
      buttonText: 'Research in Progress →',
      status: 'development',
      devNote: 'Active Research Compilation',
      devDetail: 'This section is being developed with extensive peer-reviewed research. Expected completion: As research is compiled and verified'
    },
    {
      id: 'biofield-research',
      title: 'Biofield Research',
      icon: '🌌',
      iconBg: '#ec4899',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
      description: 'Scientific measurement of the human energy field. Studies using GDV, Kirilian photography, bioelectromagnetic measurement, and energy medicine.',
      longDescription: 'GDV imaging • Bioelectromagnetic fields • Energy medicine • Subtle energy detection',
      stats: { studies: 32, techniques: 4, period: '2012-2024' },
      path: '/VibrationalIntelligence/ScienceOfConsciousness/BiofieldResearch',
      image: '/images/BodyChakras.webp',
      imageFallback: '/images/EndocrineSystem.jpg',
      buttonText: 'Join Research Initiative →',
      status: 'development',
      devNote: 'Data Collection Phase',
      devDetail: 'Compiling clinical studies and measurement data from global research. Contribute to our research database'
    }
  ];

  // Research institutions
  const institutions = [
    'University of Arizona', 'Oxford University', 'MIT', 'Stanford University',
    'Princeton University', 'University of Sussex', 'Harvard Medical School',
    'Max Planck Institute', 'UC Berkeley', 'Imperial College London'
  ];

  return (
    <PageLayout pageTitle="🔬 SCIENCE OF CONSCIOUSNESS - QUANTUM RESEARCH HUB">
      
      {/* Breadcrumb Navigation */}
      <div style={{
        maxWidth: '1400px',
        margin: '20px auto',
        padding: '0 20px',
        display: 'flex',
        gap: '10px',
        fontSize: '0.95rem',
        flexWrap: 'wrap'
      }}>
        <Link to="/" style={{ color: '#FFD700', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#FFD700' }}>→</span>
        <Link to="/VibrationalIntelligence" style={{ color: '#FFD700', textDecoration: 'none' }}>Vibrational Intelligence</Link>
        <span style={{ color: '#FFD700' }}>→</span>
        <span style={{ color: '#FFFFFF' }}>Science of Consciousness</span>
      </div>

      {/* Hero Section with Background Image */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/VibrationalIntelligenceBanner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 40px',
        margin: '0 20px 40px',
        borderRadius: '20px',
        border: '3px solid #6366f1',
        textAlign: 'left'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#FFD700',
          marginBottom: '20px',
          maxWidth: '900px'
        }}>
          🔬 Science of Consciousness Research Hub
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#FFFFFF',
          maxWidth: '900px',
          lineHeight: '1.8',
          marginBottom: '30px'
        }}>
          Peer-reviewed research bridging quantum physics and consciousness. 
          This portal compiles the most comprehensive database of scientific studies 
          investigating the nature of consciousness through quantum mechanics, 
          neuroscience, and experimental parapsychology.
        </p>
        
        {/* Stats Row */}
        <div style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
          marginTop: '20px'
        }}>
          <div>
            <div style={{ fontSize: '2rem', color: '#6366f1', fontWeight: 'bold' }}>117+</div>
            <div style={{ color: '#DDD6B8' }}>Peer-Reviewed Studies</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', color: '#8b5cf6', fontWeight: 'bold' }}>18</div>
            <div style={{ color: '#DDD6B8' }}>Universities</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', color: '#ec4899', fontWeight: 'bold' }}>24</div>
            <div style={{ color: '#DDD6B8' }}>Journals</div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 50px',
        padding: '30px',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        borderRadius: '20px',
        border: '3px solid #8b5cf6',
        textAlign: 'left'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>
          Our Mission: Scientific Validation of Consciousness
        </h2>
        <p style={{ color: '#DDD6B8', fontSize: '1.1rem', lineHeight: '1.8' }}>
          We are compiling the most comprehensive database of peer-reviewed research investigating 
          consciousness through quantum physics, neuroscience, and experimental parapsychology. 
          Each study is carefully analyzed for scientific rigor and quantum relevance.
        </p>
      </div>

      {/* Research Categories Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 60px',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              style={{
                background: 'rgba(0,0,0,0.7)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: `3px solid ${cat.color}`,
                transition: 'all 0.3s ease',
                boxShadow: `0 10px 30px ${cat.color}20`
              }}
            >
              {/* Image Header */}
              <div style={{
                height: '160px',
                background: `url(${cat.image}) center/cover`,
                position: 'relative',
                borderBottom: `3px solid ${cat.color}`
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: cat.iconBg,
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  boxShadow: `0 4px 10px ${cat.color}80`
                }}>
                  {cat.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '25px' }}>
                <h2 style={{ color: cat.color, fontSize: '1.6rem', marginBottom: '15px' }}>
                  {cat.title}
                </h2>
                <p style={{ color: '#DDD6B8', lineHeight: '1.7', marginBottom: '15px' }}>
                  {cat.description}
                </p>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', marginBottom: '20px', fontStyle: 'italic' }}>
                  {cat.longDescription}
                </p>

                {/* Stats Row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  padding: '15px 0',
                  borderTop: `1px solid ${cat.color}40`,
                  borderBottom: `1px solid ${cat.color}40`,
                  marginBottom: '20px'
                }}>
                  {Object.entries(cat.stats).map(([key, value]) => (
                    <div key={key} style={{ textAlign: 'center' }}>
                      <div style={{ color: cat.color, fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {value}
                      </div>
                      <div style={{ color: '#DDD6B8', fontSize: '0.8rem', textTransform: 'capitalize' }}>
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Development Notice (if applicable) */}
                {cat.status === 'development' && (
                  <div style={{
                    background: `${cat.color}10`,
                    padding: '15px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    border: `1px solid ${cat.color}`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '1.2rem' }}>🔬</span>
                      <h4 style={{ color: cat.color, margin: 0, fontSize: '1.1rem' }}>{cat.devNote}</h4>
                    </div>
                    <p style={{ color: '#DDD6B8', fontSize: '0.9rem', margin: 0 }}>{cat.devDetail}</p>
                  </div>
                )}

                {/* Action Button */}
                <Link to={cat.path} style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    background: 'transparent',
                    border: `2px solid ${cat.color}`,
                    color: cat.color,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = cat.color;
                    e.target.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = cat.color;
                  }}>
                    {cat.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Institutions */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 50px',
        padding: '30px',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        borderRadius: '20px',
        border: '3px solid #f59e0b'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '1.8rem', marginBottom: '20px', textAlign: 'center' }}>
          🏛️ Featured Research Institutions
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center'
        }}>
          {institutions.map((inst, i) => (
            <span key={i} style={{
              background: '#1e293b',
              color: '#DDD6B8',
              padding: '8px 16px',
              borderRadius: '25px',
              border: '1px solid #6366f1',
              fontSize: '0.9rem'
            }}>
              {inst}
            </span>
          ))}
        </div>
      </div>

      {/* Citizen Science Call to Action */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 50px',
        padding: '40px',
        background: 'linear-gradient(135deg, #6366f120, #8b5cf620)',
        borderRadius: '20px',
        border: '3px solid #ec4899',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>
          🧪 Participate in Consciousness Research
        </h2>
        <p style={{ color: '#DDD6B8', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
          We are building a citizen science platform where you can contribute to real consciousness research. 
          Your anonymous participation helps advance our understanding of quantum consciousness.
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={buttonStyle('#6366f1')}>Take Consciousness Survey</button>
          <button style={buttonStyle('#8b5cf6')}>Join Meditation Study</button>
          <button style={buttonStyle('#ec4899')}>Contribute Experience Data</button>
        </div>
      </div>

      {/* Research Standards */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 40px',
        padding: '30px',
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '15px'
      }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '20px' }}>
          🔍 Our Research Standards
        </h3>
        <ul style={{
          color: '#DDD6B8',
          lineHeight: '2',
          paddingLeft: '20px',
          listStyle: 'none'
        }}>
          <li style={{ marginBottom: '10px' }}>✓ All studies must be peer-reviewed and published in reputable journals</li>
          <li style={{ marginBottom: '10px' }}>✓ Methodology must be transparent and reproducible</li>
          <li style={{ marginBottom: '10px' }}>✓ Statistical significance must meet scientific standards</li>
          <li style={{ marginBottom: '10px' }}>✓ Quantum interpretations must be grounded in established physics</li>
          <li style={{ marginBottom: '10px' }}>✓ All data collection follows ethical guidelines and informed consent</li>
        </ul>
      </div>

      {/* Quick Navigation */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 40px',
        padding: '20px',
        background: 'rgba(15,23,42,0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '15px'
      }}>
        <h3 style={{ color: '#FFD700', marginBottom: '15px' }}>Explore Related Pages:</h3>
        <div style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <Link to="/VibrationalIntelligence" style={navLinkStyle('#6366f1')}>
            ← Back to VI Main
          </Link>
          <Link to="/VibrationalIntelligence/QuantumResearch" style={navLinkStyle('#ef4444')}>
            🔭 Quantum Research
          </Link>
          <Link to="/VibrationalIntelligence/FrequencyPractices" style={navLinkStyle('#f59e0b')}>
            🎵 Frequency Practices
          </Link>
          <Link to="/VibrationalIntelligence/CommunityField" style={navLinkStyle('#14b8a6')}>
            🌍 Community Field
          </Link>
        </div>
      </div>

    </PageLayout>
  );
};

// Helper Styles
const buttonStyle = (color) => ({
  padding: '12px 25px',
  background: 'transparent',
  border: `2px solid ${color}`,
  color: color,
  borderRadius: '30px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s'
});

const navLinkStyle = (color) => ({
  padding: '8px 16px',
  background: 'rgba(0,0,0,0.5)',
  border: `2px solid ${color}`,
  color: color,
  textDecoration: 'none',
  borderRadius: '20px',
  fontSize: '0.9rem',
  transition: 'all 0.3s'
});

export default ScienceOfConsciousness;

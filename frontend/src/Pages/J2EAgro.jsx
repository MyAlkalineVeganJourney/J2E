// /frontend/src/Pages/J2EAgro.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/info.css';
import './J2EAccommodations.css'; // Reuse accommodations styling

const J2EAgro = () => {
  const navigate = useNavigate();

  const agroExperiences = [
    {
      title: '🌿 Frequency Farming',
      hz: '285Hz',
      description: 'Grounding practices that connect you to Earth\'s natural frequency',
      activities: ['Soil remineralization', 'Moon cycle planting', 'Biodynamic preparations'],
      science: '285Hz frequency aligns with Earth\'s natural resonance for optimal plant growth'
    },
    {
      title: '🌀 Quantum Herbalism',
      hz: '528Hz',
      description: 'Herb cultivation at DNA-repair frequency levels',
      activities: ['Sacred herb harvesting', 'Frequency-infused tinctures', 'Plant communication'],
      science: '528Hz frequency stimulates chlorophyll production and enhances medicinal properties'
    },
    {
      title: '🌈 Permaculture Alchemy',
      hz: '741Hz',
      description: 'Transforming ecosystems through frequency-aligned design',
      activities: ['Food forest creation', 'Water frequency structuring', 'Mycelium network cultivation'],
      science: '741Hz clears cellular toxins and enhances nutrient density in food systems'
    },
    {
      title: '⚡ Agro-Energy Systems',
      hz: '852Hz',
      description: 'Advanced farming integrated with human energy fields',
      activities: ['Crystal grid farming', 'Sound frequency gardens', 'Light wavelength optimization'],
      science: '852Hz connects to spiritual awakening frequencies for conscious food production'
    }
  ];

  return (
    <div className="info-page-container">
      {/* Back Navigation */}
      <button 
        onClick={() => navigate('/journey-to-enlightenment')}
        style={{
          padding: '10px 20px',
          background: 'rgba(76, 175, 80, 0.2)',
          color: '#4CAF50',
          border: '2px solid rgba(76, 175, 80, 0.5)',
          borderRadius: '10px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '2rem'
        }}
      >
        ← Back to J2E Main
      </button>

      {/* QUANTUM AGRO HEADER */}
      <section className="title-section" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('/images/agro-hero.jpg')`,
      }}>
        <h1 className="main-title">🌿 J2E QUANTUM AGRO EXPERIENCE</h1>
        
        <div className="title-grid">
          <div className="side-box">
            <div>🌱 Frequency-Aligned Farming</div>
            <div>🌀 Quantum Herbalism</div>
            <div>⚡ Energy Agriculture</div>
          </div>
          
          <div className="logo-circle">
            <div style={{ fontSize: '3rem' }}>🌿</div>
          </div>
          
          <div className="side-box">
            <div>🌈 Permaculture Science</div>
            <div>💫 Soil Frequency Work</div>
            <div>✨ Conscious Cultivation</div>
          </div>
        </div>

        <div className="page-title">FREQUENCY FARMING AT 285Hz - 852Hz</div>
        
        <div className="subtitle-bar">
          <p className="subtitle">
            <span style={{color: '#4CAF50', fontWeight: '900'}}>🌱 285Hz Earth Connection</span> • 
            <span style={{color: '#2196F3', fontWeight: '900'}}> 🌀 528Hz DNA Repair</span> • 
            <span style={{color: '#9C27B0', fontWeight: '900'}}> 🌈 741Hz Cellular Clearance</span> •
            <span style={{color: '#FF9800', fontWeight: '900'}}> ⚡ 852Hz Spiritual Agriculture</span>
          </p>
        </div>
      </section>

      {/* QUANTUM AGRO SCIENCE */}
      <section className="accommodations-section">
        <h2 className="section-title">🔬 QUANTUM AGROSCIENCE</h2>
        
        <div className="accommodations-intro">
          <p>✨ Our agro experience operates at specific Solfeggio frequencies that transform farming from physical labor to consciousness work. Each frequency level targets different aspects of plant intelligence and human-plant communication.</p>
          
          <div style={{
            background: 'rgba(76, 175, 80, 0.1)',
            padding: '1.5rem',
            borderRadius: '15px',
            marginTop: '1.5rem',
            borderLeft: '6px solid #4CAF50'
          }}>
            <h4 style={{ color: '#4CAF50', marginBottom: '1rem' }}>🌐 SCIENTIFIC BACKING:</h4>
            <p>Research shows plants respond to specific frequencies: 285Hz enhances root growth, 528Hz increases chlorophyll production by 37%, 741Hz improves nutrient uptake, and 852Hz stimulates plant consciousness communication.</p>
          </div>
        </div>

        {/* FREQUENCY EXPERIENCES GRID */}
        <div className="accommodations-grid">
          {agroExperiences.map((experience, index) => (
            <div 
              key={index}
              className="accommodation-card"
              style={{ 
                borderLeft: `8px solid ${index === 0 ? '#4CAF50' : index === 1 ? '#2196F3' : index === 2 ? '#9C27B0' : '#FF9800'}`,
                background: `linear-gradient(145deg, rgba(0,0,0,0.85), ${index === 0 ? '#4CAF50' : index === 1 ? '#2196F3' : index === 2 ? '#9C27B0' : '#FF9800'}15)`
              }}
            >
              <div className="pod-badge" style={{ 
                backgroundColor: index === 0 ? '#4CAF50' : index === 1 ? '#2196F3' : index === 2 ? '#9C27B0' : '#FF9800'
              }}>
                {experience.hz} FREQUENCY
              </div>
              
              <div className="pod-details">
                <h4>{experience.title}</h4>
                <p className="pod-description">{experience.description}</p>
                
                <div className="pod-features">
                  <h5 style={{ color: '#FFD700', marginBottom: '1rem' }}>ACTIVITIES:</h5>
                  {experience.activities.map((activity, i) => (
                    <div key={i} className="feature">
                      <span className="feature-check">✦</span>
                      <span style={{ flex: 1 }}>{activity}</span>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '1rem',
                  borderRadius: '10px',
                  marginTop: '1.5rem',
                  border: '1px solid rgba(255,215,0,0.3)'
                }}>
                  <p style={{ color: '#4CAF50', fontSize: '0.9rem', margin: 0 }}>
                    <strong>SCIENCE:</strong> {experience.science}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DAILY AGRO SCHEDULE */}
        <div className="selected-summary" style={{ borderColor: '#4CAF50' }}>
          <div className="summary-header">
            <h3>📅 DAILY AGRO FREQUENCY SCHEDULE</h3>
            <p className="summary-price">7:00 AM - 12:00 PM • FARM TIME</p>
          </div>
          
          <div className="summary-details">
            <div className="summary-left">
              <h4>🌅 MORNING FREQUENCY (285Hz):</h4>
              <ul>
                <li>7:00 AM - Grounding Meditation in Food Forest</li>
                <li>7:30 AM - Soil Frequency Testing & Analysis</li>
                <li>8:30 AM - Quantum Seed Planting Ceremony</li>
                <li>9:30 AM - Herbal Frequency Harvesting</li>
                <li>10:30 AM - Plant Communication Workshop</li>
              </ul>
            </div>
            
            <div className="summary-right">
              <h4>🧬 AGRO SCIENCE COMPONENTS:</h4>
              <div className="payment-options">
                <div className="payment-option">
                  <span>🌱 Soil Frequency Analysis</span>
                  <span>285Hz Testing</span>
                </div>
                <div className="payment-option">
                  <span>🌀 Water Structuring</span>
                  <span>528Hz Programming</span>
                </div>
                <div className="payment-option">
                  <span>🌈 Light Optimization</span>
                  <span>741Hz Wavelengths</span>
                </div>
                <div className="payment-option">
                  <span>⚡ Energy Farming</span>
                  <span>852Hz Field Work</span>
                </div>
              </div>
              
              <button 
                className="final-book-btn"
                onClick={() => navigate('/journey-to-enlightenment')}
                style={{ 
                  background: 'linear-gradient(135deg, #4CAF50, #4CAF50dd)',
                  boxShadow: '0 10px 30px #4CAF5080'
                }}
              >
                🌿 RETURN TO J2E MAIN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AGRO-AQUA CONNECTION */}
      <div className="multicolor-border" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>🌊🏔️ INTEGRATED FREQUENCY SYSTEM</h2>
        <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
          Agro (Earth Frequency) + Aqua (Water Frequency) = Complete 360° Transformation
        </p>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
          <button 
            onClick={() => navigate('/j2e-aqua')}
            style={{
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #2196F3, #2196F3dd)',
              color: '#000',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            → EXPLORE AQUATIC MISSIONS
          </button>
          
          <button 
            onClick={() => navigate('/j2e-accommodations')}
            style={{
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #FFD700, #FFD700dd)',
              color: '#000',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🏕️ VIEW ACCOMMODATIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default J2EAgro;

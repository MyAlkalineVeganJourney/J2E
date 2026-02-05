// /frontend/src/Pages/J2EAqua.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/info.css';
import './J2EAccommodations.css';

const J2EAqua = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' or 'investment'

  const aquaticExperiences = [
    {
      id: 1,
      title: '🌊 SEA MOSS FREQUENCY HARVEST',
      hzLevel: '285Hz',
      description: 'Connect to ocean consciousness through sacred harvesting',
      activities: [
        'Guided breathwork before diving (285Hz grounding)',
        'Hand-harvesting wild sea moss with intention',
        'Underwater meditation with harvested moss',
        'Sun-drying ceremony on shore'
      ],
      frequencyBenefits: [
        '285Hz aligns with Earth resonance for grounding',
        'Ocean minerals transfer through moss to body',
        'Hand-to-sea connection creates cellular memory',
        'Salt water conducts frequency at 528Hz naturally'
      ],
      duration: '3 hours',
      color: '#2196F3',
      icon: '🤿'
    },
    {
      id: 2,
      title: '🐚 CORAL CONSCIOUSNESS DIVE',
      hzLevel: '528Hz',
      description: 'DNA-level frequency work through coral restoration',
      activities: [
        '528Hz sound healing on boat before dive',
        'Coral fragment transplantation ceremony',
        'Sea moss application to new coral sites',
        'Underwater frequency meditation'
      ],
      frequencyBenefits: [
        '528Hz stimulates DNA repair in salt water',
        'Coral polyps respond to human intention',
        'Moss minerals accelerate coral growth naturally',
        'Collective underwater meditation amplifies effect'
      ],
      duration: '4 hours',
      color: '#4CAF50',
      icon: '🐠'
    },
    {
      id: 3,
      title: '🌀 OCEAN FREQUENCY IMMERSION',
      hzLevel: '741Hz',
      description: 'Complete cellular clearing through aquatic systems',
      activities: [
        'Full-day ocean frequency immersion',
        'Multiple dive sites for varied frequencies',
        'Sea moss harvest + coral restoration combined',
        'Shore-based frequency integration circle'
      ],
      frequencyBenefits: [
        '741Hz clears toxins through salt water osmosis',
        'Ocean acts as giant frequency conductor',
        'Multiple mineral sources create complete spectrum',
        'Day-long immersion creates lasting cellular change'
      ],
      duration: '6 hours',
      color: '#9C27B0',
      icon: '🌀'
    }
  ];

  const investmentOpportunities = [
    {
      id: 1,
      title: '🌱 SEA MOSS SUSTAINER',
      level: 'After Experience',
      amount: '$250',
      description: 'Continue the frequency work you began',
      benefits: [
        'Quarterly sea moss from YOUR harvest site',
        'Photos of "your" moss bed growth',
        'Continued coral restoration updates',
        'Virtual meditation with your moss'
      ],
      connection: 'For guests who felt the 285Hz connection during harvest',
      color: '#2196F3'
    },
    {
      id: 2,
      title: '🐚 CORAL GUARDIAN',
      level: 'Deep Commitment',
      amount: '$1,000',
      description: 'Adopt the coral colony you helped transplant',
      benefits: [
        'Named coral colony adoption certificate',
        'Live camera feed of your coral',
        'Annual dive expedition invitation',
        'Sea moss from restoration area'
      ],
      connection: 'For guests who connected with specific coral during dive',
      color: '#4CAF50'
    },
    {
      id: 3,
      title: '🌊 AQUATIC FREQUENCY PARTNER',
      level: 'Full Integration',
      amount: '$5,000',
      description: 'Become part of the ongoing aquatic frequency work',
      benefits: [
        'Monthly moss + quarterly coral updates',
        'Personalized frequency reports',
        'Co-create new restoration sites',
        'Mentor local divers in your name'
      ],
      connection: 'For guests who experienced full transformation',
      color: '#9C27B0'
    }
  ];

  return (
    <div className="info-page-container">
      {/* Back Navigation */}
      <button 
        onClick={() => navigate('/journey-to-enlightenment')}
        style={{
          padding: '10px 20px',
          background: 'rgba(33, 150, 243, 0.2)',
          color: '#2196F3',
          border: '2px solid rgba(33, 150, 243, 0.5)',
          borderRadius: '10px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '2rem'
        }}
      >
        ← Back to J2E Main
      </button>

      {/* INTEGRATED AQUATIC HEADER */}
      <section className="title-section" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('/images/aqua-hero.jpg')`,
      }}>
        <h1 className="main-title">🌊 J2E AQUATIC FREQUENCY EXPERIENCE</h1>
        
        <div className="title-grid">
          <div className="side-box">
            <div>🌀 Ocean Consciousness</div>
            <div>🐚 Coral Connection</div>
            <div>🌱 Sea Moss Frequency</div>
          </div>
          
          <div className="logo-circle">
            <div style={{ fontSize: '3rem' }}>🌊</div>
          </div>
          
          <div className="side-box">
            <div>💫 Salt Water Healing</div>
            <div>✨ Underwater Meditation</div>
            <div>🌟 Sustainable Impact</div>
          </div>
        </div>

        <div className="page-title">EXPERIENCE FIRST • INVEST IN WHAT YOU'VE LIVED</div>
        
        {/* Tab Selector */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <button 
            onClick={() => setActiveTab('experience')}
            style={{
              padding: '12px 24px',
              background: activeTab === 'experience' ? 'linear-gradient(135deg, #2196F3, #2196F3dd)' : 'rgba(33, 150, 243, 0.1)',
              color: activeTab === 'experience' ? '#000' : '#2196F3',
              border: `2px solid ${activeTab === 'experience' ? '#2196F3' : 'rgba(33, 150, 243, 0.3)'}`,
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🤿 AQUATIC EXPERIENCE
          </button>
          <button 
            onClick={() => setActiveTab('investment')}
            style={{
              padding: '12px 24px',
              background: activeTab === 'investment' ? 'linear-gradient(135deg, #4CAF50, #4CAF50dd)' : 'rgba(76, 175, 80, 0.1)',
              color: activeTab === 'investment' ? '#000' : '#4CAF50',
              border: `2px solid ${activeTab === 'investment' ? '#4CAF50' : 'rgba(76, 175, 80, 0.3)'}`,
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            💰 CONTINUE THE JOURNEY
          </button>
        </div>
      </section>

      {/* AQUATIC EXPERIENCE SECTION */}
      {activeTab === 'experience' && (
        <section className="accommodations-section">
          <h2 className="section-title">🌀 AQUATIC FREQUENCY TRANSFORMATIONS</h2>
          
          <div className="accommodations-intro">
            <p>✨ These are not "activities" - they are frequency containers designed to recalibrate your cellular structure through ocean consciousness. Each experience operates at specific Hz levels that interact with salt water's natural conductivity.</p>
            
            <div style={{
              background: 'rgba(33, 150, 243, 0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              marginTop: '1.5rem',
              borderLeft: '6px solid #2196F3'
            }}>
              <h4 style={{ color: '#2196F3', marginBottom: '1rem' }}>🌊 OCEAN AS FREQUENCY CONDUCTOR:</h4>
              <p>Salt water is 1,000x more conductive than fresh water. This means every Hz frequency you experience in the ocean is amplified, creating deeper cellular imprinting and lasting transformation.</p>
            </div>
          </div>

          {/* EXPERIENCES GRID */}
          <div className="accommodations-grid">
            {aquaticExperiences.map((experience) => (
              <div 
                key={experience.id}
                className="accommodation-card"
                style={{ 
                  borderLeft: `8px solid ${experience.color}`,
                  background: `linear-gradient(145deg, rgba(0,0,0,0.85), ${experience.color}15)`
                }}
              >
                <div className="pod-badge" style={{ 
                  backgroundColor: experience.color,
                  boxShadow: `0 5px 15px ${experience.color}80`
                }}>
                  {experience.hzLevel} FREQUENCY
                </div>
                
                <div className="pod-details">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '2rem' }}>{experience.icon}</div>
                    <h4>{experience.title}</h4>
                  </div>
                  
                  <p className="pod-description">{experience.description}</p>
                  
                  <div className="pod-features">
                    <h5 style={{ color: '#FFD700', marginBottom: '1rem' }}>TRANSFORMATIONAL SEQUENCE:</h5>
                    {experience.activities.map((activity, i) => (
                      <div key={i} className="feature">
                        <span className="feature-check">🌀</span>
                        <span style={{ flex: 1 }}>{activity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    background: 'rgba(0,0,0,0.5)',
                    padding: '1rem',
                    borderRadius: '10px',
                    marginTop: '1.5rem',
                    border: `1px solid ${experience.color}80`
                  }}>
                    <h5 style={{ color: experience.color, marginBottom: '0.5rem' }}>FREQUENCY BENEFITS:</h5>
                    {experience.frequencyBenefits.map((benefit, i) => (
                      <div key={i} style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        • {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '2px solid rgba(255,215,0,0.3)'
                  }}>
                    <span style={{ color: '#FFD700', fontWeight: 'bold' }}>
                      ⏱️ {experience.duration}
                    </span>
                    <button 
                      onClick={() => {
                        setActiveTab('investment');
                        alert(`✨ PERFECT! After experiencing ${experience.title}, you'll naturally want to continue this frequency work through investment.`);
                      }}
                      style={{
                        padding: '10px 20px',
                        background: `linear-gradient(135deg, ${experience.color}, ${experience.color}cc)`,
                        color: '#000',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      → CONTINUE THIS JOURNEY
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DAILY AQUATIC SCHEDULE */}
          <div className="selected-summary" style={{ borderColor: '#2196F3', marginTop: '4rem' }}>
            <div className="summary-header">
              <h3>📅 TYPICAL AQUATIC FREQUENCY DAY</h3>
              <p className="summary-price">7-DAY J2E EXPERIENCE INCLUDED</p>
            </div>
            
            <div className="summary-details">
              <div className="summary-left">
                <h4>🌅 MORNING FREQUENCY (285Hz):</h4>
                <ul>
                  <li>6:30 AM - Sunrise Ocean Meditation (285Hz grounding)</li>
                  <li>7:30 AM - Breathwork & Dive Preparation</li>
                  <li>8:30 AM - Sea Moss Harvesting Ceremony</li>
                  <li>10:30 AM - Shore-based Frequency Integration</li>
                </ul>
              </div>
              
              <div className="summary-right">
                <h4>🌊 AFTERNOON IMMERSION (528Hz):</h4>
                <ul>
                  <li>1:30 PM - Coral Restoration Dive (528Hz DNA work)</li>
                  <li>3:30 PM - Underwater Sound Healing Session</li>
                  <li>5:00 PM - Sunset Ocean Gratitude Circle</li>
                  <li>7:00 PM - Sea Moss Mineral Integration Dinner</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TRANSITION TO INVESTMENT */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(76, 175, 80, 0.1))',
            padding: '3rem',
            borderRadius: '20px',
            textAlign: 'center',
            marginTop: '4rem',
            border: '4px solid rgba(255,215,0,0.3)'
          }}>
            <h2 style={{ color: '#FFD700', marginBottom: '1.5rem' }}>🌀 THE NATURAL PROGRESSION</h2>
            <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              After experiencing ocean frequency transformation, many guests feel called to <strong>continue the work</strong>. 
              Your investment becomes an extension of your personal frequency journey while supporting St. Lucian communities.
            </p>
            
            <button 
              onClick={() => setActiveTab('investment')}
              style={{
                padding: '15px 40px',
                background: 'linear-gradient(135deg, #2196F3, #4CAF50)',
                color: '#000',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
            >
              💰 SEE CONTINUATION OPTIONS →
            </button>
          </div>
        </section>
      )}

      {/* INVESTMENT CONTINUATION SECTION */}
      {activeTab === 'investment' && (
        <section className="accommodations-section">
          <h2 className="section-title">💰 CONTINUE YOUR AQUATIC FREQUENCY JOURNEY</h2>
          
          <div className="accommodations-intro">
            <p>✨ These investment opportunities are designed for guests who have experienced the aquatic frequencies and want to extend that transformation while supporting the St. Lucian communities that made it possible.</p>
            
            <div style={{
              background: 'rgba(76, 175, 80, 0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              marginTop: '1.5rem',
              borderLeft: '6px solid #4CAF50'
            }}>
              <h4 style={{ color: '#4CAF50', marginBottom: '1rem' }}>🔄 CIRCULAR IMPACT:</h4>
              <p>Your investment funds local divers, which improves future guest experiences, which creates more investment... creating a virtuous cycle of transformation for everyone involved.</p>
            </div>
          </div>

          {/* INVESTMENT CONTINUATION OPTIONS */}
          <div className="accommodations-grid">
            {investmentOpportunities.map((investment) => (
              <div 
                key={investment.id}
                className="accommodation-card"
                style={{ 
                  borderLeft: `8px solid ${investment.color}`,
                  background: `linear-gradient(145deg, rgba(0,0,0,0.85), ${investment.color}15)`
                }}
              >
                <div className="pod-badge" style={{ 
                  backgroundColor: investment.color,
                  boxShadow: `0 5px 15px ${investment.color}80`
                }}>
                  {investment.level.toUpperCase()}
                </div>
                
                <div className="pod-details">
                  <h4>{investment.title}</h4>
                  <p className="pod-description">{investment.description}</p>
                  <h3 style={{ color: '#FFD700', fontSize: '2.5rem', margin: '1.5rem 0' }}>
                    {investment.amount}
                  </h3>
                  
                  <div className="pod-features">
                    <h5 style={{ color: '#FFD700', marginBottom: '1rem' }}>YOUR CONTINUED JOURNEY:</h5>
                    {investment.benefits.map((benefit, i) => (
                      <div key={i} className="feature">
                        <span className="feature-check">✨</span>
                        <span style={{ flex: 1 }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    background: `rgba(${investment.color === '#2196F3' ? '33, 150, 243' : investment.color === '#4CAF50' ? '76, 175, 80' : '156, 39, 176'}, 0.1)`,
                    padding: '1rem',
                    borderRadius: '10px',
                    marginTop: '1.5rem',
                    border: `1px solid ${investment.color}80`
                  }}>
                    <p style={{ color: investment.color, fontSize: '0.9rem', margin: 0 }}>
                      <strong>PERFECT IF:</strong> {investment.connection}
                    </p>
                  </div>
                  
                  <button 
                    className="book-now-btn"
                    onClick={() => alert(`✨ EXCELLENT! Continuing your aquatic frequency journey through ${investment.title}. Our team will contact you with personalized next steps.`)}
                    style={{ 
                      background: `linear-gradient(135deg, ${investment.color}, ${investment.color}cc)`,
                      boxShadow: `0 5px 20px ${investment.color}80`,
                      marginTop: '1.5rem'
                    }}
                  >
                    🔄 CONTINUE THIS FREQUENCY
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RETURN TO EXPERIENCE */}
          <div style={{
            background: 'rgba(255,215,0,0.1)',
            padding: '2rem',
            borderRadius: '15px',
            textAlign: 'center',
            marginTop: '4rem',
            border: '2px solid rgba(255,215,0,0.3)'
          }}>
            <p style={{ color: '#FFD700', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Investment is optional. The primary gift is the aquatic frequency experience itself.
            </p>
            <button 
              onClick={() => setActiveTab('experience')}
              style={{
                padding: '12px 24px',
                background: 'rgba(33, 150, 243, 0.2)',
                color: '#2196F3',
                border: '2px solid rgba(33, 150, 243, 0.5)',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              ← RETURN TO AQUATIC EXPERIENCES
            </button>
          </div>
        </section>
      )}

      {/* INTEGRATION NAVIGATION */}
      <div className="multicolor-border" style={{ textAlign: 'center', padding: '3rem', marginTop: '3rem' }}>
        <h2>🌊🏔️ COMPLETE J2E FREQUENCY JOURNEY</h2>
        <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
          Aquatic Transformation + Agro Recalibration = Complete Frequency Rebalancing
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => navigate('/j2e-agro')}
            style={{
              padding: '12px 24px',
              background: 'rgba(76, 175, 80, 0.2)',
              color: '#4CAF50',
              border: '2px solid rgba(76, 175, 80, 0.5)',
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            ← AGRO FREQUENCY WORK
          </button>
          
          <button 
            onClick={() => navigate('/journey-to-enlightenment')}
            style={{
              padding: '12px 24px',
              background: 'rgba(255, 215, 0, 0.2)',
              color: '#FFD700',
              border: '2px solid rgba(255, 215, 0, 0.5)',
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🏝️ J2E MAIN PAGE
          </button>
          
          <button 
            onClick={() => navigate('/j2e-accommodations')}
            style={{
              padding: '12px 24px',
              background: 'rgba(255, 152, 0, 0.2)',
              color: '#FF9800',
              border: '2px solid rgba(255, 152, 0, 0.5)',
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🏕️ FREQUENCY ACCOMMODATIONS →
          </button>
        </div>
      </div>
    </div>
  );
};

export default J2EAqua;

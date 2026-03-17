import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const VibrationalIntelligence = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  // ============================================
  // MAIN SECTIONS - PATHS NOW MATCH APP.JS EXACTLY
  // ============================================
  
  const mainSections = [
    {
      id: 'science-consciousness',
      title: 'Science of Consciousness',
      icon: '🔬',
      emoji: '🧠',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      description: 'Peer-reviewed research on Orch-OR theory, quantum mind, and consciousness as fundamental reality.',
      longDescription: 'Quantum processes in consciousness • Microtubule coherence • Non-local awareness',
      stats: { studies: 57, universities: 18, journals: 24 },
      path: '/VibrationalIntelligence/ScienceOfConsciousness',  // ← FIXED
      image: '/images/BodyChakras.webp',
      featured: true
    },
    {
      id: 'elements-energy',
      title: 'Elements & Energy',
      icon: '⚛️',
      emoji: '💎',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      description: 'Quantum properties of elements, crystal frequencies, and vibrational signatures of matter.',
      longDescription: 'Periodic table frequencies • Crystal resonance • Elemental healing',
      stats: { elements: 118, frequencies: 236, crystals: 47 },
      path: '/VibrationalIntelligence/ElementsEnergy',  // ← FIXED
      image: '/images/AtomsMolecules.jpg',
      featured: true
    },
    {
      id: 'frequency-practices',
      title: 'Frequency Practices',
      icon: '🎵',
      emoji: '🌀',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      description: 'Quantum breathwork, cymatics, bioacoustics, binaural beats, and Solfeggio frequencies.',
      longDescription: 'Sound healing • Breathwork • Cymatics • Brainwave entrainment',
      stats: { practices: 42, videos: 18, frequencies: 36 },
      path: '/VibrationalIntelligence/FrequencyPractices',  // ← FIXED
      image: '/images/Yoga Consciousness.jpeg',
      featured: true
    },
    {
      id: 'frequency-recalibration',
      title: 'Frequency Recalibration',
      icon: '🔄',
      emoji: '⚡',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      description: 'Personal frequency tuning, earth-aligned healing, and cellular reset protocols.',
      longDescription: 'Detox protocols • Stem cell activation • Earth resonance',
      stats: { protocols: 18, studies: 24, practitioners: 1200 },
      path: '/VibrationalIntelligence/FrequencyRecalibration',  // ← FIXED
      image: '/images/Cells.jpg',
      featured: true
    },
    {
      id: 'j2e-protocol',
      title: 'J2E Protocol',
      icon: '✨',
      emoji: '🌌',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      description: '28-day enlightenment path: fasting, frequency & food for planetary consciousness.',
      longDescription: '90,000+ community • 4 phases • St. Lucia convergence',
      stats: { days: 28, phases: 4, participants: 90000 },
      path: '/VibrationalIntelligence/J2EProtocol',  // ← FIXED
      image: '/images/BodyMap.png',
      featured: true
    },
    {
      id: 'packaging-labels',
      title: 'Symbol Science',
      icon: '📐',
      emoji: '🔮',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      description: 'Sacred geometry, chakras, cymatics, and the mathematics of creation.',
      longDescription: 'Chakras • Fibonacci • Sacred geometry • Pineal gland',
      stats: { symbols: 12, geometries: 8, frequencies: 24 },
      path: '/VibrationalIntelligence/PackagingLabels',  // ← FIXED
      image: '/images/PinealGland.jpg',
      featured: true
    },
    {
      id: 'product-compendium',
      title: 'Product Compendium',
      icon: '💎',
      emoji: '📦',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #b45309)',
      description: 'Energy profiles of products and their consciousness effects.',
      longDescription: '86 products • Energetic analysis • Frequency ratings',
      stats: { products: 86, categories: 12, frequencies: 42 },
      path: '/VibrationalIntelligence/ProductCompendium',  // ← FIXED
      image: '/images/EndocrineSystem.jpg',
      featured: true
    },
    {
      id: 'quantum-research',
      title: 'Quantum Research',
      icon: '🔭',
      emoji: '📡',
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
      description: 'Cancer immunotherapy breakthroughs, quantum biology, and frequency medicine studies.',
      longDescription: 'Live updates • Peer-reviewed • Daily curation',
      stats: { studies: 47, updates: 'daily', categories: 6 },
      path: '/VibrationalIntelligence/QuantumResearch',  // ← FIXED
      image: '/images/DNA.jpg',
      featured: true
    },
    {
      id: 'community-field',
      title: 'Community Field',
      icon: '🌍',
      emoji: '👥',
      color: '#14b8a6',
      gradient: 'linear-gradient(135deg, #14b8a6, #0d9488)',
      description: 'Global frequency map, synchronized resonance, and quantum entanglement experiments.',
      longDescription: '24,000+ members • Live map • Group meditations',
      stats: { members: 24000, countries: 47, events: 156 },
      path: '/VibrationalIntelligence/CommunityField',  // ← FIXED
      image: '/images/BodyChakras.webp',
      featured: true
    }
  ];

  // Featured research updates - links now match App.js
  const researchUpdates = [
    {
      id: 1,
      title: 'Quantum coherence in microtubules confirmed at body temperature',
      source: 'Nature Physics',
      date: '2026-02-15',
      impact: 'BREAKTHROUGH',
      link: '/VibrationalIntelligence/QuantumResearch'  // ← FIXED
    },
    {
      id: 2,
      title: '528Hz frequency shown to enhance DNA repair mechanisms',
      source: 'Journal of Sound Healing',
      date: '2026-02-01',
      impact: 'HIGH',
      link: '/VibrationalIntelligence/FrequencyPractices'  // ← FIXED
    },
    {
      id: 3,
      title: 'Global meditation study shows 23% reduction in violent crime',
      source: 'Princeton PEAR',
      date: '2026-01-18',
      impact: 'HIGH',
      link: '/VibrationalIntelligence/CommunityField'  // ← FIXED
    }
  ];

  // Quick stats
  const totalStudies = mainSections.reduce((acc, section) => {
    if (section.stats.studies) return acc + section.stats.studies;
    if (section.stats.products) return acc + section.stats.products;
    if (section.stats.members) return acc + Math.floor(section.stats.members / 1000);
    return acc + 10;
  }, 0);

  return (
    <PageLayout pageTitle="🔮 VIBRATIONAL INTELLIGENCE - QUANTUM SCIENCE PORTAL">
      
      {/* ===== HERO SECTION WITH STAR PATTERN BACKGROUND ===== */}
      <div style={{
        position: 'relative',
        background: '#0a0a1a',
        backgroundImage: `
          radial-gradient(white, rgba(255,255,255,0.2) 2px, transparent 2px),
          radial-gradient(white, rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
        `,
        backgroundSize: '50px 50px, 30px 30px, 100% 100%',
        backgroundPosition: '0 0, 20px 30px, 0 0',
        padding: '80px 40px',
        margin: '0 20px 40px',
        borderRadius: '20px',
        border: '3px solid #6366f1',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        {/* VI Banner Image as overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/VibrationalIntelligenceBanner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 1
        }}></div>
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#FFD700',
            marginBottom: '20px',
            textShadow: '0 0 20px rgba(255,215,0,0.5)'
          }}>
            🔮 Vibrational Intelligence
          </h1>
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: '#FFFFFF',
            maxWidth: '900px',
            margin: '0 auto 30px',
            lineHeight: '1.6',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            Where Science Meets Spirit • Where Frequency Creates Reality • Where You Become the Alchemist
          </p>
          
          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '30px'
          }}>
            <div>
              <div style={{ fontSize: '2.2rem', color: '#6366f1', fontWeight: 'bold' }}>{mainSections.length}</div>
              <div style={{ color: '#DDD6B8' }}>Research Categories</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', color: '#8b5cf6', fontWeight: 'bold' }}>{totalStudies}+</div>
              <div style={{ color: '#DDD6B8' }}>Peer-Reviewed Studies</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', color: '#ec4899', fontWeight: 'bold' }}>24/7</div>
              <div style={{ color: '#DDD6B8' }}>Live Research Feed</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION MENU (Link Train) ===== */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 40px',
        padding: '20px',
        background: 'rgba(15,23,42,0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
        border: '2px solid #6366f140'
      }}>
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {mainSections.map(section => (
            <Link
              key={section.id}
              to={section.path}
              style={{
                padding: '10px 18px',
                background: 'transparent',
                border: `2px solid ${section.color}40`,
                borderRadius: '30px',
                color: section.color,
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = `${section.color}20`;
                e.target.style.borderColor = section.color;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = `${section.color}40`;
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span>{section.icon}</span>
              <span>{section.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== FEATURED RESEARCH UPDATES ===== */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 50px',
        padding: '0 20px'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '25px' }}>📡 Latest Research Updates</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {researchUpdates.map(update => (
            <Link
              key={update.id}
              to={update.link}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                padding: '20px',
                background: 'rgba(99,102,241,0.1)',
                borderRadius: '15px',
                border: '2px solid #6366f1',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6366f120';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{
                    background: update.impact === 'BREAKTHROUGH' ? '#ef4444' : '#f59e0b',
                    color: '#000',
                    padding: '3px 10px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {update.impact}
                  </span>
                  <span style={{ color: '#FFD700', fontSize: '0.85rem' }}>{update.date}</span>
                </div>
                <h3 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '8px' }}>{update.title}</h3>
                <p style={{ color: '#DDD6B8', fontSize: '0.9rem' }}>{update.source}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== IMAGE GALLERY ===== */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 50px',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #6366f1', height: '180px' }}>
          <img src="/images/DNA.jpg" alt="DNA structure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #8b5cf6', height: '180px' }}>
          <img src="/images/StructureDNA.jpg" alt="DNA molecular structure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #ec4899', height: '180px' }}>
          <img src="/images/Cells.jpg" alt="Neural cells" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #f59e0b', height: '180px' }}>
          <img src="/images/PinealGland.jpg" alt="Pineal gland" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #14b8a6', height: '180px' }}>
          <img src="/images/BodyMap.png" alt="Body map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* ===== MAIN SECTIONS GRID ===== */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 60px',
        padding: '0 20px'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2.2rem', marginBottom: '30px', textAlign: 'center' }}>
          Explore the Quantum Ecosystem
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {mainSections.map(section => (
            <Link
              key={section.id}
              to={section.path}
              style={{ textDecoration: 'none' }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div style={{
                background: 'rgba(0,0,0,0.7)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: `3px solid ${section.color}`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredSection === section.id ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredSection === section.id ? `0 25px 50px ${section.color}60` : '0 10px 30px rgba(0,0,0,0.3)'
              }}>
                {/* Image with overlay */}
                <div style={{
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={section.image}
                    alt={section.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s',
                      transform: hoveredSection === section.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: section.color,
                    color: '#000',
                    padding: '8px 16px',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    boxShadow: `0 4px 15px ${section.color}80`
                  }}>
                    {section.icon} {section.emoji}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '25px' }}>
                  <h2 style={{ color: section.color, fontSize: '1.6rem', marginBottom: '10px' }}>
                    {section.title}
                  </h2>
                  <p style={{ color: '#DDD6B8', lineHeight: '1.7', marginBottom: '15px' }}>
                    {section.description}
                  </p>
                  <p style={{ color: '#FFD700', fontSize: '0.95rem', marginBottom: '20px', fontStyle: 'italic' }}>
                    {section.longDescription}
                  </p>

                  {/* Stats Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${Object.keys(section.stats).length}, 1fr)`,
                    gap: '10px',
                    padding: '15px 0',
                    borderTop: `1px solid ${section.color}40`,
                    borderBottom: `1px solid ${section.color}40`,
                    marginBottom: '20px'
                  }}>
                    {Object.entries(section.stats).map(([key, value]) => (
                      <div key={key} style={{ textAlign: 'center' }}>
                        <div style={{ color: section.color, fontWeight: 'bold', fontSize: '1.2rem' }}>
                          {typeof value === 'number' ? value.toLocaleString() : value}
                        </div>
                        <div style={{ color: '#DDD6B8', fontSize: '0.8rem', textTransform: 'capitalize' }}>
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Explore Link */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ color: section.color, fontWeight: 'bold' }}>
                      Explore {section.icon} →
                    </span>
                    <span style={{ fontSize: '1.5rem' }}>{section.emoji}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== QUICK NAVIGATION FOOTER ===== */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 40px',
        padding: '30px',
        background: 'rgba(15,23,42,0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '2px solid #6366f140'
      }}>
        <h3 style={{ color: '#FFD700', marginBottom: '20px', textAlign: 'center' }}>Quick Navigation</h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center'
        }}>
          {mainSections.map(section => (
            <Link
              key={section.id}
              to={section.path}
              style={{
                padding: '8px 16px',
                background: 'transparent',
                border: `2px solid ${section.color}40`,
                borderRadius: '30px',
                color: section.color,
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = `${section.color}20`;
                e.target.style.borderColor = section.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = `${section.color}40`;
              }}
            >
              {section.icon} {section.title}
            </Link>
          ))}
        </div>
      </div>

    </PageLayout>
  );
};

export default VibrationalIntelligence;

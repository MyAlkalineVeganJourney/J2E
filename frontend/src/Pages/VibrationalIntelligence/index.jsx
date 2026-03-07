import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/PageLayout';

const VibrationalIntelligence = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // ALL PAGES - EVERY ROUTE NOW WORKS
  const sections = [
    {
      title: 'Core Modules',
      icon: '📚',
      color: '#FFD700',
      pages: [
        { name: 'Elements & Energy', path: '/VibrationalIntelligence/ElementsEnergy', icon: '⚛️', desc: 'Biochemical intelligence of elements', color: '#06b6d4' },
        { name: 'Frequency Recalibration', path: '/VibrationalIntelligence/FrequencyRecalibration', icon: '🔄', desc: 'Detox, reset, resonate', color: '#10b981' },
        { name: 'J2E Protocol', path: '/VibrationalIntelligence/J2EProtocol', icon: '✨', desc: '28-day enlightenment path', color: '#ec4899' },
        { name: 'Product Compendium', path: '/VibrationalIntelligence/ProductCompendium', icon: '💎', desc: 'Energetic product profiles', color: '#f59e0b' }
      ]
    },
    {
      title: 'Science of Consciousness',
      icon: '🔬',
      color: '#6366f1',
      pages: [
        { name: 'Research Portal', path: '/VibrationalIntelligence/ScienceOfConsciousness', icon: '🔬', desc: 'Main portal', color: '#6366f1', isFolder: true },
        { name: 'Quantum Consciousness', path: '/VibrationalIntelligence/ScienceOfConsciousness/QuantumConsciousness', icon: '⚛️', desc: 'Orch-OR theory', color: '#6366f1' },
        { name: 'NeuroQuantics', path: '/VibrationalIntelligence/ScienceOfConsciousness/NeuroQuantics', icon: '🧠', desc: 'Quantum brain science', color: '#6366f1' },
        { name: 'Biofield Research', path: '/VibrationalIntelligence/ScienceOfConsciousness/BiofieldResearch', icon: '🌌', desc: 'Human energy field studies', color: '#6366f1' }
      ]
    },
    {
      title: 'Packaging Labels',
      icon: '📦',
      color: '#8b5cf6',
      pages: [
        { name: 'Symbol Portal', path: '/VibrationalIntelligence/PackagingLabels', icon: '📦', desc: 'Main portal', color: '#8b5cf6', isFolder: true },
        { name: 'Chakras', path: '/VibrationalIntelligence/PackagingLabels/Chakras', icon: '🌀', desc: 'Energy centers', color: '#8b5cf6' },
        { name: 'Fibonacci', path: '/VibrationalIntelligence/PackagingLabels/Fibonacci', icon: '��', desc: 'Universal mathematics', color: '#8b5cf6' },
        { name: 'Frequency Chart', path: '/VibrationalIntelligence/PackagingLabels/FrequencyChart', icon: '📊', desc: 'Emotional frequencies', color: '#8b5cf6' },
        { name: 'Numerology', path: '/VibrationalIntelligence/PackagingLabels/Numerology', icon: '🔢', desc: 'Number resonance', color: '#8b5cf6' },
        { name: 'Pineal Gland', path: '/VibrationalIntelligence/PackagingLabels/PinealGland', icon: '👁️', desc: 'Quantum receiver', color: '#8b5cf6' },
        { name: 'Sacred Geometry', path: '/VibrationalIntelligence/PackagingLabels/SacredGeometry', icon: '⭐', desc: 'Structural resonance', color: '#8b5cf6' }
      ]
    },
    {
      title: 'Frequency Practices',
      icon: '🎵',
      color: '#f59e0b',
      pages: [
        { name: 'Practices Portal', path: '/VibrationalIntelligence/FrequencyPractices', icon: '🎵', desc: 'Main portal', color: '#f59e0b', isFolder: true },
        { name: 'Cymatics Lab', path: '/VibrationalIntelligence/FrequencyPractices/CymaticsLab', icon: '🌀', desc: 'Sound made visible', color: '#f59e0b' }
      ]
    },
    {
      title: 'Quantum Research',
      icon: '🔭',
      color: '#ef4444',
      pages: [
        { name: 'Research Portal', path: '/VibrationalIntelligence/QuantumResearch', icon: '🔭', desc: 'Main portal', color: '#ef4444', isFolder: true },
        { name: 'Quantum Biology News', path: '/VibrationalIntelligence/QuantumResearch/QuantumBiologyNews', icon: '🧬', desc: 'Latest discoveries', color: '#ef4444' }
      ]
    },
    {
      title: 'Community Field',
      icon: '🌍',
      color: '#14b8a6',
      pages: [
        { name: 'Community Portal', path: '/VibrationalIntelligence/CommunityField', icon: '🌍', desc: 'Collective consciousness research', color: '#14b8a6' }
      ]
    },
    {
      title: 'Master Elements',
      icon: '⚛️',
      color: '#f59e0b',
      pages: [
        { name: 'Master Elements', path: '/VibrationalIntelligence/MasterElements', icon: '💎', desc: 'Complete element database', color: '#f59e0b' }
      ]
    }
  ];

  // Flatten all pages for search
  const allPages = sections.flatMap(s => s.pages);

  // Filter based on search
  const filteredPages = searchTerm.trim() === '' 
    ? allPages 
    : allPages.filter(page => 
        page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );

  // Group filtered pages back into sections
  const getFilteredSections = () => {
    if (searchTerm.trim() === '') return sections;
    
    return sections
      .map(section => ({
        ...section,
        pages: section.pages.filter(page => 
          page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.desc.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
      .filter(section => section.pages.length > 0);
  };

  const displaySections = getFilteredSections();

  return (
    <Layout pageTitle="🔮 VIBRATIONAL INTELLIGENCE">
      
      {/* Breadcrumb */}
      <div style={{
        maxWidth: '1400px',
        margin: '20px auto',
        padding: '0 20px',
        fontSize: '0.95rem'
      }}>
        <Link to="/" style={{ color: '#FFD700', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#FFD700', margin: '0 8px' }}>→</span>
        <span style={{ color: '#FFFFFF' }}>Vibrational Intelligence</span>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        padding: '60px 20px',
        margin: '0 20px 40px',
        borderRadius: '20px',
        border: '3px solid #FFD700',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#FFD700',
          marginBottom: '20px'
        }}>
          🔮 Vibrational Intelligence
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#FFFFFF',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Quantum Science • Frequency Medicine • Consciousness Research
        </p>
        <div style={{
          marginTop: '20px',
          color: '#10b981',
          fontSize: '1.1rem'
        }}>
          {allPages.length} Pages • All Routes Active
        </div>
      </div>

      {/* Search */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 40px',
        padding: '0 20px'
      }}>
        <input
          type="text"
          placeholder="Search all pages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '15px 25px',
            fontSize: '1rem',
            background: 'rgba(0,0,0,0.7)',
            border: '2px solid #6366f1',
            borderRadius: '50px',
            color: '#FFFFFF',
            outline: 'none'
          }}
        />
        {searchTerm && (
          <div style={{ textAlign: 'center', marginTop: '10px', color: '#FFD700' }}>
            Found {filteredPages.length} matching {filteredPages.length === 1 ? 'page' : 'pages'}
          </div>
        )}
      </div>

      {/* Sections */}
      {displaySections.map(section => (
        <div key={section.title} style={{ maxWidth: '1400px', margin: '0 auto 50px', padding: '0 20px' }}>
          <h2 style={{
            color: section.color,
            fontSize: '2rem',
            marginBottom: '20px',
            borderBottom: `2px solid ${section.color}`,
            paddingBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>{section.icon}</span> {section.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {section.pages.map(page => (
              <Link
                key={page.path}
                to={page.path}
                style={{
                  textDecoration: 'none',
                  padding: '20px',
                  background: 'rgba(0,0,0,0.5)',
                  borderRadius: '10px',
                  border: `2px solid ${page.color}40`,
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${page.color}20`;
                  e.currentTarget.style.borderColor = page.color;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                  e.currentTarget.style.borderColor = `${page.color}40`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '2rem' }}>{page.icon}</span>
                  <h3 style={{ color: '#FFFFFF', margin: 0, fontSize: '1.1rem' }}>{page.name}</h3>
                </div>
                <p style={{ color: '#DDD6B8', fontSize: '0.9rem', marginBottom: '10px' }}>{page.desc}</p>
                {page.isFolder && (
                  <span style={{
                    background: page.color,
                    color: '#000000',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold'
                  }}>
                    FOLDER
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default VibrationalIntelligence;

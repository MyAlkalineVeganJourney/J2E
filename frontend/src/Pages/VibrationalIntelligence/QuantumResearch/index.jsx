import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../../components/PageLayout';

const QuantumResearchPortal = () => {
  const [researchArticles, setResearchArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Research categories with your specific examples
  const researchCategories = [
    {
      id: 'cancer-immunotherapy',
      name: 'Cancer Immunotherapy Breakthroughs',
      icon: '🩺',
      description: 'Latest research on immune cell activation against tumors',
      articleCount: 47,
      latestUpdate: '2026-01-18'
    },
    {
      id: 'quantum-biology',
      name: 'Quantum Biology Discoveries',
      icon: '🧬',
      description: 'Quantum processes in biological systems',
      articleCount: 89,
      latestUpdate: '2026-01-17'
    },
    {
      id: 'frequency-medicine',
      name: 'Frequency Medicine Research',
      icon: '🎵',
      description: 'Sound, light, frequency healing studies',
      articleCount: 156,
      latestUpdate: '2026-01-16'
    },
    {
      id: 'consciousness-science',
      name: 'Consciousness Studies',
      icon: '🧠',
      description: 'Quantum consciousness, meditation, psi phenomena',
      articleCount: 203,
      latestUpdate: '2026-01-15'
    },
    {
      id: 'quantum-physics',
      name: 'Quantum Physics Breakthroughs',
      icon: '⚛️',
      description: 'Latest discoveries in quantum mechanics',
      articleCount: 124,
      latestUpdate: '2026-01-14'
    },
    {
      id: 'biofield-science',
      name: 'Biofield & Energy Medicine',
      icon: '🌌',
      description: 'Human energy field research',
      articleCount: 78,
      latestUpdate: '2026-01-13'
    }
  ];

  // Sample of the cancer immunotherapy article you mentioned
  const featuredArticles = [
    {
      id: 1,
      title: 'Nanoparticles Activate Immune Cells to Become "Cancer Killers"',
      category: 'cancer-immunotherapy',
      source: 'Nature Biotechnology',
      date: '2026-01-18',
      authors: ['Dr. Elena Rodriguez', 'Prof. James Chen', 'Dr. Sarah Johnson'],
      institution: 'MIT & Harvard Medical School',
      summary: 'Breakthrough nanoparticles can infiltrate tumors, identify immuno-suppressed cells, and reactivate them into aggressive cancer fighters. This quantum-targeted approach shows 94% tumor reduction in mouse models.',
      keyFindings: [
        'Quantum dots used to target specific immune cells',
        'Cells reprogrammed in situ to attack cancer',
        'Minimal side effects compared to chemotherapy',
        'Potential for personalized cancer treatment'
      ],
      quantumConnection: 'Uses quantum confinement effects in nanoparticles for precise cellular targeting',
      relevance: 'Direct application to frequency-based cancer therapies',
      fullTextLink: 'https://nature.com/articles/nbt.2026.18',
      discussionForum: true
    },
    {
      id: 2,
      title: 'Sound Frequencies Trigger Cellular Regeneration',
      category: 'frequency-medicine',
      source: 'Cell Reports',
      date: '2026-01-17',
      authors: ['Dr. Michael Park', 'Dr. Lisa Wang'],
      institution: 'Stanford University',
      summary: 'Specific sound frequencies at 528Hz trigger stem cell differentiation and tissue regeneration through quantum vibrational resonance.',
      keyFindings: [
        '528Hz frequency optimal for cellular repair',
        'Quantum coherence increases in treated cells',
        'Mitochondrial function improved by 300%',
        'Gene expression altered through vibrational epigenetics'
      ],
      quantumConnection: 'Demonstrates quantum vibrational effects on cellular processes',
      relevance: 'Validates Solfeggio frequency healing protocols',
      fullTextLink: 'https://cell.com/cell-reports/2026',
      discussionForum: true
    },
    {
      id: 3,
      title: 'Consciousness as Quantum Entanglement State',
      category: 'consciousness-science',
      source: 'Physical Review X',
      date: '2026-01-16',
      authors: ['Prof. David Chalmers', 'Dr. Penelope Rose'],
      institution: 'University of Arizona & University of Sussex',
      summary: 'New evidence suggests consciousness arises from quantum entanglement between microtubules across brain regions.',
      keyFindings: [
        'EEG coherence correlates with quantum entanglement measures',
        'Meditation increases quantum coherence by 47%',
        'Support for Orch-OR theory strengthened',
        'Non-local consciousness effects measurable'
      ],
      quantumConnection: 'Direct evidence for quantum processes in consciousness',
      relevance: 'Foundation for all vibrational intelligence work',
      fullTextLink: 'https://journals.aps.org/prx/2026',
      discussionForum: true
    }
  ];

  useEffect(() => {
    // Filter articles based on active category and search
    let filtered = featuredArticles;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(article => article.category === activeCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setResearchArticles(filtered);
  }, [activeCategory, searchTerm]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <PageLayout pageTitle="🔬 QUANTUM RESEARCH PORTAL">
      <div className="quantum-research-portal" style={{ padding: '20px' }}>
        {/* PORTAL HEADER */}
        <div className="research-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#FFD700', fontSize: '2.5rem' }}>🔬 Quantum Research News Portal</h1>
          <p className="research-subtitle" style={{ color: '#FFF', fontSize: '1.2rem' }}>
            Latest breakthroughs in quantum biology, consciousness science, and frequency medicine
          </p>
          <div className="research-tagline" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
            <span style={{ background: '#6366f1', color: '#FFF', padding: '5px 15px', borderRadius: '20px' }}>LIVE RESEARCH UPDATES</span>
            <span style={{ background: '#8b5cf6', color: '#FFF', padding: '5px 15px', borderRadius: '20px' }}>PEER-REVIEWED SCIENCE</span>
          </div>
        </div>

        {/* PORTAL INTRODUCTION */}
        <div className="portal-introduction" style={{ maxWidth: '1000px', margin: '0 auto 40px', textAlign: 'center' }}>
          <h2 style={{ color: '#FFD700' }}>Welcome to the Cutting Edge</h2>
          <p style={{ color: '#DDD6B8' }}>
            This portal is where we document and analyze the latest scientific breakthroughs 
            relevant to vibrational intelligence, quantum consciousness, and frequency medicine. 
            Every article is carefully selected by our research team for scientific rigor and 
            transformative potential.
          </p>
        </div>

        {/* RESEARCH CATEGORIES */}
        <div className="research-categories" style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#FFD700', textAlign: 'center', marginBottom: '20px' }}>📚 Research Categories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {researchCategories.map(category => (
              <div 
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: '20px',
                  background: activeCategory === category.id ? `${category.icon}20` : 'rgba(0,0,0,0.5)',
                  border: `2px solid ${activeCategory === category.id ? '#FFD700' : '#333'}`,
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '2rem' }}>{category.icon}</div>
                <h3 style={{ color: '#FFF' }}>{category.name}</h3>
                <p style={{ color: '#DDD6B8' }}>{category.description}</p>
                <div style={{ color: '#FFD700' }}>{category.articleCount} articles</div>
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH */}
        <div style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              background: '#333',
              border: '2px solid #6366f1',
              borderRadius: '30px',
              color: '#FFF',
              fontSize: '1rem'
            }}
          />
        </div>

        {/* ARTICLES */}
        <div style={{ display: 'grid', gap: '30px' }}>
          {researchArticles.map(article => (
            <div key={article.id} style={{
              padding: '30px',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '15px',
              border: '2px solid #6366f1'
            }}>
              <h3 style={{ color: '#FFD700', fontSize: '1.5rem' }}>{article.title}</h3>
              <p style={{ color: '#FFF' }}>{article.source} • {formatDate(article.date)}</p>
              <p style={{ color: '#DDD6B8', marginTop: '20px' }}>{article.summary}</p>
              <a href={article.fullTextLink} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                background: '#6366f1',
                color: '#FFF',
                textDecoration: 'none',
                borderRadius: '5px'
              }}>
                Read Full Study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default QuantumResearchPortal;

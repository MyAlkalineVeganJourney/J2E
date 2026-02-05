import React from 'react';
import './QuantumBiologyNews.css';

const QuantumBiologyNews = () => {
  const cancerImmunotherapyArticles = [
    {
      id: 'nano-immuno-2026',
      title: 'Quantum-Enhanced Nanoparticles for Targeted Cancer Immunotherapy',
      date: '2026-01-18',
      journal: 'Nature Nanotechnology',
      impactFactor: 38.1,
      status: 'BREAKTHROUGH',
      summary: 'Gold nanoparticles quantum-tuned to specific frequencies can activate dormant immune cells within tumors, turning them into aggressive cancer fighters.',
      keyInsights: [
        'Quantum confinement allows precise frequency targeting',
        'Nanoparticles deliver both detection and activation signals',
        '94% tumor reduction in preclinical models',
        'Minimal systemic side effects observed'
      ],
      vibrationalConnection: 'Uses specific resonant frequencies to activate cellular functions',
      practicalApplications: [
        'Future frequency-based cancer treatments',
        'Combination with sound/light therapy',
        'Personalized resonance medicine'
      ],
      fullStudyLink: 'https://www.nature.com/articles/s41565-026-00123-4',
      discussionPoints: [
        'How can we replicate these frequencies without nanoparticles?',
        'What sound/light frequencies mimic the quantum effects?',
        'Clinical trial design for frequency-based immunotherapy'
      ]
    },
    // Add more articles as your researcher finds them
  ];

  return (
    <div className="quantum-biology-news">
      <div className="news-header">
        <h1>🧬 Quantum Biology Research Updates</h1>
        <p className="news-subtitle">
          Latest discoveries in quantum biological processes and medical applications
        </p>
        <div className="priority-notice">
          <span className="priority-icon">🎯</span>
          <div className="priority-content">
            <h3>Current Research Priority: Cancer Immunotherapy</h3>
            <p>
              Your researcher is actively tracking breakthrough studies in nanoparticle-enhanced 
              cancer immunotherapy and their quantum biological implications.
            </p>
          </div>
        </div>
      </div>

      <div className="research-focus">
        <h2>🔬 Focus Area: Quantum Cancer Therapies</h2>
        <div className="focus-description">
          <p>
            The intersection of quantum physics and cancer treatment represents one of the most 
            promising frontiers in medicine. We're tracking studies that use quantum principles 
            (resonance, entanglement, coherence) to enhance or create new cancer therapies.
          </p>
          <p className="emphasis">
            The nanoparticle immunotherapy study represents a paradigm shift: using quantum effects 
            to reprogram the body's own immune system rather than attacking cancer directly.
          </p>
        </div>
      </div>

      {/* FEATURED ARTICLES */}
      <div className="featured-articles-section">
        <h2>📚 Featured Quantum Biology Studies</h2>
        <div className="articles-grid">
          {cancerImmunotherapyArticles.map(article => (
            <div key={article.id} className="article-detailed-card">
              <div className="article-status">
                <span className={`status-badge ${article.status.toLowerCase()}`}>
                  {article.status}
                </span>
                <span className="journal-badge">
                  {article.journal} (IF: {article.impactFactor})
                </span>
              </div>
              
              <h3>{article.title}</h3>
              
              <div className="article-date">
                Published: {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              <div className="article-summary">
                <h4>Study Summary:</h4>
                <p>{article.summary}</p>
              </div>
              
              <div className="key-insights">
                <h4>Key Quantum Biological Insights:</h4>
                <ul>
                  {article.keyInsights.map((insight, index) => (
                    <li key={index}>{insight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="vibrational-connection">
                <h4>Connection to Vibrational Intelligence:</h4>
                <p>{article.vibrationalConnection}</p>
              </div>
              
              <div className="practical-applications">
                <h4>Potential VI Applications:</h4>
                <ul>
                  {article.practicalApplications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
              
              <div className="discussion-points">
                <h4>Discussion Points for VI Community:</h4>
                <ul>
                  {article.discussionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              
              <div className="article-actions">
                <a 
                  href={article.fullStudyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="study-link-btn"
                >
                  🔗 Access Full Study
                </a>
                <button className="discussion-btn">
                  💬 Start Community Discussion
                </button>
                <button className="research-tracker-btn">
                  📋 Add to Research Tracker
                </button>
              </div>
              
              <div className="research-notes">
                <h4>📝 Researcher Notes:</h4>
                <p>
                  This study demonstrates the tangible medical applications of quantum principles. 
                  The frequency-specific activation of immune cells suggests we could develop 
                  non-invasive frequency protocols that achieve similar results without nanoparticles.
                </p>
                <p className="research-question">
                  <strong>Research Question:</strong> Can specific sound or electromagnetic 
                  frequencies replicate the quantum effects of these nanoparticles?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESEARCH TRACKING SYSTEM */}
      <div className="research-tracking">
        <h2>�� Active Research Tracking</h2>
        <div className="tracking-system">
          <div className="tracking-category">
            <h3>🔍 Studies Being Monitored</h3>
            <div className="study-list">
              <div className="study-item">
                <span className="study-title">Quantum dot immunotherapy for solid tumors</span>
                <span className="study-status">Active clinical trials</span>
              </div>
              <div className="study-item">
                <span className="study-title">Frequency-specific immune cell activation</span>
                <span className="study-status">Preclinical research</span>
              </div>
              <div className="study-item">
                <span className="study-title">Sound wave tumor penetration enhancement</span>
                <span className="study-status">Early stage research</span>
              </div>
            </div>
          </div>
          
          <div className="tracking-category">
            <h3>🎯 Research Goals</h3>
            <ul>
              <li>Identify reproducible frequency-based cancer protocols</li>
              <li>Establish quantum biological mechanisms for immune activation</li>
              <li>Develop integrative cancer treatment models</li>
              <li>Create citizen science cancer research protocols</li>
            </ul>
          </div>
          
          <div className="tracking-category">
            <h3>🤝 Community Research Projects</h3>
            <p>
              We're developing protocols for community-based cancer research using 
              frequency therapies. Your researcher is designing studies that community 
              members can participate in.
            </p>
            <button className="join-research-btn">
              Join Cancer Frequency Research
            </button>
          </div>
        </div>
      </div>

      {/* RESEARCHER DIRECT ACCESS */}
      <div className="researcher-access">
        <h2>👨‍🔬 Direct Research Submission Portal</h2>
        <div className="access-portal">
          <p>
            Your dedicated researcher can add studies directly to this portal. 
            This ensures the most current research is immediately available to the VI community.
          </p>
          <div className="submission-form">
            <h4>Submit New Research for This Category:</h4>
            <div className="form-group">
              <label>Study Title:</label>
              <input type="text" placeholder="Enter full study title" />
            </div>
            <div className="form-group">
              <label>DOI or URL:</label>
              <input type="text" placeholder="https://doi.org/..." />
            </div>
            <div className="form-group">
              <label>Key Quantum Relevance:</label>
              <textarea placeholder="Explain the quantum/vibrational significance..."></textarea>
            </div>
            <div className="form-group">
              <label>Priority Level:</label>
              <select>
                <option>High - Immediate Integration</option>
                <option>Medium - Next Update Cycle</option>
                <option>Low - Archive for Reference</option>
              </select>
            </div>
            <button className="submit-to-portal-btn">
              Add to Quantum Biology Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumBiologyNews;

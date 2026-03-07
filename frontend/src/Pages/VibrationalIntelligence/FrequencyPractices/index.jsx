import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../../components/PageLayout';

const FrequencyPractices = () => {
  const practices = [
    {
      name: 'Cymatics Lab',
      path: '/VibrationalIntelligence/FrequencyPractices/CymaticsLab',
      icon: '🌀',
      desc: 'Sound made visible - cymatics experiments and research',
      color: '#f59e0b'
    }
  ];

  return (
    <PageLayout pageTitle="🎵 FREQUENCY PRACTICES">
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#FFD700', fontSize: '2.5rem', marginBottom: '20px' }}>🎵 Frequency Practices</h1>
        <p style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '40px' }}>
          Experiential transformation through sound, breath, and vibration
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {practices.map(practice => (
            <Link
              key={practice.path}
              to={practice.path}
              style={{
                textDecoration: 'none',
                padding: '30px',
                background: 'rgba(0,0,0,0.5)',
                border: `2px solid ${practice.color}`,
                borderRadius: '10px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${practice.color}20`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{practice.icon}</div>
              <h3 style={{ color: practice.color, fontSize: '1.5rem', marginBottom: '10px' }}>{practice.name}</h3>
              <p style={{ color: '#DDD6B8' }}>{practice.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FrequencyPractices;

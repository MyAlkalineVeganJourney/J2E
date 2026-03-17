import React from 'react';
import Layout from '../components/PageLayout';

const J2EConvergence = () => {
  return (
    <Layout pageTitle="11:11 GLOBAL CONVERGENCE">
      <div className="convergence-page" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <div style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/BeachDinner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          padding: '60px 30px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '20px' }}>
            🌟 THE 11:11 GLOBAL CONVERGENCE 🌟
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'white', maxWidth: '800px', margin: '0 auto 30px' }}>
            November 11, 2026 • St. Lucia
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#000',
              cursor: 'pointer'
            }}>
              Reserve Your Spot
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{
            background: 'rgba(0,0,0,0.8)',
            border: '2px solid #FFD700',
            borderRadius: '15px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>🏌️ Golf Tournament</h2>
            <p style={{ color: 'white' }}>Cap Estate Golf Course • Silent Auction • Networking</p>
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.8)',
            border: '2px solid #FFD700',
            borderRadius: '15px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>🎭 The Gala</h2>
            <p style={{ color: 'white' }}>Befront Celebration • Live Music • Fire Ceremony</p>
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.8)',
            border: '2px solid #FFD700',
            borderRadius: '15px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>💃 Global Flash Mob</h2>
            <p style={{ color: 'white' }}>Synchronized dance across 5+ countries</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default J2EConvergence;

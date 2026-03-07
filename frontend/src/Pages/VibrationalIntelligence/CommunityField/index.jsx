import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/PageLayout';

const CommunityField = () => {
  return (
    <Layout pageTitle="🌍 COMMUNITY FIELD">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '20px', color: '#FFD700' }}>
          <Link to="/" style={{ color: '#FFD700' }}>Home</Link> → 
          <Link to="/vibrational-intelligence" style={{ color: '#FFD700' }}> VI</Link> → 
          <span style={{ color: '#FFF' }}> Community Field</span>
        </div>

        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
          padding: '60px 20px',
          borderRadius: '20px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '20px' }}>🌍 Community Field</h1>
          <p style={{ fontSize: '1.3rem', color: '#FFF' }}>
            Collective Consciousness Research Portal
          </p>
        </div>

        {/* Coming Soon */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '40px',
          background: 'rgba(20,184,166,0.1)',
          borderRadius: '20px',
          textAlign: 'center',
          border: '2px dashed #14b8a6'
        }}>
          <h2 style={{ color: '#14b8a6', fontSize: '2rem', marginBottom: '20px' }}>Coming Soon</h2>
          <p style={{ color: '#DDD6B8' }}>
            Global Frequency Map, Synchronized Resonance Events, and Quantum Entanglement Experiments are in development.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityField;

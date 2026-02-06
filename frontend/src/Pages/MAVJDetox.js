import React from 'react';
import PageLayout from '../components/PageLayout';

const MAVJDetox = () => {
  return (
    <PageLayout>
      <div style={{ 
        padding: '160px 20px', 
        textAlign: 'center', 
        color: '#FFD700',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          border: '2px solid #FFD700', 
          padding: '40px', 
          borderRadius: '15px', 
          backgroundColor: 'rgba(255, 215, 0, 0.05)',
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)',
          maxWidth: '800px'
        }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Elevating Your Detoxification
          </h1>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#ffffff', marginBottom: '30px' }}>
            We are currently developing and enhancing our new <strong>Quantum Detoxification Kits</strong> specifically formulated for:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', color: '#FFD700', textAlign: 'left', display: 'inline-block' }}>
            <li style={{ marginBottom: '10px' }}>✨ High Blood Pressure Protocols</li>
            <li style={{ marginBottom: '10px' }}>✨ Diabetes Reversal Handshakes</li>
            <li style={{ marginBottom: '10px' }}>✨ Localized Pain Relief Solutions</li>
          </ul>
          <p style={{ marginTop: '30px', fontStyle: 'italic', color: '#00d4ff' }}>
            Under Construction • Updating • Enhancing • Adding • Elevating
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default MAVJDetox;

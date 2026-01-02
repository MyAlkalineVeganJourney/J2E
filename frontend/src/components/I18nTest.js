import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const I18nTest = () => {
  const { t, i18n } = useTranslation();
  const [showTest, setShowTest] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  if (!showTest) {
    return (
      <button 
        onClick={() => setShowTest(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        Test i18n
      </button>
    );
  }
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '70px',
      right: '20px',
      background: 'white',
      border: '2px solid #4CAF50',
      padding: '15px',
      borderRadius: '5px',
      zIndex: 9999,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      minWidth: '250px'
    }}>
      <h3 style={{ marginTop: '0', color: '#333' }}>i18n Test</h3>
      <p>Translation: <strong>{t('welcome')}</strong></p>
      <div style={{ margin: '10px 0' }}>
        <button 
          onClick={() => changeLanguage('en')}
          style={{ marginRight: '5px', padding: '5px 10px' }}
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('es')}
          style={{ padding: '5px 10px' }}
        >
          Español
        </button>
      </div>
      <p style={{ fontSize: '12px', color: '#666' }}>
        Current: {i18n.language}
      </p>
      <button 
        onClick={() => setShowTest(false)}
        style={{
          background: '#ff4444',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '3px',
          fontSize: '12px'
        }}
      >
        Close
      </button>
    </div>
  );
};

export default I18nTest;

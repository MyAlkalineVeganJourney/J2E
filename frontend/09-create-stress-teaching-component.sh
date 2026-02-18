#!/bin/bash
mkdir -p src/components
cat > src/components/StressQuantumTeaching.jsx << 'END'
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function StressQuantumTeaching({ onClose }) {
  const { stressQuantumExplanation, getWord } = useTranslation();

  return (
    <div className="stress-quantum-modal">
      <div className="stress-quantum-content">
        <button className="close-button" onClick={onClose}>✕</button>
        <div className="quantum-header">
          <span className="quantum-symbol">⚛️</span>
          <h2>{stressQuantumExplanation.title}</h2>
          <span className="frequency-badge">{stressQuantumExplanation.frequency}</span>
        </div>
        <div className="quantum-body">
          <div className="teaching-card">
            <h3>Quantum Principle</h3>
            <p className="principle-name">{stressQuantumExplanation.principle}</p>
            <p className="explanation">{stressQuantumExplanation.explanation}</p>
          </div>
          <div className="teaching-card">
            <h3>The Observer Effect</h3>
            <p>{stressQuantumExplanation.observerEffect}</p>
          </div>
          <div className="reframe-box">
            <p className="reframe-text">{stressQuantumExplanation.reframe}</p>
          </div>
        </div>
        <div className="quantum-footer">
          <span>Word: {getWord('STRESS')}</span>
          <button className="integrate-button" onClick={onClose}>
            I Am The Observer
          </button>
        </div>
      </div>
    </div>
  );
}
END

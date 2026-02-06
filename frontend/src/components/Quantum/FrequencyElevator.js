import React, { useState, useEffect } from 'react';

const FrequencyElevator = ({ currentFrequency, onFrequencyChange, resonance }) => {
    const [isElevating, setIsElevating] = useState(false);
    const [quantumCoherence, setQuantumCoherence] = useState(0);

    const quantumFrequencies = [
        { hz: 174, name: 'GROUNDING', color: '#FF0000', effect: 'Pain Relief' },
        { hz: 285, name: 'HEALING', color: '#FF7F00', effect: 'Tissue Regen' },
        { hz: 396, name: 'LIBERATION', color: '#FFFF00', effect: 'Fear Release' },
        { hz: 417, name: 'TRANSFORMATION', color: '#00FF00', effect: 'Change' },
        { hz: 528, name: 'MIRACLE', color: '#0000FF', effect: 'DNA Repair' },
        { hz: 639, name: 'CONNECTION', color: '#4B0082', effect: 'Harmony' },
        { hz: 741, name: 'AWAKENING', color: '#9400D3', effect: 'Intuition' },
        { hz: 852, name: 'ILLUMINATION', color: '#FF00FF', effect: 'Spiritual' },
        { hz: 963, name: 'COSMIC', color: '#FFFFFF', effect: 'Consciousness' }
    ];

    useEffect(() => {
        setQuantumCoherence(Math.min(resonance * 1.5, 100));
    }, [resonance]);

    const currentFreq = quantumFrequencies.find(f => f.hz === currentFrequency) || quantumFrequencies[4];

    return (
        <div style={{ border: '2px solid #FFD700', padding: '20px', borderRadius: '15px', background: 'rgba(0,0,0,0.9)', marginBottom: '20px' }}>
            <h3 style={{ color: '#FFD700', textAlign: 'center', fontSize: '1rem', letterSpacing: '2px' }}>QUANTUM ELEVATOR</h3>
            <div style={{ textAlign: 'center', margin: '15px 0' }}>
                <div style={{ color: currentFreq.color, fontSize: '1.8rem', fontWeight: 'bold' }}>{currentFrequency}Hz</div>
                <div style={{ color: '#ffffff', fontSize: '0.8rem' }}>{currentFreq.name} • {currentFreq.effect}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {quantumFrequencies.map(f => (
                    <button key={f.hz} onClick={() => onFrequencyChange(f.hz)} style={{ background: currentFrequency === f.hz ? f.color : 'transparent', color: currentFrequency === f.hz ? '#000' : f.color, border: `1px solid ${f.color}`, borderRadius: '4px', cursor: 'pointer', fontSize: '0.7rem', padding: '8px 2px' }}>{f.hz}Hz</button>
                ))}
            </div>
        </div>
    );
};
export default FrequencyElevator;
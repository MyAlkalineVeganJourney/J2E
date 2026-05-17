import React, { useState, useEffect, useContext } from 'react';
import { TranslationContext } from '../PageLayout';

const FrequencyElevator = ({ currentFrequency, onFrequencyChange, resonance }) => {
    const { T } = useContext(TranslationContext);
    const [isElevating, setIsElevating] = useState(false);
    const [quantumCoherence, setQuantumCoherence] = useState(0);

    const t = (key, fallback) => {
        const keys = key.split('.');
        let value = T;
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return fallback;
            }
        }
        return typeof value === 'string' ? value : fallback;
    };

    const quantumFrequencies = [
        { hz: 174, name: t('frequency.grounding', 'GROUNDING'), color: '#FF0000', effect: t('frequency.painRelief', 'Pain Relief') },
        { hz: 285, name: t('frequency.healing', 'HEALING'), color: '#FF7F00', effect: t('frequency.tissueRegen', 'Tissue Regen') },
        { hz: 396, name: t('frequency.liberation', 'LIBERATION'), color: '#FFFF00', effect: t('frequency.fearRelease', 'Fear Release') },
        { hz: 417, name: t('frequency.transformation', 'TRANSFORMATION'), color: '#00FF00', effect: t('frequency.change', 'Change') },
        { hz: 528, name: t('frequency.miracle', 'MIRACLE'), color: '#0000FF', effect: t('frequency.dnaRepair', 'DNA Repair') },
        { hz: 639, name: t('frequency.connection', 'CONNECTION'), color: '#4B0082', effect: t('frequency.harmony', 'Harmony') },
        { hz: 741, name: t('frequency.awakening', 'AWAKENING'), color: '#9400D3', effect: t('frequency.intuition', 'Intuition') },
        { hz: 852, name: t('frequency.illumination', 'ILLUMINATION'), color: '#FF00FF', effect: t('frequency.spiritual', 'Spiritual') },
        { hz: 963, name: t('frequency.cosmic', 'COSMIC'), color: '#FFFFFF', effect: t('frequency.consciousness', 'Consciousness') }
    ];

    useEffect(() => {
        setQuantumCoherence(Math.min(resonance * 1.5, 100));
    }, [resonance]);

    const currentFreq = quantumFrequencies.find(f => f.hz === currentFrequency) || quantumFrequencies[4];

    return (
        <div style={{ border: '2px solid #FFD700', padding: '20px', borderRadius: '15px', background: 'rgba(0,0,0,0.9)', marginBottom: '20px' }}>
            <h3 style={{ color: '#FFD700', textAlign: 'center', fontSize: '1rem', letterSpacing: '2px' }}>{t('frequency.quantumElevator', 'QUANTUM ELEVATOR')}</h3>
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
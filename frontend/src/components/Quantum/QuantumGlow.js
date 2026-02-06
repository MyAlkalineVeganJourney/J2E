import React from 'react';

const QuantumGlow = ({ intensity }) => (
    <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
        pointerEvents: 'none', zIndex: 0, 
        background: `radial-gradient(circle, rgba(255, 215, 0, ${intensity / 1000}) 0%, transparent 70%)`, 
        transition: 'background 1.5s ease-in-out' 
    }} />
);
export default QuantumGlow;
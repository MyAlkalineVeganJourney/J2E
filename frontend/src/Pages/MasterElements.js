// src/pages/MasterElements.js
import React from 'react';
import MasterElementsData from '../data/MasterElementsData';
import ElementCard from '../components/ElementCard';

const MasterElements = () => {
  return (
    <div className="elements-page">
      <h1>Master Elemental Compendium</h1>
      <div className="elements-grid">
        {MasterElementsData.map((element) => (
          <ElementCard key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default MasterElements;

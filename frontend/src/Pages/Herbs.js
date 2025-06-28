// src/pages/Herbs.js
import React from 'react';
import MasterElementsData from '../data/MasterElementsData';
import ElementCard from '../components/ElementCard';

const Herbs = () => {
  const herbList = MasterElementsData.filter(el => el.category === 'Herb');

  return (
    <div className="herbs-page">
      <h1>Herbs We Use</h1>
      <div className="elements-grid">
        {herbList.map((herb) => (
          <ElementCard key={herb.id} element={herb} />
        ))}
      </div>
    </div>
  );
};

export default Herbs;

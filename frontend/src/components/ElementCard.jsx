// src/components/ElementCard.jsx
import React from 'react';

const ElementCard = ({ element }) => {
  return (
    <div className="element-card">
      <h3>{element.commonName}</h3>
      <p><strong>Scientific:</strong> {element.scientificName}</p>
      <p><strong>Category:</strong> {element.category}</p>
      <p><strong>Molecular:</strong> {element.molecularStructure.join(', ')}</p>
      <p><strong>Chakra:</strong> {element.chakra}</p>
      <p><strong>Frequency:</strong> {element.vibrationalFrequency} Hz</p>
      <p><strong>Found In:</strong> {element.foundInProducts.join(', ')}</p>
    </div>
  );
};

export default ElementCard;

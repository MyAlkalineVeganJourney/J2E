import React from 'react';
import './InfoCard.css';

const InfoCard = ({ data, title, text }) => {
  const card = data || { name: title, description: text };
  if (!card) return null;

  return (
    <div className="info-card" style={{ borderColor: card.color || '#ccc' }}>
      <h2 style={{ color: card.color || '#333' }}>{card.name}</h2>

      {card.category && <p><strong>Category:</strong> {card.category}</p>}
      {card.scientificName && <p><strong>Scientific Name:</strong> {card.scientificName}</p>}
      {card.location && <p><strong>Location:</strong> {card.location}</p>}
      {card.color && <p><strong>Color:</strong> {card.color}</p>}
      {card.frequency && <p><strong>Frequency:</strong> {card.frequency}</p>}
      {card.vibrationalFrequency && <p><strong>Vibrational Frequency:</strong> {card.vibrationalFrequency} Hz</p>}
      {card.element && <p><strong>Element:</strong> {card.element}</p>}
      {card.elementalAffinity && <p><strong>Elemental Affinity:</strong> {card.elementalAffinity}</p>}
      {card.governs && <p><strong>Governs:</strong> {card.governs}</p>}
      {card.emotion && <p><strong>Emotion:</strong> {card.emotion}</p>}
      {card.organs && <p><strong>Organs:</strong> {card.organs}</p>}
      {card.imbalances && <p><strong>Imbalances:</strong> {card.imbalances}</p>}
      {card.tips && <p><strong>Tips:</strong> {card.tips}</p>}
      {card.molecularStructure && (
        <p><strong>Molecular Structure:</strong> {card.molecularStructure.join(', ')}</p>
      )}
      {card.bioChemicals && (
        <p><strong>Bioactive Compounds:</strong> {card.bioChemicals.join(', ')}</p>
      )}
      {card.traditionalUses && <p><strong>Traditional Uses:</strong> {card.traditionalUses}</p>}
      {card.foundInProducts && (
        <p><strong>Found in Products:</strong> {card.foundInProducts.join(', ')}</p>
      )}
      {card.description && <p>{card.description}</p>}
      {card.content && <p>{card.content}</p>}
    </div>
  );
};

export default InfoCard;

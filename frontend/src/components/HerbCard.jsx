// src/components/HerbCard.jsx

import React from 'react';
import './HerbCard.css'; // Assuming you have some CSS for styling

const HerbCard = ({ herb }) => {
  return (
    <div className="herb-card">
      <img src={herb.image} alt={herb.commonName} />
      <h2>{herb.commonName}</h2>
      <p><strong>Scientific Name:</strong> {herb.scientificName}</p>
      <p><strong>Nickname:</strong> {herb.nickname}</p>
      <p><strong>Category:</strong> {herb.category}</p>
      <p><strong>Element Type:</strong> {herb.elementType}</p>
      <p><strong>Color Profile:</strong> {herb.colorProfile}</p>
      <p><strong>Texture:</strong> {herb.texture}</p>
      <p><strong>Frequency (Hz):</strong> {herb.frequencyHz}</p>
      <p><strong>Vibrational Type:</strong> {herb.vibrationalType}</p>
      <p><strong>Chakra Alignment:</strong> {herb.chakraAlignment}</p>
      <p><strong>Elemental Affinity:</strong> {herb.elementalAffinity}</p>
      <p><strong>Astrological Link:</strong> {herb.astrologicalLink}</p>
      <p><strong>Traditional Uses:</strong> {herb.traditionalUses}</p>
      <p><strong>Spiritual Properties:</strong> {herb.spiritualProperties}</p>
      <p><strong>Cultural Origin:</strong> {herb.culturalOrigin}</p>
      <p><strong>Active Compounds:</strong> {herb.activeCompounds.join(', ')}</p>
      <p><strong>Modern Benefits:</strong> {herb.modernBenefits.join(', ')}</p>
      <p><strong>Mechanism of Action:</strong> {herb.mechanismOfAction}</p>
      <p><strong>Supports Systems:</strong> {herb.supportsSystems.join(', ')}</p>
      <p><strong>Synergistic With:</strong> {herb.synergisticWith.join(', ')}</p>
      <p><strong>Contraindications:</strong> {herb.contraindications}</p>
      <p><strong>Delivery Methods:</strong> {herb.deliveryMethod.join(', ')}</p>
      <p><strong>Found in Products:</strong> {herb.foundInProducts.join(', ')}</p>
      <p><strong>Product Type:</strong> {herb.productType}</p>
      <p><strong>Keywords:</strong> {herb.keywords.join(', ')}</p>
      <a href={herb.backlinkToSciencePage}>Learn more</a>
    </div>
  );
};

export default HerbCard;

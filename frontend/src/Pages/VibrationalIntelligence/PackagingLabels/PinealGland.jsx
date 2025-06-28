import React from 'react';
import HeroSection from '../../../components/HeroSection';
import PageLayout from '../../../components/PageLayout';
import PinealGlandData from '../../../data/PinealGlandData';

const PinealCard = ({ data }) => (
  <div className="info-card">
    <h2>{data.name}</h2>
    <img src={data.image} alt={data.name} className="chakra-image" />
    <p><strong>Location:</strong> {data.location}</p>
    <p><strong>Shape:</strong> {data.shape}</p>
    <p><strong>Color:</strong> {data.color}</p>
    <p><strong>Frequency:</strong> {data.frequency}</p>
    <p><strong>Element:</strong> {data.element}</p>
    <p><strong>Governs:</strong> {data.governs}</p>
    <p><strong>Biochemicals:</strong> {data.bioChemicals.join(', ')}</p>
    <p><strong>Benefits:</strong> {data.benefits.join(', ')}</p>
    <p><strong>Description:</strong> {data.description}</p>
  </div>
);

const PinealGland = () => {
  return (
    <PageLayout>
      <HeroSection 
        title="Pineal Gland" 
        subtitle="The seat of intuition and inner light" 
        background="/images/pineal/pineal-hero.mp4" 
        isVideo={true}
      />
      <div className="info-page-container">
        <PinealCard data={PinealGlandData} />
      </div>
    </PageLayout>
  );
};

export default PinealGland;

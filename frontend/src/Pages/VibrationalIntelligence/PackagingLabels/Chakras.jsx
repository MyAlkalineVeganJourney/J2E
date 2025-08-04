import React from 'react';
import HeroSection from '../../../components/HeroSection';
import PageLayout from '../../../components/PageLayout';
import ChakraData from '../../../data/ChakraData';

const ChakraCard = ({ data }) => (
  <div className="info-card">
    <h2>{data.name}</h2>
    <img src={data.image} alt={data.name} className="Chakra-image" />
    <p><strong>Location:</strong> {data.location}</p>
    <p><strong>Color:</strong> {data.color}</p>
    <p><strong>Frequency:</strong> {data.frequency}</p>
    <p><strong>Element:</strong> {data.element}</p>
    <p><strong>Governs:</strong> {data.governs}</p>
    <p><strong>Biochemicals:</strong> {data.bioChemicals.join(', ')}</p>
    <p><strong>Benefits:</strong> {data.benefits.join(', ')}</p>
  </div>
);

const Chakras = () => {
  return (
    <PageLayout>
      <HeroSection 
        title="Chakras" 
        subtitle="Vibrational centers of energy within the body" 
        background="/images/Chakras/Chakras-hero.mp4" 
        isVideo={true}
      />
      <div className="info-page-container">
        {ChakraData.map((item, index) => (
          <ChakraCard key={index} data={item} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Chakras;

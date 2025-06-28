// 📁 src/Pages/VibrationalIntelligence/ElementsEnergy.jsx

import React from 'react';
import HeroSection from '../../components/HeroSection';
import PageLayout from '../../components/PageLayout';
import InfoCard from '../../components/InfoCard';
import MasterElements from '../../data/MasterElementsData';

const ElementsEnergy = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Elements & Energy Compendium"
        subtitle="Biochemical Intelligence Behind Every Ingredient"
        background="/videos/elements-energy-hero.mp4"
        isVideo={true}
      />
      <div className="info-page-container grid grid-cols-1 md:grid-cols-2 gap-6">
        {MasterElements.map((item, index) => (
          <InfoCard key={index} data={item} />
        ))}
      </div>
    </PageLayout>
  );
};

export default ElementsEnergy;

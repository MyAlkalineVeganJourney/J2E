// src/pages/VibrationalIntelligence/FrequencyChart.jsx

import React from 'react';
import HeroSection from '../../../components/HeroSection';
import PageLayout from '../../../components/PageLayout';
import InfoCard from '../../../components/InfoCard';
import MasterElementsData from '../../../data/MasterElementsData';

const FrequencyChart = () => {
  const frequencyData = MasterElementsData.filter(item => item.frequency);

  return (
    <PageLayout>
      <HeroSection
        title="Frequency Chart"
        subtitle="Harmonic Healing Through Sound and Vibration"
        background="/videos/frequency-chart-hero.mp4"
        isVideo={true}
      />

      <section className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {frequencyData.map((entry, index) => (
          <InfoCard key={index} data={entry} />
        ))}
      </section>

      <section className="text-center max-w-4xl mx-auto mt-20 px-4">
        <p className="text-white font-semibold">
          Each object in the universe vibrates at a frequency. Healing frequencies like 432 Hz and 528 Hz promote harmony and are used in sound healing tools like tuning forks, singing bowls, and crystal harmonics. 
          Learn to apply these to balance energy, align the chakras, and restore cellular wellness.
        </p>
      </section>
    </PageLayout>
  );
};

export default FrequencyChart;




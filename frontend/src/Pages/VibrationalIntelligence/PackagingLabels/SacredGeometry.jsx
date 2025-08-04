// SacredGeometry.jsx
import React from 'react';
import HeroSection from '../../../components/HeroSection';
import PageLayout from '../../../components/PageLayout';
import InfoCard from '../../../components/InfoCard';
import SacredGeometryData from '../../../data/SacredGeometryData';

const SacredGeometry = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Sacred Geometry"
        subtitle="Divine Patterns Within Nature"
        background="/videos/sacred-geometry-hero.mp4"
        isVideo={true}
      />

      <section className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {SacredGeometryData.map((item, index) => (
          <InfoCard key={index} data={item} />
        ))}
      </section>

      <section className="text-center max-w-4xl mx-auto mt-20 px-4">
        <p className="text-white font-semibold">
          Sacred geometry studies the fundamental patterns that form the architecture of life. These timeless shapes
          — including the Flower of Life and Metatron’s Cube — are said to encode the frequencies of creation itself.
          Used across ancient civilizations in temples, mandalas, and art, these symbols are tools for spiritual
          insight, healing, and universal alignment.
        </p>
      </section>
    </PageLayout>
  );
};

export default SacredGeometry;

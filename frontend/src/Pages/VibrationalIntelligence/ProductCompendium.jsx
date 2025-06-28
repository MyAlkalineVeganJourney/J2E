// src/pages/VibrationalIntelligence/ProductCompendium.jsx
import React from 'react';
import HeroSection from '../../components/HeroSection';
import PageLayout from '../../components/PageLayout';
import InfoCard from '../../components/InfoCard';

const ProductCompendium = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Product Compendium"
        subtitle="A Catalog of Energetic Tools and Wellness Goods"
        background="/videos/compendium-hero.mp4"
        isVideo={true}
      />

      <section className="max-w-5xl mx-auto mt-10 space-y-6 text-center px-4">
        <InfoCard
          title="Purpose of the Compendium"
          text="The Product Compendium is a curated catalog of all vibrational and holistic wellness products offered through the Journey to Enlightenment platform. Each item is carefully selected based on energetic frequency, natural composition, and spiritual alignment."
        />
        <InfoCard
          title="Contents of the Compendium"
          text="From herbal supplements and crystal tools to sea moss blends and detox kits, every product has a documented energetic profile and purpose. This compendium helps users make informed choices aligned with their healing goals."
        />
        <InfoCard
          title="How to Use This Resource"
          text="Explore and compare each offering by category, use case, vibrational range, and origin. Our data is backed by ancient wisdom and modern research to support empowered wellness decisions."
        />
      </section>

      <section className="text-center mt-16 px-4">
        <p className="text-gray-400 italic">
          Each product tells a story of plant medicine, planetary energy, and ancestral intelligence. Use this tool to discover what aligns with your current frequency and future goals.
        </p>
      </section>
    </PageLayout>
  );
};

export default ProductCompendium;


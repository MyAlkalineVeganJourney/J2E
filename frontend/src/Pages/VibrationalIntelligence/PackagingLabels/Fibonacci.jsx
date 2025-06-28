import React from 'react';
import HeroSection from '../../../components/HeroSection';
import PageLayout from '../../../components/PageLayout';
import InfoCard from '../../../components/InfoCard';

const Fibonacci = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Fibonacci Sequence"
        subtitle="Nature’s Divine Mathematics"
        background="/videos/fibonacci-hero.mp4"
        isVideo={true}
      />

      <InfoCard
        title="What is the Fibonacci Sequence?"
        text="The Fibonacci sequence is a series of numbers where each number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8... This pattern appears in nature, from sunflower spirals to pinecones. It represents growth and natural harmony."
      />

      <section className="max-w-3xl mx-auto my-10 p-6 bg-gray-800 text-white rounded-xl shadow-lg">
        <p className="mb-4">
          The <strong>golden ratio</strong> (approximately 1.618), derived from the Fibonacci sequence, is often used in art, architecture, and even DNA proportions. 
        </p>
        <p>
          Its recurrence in sacred geometry shows how mathematics reflects the divine structure of the universe.
        </p>
      </section>
    </PageLayout>
  );
};

export default Fibonacci;

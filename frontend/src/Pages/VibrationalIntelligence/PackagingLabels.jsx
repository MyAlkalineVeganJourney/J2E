// src/pages/VibrationalIntelligence/PackagingLabels.jsx

import React from 'react';
import HeroSection from '../../components/HeroSection';
import PageLayout from '../../components/PageLayout';
import InfoCard from '../../components/InfoCard';
import { Link } from 'react-router-dom';
import MasterElementsData from '../../data/MasterElementsData';

const PackagingLabels = () => {
  const packagingPages = [
    {
      name: 'Chakras',
      image: '/images/packaging/chakras.jpg',
      path: '/vibrationalintelligence/packaginglabels/chakras'
    },
    {
      name: 'Fibonacci',
      image: '/images/packaging/fibonacci.jpg',
      path: '/vibrationalintelligence/packaginglabels/fibonacci'
    },
    {
      name: 'Frequency Chart',
      image: '/images/packaging/frequency.jpg',
      path: '/vibrationalintelligence/packaginglabels/frequencychart'
    },
    {
      name: 'Numerology',
      image: '/images/packaging/numerology.jpg',
      path: '/vibrationalintelligence/packaginglabels/numerology'
    },
    {
      name: 'Pineal Gland',
      image: '/images/packaging/pineal.jpg',
      path: '/vibrationalintelligence/packaginglabels/pinealgland'
    },
    {
      name: 'Sacred Geometry',
      image: '/images/packaging/sacredgeometry.jpg',
      path: '/vibrationalintelligence/packaginglabels/sacredgeometry'
    },
  ];

  return (
    <PageLayout>
      <HeroSection
        title="Packaging Labels"
        subtitle="Decode the Symbols of Healing and Intention"
        background="/videos/packaging-hero.mp4"
        isVideo={true}
      />

      <section className="text-center max-w-4xl mx-auto mt-10 px-4">
        <p className="text-white text-lg">
          Our labels are more than visual design—they are energetic anchors. Each symbol, color, and word carries
          a vibration intended to enhance the frequency of the product it encases.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {packagingPages.map(({ name, image, path }) => (
          <Link
            key={name}
            to={path}
            className="group relative block overflow-hidden rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <h3 className="absolute bottom-3 left-4 text-xl font-bold text-yellow-400 group-hover:underline">
              {name}
            </h3>
          </Link>
        ))}
      </section>

      <section className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {MasterElementsData.map((entry) => (
          <InfoCard key={entry.name} data={entry} />
        ))}
      </section>

      <section className="text-center max-w-4xl mx-auto mt-20 px-4">
        <p className="text-white font-semibold">
          These foundational symbols and energies form the basis of our vibrational wellness system.
        </p>
        <p className="text-gray-400 italic">
          Understanding them enhances your journey across every product and protocol.
        </p>
      </section>
    </PageLayout>
  );
};

export default PackagingLabels;

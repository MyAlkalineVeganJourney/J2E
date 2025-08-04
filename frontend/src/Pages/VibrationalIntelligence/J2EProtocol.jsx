// src/pages/vibrational-intelligence/J2EProtocol.jsx
import React from 'react';
import HeroSection from '../../components/HeroSection';
import PageLayout from '../../components/PageLayout';
import InfoCard from '../../components/InfoCard';

const J2EProtocol = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Journey to Enlightenment (J2E)"
        subtitle="Fasting, Frequency & Food for Planetary Consciousness"
        background="/videos/j2e-hero.mp4"
        isVideo={true}
      />

      {/* Introduction */}
      <section className="max-w-4xl mx-auto mt-10 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Origin of J2E</h2>
        <p className="text-gray-300 mb-4">
          Born from the community of 90,000+ souls on TikTok, the Journey to Enlightenment (J2E) is more than a protocol — it’s a collective mission. 
          Rooted in the teachings of Dr. Sebi, nourished by the bush of St. Lucia, and spiritually sparked at Zimbabwe Farm, this movement was named, built, and blessed by the community — together, on 11/11/24.
        </p>
        <p className="text-gray-300">
          J2E unites ancient herbal wisdom, alkaline fasting, frequency recalibration, and purpose-driven nutrition. From California to Curaçao, Kenya to the Caribbean, we are building hubs that harmonize the Earth with the body.
        </p>
      </section>

      {/* Three Phases */}
      <section className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <InfoCard
          data={{
            name: 'Reset Phase',
            description:
              'Initiate fasting: dry, liquid, or juice. Use elemental herbs like burdock and sea moss. This is where stem cells activate and toxins leave.'
          }}
        />
        <InfoCard
          data={{
            name: 'Recalibrate Phase',
            description:
              'Ingest frequency-aligned foods and practice energy clearing rituals (sun-gazing, 432Hz music, structured water, nature grounding).'
          }}
        />
        <InfoCard
          data={{
            name: 'Reprogram Phase',
            description:
              'Incorporate affirmations, ancestral foods, and spiritual practices to lock in the new vibrational set point. Align to purpose.'
          }}
        />
      </section>

      {/* Weekly Protocol Table */}
      <section className="max-w-5xl mx-auto mt-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Weekly Rhythm Example</h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-xl shadow-md">
            <thead>
              <tr>
                <th className="p-3">Day</th>
                <th className="p-3">Fast Type</th>
                <th className="p-3">Element</th>
                <th className="p-3">Focus</th>
                <th className="p-3">Sound</th>
              </tr>
            </thead>
            <tbody>
              {[ 
                ['Monday', 'Liquid', 'Burdock Root', 'Liver cleanse', '432Hz'],
                ['Tuesday', 'Dry', 'Sea Moss', 'Cellular repair', 'Nature sounds'],
                ['Wednesday', 'Juice', 'Bladderwrack', 'Thyroid & gut', 'Solfeggio 528Hz'],
                ['Thursday', 'Intermittent', 'Dandelion', 'Blood + detox', 'Tibetan Bowls'],
                ['Friday', 'Fruit', 'Soursop', 'Nervous system', 'Binaural beats'],
                ['Saturday', 'Flexible', 'Irish Moss', 'Rebuild energy', 'Drumming/Chant'],
                ['Sunday', 'Reflection', 'Water only', 'Gratitude + journaling', 'Silence'],
              ].map(([day, fast, element, focus, sound]) => (
                <tr key={day} className="text-sm text-gray-300">
                  <td className="p-2 font-semibold">{day}</td>
                  <td className="p-2">{fast}</td>
                  <td className="p-2">{element}</td>
                  <td className="p-2">{focus}</td>
                  <td className="p-2">{sound}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Global Vision */}
      <section className="max-w-4xl mx-auto mt-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Beyond the Body: J2E Hubs</h2>
        <p className="text-gray-300">
          St. Lucia is just the beginning. The J2E model — combining spiritual practice, regenerative farming, alkaline nutrition, and ancestral wisdom — has been invited to expand to Curaçao and Kenya. With every hub, we deepen our connection to nature and global community.
        </p>
      </section>

      {/* Upcoming Tools */}
      <section className="max-w-4xl mx-auto mt-16 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">What’s Coming for J2E</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-left max-w-lg mx-auto">
          <li>Weekly tracker PDFs for fasting, meditation, and sound</li>
          <li>Protocol journals (digital + printable)</li>
          <li>Herb charts by frequency + healing function</li>
          <li>Guided video series for each phase of J2E</li>
          <li>Access to future retreats + hub locations</li>
        </ul>
      </section>
    </PageLayout>
  );
};

export default J2EProtocol;

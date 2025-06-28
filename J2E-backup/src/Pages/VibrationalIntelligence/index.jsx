// src/pages/VibrationalIntelligence/index.jsx
import React from 'react';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import { Link } from 'react-router-dom';

const VibrationalIntelligence = () => {
  return (
    <PageLayout title="⚛️ Vibrational Intelligence ⚛️">
      <HeroSection
        title="Vibrational Intelligence"
        subtitle="Explore the science of frequency, detox, and elevation"
        background="/videos/vibrational-main.mp4"
        isVideo={true}
      />

      {/* INTRO PARAGRAPH */}
      <section className="multicolor-border p-6 text-white text-center max-w-5xl mx-auto">
        <p className="text-lg">
          Vibrational Intelligence refers to the awareness and understanding of the subtle energy fields
          that influence our physical, emotional, and spiritual wellbeing. Everything in the universe emits a frequency.
          By learning to align with higher vibrations and neutralize discordant energies, we cultivate vitality, clarity, and purpose.
        </p>
      </section>

      {/* SIX CONTENT BOXES */}
      <section className="content-box-grid multicolor-border bg-black py-10 px-4">
        <h2 className="text-center text-2xl text-gold font-bold mb-6">💡 Explore Our Core Concepts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link to="/vibrationalintelligence/elementsenergy" className="glow-box">Elements & Energy</Link>
          <Link to="/vibrationalintelligence/frequencyrecalibration" className="glow-box">Frequency Recalibration</Link>
          <Link to="/vibrationalintelligence/j2eprotocol" className="glow-box">J2E Protocol</Link>
          <Link to="/vibrationalintelligence/productcompendium" className="glow-box">Product Compendium</Link>
          <Link to="/vibrationalintelligence/packaginglabels" className="glow-box">Packaging & Labels</Link>
          <Link to="/learn/atoms" className="glow-box">Atomic Foundations</Link>
        </div>
      </section>

      {/* MERGED SCIENCE CONTENT */}
      <section className="science-section multicolor-border bg-black text-white p-6 max-w-5xl mx-auto space-y-10">
        <div>
          <h2 className="text-2xl text-gold font-bold mb-2">🔬 Start with the Basics</h2>
          <p>
            Every healing element starts with atoms: protons, neutrons, and electrons.
            Molecules form when atoms bond — this is the foundation of everything you eat, drink, or use for healing.
          </p>
          <img 
            src="/images/atom-diagram.png" 
            alt="Atom Diagram" 
            className="mx-auto my-4 max-w-sm border-2 border-gold rounded"
          />
          <p>
            As you explore compounds like <strong>oleic acid</strong> and <strong>resveratrol</strong>,
            you’ll see their chemical makeup, sources in our products, and how they support your body.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gold font-bold">🌊 Gold Sea Moss Gel</h2>
          <p><strong>Key Compounds:</strong> Oleic Acid, Linoleic Acid, Fucoidan</p>
          <ul className="list-disc list-inside">
            <li>⚛️ <strong>Oleic Acid (C18H34O2):</strong> Supports heart health and reduces inflammation.</li>
            <li>🧪 Found in: Wild-crafted Sea Moss, Alkaline oils, Avocados</li>
            <li>🔗 <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Oleic-acid" target="_blank" rel="noreferrer" className="underline text-blue-400">Explore Molecular Structure</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-gold font-bold">🍇 Resveratrol</h2>
          <p><strong>Key Source:</strong> Red Clover, Berries</p>
          <ul className="list-disc list-inside">
            <li>⚛️ <strong>Resveratrol (C14H12O3):</strong> Anti-aging polyphenol that enhances mitochondrial function.</li>
            <li>🧪 Found in: Red wine, clover, berries, and nut skins.</li>
            <li>🔗 <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Resveratrol" target="_blank" rel="noreferrer" className="underline text-blue-400">Explore Molecular Structure</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-gold font-bold">🌿 Jade Sea Moss Gel</h2>
          <p><strong>Key Compounds:</strong> Ellagic Acid, Fucoxanthin, Minerals</p>
          <ul className="list-disc list-inside">
            <li>⚛️ <strong>Ellagic Acid (C14H6O8):</strong> Detoxifies carcinogens and protects DNA.</li>
            <li>🧪 Found in: Sea moss, pomegranates, berries, and herbs.</li>
            <li>🔗 <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Ellagic-acid" target="_blank" rel="noreferrer" className="underline text-blue-400">Explore Molecular Structure</a></li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default VibrationalIntelligence;

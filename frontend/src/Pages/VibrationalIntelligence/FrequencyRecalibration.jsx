// src/pages/VibrationalIntelligence/FrequencyRecalibration.jsx
import React from 'react';
import HeroSection from '../../components/HeroSection';
import PageLayout from '../../components/PageLayout';
import InfoCard from '../../components/InfoCard';

const FrequencyRecalibration = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Frequency Recalibration"
        subtitle="Detox. Reset. Resonate."
        background="/videos/frequency-hero.mp4" // Swap with image if needed
        isVideo={true}
      />

      {/* Core Concept */}
      <InfoCard
        title="Recalibrating the Body Through Rest & Detox"
        text="At My Alkaline Vegan Journey, we begin frequency recalibration with a powerful biological reset. The body must first stop all incoming nutrition and enter a natural resting state—surging with stem cell regeneration. This phase clears toxic visceral fat and years of cellular abuse, laying the foundation for true energetic alignment."
      />

      {/* Vibration Science + Energy Balance */}
      <section className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Earth-Aligned Healing"
          text="Once detoxified, the body returns to its innate rhythm—resonating with the Earth’s frequency. This alignment enhances clarity, intuition, imagination, and emotional resilience."
        />
        <InfoCard
          title="Scientific Foundations"
          text="Human resonance frequencies typically fall between 5–10 Hz. Organs and bodily systems respond to external vibrations, and standards like ISO 2631 help us measure this sensitivity. Our recalibration draws on these concepts to foster physical harmony."
        />
        <InfoCard
          title="Spiritual Integration"
          text="As the body rebalances, your thoughts become more ordered. Positive mindset, focus, and self-love return to the forefront, accelerating the healing journey."
        />
        <InfoCard
          title="Multi-Modal Approaches"
          text="We explore sound resonance, essential oil frequencies, and energy practices to deepen recalibration. Even salt cave sessions and cymatics may support vibrational alignment."
        />
      </section>

      {/* Placeholder for Upcoming Modalities */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">What’s Coming Soon</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><strong>Human Harmonic Resequencing:</strong> Restoring original bio-harmonic patterns disrupted by modern life.</li>
          <li><strong>Cymatics in Healing:</strong> Using visible sound vibrations to affect physical and emotional wellness.</li>
          <li><strong>Science + Music Fusion:</strong> Educational media that connects rhythm, tone, and biology.</li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">We’ll also cover how this work connects to our <strong>J2E Protocol</strong>.</p>
      </section>

      {/* Final Thought */}
      <section className="text-center mt-20">
        <p className="text-white font-semibold">Frequency recalibration is not just about healing—</p>
        <p className="text-gray-400 italic">it's about remembering who you were before the world told you otherwise.</p>
      </section>
    </PageLayout>
  );
};

export default FrequencyRecalibration;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PageLayout, { TranslationContext } from '../components/PageLayout';

const FrequencyMisalignments = () => {
  const { T } = useContext(TranslationContext);

  const t = (key, fallback) => {
    const keys = key.split('.');
    let value = T;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback;
      }
    }
    return typeof value === 'string' ? value : fallback;
  };

  const conditions = [
    {
      name: 'High Blood Pressure',
      technicalName: 'Hypertension',
      causes: ['Stress', 'Poor diet', 'Lack of exercise', 'Dehydration'],
      frequency: '396 Hz',
      chakra: 'Root Chakra',
      foods: ['Sea moss', 'Garlic', 'Leafy greens', 'Hibiscus tea'],
      herbs: ['Hawthorn berry', 'Garlic', 'Olive leaf'],
      resetDays: '7–14 days',
      description:
        "High blood pressure reflects an overstimulated regulatory system affecting vascular pressure and circulation balance."
    },
    {
      name: 'Inflammation',
      technicalName: 'Systemic Inflammatory Response',
      causes: ['Processed foods', 'Toxins', 'Stress', 'Lack of rest'],
      frequency: '285 Hz',
      chakra: 'Solar Plexus',
      foods: ['Turmeric', 'Ginger', 'Sea moss', 'Berries'],
      herbs: ['Turmeric', 'Ginger', 'Boswellia'],
      resetDays: '10–21 days',
      description:
        "Inflammation reflects sustained biological stress signaling that disrupts cellular communication and repair cycles."
    },
    {
      name: 'Anxiety',
      technicalName: 'Generalized Anxiety Pattern',
      causes: ['Stress', 'Nutrient deficiency', 'Caffeine', 'Poor sleep'],
      frequency: '396 Hz',
      chakra: 'Solar Plexus',
      foods: ['Sea moss', 'Ashwagandha', 'Chamomile', 'Leafy greens'],
      herbs: ['Ashwagandha', 'Chamomile', 'Lemon balm'],
      resetDays: '7–14 days',
      description:
        "Anxiety reflects a sustained hyper-alert neurochemical state that reduces parasympathetic regulation."
    },
    {
      name: 'Digestive Imbalance',
      technicalName: 'Gut Dysbiosis',
      causes: ['Poor diet', 'Stress', 'Antibiotics', 'Dehydration'],
      frequency: '417 Hz',
      chakra: 'Solar Plexus',
      foods: ['Sea moss', 'Ginger', 'Fermented foods', 'Aloe vera'],
      herbs: ['Ginger', 'Peppermint', 'Slippery elm'],
      resetDays: '14–21 days',
      description:
        "Digestive imbalance reflects disruption in microbiome diversity and intestinal signaling coherence."
    },
    {
      name: 'Fatigue',
      technicalName: 'Chronic Energy Depletion Pattern',
      causes: ['Poor sleep', 'Nutrient deficiency', 'Stress', 'Toxin load'],
      frequency: '174 Hz',
      chakra: 'Root Chakra',
      foods: ['Sea moss', 'Beets', 'Leafy greens', 'Coconut water'],
      herbs: ['Ashwagandha', 'Rhodiola', 'Ginseng'],
      resetDays: '14–21 days',
      description:
        "Fatigue reflects reduced mitochondrial efficiency and impaired energy metabolism regulation."
    },
    {
      name: 'Headaches',
      technicalName: 'Cranial Pressure Imbalance',
      causes: ['Dehydration', 'Stress', 'Eye strain', 'Postural strain'],
      frequency: '285 Hz',
      chakra: 'Third Eye',
      foods: ['Sea moss', 'Cucumber', 'Watermelon', 'Peppermint tea'],
      herbs: ['Peppermint', 'Feverfew', 'Butterbur'],
      resetDays: '7–10 days',
      description:
        "Headaches reflect pressure dysregulation in cranial vascular and neurological signaling systems."
    }
  ];

  return (
    <PageLayout pageTitle={t('misalignments.title', 'FREQUENCY MISALIGNMENTS')}>
      {/* HERO */}
      <div
        style={{
          background: '#0a0a1a',
          backgroundImage:
            'radial-gradient(white, rgba(255,255,255,0.15) 2px, transparent 2px), linear-gradient(135deg,#0f172a,#1e293b)',
          backgroundSize: '50px 50px, 100% 100%',
          padding: '80px 40px',
          margin: '0 20px 40px',
          borderRadius: '20px',
          border: '3px solid #FFD700',
          textAlign: 'center'
        }}
      >
        <h1 style={{ color: '#FFD700', fontSize: '3rem', marginBottom: '15px' }}>
          🩺 {t('misalignments.title', 'Frequency Misalignments')}
        </h1>
        <p style={{ color: '#fff', fontSize: '1.4rem', maxWidth: '900px', margin: '0 auto' }}>
          {t(
            'misalignments.subtitle',
            'Understanding biological patterns as energetic imbalance states within the body system.'
          )}
        </p>
      </div>

      {/* INTRO */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto 50px',
          padding: '30px',
          background: 'linear-gradient(135deg,#0f172a,#1e293b)',
          borderRadius: '20px',
          border: '2px solid #8b5cf6'
        }}
      >
        <p style={{ color: '#DDD6B8', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'center' }}>
          {t(
            'misalignments.intro',
            'All physiological patterns reflect system-level communication states between cells, environment, and internal regulatory systems.'
          )}
        </p>
      </div>

      {/* CARDS */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto 60px',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '25px'
        }}
      >
        {conditions.map((c, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '2px solid #8b5cf6',
              borderRadius: '18px',
              padding: '22px'
            }}
          >
            <h2 style={{ color: '#FFD700', marginBottom: '5px' }}>{c.name}</h2>
            <p style={{ color: '#00d4ff', fontSize: '0.9rem' }}>
              {c.technicalName} • {c.frequency}
            </p>

            <p style={{ color: '#DDD6B8', marginTop: '12px', lineHeight: '1.6' }}>
              {c.description}
            </p>

            <h4 style={{ color: '#FFD700', marginTop: '15px' }}>Causes</h4>
            <ul style={{ color: '#DDD6B8' }}>
              {c.causes.map((x, idx) => (
                <li key={idx}>{x}</li>
              ))}
            </ul>

            <h4 style={{ color: '#FFD700' }}>Foods</h4>
            <ul style={{ color: '#DDD6B8' }}>
              {c.foods.map((x, idx) => (
                <li key={idx}>{x}</li>
              ))}
            </ul>

            <h4 style={{ color: '#FFD700' }}>Herbs</h4>
            <ul style={{ color: '#DDD6B8' }}>
              {c.herbs.map((x, idx) => (
                <li key={idx}>{x}</li>
              ))}
            </ul>

            <div
              style={{
                marginTop: '15px',
                padding: '10px',
                borderRadius: '10px',
                background: 'rgba(139,92,246,0.2)',
                textAlign: 'center'
              }}
            >
              <strong style={{ color: '#FFD700' }}>Reset:</strong>{' '}
              <span style={{ color: '#00d4ff' }}>{c.resetDays}</span>
            </div>
          </div>
        ))}
      </div>

      {/* DISCLAIMER */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto 60px',
          padding: '20px',
          textAlign: 'center',
          color: '#AAA',
          fontSize: '0.8rem'
        }}
      >
        {t(
          'misalignments.disclaimer',
          'Educational content only. Not medical advice. Always consult a qualified professional for health decisions.'
        )}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Link
          to="/AlignWithUs"
          style={{
            padding: '14px 30px',
            background: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
            borderRadius: '30px',
            color: '#fff',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}
        >
          {t('misalignments.cta', 'Begin Alignment Journey →')}
        </Link>
      </div>
    </PageLayout>
  );
};

export default FrequencyMisalignments;
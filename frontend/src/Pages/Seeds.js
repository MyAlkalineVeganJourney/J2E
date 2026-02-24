// src/pages/Seeds.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import InfoCard from '../components/InfoCard';
import SeedsData from '../data/SeedsData'; // Ensure filename matches exactly
import '../styles/info.css';

const Seeds = () => {
  return (
    <PageLayout title="🌱 Organic Heirloom Seeds">
      <section className="multicolor-border">
        <h2>🌍 Earth-Based Sovereignty</h2>
        <p>
          All seeds offered through MAVJ are completely organic non-GMO, wild harvested and heirloom varieties used for generations by
          indigenous communities. These are seeds of transformation—physically and energetically.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>🧬 Offered Seasonally</h2>
        <p>
          We offer herbs, fruits, and vegetables with medicinal and regenerative benefits. Join our seasonal
          newsletter to be notified when the next seed collection opens.
        </p>
      </section>

      {SeedsData.map((seed) => (
        <InfoCard key={seed.id} data={seed} />
      ))}
    </PageLayout>
  );
};

export default Seeds;

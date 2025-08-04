// src/pages/Illnesses.jsx
import React from 'react';
import '../styles/info.css';

const Illnesses = () => {
  return (
    <div className="info-page-container">
      <h1>🩺 Illnesses & Natural Healing</h1>

      <section className="multicolor-border">
        <h2>💡 Holistic Approach</h2>
        <p>
          Chronic illnesses are often caused by inflammation, toxicity, and imbalance. Our herbal and fasting
          protocols aim to realign the body at the cellular level using frequency-based healing methods.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>📝 Protocols In Progress</h2>
        <p>
          We are developing custom herbal and fasting protocols for hypertension, fibroids, diabetes, and autoimmune
          disorders. Stay tuned as we expand this knowledge hub.
        </p>
      </section>
    </div>
  );
};

export default Illnesses;

// src/pages/Oils.jsx
import React from 'react';
import '../styles/info.css';

const Oils = () => {
  return (
    <div className="info-page-container">
      <h1>🔥 Sacred Castor Oil & Infusions</h1>

      <section className="multicolor-border">
        <h2>🌿 Ancestral Black Castor Oil</h2>
        <p>
          Our solar-lunar infused black castor oil is crafted on sacred volcanic terrain, charged by St. Lucian sun and moon.
          Ideal for healing, scalp, and skin anointing, this oil has no equal.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>🌶️ Infused Frequencies</h2>
        <ul>
          <li>🔥 <strong>Cayenne:</strong> Stimulates blood flow and energy movement</li>
          <li>🌿 <strong>Oregano:</strong> Cellular cleansing and warmth</li>
          <li>🖤 <strong>Black Seed:</strong> Regenerative, balancing immunity and chi</li>
        </ul>
      </section>
    </div>
  );
};

export default Oils;

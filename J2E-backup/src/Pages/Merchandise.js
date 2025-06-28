// src/pages/Merchandise.jsx
import React from 'react';
import '../styles/info.css';

const Merchandise = () => {
  return (
    <div className="info-page-container">
      <h1>🧢 High-Frequency Apparel & Tools</h1>

      <section className="multicolor-border">
        <h2>🎨 Not Just Merchandise</h2>
        <p>
          Every piece of MAVJ merch is infused with purpose. Whether it’s clothing, posters, tools, or bags, all designs
          reflect our ethos of **resonance, vibration, and ancestral elevation**.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>🛍️ Where to Shop</h2>
        <p>
          Our frequency-charged collection is available through curated partners:
        </p>
        <ul>
          <li><a href="https://etsy.com/shop/MyAlkalineVeganJourney" target="_blank" rel="noreferrer">Etsy Storefront</a></li>
          <li><a href="https://printify.com" target="_blank" rel="noreferrer">Printify (Coming Soon)</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Merchandise;

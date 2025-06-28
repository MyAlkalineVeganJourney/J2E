// src/pages/Recipes.jsx
import React from 'react';
import '../styles/info.css';

const Recipes = () => {
  return (
    <div className="info-page-container">
      <h1>🥗 Alkaline Vegan Recipes</h1>

      <section className="multicolor-border">
        <h2>🌱 Sacred Food Protocols</h2>
        <p>
          Our recipes follow the MAVJ nutritional paradigm—free from hybrids, GMOs, artificial flavors, and unnatural
          sugars. They are alkaline, ancestral, and fuel for frequency.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>🍴 Examples Coming Soon</h2>
        <p>
          We’ll soon release downloadable PDFs and visual walkthroughs for:
          <ul>
            <li>🥬 Raw alkaline wraps</li>
            <li>🌿 Herbal infusion soups</li>
            <li>🌞 Sea moss smoothies</li>
            <li>🔥 Electric baking with tamarind, agave, and walnut flours</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default Recipes;

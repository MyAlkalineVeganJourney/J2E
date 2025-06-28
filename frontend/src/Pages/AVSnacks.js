import React from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/info.css';

const AVSnacks = () => {
  return (
    <div className="product-page-container">
      <HeroSection
        title="🍪 High Frequency AV Snacks"
        subtitle="Deliciously Alkaline | Powered by Plant Intelligence"
        background="/images/products/walnut-chews.jpg"
      />

      <section className="product-item multicolor-border">
        <h2>🥥 Walnut Chews</h2>
        <p>
          Nutritious, chewy walnut snacks sweetened with natural alkaline ingredients. A satisfying, on-the-go treat
          that's packed with minerals and made for high vibration.
        </p>
      </section>

      <section className="product-item multicolor-border">
        <h2>🌟 Sesame Stars</h2>
        <p>
          Crunchy, energizing bites made with organic sesame seeds, sweetened with agave and mineral-rich sea moss
          for vitality and digestive ease.
        </p>
      </section>

      <section className="product-item multicolor-border">
        <h2>🍪 Walnut Cookies</h2>
        <p>
          Made with alkaline-approved flours, sweetened naturally, and infused with warming island spices like cinnamon,
          nutmeg, and ginger. Perfect for conscious snacking.
        </p>
      </section>

      <footer>
        <p>© 2024 My Alkaline Vegan Journey. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AVSnacks;

// src/pages/Checkout.jsx
import React from 'react';
import '../styles/info.css'; // Reusable layout styles

const Checkout = () => {
  return (
    <div className="info-page-container">
      <h1>🛒 MAVJ Checkout</h1>

      <section className="multicolor-border">
        <h2>Shopping Cart</h2>
        <p>
          Here you can confirm your purchase and proceed to secure payment. All transactions support our nonprofit movement and global frequency hubs.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>What Is Human Frequency Transformation?</h2>
        <p>
          Every cell in the human body has approximately -70 millivolts (mV) of electrical energy. Through detoxification and alignment, this charge is restored and amplified for wellness and clarity.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>What is MAVJ J2E?</h2>
        <p>
          A paradigm-shifting movement. From fasting to frequency, J2E is the manifestation of vibrational healing, seeded by over 90,000 TikTok family members.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>Our Global Prototype Hub: Zimbabwe Farm, St. Lucia</h2>
        <p>
          Zimbabwe Farm is the site of our holistic retreat, sustainable farming hub, and spiritual sanctuary in the bush of St. Lucia — not a bush farm, but immersed in nature.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>Communal Residency</h2>
        <p>
          Join our growing community with options for temporary or long-term eco-living on-site. Includes farming, workshops, fasting protocols, and aquatic activities.
        </p>
      </section>

      {/* ✅ ADD THIS BUTTON TO LINK TO THE PAYMENT FORM */}
      <section className="multicolor-border">
        <h2>Ready to Pay?</h2>
        <p>Click below to securely complete your order via Stripe.</p>
        <a href="/payment">
          <button className="primary-button">Proceed to Payment</button>
        </a>
      </section>

      <footer>
        <p>© 2024 My Alkaline Vegan Journey. All rights reserved.</p>
        <div className="social-media-links">
          <a href="https://www.youtube.com/@myalkalineveganjourney7465" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/@myalkalineveganjourney" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;

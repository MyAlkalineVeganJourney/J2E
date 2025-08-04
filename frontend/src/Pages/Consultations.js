import React from 'react';
import '../styles/info.css';

const Consultations = () => {
  return (
    <div className="info-page-container">
      <h1>🧘 MAVJ Consultations</h1>

      <section className="multicolor-border">
        <h2>✨ Personalized Wellness Guidance</h2>
        <p>
          Our consultations provide you with one-on-one insights into your unique journey. Whether you’re fasting,
          transitioning to alkaline vegan nutrition, or exploring human frequency transformation, we walk beside you.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>🗓️ Book Your Session</h2>
        <p>
          We offer 30-minute and 1-hour consults covering: fasting support, food prep, lifestyle detox, and mental
          alignment. Each session includes a follow-up PDF roadmap.
        </p>
      </section>

      <section className="multicolor-border">
        <h2>🌍 Virtual & In-Person Options</h2>
        <p>
          Consultations are available via Zoom, phone, or in-person at our Zimbabwe Farm Hub in St. Lucia. Experience
          aligned, ancestral, and customized care wherever you are.
        </p>
      </section>

      <footer>
        <p>© 2024 My Alkaline Vegan Journey. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Consultations;

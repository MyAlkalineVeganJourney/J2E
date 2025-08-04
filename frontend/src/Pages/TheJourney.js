// src/pages/TheJourney.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import PhotoGallery from '../components/PhotoGallery';
import { Link } from 'react-router-dom';

const TheJourney = () => {
  return (
    <PageLayout
      title="🌴 The Journey 🌴"
      subtitle="From Fasting to Farming — A Global Transformation"
      paragraph="Welcome to The Journey. This is where transformation begins — from fasting and breathwork to scuba diving, farming, and moving to St. Lucia."
    >
      {/* Feature Boxes (Container 5) */}
      <>
        <Link to="/Fasting" className="feature-box glowing-hover">
          <img src="/images/Fasting.jpg" alt="Fasting" />
          <h3>⛩️ The Fast</h3>
        </Link>
        <Link to="/Breathwork" className="feature-box glowing-hover">
          <img src="/images/Breathwork.jpg" alt="Breathwork" />
          <h3>🌬️ Breathwork & Meditation</h3>
        </Link>
        <Link to="/ScubaDiving" className="feature-box glowing-hover">
          <img src="/images/Scuba.jpg" alt="Scuba Diving" />
          <h3>🌊 Scuba Diving the Caribbean</h3>
        </Link>
        <Link to="/MoveToStLucia" className="feature-box glowing-hover">
          <img src="/images/StLucia.jpg" alt="St Lucia Move" />
          <h3>🏝️ Move to St. Lucia</h3>
        </Link>
        <Link to="/Gardening" className="feature-box glowing-hover">
          <img src="/images/Gardening.jpg" alt="Gardening" />
          <h3>🌿 Gardening & Herbal Living</h3>
        </Link>
        <Link to="/Farming" className="feature-box glowing-hover">
          <img src="/images/Farming.jpg" alt="Farming" />
          <h3>🌾 Farming the Land</h3>
        </Link>
      </>

      {/* Photo Gallery (Container 6) */}
      <PhotoGallery />
    </PageLayout>
  );
};

export default TheJourney;

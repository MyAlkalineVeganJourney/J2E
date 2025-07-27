// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhotoGallery from '../components/PhotoGallery';
import '../styles/PageLayout.css'; // This should hold most shared styles

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* 🟥 NAVIGATION */}
      <Navbar />

      {/* 🟨 LOGO ON VIDEO BACKGROUND */}
      <section className="page-title-section multicolor-border sticky-title">
        <h1 className="page-title">
          💦 My Alkaline Vegan <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo" className="inline-logo" /> Journey HOME 💦
        </h1>
        <h2 className="page-subtitle">Sovereign Health, Vibrational Healing & Ancestral Nutrition</h2>
      </section>

      <section className="hero-logo-section multicolor-border">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/images/Nubian.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay-logo">
          <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo" className="logo-img" />
        </div>
      </section>

      {/* 🟩 INTRO PARAGRAPH */}
      <section className="intro-paragraph multicolor-border">
        <p>
          Welcome to <strong>My Alkaline Vegan Journey</strong> — a holistic wellness platform rooted in vibrational healing,
          ancient nutrition, and conscious sovereignty. Explore our offerings of herbal remedies, cultural intelligence,
          and lifestyle tools that honor the wisdom of indigenous healing traditions.
        </p>
      </section>

      {/* 🟦 6 CONTENT BOXES */}
      <section className="feature-grid multicolor-border">
        <Link to="/Journey2Enlightenment" className="feature-box glowing-hover">
          <img src="/images/J2EBanner.jpg" alt="Journey to Enlightenment" className="feature-image" />
          <h3>💫 Journey 2 Enlightenment</h3>
        </Link>
        <Link to="/MAVJSeaMoss" className="feature-box glowing-hover">
          <img src="/images/SeaMossBanner.jpg" alt="Sea Moss" className="feature-image" />
          <h3>🌊 Volcanic Wild Crafted Sea Moss Collection</h3>
        </Link>
        <Link to="/CastorOil" className="feature-box glowing-hover">
          <img src="/images/CastorOilBanner.jpg" alt="Castor Oil" className="feature-image" />
          <h3>🪔 Solar/Lunar Volcanic 🇱🇨 Black Castor Oil</h3>
        </Link>
        <Link to="/VibrationalIntelligence" className="feature-box glowing-hover">
          <img src="/images/VibrationalIntelligenceBanner.jpg" alt="Vibrational Intelligence" className="feature-image" />
          <h3>🧠 Vibrational Intelligence</h3>
        </Link>
        <Link to="/Recipes" className="feature-box glowing-hover">
          <img src="/images/RecipesBanner.png" alt="Alkaline Recipes" className="feature-image" />
          <h3>🥬 Alkaline Vegan Recipes</h3>
        </Link>
        <Link to="/AlignWithUs" className="feature-box glowing-hover">
          <img src="/images/AlignWithUsBanner.png" alt="Align With Us" className="feature-image" />
          <h3>🤝 Align With Us - Join the Journey, Sponsor, Donate, Invest</h3>
        </Link>
      </section>

      {/* 🟪 PHOTO GALLERY */}
      <section className="photo-gallery multicolor-border horizontal-photo-gallery">
        <h2>📸 MAVJ Photo Gallery</h2>
        <PhotoGallery />
      </section>

      {/* ⬛ FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;

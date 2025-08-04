// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhotoGallery from '../components/PhotoGallery';
import loadImage from '../utils/imageLoader';
import '../styles/PageLayout.css';
import { getPublicImagePath } from '../utils/imageLoader';

const HomePage = () => {
  return (
    <div className="homepage-container page-layout">
      {/* 🟥 Container 1: NavBar (Frozen) */}
      <div className="navbar-container multicolor-border">
        <Navbar />
      </div>

      {/* 🟨 Container 2: Title, Logo, Home Tagline (Frozen) */}
      <div className="title-container multicolor-border sticky-title">
        <h1 className="page-title">💦 My Alkaline Vegan Journey 💦</h1>
        <img src={loadImage('MAVJLogo.jpg')} alt="MAVJ Logo" className="title-logo" />
        <h2 className="page-home">Home</h2>
        <p className="page-subtitle">Sovereign Health, Vibrational Healing & Ancestral Nutrition</p>
      </div>

      {/* 🟩 Container 3: 2 Videos + Centered Logo */}
      <div className="video-logo-container multicolor-border">
        <div className="video-box">
          <video controls className="embedded-video">
            <source src="/images/Nubian.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="center-logo-box">
          <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo" className="center-logo" />
        </div>
        <div className="video-box">
          <video controls className="embedded-video">
            <source src="/images/VideoPostPrep.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* 🟦 Container 4: Intro Paragraph */}
      <div className="intro-container multicolor-border">
        <p>
          Welcome to <strong>My Alkaline Vegan Journey</strong> — a portal for <strong>Frequency Shift</strong>,
          where you can realign your vibrational state through ancient nutrition, vibrational healing, and 
          sovereign self-awareness. Explore holistic offerings, indigenous remedies, lifestyle alignment tools, 
          and transformative experiences that honor Earth resonance.
        </p>
      </div>

      {/* 🟧 Container 5: 6 Content Boxes */}
      <div className="content-boxes-container multicolor-border">
        <div className="content-box-grid">
          <Link to="/Journey2Enlightenment" className="content-box glowing-hover">
            <img src="/images/J2EBanner.jpg" alt="Journey to Enlightenment" />
            <h3>💫 Journey 2 Enlightenment</h3>
          </Link>
          <Link to="/MAVJSeaMoss" className="content-box glowing-hover">
            <img src="/images/SeaMossBanner.jpg" alt="Sea Moss" />
            <h3>🌊 Volcanic Wild Crafted Sea Moss</h3>
          </Link>
          <Link to="/CastorOil" className="content-box glowing-hover">
            <img src="/images/CastorOilBanner.jpg" alt="Castor Oil" />
            <h3>🪔 Lunar Solar Volcanic Castor Oil</h3>
          </Link>
          <Link to="/VibrationalIntelligence" className="content-box glowing-hover">
            <img src="/images/VibrationalIntelligenceBanner.jpg" alt="Vibrational Intelligence" />
            <h3>🧠 Vibrational Intelligence</h3>
          </Link>
          <Link to="/Recipes" className="content-box glowing-hover">
            <img src="/images/RecipesBanner.png" alt="Alkaline Recipes" />
            <h3>🥬 Alkaline Vegan Recipes</h3>
          </Link>
          <Link to="/AlignWithUs" className="content-box glowing-hover">
            <img src="/images/AlignWithUsBanner.png" alt="Align With Us" />
            <h3>🤝 Align With Us – Sponsor, Donate, Invest</h3>
          </Link>
        </div>
      </div>

      {/* 🟪 Container 6: Photo Gallery */}
      <div className="photo-gallery-container multicolor-border">
        <PhotoGallery />
      </div>

      {/* ⬛ Container 7: Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

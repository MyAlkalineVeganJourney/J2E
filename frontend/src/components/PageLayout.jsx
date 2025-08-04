// src/components/PageLayout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/PageLayout.css';
import PhotoGallery from './PhotoGallery';


const PageLayout = ({ title, subtitle, paragraph, children }) => {
  return (
    <div className="page-layout">
      {/* Container 1: Navbar */}
      <div className="multicolor-border navbar-container">
        <Navbar />
      </div>

      {/* Container 2: Page Title */}
      <div className="multicolor-border page-title-container">
        {title && <h1 className="page-title">{title}</h1>}
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>

      {/* Container 3: Hero Section with logo */}
      <div className="multicolor-border hero-section">
        <div className="hero-overlay">
          <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo" className="hero-logo" />
        </div>
      </div>

      {/* Container 4: Intro paragraph */}
      {paragraph && (
        <div className="multicolor-border intro-paragraph">
          <p>{paragraph}</p>
        </div>
      )}

      {/* Container 5: Feature content boxes */}
      <div className="multicolor-border feature-grid">
        {children}
      </div>

      {/* Container 6: Photo Gallery */}
      <div className="multicolor-border gallery-container">
        <h2>📸 MAVJ Photo Gallery</h2>
        <PhotoGallery />
      </div>

      {/* Container 7: Footer */}
      <Footer />
    </div>
  );
};

export default PageLayout;

// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ title, subtitle }) => {
  return (
    <div className="hero-section multicolor-border">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/videos/Nubian.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/MAVJDigitalLogo.JPG"
          alt="MAVJ Logo"
        />
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </div>
  );
};

export default HeroSection;

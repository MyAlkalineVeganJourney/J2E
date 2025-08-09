// src/components/PageLayout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PhotoGallery from './PhotoGallery';
import '../styles/PageLayout.css'; // Local style path

const PageLayout = ({ title, subtitle, paragraph, children }) => {
  return (
    <div className="page-layout">
      {/* 🟥 Navbar (Sticky) */}
      <div className="navbar-container multicolor-border">
        <Navbar />
      </div>

      {/* 🟨 Title Section (Sticky) */}
      <div className="title-container multicolor-border sticky-title">
        <h1 className="page-title">{title}</h1>
        <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo" className="title-logo" />
        <h2 className="page-subtitle">{subtitle}</h2>
        {paragraph && <p className="page-paragraph">{paragraph}</p>}
      </div>

      {/* 🟩 Content Area */}
      <div className="content-area multicolor-border">
        {children}
      </div>

      {/* 🟪 Photo Gallery */}
      <div className="photo-gallery-container multicolor-border">
        <PhotoGallery />
      </div>

      {/* ⬛ Footer */}
      <Footer />
    </div>
  );
};

export default PageLayout;

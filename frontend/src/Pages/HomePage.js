// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhotoGallery from '../components/PhotoGallery';
import '../styles/PageLayout.css'; // Correct path for shared styles
const HomePage = () => {
  return (
    <div className="homepage-container page-layout">
      {/* 🟥 Container 1: Navbar (Sticky) */}
      <div className="navbar-container multicolor-border">
        <Navbar />
      </div>

      {/* 🟨 Container 2: Title Section (Sticky) */}
      <div className="title-container multicolor-border sticky-title">
        <h1 className="page-title">💦 My Alkaline Vegan Journey 💦</h1>
        <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo" className="title-logo" />
        <h2 className="page-home">Home</h2>
        <p className="page-subtitle">Sovereign Health, Vibrational Healing & Ancestral Nutrition</p>
      </div>

      {/* 🟩 Container 3: Video Gallery */}
      <div className="video-container multicolor-border">
        <h2 className="section-title">Video Gallery</h2>
        <div className="video-grid">
          {[
            {
              title: 'SleepyScience',
              img: 'Atom.jpg',
              src: 'https://drive.google.com/file/d/15vC0Mh0O633c_CW_Hoy9Jo59zhqCrHGt/preview'
            },
            {
              title: 'Faggin - Consciousness',
              img: 'Consciousness.jpeg',
              src: 'https://drive.google.com/file/d/15ZbEUGJcdHrlL2Ie9qO44DutBVKCpQ2_/preview'
            },
            {
              title: 'You are God - Faggin',
              img: 'God.jpeg',
              src: 'https://drive.google.com/file/d/1Gbh4r-fSDME0nnrv1GiDqgUeuDeFFbWb/preview'
            },
            {
              title: 'Quantum Soul',
              img: 'Soul.jpeg',
              src: 'https://drive.google.com/file/d/1P5ySleWI1eJWZXuRhpLnzXPbu8HBfoKB/preview'
            },
            {
              title: 'Quantum Biology',
              img: 'DNA.jpg',
              src: 'https://drive.google.com/file/d/1duJqHBAv6GSnITCFgK6F6GZqjlN4ywDH/preview'
            },
            {
              title: 'Consciousness by a Yogi - TedTalk',
              img: 'Yoga Consciousness.jpeg',
              src: 'https://drive.google.com/file/d/1g-UYH_cZSZn6CISOUlfTxsAtGz1kUeew/preview'
            }
          ].map((video, index) => (
            <div className="video-box glowing-hover" key={index}>
              <h3 className="video-title">{video.title}</h3>
              <img src={`/images/${video.img}`} alt={`${video.title} Thumbnail`} className="video-thumbnail" />
              <iframe
                src={video.src}
                title={video.title}
                className="embedded-video"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          ))}
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
      <div className="content-boxes-container multicolor-border white-bg">
        <div className="content-box-grid">
          {[
            { to: '/Journey2Enlightenment', img: 'J2EBanner.jpg', text: '💫 Journey 2 Enlightenment' },
            { to: '/MAVJSeaMoss', img: 'SeaMossBanner.jpg', text: '🌊 Volcanic Wild Crafted Sea Moss' },
            { to: '/CastorOil', img: 'CastorOilBanner.jpg', text: '🪔 Lunar Solar Volcanic Castor Oil' },
            { to: '/VibrationalIntelligence', img: 'VibrationalIntelligenceBanner.jpg', text: '🧠 Vibrational Intelligence' },
            { to: '/Recipes', img: 'RecipesBanner.png', text: '🥬 Alkaline Vegan Recipes' },
            { to: '/AlignWithUs', img: 'AlignWithUsBanner.png', text: '🤝 Align With Us – Sponsor, Donate, Invest' }
          ].map((box, idx) => (
            <a href={box.to} className="content-box glowing-hover" key={idx}>
              <img src={`/images/${box.img}`} alt={box.text} />
              <h3>{box.text}</h3>
            </a>
          ))}
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

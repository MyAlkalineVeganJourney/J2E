// frontend/src/Pages/AboutUs.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/info.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar />

      <section className="logo-section">
        <h1 className="title">💦 My Alkaline Vegan Journey 💦</h1>
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/MAVJDigitalLogo.JPG"
          alt="MAVJ Logo"
          className="main-logo"
        />
        <h2 className="event-title">💦🌴 Journey 🚥 2 🚥 Enlightenment 🌴💦</h2>
      </section>

      <section className="main-container">
        <div className="inner-box" onClick={() => window.location.href='/reset'}>
          <h2>Reset & Detoxification</h2>
          <p>
            Experience the power of fasting and cellular rejuvenation through our 21-day reset and dry fasting practices inspired by Dr. Sebi and clinical research.
          </p>
        </div>

        <div className="inner-box" onClick={() => window.location.href='/about-journey'}>
          <h2>About the Journey</h2>
          <p>
            Our movement goes beyond nutrition—this is a frequency transformation to elevate consciousness and human potential.
          </p>
        </div>

        <div className="inner-box" onClick={() => window.location.href='/travels'}>
          <h2>Travel & Retreat</h2>
          <p>
            Discover our St. Lucia prototype hub, eco-living opportunities, and Journey to Enlightenment gala packages.
          </p>
        </div>

        <div className="inner-box" onClick={() => window.location.href='/dr-sebi'}>
          <h2>Inspired by Dr. Sebi</h2>
          <p>
            Following the legacy of natural healing and alkaline-based nutrition grounded in holistic science.
          </p>
        </div>

        <div className="inner-box" onClick={() => window.location.href='/zimbabwe-farm'}>
          <h2>Zimbabwe Farm Project</h2>
          <p>
            Our global prototype in St. Lucia, featuring agri-aquaculture, communal living, and elevated frequency practices.
          </p>
        </div>

        <div className="inner-box" onClick={() => window.location.href='/executive-summary'}>
          <h2>Our Executive Summary</h2>
          <p>
            Learn how MAVJ Inc. bridges holistic wellness, sustainability, and global healing through our U.S. and Caribbean collaboration.
          </p>
        </div>
      </section>

      <section id="photo-gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery">
          <img src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/MAVJDigitalLogo.JPG" alt="MAVJ Logo" />
          <img src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/DBRoad.jpg" alt="DesBarres Road" />
          <img src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/BigTent.jpeg" alt="Big Tent" />
          <img src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/ResTents.jpeg" alt="ResTents" />
          <img src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/GoldSMG.png" alt="Gold Sea Moss" />
          <img src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/BeachDinner.png" alt="Beach Dinner" />
          <img src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/HF/main/Images/HorseTour.jpeg" alt="Horse Tour" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

// src/pages/Homepage.js
import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import PhotoGallery from '../components/PhotoGallery';
import { useNavigate } from 'react-router-dom';
import logo from '../components/MAVJLogo';

function Homepage() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="homepage-container">
      <nav className="navbar-fixed">
        {/* Add navigation links here */}
        <ul className="nav-links">
          <li onClick={() => handleRedirect('/')}>Home</li>
          <li onClick={() => handleRedirect('/store')}>Store</li>
          <li onClick={() => handleRedirect('/live')}>Live Broadcast</li>
          <li onClick={() => handleRedirect('/recipes')}>Recipes</li>
          <li onClick={() => handleRedirect('/herbs')}>Herbs</li>
          <li onClick={() => handleRedirect('/illnesses')}>Illnesses</li>
        </ul>
      </nav>

      <header className="site-header">
        <img src={logo} alt="MAVJLogo" className="site-logo" />
      </header>

      <section className="intro-section">
        <h1>🌱 My Alkaline Vegan Journey</h1>
        <p>
          We are a movement guided by frequency, natural rhythms, and ancestral memory.
          Our mission is to restore balance and vitality through vibrationally harvested
          Sea Moss, sacred Castor Oils, and the immersive Human Frequency Transformation
          experience in St. Lucia.
        </p>
      </section>

      <section className="featured-section">
        <div className="feature-box" onClick={() => handleRedirect('/accommodations')}>
          <img src="/images/j2e-pod.jpg" alt="Human Frequency Transformation" />
          <h2>🌕 Human Frequency Transformation</h2>
          <p>7 Days All-Inclusive experience in resonance with Earth and cosmos.</p>
          <button>Book Now</button>
        </div>

        <div className="feature-box" onClick={() => handleRedirect('/seamoss')}>
          <img src="/images/gold-gel.jpg" alt="Sea Moss Gel" />
          <h2>🌊 Sea Moss</h2>
          <p>Full Moon harvested Wild Crafted Sea Moss in Gold, Violet, Jade, and Spectrum forms.</p>
          <button>Shop Sea Moss</button>
        </div>

        <div className="feature-box" onClick={() => handleRedirect('/oils')}>
          <img src="/images/castor-oil.jpg" alt="Castor Oil" />
          <h2>🔥 Sacred Castor Oil</h2>
          <p>Solar/Lunar infused black castor oil crafted with intention and energy alignment.</p>
          <button>Shop Castor Oils</button>
        </div>
      </section>

      <section className="category-grid">
        <div className="category-box" onClick={() => handleRedirect('/herbs')}>
          <img src="/images/herbs.jpg" alt="Herbs" />
          <h3>Herbs</h3>
        </div>
        <div className="category-box" onClick={() => handleRedirect('/recipes')}>
          <img src="/images/recipes.jpg" alt="Recipes" />
          <h3>Recipes</h3>
        </div>
        <div className="category-box" onClick={() => handleRedirect('/illnesses')}>
          <img src="/images/illnesses.jpg" alt="Illnesses" />
          <h3>Illnesses</h3>
        </div>
        <div className="category-box" onClick={() => handleRedirect('/store')}>
          <img src="/images/store.jpg" alt="Store" />
          <h3>Full Store</h3>
        </div>
        <div className="category-box" onClick={() => handleRedirect('/live')}>
          <img src="/images/live.jpg" alt="Live" />
          <h3>Live Broadcast</h3>
        </div>
      </section>

      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default Homepage;

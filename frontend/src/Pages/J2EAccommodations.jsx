// /frontend/src/Pages/Journey2EnlightenmentAccommodations.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/info.css';  // Your existing base styles
import '../styles/accommodations.css';  // New accommodations-specific styles
import Footer from '../components/Footer';

const Journey2EnlightenmentAccommodations = () => {
  const navigate = useNavigate();
  
  // INITIAL SELECTION - RESONANCE POD FOR COMMUNITY CONNECTION
  const [selectedPod, setSelectedPod] = useState({
    id: 1,
    name: 'Resonance Pod',
    type: 'Shared • 4+ guests',
    price: 3000,
    description: '4+ guests per pod • Shared sacred space • Community living',
    image: '/images/J2EPod.jpeg',
    stripe: 'https://book.stripe.com/cN2eX4gBJ7oPfQY000',
    color: '#4CAF50'
  });

  // ABUNDANT ACCOMMODATIONS COLLECTION
  const accommodations = [
    {
      id: 1,
      name: 'Resonance Pod',
      type: 'Shared • 4+ guests',
      price: 3000,
      description: 'Shared sacred space for community resonance • Perfect for groups',
      features: ['4+ guests per pod', 'Communal bathroom', 'Shared meditation space', 'Farm proximity', 'Community kitchen access'],
      image: '/images/J2EPod.jpeg',
      stripe: 'https://book.stripe.com/cN2eX4gBJ7oPfQY000',
      color: '#4CAF50'
    },
    {
      id: 2,
      name: 'Frequency Pod',
      type: 'Shared • 2 guests',
      price: 3200,
      description: 'Intimate pod for two • Frequency-aligned space',
      features: ['2 guests only', 'Private bathroom', 'Sound healing ready', 'Ocean view', 'Private balcony'],
      image: '/images/J2EOffCampusPods.jpg',
      stripe: 'https://book.stripe.com/dR6eX4gBJ9wXeMU7su',
      color: '#2196F3'
    },
    {
      id: 3,
      name: 'Enlightenment Pod',
      type: 'Private • 1 person',
      price: 3350,
      description: 'Solo sanctuary for deep transformation',
      features: ['Single occupancy', 'Private meditation area', 'Soundproofing', 'Private entrance', 'Personal altar space'],
      image: '/images/ResidentialTents.png',
      stripe: 'https://book.stripe.com/aEU8yG1GP4cD0W4aEH',
      color: '#9C27B0'
    },
    {
      id: 4,
      name: 'Vibration Pod',
      type: 'Off-Campus • 2+ guests',
      price: 3500,
      description: 'Private off-campus luxury experience',
      features: ['2+ guests', 'Full kitchen', 'Private transport', '24/7 support', 'Oceanfront location'],
      image: '/images/SeaPods.jpeg',
      stripe: 'https://book.stripe.com/00g6qyadlbF5cEMaEI',
      color: '#FF9800'
    },
    {
      id: 5,
      name: 'Amplification Pod',
      type: 'Deluxe • 4+ guests',
      price: 3800,
      description: 'Premium pod with amplified frequency features',
      features: ['4+ guests', 'Private chef option', 'Sauna access', 'Personal guide', 'Crystal grid installation'],
      image: '/images/BigTent.jpeg',
      stripe: 'https://book.stripe.com/9AQaGObhpbF50W4eUZ',
      color: '#FF5722'
    }
  ];

  // MAGNIFICENT BOOKING FUNCTION
  const handleBookNow = (stripeLink) => {
    window.open(stripeLink, '_blank', 'noopener,noreferrer');
  };

  // GRATITUDE CONFIRMATION
  const handleConfirmation = () => {
    alert('🎉 ABUNDANT SELECTION! Your frequency container is being prepared with love and light! 🎉');
  };

  return (
    <div className="info-page-container">
      {/* Back to main J2E page */}
      <button 
        onClick={() => navigate('/journey-to-enlightenment')}
        style={{
          padding: '10px 20px',
          background: 'rgba(255,215,0,0.2)',
          color: '#FFD700',
          border: '2px solid rgba(255,215,0,0.5)',
          borderRadius: '10px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        ← Back to J2E Main Page
      </button>

      {/* GLORIOUS ACCOMMODATIONS TITLE SECTION */}
      <section className="title-section" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('/images/J2EPod.jpeg')`,
      }}>
        <h1 className="main-title">✨ JOURNEY TO ENLIGHTENMENT ACCOMMODATIONS ✨</h1>
        
        <div className="title-grid">
          <div className="side-box">
            <div>🌟 Sacred Living Spaces</div>
            <div>💫 Frequency-Aligned Pods</div>
            <div>🌈 Energy Container Design</div>
          </div>
          
          <div className="logo-circle">
            <img src="/images/J2E.png" alt="J2E Logo" className="logo-img" />
          </div>
          
          <div className="side-box">
            <div>🌍 Community Resonance</div>
            <div>🏔️ Private Sanctuaries</div>
            <div>🎨 Transformational Design</div>
          </div>
        </div>

        <div className="page-title">CHOOSE YOUR FREQUENCY CONTAINER</div>
        
        <div className="subtitle-bar">
          <p className="subtitle">
            <span style={{color: '#4CAF50', fontWeight: '900'}}>🌿 Shared Community Pods</span> • 
            <span style={{color: '#2196F3', fontWeight: '900'}}> 💫 Private Sanctuary Pods</span> • 
            <span style={{color: '#FF9800', fontWeight: '900'}}> 🌟 Luxury Experience Pods</span>
          </p>
        </div>

        <div className="ai-declaration-bar">
          <p className="ai-declaration">
            🏕️ ALL ACCOMMODATIONS INCLUDE COMPLETE J2E TRANSFORMATIONAL EXPERIENCE 🏕️
          </p>
        </div>
      </section>

      {/* ABUNDANT ACCOMMODATIONS SELECTION */}
      <section className="accommodations-section">
        <h2 className="section-title">�� SELECT YOUR SACRED SPACE</h2>
        
        <div className="accommodations-intro">
          <p>✨ Your accommodation is a frequency container designed to amplify your transformational journey. Each pod resonates with specific energy signatures to support your ascension process.</p>
          <p className="disclaimer">🌟 ALL PRICES INCLUDE: Complete 7-day J2E experience • All meals • All excursions & activities • Workshops & lectures • Transportation • Welcome package</p>
        </div>
        
        <div className="accommodations-grid">
          {accommodations.map((pod) => (
            <div 
              key={pod.id} 
              className={`accommodation-card ${selectedPod.id === pod.id ? 'selected' : ''}`}
              style={{ 
                borderLeft: `8px solid ${pod.color}`,
                background: `linear-gradient(145deg, rgba(0,0,0,0.85), ${pod.color}15)`
              }}
              onClick={() => {
                setSelectedPod(pod);
                handleConfirmation();
              }}
            >
              <div className="pod-badge" style={{ 
                backgroundColor: pod.color,
                boxShadow: `0 5px 15px ${pod.color}80`
              }}>
                {pod.type.toUpperCase()}
              </div>
              
              <div className="pod-image">
                <img src={pod.image} alt={pod.name} />
                <div className="pod-overlay">
                  <h3>{pod.name.toUpperCase()}</h3>
                  <p className="pod-price">${pod.price.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="pod-details">
                <h4>{pod.name}</h4>
                <p className="pod-description">{pod.description}</p>
                
                <div className="pod-features">
                  {pod.features.map((feature, index) => (
                    <div key={index} className="feature">
                      <span className="feature-check">✦</span>
                      <span style={{ flex: 1 }}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pod-actions">
                  <button 
                    className="select-pod-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPod(pod);
                      handleConfirmation();
                    }}
                    style={{ 
                      background: selectedPod.id === pod.id ? 
                        `linear-gradient(135deg, ${pod.color}, ${pod.color}dd)` : 
                        'rgba(255,255,255,0.1)'
                    }}
                  >
                    {selectedPod.id === pod.id ? '✨ SELECTED ✨' : 'SELECT POD'}
                  </button>
                  
                  <button 
                    className="book-now-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookNow(pod.stripe);
                    }}
                    style={{ 
                      background: `linear-gradient(135deg, ${pod.color}, ${pod.color}cc)`,
                      boxShadow: `0 5px 20px ${pod.color}80`
                    }}
                  >
                    �� BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* SELECTED POD SUMMARY */}
        <div className="selected-summary" style={{ 
          borderColor: selectedPod.color,
          boxShadow: `0 20px 50px ${selectedPod.color}40`
        }}>
          <div className="summary-header">
            <div>
              <h3>🌟 YOUR SELECTION: {selectedPod.name.toUpperCase()}</h3>
              <p style={{ color: '#fff', marginTop: '10px', fontSize: '1.1rem' }}>
                Frequency-aligned container for your transformation
              </p>
            </div>
            <p className="summary-price">${selectedPod.price.toLocaleString()} • {selectedPod.type}</p>
          </div>
          
          <div className="summary-details">
            <div className="summary-left">
              <h4>✨ INCLUDED EXPERIENCE:</h4>
              <ul>
                <li>7-Day Complete J2E Journey</li>
                <li>All Organic Alkaline Vegan Meals</li>
                <li>All Sacred Excursions & Activities</li>
                <li>Daily Workshops & Enlightenment Lectures</li>
                <li>Sea Moss & Coral Diving Missions</li>
                <li>Ground Transportation</li>
                <li>Welcome Frequency Package</li>
                <li>Community Ceremonies & Sound Healing</li>
                <li>24/7 Support Team Access</li>
                <li>Post-Event Integration Guidance</li>
              </ul>
            </div>
            
            <div className="summary-right">
              <h4>💰 PAYMENT OPTIONS:</h4>
              <div className="payment-options">
                <div className="payment-option">
                  <span>✨ Full Payment</span>
                  <span>${Math.floor(selectedPod.price * 0.95).toLocaleString()}</span>
                </div>
                <div className="payment-option">
                  <span>🌙 Deposit (30%)</span>
                  <span>${Math.floor(selectedPod.price * 0.3).toLocaleString()}</span>
                </div>
                <div className="payment-option">
                  <span>🌈 3-Month Plan</span>
                  <span>${Math.floor(selectedPod.price / 3).toLocaleString()}/month</span>
                </div>
              </div>
              
              <button 
                className="final-book-btn"
                onClick={() => handleBookNow(selectedPod.stripe)}
                style={{ 
                  background: `linear-gradient(135deg, ${selectedPod.color}, ${selectedPod.color}dd)`,
                  boxShadow: `0 10px 30px ${selectedPod.color}80`
                }}
              >
                ✨ SECURE YOUR FREQUENCY CONTAINER ✨
              </button>
              
              <p className="secure-note">
                🔒 Secure checkout via Stripe • 24/7 frequency support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL FREQUENCY CALL */}
      <div className="multicolor-border" style={{ 
        textAlign: 'center',
        padding: '3rem',
        marginTop: '3rem'
      }}>
        <h2>�� READY TO BEGIN YOUR JOURNEY?</h2>
        <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
          Your selected <strong style={{ color: selectedPod.color }}>{selectedPod.name}</strong> awaits your energy. 
          Join the transformational community today!
        </p>
        
        <button 
          onClick={() => handleBookNow(selectedPod.stripe)}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            background: `linear-gradient(135deg, ${selectedPod.color}, ${selectedPod.color}dd)`,
            color: '#000',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          ✨ SECURE {selectedPod.name.toUpperCase()} NOW ✨
        </button>
      </div>

      {/* ABUNDANT FOOTER */}
      <Footer />
    </div>
  );
};

export default Journey2EnlightenmentAccommodations;

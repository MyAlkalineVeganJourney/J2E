// /frontend/src/Pages/J2EAccommodations.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';
import './J2EAccommodations.css';

const J2EAccommodations = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
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
    },
    {
      id: 6,
      name: 'Infinity Pod',
      type: 'Premium • 2-3 guests',
      price: 3650,
      description: 'Circular pod design for infinite energy flow',
      features: ['Geodesic design', '360° forest views', 'Star-gazing roof', 'Bio-metric entry', 'Energy vortex access'],
      image: '/images/J2EPod.jpeg',
      stripe: 'https://book.stripe.com/test_link',
      color: '#00BCD4'
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
    <div className="homepage-container">
      {/* CONTAINER 1: NAVBAR (AUTO-IMPORTED IN App.js) */}
      
      {/* CONTAINER 2: GLORIOUS ACCOMMODATIONS TITLE SECTION */}
      <section className="title-section" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('/images/J2EPod.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <h1 className="main-title">✨ JOURNEY TO ENLIGHTENMENT ACCOMMODATIONS ✨</h1>
        
        <div className="title-grid">
          <div className="side-box">
            <div>🌟 Sacred Living Spaces</div>
            <div>💫 Frequency-Aligned Pods</div>
            <div>🌈 Energy Container Design</div>
            <div>🌿 Natural Material Construction</div>
          </div>
          
          <div className="logo-circle">
            <img src="/images/J2E.png" alt="J2E Logo" className="logo-img" />
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              color: '#FFD700',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>FREQUENCY CONTAINERS</div>
          </div>
          
          <div className="side-box">
            <div>🌍 Community Resonance</div>
            <div>🏔️ Private Sanctuaries</div>
            <div>🎨 Transformational Design</div>
            <div>⚡ High-Vibration Materials</div>
          </div>
        </div>

        <div className="page-title">CHOOSE YOUR FREQUENCY CONTAINER OF TRANSFORMATION</div>
        
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

      {/* CONTAINER 3: ABUNDANT ACCOMMODATIONS SELECTION */}
      <section className="section" style={{
        background: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url('/images/star-pattern.png')`,
        backgroundSize: '150px',
        backgroundBlendMode: 'overlay'
      }}>
        <h2 className="section-title">🌿 SELECT YOUR SACRED SPACE OF TRANSFORMATION</h2>
        
        <div className="accommodations-intro">
          <p>✨ Your accommodation is a frequency container designed to amplify your transformational journey. Each pod resonates with specific energy signatures to support your ascension process.</p>
          <p>💎 Every space is crafted with intention, using natural materials, sacred geometry, and energy-clearing technologies to create the perfect environment for your enlightenment.</p>
          <p className="disclaimer">🌟 ALL PRICES INCLUDE: Complete 7-day J2E experience • All meals (alkaline vegan farm-to-table) • All excursions & activities • Workshops & lectures • Sea moss & coral diving missions • Transportation during event • Welcome frequency package</p>
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
                  <p style={{ color: '#fff', fontSize: '0.9rem', marginTop: '5px' }}>
                    COMPLETE 7-DAY EXPERIENCE
                  </p>
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
                    {selectedPod.id === pod.id ? '✨ SELECTED ✨' : 'SELECT THIS POD'}
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
                    🚀 BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* SELECTED POD SUMMARY - CONFIRMATION OF ABUNDANCE */}
        <div className="selected-summary" style={{ 
          borderColor: selectedPod.color,
          boxShadow: `0 20px 50px ${selectedPod.color}40`
        }}>
          <div className="summary-header">
            <div>
              <h3>🌟 YOUR SELECTION: {selectedPod.name.toUpperCase()} 🌟</h3>
              <p style={{ color: '#fff', marginTop: '10px', fontSize: '1.1rem' }}>
                Frequency-aligned container for your transformation journey
              </p>
            </div>
            <p className="summary-price">${selectedPod.price.toLocaleString()} • {selectedPod.type}</p>
          </div>
          
          <div className="summary-details">
            <div className="summary-left">
              <h4>✨ INCLUDED TRANSFORMATIONAL EXPERIENCE:</h4>
              <ul>
                <li>7-Day Complete J2E Transformational Journey</li>
                <li>All Organic Alkaline Vegan Meals (Farm-to-Table)</li>
                <li>All Sacred Excursions & Frequency Activities</li>
                <li>Daily Workshops & Enlightenment Lectures</li>
                <li>Sea Moss Harvesting & Coral Diving Missions</li>
                <li>Ground Transportation Throughout Event</li>
                <li>Welcome Frequency Alignment Package</li>
                <li>Community Fire Ceremonies & Sound Healing</li>
                <li>24/7 Frequency Support Team Access</li>
                <li>Post-Event Integration Guidance</li>
              </ul>
            </div>
            
            <div className="summary-right">
              <h4>💰 ABUNDANT PAYMENT OPTIONS:</h4>
              <div className="payment-options">
                <div className="payment-option">
                  <span>✨ Full Payment (Save 5% Energy)</span>
                  <span>${Math.floor(selectedPod.price * 0.95).toLocaleString()}</span>
                </div>
                <div className="payment-option">
                  <span>🌙 Secure Your Space Deposit (30%)</span>
                  <span>${Math.floor(selectedPod.price * 0.3).toLocaleString()}</span>
                </div>
                <div className="payment-option">
                  <span>🌈 3-Month Abundance Payment Plan</span>
                  <span>${Math.floor(selectedPod.price / 3).toLocaleString()}/month</span>
                </div>
                <div className="payment-option">
                  <span>⚡ 6-Month Ease & Flow Plan</span>
                  <span>${Math.floor(selectedPod.price / 6).toLocaleString()}/month</span>
                </div>
              </div>
              
              <button 
                className="final-book-btn"
                onClick={() => handleBookNow(selectedPod.stripe)}
                style={{ 
                  background: `linear-gradient(135deg, ${selectedPod.color}, ${selectedPod.color}dd, ${selectedPod.color})`,
                  boxShadow: `0 10px 30px ${selectedPod.color}80`
                }}
              >
                <i className="fas fa-gem"></i> ✨ SECURE YOUR FREQUENCY CONTAINER ✨
              </button>
              
              <p className="secure-note">
                <i className="fas fa-lock"></i> 🌟 Secure abundance checkout via Stripe • 24/7 frequency support available
              </p>
              
              <div style={{
                marginTop: '25px',
                padding: '15px',
                background: 'rgba(255,215,0,0.1)',
                borderRadius: '12px',
                border: '2px solid rgba(255,215,0,0.3)',
                textAlign: 'center'
              }}>
                <p style={{ color: '#FFD700', fontWeight: 'bold', margin: 0 }}>
                  💫 LIMITED AVAILABILITY: Each pod type has limited spaces to maintain optimal frequency resonance
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* COMPARISON TABLE - CLARITY IN CHOICE */}
        <div className="comparison-table">
          <h3>📊 FREQUENCY CONTAINER COMPARISON</h3>
          <table>
            <thead>
              <tr>
                <th style={{ background: 'linear-gradient(135deg, #000, #333)' }}>FEATURE</th>
                {accommodations.map(pod => (
                  <th key={pod.id} style={{ 
                    background: `linear-gradient(135deg, ${pod.color}40, ${pod.color}20)`,
                    color: pod.color,
                    fontSize: '1.1rem'
                  }}>
                    {pod.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>✨ OCCUPANCY</td>
                {accommodations.map(pod => (
                  <td key={pod.id} style={{ fontWeight: 'bold' }}>{pod.type.split('•')[1]?.trim()}</td>
                ))}
              </tr>
              <tr>
                <td>💰 INVESTMENT (TOTAL)</td>
                {accommodations.map(pod => (
                  <td key={pod.id} style={{ color: '#FFD700', fontWeight: '900' }}>
                    ${pod.price.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td>🚿 BATHROOM TYPE</td>
                {accommodations.map(pod => (
                  <td key={pod.id}>{pod.features.find(f => f.includes('bathroom')) || 'Communal'}</td>
                ))}
              </tr>
              <tr>
                <td>📍 LOCATION ENERGY</td>
                {accommodations.map(pod => (
                  <td key={pod.id}>
                    {pod.name.includes('Off-Campus') ? '🌊 Oceanfront Luxury' : 
                     pod.name.includes('Enlightenment') ? '🌲 Private Forest' : '🏕️ Main Farm Community'}
                  </td>
                ))}
              </tr>
              <tr>
                <td>🌟 SPECIAL FEATURE</td>
                {accommodations.map(pod => (
                  <td key={pod.id}>{pod.features[pod.features.length - 1]}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* TESTIMONIALS - FREQUENCY RESONANCE */}
      <section className="section" style={{
        background: `linear-gradient(rgba(0,0,0,0.92), rgba(0,0,0,0.95)), url('/images/Robin.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h2 className="section-title">💫 FREQUENCY TESTIMONIALS FROM ASCENDED BEINGS</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The Resonance Pod created a container of love that accelerated my healing. The community energy was palpable and transformational. I met soul family here!"</p>
            <div className="testimonial-author">
              <span>Maria G. • 2023 Ascendant</span>
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"My Enlightenment Pod was my sanctuary for deep introspection. The privacy allowed me to connect with my highest self in ways I never imagined possible."</p>
            <div className="testimonial-author">
              <span>David T. • Frequency Alchemist</span>
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"The Vibration Pod gave us luxury while keeping us deeply connected to the J2E energy field. Waking up to ocean sounds transformed our mornings."</p>
            <div className="testimonial-author">
              <span>Sarah & Michael • Couple Journeyers</span>
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY - VISUAL FREQUENCY */}
      <section className="section" style={{
        background: `linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,40,0.95))`
      }}>
        <h2 className="section-title">🏕️ FREQUENCY CONTAINER GALLERY</h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#fff', 
          maxWidth: '800px', 
          margin: '0 auto 3rem',
          fontSize: '1.2rem',
          lineHeight: '1.8'
        }}>
          Experience the sacred spaces through these glimpses of transformational living containers.
        </p>
        <div className="pod-gallery">
          <div className="gallery-item">
            <img src="/images/J2EPod.jpeg" alt="Sacred Pod Interior" />
            <p>✨ Sacred Pod Interior</p>
          </div>
          <div className="gallery-item">
            <img src="/images/ResidentialTents.png" alt="Transformational Tent Setup" />
            <p>🏕️ Residential Tents</p>
          </div>
          <div className="gallery-item">
            <img src="/images/SeaPods.jpeg" alt="Ocean Frequency Pods" />
            <p>🌊 Ocean View Pods</p>
          </div>
          <div className="gallery-item">
            <img src="/images/BigTent.jpeg" alt="Community Gathering Space" />
            <p>🔥 Community Gathering Space</p>
          </div>
          <div className="gallery-item">
            <img src="/images/J2EOffCampusPods.jpg" alt="Luxury Off-Campus Pods" />
            <p>🌟 Luxury Off-Campus</p>
          </div>
          <div className="gallery-item">
            <img src="/images/J2EPod.jpeg" alt="Meditation Space" />
            <p>🧘 Private Meditation Space</p>
          </div>
        </div>
      </section>

      {/* FINAL FREQUENCY CALL */}
      <section className="section" style={{
        background: `linear-gradient(135deg, ${selectedPod.color}20, ${selectedPod.color}10)`,
        border: `4px solid ${selectedPod.color}40`,
        textAlign: 'center'
      }}>
        <h2 className="section-title">🚀 READY TO SECURE YOUR FREQUENCY CONTAINER?</h2>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#fff', 
          maxWidth: '800px', 
          margin: '0 auto 2rem',
          lineHeight: '1.9'
        }}>
          Your selected <strong style={{ color: selectedPod.color }}>{selectedPod.name}</strong> awaits your energy signature. 
          Join the transformational community and begin your ascent to higher consciousness.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '3rem' }}>
          <button 
            onClick={() => handleBookNow(selectedPod.stripe)}
            style={{
              padding: '20px 40px',
              fontSize: '1.3rem',
              background: `linear-gradient(135deg, ${selectedPod.color}, ${selectedPod.color}dd)`,
              color: '#000',
              border: 'none',
              borderRadius: '15px',
              fontWeight: '900',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.boxShadow = `0 15px 35px ${selectedPod.color}80`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
            }}
          >
            ✨ SECURE {selectedPod.name.toUpperCase()} ✨
          </button>
          
          <button 
            onClick={() => setSelectedPod(accommodations[0])}
            style={{
              padding: '20px 40px',
              fontSize: '1.3rem',
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: '2px solid rgba(255,215,0,0.5)',
              borderRadius: '15px',
              fontWeight: '900',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,215,0,0.2)';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            🔄 EXPLORE OTHER PODS
          </button>
        </div>
      </section>

      {/* CONTAINER 11: ABUNDANT FOOTER */}
      <Footer />
    </div>
  );
};

export default J2EAccommodations;

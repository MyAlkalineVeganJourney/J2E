import React, { useState } from 'react';
import Layout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';

const Journey2Enlightenment = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // EXPERIENCES WITH STORE LINKS
  const experiences = [
    {
      id: 'convergence',
      title: '✨ 11:11 GLOBAL CONVERGENCE',
      path: '/MAVJStore?category=convergence',
      image: '/images/BeachDinner.png',
      description: 'November 11, 2026 • Golf Tournament • Gala • Global Flash Mob',
      longDesc: 'The signature event of the year. Join us for a 5-day immersive experience including golf at Cap Estate, an elegant gala, and a synchronized global flash mob.',
      price: '$3,200',
      color: '#FFD700',
      features: ['Golf Tournament', 'Gala Dinner', 'Flash Mob', 'Workshops'],
      storeLink: '/MAVJStore?category=convergence'
    },
    {
      id: 'accommodations',
      title: '🏕️ FREQUENCY PODS',
      path: '/MAVJStore?category=accommodations',
      image: '/images/J2EPod.jpeg',
      description: 'Stay in our frequency-aligned eco-pods',
      longDesc: 'Sleep in structures tuned to optimal healing frequencies. Each pod is designed with sacred geometry principles.',
      price: '$350/night',
      color: '#2196F3',
      features: ['Private Pod', 'Solar Powered', 'Frequency Tuned', 'Eco-Friendly'],
      storeLink: '/MAVJStore?category=accommodations'
    },
    {
      id: 'excursions',
      title: '🚣 ST. LUCIAN ADVENTURES',
      path: '/MAVJStore?category=excursions',
      image: '/images/diving.jpeg',
      description: 'Island explorations & sacred site visits',
      longDesc: 'Dive into crystal waters, hike volcanic peaks, and visit sacred indigenous sites.',
      price: '$150',
      color: '#FF9800',
      features: ['Snorkeling', 'Hiking', 'Sacred Sites', 'Local Guides'],
      storeLink: '/MAVJStore?category=excursions'
    },
    {
      id: 'agro',
      title: '🌿 FARM EXPERIENCE',
      path: '/MAVJStore?category=agro',
      image: '/images/FarmTour.jpeg',
      description: 'Tour our Zimbabwe Farm & herbal gardens',
      longDesc: 'Walk through our alkaline vegan farm. Learn about herbal frequency medicine directly from our farmers.',
      price: '$85',
      color: '#4CAF50',
      features: ['Farm Tour', 'Herbal Workshop', 'Tasting', 'Seeds'],
      storeLink: '/MAVJStore?category=agro'
    },
    {
      id: 'aqua',
      title: '🌊 AQUATIC MISSIONS',
      path: '/MAVJStore?category=aqua',
      image: '/images/KsScubaDiveSL.jpeg',
      description: 'Sea moss diving & coral regeneration',
      longDesc: 'Join our dive team to harvest volcanic sea moss and participate in coral restoration.',
      price: '$200',
      color: '#00BCD4',
      features: ['Scuba Gear', 'Sea Moss Harvest', 'Coral Planting', 'Certified Dive Master'],
      storeLink: '/MAVJStore?category=aqua'
    },
    {
      id: 'workshops',
      title: '🧘 QUANTUM WORKSHOPS',
      path: '/MAVJStore?category=workshops',
      image: '/images/RecipesBanner.png',
      description: 'Frequency healing & consciousness expansion',
      longDesc: 'Daily workshops on quantum biology, sound healing, and frequency recalibration.',
      price: '$95',
      color: '#9C27B0',
      features: ['Daily Sessions', 'Expert Led', 'Materials Included', 'Certificate'],
      storeLink: '/MAVJStore?category=workshops'
    },
    {
      id: 'food',
      title: '🍃 SACRED NOURISHMENT',
      path: '/MAVJStore?category=food',
      image: '/images/KingOysterSalad.jpg',
      description: 'Farm-to-table alkaline cuisine',
      longDesc: 'Experience gourmet alkaline vegan meals prepared with ingredients harvested that morning.',
      price: '$65',
      color: '#FF5722',
      features: ['3 Meals Daily', 'Chef-Led Classes', 'Recipe Cards', 'Nutrition Guide'],
      storeLink: '/MAVJStore?category=food'
    },
    {
      id: 'protocol',
      title: '⚡ QUANTUM PROTOCOL',
      path: '/MAVJStore?category=protocol',
      image: '/images/AlkalineSmoothies.jpg',
      description: '90-day personal transformation system',
      longDesc: 'Complete reset protocol with detox, sound therapy, and daily frequency tracking.',
      price: '$250',
      color: '#673AB7',
      features: ['Detox Guide', 'Sound Library', 'Tracking App', 'Support Group'],
      storeLink: '/MAVJStore?category=protocol'
    }
  ];

  const featuredExperiences = experiences.filter(e => 
    selectedCategory === 'all' ? true : e.id === selectedCategory
  );

  const handleBookNow = (storePath) => {
    navigate(storePath);
  };

  return (
    <Layout pageTitle="JOURNEY 2 ENLIGHTENMENT">
      {/* HERO SECTION WITH FULL BACKGROUND IMAGE */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/BeachDinner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '40px',
        position: 'relative'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          color: '#FFD700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          marginBottom: '20px',
          fontWeight: '900'
        }}>
          JOURNEY 2 ENLIGHTENMENT
        </h1>
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: 'white',
          maxWidth: '800px',
          margin: '0 20px 30px',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Your Quantum Transformation Awaits in St. Lucia
        </p>
        <button
          onClick={() => handleBookNow('/MAVJStore?category=convergence')}
          style={{
            padding: '15px 50px',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#000',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255,215,0,0.3)'
          }}
        >
          BOOK THE CONVERGENCE →
        </button>
      </div>

      {/* QUICK STATS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto 50px',
        padding: '0 20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: '#FFD700' }}>🌴</div>
          <h3 style={{ color: '#FFD700' }}>8 Unique Experiences</h3>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: '#FFD700' }}>🏝️</div>
          <h3 style={{ color: '#FFD700' }}>St. Lucia Location</h3>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: '#FFD700' }}>⚡</div>
          <h3 style={{ color: '#FFD700' }}>Frequency-Focused</h3>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: '#FFD700' }}>🎯</div>
          <h3 style={{ color: '#FFD700' }}>Book Direct</h3>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '40px'
      }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            padding: '10px 20px',
            background: selectedCategory === 'all' ? '#FFD700' : 'transparent',
            border: '2px solid #FFD700',
            borderRadius: '30px',
            color: selectedCategory === 'all' ? '#000' : '#FFD700',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ALL EXPERIENCES
        </button>
        {experiences.map(exp => (
          <button
            key={exp.id}
            onClick={() => setSelectedCategory(exp.id)}
            style={{
              padding: '10px 20px',
              background: selectedCategory === exp.id ? exp.color : 'transparent',
              border: `2px solid ${exp.color}`,
              borderRadius: '30px',
              color: selectedCategory === exp.id ? '#000' : exp.color,
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {exp.title.split(' ')[1]}
          </button>
        ))}
      </div>

      {/* FEATURED EXPERIENCE (if one selected) */}
      {selectedCategory !== 'all' && (
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto 40px',
          background: 'rgba(0,0,0,0.7)',
          borderRadius: '15px',
          padding: '30px',
          border: `2px solid ${experiences.find(e => e.id === selectedCategory)?.color}`
        }}>
          <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>
            {experiences.find(e => e.id === selectedCategory)?.title}
          </h2>
          <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px' }}>
            {experiences.find(e => e.id === selectedCategory)?.longDesc}
          </p>
          <button
            onClick={() => handleBookNow(experiences.find(e => e.id === selectedCategory)?.storeLink)}
            style={{
              padding: '12px 30px',
              background: `linear-gradient(135deg, ${experiences.find(e => e.id === selectedCategory)?.color}, #FFA500)`,
              border: 'none',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#000',
              cursor: 'pointer'
            }}
          >
            BOOK NOW — {experiences.find(e => e.id === selectedCategory)?.price}
          </button>
        </div>
      )}

      {/* EXPERIENCES GRID */}
      <h2 style={{
        color: '#FFD700',
        fontSize: '2.5rem',
        textAlign: 'center',
        margin: '40px 0'
      }}>
        {selectedCategory === 'all' ? 'ALL J2E EXPERIENCES' : 'SIMILAR EXPERIENCES'}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {featuredExperiences.map((exp, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${exp.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px',
              padding: '25px 20px',
              border: `2px solid ${exp.color}`,
              transition: 'transform 0.3s',
              minHeight: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div>
              <h3 style={{ color: exp.color, fontSize: '1.8rem', marginBottom: '10px' }}>
                {exp.title}
              </h3>
              <p style={{ color: 'white', marginBottom: '15px' }}>{exp.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '15px' }}>
                {exp.features.map((feature, i) => (
                  <span key={i} style={{
                    padding: '3px 8px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    color: exp.color
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#FFD700', fontSize: '1.3rem', fontWeight: 'bold' }}>
                {exp.price}
              </span>
              <button
                onClick={() => handleBookNow(exp.storeLink)}
                style={{
                  padding: '8px 20px',
                  background: `linear-gradient(135deg, ${exp.color}, #FFA500)`,
                  border: 'none',
                  borderRadius: '25px',
                  color: '#000',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Book Now →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* STORE INTEGRATION BANNER */}
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,0,0,0.9))',
        border: '3px solid #FFD700',
        borderRadius: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2.5rem', marginBottom: '20px' }}>
          🛒 ALL EXPERIENCES AVAILABLE IN THE STORE
        </h2>
        <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
          Book your entire Journey2Enlightenment experience directly through our secure store.
          Golf tournaments, accommodations, workshops — all in one place.
        </p>
        <button
          onClick={() => navigate('/MAVJStore?category=j2e')}
          style={{
            padding: '15px 50px',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#000',
            cursor: 'pointer'
          }}
        >
          VISIT J2E STORE SECTION →
        </button>
      </div>

      {/* PHOTO GALLERY */}
      <h2 style={{ color: '#FFD700', fontSize: '2rem', textAlign: 'center', margin: '40px 0 20px' }}>
        St. Lucia in Pictures
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {[
          '/images/BeachBar.jpeg',
          '/images/diving.jpeg',
          '/images/FarmTour.jpeg',
          '/images/KsScubaDiveSL.jpeg',
          '/images/RobinDive.jpg',
          '/images/ResidentialTents.png',
          '/images/SeaPods.jpeg',
          '/images/BigTent.jpeg'
        ].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="St. Lucia"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              border: '2px solid #FFD700'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Journey2Enlightenment;

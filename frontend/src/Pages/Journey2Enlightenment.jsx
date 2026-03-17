import React from 'react';
import Layout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';

const Journey2Enlightenment = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: 'THE CONVERGENCE',
      path: '/J2EConvergence',
      image: '/images/BeachDinner.png',
      description: '11:11 Global Gathering • Golf Tournament • Gala • Flash Mob',
      color: '#FFD700',
      price: 'From $3,000'
    },
    {
      title: 'ACCOMMODATIONS',
      path: '/J2EAccommodations',
      image: '/images/J2EPod.jpeg',
      description: 'Frequency-aligned pods • Glamping • Eco-luxury stays',
      color: '#2196F3',
      price: 'From $350/night'
    },
    {
      title: 'EXCURSIONS',
      path: '/J2EExcursions',
      image: '/images/diving.jpeg',
      description: 'Island adventures • Beach explorations • Sacred sites',
      color: '#FF9800',
      price: 'From $150'
    },
    {
      title: 'AGRO EXPERIENCE',
      path: '/J2EAgro',
      image: '/images/FarmTour.jpeg',
      description: 'Farm tours • Herbal education • Sustainable farming',
      color: '#4CAF50',
      price: 'Included'
    },
    {
      title: 'AQUATIC MISSIONS',
      path: '/J2EAqua',
      image: '/images/KsScubaDiveSL.jpeg',
      description: 'Sea moss diving • Coral regeneration • Ocean healing',
      color: '#00BCD4',
      price: 'From $200'
    },
    {
      title: 'WORKSHOPS',
      path: '/J2EWorkshops',
      image: '/images/RecipesBanner.png',
      description: 'Quantum talks • Healing circles • Frequency training',
      color: '#9C27B0',
      price: 'Included'
    },
    {
      title: 'SACRED NOURISHMENT',
      path: '/J2EFood',
      image: '/images/KingOysterSalad.jpg',
      description: 'Farm-to-table dining • Alkaline cuisine • Quantum nutrition',
      color: '#FF5722',
      price: 'Included'
    },
    {
      title: 'QUANTUM PROTOCOL',
      path: '/vibrational-intelligence/J2EProtocol',
      image: '/images/AlkalineSmoothies.jpg',
      description: '90-day reset • Frequency stages • Detox protocol',
      color: '#673AB7',
      price: '$250'
    }
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Layout pageTitle="JOURNEY 2 ENLIGHTENMENT">
      {/* HERO SECTION */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/BeachDinner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '40px',
        borderRadius: '0 0 50px 50px',
        borderBottom: '3px solid #FFD700'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          color: '#FFD700',
          textShadow: '0 0 20px rgba(255,215,0,0.8)',
          marginBottom: '20px'
        }}>
          🌴 JOURNEY 2 ENLIGHTENMENT
        </h1>
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: 'white',
          maxWidth: '800px',
          margin: '0 20px'
        }}>
          Your Quantum Transformation Awaits in St. Lucia
        </p>
      </div>

      {/* INTRO SECTION */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 60px',
        padding: '30px',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.5)',
        border: '2px solid #FFD700',
        borderRadius: '20px'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>
          Experience the Quantum Shift
        </h2>
        <p style={{ color: 'white', fontSize: '1.2rem', lineHeight: '1.8' }}>
          Journey 2 Enlightenment is not a retreat—it's a quantum frequency recalibration. 
          From our volcanic farm to the crystal-clear waters of St. Lucia, every experience 
          is designed to elevate your resonance.
        </p>
      </div>

      {/* FEATURED CONVERGENCE CARD */}
      <div 
        onClick={() => handleNavigate('/J2EConvergence')}
        style={{
          maxWidth: '1000px',
          margin: '0 auto 50px',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/BeachDinner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          padding: '60px 30px',
          textAlign: 'center',
          cursor: 'pointer',
          border: '3px solid #FFD700',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h2 style={{ color: '#FFD700', fontSize: '3rem', marginBottom: '20px' }}>
          ✨ 11:11 GLOBAL CONVERGENCE ✨
        </h2>
        <p style={{ color: 'white', fontSize: '1.3rem', marginBottom: '30px' }}>
          November 11, 2026 • Golf Tournament • Gala • Global Flash Mob
        </p>
        <div style={{
          display: 'inline-block',
          padding: '15px 40px',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          borderRadius: '50px',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}>
          Explore the Convergence →
        </div>
      </div>

      {/* EXPERIENCE GRID */}
      <h2 style={{
        color: '#FFD700',
        fontSize: '2.5rem',
        textAlign: 'center',
        margin: '40px 0 30px'
      }}>
        Choose Your Path
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(exp.path)}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${exp.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px',
              padding: '30px 20px',
              cursor: 'pointer',
              border: `2px solid ${exp.color}`,
              transition: 'transform 0.3s',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3 style={{ color: exp.color, fontSize: '1.8rem', marginBottom: '10px' }}>
              {exp.title}
            </h3>
            <p style={{ color: 'white', marginBottom: '10px' }}>{exp.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#FFD700', fontWeight: 'bold' }}>{exp.price}</span>
              <span style={{ color: exp.color }}>Learn More →</span>
            </div>
          </div>
        ))}
      </div>

      {/* ST. LUCIAN GALLERY */}
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '20px'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', textAlign: 'center', marginBottom: '30px' }}>
          St. Lucian Paradise
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          {[
            '/images/BeachBar.jpeg',
            '/images/diving.jpeg',
            '/images/FarmTour.jpeg',
            '/images/KsScubaDiveSL.jpeg',
            '/images/RobinDive.jpg',
            '/images/ResidentialTents.png'
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
              onError={(e) => e.target.style.display = 'none'}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Journey2Enlightenment;

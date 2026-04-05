import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/PageLayout';
import VIBreadcrumbs from '../components/VIBreadcrumbs';

const TheJourney = () => {
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(2020);

  // Timeline data
  const timelineData = {
    2019: {
      title: t('journey.timeline.2019.title', 'The Beginning'),
      events: [
        { title: t('journey.timeline.2019.event1.title', 'Living in Australia'), description: t('journey.timeline.2019.event1.desc', 'Before the world changed, I was living abroad, building a life down under.'), icon: '🦘' },
        { title: t('journey.timeline.2019.event2.title', 'The Pandemic Hits'), description: t('journey.timeline.2019.event2.desc', 'COVID-19 spread globally. I had a return ticket to Australia for April 2020.'), icon: '😷' },
        { title: t('journey.timeline.2019.event3.title', 'The Mandate'), description: t('journey.timeline.2019.event3.desc', 'February 2020: The US government began mandating the inoculation. I knew I needed to take control of my own health.'), icon: '📜' }
      ]
    },
    2020: {
      title: t('journey.timeline.2020.title', 'The First Reset'),
      events: [
        { title: t('journey.timeline.2020.event1.title', 'Lent Season Decision'), description: t('journey.timeline.2020.event1.desc', 'I decided to stop eating. Not a "fast"—a RESET. A detoxification. A recalibration of my entire system.'), icon: '🌀' },
        { title: t('journey.timeline.2020.event2.title', '4 Resets in One Year'), description: t('journey.timeline.2020.event2.desc', 'I became my own case study. Each reset was 21 days. Different water temperatures—hot, cold, room temperature. Each had unique effects on my body.'), icon: '📊' },
        { title: t('journey.timeline.2020.event3.title', '60 Pounds Gone'), description: t('journey.timeline.2020.event3.desc', 'The first 21 days: 60 pounds lost. No loose flesh. My body transformed completely.'), icon: '⚡' }
      ]
    },
    2021: {
      title: t('journey.timeline.2021.title', 'The 40-Day Transformation'),
      events: [
        { title: t('journey.timeline.2021.event1.title', 'January 2021: 40-Day Reset'), description: t('journey.timeline.2021.event1.desc', 'This changed everything. My immune system became bulletproof. Brain fog vanished. My face, my body, my thoughts—all transformed.'), icon: '🔥' },
        { title: t('journey.timeline.2021.event2.title', 'The COVID Test'), description: t('journey.timeline.2021.event2.desc', 'November 2021: Everyone in my home got COVID. I survived with zero symptoms. The 40-day reset made me bulletproof.'), icon: '🛡️' },
        { title: t('journey.timeline.2021.event3.title', 'The Decision to Move'), description: t('journey.timeline.2021.event3.desc', 'Creativity and imagination exploding. I knew I needed to stretch beyond my limits.'), icon: '✈️' }
      ]
    },
    2022: {
      title: t('journey.timeline.2022.title', 'The Mission Begins'),
      events: [
        { title: t('journey.timeline.2022.event1.title', 'Mexico - Isla Mujeres'), description: t('journey.timeline.2022.event1.desc', 'First stop. Testing my new frequency in new waters.'), icon: '🇲🇽' },
        { title: t('journey.timeline.2022.event2.title', 'Bahamas - Bimini'), description: t('journey.timeline.2022.event2.desc', 'The crystal clear waters called to me. The mission was taking shape.'), icon: '🇧🇸' },
        { title: t('journey.timeline.2022.event3.title', 'St. Lucia - The Mission'), description: t('journey.timeline.2022.event3.desc', 'I had visited years ago on a cruise. Now I returned with purpose: DIVE FOR SEA MOSS. BUILD SELF-SUSTAINABILITY.'), icon: '🌊' }
      ]
    },
    2023: {
      title: t('journey.timeline.2023.title', 'Building Community'),
      events: [
        { title: t('journey.timeline.2023.event1.title', 'Discovering the Artisans'), description: t('journey.timeline.2023.event1.desc', 'The residents of St. Lucia are incredibly resourceful. Many had ideas that only needed financial backing and administrative support.'), icon: '🤝' },
        { title: t('journey.timeline.2023.event2.title', 'The MAVJ Family Grows'), description: t('journey.timeline.2023.event2.desc', '100,000+ members on social media. We did resets together. We transformed together.'), icon: '��‍👩‍👧‍👦' },
        { title: t('journey.timeline.2023.event3.title', 'The Annual Convergence'), description: t('journey.timeline.2023.event3.desc', '3,000+ people across the planet resetting their systems in unison. The buddy system. Before and after photos.'), icon: '🌍' }
      ]
    },
    2024: {
      title: t('journey.timeline.2024.title', 'The Social Experiment'),
      events: [
        { title: t('journey.timeline.2024.event1.title', 'It Started With a Smile'), description: t('journey.timeline.2024.event1.desc', 'Wherever you were in the world, smile. Capture the reactions. This simple experiment changed lives.'), icon: '😊' },
        { title: t('journey.timeline.2024.event2.title', 'Frequency Resonance'), description: t('journey.timeline.2024.event2.desc', 'Because of the frequency we created, it resonated with over 100,000 people joining our family.'), icon: '📡' },
        { title: t('journey.timeline.2024.event3.title', 'The Censorship'), description: t('journey.timeline.2024.event3.desc', 'Many videos were flagged as "dangerous." We realized we were affecting complete financial ecosystems.'), icon: '⚠️' }
      ]
    },
    2025: {
      title: t('journey.timeline.2025.title', 'Building the Future'),
      events: [
        { title: t('journey.timeline.2025.event1.title', 'The Website Launch'), description: t('journey.timeline.2025.event1.desc', 'Everything we learned, everything we discovered—now available to the world.'), icon: '💻' },
        { title: t('journey.timeline.2025.event2.title', 'The Artisan Network'), description: t('journey.timeline.2025.event2.desc', 'Julian, Kurt, Brittany, Anthony, King Khaled, Reggie, Simeon—each one a master of their craft.'), icon: '🎨' },
        { title: t('journey.timeline.2025.event3.title', 'The Vision Expands'), description: t('journey.timeline.2025.event3.desc', 'Curaçao. Kenya. Global hubs. The J2E model expanding worldwide.'), icon: '🌐' }
      ]
    }
  };

  const scienceCitations = [
    { title: "Autophagy and stem cells: self-eating for self-renewal", authors: "Guan JL, Simon AK, Prescott M", journal: "Cell Stem Cell", year: 2020, link: "https://doi.org/10.1016/j.stem.2020.03.009", summary: "Autophagy is essential for maintaining stem cell function and regeneration." },
    { title: "Fasting activates stem cell regeneration", authors: "Mihaylova MM, Cheng CW, et al.", journal: "Cell Stem Cell", year: 2019, link: "https://doi.org/10.1016/j.stem.2018.11.004", summary: "Prolonged fasting activates stem cell regeneration and reverses immunosuppression." },
    { title: "Growth hormone and stem cell regulation", authors: "Stout MB, Justice JN, et al.", journal: "Nature Reviews Endocrinology", year: 2019, link: "https://doi.org/10.1038/s41574-019-0162-8", summary: "Growth hormone plays a critical role in stem cell maintenance and tissue regeneration." },
    { title: "The food industry's role in addiction", authors: "Gearhardt AN, Brownell KD", journal: "Current Drug Abuse Reviews", year: 2011, link: "https://doi.org/10.2174/1874473711104010146", summary: "Hyper-palatable foods trigger addictive-like eating behaviors." }
  ];

  const godspaceMoment = {
    title: t('journey.godspace.title', 'GODSPACE'),
    description: t('journey.godspace.desc', 'There is a space beyond euphoria, beyond bliss. I call it GODSPACE. No hyphen. No separation. It arrives when the body is completely cleared, when every channel is open, when frequency flows without obstruction.'),
    scripture: t('journey.godspace.scripture', 'The kingdom of God is within you. — Luke 17:21')
  };

  return (
    <PageLayout pageTitle={t('journey.pageTitle', '🌴 THE JOURNEY - MY STORY')}>
      
      {/* Breadcrumb Navigation */}
      <VIBreadcrumbs 
        currentPage={t('journey.title', 'The Journey')} 
        currentPageKey="journey.title" 
      />

      {/* Hero Section with Golden Sunlight */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FF8C00 75%, #FFD700 100%)',
        backgroundSize: '200% 200%',
        animation: 'sunlight 8s ease infinite',
        padding: '80px 40px',
        margin: '0 20px 40px',
        borderRadius: '20px',
        border: '3px solid #FFD700',
        overflow: 'hidden',
        boxShadow: '0 0 40px rgba(255,215,0,0.3)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/VibrationalIntelligenceBanner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            color: '#fff',
            textShadow: '0 0 20px rgba(0,0,0,0.5)',
            marginBottom: '20px'
          }}>
            {t('journey.hero.title', '🌴 The Journey')}
          </h1>
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: '#fff',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.6',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            {t('journey.hero.subtitle', 'From Reset to Regeneration — A Global Transformation')}
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto 60px', padding: '0 20px' }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>
          {t('journey.timeline.title', 'The Timeline of Transformation')}
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '40px' }}>
          {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map(year => (
            <button key={year} onClick={() => setActiveYear(year)} style={{
              padding: '12px 24px',
              background: activeYear === year ? '#FFD700' : 'rgba(255,215,0,0.15)',
              border: '2px solid #FFD700',
              color: activeYear === year ? '#000' : '#FFD700',
              borderRadius: '40px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>{year}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {timelineData[activeYear]?.events.map((event, idx) => (
            <div key={idx} style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,215,0,0.02))',
              borderRadius: '20px',
              padding: '25px',
              border: '2px solid rgba(255,215,0,0.3)',
              transition: 'all 0.3s',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#FFD700';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(255,215,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{event.icon}</div>
              <h3 style={{ color: '#FFD700', fontSize: '1.3rem', marginBottom: '10px' }}>{event.title}</h3>
              <p style={{ color: '#DDD6B8', lineHeight: '1.7', fontSize: '0.95rem' }}>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GODSPACE Section */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.02))',
        borderRadius: '20px',
        border: '3px solid #FFD700',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '20px',
          letterSpacing: '4px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #FFD700, #f59e0b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>{godspaceMoment.title}</div>
        <p style={{ color: '#DDD6B8', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '20px' }}>{godspaceMoment.description}</p>
        <p style={{ color: '#FFD700', fontStyle: 'italic', fontSize: '0.95rem' }}>{godspaceMoment.scripture}</p>
      </div>

      {/* The Reset Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(255,215,0,0.06), rgba(0,0,0,0.3))',
        borderRadius: '20px',
        border: '2px solid rgba(255,215,0,0.4)',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>
          {t('journey.reset.title', 'The Reset: How It Works')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px' }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🧬</div>
            <h3 style={{ color: '#FFD700' }}>{t('journey.reset.stem', 'Stem Cell Activation')}</h3>
            <p style={{ color: '#DDD6B8' }}>{t('journey.reset.stem.desc', 'During reset, autophagy triggers massive stem cell production. This is the rebirth—cells responsible for birth and regeneration of any damaged cells in your body.')}</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔄</div>
            <h3 style={{ color: '#FFD700' }}>{t('journey.reset.cellular', 'Cellular Regeneration')}</h3>
            <p style={{ color: '#DDD6B8' }}>{t('journey.reset.cellular.desc', 'Targeted damaged cells—those causing disease, pain, and illness—are corrected and perfected. Once corrected, the disease is no more.')}</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ color: '#FFD700' }}>{t('journey.reset.frequency', 'Frequency Flow')}</h3>
            <p style={{ color: '#DDD6B8' }}>{t('journey.reset.frequency.desc', 'When your system is cleared, energy and frequency flow freely. Ideas, imagination, creativity—they explode.')}</p>
          </div>
        </div>
      </div>

      {/* Science Citations Section with Return Links */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 60px',
        padding: '30px',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(0,0,0,0.2))',
        borderRadius: '20px',
        border: '2px solid rgba(99,102,241,0.4)',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '1.8rem', marginBottom: '20px', textAlign: 'center' }}>
          🔬 {t('journey.science.title', 'Scientific Validation')}
        </h2>
        <p style={{ color: '#DDD6B8', textAlign: 'center', marginBottom: '30px' }}>
          {t('journey.science.subtitle', 'Peer-reviewed research supporting the mechanisms behind the reset:')}
        </p>
        <div style={{ display: 'grid', gap: '20px' }}>
          {scienceCitations.map((citation, idx) => (
            <div key={idx} style={{
              padding: '15px',
              background: 'rgba(99,102,241,0.05)',
              borderRadius: '10px',
              borderLeft: '4px solid #6366f1'
            }}>
              <p style={{ color: '#FFF', fontWeight: 'bold', marginBottom: '5px' }}>{citation.title}</p>
              <p style={{ color: '#DDD6B8', fontSize: '0.85rem', marginBottom: '5px' }}>{citation.authors}</p>
              <p style={{ color: '#FFD700', fontSize: '0.8rem', marginBottom: '10px' }}>{citation.journal} • {citation.year}</p>
              <p style={{ color: '#DDD6B8', fontSize: '0.85rem', marginBottom: '10px' }}>{citation.summary}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap', gap: '10px' }}>
                <a href={citation.link} target="_blank" rel="noopener noreferrer" style={{ color: '#8b5cf6', fontSize: '0.8rem' }}>
                  {t('journey.science.view', 'View Original Study →')}
                </a>
                <Link to="/TheJourney" style={{ color: '#FFD700', fontSize: '0.75rem', textDecoration: 'none' }}>
                  ← {t('journey.science.return', 'Return to Journey')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Milestones */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 60px', padding: '0 20px' }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>
          {t('journey.milestones.title', 'Key Milestones')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,215,0,0.05)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '2rem', color: '#FFD700' }}>60</div>
            <div style={{ color: '#DDD6B8' }}>{t('journey.milestones.lbs', 'Pounds Lost (First 21 Days)')}</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,215,0,0.05)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '2rem', color: '#FFD700' }}>4</div>
            <div style={{ color: '#DDD6B8' }}>{t('journey.milestones.resets', 'Resets Completed in One Year')}</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,215,0,0.05)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '2rem', color: '#FFD700' }}>40</div>
            <div style={{ color: '#DDD6B8' }}>{t('journey.milestones.days', 'Days - The Life-Changing Reset')}</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,215,0,0.05)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '2rem', color: '#FFD700' }}>100K+</div>
            <div style={{ color: '#DDD6B8' }}>{t('journey.milestones.community', 'Community Members')}</div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 60px',
        padding: '0 20px'
      }}>
        <h2 style={{ color: '#FFD700', fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>
          {t('journey.gallery.title', 'Visual Journey')}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            borderRadius: '15px',
            overflow: 'hidden',
            border: '3px solid #FFD700',
            height: '220px'
          }}>
            <img src="/images/Diving-in-St-Thomas.jpg" alt="Diving in St. Thomas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{
            borderRadius: '15px',
            overflow: 'hidden',
            border: '3px solid #FFD700',
            height: '220px'
          }}>
            <img src="/images/Image 5-31-25 at 10.31 AM.jpg" alt="MAVJ Moment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{
            borderRadius: '15px',
            overflow: 'hidden',
            border: '3px solid #FFD700',
            height: '220px'
          }}>
            <img src="/images/Image 5-31-25 at 12.48 PM.jpg" alt="MAVJ Moment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{
            borderRadius: '15px',
            overflow: 'hidden',
            border: '3px solid #FFD700',
            height: '220px'
          }}>
            <img src="/images/Image 6-15-25 at 8.54 AM.jpg" alt="MAVJ Moment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Internal Navigation */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 40px',
        padding: '30px',
        background: 'rgba(255,215,0,0.05)',
        borderRadius: '20px',
        textAlign: 'center',
        border: '2px solid rgba(255,215,0,0.2)'
      }}>
        <h3 style={{ color: '#FFD700', marginBottom: '20px' }}>{t('journey.navigation.title', 'Explore More')}</h3>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/VibrationalIntelligence" style={{
            padding: '10px 20px',
            background: 'transparent',
            border: '2px solid #6366f1',
            color: '#6366f1',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '0.9rem'
          }}>🔮 {t('journey.navigation.vi', 'Vibrational Intelligence')}</Link>
          <Link to="/MAVJDetox" style={{
            padding: '10px 20px',
            background: 'transparent',
            border: '2px solid #10b981',
            color: '#10b981',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '0.9rem'
          }}>💧 {t('journey.navigation.reset', 'Reset Protocol')}</Link>
          <Link to="/AlignWithUs" style={{
            padding: '10px 20px',
            background: 'transparent',
            border: '2px solid #f59e0b',
            color: '#f59e0b',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '0.9rem'
          }}>🤝 {t('journey.navigation.align', 'Align With Us')}</Link>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 60px',
        padding: '40px',
        background: 'linear-gradient(135deg, #FFD700, #f59e0b)',
        borderRadius: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#000', fontSize: '2rem', marginBottom: '20px' }}>{t('journey.cta.title', 'Ready to Begin Your Reset?')}</h2>
        <p style={{ color: '#000', fontSize: '1.1rem', marginBottom: '30px' }}>{t('journey.cta.desc', 'Your journey starts here. Join the MAVJ family and discover what your body can do when you reset, recalibrate, and regenerate.')}</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/MAVJDetox" style={{
            padding: '15px 35px',
            background: '#000',
            color: '#FFD700',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold'
          }}>{t('journey.cta.start', 'Start Your Reset →')}</Link>
          <Link to="/AlignWithUs" style={{
            padding: '15px 35px',
            background: 'transparent',
            border: '2px solid #000',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold'
          }}>{t('journey.cta.join', 'Join the Community →')}</Link>
        </div>
      </div>

      {/* Back to Top Button */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            padding: '12px 30px',
            background: 'transparent',
            border: '2px solid #FFD700',
            color: '#FFD700',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#FFD700';
            e.target.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#FFD700';
          }}
        >
          ↑ {t('journey.backToTop', 'Back to Top')}
        </button>
      </div>

    </PageLayout>
  );
};

export default TheJourney;

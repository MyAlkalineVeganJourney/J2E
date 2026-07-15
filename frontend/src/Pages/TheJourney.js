import React, { useState, useContext } from "react";
import { TranslationContext } from "../components/PageLayout.jsx";
import { Link } from "react-router-dom";
import VIBreadcrumbs from "../components/VIBreadcrumbs.jsx";
import PageLayout from "../components/PageLayout.jsx";

const TheJourney = () => {
  const { t } = useContext(TranslationContext);

  const timelineData = {
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
        { title: t('journey.timeline.2023.event2.title', 'The MAVJ Family Grows'), description: t('journey.timeline.2023.event2.desc', '100,000+ members on social media. We did resets together. We transformed together.'), icon: '👨‍👩‍👧‍👦' },
        { title: t('journey.timeline.2023.event3.title', 'The Annual Convergence'), description: t('journey.timeline.2023.event3.desc', '3,000+ people across the planet resetting their systems in unison. The buddy system. Before and after photos.'), icon: '🌍' }
      ]
    }
  };

  const [activeYear, setActiveYear] = useState("2020");

  const scienceCitations = [
    { title: t('journey.science.citation1.title', 'Autophagy and Fasting'), description: t('journey.science.citation1.desc', 'Fasting triggers autophagy — the body\'s cellular cleanup process. Damaged cells are recycled into new, healthy ones.'), source: 'Journal of Cell Biology' },
    { title: t('journey.science.citation2.title', 'Frequency and Water Memory'), description: t('journey.science.citation2.desc', 'Water responds to vibrational input. Positive words form coherent crystalline structures. Negative words form chaotic patterns.'), source: 'Masaru Emoto Studies' },
    { title: t('journey.science.citation3.title', 'Quantum Biology'), description: t('journey.science.citation3.desc', 'The human body operates on quantum principles. Our cells communicate through biophotons — light particles that carry frequency information.'), source: 'Fritz-Albert Popp Research' }
  ];

  const godspaceMoment = {
    title: t('journey.godspace.title', 'The Godspace Moment'),
    description: t('journey.godspace.desc', 'There comes a point in every reset where the body transcends hunger. The mind transcends doubt. You enter a space where everything is possible. I call this Godspace. It is the frequency of creation itself.'),
    quote: t('journey.godspace.quote', '"When the body stops eating, the spirit starts speaking."')
  };

  return (
    <PageLayout>
      <VIBreadcrumbs />
      
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFD700', marginBottom: '0.5rem' }}>
            {t('journey.hero.title', 'The Journey')}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', fontStyle: 'italic' }}>
            {t('journey.hero.subtitle', 'From a 46-day fast to a global movement.')}
          </p>
        </section>

        <section style={{ marginBottom: '3rem', lineHeight: '1.8' }}>
          <p>{t('journey.intro.p1', 'This is not a diet story. This is a frequency story. In 2020, during a global pause, I made a decision that would change everything. I stopped eating — not to lose weight, but to find myself. What followed was a journey through the deepest layers of human potential.')}</p>
          <p>{t('journey.intro.p2', 'What you\'re about to read is my personal testimony. The resets. The travels. The discoveries. The moments that proved to me that the human body is capable of far more than we\'ve been told. This is My Alkaline Vegan Journey.')}</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#FFD700', textAlign: 'center', marginBottom: '2rem' }}>
            {t('journey.timeline.heading', 'The Timeline')}
          </h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {Object.keys(timelineData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                style={{
                  padding: '0.5rem 1.5rem',
                  background: activeYear === year ? '#FFD700' : 'transparent',
                  color: activeYear === year ? '#000' : '#FFD700',
                  border: '1px solid #FFD700',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: activeYear === year ? 'bold' : 'normal',
                  transition: 'all 0.3s'
                }}
              >
                {year}
              </button>
            ))}
          </div>

          {timelineData[activeYear] && (
            <div style={{ background: 'rgba(255,215,0,0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,215,0,0.2)' }}>
              <h3 style={{ color: '#FFD700', marginBottom: '1.5rem' }}>{timelineData[activeYear].title}</h3>
              {timelineData[activeYear].events.map((event, idx) => (
                <div key={idx} style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '2px solid #FFD700' }}>
                  <h4 style={{ color: '#fff', marginBottom: '0.3rem' }}>
                    {event.icon} {event.title}
                  </h4>
                  <p style={{ color: '#ccc', lineHeight: '1.6' }}>{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section style={{ marginBottom: '3rem', background: 'rgba(255,215,0,0.08)', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ color: '#FFD700', marginBottom: '1rem' }}>{godspaceMoment.title}</h3>
          <p style={{ lineHeight: '1.8', color: '#ccc', marginBottom: '1rem' }}>{godspaceMoment.description}</p>
          <blockquote style={{ fontStyle: 'italic', color: '#FFD700', fontSize: '1.2rem', borderLeft: '3px solid #FFD700', paddingLeft: '1rem', margin: '0 auto', maxWidth: '600px' }}>
            {godspaceMoment.quote}
          </blockquote>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#FFD700', textAlign: 'center', marginBottom: '2rem' }}>
            {t('journey.science.heading', 'The Science Behind the Journey')}
          </h2>
          {scienceCitations.map((citation, idx) => (
            <div key={idx} style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
              <h4 style={{ color: '#FFD700', marginBottom: '0.3rem' }}>{citation.title}</h4>
              <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '0.3rem' }}>{citation.description}</p>
              <small style={{ color: '#888' }}>{t('journey.science.source', 'Source:')} {citation.source}</small>
            </div>
          ))}
        </section>

        <section style={{ textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))', borderRadius: '8px' }}>
          <h3 style={{ color: '#FFD700', marginBottom: '1rem' }}>
            {t('journey.cta.title', 'Begin Your Own Journey')}
          </h3>
          <p style={{ color: '#ccc', marginBottom: '2rem', lineHeight: '1.6' }}>
            {t('journey.cta.desc', 'The reset is personal. No one can do it for you. But you don\'t have to do it alone. Join the MAVJ family and start your transformation today.')}
          </p>
          <Link
            to="/book"
            style={{
              display: 'inline-block',
              padding: '0.8rem 2rem',
              background: '#FFD700',
              color: '#000',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            {t('journey.cta.button', 'Book Your Immersion')}
          </Link>
        </section>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'transparent',
              color: '#FFD700',
              border: '1px solid #FFD700',
              padding: '0.5rem 1.5rem',
              borderRadius: '4px',
              cursor: 'pointer',
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

      </div>
    </PageLayout>
  );
};

export default TheJourney;

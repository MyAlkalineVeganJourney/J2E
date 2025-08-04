// src/pages/Journey2Enlightenment.jsx
import React from 'react';
import '../styles/info.css';
import { useNavigate } from 'react-router-dom';

const Journey2Enlightenment = () => {
  const navigate = useNavigate();

  const sections = [
    { title: 'Accommodations', path: '/accommodations', desc: 'Pods, lodging, and pricing details' },
    { title: 'Excursions', path: '/excursions', desc: 'Island adventures & natural wonders' },
    { title: 'Agro Experience', path: '/j2e-agro', desc: 'Our farm and herbal education' },
    { title: 'Aquatic Missions', path: '/j2e-aqua', desc: 'Sea moss diving & coral regeneration' },
    { title: 'Workshops & Lectures', path: '/j2e-workshops', desc: 'Talks, healing circles, and training' },
    { title: 'Sacred Nourishment', path: '/j2e-food', desc: 'Farm-to-table dining & local catch' },
  ];

  return (
    <div className="info-page-container">
      <h1>🌴 Journey to Enlightenment (J2E)</h1>

      <section className="multicolor-border">
        <h2>🌟 Welcome to the Gathering</h2>
        <p>
          J2E is a frequency-driven lifestyle and our annual 11/11 retreat in St. Lucia. This page guides you
          through the experience—from sacred accommodations to the immersive aquatics, lectures, excursions,
          nourishment, and energy healing practices that define the Journey to Enlightenment.
        </p>
      </section>

      <section className="info-grid">
        {sections.map((sec, i) => (
          <div key={i} className="info-box multicolor-border" onClick={() => navigate(sec.path)}>
            <h3>{sec.title}</h3>
            <p>{sec.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Journey2Enlightenment;

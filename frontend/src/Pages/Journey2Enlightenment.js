import React from 'react';
import '../styles/info.css';
import { useNavigate } from 'react-router-dom';

const Journey2Enlightenment = () => {
  const navigate = useNavigate();

  const sections = [
    { 
      title: 'Quantum Protocol', 
      path: '/vibrational-intelligence/j2e-protocol', 
      desc: 'Fasting, frequency & consciousness expansion system',
      icon: '🌌',
      color: '#9C27B0'
    },
    { 
      title: 'St. Lucia Retreat', 
      path: '/journey-to-enlightenment-retreat', 
      desc: '11/11 annual gathering in St. Lucia - Accommodations & experiences',
      icon: '🏝️',
      color: '#4CAF50'
    },
    { 
      title: 'Accommodations', 
      path: '/journey-to-enlightenment-accommodations', 
      desc: 'Frequency-aligned pods & transformational living spaces',
      icon: '🏕️',
      color: '#2196F3'
    },
    { 
      title: 'Excursions', 
      path: '/excursions', 
      desc: 'Island adventures & natural quantum experiences',
      icon: '🚣',
      color: '#FF9800'
    },
    { 
      title: 'Agro Experience', 
      path: '/j2e-agro', 
      desc: 'Our farm and herbal frequency education',
      icon: '🌿',
      color: '#4CAF50'
    },
    { 
      title: 'Aquatic Missions', 
      path: '/j2e-aqua', 
      desc: 'Sea moss diving & coral quantum regeneration',
      icon: '🌊',
      color: '#2196F3'
    },
    { 
      title: 'Workshops & Lectures', 
      path: '/j2e-workshops', 
      desc: 'Quantum talks, healing circles, and frequency training',
      icon: '🧘',
      color: '#9C27B0'
    },
    { 
      title: 'Sacred Nourishment', 
      path: '/j2e-food', 
      desc: 'Farm-to-table dining & local quantum nutrition',
      icon: '🍃',
      color: '#FF9800'
    },
  ];

  return (
    <div className="info-page-container">
      {/* QUANTUM HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            🌴 Journey to Enlightenment
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          A dual-path quantum system: <strong className="text-yellow-400">Protocol</strong> for personal transformation × <strong className="text-green-400">Retreat</strong> for collective experience
        </p>
        
        {/* QUANTUM INTRO */}
        <div className="multicolor-border max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">🌟 Dual-Path Quantum System</h2>
          <p className="text-gray-300 mb-4">
            J2E operates on two quantum levels: the <strong>Protocol</strong> (personal frequency work) and the <strong>Retreat</strong> (collective experience). 
            Together they create a complete system for consciousness evolution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-400 mb-3">🌌 Quantum Protocol</h3>
              <p className="text-gray-300">
                Your personal 90-day journey through 4 frequency stages (285Hz → 852Hz). 
                Includes fasting, sound therapy, and consciousness expansion practices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-3">🏝️ St. Lucia Retreat</h3>
              <p className="text-gray-300">
                Annual 11/11 gathering where protocol becomes lived experience. 
                Includes accommodations, excursions, workshops, and community resonance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QUANTUM PATH SELECTION */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">
          Choose Your Quantum Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PROTOCOL PATH */}
          <div 
            className="info-box rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(0, 0, 0, 0.7))',
              border: '2px solid rgba(156, 39, 176, 0.3)'
            }}
            onClick={() => navigate('/vibrational-intelligence/j2e-protocol')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🌌</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-400">Quantum Protocol</h3>
                <p className="text-gray-400">Personal Transformation System</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              90-day journey through 4 frequency stages. Includes fasting guide, sound therapy library, 
              quantum metrics tracker, and community support.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['285Hz Reset', '528Hz Alignment', '741Hz Expansion', '852Hz Unity'].map((stage, i) => (
                <span key={i} className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                  {stage}
                </span>
              ))}
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl">
              Begin Quantum Journey →
            </button>
          </div>

          {/* RETREAT PATH */}
          <div 
            className="info-box rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(0, 0, 0, 0.7))',
              border: '2px solid rgba(76, 175, 80, 0.3)'
            }}
            onClick={() => navigate('/journey-to-enlightenment-accommodations')}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🏝️</div>
              <div>
                <h3 className="text-2xl font-bold text-green-400">St. Lucia Retreat</h3>
                <p className="text-gray-400">Collective Experience</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Annual 11/11 gathering in St. Lucia. Includes frequency-aligned accommodations, 
              oceanic missions, workshops, and community resonance experiences.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Resonance Pods', 'Ocean Excursions', 'Farm Workshops', 'Sea Moss Diving'].map((feature, i) => (
                <span key={i} className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">
                  {feature}
                </span>
              ))}
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-xl">
              Explore Retreat Experience →
            </button>
          </div>
        </div>
      </section>

      {/* ALL SECTIONS GRID */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">
          Complete J2E Ecosystem
        </h2>
        <div className="info-grid">
          {sections.map((sec, i) => (
            <div 
              key={i} 
              className="info-box rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => navigate(sec.path)}
              style={{
                background: `linear-gradient(135deg, ${sec.color}15, rgba(0,0,0,0.7))`,
                border: `2px solid ${sec.color}40`
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{sec.icon}</div>
                <h3 className="text-xl font-bold" style={{ color: sec.color }}>
                  {sec.title}
                </h3>
              </div>
              <p className="text-gray-300">{sec.desc}</p>
              <div className="mt-4 text-right">
                <span className="text-sm text-gray-400 hover:text-white transition-colors">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUANTUM CONNECTION */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <div className="multicolor-border p-8 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
            🌐 Quantum Connection Point
          </h2>
          <p className="text-gray-300 mb-6">
            The Protocol prepares your frequency field. The Retreat provides the quantum container 
            for collective resonance. Together, they create a complete system for ascension.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/vibrational-intelligence/j2e-protocol')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-all"
            >
              Start Quantum Protocol
            </button>
            <button 
              onClick={() => navigate('/journey-to-enlightenment-accommodations')}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-full hover:scale-105 transition-all"
            >
              Book Retreat Experience
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey2Enlightenment;
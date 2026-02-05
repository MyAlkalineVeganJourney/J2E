import React, { useState } from 'react';

const NavMenu = ({ currentLanguage, setShowLanguageDropdown, showLanguageDropdown, setCurrentLanguage, availableLanguages, setShowQChat }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: '🏠', label: 'MAVJHome', emoji: '🏠' },
    { path: '/TheJourney', icon: '🌱', label: 'The Journey', emoji: '🌱' },
    { path: '/MAVJStore', icon: '🛒', label: 'MAVJStore', emoji: '🛒' },
    { path: '/Journey2Enlightenment', icon: '✨', label: 'Journey 2 Enlightenment', emoji: '✨' },
    { path: '/VibrationalIntelligence', icon: '🔮', label: 'Vibrational Intelligence', emoji: '🔮' },
    { path: '/AlignWithUs', icon: '🤝', label: 'Align With Us', emoji: '🤝' },
    { path: '/MAVJSearch', icon: '🔍', label: 'MAVJSearch', emoji: '🔍' },
    { path: '/LiveBroadcast', icon: '📡', label: 'Live Broadcast', emoji: '📡' },
    { path: '/PodcastVlog', icon: '🎙️', label: 'PodCast/Vlog', emoji: '🎙️' },
    { path: '/ContactUs', icon: '☎️', label: 'Contact Us', emoji: '☎️' }
  ];

  const navLinkStyle = {
    color: '#FFD700',
    textDecoration: 'none',
    padding: '10px 15px',
    border: '2px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #00d4ff) 1',
    borderRadius: '6px',
    background: 'rgba(0, 0, 0, 0.8)',
    fontWeight: '700',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease'
  };

  return (
    <nav style={{
      position: 'fixed',
      top: '35px',
      left: 0,
      right: 0,
      zIndex: 1800,
      background: 'rgba(10, 10, 10, 0.98)',
      padding: '10px 20px',
      borderBottom: '4px solid',
      borderImage: 'linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red) 1',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '60px'
    }}>
      {/* MOBILE MENU TOGGLE */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          color: '#000',
          border: '2px solid #FFD700',
          padding: '8px 12px',
          borderRadius: '6px',
          fontWeight: '900',
          cursor: 'pointer',
          display: 'none'
        }}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* DESKTOP MENU */}
      <div style={{
        display: 'flex',
        gap: '10px',
        overflowX: 'auto',
        flex: 1,
        padding: '0 10px'
      }}>
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(255,215,0,0.3), rgba(0,212,255,0.3))';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 0 15px rgba(255,215,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(0, 0, 0, 0.8)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <span>{item.emoji}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      {/* CONTROLS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        {/* LANGUAGE */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              color: '#000',
              border: '2px solid #FFD700',
              padding: '8px 12px',
              borderRadius: '6px',
              fontWeight: '900',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            🌐 {currentLanguage.substring(0, 3)}
          </button>
          
          {showLanguageDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              background: 'rgba(0,0,0,0.98)',
              border: '2px solid #FFD700',
              borderRadius: '6px',
              minWidth: '180px',
              maxHeight: '400px',
              overflowY: 'auto',
              zIndex: 2000,
              boxShadow: '0 0 20px rgba(255,215,0,0.5)'
            }}>
              {availableLanguages.map(lang => (
                <div
                  key={lang}
                  onClick={() => {
                    setCurrentLanguage(lang);
                    setShowLanguageDropdown(false);
                  }}
                  style={{
                    padding: '10px 15px',
                    color: '#FFD700',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(255,215,0,0.2)',
                    background: lang === currentLanguage ? 'rgba(255,215,0,0.2)' : 'transparent',
                    fontWeight: lang === currentLanguage ? '900' : '700'
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Q BUTTON */}
        <button
          onClick={() => setShowQChat(true)}
          style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            border: '2px solid #FFD700',
            color: 'white',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '900',
            fontSize: '1.2rem',
            boxShadow: '0 0 15px rgba(102, 126, 234, 0.8)'
          }}
          title="Chat with Q"
        >
          Q
        </button>
      </div>
    </nav>
  );
};

export default NavMenu;

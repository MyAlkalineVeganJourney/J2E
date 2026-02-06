import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [liveUsers] = useState(127);

  const availableLanguages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Chinese', 'Taiwanese', 'Amharic', 'Arabic', 'Swahili', 'Patois', 'BAramaic', 'NAramaic', 'SAramaic', 'Hebrew', 'Greek', 'Latin', 'Sanskrit'];

  const navItems = useMemo(() => [
    { path: '/', icon: '🏠', label: t('nav.home') },
    { path: '/TheJourney', icon: '🌱', label: t('nav.journey') },
    { path: '/MAVJStore', icon: '🛒', label: t('nav.store') },
    { path: '/Journey2Enlightenment', icon: '✨', label: 'Journey 2 Enlightenment' },
    { path: '/VibrationalIntelligence', icon: '🔮', label: t('nav.vibrational') },
    { path: '/AlignWithUs', icon: '🤝', label: t('nav.align') },
    { path: '/Search', icon: '🔍', label: t('nav.search') },
    { path: '/LiveBroadcast', icon: '📡', label: t('nav.broadcast') },
    { path: '/PodcastVlog', icon: '🎙️', label: t('nav.podcast') },
    { path: '/ContactUs', icon: '☎️', label: t('nav.contact') }
  ], [t]);

  const handleLanguageChange = useCallback((lang) => { i18n.changeLanguage(lang); setShowLanguageDropdown(false); }, [i18n]);
  const handleNavigation = useCallback((path) => { navigate(path); }, [navigate]);

  return (
    <>
      {/* 1. TOP NAVIGATION - Cleared of any overlap */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999, borderTop: "5px solid #FFD700", background: 'linear-gradient(135deg, rgba(26,26,26,0.98), rgba(10,10,10,0.98))', padding: '5px 10px', borderBottom: '3px solid', borderImage: 'linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red) 1', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '4px', flex: 1, padding: '0 8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {navItems.map((item) => (
            <div key={item.path} style={{ color: '#FFD700', fontSize: '0.7rem', padding: '4px 8px', border: '2px solid', borderImage: 'linear-gradient(135deg, #FFD700, #00d4ff) 1', borderRadius: '4px', background: location.pathname === item.path ? 'linear-gradient(135deg, rgba(255,215,0,0.3), rgba(0,212,255,0.3))' : 'rgba(0, 0, 0, 0.7)', fontWeight: '700', whiteSpace: 'nowrap', boxShadow: '0 0 6px rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0, minHeight: '28px', cursor: 'pointer' }} onClick={() => handleNavigation(item.path)}>
              <span>{item.icon}</span><span>{item.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, marginLeft: '8px' }}>
          <div style={{ background: 'rgba(0,0,0,0.9)', padding: '3px 6px', borderRadius: '10px', border: '1px solid #FFD700', color: '#FFD700', fontSize: '0.65rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '3px', whiteSpace: 'nowrap' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00ff00', flexShrink: 0 }}></div>🔥 {liveUsers}
          </div>
          <div style={{ position: 'relative' }}>
            <button style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000000', border: '2px solid', borderImage: 'linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00) 1', padding: '3px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: '800', cursor: 'pointer', minWidth: '70px' }} onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
              🌐 {i18n?.language.substring(0, 3).toUpperCase()} {showLanguageDropdown ? '▲' : '▼'}
            </button>
            {showLanguageDropdown && (
              <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '4px', background: 'rgba(10, 10, 20, 0.98)', border: '2px solid', borderImage: 'linear-gradient(135deg, #FFD700, #00d4ff, #FF00FF, #FFD700) 1', borderRadius: '6px', minWidth: '140px', maxHeight: '280px', overflowY: 'auto', zIndex: 10000 }}>
                {availableLanguages.map((lang) => (
                  <button key={lang} style={{ width: '100%', background: 'transparent', color: '#FFD700', border: 'none', padding: '6px 10px', textAlign: 'left', cursor: 'pointer', fontSize: '0.75rem' }} onClick={() => handleLanguageChange(lang)}>{lang}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 2. TITLE SECTION - Grounded under the Nav */}
      <section style={{ position: "fixed", top: "45px", left: 0, right: 0, zIndex: 1700, padding: '12px 15px', backgroundColor: 'rgba(0, 0, 0, 0.95)', borderBottom: '3px solid', borderImage: 'linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red) 1', height: '90px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '1.4rem', color: '#FFD700', textAlign: 'center', margin: 0, fontWeight: '900' }}>{t('title.main').toUpperCase()}</h1>
      </section>

      {/* 3. MAIN CONTENT - With Footer Disclaimer */}
      <div style={{ paddingTop: "135px", minHeight: '100vh', backgroundColor: '#000', color: '#ffffff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>{children}</div>
        
        <footer style={{ width: '100%', background: 'linear-gradient(90deg, rgba(255,0,0,0.1), rgba(255,165,0,0.1))', borderTop: '2px solid', borderImage: 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3) 1', padding: '20px', textAlign: 'center', fontSize: '0.7rem', color: '#ffccbc' }}>
          {t('disclaimer.short')}
        </footer>
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 1.8; transform: scale(1.05); } }`}</style>
    </>
  );
};

export default Layout;

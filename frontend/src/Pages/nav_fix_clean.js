// CLEAN NAVIGATION FIX - REPLACE THE ENTIRE NAVBAR JSX

{/* CONTAINER 1: NAVIGATION (ULTRA-THIN) */}
<nav style={styles.navbar}>
  <div style={styles.navScrollContainer}>
    {navItems.map((item) => (
      <a
        key={item.path}
        href={item.path}
        style={styles.navLink}
        onClick={(e) => {
          e.preventDefault();
          trackInteraction('nav_click', { path: item.path });
          window.location.href = item.path;
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(0,212,255,0.2))';
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 0 12px rgba(255,215,0,0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(0, 0, 0, 0.7)';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 0 6px rgba(255,215,0,0.3)';
        }}
      >
        <span>{item.icon}</span>
        <span>{item.label}</span>
      </a>
    ))}
  </div>

  <div style={styles.navControls}>
    {/* Language Selector */}
    <div style={{ position: 'relative' }}>
      <button 
        style={styles.langButton}
        onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        🌐 {currentLanguage.substring(0, 3)} {showLanguageDropdown ? '▲' : '▼'}
      </button>
      
      {showLanguageDropdown && (
        <div style={styles.langDropdown}>
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              style={{
                ...styles.langOption,
                ...(currentLanguage === lang ? { 
                  background: 'linear-gradient(90deg, rgba(255,215,0,0.3), rgba(0,212,255,0.3))',
                  fontWeight: '900' 
                } : {})
              }}
              onClick={() => handleLanguageChange(lang)}
              onMouseEnter={(e) => {
                if (currentLanguage !== lang) {
                  e.target.style.background = 'linear-gradient(90deg, rgba(255,215,0,0.2), rgba(0,212,255,0.2))';
                }
              }}
              onMouseLeave={(e) => {
                if (currentLanguage !== lang) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
</nav>

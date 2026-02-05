const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// backup
fs.writeFileSync("HomePage.js.bak-banner", code);

// ============================================================
// A) REPLACE STYLES
//    starts at: // CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES)
//    ends at:   // CONTAINER 3: QUANTUM JOURNEY
// ============================================================
const stylesStart = code.indexOf("// CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES)");
const stylesEnd = code.indexOf("// CONTAINER 3: QUANTUM JOURNEY");

if (stylesStart === -1) { console.log("ERROR: Could not find CONTAINER 2 styles"); process.exit(1); }
if (stylesEnd === -1) { console.log("ERROR: Could not find CONTAINER 3 styles"); process.exit(1); }

const newStyles =
`// CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES)
    titleSection: {
      position: 'fixed',
      top: '88px',
      left: 0,
      right: 0,
      zIndex: 1700,
      backgroundImage: 'url(/images/star-pattern.png)',
      backgroundSize: '100px',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.92)',
      backgroundBlendMode: 'overlay',
      borderBottom: '3px solid',
      borderImage: 'linear-gradient(90deg, violet, indigo, blue, green, yellow, orange, red) 1',
      padding: '12px 20px 10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backdropFilter: 'blur(6px)',
      boxShadow: '0 4px 18px rgba(0,0,0,0.6)'
    },

    companyName: {
      fontSize: 'clamp(1.3rem, 3.4vw, 1.8rem)',
      fontWeight: '900',
      color: '#FFD700',
      textAlign: 'center',
      margin: '0 0 8px',
      letterSpacing: '1.5px',
      textShadow: '0 0 14px rgba(255,215,0,0.9)',
      lineHeight: '1.2',
      whiteSpace: 'nowrap'
    },

    logoRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      width: '100%',
      maxWidth: '720px'
    },

    sideBoxWrapper: {
      background: 'linear-gradient(135deg, violet, indigo, blue, green, yellow, orange, red)',
      borderRadius: '8px',
      padding: '2px',
      display: 'inline-flex',
      alignItems: 'stretch',
      flexShrink: 0
    },

    sideBoxInner: {
      background: 'rgba(0, 0, 0, 0.88)',
      borderRadius: '6px',
      padding: '6px 14px',
      fontSize: '0.68rem',
      fontWeight: '700',
      color: '#FFD700',
      lineHeight: '1.5',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '2px'
    },

    logoCircle: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      border: '3px solid #FFD700',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 0 18px rgba(255,215,0,0.9)',
      animation: 'heartbeat 1.4s ease-in-out infinite',
      flexShrink: 0
    },

    logoImg: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '4px'
    },

    pageTitle: {
      fontSize: 'clamp(0.88rem, 2.2vw, 1.1rem)',
      fontWeight: '900',
      color: '#00d4ff',
      textAlign: 'center',
      margin: '8px 0 0',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      textShadow: '0 0 10px rgba(0,212,255,0.7)'
    },

    `;

code = code.slice(0, stylesStart) + newStyles + code.slice(stylesEnd);

// ============================================================
// B) REPLACE JSX
//    starts at: {/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}
//    ends at:   {/* ANNOUNCEMENTS (Conditional) */}
// ============================================================
const jsxStart = code.indexOf("{/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}");
const jsxEnd = code.indexOf("{/* ANNOUNCEMENTS (Conditional) */}");

if (jsxStart === -1) { console.log("ERROR: Could not find CONTAINER 2 JSX"); process.exit(1); }
if (jsxEnd === -1) { console.log("ERROR: Could not find ANNOUNCEMENTS JSX"); process.exit(1); }

const newJSX =
`{/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}
      <section style={styles.titleSection}>

        {/* ROW 1 - Company name big and visible */}
        <h1 style={styles.companyName}>
          💦 My Alkaline Vegan Journey 💦
        </h1>

        {/* ROW 2 - Left box | Logo | Right box */}
        <div style={styles.logoRow}>

          {/* LEFT BOX - rainbow border wrapper */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum || 'Quantum Based'}</div>
              <div>{translations[currentLanguage]?.title?.scientific || 'Scientifically Backed'}</div>
              <div>{translations[currentLanguage]?.title?.frequency || 'Frequency Focused'}</div>
            </div>
          </div>

          {/* LOGO - heartbeat pulse animation */}
          <div style={styles.logoCircle}>
            <img
              src="/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/star-pattern.png'; }}
            />
          </div>

          {/* RIGHT BOX - rainbow border wrapper */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum_physics || 'Where Quantum Physics'}</div>
              <div>{translations[currentLanguage]?.title?.ancient_wisdom || 'Meets Ancient Wisdom'}</div>
              <div>{translations[currentLanguage]?.title?.nutrition || 'And Nutrition'}</div>
            </div>
          </div>
        </div>

        {/* ROW 3 - Page title changes per page. Homepage = YOU ARE HOME */}
        <div style={styles.pageTitle}>
          {translations[currentLanguage]?.title?.home || 'YOU ARE HOME'}
        </div>

      </section>

      `;

code = code.slice(0, jsxStart) + newJSX + code.slice(jsxEnd);

// ============================================================
// C) ADD heartbeat keyframes after logoPulse
// ============================================================
const logoPulseMarker = "@keyframes logoPulse {";
const lpPos = code.indexOf(logoPulseMarker);

if (lpPos === -1) { console.log("ERROR: Could not find logoPulse keyframe"); process.exit(1); }

// find the closing } of logoPulse block - it is the second } after the marker
const firstBrace = code.indexOf("}", lpPos + logoPulseMarker.length);
const secondBrace = code.indexOf("}", firstBrace + 1);

// check if heartbeat already exists so we do not double-add
if (code.indexOf("@keyframes heartbeat") === -1) {
  const heartbeat =
`
        @keyframes heartbeat {
          0%,  100% { transform: scale(1);    box-shadow: 0 0 16px rgba(255,215,0,0.85); }
          14%       { transform: scale(1.13); box-shadow: 0 0 24px rgba(255,215,0,1);    }
          28%       { transform: scale(1);    box-shadow: 0 0 16px rgba(255,215,0,0.85); }
          42%       { transform: scale(1.09); box-shadow: 0 0 22px rgba(255,215,0,0.95); }
          70%       { transform: scale(1);    box-shadow: 0 0 16px rgba(255,215,0,0.85); }
        }`;

  code = code.slice(0, secondBrace + 1) + heartbeat + code.slice(secondBrace + 1);
  console.log("  heartbeat keyframe added");
} else {
  console.log("  heartbeat keyframe already exists, skipping");
}

// ============================================================
// D) Fix paddingTop
// ============================================================
code = code.replace(
  "paddingTop: '220px' // Space for fixed headers - REDUCED FROM 280px",
  "paddingTop: '238px' // disclaimer + navbar + banner"
);

// ============================================================
// WRITE
// ============================================================
fs.writeFileSync("HomePage.js", code);
console.log("✅  Container 2 banner updated successfully.");

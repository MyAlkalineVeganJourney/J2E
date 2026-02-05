#!/bin/bash
echo "=== BANNER RESTRUCTURING PLAN ==="
echo ""

# Create backup first
BACKUP="src/Pages/HomePage.js.backup.restructure.$(date +%Y%m%d_%H%M%S)"
cp src/Pages/HomePage.js "$BACKUP"
echo "✅ Backup created: $BACKUP"
echo ""

echo "=== CURRENT titleSection (lines 2464-2517): ==="
echo "Lines 2464-2520:"
sed -n '2464,2520p' src/Pages/HomePage.js
echo ""
echo "=== CURRENT STYLES for titleSection: ==="
grep -n -A5 -B2 "titleSection:" src/Pages/HomePage.js | head -15
echo ""
grep -n -A5 -B2 "logoRow:" src/Pages/HomePage.js
echo ""
grep -n -A5 -B2 "logoCircle:" src/Pages/HomePage.js
echo ""
echo "=== PROPOSED NEW STRUCTURE ==="
echo ""
cat << 'STRUCTURE'
<section style={styles.titleSection}>

  {/* ROW 1: LOGOS + SIDE BOXES + COMPANY NAME */}
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "10px",  // SPACING FROM TOP BORDER
    padding: "0 15px"
  }}>
    
    {/* LEFT LOGO */}
    <div style={styles.logoCircle}>
      <img src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg" alt="MAVJ Logo" style={styles.logoImg} />
    </div>
    
    {/* LEFT SIDE BOX */}
    <div style={styles.sideBoxWrapper}>
      <div style={styles.sideBoxInner}>
        <div>Quantum Based</div>
        <div>Scientifically Backed</div>
        <div>Frequency Focused</div>
      </div>
    </div>
    
    {/* CENTER COMPANY NAME */}
    <h1 style={{
      fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
      fontWeight: "900",
      color: "#FFD700",
      textAlign: "center",
      margin: "0 15px",  // SPACING FROM SIDE BOXES
      letterSpacing: "1.8px",
      textShadow: "0 0 18px rgba(255,215,0,0.95)",
      lineHeight: "1.1",
      flex: "1"
    }}>
      💦 MY ALKALINE VEGAN JOURNEY 💦
    </h1>
    
    {/* RIGHT SIDE BOX */}
    <div style={styles.sideBoxWrapper}>
      <div style={styles.sideBoxInner}>
        <div>Where Quantum Physics</div>
        <div>Meets Ancient Wisdom</div>
        <div>And Nutrition</div>
      </div>
    </div>
    
    {/* RIGHT LOGO */}
    <div style={styles.logoCircle}>
      <img src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg" alt="MAVJ Logo" style={styles.logoImg} />
    </div>
    
  </div>
  
  {/* ROW 2: SOVEREIGN HEALTH TAGLINE */}
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    margin: "12px 0 8px",
    padding: "8px 0",
    border: "2px solid transparent",
    borderImage: "linear-gradient(45deg, #FF0000, #FFD700, #00FF00, #0000FF) 1",
    borderRadius: "4px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  }}>
    <span style={{color: "#FF0000", fontWeight: "900", fontSize: "1.1rem", textShadow: "0 0 8px rgba(255,0,0,0.7)"}}>SOVEREIGN HEALTH</span>
    <span style={{color: "#FFD700", fontSize: "1.2rem", fontWeight: "900"}}>•</span>
    <span style={{color: "#00FF00", fontWeight: "900", fontSize: "1.1rem", textShadow: "0 0 8px rgba(0,255,0,0.7)"}}>VIBRATIONAL HEALING</span>
    <span style={{color: "#FFD700", fontSize: "1.2rem", fontWeight: "900"}}>•</span>
    <span style={{color: "#0000FF", fontWeight: "900", fontSize: "1.1rem", textShadow: "0 0 8px rgba(0,0,255,0.7)"}}>ANCESTRAL NUTRITION</span>
  </div>
  
  {/* ROW 3: PAGE TITLE */}
  <div style={styles.pageTitleContainer}>
    <div style={styles.pageTitleWrapper}>
      <div style={styles.pageTitleInner}>
        {translations[currentLanguage]?.title?.home || "YOU ARE HOME"}
      </div>
    </div>
  </div>
  
</section>
STRUCTURE

echo ""
echo "=== STYLES THAT NEED UPDATING ==="
echo "1. titleSection needs star pattern background"
echo "2. logoRow needs to be replaced with new structure"
echo "3. logoCircle may need size adjustment"
echo ""
echo "Press Enter to see the actual replacement script..."
read

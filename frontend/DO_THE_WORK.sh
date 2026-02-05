#!/bin/bash
echo "=== DOING THE WORK ==="
echo "1. Replace lines 2463-2510 with new banner"
echo "2. Add star pattern at line 1601"
echo ""

FILE="src/Pages/HomePage.js"

# Backup
cp "$FILE" "${FILE}.backup.work"

# Create new banner
NEW_BANNER='      {/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}
      <section style={styles.titleSection}>

        {/* ROW 1: LOGOS ON BOTH SIDES + COMPANY NAME */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",
          padding: "0 8px"
        }}>
          
          {/* LEFT LOGO */}
          <div style={styles.logoCircle}>
            <img
              src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src = "/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
            />
          </div>
          
          {/* LEFT SIDE BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum || "Quantum Based"}</div>
              <div>{translations[currentLanguage]?.title?.scientific || "Scientifically Backed"}</div>
              <div>{translations[currentLanguage]?.title?.frequency || "Frequency Focused"}</div>
            </div>
          </div>
          
          {/* CENTER COMPANY NAME */}
          <h1 style={styles.companyName}>
            💦 MY ALKALINE VEGAN JOURNEY 💦
          </h1>
          
          {/* RIGHT SIDE BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum_physics || "Where Quantum Physics"}</div>
              <div>{translations[currentLanguage]?.title?.ancient_wisdom || "Meets Ancient Wisdom"}</div>
              <div>{translations[currentLanguage]?.title?.nutrition || "And Nutrition"}</div>
            </div>
          </div>
          
          {/* RIGHT LOGO */}
          <div style={styles.logoCircle}>
            <img
              src="/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src = "/Users/robin/Desktop/J2E/images/MAVJLogo.jpg"; }}
            />
          </div>
          
        </div>
        
        {/* ROW 2: SOVEREIGN HEALTH */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "10px 0",
          padding: "6px 0",
          border: "2px solid transparent",
          borderImage: "linear-gradient(45deg, #FF0000, #FFD700, #00FF00, #0000FF) 1",
          borderRadius: "4px"
        }}>
          <span style={{color: "#FF0000", fontWeight: "900", fontSize: "1rem"}}>SOVEREIGN HEALTH</span>
          <span style={{color: "#FFD700", fontSize: "1.1rem", fontWeight: "900"}}>•</span>
          <span style={{color: "#00FF00", fontWeight: "900", fontSize: "1rem"}}>VIBRATIONAL HEALING</span>
          <span style={{color: "#FFD700", fontSize: "1.1rem", fontWeight: "900"}}>•</span>
          <span style={{color: "#0000FF", fontWeight: "900", fontSize: "1rem"}}>ANCESTRAL NUTRITION</span>
        </div>

        {/* ROW 3: PAGE TITLE */}
        <div style={styles.pageTitleContainer}>
          <div style={styles.pageTitleWrapper}>
            <div style={styles.pageTitleInner}>
              {translations[currentLanguage]?.title?.home || "YOU ARE HOME"}
            </div>
          </div>
        </div>

      </section>'

echo "Replacing banner..."
# Delete lines 2463-2510 and insert new banner
sed -i '' '2463,2510c\
'"$NEW_BANNER" "$FILE"

echo "Adding star pattern..."
# Add star pattern after borderImage in titleSection style
sed -i '' '1601,1620s/borderImage: .*/&\
      backgroundImage: "url(\/images\/star-pattern.png), linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))",\
      backgroundSize: "100px, cover",\
      backgroundPosition: "center",\
      backgroundBlendMode: "overlay",/' "$FILE"

echo "✅ DONE!"
echo "Check lines 2463-2515:"
sed -n '2463,2515p' "$FILE"
echo ""
echo "Check star pattern at line 1601:"
sed -n '1601,1615p' "$FILE"

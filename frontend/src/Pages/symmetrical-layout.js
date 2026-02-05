const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Find and replace the entire banner JSX with symmetrical layout
const bannerStart = code.indexOf("{/* CONTAINER 2: WEBSITE BANNER");
const bannerEnd = code.indexOf("</section>", bannerStart) + 10;

if (bannerStart === -1 || bannerEnd === -1) {
  console.log("ERROR: Could not find banner section");
  process.exit(1);
}

const newBanner = `{/* CONTAINER 2: WEBSITE BANNER (STICKY ON ALL PAGES) */}
      <section style={styles.titleSection}>

        {/* HORIZONTAL SYMMETRICAL LAYOUT */}
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0 10px"}}>
          
          {/* LEFT LOGO */}
          <div style={styles.logoCircle}>
            <img
              src="/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src = "/images/star-pattern.png"; }}
            />
          </div>

          {/* LEFT TEXT BOX */}
          <div style={styles.sideBoxWrapper}>
            <div style={styles.sideBoxInner}>
              <div>{translations[currentLanguage]?.title?.quantum || "Quantum Based"}</div>
              <div>{translations[currentLanguage]?.title?.scientific || "Scientifically Backed"}</div>
              <div>{translations[currentLanguage]?.title?.frequency || "Frequency Focused"}</div>
            </div>
          </div>

          {/* CENTER: COMPANY NAME */}
          <div style={{flex: "0 1 auto", textAlign: "center"}}>
            <h1 style={styles.companyName}>
              💦 MY ALKALINE VEGAN JOURNEY 💦
            </h1>
          </div>

          {/* RIGHT TEXT BOX */}
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
              src="/images/MAVJLogo.jpg"
              alt="MAVJ Logo"
              style={styles.logoImg}
              onError={(e) => { e.target.onerror = null; e.target.src = "/images/star-pattern.png"; }}
            />
          </div>
        </div>

        {/* PAGE TITLE AT BOTTOM */}
        <div style={styles.pageTitleContainer}>
          <div style={styles.pageTitleWrapper}>
            <div style={styles.pageTitleInner}>
              {translations[currentLanguage]?.title?.home || "YOU ARE HOME"}
            </div>
          </div>
        </div>

      </section>`;

code = code.slice(0, bannerStart) + newBanner + code.slice(bannerEnd);

fs.writeFileSync("HomePage.js", code);
console.log("✅ Symmetrical horizontal layout applied:");
console.log("   Logo Left | Text Box Left | Company Name | Text Box Right | Logo Right");

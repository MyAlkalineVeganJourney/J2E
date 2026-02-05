const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Find companyName style and replace with fancy font + better centering
const oldStyle = /companyName: \{[^}]+\}/;
const newStyle = `companyName: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontSize: "clamp(1.8rem, 4.2vw, 2.4rem)",
      fontWeight: "900",
      color: "#FFD700",
      textAlign: "center",
      margin: "12px 0 8px",
      letterSpacing: "2px",
      textShadow: "0 0 16px rgba(255,215,0,0.95), 0 0 30px rgba(255,215,0,0.6)",
      lineHeight: "1.2",
      whiteSpace: "nowrap",
      padding: "4px 0"
    }`;

code = code.replace(oldStyle, newStyle);
fs.writeFileSync("HomePage.js", code);
console.log("✅ STEP 3: Fancy Georgia font applied to company name + centered");

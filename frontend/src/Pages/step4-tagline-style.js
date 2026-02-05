const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Insert tagline style after companyName style
const insertion = `,

    tagline: {
      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
      fontWeight: "700",
      color: "#00d4ff",
      textAlign: "center",
      margin: "0 0 10px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      textShadow: "0 0 8px rgba(0,212,255,0.7)"
    }`;

// Find the closing } of companyName and insert after it
code = code.replace(
  /(companyName: \{[^}]+\})/,
  "$1" + insertion
);

fs.writeFileSync("HomePage.js", code);
console.log("✅ STEP 4: Tagline style added");

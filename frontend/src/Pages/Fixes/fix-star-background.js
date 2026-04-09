const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Find titleSection style and ensure star pattern is visible
code = code.replace(
  /titleSection: \{[^}]+backgroundImage: "url\(\/images\/star-pattern\.png\)"[^}]+\}/,
  `titleSection: {
      position: "fixed",
      top: "88px",
      left: 0,
      right: 0,
      zIndex: 1700,
      backgroundImage: "url(/images/star-pattern.png)",
      backgroundSize: "100px",
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      backgroundBlendMode: "overlay",
      borderBottom: "3px solid",
      borderImage: "linear-gradient(90deg, violet, indigo, blue, green, yellow, orange, red) 1",
      padding: "10px 15px 8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backdropFilter: "blur(8px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
      minHeight: "135px",
      maxHeight: "135px"
    }`
);

fs.writeFileSync("HomePage.js", code);
console.log("✅ BASH 3 COMPLETE: Star pattern background visible in title container");

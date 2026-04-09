const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Find sideBoxInner style and increase font size + padding
code = code.replace(
  /sideBoxInner: \{[^}]+\}/,
  `sideBoxInner: {
      background: "rgba(0, 0, 0, 0.88)",
      borderRadius: "6px",
      padding: "10px 18px",
      fontSize: "0.85rem",
      fontWeight: "700",
      color: "#FFD700",
      lineHeight: "1.5",
      textAlign: "center",
      whiteSpace: "nowrap",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "2px"
    }`
);

fs.writeFileSync("HomePage.js", code);
console.log("✅ BASH 2 COMPLETE: Side box text increased (font 0.85rem, padding expanded)");

const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Find sideBoxInner and make text bigger
code = code.replace(
  /sideBoxInner: \{[^}]+\}/,
  `sideBoxInner: {
      background: "rgba(0, 0, 0, 0.88)",
      borderRadius: "6px",
      padding: "12px 20px",
      fontSize: "0.9rem",
      fontWeight: "800",
      color: "#FFD700",
      lineHeight: "1.6",
      textAlign: "center",
      whiteSpace: "nowrap",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "4px"
    }`
);

fs.writeFileSync("HomePage.js", code);
console.log("✅ STEP 5: Side box text enlarged (0.9rem, more padding)");

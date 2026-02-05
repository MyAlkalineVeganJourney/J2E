const fs = require("fs");
let code = fs.readFileSync("HomePage.js", "utf8");

// Position page title at the very bottom
code = code.replace(
  /pageTitleContainer: \{[^}]+\}/,
  `pageTitleContainer: {
      marginTop: "auto",
      marginBottom: "0",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      maxWidth: "450px"
    }`
);

fs.writeFileSync("HomePage.js", code);
console.log("✅ STEP 6: Page title positioned at bottom border");

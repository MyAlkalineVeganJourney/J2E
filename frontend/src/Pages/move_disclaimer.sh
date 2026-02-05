#!/bin/bash
sed -i '/DISCLAIMER BAR/,/<\/div>/{//!d}' HomePage.js
sed -i '/DISCLAIMER BAR/d' HomePage.js
sed -i '/CONTAINER 12: UNIVERSAL FOOTER/a\
      {/* DISCLAIMER AT BOTTOM */}\
      <div style={{\
        background: "linear-gradient(90deg, rgba(255,0,0,0.2), rgba(255,165,0,0.2))",\
        borderTop: "2px solid",\
        borderImage: "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3) 1",\
        padding: "12px 20px",\
        textAlign: "center",\
        fontSize: "0.75rem",\
        color: "#ffccbc",\
        fontWeight: "600",\
        backdropFilter: "blur(8px)",\
        marginTop: "20px"\
      }}>\
        {translations[currentLanguage]?.disclaimer || "EDUCATIONAL PURPOSES ONLY • CONSULT HEALTHCARE PROFESSIONAL"}\
      </div>' HomePage.js

import React, { useState } from 'react';

// Simple translation system
const translations = {
  en: {
    welcome: "Welcome to My Alkaline Vegan Journey",
    nav: {
      home: "MAVJHome",
      journey: "TheJourney",
      align: "AlignWithUs"
    }
  },
  es: {
    welcome: "Bienvenido a Mi Viaje Vegano Alcalino",
    nav: {
      home: "Inicio",
      journey: "Viaje",
      align: "Únete"
    }
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  
  return (
    <div>
      <h1>{translations[language].welcome}</h1>
      <nav>
        <a href="/">{translations[language].nav.home}</a>
        <a href="/journey">{translations[language].nav.journey}</a>
        <a href="/align">{translations[language].nav.align}</a>
      </nav>
      <div>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('es')}>Spanish</button>
      </div>
      <p>Current language: {language}</p>
    </div>
  );
}

export default App;

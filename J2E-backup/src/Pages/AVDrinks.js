// src/Pages/AVDrinks.js

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import '../styles/info.css';

const AVDrinks = () => {
  const drinkProducts = products.filter(
    (product) =>
      product.name.includes("Sea Moss Bomb") || product.name.includes("Gut Cleanse")
  );

  return (
    <div className="page-container">
      <Navbar />

      <header className="header">
        <h1>💧 Alkaline Vegan Drinks</h1>
        <p>Fermented. Fizzy. Functional. Healing in Every Sip.</p>
      </header>

      <section className="content-grid">
        <div className="content-box">
          <h2>Sea Moss Bomb</h2>
          <p>
            A naturally carbonated, living beverage built on a ginger bug base
            (ginger, agave, volcanic spring water). Flavored with *sorrel*, *moringa*,
            or tropical fruit + island herbs. Probiotic, prebiotic, and deeply
            hydrating.
          </p>
        </div>

        <div className="content-box">
          <h2>Gut Cleanse</h2>
          <p>
            Ginger bug only (fermented ginger, spring water, and agave). Pure.
            Digestive healing. High-frequency detoxification. No sugar—fermented away.
          </p>
        </div>

        <div className="content-box">
          <h2>Biochemical Benefits</h2>
          <p>
            Gingerol, magnesium, iodine, and active cultures promote
            gut-brain health, immune modulation, and cellular detoxification.
          </p>
        </div>

        <div className="content-box">
          <h2>Spiritual Energy</h2>
          <p>
            These drinks resonate with **cosmic cleansing frequencies**. They are
            fermented with intention and imbued with elemental alignment.
          </p>
        </div>
      </section>

      <section className="products-section">
        <h2>🌿 Products</h2>
        <div className="product-grid">
          {drinkProducts.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>${product.price.toFixed(2)}</strong></p>
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery">
        <h2>📸 Fermentation in Action</h2>
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/J2E/main/Images/GoldSMG.png"
          alt="Gold Sea Moss"
        />
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/J2E/main/Images/BeachDinner.png"
          alt="Beach Dinner"
        />
      </section>

      <Footer />
    </div>
  );
};

export default AVDrinks;

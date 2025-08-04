// src/pages/MAVJStore.jsx
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import '../MAVJStore.css'; // You can define styles for buttons, etc.

const categories = ['All', 'Sea Moss', 'Seeds', 'Oils', 'Snacks', 'Herbs', 'Kits', 'Beverages', 'HumanFrequencyTransformation'];

const MAVJStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const bannerImage =
    selectedCategory === 'Seeds'
      ? '/images/SeedsBanner.jpg'
      : selectedCategory === 'Sea Moss'
      ? '/images/spectrum-sea-moss-gel-32oz.jpg'
      : selectedCategory === 'Oils'
      ? '/images/CastorOil.jpg'
      : null;

  return (
    <PageLayout title="💦 MAVJ Store 💦">
      <section className="multicolor-border store-container">
        <h1 className="text-gold">🛍️ Our Holistic Products</h1>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* BANNER IMAGE */}
        {bannerImage && (
          <img
            src={bannerImage}
            alt={`${selectedCategory} Banner`}
            className="store-banner"
          />
        )}

        {/* PRODUCT GRID */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default MAVJStore;

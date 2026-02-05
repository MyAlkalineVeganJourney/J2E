// src/Pages/MAVJStore.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import products from '../data/products';
import '../MAVJStore.css';

const categories = [
  'All', 
  'Sea Moss', 
  'Sea Moss Gel', 
  'Seeds', 
  'Oils', 
  'Snacks', 
  'Herbs', 
  'Kits', 
  'Beverages', 
  'HumanFrequencyTransformation'
];

const MAVJStore = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const bannerImages = {
    'Seeds': '/images/SeedsBanner.jpg',
    'Sea Moss': '/images/SeaMossBanner.jpg',
    'Oils': '/images/CastorOilBanner.jpg',
    'Herbs': '/images/Panadol.jpg',
    'All': '/images/RawSpectrumMoss.png'
  };

  return (
    <PageLayout title={t('store.title', '🌊 MAVJ Quantum Store 🌊')}>
      {/* HERO SECTION */}
      <section className="store-hero multicolor-border">
        <h1 className="store-title gradient-text">
          {t('store.title', '🌊 MAVJ Quantum Store 🌊')}
        </h1>
        <p className="store-subtitle">
          {t('store.subtitle', 'Volcanic-Charged • Frequency-Aligned • Ancestrally-Crafted')}
        </p>
      </section>

      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder={t('store.searchPlaceholder', '🔍 Search products by name or benefits...')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* CATEGORY FILTERS */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            <span>{t(`store.categories.${category.toLowerCase()}`, category)}</span>
          </button>
        ))}
      </div>

      {/* CATEGORY BANNER */}
      {bannerImages[selectedCategory] && (
        <div className="banner-container multicolor-border">
          <img
            src={bannerImages[selectedCategory]}
            alt={`${selectedCategory} Banner`}
            className="store-banner"
          />
        </div>
      )}

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id || product.name} className="product-card-wrapper">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="no-products">
            <p>{t('store.noProducts', 'No products found matching your criteria.')}</p>
            <p>{t('store.tryAgain', 'Try adjusting your search or category filter.')}</p>
          </div>
        )}
      </div>

      {/* Q ASSISTANT INTEGRATION */}
      <div className="q-assistant-prompt multicolor-border">
        <h3>💬 Need Help Choosing?</h3>
        <p>Ask Q, our AI assistant, about product recommendations, biochemistry, or usage protocols.</p>
        <Link to="/Q" className="btn-primary">
          🤖 Chat with Q
        </Link>
      </div>
    </PageLayout>
  );
};

export default MAVJStore;
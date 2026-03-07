import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <Layout pageTitle="🛍️ PRODUCT CATALOG">
      
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto 20px',
        padding: '0 20px',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        fontSize: '0.9rem',
        color: '#FFD700'
      }}>
        <Link to="/" style={{ color: '#FFD700', textDecoration: 'none' }}>🏠 Home</Link>
        <span>→</span>
        <Link to="/MAVJStore" style={{ color: '#FFD700', textDecoration: 'none' }}>Store</Link>
        <span>→</span>
        <span style={{ color: '#FFF', fontWeight: 'bold' }}>Catalog</span>
      </div>

      <div style={{
        maxWidth: '1600px',
        margin: '0 auto 40px',
        padding: '0 20px',
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <div>
          <label style={{ color: '#FFD700', marginRight: '10px', fontWeight: 'bold' }}>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '10px 15px',
              background: 'rgba(0,0,0,0.6)',
              color: '#FFD700',
              border: '2px solid #FFD700',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ color: '#FFD700', marginRight: '10px', fontWeight: 'bold' }}>Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: '10px 15px',
              background: 'rgba(0,0,0,0.6)',
              color: '#FFD700',
              border: '2px solid #FFD700',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
          </select>
        </div>

        <div style={{ marginLeft: 'auto', color: '#DDD6B8', fontSize: '1.1rem' }}>
          Showing {sortedProducts.length} products
        </div>
      </div>

      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 20px 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {sortedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductCatalog;
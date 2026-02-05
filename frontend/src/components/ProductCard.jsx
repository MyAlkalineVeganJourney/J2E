// src/components/ProductCard.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useContext(CartContext);

  // Create URL-friendly ID if not exists
  const productId = product.id || product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE CONTAINER WITH HOVER OVERLAY */}
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        
        {isHovered && product.hoverInfo && (
          <div className="hover-overlay">
            <h4>⚡ {t('product.quantumBenefits', 'Quantum Benefits')}</h4>
            <ul>
              {(product.hoverInfo.quickBenefits || []).map((benefit, i) => (
                <li key={i}>✓ {benefit}</li>
              ))}
            </ul>
            <Link 
              to={`/product/${productId}`}
              className="view-more-btn"
            >
              🔬 {t('product.fullDetails', 'Full Molecular Profile')}
            </Link>
          </div>
        )}
      </div>
      
      {/* PRODUCT INFO */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        
        {/* ACTIONS */}
        <div className="product-actions">
          <Link 
            to={`/product/${productId}`}
            className="btn btn-details"
          >
            🔬 {t('product.details', 'Details')}
          </Link>
          
          {product.url ? (
            <a 
              href={product.url} 
              className="btn btn-buy"
              target="_blank" 
              rel="noopener noreferrer"
            >
              💳 {t('product.buyNow', 'Buy Now')}
            </a>
          ) : (
            <button 
              className="btn btn-cart"
              onClick={() => addToCart(product)}
            >
              🛒 {t('product.addCart', 'Add to Cart')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
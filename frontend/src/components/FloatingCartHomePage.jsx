import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './FloatingCart.css';

const FloatingCartHomePage = () => {
  const navigate = useNavigate();
  const { getCartCount, getCartTotal } = useContext(CartContext);
  const [isPulsing, setIsPulsing] = useState(false);
  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  useEffect(() => {
    if (cartCount > 0) {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <button 
      onClick={handleClick}
      className={`floating-cart-button ${isPulsing ? 'pulse' : ''}`}
      aria-label="Shopping Cart"
    >
      <div className="cart-icon-wrapper">
        <span className="cart-icon">🛒</span>
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </div>
      {cartCount > 0 && (
        <div className="cart-preview">
          <span className="cart-count">{cartCount} items</span>
          <span className="cart-total">${cartTotal.toFixed(2)}</span>
        </div>
      )}
    </button>
  );
};

export default FloatingCartHomePage;

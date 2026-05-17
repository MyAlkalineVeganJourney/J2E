// src/components/ShoppingCart.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import { CartContext } from '../context/CartContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  // Translation handled by PageLayout
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <PageLayout title={t('cart.title', '🛒 Shopping Cart')}>
        <div className="empty-cart multicolor-border">
          <h2>Your cart is empty</h2>
          <p>Add some quantum-charged products to get started!</p>
          <Link to="/MAVJStore" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </PageLayout>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15.00;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <PageLayout title={t('cart.title', '🛒 Shopping Cart')}>
      <div className="cart-container">
        {/* CART ITEMS */}
        <div className="cart-items-section multicolor-border">
          <h2>Your Items ({cartItems.length})</h2>
          
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  
                  {/* Quick Benefits */}
                  {item.hoverInfo?.quickBenefits && (
                    <div className="cart-item-benefits">
                      {item.hoverInfo.quickBenefits.slice(0, 2).map((benefit, i) => (
                        <span key={i} className="benefit-tag">✓ {benefit}</span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="cart-item-quantity">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>
                
                <div className="cart-item-price">
                  <p className="price-each">${item.price.toFixed(2)} each</p>
                  <p className="price-total">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                
                <button 
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove item"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="btn-clear" onClick={clearCart}>
              🗑️ Clear Cart
            </button>
            <Link to="/MAVJStore" className="btn-continue">
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="order-summary multicolor-border">
          <h2>Order Summary</h2>
          
          <div className="summary-line">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="summary-line">
            <span>Shipping:</span>
            <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
          </div>
          
          {shipping === 0 && (
            <p className="free-shipping-note">
              🎉 You qualify for free shipping!
            </p>
          )}
          
          {subtotal < 100 && (
            <p className="free-shipping-note">
              Add ${(100 - subtotal).toFixed(2)} more for free shipping
            </p>
          )}
          
          <div className="summary-line">
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="summary-line total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link to="/Checkout" className="btn-checkout">
            💳 Proceed to Checkout
          </Link>

          {/* SECURE CHECKOUT BADGES */}
          <div className="security-badges">
            <p>🔒 Secure Checkout</p>
            <p>💳 Powered by Stripe</p>
            <p>✓ SSL Encrypted</p>
          </div>

          {/* ACCEPTED PAYMENTS */}
          <div className="accepted-payments">
            <h4>We Accept:</h4>
            <div className="payment-icons">
              <span>💳 Visa</span>
              <span>💳 Mastercard</span>
              <span>💳 Amex</span>
              <span>💳 Discover</span>
            </div>
          </div>
        </div>
      </div>

      {/* YOU MIGHT ALSO LIKE */}
      <section className="recommended-products multicolor-border">
        <h2>✨ You Might Also Like</h2>
        <p>Complete your quantum transformation with these complementary products</p>
        {/* This would pull from related products - implement based on your logic */}
      </section>
    </PageLayout>
  );
};

export default ShoppingCart;
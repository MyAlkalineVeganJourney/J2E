// src/Pages/Checkout.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/PageLayout';
import PaymentForm from '../components/PaymentForm';
import { CartContext } from '../context/CartContext';
import '../styles/info.css';

// Load Stripe (replace with your actual publishable key)
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY || 'pk_test_YOUR_KEY_HERE');

const Checkout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useContext(CartContext);

  // If cart is empty, redirect to store
  if (cartItems.length === 0) {
    return (
      <PageLayout title="Checkout">
        <div className="empty-cart multicolor-border">
          <h2>Your cart is empty</h2>
          <p>Add items to your cart before checking out.</p>
          <Link to="/MAVJStore" className="btn-primary">
            Go to Store
          </Link>
        </div>
      </PageLayout>
    );
  }

  const handlePaymentSuccess = (paymentMethodId) => {
    console.log('Payment successful:', paymentMethodId);
    // You can add additional logic here, like sending order confirmation email
    // or redirecting to an order confirmation page
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <PageLayout title="🛒 Checkout">
      <div className="checkout-container">
        <div className="checkout-content">
          
          {/* LEFT SIDE - ORDER SUMMARY */}
          <div className="checkout-summary multicolor-border">
            <h2>📦 Order Summary</h2>
            
            <div className="checkout-items">
              {cartItems.map((item) => (
                <div key={item.id} className="checkout-item">
                  <img src={item.image} alt={item.name} />
                  <div className="checkout-item-details">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <p className="checkout-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="checkout-totals">
              <div className="total-line">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-line">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="total-line">
                <span>Tax (8%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total-line grand-total">
                <span><strong>Total:</strong></span>
                <span><strong>${total.toFixed(2)}</strong></span>
              </div>
            </div>

            {/* FREQUENCY ALIGNMENT MESSAGE */}
            <div className="frequency-message">
              <p>🌊 Your order has been quantum-aligned for maximum bioavailability</p>
              <p>⚡ Each product is charged with ancestral frequencies</p>
            </div>
          </div>

          {/* RIGHT SIDE - PAYMENT FORM */}
          <div className="checkout-payment multicolor-border">
            <Elements stripe={stripePromise}>
              <PaymentForm onSuccess={handlePaymentSuccess} />
            </Elements>
          </div>

        </div>

        {/* TRUST BADGES */}
        <div className="trust-section multicolor-border">
          <h3>🛡️ Why Shop With MAVJ?</h3>
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-icon">🔒</span>
              <h4>Secure Payments</h4>
              <p>SSL encrypted checkout powered by Stripe</p>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">🌱</span>
              <h4>Wildcrafted & Pure</h4>
              <p>Hand-harvested from St. Lucia's volcanic terrain</p>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">📦</span>
              <h4>Fast Shipping</h4>
              <p>Orders processed within 24-48 hours</p>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">♻️</span>
              <h4>Eco-Friendly</h4>
              <p>Sustainable harvesting + coral restoration</p>
            </div>
          </div>
        </div>

        {/* Q AI ASSISTANCE */}
        <div className="checkout-q-assistant multicolor-border">
          <h3>💬 Questions Before You Order?</h3>
          <p>Chat with Q, our AI assistant, about product usage, shipping, or anything else.</p>
          <Link to="/Q" className="btn-secondary">
            🤖 Ask Q
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Checkout;
// src/components/PaymentForm.js
import React, { useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../context/CartContext';
import './PaymentForm.css';

const PaymentForm = ({ onSuccess }) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Form data
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: '',
      country: 'US'
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setBillingDetails(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setBillingDetails(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const calculateTotal = () => {
    const subtotal = getCartTotal();
    const shipping = subtotal > 100 ? 0 : 15.00;
    const tax = subtotal * 0.08;
    return subtotal + shipping + tax;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails
    });

    if (paymentError) {
      setError(paymentError.message);
      setProcessing(false);
      return;
    }

    // In production, you would send paymentMethod.id to your backend
    // Your backend would create a payment intent and confirm it
    // For now, we'll simulate success

    try {
      // TODO: Replace with actual backend call
      // const response = await fetch('/api/create-payment-intent', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     paymentMethodId: paymentMethod.id,
      //     amount: Math.round(calculateTotal() * 100), // Convert to cents
      //     items: cartItems
      //   })
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Success!
      setSuccess(true);
      setProcessing(false);

      // Clear cart
      clearCart();

      // Call success callback if provided
      if (onSuccess) {
        onSuccess(paymentMethod.id);
      }

    } catch (err) {
      setError('Payment failed. Please try again.');
      setProcessing(false);
    }
  };

  if (success) {
    return (
      <div className="payment-success multicolor-border">
        <div className="success-icon">✅</div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your order. Your frequency-aligned products are on their way!</p>
        <div className="order-details">
          <p><strong>Order Total:</strong> ${calculateTotal().toFixed(2)}</p>
          <p><strong>Email:</strong> {billingDetails.email}</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
        <a href="/MAVJStore" className="btn-primary">
          Continue Shopping
        </a>
      </div>
    );
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#fff',
        backgroundColor: 'rgba(255, 215, 0, 0.05)',
        fontFamily: 'Autumn Flowers, Open Sans, sans-serif',
        '::placeholder': {
          color: 'rgba(255, 215, 0, 0.5)',
        },
        iconColor: '#FFD700',
      },
      invalid: {
        color: '#ff6b6b',
        iconColor: '#ff6b6b',
      },
    },
    hidePostalCode: true
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>💳 Payment Information</h2>

      {/* BILLING DETAILS */}
      <div className="form-section">
        <h3>Billing Details</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={billingDetails.name}
              onChange={handleInputChange}
              required
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={billingDetails.email}
              onChange={handleInputChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={billingDetails.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address.line1">Address Line 1 *</label>
          <input
            type="text"
            id="address.line1"
            name="address.line1"
            value={billingDetails.address.line1}
            onChange={handleInputChange}
            required
            placeholder="123 Main Street"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address.line2">Address Line 2</label>
          <input
            type="text"
            id="address.line2"
            name="address.line2"
            value={billingDetails.address.line2}
            onChange={handleInputChange}
            placeholder="Apt 4B"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address.city">City *</label>
            <input
              type="text"
              id="address.city"
              name="address.city"
              value={billingDetails.address.city}
              onChange={handleInputChange}
              required
              placeholder="New York"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address.state">State *</label>
            <input
              type="text"
              id="address.state"
              name="address.state"
              value={billingDetails.address.state}
              onChange={handleInputChange}
              required
              placeholder="NY"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address.postal_code">Zip Code *</label>
            <input
              type="text"
              id="address.postal_code"
              name="address.postal_code"
              value={billingDetails.address.postal_code}
              onChange={handleInputChange}
              required
              placeholder="10001"
            />
          </div>
        </div>
      </div>

      {/* CARD DETAILS */}
      <div className="form-section">
        <h3>Card Details</h3>
        <div className="card-element-wrapper">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      {/* ORDER SUMMARY */}
      <div className="form-section payment-summary">
        <h3>Order Summary</h3>
        <div className="summary-line">
          <span>Subtotal:</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Shipping:</span>
          <span>{getCartTotal() > 100 ? 'FREE' : '$15.00'}</span>
        </div>
        <div className="summary-line">
          <span>Tax (8%):</span>
          <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
        </div>
        <div className="summary-line total">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="payment-error">
          ⚠️ {error}
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <button 
        type="submit" 
        className="btn-submit-payment"
        disabled={!stripe || processing}
      >
        {processing ? (
          <>
            <span className="spinner"></span>
            Processing...
          </>
        ) : (
          `Pay $${calculateTotal().toFixed(2)}`
        )}
      </button>

      {/* SECURITY INFO */}
      <div className="payment-security">
        <p>🔒 Your payment information is secure and encrypted</p>
        <p>💳 Powered by Stripe - Industry-leading payment security</p>
        <p>✓ We never store your card details</p>
      </div>
    </form>
  );
};

export default PaymentForm;
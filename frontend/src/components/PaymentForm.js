// src/components/PaymentForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    setLoading(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setStatus(error.message);
      setLoading(false);
    } else {
      // Normally you'd send paymentMethod.id to your Django backend here
      console.log("✅ PaymentMethod created:", paymentMethod);
      setStatus("✅ Payment submitted! We'll process and follow up.");
      setLoading(false);
    }
  };

  return (
    <div className="payment-form">
      <h1 className="text-gold">💳 Complete Your Purchase</h1>
      <p className="brand-desc">Powered by MAVJ • Safe • Secure • Frequency-Aligned</p>

      <form onSubmit={handleSubmit} className="stripe-form">
        <div className="card-element-wrapper">
          <CardElement options={{
            style: {
              base: {
                fontSize: '18px',
                color: '#fff',
                backgroundColor: '#222',
                fontFamily: 'Autumn Flowers, Open Sans, sans-serif',
                '::placeholder': { color: '#bbb' },
              },
              invalid: { color: '#ff6b6b' },
            },
          }} />
        </div>

        <button type="submit" disabled={!stripe || loading} className="primary-button">
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default PaymentForm;

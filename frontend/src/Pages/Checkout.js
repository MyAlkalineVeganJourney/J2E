import React from 'react';
import PaymentForm from '../components/PaymentForm';
import '../styles/info.css';

const Checkout = () => {
  return (
    <div className="info-page-container">
      <h1>🛒 MAVJ Checkout</h1>

      <section className="multicolor-border">
        <h2>🧬 Frequency-Aligned Products</h2>
        <p>Each item is crafted to elevate your vibration, detoxify your temple, and align your wellness journey.</p>
      </section>

      {/* Embed your custom Stripe Elements form */}
      <section className="multicolor-border">
        <h2>💳 Complete Your Payment</h2>
        <PaymentForm />
      </section>
    </div>
  );
};

export default Checkout;

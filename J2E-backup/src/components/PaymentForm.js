import React from 'react';
import './PaymentForm.css'; // Ensure this file exists and styles this component

function PaymentForm() {
  return (
    <div className="payment-form">
      <h2>💳 Payment Options</h2>
      <p>Select a product to complete your purchase securely through Stripe:</p>

      {/* === SEA MOSS GELS === */}
      <h3>Wild Crafted Volcanic 🇱🇨 Sea Moss Gel – 16oz / 32oz</h3>

      <div className="product-payment">
        <h4>Gold Sea Moss Gel – 16oz</h4>
        <a href="https://buy.stripe.com/00weVc6Rd1qpbT73hn08g0g" target="_blank" rel="noopener noreferrer">
          <button>Buy Now – $85 + Shipping</button>
        </a>
      </div>

      <div className="product-payment">
        <h4>Gold Sea Moss Gel – 32oz</h4>
        <a href="https://buy.stripe.com/28E3cu5N94CB2ix9FL08g0h" target="_blank" rel="noopener noreferrer">
          <button>Buy Now – $150 + Shipping</button>
        </a>
      </div>

      <div className="product-payment">
        <h4>Violet Sea Moss Gel – 16oz</h4>
        <a href="https://buy.stripe.com/6oU6oGdfB2ute1fcRX08g0i" target="_blank" rel="noopener noreferrer">
          <button>Buy Now – $95 + Shipping</button>
        </a>
      </div>

      <div className="product-payment">
        <h4>Violet Sea Moss Gel – 32oz</h4>
        <a href="https://buy.stripe.com/fZuaEWejFd97cXbcRX08g0j" target="_blank" rel="noopener noreferrer">
          <button>Buy Now – $175 + Shipping</button>
        </a>
      </div>

      <div className="product-payment">
        <h4>Jade Sea Moss Gel – 16oz</h4>
        <a href="https://buy.stripe.com/7sY5kC1wT0mle1f05b08g0k" target="_blank" rel="noopener noreferrer">
          <button>Buy Now – $115 + Shipping</button>
        </a>
      </div>

      <div className="product-payment">
        <h4>Jade Sea Moss Gel – 32oz</h4>
        <a href="https://buy.stripe.com/5kQ8wOb7t7ON9KZ5pv08g0l" target="_blank" rel="noopener noreferrer">
          <button>Buy Now – $195 + Shipping</button>
        </a>
      </div>

      <div className="product-payment">
        <h4>Spectrum Sea Moss Gel – 16oz</h4>
        <a href="https://buy.stripe.com/28E9AS5N90mlg9naJP08g0m" target="_blank" rel="noopener noreferrer">
          <button>Buy Now – $135 + Shipping</button>
        </a>
      </div>

      <div className="product-payment">
        <h4>Spectrum Sea Moss Gel – 32oz</h4>
        <a href="https://buy.stripe.com/28E9AS5N94CB7CRbNT08g0n" target="_blank" rel="noopener noreferrer">
          <button>Buy Now – $225 + Shipping</button>
        </a>
      </div>
    </div>
  );
}

export default PaymentForm;

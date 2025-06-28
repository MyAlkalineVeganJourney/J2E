// src/pages/J2EAccommodations.jsx
import React, { useState } from 'react';
import '../styles/info.css';

const accommodations = [
  {
    name: 'Resonance Pod (4+ guests/*ppp)',
    price: 3000,
    stripe: 'https://book.stripe.com/cN2eX4gBJ7oPfQY000',
  },
  {
    name: 'Frequency Pod (2 guests/*ppp)',
    price: 3200,
    stripe: 'https://book.stripe.com/dR6eX4gBJ9wXeMU7su',
  },
  {
    name: 'Enlightenment Pod (1 person)',
    price: 3350,
    stripe: 'https://book.stripe.com/aEU8yG1GP4cD0W4aEH',
  },
  {
    name: 'Vibration Off-Campus Pod (2+ guests/*ppp)',
    price: 3500,
    stripe: 'https://book.stripe.com/00g6qyadlbF5cEMaEI',
  },
  {
    name: 'Deluxe Amplification Pod (4+ guests/*ppp)',
    price: 3800,
    stripe: 'https://book.stripe.com/9AQaGObhpbF50W4eUZ',
  },
];

const J2EAccommodations = () => {
  const [selected, setSelected] = useState(accommodations[0]);

  const handleChange = (e) => {
    const index = e.target.selectedIndex;
    setSelected(accommodations[index]);
  };

  const handleBookNow = () => {
    window.location.href = selected.stripe;
  };

  return (
    <div className="info-page-container">
      <h1>🌴 J2E Accommodations</h1>

      <section className="multicolor-border">
        <h2>💫 Choose Your Human Frequency Journey Package</h2>
        <p>
          Journey to Enlightenment is our signature 7-day transformation experience in St. Lucia. Each package includes food, excursions, aquatics, coral/sea moss dives, workshops, and more. Pricing depends on your chosen accommodation.
        </p>

        <label htmlFor="accommodation-type">Select Accommodation Type:</label>
        <select id="accommodation-type" onChange={handleChange}>
          {accommodations.map((option, i) => (
            <option key={i} value={option.price}>
              {option.name} - ${option.price}
            </option>
          ))}
        </select>

        <div className="price-display">
          <p><strong>Price:</strong> ${selected.price}</p>
        </div>

        <button className="book-now-button" onClick={handleBookNow}>Book Now via Stripe</button>

        <p><a href="/store">Continue Shopping</a></p>
      </section>
    </div>
  );
};

export default J2EAccommodations;

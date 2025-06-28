// src/pages/AlignWithUs.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import '../styles/info.css';

const AlignWithUs = () => {
  return (
    <PageLayout title="🎉 Align With Us 🎉">
      <div className="info-page-container">

        {/* Sponsorship Section */}
        <section className="multicolor-border">
          <h2>🤝 Become a Sponsor</h2>
          <p>
            Sponsoring MAVJ means aligning your energy and resources with a mission for global transformation.
            Support frequency healing, fasting retreats, ecological restoration, and human elevation.
          </p>
        </section>

        <section className="multicolor-border">
          <h2>💠 Tiers & Acknowledgements</h2>
          <p>
            Sponsors receive access to exclusive healing pods, ceremonial workshops, and media features.
            Tier levels include Individual, Business Ally, and Frequency Guardian.
          </p>
        </section>

        <section className="multicolor-border">
          <h2>📩 Request a Sponsorship Kit</h2>
          <p>
            Email <a href="mailto:MyAlkalineVeganJourney@gmail.com">MyAlkalineVeganJourney@gmail.com</a> to receive our full sponsorship kit and start making frequency waves globally.
          </p>
        </section>

        {/* Donation Section */}
        <section className="multicolor-border">
          <h2>🙏 Support Our Mission</h2>
          <p>
            Donations help us fund Human Frequency Transformations, sustainable farming, research labs, education, and herbal medicine.
            You're helping elevate global human frequency.
          </p>
        </section>

        <section className="multicolor-border">
          <h2>💳 How to Donate</h2>
          <p>
            Click below to contribute via our secure Stripe donation link:
          </p>
          <a
            href="https://buy.stripe.com/test_donation_link"
            target="_blank"
            rel="noreferrer"
            className="donate-link"
          >
            Make a Donation
          </a>
        </section>

        {/* Investment Section */}
        <section className="multicolor-border">
          <h2>📈 Invest in Human Frequency</h2>
          <p>
            Our global initiative seeks conscious investors to expand holistic retreats, sustainable
            agriculture, and frequency-based healing hubs. Help us build the future of wellness.
          </p>
        </section>

        <section className="multicolor-border">
          <h2>📩 Connect with Us</h2>
          <p>
            Schedule a consultation to discuss partnership levels, equity models, and social impact strategies.
          </p>
        </section>

      </div>
    </PageLayout>
  );
};

export default AlignWithUs;

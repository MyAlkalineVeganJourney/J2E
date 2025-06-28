/// src/pages/ContactUs.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';

const ContactUs = () => {
  return (
    <PageLayout title="☎️ Contact Us ☎️">
      <div className="multicolor-border info-page-container text-gold">
        <section className="multicolor-border">
          <h2>📞 Phone</h2>
          <p>(202) 630-7280</p>
        </section>

        <section className="multicolor-border">
          <h2>📧 Email</h2>
          <p>MyAlkalineVeganJourney@gmail.com</p>
        </section>

        <section className="multicolor-border">
          <h2>🌐 Website</h2>
          <a
            href="https://MyAlkalineVeganJourney.com"
            target="_blank"
            rel="noreferrer"
            className="text-gold underline"
          >
            MyAlkalineVeganJourney.com
          </a>
        </section>
      </div>
    </PageLayout>
  );
};

export default ContactUs;

// src/Pages/PodcastVlog.js

import React from 'react';
import PageLayout from '../components/PageLayout';
import InfoCard from '../components/InfoCard';

const PodcastVlog = () => {
  return (
    <PageLayout
      title="🎙️ MAVJ Podcast & Vlog"
      subtitle="Weekly Enlightened Conversations Rooted in Alkalinity & Global Healing"
      showHero={true}
    >
      <div className="multicolor-border">
        <InfoCard
          title="Welcome to the MAVJ Podcast & Vlog"
          content="Tune in weekly as we explore the science, spirit, and soul of an alkaline vegan lifestyle. From interviews with holistic health leaders to discussions on vibrational intelligence and herbal wisdom, this is your source for empowered living. Coming soon: audio episodes, video interviews, and written transcripts."
        />
      </div>

      <div className="multicolor-border text-center">
        <h2>🔥 What to Expect</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>✔️ Expert interviews on herbs & healing</li>
          <li>✔️ Vibrational Frequency Wellness</li>
          <li>✔️ Detox stories & testimonials</li>
          <li>✔️ Vlogs from Journey to Enlightenment</li>
          <li>✔️ Community Q&A Episodes</li>
        </ul>
      </div>

      <div className="multicolor-border text-center">
        <p>🎧 Streaming soon on Spotify, Apple Podcasts & YouTube.</p>
        <p>📅 New episodes drop every Sunday at 11:11 AM AST.</p>
      </div>
    </PageLayout>
  );
};

export default PodcastVlog;

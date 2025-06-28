// src/pages/LiveBroadcast.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';

const LiveBroadcast = () => {
  return (
    <PageLayout title="📺 Live Broadcast 📺">
      <section className="multicolor-border live-broadcast">
        <h2>💦 My Alkaline Vegan Journey - Live Broadcast 💦</h2>
        <p>Join us live from our YouTube stream below:</p>
        <div className="youtube-embed">
          <iframe
            src="https://www.youtube.com/embed/live_stream?channel=UClhi0Zl9IJhrP__TJPW_nHA"
            title="Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              height: '500px',
              border: '4px solid gold',
              borderRadius: '10px'
            }}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default LiveBroadcast;

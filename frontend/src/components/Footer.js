import React from 'react';
import './Footer.css'; // Optional, if you have separate styles for the footer

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; 2025 My Alkaline Vegan Journey. All rights reserved.</p>
      <div className="social-media-links">
        <a
          href="https://www.youtube.com/@myalkalineveganjourney7465"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://www.tiktok.com/@myalkalineveganjourney"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;

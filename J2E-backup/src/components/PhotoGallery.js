import React from 'react';
import './PhotoGallery.css'; // Optional: if you want custom styles

const PhotoGallery = () => {
  return (
    <section id="photo-gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery">
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/J2E/main/MAVJLogo.png"
          alt="J2E Logo"
        />
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/J2E/main/DBRoad.jpg"
          alt="Des Barres Road"
        />
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/J2E/main/BigTent.jpeg"
          alt="Big Tent"
        />
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/J2E/main/ResTents.jpeg"
          alt="Res Tents"
        />
        <img
          src="https://raw.githubusercontent.com/MyAlkalineVeganJourney/J2E/main/Diving%20in%20St.%20Thomas.jpg"
          alt="Dive"
        />
      </div>
    </section>
  );
};

export default PhotoGallery;

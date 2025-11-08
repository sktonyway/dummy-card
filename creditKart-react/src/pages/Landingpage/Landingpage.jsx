// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import "./LandingPage.css";
import backgroundVideo from "../../assets/vids/intro.mp4"; // ✅ import the video


function LandingPage() {
  return (
    <>
      <div className="video-container">
        <video className='intro' autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>this is a paaragraph</p>
      </div>
    </>
  );
}

export default LandingPage;
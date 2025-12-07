import React from 'react';
import './family.css';

function Family() {
  return (
    <section className="family-section">
      <div className="family-container">
        <div className="family-content">
          {/* Left Image */}
          <div className="family-image-left">
            <img
              src="https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1702037315-_0007_mega-snack-box.jpg%3Fq%3D10&w=640&q=75"
              alt="Family Feast"
              className="family-product-image"
            />
          </div>

          {/* Center Title */}
          <div className="family-title-wrapper">
            <h2 className="family-main-title">
              <span className="family-title-text">FAMILY</span>
              <span className="family-title-text family-subtitle-text">FEAST</span>
            </h2>
            <p className="family-tagline">Share the Joy, Feast Together!</p>
          </div>

          {/* Right Image */}
          <div className="family-image-right">
            <img
              src="https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1713423114-plain.jpg%3Fq%3D10&w=640&q=75"
              alt="Family Feast"
              className="family-product-image"
            />
          </div>
        </div>

        {/* Red Underline */}
        <div className="family-underline"></div>
      </div>
    </section>
  );
}

export default Family;

import React from 'react';
import './ice.css';

function Ice() {
  return (
    <section className="ice-section">
      <div className="ice-container">
        <div className="ice-content">
          {/* Left Image */}
          <div className="ice-image-left">
            <img
              src="https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1753603302-514086168_731434292804725_8405815010620406476_n.jpg%3Fq%3D10&w=640&q=75"
              alt="Ice Cream Delight"
              className="ice-product-image"
            />
          </div>

          {/* Center Title */}
          <div className="ice-title-wrapper">
            <h2 className="ice-main-title">
              <span className="ice-title-text">ICE CREAM</span>
              <span className="ice-title-text ice-subtitle-text">DELIGHTS</span>
            </h2>
            <p className="ice-tagline">Cool Down with Sweet Treats!</p>
          </div>

          {/* Right Image */}
          <div className="ice-image-right">
            <img
              src="https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1753604436-514589901_1791349632265674_4551607150997400763_n.jpg%3Fq%3D10&w=640&q=75"
              alt="Ice Cream Delight"
              className="ice-product-image"
            />
          </div>
        </div>

        {/* Red Underline */}
        <div className="ice-underline"></div>
      </div>
    </section>
  );
}

export default Ice;

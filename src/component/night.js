import React from 'react';
import './night.css';

function Night() {
  return (
    <section className="night-section">
      <div className="night-container">
        <div className="night-content">
          {/* Left Image */}
          <div className="night-image-left">
            <img
              src="https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1763463551-arabic%20nuggets.jpg%3Fq%3D10&w=640&q=75"
              alt="Night Deal"
              className="night-product-image"
            />
          </div>

          {/* Center Title */}
          <div className="night-title-wrapper">
            <h2 className="night-main-title">
              <span className="night-title-text">MIDNIGHT DEAL</span>
              <span className="night-title-text night-subtitle-text">BURGER</span>
            </h2>
            <p className="night-tagline">Lacha, Loaded Burger Bliss!</p>
          </div>

          {/* Right Image */}
          <div className="night-image-right">
            <img
              src="https://www.mcdonalds.com.pk/wp-content/uploads/2022/08/cheese-burger-1-178x178.png"
              alt="Night Deal"
              className="night-product-image"
            />
          </div>
        </div>

        {/* Red Underline */}
        <div className="night-underline"></div>
      </div>
    </section>
  );
}

export default Night;

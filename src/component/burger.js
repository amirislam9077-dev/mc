import React from 'react';
import './burger.css';

function Burger() {
  return (
    <section className="burger-section">
      <div className="burger-container">
        <div className="burger-content">
          {/* Left Burger Image */}
          <div className="burger-image-left">
            <img
              src="https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1763463551-arabic%20nuggets.jpg%3Fq%3D10&w=640&q=75"
              alt="Lacha Paratha Burger"
              className="burger-product-image"
            />
          </div>

          {/* Center Title */}
          <div className="burger-title-wrapper">
            <h2 className="burger-main-title">
              <span className="burger-title-text">LACHA PARATHA</span>
              <span className="burger-title-text burger-subtitle-text">BURGER</span>
            </h2>
            <p className="burger-tagline">Crispy Lacha, Loaded Burger Bliss!</p>
          </div>

          {/* Right Burger Image */}
          <div className="burger-image-right">
            <img
              src="https://www.mcdonalds.com.pk/wp-content/uploads/2022/08/cheese-burger-1-178x178.png"
              alt="Lacha Paratha Burger"
              className="burger-product-image"
            />
          </div>
        </div>

        {/* Red Underline */}
        <div className="burger-underline"></div>
      </div>
    </section>
  );
}

export default Burger;

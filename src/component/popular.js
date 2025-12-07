import React from 'react';
import './popular.css';

function Popular() {
  return (
    <section className="popular-section">
      <div className="popular-container">
        <div className="popular-content">
          {/* Left Image */}
          <div className="popular-image-left">
            <img
              src="https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1758795307-asd3e3e.jpeg%3Fq%3D10&w=640&q=75"
              alt="Popular Item"
              className="popular-product-image"
            />
          </div>

          {/* Center Title */}
          <div className="popular-title-wrapper">
            <h2 className="popular-main-title">
              <span className="popular-title-text">POPULAR</span>
              <span className="popular-title-text popular-subtitle-text">ITEMS</span>
            </h2>
            <p className="popular-tagline">Most Ordered Right Now!</p>
          </div>

          {/* Right Image */}
          <div className="popular-image-right">
            <img
              src="https://www.mcdonalds.com.pk/wp-content/uploads/2022/08/010-QTR-Pounder-with-cheese.png"
              alt="Popular Item"
              className="popular-product-image"
            />
          </div>
        </div>

        {/* Red Underline */}
        <div className="popular-underline"></div>
      </div>
    </section>
  );
}

export default Popular;

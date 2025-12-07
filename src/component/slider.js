import React, { useState, useEffect } from 'react';
import './slider.css';

function Slider() {
  const images = [
    'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1761988958-566642512-2644144789270118-7248347062835041410-n.jpg%3Fver%3D10&w=1920&q=90',
    'https://www.mcdonalds.com.pk/wp-content/uploads/2025/12/Hot-Offer-25-D.png',
    'https://www.mcdonalds.com.pk/wp-content/uploads/2025/11/Morning-Breakfast-D-25.png',
    'https://mcdonalds.com.pk/wp-content/uploads/2023/01/delivery-points-desktop-slider.png',
    'https://www.kfcpakistan.com/images/f7b63910-ab60-11f0-872c-074fb0609310-Web-Banner_desktop_image-2025-10-17135540.jpg',
    'https://www.kfcpakistan.com/images/356cc7f0-b1d4-11f0-a11e-dfd9b60dad48-App-Banner-&-Web_desktop_image-2025-10-25185543.jpg',
    'https://www.mcdonalds.com.pk/wp-content/uploads/2025/11/9pcs-crispy-chicken-d.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Previous Button */}
        <button className="slider-btn prev-btn" onClick={goToPrevious}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        {/* Slider Images */}
        <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button className="slider-btn next-btn" onClick={goToNext}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;

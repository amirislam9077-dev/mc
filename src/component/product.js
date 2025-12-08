import React, { useRef } from 'react';
import './product.css';

function Product() {
  const scrollContainerRef = useRef(null);
//SA
  const products = [
    {
      id: 1,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1760609852-summer-deals.png%3Fq%3D10&w=256&q=75',
      title: 'Popular Item'
    },
    {
      id: 2,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1760609752-meal-deals.png%3Fq%3D10&w=256&q=75',
      title: 'LACHA PARATHA BURGER'
    },
    {
      id: 3,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1760609870-the-original-Korean-range.png%3Fq%3D10&w=256&q=75',
      title: 'Korean Range'
    },
    {
      id: 4,
      image: 'https://www.kfcpakistan.com/images/98cb1040-7688-11f0-b1e7-2930b7ece6e7-KentuckyComboGT-2025-08-11075549.png',
      title: 'Kentucky Combo'
    },
    {
      id: 5,
      image: 'https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9a86-dbbfcb55fbdd-FF2GT-2025-08-11075548.png',
      title: 'Family Feast'
    },
    {
      id: 6,
      image: 'https://www.kfcpakistan.com/images/eeca6610-781a-11f0-bafb-1557a3ab909e-snackandbeveragescopy-2025-08-13075551.png',
      title: 'Snacks & Beverages'
    },
    {
      id: 7,
      image: 'https://www.kfcpakistan.com/images/ee7b82c0-781a-11f0-a0e6-275ef3706e5f-MidnightDeal3GT-2025-08-13075551.png',
      title: 'Midnight Deal'
    },
    {
      id: 8,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1753603302-514086168_731434292804725_8405815010620406476_n.jpg%3Fq%3D10&w=640&q=75',
      title: 'ICE CREAM DELIGHTS'
    },
    {
      id: 9,
      image: 'https://www.kfcpakistan.com/images/624d93e0-ade6-11f0-96b3-699096726dc2-App-web-kiosgroup-thumbnail-2025-10-20185545.png',
      title: 'Special Combo'
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProductClick = (productTitle) => {
    let targetSection = null;

    if (productTitle === 'Popular Item') {
      targetSection = document.querySelector('.popular-section');
    } else if (productTitle === 'LACHA PARATHA BURGER') {
      targetSection = document.querySelector('.burger-section');
    } else if (productTitle === 'Midnight Deal') {
      targetSection = document.querySelector('.night-section');
    } else if (productTitle === 'Family Feast') {
      targetSection = document.querySelector('.family-section');
    } else if (productTitle === 'Korean Range') {
      targetSection = document.querySelector('.function-section');
    } else if (productTitle === 'ICE CREAM DELIGHTS') {
      targetSection = document.querySelector('.ice-section');
    }

    if (targetSection) {
      const headerHeight = 120;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="product-section">
      <div className="product-container">
        <h2 className="product-title">Our Menu</h2>
        <div className="product-carousel-wrapper">
          <button className="product-nav-btn prev-product-btn" onClick={() => scroll('left')}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <div className="product-carousel" ref={scrollContainerRef}>
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product.title)}
                style={{ cursor: 'pointer' }}
              >
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <h3 className="product-name">{product.title}</h3>
              </div>
            ))}
          </div>

          <button className="product-nav-btn next-product-btn" onClick={() => scroll('right')}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;

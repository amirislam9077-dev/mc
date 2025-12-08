import React, { useState } from 'react';
import './familypro.css';
import ViewPro from './viewpro';

function FamilyPro({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const familyProducts = [
    {
      id: 1,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1702037315-_0007_mega-snack-box.jpg%3Fq%3D10&w=640&q=75',
      title: 'Mega Family Box',
      description: 'Ultimate family sharing box with crispy chicken pieces and sides...',
      price: 'Rs. 2490'
    },
    {
      id: 2,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1713423114-plain.jpg%3Fq%3D10&w=640&q=75',
      title: 'Family Feast Bucket',
      description: 'Perfect family meal with variety of chicken options and drinks...',
      price: 'Rs. 1990'
    },
    {
      id: 3,
      image: 'https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9442-f17609a5500f-XtremeDuoBoxcopy-2025-08-11075548.png',
      title: 'Family Sharing Platter',
      description: 'Generous platter designed for the whole family to enjoy together...',
      price: 'Rs. 2190'
    },
    {
      id: 4,
      image: 'https://www.kfcpakistan.com/images/440cfeb0-7322-11f0-bed4-a368b3f57bf0-ChickyMeal1copy_variant_0-2025-08-07000545.png',
      title: 'Family Combo Special',
      description: 'Complete family combo with burgers, chicken, and refreshing drinks...',
      price: 'Rs. 1790'
    },
    {
      id: 5,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1761555414-punjab.jpg%3Fq%3D10&w=640&q=75',
      title: 'Family Party Pack',
      description: 'Party-sized portions perfect for family gatherings and celebrations...',
      price: 'Rs. 2690'
    },
    {
      id: 6,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1761554833-chapli.jpg%3Fq%3D10&w=640&q=75',
      title: 'Family Dinner Box',
      description: 'Complete dinner solution for the entire family with multiple items...',
      price: 'Rs. 2290'
    },
    {
      id: 7,
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-3_variant_0-2023-05-31115706.png',
      title: 'Family Value Meal',
      description: 'Great value family meal with crispy chicken and all the sides...',
      price: 'Rs. 1890'
    },
    {
      id: 8,
      image: 'https://www.kfcpakistan.com/images/fccb1390-51f5-11f0-8eb0-4f7c6e7e8f3c-11-min_variant_0-2025-06-25185539.png',
      title: 'Family Deluxe Bundle',
      description: 'Premium family bundle with loaded options and premium selections...',
      price: 'Rs. 2890'
    }
  ];

  return (
    <>
      <section className="familypro-section">
        <div className="familypro-container">
          <div className="familypro-grid">
            {familyProducts.map((product) => (
              <div
                key={product.id}
                className="familypro-card"
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: 'pointer' }}
              >
                <div className="familypro-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="familypro-image"
                  />
                </div>
                <div className="familypro-content">
                  <h3 className="familypro-title">{product.title}</h3>
                  <p className="familypro-description">{product.description}</p>
                  <div className="familypro-footer">
                    <span className="familypro-price">{product.price}</span>
                    <button
                      className="familypro-add-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ViewPro
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </>
  );
}

export default FamilyPro;

import React, { useState } from 'react';
import './popularpro.css';
import ViewPro from './viewpro';

function PopularPro({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const popularProducts = [
    {
      id: 1,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1758795307-asd3e3e.jpeg%3Fq%3D10&w=640&q=75',
      title: 'Bestseller Combo',
      description: 'Our most popular combo meal with all your favorite items...',
      price: 'Rs. 1190'
    },
    {
      id: 2,
      image: 'https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png',
      title: 'Family Feast Deal',
      description: 'Perfect family meal with variety of delicious items...',
      price: 'Rs. 1250'
    },
    {
      id: 3,
      image: 'https://www.mcdonalds.com.pk/wp-content/uploads/2022/08/010-QTR-Pounder-with-cheese.png',
      title: 'Signature Burger Meal',
      description: 'Premium burger with cheese and special sauce...',
      price: 'Rs. 550'
    },
    {
      id: 4,
      image: 'https://www.kfcpakistan.com/images/4d334d30-7324-11f0-b22b-41b1303a1fa3-CrispyDuoBoxcopy-2025-08-07002019.png',
      title: 'Crispy Strips Combo',
      description: 'Crispy chicken strips with drink and fries...',
      price: 'Rs. 990'
    },
    {
      id: 5,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1761555414-punjab.jpg%3Fq%3D10&w=640&q=75',
      title: 'Trending Snack Box',
      description: 'Most ordered snack box with authentic flavors...',
      price: 'Rs. 890'
    },
    {
      id: 6,
      image: 'https://www.kfcpakistan.com/images/440cfeb0-7322-11f0-bed4-a368b3f57bf0-ChickyMeal1copy_variant_0-2025-08-07000545.png',
      title: 'Chicky Meal Special',
      description: 'Delicious chicken meal with special seasoning and sides...',
      price: 'Rs. 799'
    },
    {
      id: 7,
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-3_variant_0-2023-05-31115706.png',
      title: 'Crispy Chicken Feast',
      description: 'Perfectly fried crispy chicken with signature sauce...',
      price: 'Rs. 899'
    },
    {
      id: 8,
      image: 'https://www.kfcpakistan.com/images/fccb1390-51f5-11f0-8eb0-4f7c6e7e8f3c-11-min_variant_0-2025-06-25185539.png',
      title: 'Zinger Deluxe Combo',
      description: 'Ultimate zinger experience with loaded toppings...',
      price: 'Rs. 950'
    }
  ];

  return (
    <>
      <section className="popularpro-section">
        <div className="popularpro-container">
          <div className="popularpro-grid">
            {popularProducts.map((product) => (
              <div
                key={product.id}
                className="popularpro-card"
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: 'pointer' }}
              >
                <div className="popularpro-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="popularpro-image"
                  />
                </div>
                <div className="popularpro-content">
                  <h3 className="popularpro-title">{product.title}</h3>
                  <p className="popularpro-description">{product.description}</p>
                  <div className="popularpro-footer">
                    <span className="popularpro-price">{product.price}</span>
                    <button
                      className="popularpro-add-btn"
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

export default PopularPro;

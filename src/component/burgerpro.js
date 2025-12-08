import React, { useState } from 'react';
import './burgerpro.css';
import ViewPro from './viewpro';

function BurgerPro({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const burgerProducts = [
    {
      id: 1,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1763375249-582210906_25556881310635752_1869492942018573537_n.jpg%3Fq%3D10&w=640&q=75',
      title: 'Beef Smash Lacha Paratha',
      description: 'We bring you our Original Smash Lacha Paratha Burger-Crispy lacha paratha...',
      price: 'Rs. 750'
    },
    {
      id: 2,
      image: 'https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9442-f17609a5500f-XtremeDuoBoxcopy-2025-08-11075548.png',
      title: 'Beef Chapli Melt Lacha Paratha',
      description: 'Inspired by their bold and fiery taste, we bring you our Spicy Beef Chapli Lacha Paratha...',
      price: 'Rs. 750'
    },
    {
      id: 3,
      image: 'https://www.mcdonalds.com.pk/wp-content/uploads/2022/07/item-4.png',
      title: 'Saucy Chatkara Lacha Paratha',
      description: 'Keeping that spirit alive, we bring you our Saucy Chatkara Lacha Paratha — crispy lacha...',
      price: 'Rs. 690'
    },
    {
      id: 4,
      image: 'https://www.kfcpakistan.com/images/440cfeb0-7322-11f0-bed4-a368b3f57bf0-ChickyMeal1copy_variant_0-2025-08-07000545.png',
      title: 'Chicken Lacha Paratha',
      description: 'Delicious chicken lacha paratha with crispy layers and flavorful filling...',
      price: 'Rs. 650'
    },
    {
      id: 5,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1761555414-punjab.jpg%3Fq%3D10&w=640&q=75',
      title: 'Punjab Special Lacha',
      description: 'Authentic Punjabi flavors in every bite with our special lacha paratha...',
      price: 'Rs. 790'
    },
    {
      id: 6,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1761554833-chapli.jpg%3Fq%3D10&w=640&q=75',
      title: 'Chapli Kabab Special',
      description: 'Traditional chapli kabab with authentic spices and premium quality meat...',
      price: 'Rs. 850'
    },
    {
      id: 7,
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-3_variant_0-2023-05-31115706.png',
      title: 'Crispy Chicken Combo',
      description: 'Perfectly fried crispy chicken with special seasoning and signature sauce...',
      price: 'Rs. 899'
    },
    {
      id: 8,
      image: 'https://www.kfcpakistan.com/images/fccb1390-51f5-11f0-8eb0-4f7c6e7e8f3c-11-min_variant_0-2025-06-25185539.png',
      title: 'Zinger Deluxe Meal',
      description: 'Ultimate zinger experience with loaded toppings and fresh ingredients...',
      price: 'Rs. 950'
    }
  ];

  return (
    <>
      <section className="burgerpro-section">
        <div className="burgerpro-container">
          <div className="burgerpro-grid">
            {burgerProducts.map((product) => (
              <div
                key={product.id}
                className="burgerpro-card"
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: 'pointer' }}
              >
                <div className="burgerpro-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="burgerpro-image"
                  />
                </div>
                <div className="burgerpro-content">
                  <h3 className="burgerpro-title">{product.title}</h3>
                  <p className="burgerpro-description">{product.description}</p>
                  <div className="burgerpro-footer">
                    <span className="burgerpro-price">{product.price}</span>
                    <button
                      className="burgerpro-add-btn"
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

export default BurgerPro;

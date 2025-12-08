import React, { useState } from 'react';
import './icepro.css';
import ViewPro from './viewpro';

function IcePro({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const iceProducts = [
    {
      id: 1,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1753603302-514086168_731434292804725_8405815010620406476_n.jpg%3Fq%3D10&w=640&q=75',
      title: 'Chocolate Sundae',
      description: 'Rich chocolate ice cream topped with chocolate sauce and sprinkles...',
      price: 'Rs. 250'
    },
    {
      id: 2,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1753604436-514589901_1791349632265674_4551607150997400763_n.jpg%3Fq%3D10&w=640&q=75',
      title: 'Vanilla Dream',
      description: 'Classic vanilla soft serve with caramel drizzle and nuts...',
      price: 'Rs. 220'
    },
    {
      id: 3,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1753605057-515317811_749426944694331_9149262726542161271_n.jpg%3Fq%3D10&w=640&q=75',
      title: 'Strawberry Delight',
      description: 'Fresh strawberry ice cream with strawberry syrup and whipped cream...',
      price: 'Rs. 280'
    },
    {
      id: 4,
      image: 'https://www.kfcpakistan.com/images/fd32bd40-9789-11f0-82ad-13cd257b5b9c-SpicyMayo_variant_0-2025-09-22075856.png',
      title: 'Mango Blast',
      description: 'Tropical mango ice cream with fresh mango chunks and sauce...',
      price: 'Rs. 290'
    },
    {
      id: 5,
      image: 'https://www.kfcpakistan.com/images/0a68d020-73c8-11f0-9aa3-ad226d559836-Pepsiltr_variant_0-2025-08-07195225.png',
      title: 'Cookies & Cream',
      description: 'Creamy vanilla ice cream loaded with Oreo cookie pieces...',
      price: 'Rs. 310'
    },
    {
      id: 6,
      image: 'https://www.mcdonalds.com.pk/wp-content/uploads/2022/08/Caramel-Iced-Latte-178x178.png',
      title: 'Brownie Fudge Sundae',
      description: 'Warm brownie with vanilla ice cream and hot fudge sauce...',
      price: 'Rs. 350'
    },
    {
      id: 7,
      image: 'https://www.mcdonalds.com.pk/wp-content/uploads/2022/08/Mango-Iced-Tea-178x178.png',
      title: 'Caramel Swirl',
      description: 'Smooth caramel ice cream with caramel ribbon and toffee bits...',
      price: 'Rs. 270'
    },
    {
      id: 8,
      image: 'https://www.mcdonalds.com.pk/wp-content/uploads/2022/08/Vanilla-Oreo-Frappe-178x178.png',
      title: 'Ice Cream Shake',
      description: 'Thick and creamy milkshake topped with whipped cream and cherry...',
      price: 'Rs. 320'
    }
  ];

  return (
    <>
      <section className="icepro-section">
        <div className="icepro-container">
          <div className="icepro-grid">
            {iceProducts.map((product) => (
              <div
                key={product.id}
                className="icepro-card"
                onClick={() => {
                  console.log('Product clicked:', product);
                  setSelectedProduct(product);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="icepro-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="icepro-image"
                  />
                </div>
                <div className="icepro-content">
                  <h3 className="icepro-title">{product.title}</h3>
                  <p className="icepro-description">{product.description}</p>
                  <div className="icepro-footer">
                    <span className="icepro-price">{product.price}</span>
                    <button
                      className="icepro-add-btn"
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

export default IcePro;

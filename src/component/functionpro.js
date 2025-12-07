import React from 'react';
import './functionpro.css';

function FunctionPro() {
  const functionProducts = [
    {
      id: 1,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1760177866-k1.jpg%3Fq%3D10&w=640&q=75',
      title: 'Korean Special Combo',
      description: 'Authentic Korean flavors with crispy chicken and special sauce...',
      price: 'Rs. 1190'
    },
    {
      id: 2,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1753262326-Original%20Korean%20Loaded%20Fries-min.jpg%3Fq%3D10&w=640&q=75',
      title: 'Korean Family Feast',
      description: 'Perfect family meal with Korean style chicken and sides...',
      price: 'Rs. 1250'
    },
    {
      id: 3,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1760173728-553908669-795331536463991-3083452257322855834-n--1-.jpg%3Fq%3D10&w=640&q=75',
      title: 'Korean Burger Special',
      description: 'Premium Korean style burger with special gochujang sauce...',
      price: 'Rs. 550'
    },
    {
      id: 4,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1744184981-IMG_6418%20-%20Copy.jpg%3Fq%3D10&w=640&q=75',
      title: 'Korean Crispy Strips',
      description: 'Crispy chicken strips with Korean style seasoning...',
      price: 'Rs. 990'
    },
    {
      id: 5,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1743772762-2.jpg%3Fq%3D10&w=640&q=75',
      title: 'Korean Fusion Box',
      description: 'Unique fusion of Korean and desi flavors in one box...',
      price: 'Rs. 890'
    },
    {
      id: 6,
      image: 'https://www.kfcpakistan.com/images/440cfeb0-7322-11f0-bed4-a368b3f57bf0-ChickyMeal1copy_variant_0-2025-08-07000545.png',
      title: 'Korean Chicky Meal',
      description: 'Delicious Korean style chicken meal with special sides...',
      price: 'Rs. 799'
    },
    {
      id: 7,
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-3_variant_0-2023-05-31115706.png',
      title: 'Korean Crispy Feast',
      description: 'Perfectly fried crispy chicken with Korean BBQ sauce...',
      price: 'Rs. 899'
    },
    {
      id: 8,
      image: 'https://www.kfcpakistan.com/images/fccb1390-51f5-11f0-8eb0-4f7c6e7e8f3c-11-min_variant_0-2025-06-25185539.png',
      title: 'Korean Zinger Deluxe',
      description: 'Ultimate Korean zinger with loaded toppings and gochujang...',
      price: 'Rs. 950'
    }
  ];

  return (
    <section className="functionpro-section">
      <div className="functionpro-container">
        <div className="functionpro-grid">
          {functionProducts.map((product) => (
            <div key={product.id} className="functionpro-card">
              <div className="functionpro-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="functionpro-image"
                />
              </div>
              <div className="functionpro-content">
                <h3 className="functionpro-title">{product.title}</h3>
                <p className="functionpro-description">{product.description}</p>
                <div className="functionpro-footer">
                  <span className="functionpro-price">{product.price}</span>
                  <button className="functionpro-add-btn">ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunctionPro;

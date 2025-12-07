import React from 'react';
import './nightpro.css';

function NightPro() {
  const nightProducts = [
    {
      id: 1,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1736415809-454398350_1040031337711305_9177573909717849808_n.jpg%3Fq%3D10&w=640&q=75',
      title: 'Midnight Special Burger',
      description: 'Late night cravings satisfied with our special midnight burger...',
      price: 'Rs. 750'
    },
    {
      id: 2,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1730537051-Zenga-burger-with-fries-%26-drink-Changes-1.jpg%3Fq%3D10&w=640&q=75',
      title: 'Night Feast Combo',
      description: 'Complete feast for your midnight hunger with crispy delights...',
      price: 'Rs. 899'
    },
    {
      id: 3,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1730537114-Majesty-with-fries-%26-drink-Changes-1.jpg%3Fq%3D10&w=640&q=75',
      title: 'Late Night Snack Box',
      description: 'Perfect snack box for those late night study sessions...',
      price: 'Rs. 650'
    },
    {
      id: 4,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1713423161-salsa.jpg%3Fq%3D10&w=640&q=75',
      title: 'Midnight Munchies',
      description: 'Crispy chicken bites perfect for midnight cravings...',
      price: 'Rs. 690'
    },
    {
      id: 5,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1723641048-1.jpg%3Fq%3D10&w=640&q=75',
      title: 'Night Owl Special',
      description: 'Special deal for night owls with authentic flavors...',
      price: 'Rs. 790'
    },
    {
      id: 6,
      image: 'https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1761554833-chapli.jpg%3Fq%3D10&w=640&q=75',
      title: 'After Dark Chapli',
      description: 'Traditional chapli kabab served hot for late night hunger...',
      price: 'Rs. 850'
    },
    {
      id: 7,
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-3_variant_0-2023-05-31115706.png',
      title: 'Midnight Crispy Delight',
      description: 'Perfectly crispy chicken for your midnight feast...',
      price: 'Rs. 899'
    },
    {
      id: 8,
      image: 'https://www.kfcpakistan.com/images/fccb1390-51f5-11f0-8eb0-4f7c6e7e8f3c-11-min_variant_0-2025-06-25185539.png',
      title: 'Night Zinger Supreme',
      description: 'Ultimate zinger experience for late night cravings...',
      price: 'Rs. 950'
    }
  ];

  return (
    <section className="nightpro-section">
      <div className="nightpro-container">
        <div className="nightpro-grid">
          {nightProducts.map((product) => (
            <div key={product.id} className="nightpro-card">
              <div className="nightpro-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="nightpro-image"
                />
              </div>
              <div className="nightpro-content">
                <h3 className="nightpro-title">{product.title}</h3>
                <p className="nightpro-description">{product.description}</p>
                <div className="nightpro-footer">
                  <span className="nightpro-price">{product.price}</span>
                  <button className="nightpro-add-btn">ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NightPro;

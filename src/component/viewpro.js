import React, { useState } from 'react';
import './viewpro.css';

function ViewPro({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('Regular');
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!product) return null;

  // Extract base price from product.price (e.g., "Rs. 250" -> 250)
  const basePrice = parseInt(product.price.replace(/[^0-9]/g, '')) || 390;

  const sizeOptions = [
    { name: 'Regular', price: basePrice },
    { name: 'Large', price: basePrice + 100 }
  ];

  const currentPrice = sizeOptions.find(s => s.name === selectedSize)?.price || basePrice;

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="viewpro-overlay" onClick={onClose}>
      <div className="viewpro-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="viewpro-close-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div className="viewpro-content">
          {/* Left Side - Product Image */}
          <div className="viewpro-image-section">
            <img src={product.image} alt={product.title} className="viewpro-product-image" />
          </div>

          {/* Right Side - Product Details */}
          <div className="viewpro-details-section">
            <h2 className="viewpro-product-title">{product.title}</h2>
            <p className="viewpro-product-price">Rs. {currentPrice}</p>
            <p className="viewpro-product-description">{product.description}</p>

            {/* Size Options */}
            <div className="viewpro-size-options">
              {sizeOptions.map((size) => (
                <label key={size.name} className="viewpro-size-option">
                  <input
                    type="radio"
                    name="size"
                    value={size.name}
                    checked={selectedSize === size.name}
                    onChange={() => setSelectedSize(size.name)}
                  />
                  <span className="viewpro-radio-label">
                    {size.name}
                  </span>
                  <span className="viewpro-size-price">Rs. {size.price}</span>
                </label>
              ))}
            </div>

            {/* Special Instructions */}
            <div className="viewpro-special-instructions">
              <label className="viewpro-instructions-label">Special Instructions</label>
              <textarea
                className="viewpro-instructions-input"
                placeholder="Please enter instructions about this item"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                maxLength={500}
              />
              <span className="viewpro-char-count">{specialInstructions.length}/500</span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="viewpro-footer">
              <div className="viewpro-quantity-controls">
                <button
                  className="viewpro-quantity-btn"
                  onClick={() => handleQuantityChange('decrease')}
                  disabled={quantity <= 1}
                >
                  
                </button>
                <span className="viewpro-quantity-value">{quantity}</span>
                <button
                  className="viewpro-quantity-btn"
                  onClick={() => handleQuantityChange('increase')}
                >
                  +
                </button>
              </div>

              <button
                className="viewpro-add-to-cart-btn"
                onClick={() => {
                  if (onAddToCart) {
                    onAddToCart({
                      ...product,
                      size: selectedSize,
                      price: `Rs. ${currentPrice}`,
                      quantity: quantity,
                      specialInstructions: specialInstructions
                    });
                    onClose();
                  }
                }}
              >
                <span className="viewpro-cart-price">Rs. {currentPrice}</span>
                <span className="viewpro-cart-text">Add to Cart</span>
                <svg className="viewpro-cart-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.2-12.9l.07.03.12.03c.02 0 .06 0 .1.02.06.01.1.02.14.02h.02L19 7v7H8v2h12v-2c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3H7c-.35 0-.68.07-1 .18L4.54 1.54 3.13 2.95 4.54 4.36 6.8 5.1z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPro;

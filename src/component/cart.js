import React, { useState } from 'react';
import './cart.css';
import Checkout from './checkout';

function Cart({ cartItems, onUpdateQuantity, onRemoveItem, isOpen, onClose, onClearCart }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
      return total + (price * item.quantity);
    }, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h2 className="cart-title">Your Cart</h2>
        <button className="cart-close-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />

              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                {item.size && <p className="cart-item-size">+ {item.size}</p>}
                {item.specialInstructions && (
                  <p className="cart-item-instructions">{item.specialInstructions}</p>
                )}
                <p className="cart-item-price">{item.price}</p>
              </div>

              <div className="cart-item-actions">
                <button
                  className="cart-delete-btn"
                  onClick={() => onRemoveItem(index)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  </svg>
                </button>

                <div className="cart-quantity-controls">
                  <button
                    className="cart-quantity-btn"
                    onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    
                  </button>
                  <span className="cart-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-quantity-btn"
                    onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <>
          <button className="cart-add-more-btn">
            + Add more items
          </button>

          <button className="cart-checkout-btn" onClick={() => setIsCheckoutOpen(true)}>
            <span>Checkout</span>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>

          <div className="cart-total">
            <span className="cart-total-label">Total</span>
            <span className="cart-total-amount">Rs. {calculateTotal()}</span>
          </div>
        </>
      )}

      {isCheckoutOpen && (
        <Checkout
          cartItems={cartItems}
          onClose={() => {
            setIsCheckoutOpen(false);
            onClose(); // Also close the cart sidebar and return to main app
          }}
          onOrderSuccess={() => {
            onClearCart(); // Clear cart after successful order
            setIsCheckoutOpen(false);
            onClose();
          }}
        />
      )}
    </div>
  );
}

export default Cart;

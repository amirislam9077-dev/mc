import React from 'react';
import './thanks.css';

function Thanks({ orderNumber, customerName, orderDetails, onClose }) {
  return (
    <div className="thanks-overlay" onClick={onClose}>
      <div className="thanks-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="thanks-close-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        {/* Success Icon */}
        <div className="success-icon-wrapper">
          <svg className="success-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="#27AE60" strokeWidth="2" fill="none"/>
            <path d="M7 12l3 3 7-7" stroke="#27AE60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Thank You Message */}
        <div className="thanks-content">
          <h1 className="thanks-title">Thank You for Your Order!</h1>
          <p className="thanks-subtitle">Your order has been placed successfully</p>

          {/* Order Info */}
          <div className="order-info-box">
            <div className="order-info-item">
              <span className="info-label">Order Number:</span>
              <span className="info-value order-number">{orderNumber}</span>
            </div>
            <div className="order-info-item">
              <span className="info-label">Customer Name:</span>
              <span className="info-value">{customerName}</span>
            </div>
            <div className="order-info-item">
              <span className="info-label">Total Amount:</span>
              <span className="info-value total-amount">PKR {orderDetails.total}.00</span>
            </div>
          </div>

          {/* Email Confirmation */}
          <div className="email-confirmation">
            <svg className="email-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <p>A confirmation email has been sent to:</p>
            <p className="email-address">amirislam9077@gmail.com</p>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info">
            <h3>Delivery Details</h3>
            <div className="delivery-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>{orderDetails.address}</span>
            </div>
            <div className="delivery-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>{orderDetails.phone}</span>
            </div>
            {orderDetails.alternatePhone && (
              <div className="delivery-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{orderDetails.alternatePhone} <em style={{color: '#999', fontSize: '13px'}}>(Alternate)</em></span>
              </div>
            )}
          </div>

          {/* Order Items Summary */}
          <div className="order-summary-box">
            <h3>Order Summary</h3>
            <div className="items-list">
              {orderDetails.items.split('\n').map((item, index) => (
                <div key={index} className="summary-item">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="thanks-message">
            <p>We're preparing your order with love and care.</p>
            <p>Your delicious meal will be delivered soon!</p>
          </div>

          {/* Action Button */}
          <button className="continue-btn" onClick={onClose}>
            <span>Continue Shopping</span>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thanks;

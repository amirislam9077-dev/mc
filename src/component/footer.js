import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo">
            <img
              src="https://kababjeesfriedchicken.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b8c71cd5.png&w=256&q=75"
              alt="Kababjees Fried Chicken Logo"
              className="footer-logo-img"
            />
          </div>

          <div className="footer-description">
            <h2 className="footer-title">Kababjees Fried Chicken – Redefining the fast-food experience with its exceptional fried chicken</h2>
            <p className="footer-text">
              This haven for fried chicken enthusiasts serves up an array of tantalizing options, featuring a menu that boasts
              the crispiest and most flavorful chicken in the city. At Kababjees Fried Chicken, each dish is a masterpiece,
              from the classic Crispy Chicken to the ever-popular Crispy Zenga Burger.
            </p>
            <a href="#" className="footer-read-more">
              Read more
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-contact">
            <h3 className="footer-section-title">Contact us</h3>
            <a href="tel:021-111-666-111" className="footer-phone">
              <svg className="phone-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              021-111-666-111
            </a>
          </div>

          <div className="footer-social">
            <h3 className="footer-section-title">Follow us</h3>
            <div className="footer-social-icons">
              <a href="#" className="social-icon facebook" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-icon instagram" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-app">
            <div className="app-preview">
              <img
                src="https://kababjeesfriedchicken.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-preview.c5e8c8e5.png&w=256&q=75"
                alt="App Preview"
                className="app-preview-img"
              />
            </div>
            <div className="app-content">
              <h3 className="footer-section-title">Get The App!</h3>
              <p className="app-description">App is where the fun is! It's Easy, Fast and Convenient</p>
              <div className="app-buttons">
                <a href="#" className="app-store-btn">
                  <svg className="app-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="app-text">
                    <span className="app-available">Download on the</span>
                    <span className="app-store">App Store</span>
                  </div>
                </a>
                <a href="#" className="google-play-btn">
                  <svg className="app-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.182-.188-.291-.45-.291-.736V2.55c0-.286.109-.548.29-.736zm10.89 10.893l2.807 2.807-10.07 5.716 7.263-8.523zm3.199-3.198l2.807 2.807c.536.295.898.84.898 1.472s-.362 1.177-.898 1.472l-2.807 2.807-2.808-2.807 2.808-2.807-2.808-2.808 2.808-2.808zM3.609 1.814L13.792 12 3.61 1.814z"/>
                  </svg>
                  <div className="app-text">
                    <span className="app-available">GET IT ON</span>
                    <span className="app-store">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="footer-credits">
          <p>
            Powered by <a href="#" className="indolj-link">indolj</a>
            <span className="separator">|</span>
            <a href="#" className="footer-link">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#" className="footer-link">Faqs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

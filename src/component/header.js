import React from 'react';
import './header.css';

function Header() {
  const scrollToProduct = () => {
    const productSection = document.querySelector('.product-section');
    if (productSection) {
      const headerHeight = 120;
      const elementPosition = productSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPopular = () => {
    setTimeout(() => {
      const popularSection = document.querySelector('.popular-section');
      if (popularSection) {
        const headerHeight = 120;
        const elementPosition = popularSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const scrollToBurger = () => {
    setTimeout(() => {
      const burgerSection = document.querySelector('.burger-section');
      if (burgerSection) {
        const headerHeight = 120;
        const elementPosition = burgerSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const scrollToNight = () => {
    setTimeout(() => {
      const nightSection = document.querySelector('.night-section');
      if (nightSection) {
        const headerHeight = 120;
        const elementPosition = nightSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const scrollToFamily = () => {
    setTimeout(() => {
      const familySection = document.querySelector('.family-section');
      if (familySection) {
        const headerHeight = 120;
        const elementPosition = familySection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const scrollToFunction = () => {
    setTimeout(() => {
      const functionSection = document.querySelector('.function-section');
      if (functionSection) {
        const headerHeight = 120;
        const elementPosition = functionSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const scrollToIce = () => {
    setTimeout(() => {
      const iceSection = document.querySelector('.ice-section');
      if (iceSection) {
        const headerHeight = 120;
        const elementPosition = iceSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header className="mcdonalds-header">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="top-nav-left">
          <div className="logo">
            <svg viewBox="0 0 100 100" className="mcdonalds-logo">
              <path d="M50 0 L20 100 L30 100 L50 30 L70 100 L80 100 Z" fill="#FFC72C"/>
              <path d="M10 100 L30 30 L40 30 L20 100 Z" fill="#FFC72C"/>
              <path d="M60 30 L70 30 L90 100 L80 100 Z" fill="#FFC72C"/>
            </svg>
          </div>
          <a href="#careers" className="nav-link">Careers</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </div>

        <div className="top-nav-right">
          <button className="search-btn">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            Search
          </button>

          <button className="locate-btn">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Locate Me
          </button>

          <button className="order-btn">Order on McDelivery</button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <a href="#food" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollToPopular(); }}>Popular Item</a>
        <a href="#quality" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollToBurger(); }}>LACHA PARATHA BURGER</a>
        <a href="#app" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollToNight(); }}>MIDNIGHT DEAL BURGER</a>
        <a href="#family" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollToFamily(); }}>FAMILY FEAST</a>
        <a href="#korean" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollToFunction(); }}>Korean Range</a>
        <a href="#icecream" className="main-nav-link" onClick={(e) => { e.preventDefault(); scrollToIce(); }}>ICE CREAM DELIGHTS</a>
      </nav>
    </header>
  );
}

export default Header;

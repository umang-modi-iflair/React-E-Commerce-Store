import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Update active section based on current route
    const updateActiveSection = () => {
      const currentPath = window.location.pathname;
      const pathToSection = {
        '/': 'home',
        '/products': 'products',
        '/categories': 'categories',
        '/about': 'about'
      };
      setActiveSection(pathToSection[currentPath] || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', updateActiveSection);

    // Initial check
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', updateActiveSection);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">

          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">M</div>
            <span className="logo-text">Ecommerce</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMenu}>
              <span>Home</span>
              <div className="nav-underline"></div>
            </Link>
            <Link to="/products" className={`nav-link ${activeSection === 'products' ? 'active' : ''}`} onClick={closeMenu}>
              <span>Products</span>
              <div className="nav-underline"></div>
            </Link>
            <Link to="/categories" className={`nav-link ${activeSection === 'categories' ? 'active' : ''}`} onClick={closeMenu}>
              <span>Categories</span>
              <div className="nav-underline"></div>
            </Link>
            <Link to="/about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>
              <span>About</span>
              <div className="nav-underline"></div>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="cta-section">
            <Link to="/products" className="cta-button" onClick={closeMenu}>
              Get Started
              <span className="cta-arrow">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav">
            <Link to="/" className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMenu}>
              <span>Home</span>
              <div className="mobile-nav-icon">🏠</div>
            </Link>
            <Link to="/products" className={`mobile-nav-link ${activeSection === 'products' ? 'active' : ''}`} onClick={closeMenu}>
              <span>Products</span>
              <div className="mobile-nav-icon">🛍️</div>
            </Link>
            <Link to="/categories" className={`mobile-nav-link ${activeSection === 'categories' ? 'active' : ''}`} onClick={closeMenu}>
              <span>Categories</span>
              <div className="mobile-nav-icon">📂</div>
            </Link>
            <Link to="/about" className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>
              <span>About</span>
              <div className="mobile-nav-icon">ℹ️</div>
            </Link>

            <div className="mobile-cta-section">
              <Link to="/products" className="mobile-cta-button" onClick={closeMenu}>
                Get Started
                <span className="mobile-cta-arrow">→</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
};

export default Header;

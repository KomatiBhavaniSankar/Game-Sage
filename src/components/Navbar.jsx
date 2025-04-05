import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import '../pages/About';
import '../pages/Contact';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Close mobile menu when resizing back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <h3 className="logo">Game Sage</h3>

      {/* Navigation Links */}
      <ul className={isMobile ? "nav-links nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/About" activeClassName="active">About</NavLink></li>
      
        <li><NavLink to="/Contact" activeClassName="active">Contact</NavLink></li>
      </ul>

      {/* Hamburger Menu Button */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        aria-label="Toggle Navigation Menu"
      >
        {isMobile ? <span className="close-icon">✖</span> : <span className="hamburger-icon">☰</span>}
      </button>
    </nav>
  );
};

export default Navbar;

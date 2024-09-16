'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const DarkMode = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    document.body.classList.toggle('light-mode', darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar_2">
        <div className="theme-toggle-container">
          <FaSun size={24} className={`icon ${darkMode ? 'inactive' : ''}`} />
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <FaMoon size={24} className={`icon ${darkMode ? '' : 'inactive'}`} />
        </div>

        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <div className="close-menu" onClick={toggleMenu}>
            <FaTimes size={24} />
          </div>
          <div className="menu-list">
            <Link href="/" className="menu-item" onClick={toggleMenu}>Home</Link>
            <Link href="/products" className="menu-item" onClick={toggleMenu}>Our Products</Link>
            <Link href="/investor-corner" className="menu-item" onClick={toggleMenu}>Investor’s Corner</Link>
            <Link href="/about" className="menu-item" onClick={toggleMenu}>About</Link>
            <Link href="/contact-us" className="menu-item" onClick={toggleMenu}>Contact Us</Link>
          </div>
        </div>

        <div className="mobile-menu" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default DarkMode;

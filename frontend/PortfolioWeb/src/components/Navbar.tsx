import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">ŘEMESLNÍK</a>

        {/* Hamburger ikonka */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#header" onClick={closeMenu}>Domů</a></li>
          <li><a href="#about" onClick={closeMenu}>O mně</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#services" onClick={closeMenu}>Služby</a></li>
          <li><a href="#prices" onClick={closeMenu}>Ceník</a></li>
          <li><a href="#contact" onClick={closeMenu}>Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
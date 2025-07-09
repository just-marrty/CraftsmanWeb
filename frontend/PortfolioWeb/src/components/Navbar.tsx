import React, { useState, useEffect, useRef } from 'react';
import logo from '/ctafts-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Zavření menu při kliknutí mimo něj
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    // Přidání event listeneru pro kliknutí na celý dokument
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup při unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>

        {/* Hamburger ikona */}
        <div
          ref={hamburgerRef}
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </div>

        {/* Navigační menu */}
        <ul ref={menuRef} className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
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

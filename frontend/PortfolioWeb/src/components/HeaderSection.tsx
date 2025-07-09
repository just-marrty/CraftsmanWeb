import React from 'react';
import './HeaderSection.css';

const HeaderSection = () => {
  return (
    <header className="header-section" id="header">
      <div className="header-content">
        <h1 className="header-title">Poctivé řemeslo od srdce</h1>
        <p className="header-subtitle">
          Dřevo je moje vášeň – stavím, opravuji, tvořím s pečlivostí a respektem k tradici.
        </p>
        <a href="#contact" className="btn-primary">
          Nezávazně poptat
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;

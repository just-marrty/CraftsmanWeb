import React from 'react';
import './PricesSection.css';

const PricesSection = () => {
  return (
    <section className="prices-section" id="prices">
      <div className="prices-container">
        <h2 className="section-title">Ceník služeb</h2>
        <div className="price-cards">
          <div className="price-card">
            <h3>Pergoly a přístřešky</h3>
            <p>od 3 500 Kč/m²</p>
            <p className="card-desc">Kvalitní dřevo, zakázková výroba, montáž v ceně.</p>
          </div>
          <div className="price-card">
            <h3>Altány a zahradní stavby</h3>
            <p>od 45 000 Kč</p>
            <p className="card-desc">Kompletní řešení včetně střechy a nátěru.</p>
          </div>
          <div className="price-card">
            <h3>Nábytek na míru</h3>
            <p>individuální kalkulace</p>
            <p className="card-desc">Stoly, lavice, postele, skříně dle vašich představ.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;

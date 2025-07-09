import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-title">Nabízené služby</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Pergoly a přístřešky</h3>
            <p>Výroba a montáž dřevěných pergol, garážových stání a zastřešení teras.</p>
          </div>
          <div className="service-card">
            <h3>Zahradní altány</h3>
            <p>Stavba altánků a zahradních domků na klíč, včetně střechy a nátěru.</p>
          </div>
          <div className="service-card">
            <h3>Nábytek na míru</h3>
            <p>Stoly, lavice, skříně a další nábytek vyrobený přesně podle přání klienta.</p>
          </div>
          <div className="service-card">
            <h3>Rekonstrukce dřeva</h3>
            <p>Obnova starých dřevěných konstrukcí, podlah nebo plotů.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Moje práce</h2>
        <div className="portfolio-grid">
          {/* Ukázky projektů */}
          <div className="portfolio-item">
            <img src="/public/pergola.webp" alt="Pergola" />
            <p>Pergola na míru</p>
          </div>
          <div className="portfolio-item">
            <img src="/public/altan.webp" alt="Altánek" />
            <p>Zahradní altán</p>
          </div>
          <div className="portfolio-item">
            <img src="/public/stul.webp" alt="Nábytek" />
            <p>Rustikální stůl</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

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
            <img src="/pergola.webp" alt="Pergola" />
            <p>Pergola na míru</p>
          </div>
          <div className="portfolio-item">
            <img src="/altan.webp" alt="Altánek" />
            <p>Zahradní altán</p>
          </div>
          <div className="portfolio-item">
            <img src="/stul.webp" alt="Nábytek" />
            <p>Rustikální nábytek</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

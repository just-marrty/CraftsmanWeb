import React from 'react';
import './Footer.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Martin Novák – Všechna práva vyhrazena.</p>
        <p>
          Kontakt: <a href="mailto:martin@example.com">martin@example.com</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

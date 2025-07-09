import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">O mně</h2>
        <p className="about-text">
          Jmenuji se Martin Novák a řemeslu se věnuji více než 15 let. Specializuji se na tesařské a truhlářské práce – od
          pergol, altánků a přístřešků až po nábytek na míru. Věřím v poctivou ruční práci, kvalitní materiály a osobní
          přístup ke každému zákazníkovi.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

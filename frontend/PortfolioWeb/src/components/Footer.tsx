import React, { useState } from 'react';
import './Footer.css';

const FooterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>
            Kontakt: <a href="mailto:martin@example.com">martin@example.com</a>
          </p>
          <p>
            Telefon: <a href="tel:+420123456789">+420 123 456 789</a>
          </p>
          <p>
            <button 
              onClick={openModal} 
              className="privacy-link"
              aria-label="Zásady ochrany soukromí"
            >
              Zásady ochrany soukromí
            </button>
          </p>
          <p>© {new Date().getFullYear()} Web&Apps by <a href="https://www.moje-webovka.cz/" target="_blank" rel="noopener noreferrer">just_marrty</a></p>
        </div>
      </footer>

      {/* Modální okno */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Zásady ochrany soukromí</h2>
              <button 
                onClick={closeModal} 
                className="modal-close"
                aria-label="Zavřít"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <h3>Kdo jsme</h3>
              <p>Tato webová stránka slouží k prezentaci služeb řemeslníka. Vaše soukromí bereme vážně a dbáme na ochranu vašich osobních údajů.</p>

              <h3>Jaké údaje shromažďujeme</h3>
              <p>Prostřednictvím kontaktního formuláře můžete poskytnout následující údaje:</p>
              <ul>
                <li>Jméno</li>
                <li>E-mailová adresa</li>
                <li>Zpráva (text, který sami napíšete)</li>
              </ul>
              <p>Tyto údaje slouží výhradně ke zodpovězení vašeho dotazu nebo navázání spolupráce.</p>

              <h3>Jak jsou údaje odesílány</h3>
              <p>Formulář je zprostředkován službou Formspree (formspree.io), která zajišťuje bezpečné odesílání zpráv z webové stránky na náš e-mail.</p>
              <p>Více o ochraně osobních údajů u Formspree najdete zde: <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">https://formspree.io/legal/privacy-policy/</a></p>

              <h3>S kým údaje sdílíme</h3>
              <p>Vaše údaje nesdílíme s žádnou třetí stranou mimo poskytovatele kontaktního formuláře (Formspree), který zajišťuje bezpečný přenos dat.</p>

              <h3>Jak dlouho údaje uchováváme</h3>
              <p>Vaše údaje nejsou uloženy na tomto webu. Uchováváme pouze e-maily přijaté prostřednictvím formuláře, a to po dobu nezbytně nutnou ke komunikaci s vámi.</p>

              <h3>Vaše práva</h3>
              <p>Máte právo:</p>
              <ul>
                <li>požádat o informaci, jaké údaje o vás uchováváme,</li>
                <li>požádat o jejich opravu nebo výmaz.</li>
              </ul>
              <p>V případě dotazů nás kontaktujte přímo prostřednictvím kontaktního formuláře.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterSection;

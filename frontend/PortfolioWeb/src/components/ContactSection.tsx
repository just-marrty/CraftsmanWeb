import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Kontaktujte mě</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/your_form_id"  // <- nahradíš vlastním ID
          method="POST"
        >
          <input type="text" name="name" placeholder="Vaše jméno" required />
          <input type="email" name="email" placeholder="Váš e-mail" required />
          <textarea name="message" placeholder="Zpráva" rows={5} required></textarea>
          <button type="submit" className="btn-primary">Odeslat</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

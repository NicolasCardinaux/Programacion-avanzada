import React from 'react';
import logo from '../assets/icons/batata.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#linkedin" className="footer-link">LinkedIn</a>
          <a href="#crunchbase" className="footer-link">Crunchbase</a>
          <a href="#hackernews" className="footer-link">Hackernews</a>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Logo Batata" />
          <p className="footer-text">Batatabit 2024</p>
        </div>
      </div>
      <p className="footer-text">© 2024 Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

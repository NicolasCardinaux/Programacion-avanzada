import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../assets/logo.png'; 
import '../index.css'; 

const Footer = () => {
  const navigate = useNavigate(); 

  // Función para redirigir al usuario a la página principal y hacer scroll al inicio
  const handleHomeRedirect = () => {
    navigate('/'); 
    window.scrollTo(0, 0); 
  };

  return (
    <footer className="footer">
      <hr className="footer__separator" /> 
      <div className="footer__top">
        <div className="footer__info">
          <Link to="/" className="footer__title-button">
            <img src={logo} alt="Logo" className="footer__logo" /> 
            <span>Style & Tech</span> 
          </Link>
          <p className="footer__location">Concepción del Uruguay, Entre Ríos, Argentina</p> 
        </div>
        
        <div className="footer__links">
          <ul className="footer__link-list">
            <li>
              <button onClick={handleHomeRedirect} className="footer__link-button">
                Tienda 
              </button>
            </li>
            <li>
              <Link to="/quienes-somos" className="footer__link-button">
                ¿Quiénes somos?
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <p>2024 Style & Tech. Todos los derechos reservados</p> 
      </div>
    </footer>
  );
};

export default Footer;

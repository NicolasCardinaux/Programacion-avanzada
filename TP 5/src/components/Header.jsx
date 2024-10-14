import React from 'react';
import logo from '../assets/imgs/logo.svg';
import downArrow from '../assets/icons/down-arrow.svg'; 

const Header = ({ planSectionRef }) => { 
  const scrollToPlans = () => {
    planSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <img src={logo} alt="Logo de Batabit" />
      <div className="header--title-container">
        <h1>La próxima revolución en el intercambio de criptomonedas</h1>
        <p>Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
        <button onClick={scrollToPlans} className="header--button">
          Conoce Nuestros Planes 
          <span className="arrow-icon" style={{ backgroundImage: `url(${downArrow})` }}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

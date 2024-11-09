import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import logo from '../assets/logo.png';
import { FaUser, FaSearch } from 'react-icons/fa';

const Header = ({ onSearch, balance }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/?search=${searchTerm}`);
    }
  };

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__logo" onClick={redirectToHome} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo ImportFunko" className="header__logo-img" />
        <h1 className="header__title">Style & Tech</h1>
      </div>

      <div className="header__search">
        <input 
          type="text" 
          placeholder="Buscar" 
          className="header__search-input" 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="header__search-button" onClick={handleSearchClick}>
          <FaSearch />
        </button>
      </div>

      {/* Contenedor para saldo y usuario */}
      <div className="header__balance-container">
        <div className="header__balance">
          Saldo: ${balance.toFixed(2)} USD
        </div>

        <div className="header__user-icon">
          <FaUser />
        </div>
      </div>
    </header>
  );
};

export default Header;

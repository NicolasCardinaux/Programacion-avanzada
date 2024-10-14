import React from 'react';
import bitcoinImg from '../assets/imgs/Bitcoin.svg';

const ExchangeSection = () => {
  return (
    <section className="main-exchange-container">
      <div className="backgroundImg" style={{ backgroundImage: `url(${bitcoinImg})` }}></div>
      <div className="main-exchange-container--title">
        <h2>Visibilizamos todas las tasas de cambio.</h2>
        <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
      </div>
    </section>
  );
};

export default ExchangeSection;

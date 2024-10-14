import React from 'react';
import bitcoinImage from '../assets/imgs/bitcoinbaby2x.jpg';

const KnowItToday = () => {
  return (
    <section className="bitcoin-img-container">
      <h2>Conócelo hoy</h2>
      <img src={bitcoinImage} alt="Bitcoin" />
    </section>
  );
};

export default KnowItToday;

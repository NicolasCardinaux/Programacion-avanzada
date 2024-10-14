import React from 'react';
import clockIcon from '../assets/icons/clock.svg';
import eyeIcon from '../assets/icons/eye.svg';
import dollarIcon from '../assets/icons/dollar-sign.svg';
import checkIcon from '../assets/icons/check-circle.svg';
import ProductCard from './ProductCard';

const features = [
  {
    icon: clockIcon,
    title: 'Tiempo real',
    description: 'Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.',
  },
  {
    icon: eyeIcon,
    title: 'No hay tasas escondidas',
    description: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.',
  },
  {
    icon: dollarIcon,
    title: 'Compare monedas',
    description: 'No más rumores, con Batabit sabrás el valor real de cada moneda en el mercado actual.',
  },
  {
    icon: checkIcon,
    title: 'Información confiable',
    description: 'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.',
  },
];

const ProductDetailSection = () => {
  return (
    <section className="main-product-detail">
      <span className="product-detail--batata-logo"></span>
      <div className="product-detail--title">
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </div>

      <section className="products-cards-container">
        {features.map((feature, index) => (
          <ProductCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </section>
  );
};

export default ProductDetailSection;

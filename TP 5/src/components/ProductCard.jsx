import React from 'react';

const ProductCard = ({ icon, title, description }) => {
  return (
    <article className="product-detail--card">
      <img src={icon} alt={title.toLowerCase()} />
      <p className="product--card-title">{title}</p>
      <p className="product--card-body">{description}</p>
    </article>
  );
};

export default ProductCard;

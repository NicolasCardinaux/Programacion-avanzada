import React, { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom"; 

// Componente ProductDetail que muestra los detalles de un producto individual
const ProductDetail = ({ balance, setBalance }) => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null); 
  const [quantity, setQuantity] = useState(1); 

  // useEffect para cargar los detalles del producto cuando se monta el componente o cambia el ID
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`) 
      .then((response) => response.json()) 
      .then((data) => setProduct(data)); 
  }, [id]); 

  // Si no hay un producto cargado, muestra un mensaje de "Cargando..."
  if (!product) return <div>Cargando...</div>;

  // Función para manejar el cambio de cantidad, asegurando que la cantidad no baje de 1
  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount)); 
  };

  // Función para manejar la compra
  const handlePurchase = () => {
    const totalCost = product.price * quantity; 
    if (balance >= totalCost) {
      setBalance(balance - totalCost);
      alert("Compra exitosa"); 
      navigate('/'); 
    } else {
      alert("Saldo insuficiente para completar la compra"); 
    }
  };

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <p className="product-category">Categoría: {product.category}</p>
          <p className="product-price">Precio: ${product.price.toFixed(2)}</p>
          <p className="product-stock">Stock: {product.rating.count}</p>
          <div className="product-quantity">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <input type="text" value={quantity} readOnly /> 
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <button className="buy-button" onClick={handlePurchase}>Comprar</button>
        </div>
      </div>
      <hr className="full-width-line" />
      <div className="product-description">
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

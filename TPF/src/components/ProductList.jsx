import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import "../index.css"; 

// Componente ProductList que maneja la lista de productos, filtros y paginación
const ProductList = ({ filters, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // useEffect para cargar los productos desde la API cuando el componente se monta
  useEffect(() => {
    fetch("https://fakestoreapi.com/products") 
      .then((response) => response.json()) 
      .then((data) => {
        setProducts(data);
      });
  }, []); 

  // useEffect que se ejecuta cuando cambian los filtros o el término de búsqueda
  useEffect(() => {
    let filtered = [...products]; 

    // Aplica el filtro por categoría, si existe
    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    // Aplica el filtro por precio, si existe
    if (filters.price) {
      filtered = filtered.filter(
        (product) => product.price <= filters.price
      );
    }

    // Aplica el filtro por término de búsqueda, si existe
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Actualiza los productos filtrados y reinicia la página a 1
    setFilteredProducts(filtered);
    setCurrentPage(1); 
  }, [filters, products, searchTerm]); 

  // Cálculo de la paginación
  const indexOfLastProduct = currentPage * productsPerPage; 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; 
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct); 

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Filtra las páginas que realmente contienen productos
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1).filter(page => {
    const firstProductIndex = (page - 1) * productsPerPage;
    const lastProductIndex = page * productsPerPage;
    return filteredProducts.slice(firstProductIndex, lastProductIndex).length > 0;
  });

  return (
    <div>
      <div className="product-list">
        {currentProducts.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          currentProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>Precio: ${product.price.toFixed(2)} USD</p>
            </Link>
          ))
        )}
      </div>
      <div className="pagination">
        {pageNumbers.length > 0 && (
          pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)} // Cambia de página cuando se hace clic
              disabled={currentPage === page} // Deshabilita el botón si ya estamos en la página actual
            >
              {page}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;

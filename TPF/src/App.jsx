import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // BrowserRouter para el enrutamiento
import Header from "./components/Header";  
import Banner from "./components/Banner"; 
import Footer from "./components/Footer";  
import Filter from "./components/Filter";  
import ProductList from "./components/ProductList";  
import ProductDetail from "./components/ProductDetail";  
import AboutUs from "./components/AboutUs";  

// Definición de las categorías de productos que se usarán en los filtros
const categories = ["Electrónica", "Joyería", "Ropa de hombres", "Ropa de mujeres"];

 // Componente principal de la aplicación, que envuelve todo en el Router para manejar las rutas
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  // Estado para almacenar los filtros aplicados en la lista de productos
  const [filters, setFilters] = useState({});
  // Estado para almacenar el término de búsqueda ingresado por el usuario
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para almacenar el saldo del usuario, recuperado desde localStorage o con un valor inicial
  const [balance, setBalance] = useState(() => {
    // Recupera el saldo desde localStorage, si existe, o usa un saldo inicial de 10000
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? JSON.parse(savedBalance) : 10000;
  });

  // Hook para obtener la ruta actual de la aplicación
  const location = useLocation();

  // Función que maneja los cambios en los filtros aplicados
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Función que maneja el término de búsqueda ingresado por el usuario
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Hook que guarda el saldo en localStorage cada vez que el saldo cambia
  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  return (
    <>
      <Header onSearch={handleSearch} balance={balance} />
      {(location.pathname === "/" || location.pathname === "/quienes-somos") && <Banner />}
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: "flex" }}>
              <Filter categories={categories} onFilterChange={handleFilterChange} />
              <ProductList filters={filters} searchTerm={searchTerm} />
            </div>
          }
        />
        
        {/* Ruta para ver los detalles de un producto específico */}
        <Route
          path="/product/:id"
          element={<ProductDetail balance={balance} setBalance={setBalance} />}
        />
        
        {/* Ruta para la página "Quiénes somos" */}
        <Route path="/quienes-somos" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App; 

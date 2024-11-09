import React, { useState } from 'react'; // Importa React y el hook useState
import '../index.css'; // Asegúrate de tener esta importación para los estilos

// Componente para filtrar productos por categoría y precio
const Filter = ({ categories, onFilterChange }) => {
    // Estados para manejar la categoría seleccionada y el precio máximo
    const [selectedCategory, setSelectedCategory] = useState(''); 
    const [maxPrice, setMaxPrice] = useState('');

    // Mapeo de categorías en español a inglés para la API
    const categoryMapping = {
        "Electrónica": "electronics",
        "Joyería": "jewelery",
        "Ropa de hombres": "men's clothing",
        "Ropa de mujeres": "women's clothing"
    };

    // Función que maneja la aplicación de filtros
    const handleApply = () => {
        onFilterChange({
            category: selectedCategory ? categoryMapping[selectedCategory] : '', // Aplica el filtro por categoría si se ha seleccionado alguna
            price: maxPrice // Aplica el filtro por precio máximo
        });
    };

    return (
        <div className="filter">
            <h3>Filtrar</h3>
            {/* Filtro de precio */}
            <div className="filter-section">
                <label>Precio</label>
                <input
                    type="number"
                    placeholder="Precio máximo"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)} // Actualiza el estado del precio máximo
                    className="filter-input"
                />
            </div>
            {/* Filtro de categoría */}
            <div className="filter-section">
                <label>Categoría</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)} // Actualiza el estado de la categoría seleccionada
                    className="filter-select"
                >
                    <option value="">Todas</option> {/* Opción para no seleccionar ninguna categoría */}
                    {categories.map((category) => ( // Mapea las categorías y las muestra en el select
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {/* Botón para aplicar los filtros */}
            <button onClick={handleApply} className="filter-button">Aplicar</button>
        </div>
    );
};

export default Filter; // Exporta el componente Filter

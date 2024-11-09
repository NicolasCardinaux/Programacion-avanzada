import React from 'react'; // Importa React para crear componentes
import bannerImage from '../assets/banner.jpg';  // Importa la imagen del banner
import '../index.css';  // Importa el archivo CSS para los estilos

// Componente para mostrar el banner en la página
function Banner() {
  return (
    <div className="banner"> {/* Contenedor principal del banner */}
      <img 
        src={bannerImage} // Ruta de la imagen que se va a mostrar
        alt="Banner de ecommerce"  // Texto alternativo que describe la imagen
        className="banner__image"  // Clase CSS para darle estilo a la imagen
      />
    </div>
  );
}

export default Banner;  // Exporta el componente Banner para que pueda ser utilizado en otros archivos

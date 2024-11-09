import React from 'react';  // Importa React para crear componentes
import '../index.css';  // Importa el archivo CSS para los estilos

// Componente AboutUs que muestra información sobre la tienda
function AboutUs() {
  return (
    <div className="about-us-container"> {/* Contenedor principal de la sección "Quienes somos" */}
      <section className="about-us-section"> {/* Sección sobre la tienda */}
        <h2 className="about-us-subtitle">Quienes somos</h2> {/* Título de la sección */}
        <p className="about-us-text">
          Somos una tienda apasionada por la innovación y el estilo. Nos dedicamos a ofrecer productos de tecnología y moda que no solo cumplen con las últimas tendencias, sino que también mejoran tu vida diaria. Nuestro compromiso es brindarte una experiencia de compra única, con productos de alta calidad y un servicio al cliente excepcional.
        </p>
      </section>

      <section className="about-us-section"> {/* Sección sobre la historia de la tienda */}
        <h2 className="about-us-subtitle">Historia de la tienda</h2> {/* Título de la sección */}
        <p className="about-us-text">
          Nuestra tienda nació de la visión de combinar lo mejor de la tecnología y el estilo en un solo lugar. Desde nuestros humildes comienzos, hemos crecido gracias a la confianza de nuestros clientes y nuestra dedicación a la excelencia. Hoy, seguimos comprometidos con nuestra misión de ofrecer productos innovadores y elegantes que marcan la diferencia en la vida de nuestros clientes.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;  // Exporta el componente AboutUs para que pueda ser utilizado en otros archivos

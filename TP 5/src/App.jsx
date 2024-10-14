import React, { useRef } from 'react'; // Importa useRef
import Header from './components/Header';
import ExchangeSection from './components/ExchangeSection';
import TableSection from './components/TableSection';
import ProductDetailSection from './components/ProductDetailSection';
import PlanSection from './components/PlanSection';
import Footer from './components/Footer';
import KnowItToday from './components/KnowItToday'; 
import './index.css';

function App() {
  const planSectionRef = useRef(null); // Crea una referencia para PlanSection

  return (
    <div className="App">
      <Header planSectionRef={planSectionRef} /> {/* Pasa la referencia al Header */}
      <main>
        <ExchangeSection />
        <TableSection />
        <ProductDetailSection />
        <KnowItToday /> 
        <PlanSection ref={planSectionRef} /> {/* Asigna la referencia a PlanSection */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

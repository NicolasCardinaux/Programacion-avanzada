import React, { useRef } from 'react';
import Header from './components/Header';
import ExchangeSection from './components/ExchangeSection';
import TableSection from './components/TableSection';
import ProductDetailSection from './components/ProductDetailSection';
import PlanSection from './components/PlanSection';
import Footer from './components/Footer';
import KnowItToday from './components/KnowItToday'; 
import './index.css';

function App() {
  const planSectionRef = useRef(null);

  return (
    <div className="App">
      <Header planSectionRef={planSectionRef} /> {}
      <main>
        <ExchangeSection />
        <TableSection />
        <ProductDetailSection />
        <KnowItToday /> 
        <PlanSection ref={planSectionRef} /> {}
      </main>
      <Footer />
    </div>
  );
}

export default App;

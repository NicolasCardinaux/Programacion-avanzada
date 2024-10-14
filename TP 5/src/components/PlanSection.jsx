import React, { useState, useEffect, forwardRef } from 'react';

const PlanSection = forwardRef((_, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  
  const plans = [
    {
      name: "Pago Estándar",
      price: "$49",
      description: "Ideal para quienes necesitan un plan intermedio.",
      recommended: false,
    },
    {
      name: "Pago Anual",
      price: "$99",
      discount: "Ahorra $129 comparado el plan anual.",
      recommended: true,
    },
    {
      name: "Pago Mensual",
      price: "$15",
      description: "Pago mensual, para poder exprimentar a tu placer.",
      recommended: false,
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevPlan = () => {
    setCurrentPlanIndex((prevIndex) => (prevIndex === 0 ? plans.length - 1 : prevIndex - 1));
  };

  const handleNextPlan = () => {
    setCurrentPlanIndex((prevIndex) => (prevIndex === plans.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="plan-section" ref={ref}> {}
      <p className="plan-title">Escoge el plan que mejor se ajuste a ti.</p>
      <p className="plan-subtitle">Cualquier plan te da acceso completo a nuestra plataforma.</p>

      {}
      {!isMobile && (
        <div className="plan-container">
          <div className="plans">
            {plans.map((plan, index) => (
              <div key={index} className={`plan-box ${plan.recommended ? 'recommended' : ''}`}>
                {plan.recommended && <span className="recommended-label">Recomendado</span>}
                <p className="plan-name">{plan.name}</p>
                <p className="plan-price">{plan.price}</p>
                <p className="plan-description">{plan.recommended ? plan.discount : plan.description}</p>
                <button className="plan-button">Escoge este ➜</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {}
      {isMobile && (
        <div className="mobile-plan-container">
          <button className="nav-button" onClick={handlePrevPlan}>◀</button>
          <div className="mobile-plan-box">
            <div className={`plan-box ${plans[currentPlanIndex].recommended ? 'recommended' : ''}`}>
              {plans[currentPlanIndex].recommended && <span className="recommended-label">Recomendado</span>}
              <p className="plan-name">{plans[currentPlanIndex].name}</p>
              <p className="plan-price">{plans[currentPlanIndex].price}</p>
              <p className="plan-description">
                {plans[currentPlanIndex].recommended ? plans[currentPlanIndex].discount : plans[currentPlanIndex].description}
              </p>
              <button className="plan-button">Escoge este ➜</button>
            </div>
          </div>
          <button className="nav-button" onClick={handleNextPlan}>▶</button>
        </div>
      )}
    </section>
  );
});

export default PlanSection;

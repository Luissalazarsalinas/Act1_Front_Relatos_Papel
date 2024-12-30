import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing">
      <div className="landing__content">
        <h1>Bienvenido a Relatos de papel</h1>
        <p>Tu librería online de confianza</p>
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/home')}
        >
          Entrar ahora
        </button>
      </div>
    </div>
  );
};

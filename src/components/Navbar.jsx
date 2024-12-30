import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './cartContext';
import { Cart } from './Cart';

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">Relatos de papel</Link>
        <div className="d-flex align-items-center">
          <form className="d-flex me-3">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Buscar productos"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
          <div className="position-relative">
            <button 
              className="btn btn-primary"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              Carrito ({cart.length})
            </button>
            {isCartOpen && <Cart />}
          </div>
        </div>
      </div>
    </nav>
  );
};

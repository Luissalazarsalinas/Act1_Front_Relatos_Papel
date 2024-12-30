import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './cartContext';

export const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.cover} alt={item.title} className="cart-item__image" />
            <div className="cart-item__details">
              <h6>{item.title}</h6>
              <p>${item.price}</p>
              <button 
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-total">Total: ${total}</div>
        <button 
          className="btn btn-success w-100"
          onClick={() => navigate('/checkout')}
          disabled={cart.length === 0}
        >
          Proceder al pago
        </button>
      </div>
    </div>
  );
};
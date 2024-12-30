import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './cartContext';

export const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Pedido realizado con éxito!');
    clearCart();
    navigate('/home');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="checkout">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="checkout__form-container">
              <h2>Información de pago</h2>
              <form onSubmit={handleSubmit} className="checkout__form">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Nombre completo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="col-12">
                    <label className="form-label">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label">Ciudad</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label">Código postal</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="col-12">
                    <label className="form-label">Número de tarjeta</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label">Fecha de expiración</label>
                    <input
                      type="text"
                      className="form-control"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100 mt-4"
                  disabled={cart.length === 0}
                >
                  Confirmar pedido
                </button>
              </form>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="checkout__summary">
              <h3>Resumen del pedido</h3>
              <div className="checkout__items">
                {cart.map(item => (
                  <div key={item.id} className="checkout__item">
                    <img 
                      src={item.cover} 
                      alt={item.title} 
                      className="checkout__item-image"
                    />
                    <div className="checkout__item-details">
                      <h6>{item.title}</h6>
                      <p>${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="checkout__total">
                <h4>Total: ${total.toFixed(2)}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
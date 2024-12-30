import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './cartContext';

export const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
        <img src={book.cover} alt={book.title} className="book-card__image" />
      </Link>
      <div className="book-card__content">
        <h5 className="book-card__title">{book.title}</h5>
        <p className="book-card__author">{book.author}</p>
        <p className="book-card__price">${book.price}</p>
        <button 
          className="btn btn-primary"
          onClick={() => addToCart(book)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
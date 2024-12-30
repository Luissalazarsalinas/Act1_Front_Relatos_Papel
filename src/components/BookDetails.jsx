import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart} from './cartContext';

export  const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  // Mock book data - in a real app, this would come from an API
  const book = {
    id,
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    author: "J. R. R. Tolkien",
    price: 15.99,
    description: "",
    cover: "https://images.cdn3.buscalibre.com/fit-in/360x360/54/49/5449ba87a3e457a22dd6d0972b5c261e.jpg",
    isbn: "978-3-16-148410-0",
    publisher: "	George Allen & Unwin",
    publicationDate: "1954",
    pages: 423,
    language: "Español"
  };

  return (
    <div className="book-detail">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="book-detail__image-container">
              <img 
                src={book.cover} 
                alt={book.title} 
                className="book-detail__image"
              />
            </div>
          </div>
          
          <div className="col-md-8">
            <div className="book-detail__content">
              <h1 className="book-detail__title">{book.title}</h1>
              <h3 className="book-detail__author">por {book.author}</h3>
              
              <div className="book-detail__price-section">
                <span className="book-detail__price">${book.price}</span>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => addToCart(book)}
                >
                  Agregar al carrito
                </button>
              </div>
              
              <div className="book-detail__description">
                <h4>Descripción</h4>
                <p>{book.description}</p>
              </div>
              
              <div className="book-detail__specs">
                <h4>Detalles del producto</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>ISBN</th>
                      <td>{book.isbn}</td>
                    </tr>
                    <tr>
                      <th>Editorial</th>
                      <td>{book.publisher}</td>
                    </tr>
                    <tr>
                      <th>Fecha de publicación</th>
                      <td>{book.publicationDate}</td>
                    </tr>
                    <tr>
                      <th>Páginas</th>
                      <td>{book.pages}</td>
                    </tr>
                    <tr>
                      <th>Idioma</th>
                      <td>{book.language}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
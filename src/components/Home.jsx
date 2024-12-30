import React, { useState } from 'react';
import { useBookSearch } from '../hooks/useBookSearch';
import { BookCard } from './BookCart';
import { CategoryFilter} from './CategoryFilter';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { books, loading } = useBookSearch(searchTerm);

  const filteredBooks = selectedCategory === 'all' 
    ? books
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="home">
      <div className="home__filters">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      
      {loading ? (
        <div className="home__loading">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <div className="home__grid">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};
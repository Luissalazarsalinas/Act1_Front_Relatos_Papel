import React from 'react';

export const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  // Lista de categorías basada en la imagen de ejemplo
  const categories = [
    { id: 'all', name: 'Todas las categorías' },
    { id: 'literatura', name: 'Literatura y Ficción' },
    { id: 'psicologia', name: 'Psicología' },
    { id: 'misterio', name: 'Misterio y Suspenso' },
    { id: 'autoayuda', name: 'Auto Ayuda y Espiritualidad' },
    { id: 'ciencia', name: 'Ciencia Ficción' }
  ];

  return (
    <div className="category-filter">
      <h5 className="category-filter__title">Filtrar por:</h5>
      <div className="category-filter__content">
        <div className="list-group">
          {categories.map(category => (
            <button
              key={category.id}
              type="button"
              className={`list-group-item list-group-item-action ${
                selectedCategory === category.id ? 'active' : ''
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
              {selectedCategory === category.id && (
                <span className="badge bg-primary float-end">
                  <i className="bi bi-check"></i>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
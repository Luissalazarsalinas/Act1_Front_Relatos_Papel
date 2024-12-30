import { useState, useEffect } from 'react';

export const useBookSearch = (searchTerm) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      // Simulating API call with mock data
      const mockBooks = [
        {
          id: 1,
          title: "El Señor de los Anillos: La Comunidad del Anillo",
          author: "J. R. R. Tolkien",
          price: 15.99,
          cover: "https://images.cdn3.buscalibre.com/fit-in/360x360/54/49/5449ba87a3e457a22dd6d0972b5c261e.jpg"
        },
        {
          id: 2,
          title: "El Señor de los Anillos: Las Dos Torres",
          author: "J. R. R. Tolkien",
          price: 25.99,
          cover: "https://planetadelibrosco0.cdnstatics.com/usuaris/libros/fotos/364/m_libros/363465_portada_el-senor-de-los-anillos-2-las-dos-torres_j-r-r-tolkien_202207271308.jpg"
        },
        {
          id: 3,
          title: "El Señor de los Anillos: El Retorno del Rey",
          author: "J. R. R. Tolkien",
          price: 35.99,
          cover: "https://edicioneshispanicas.com/wp-content/uploads/WLbYLpaFM0al5Uunmom2Vr8w5vWVhM-metaRGlzZcOxbyBzaW4gdMOtdHVsbyAoMTUpLnBuZw-.png"
        },
        {
          id: 4,
          title: "El Silmarillion",
          author: "J. R. R. Tolkien",
          price: 45.99,
          cover: "https://elbibliotecologo.com/storage/media/4uUOexG5KmbcpOBcyMpyLNd45JesANw8lCKYCtme.png"
        },
        {
          id: 5,
          title: "El hobbit",
          author: "J. R. R. Tolkien",
          price: 20.99,
          cover: "https://israelcarlos.wordpress.com/wp-content/uploads/2015/05/the-hobbit-book-cover1.jpg "
        },
        {
          id: 6,
          title: "The Witcher : El ultimo deseo",
          author: "Andrzej Sapkowski",
          price: 30.99,
          cover: "https://0.academia-photos.com/attachment_thumbnails/55687348/mini_magick20190114-13702-zaxjv.png?1547461132"
        },
        {
          id: 7,
          title: "The Witcher : La espada del destino",
          author: "Andrzej Sapkowski",
          price: 18.99,
          cover: "https://www.antartica.cl/media/catalog/product/9/7/9788498891058_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg"
        },
        {
          id: 8,
          title: "The Witcher : La Sangre de los Elfos",
          author: "Andrzej Sapkowski",
          price: 15.99,
          cover: "https://www.antartica.cl/media/catalog/product/9/7/9788498891065_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg"
        },
      ];

      const filteredBooks = searchTerm
        ? mockBooks.filter(book => 
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : mockBooks;

      setBooks(filteredBooks);
      setLoading(false);
    };

    fetchBooks();
  }, [searchTerm]);

  return { books, loading };
};

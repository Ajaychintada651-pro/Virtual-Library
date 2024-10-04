import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const { books } = useContext(BookContext);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (searchQuery) => {
    const lowerQuery = searchQuery.toLowerCase();
    const result = books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery) ||
        book.genre.toLowerCase().includes(lowerQuery)
    );
    setFilteredBooks(result);
  };

  return (
    <div className="home-page container">
      <h1 className="home-title">Virtual Book Library</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default Home;

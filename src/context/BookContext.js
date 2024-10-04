import React, { createContext, useState } from 'react';
import bookData from '../services/bookData';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books] = useState(bookData.books); // Initialize books from the imported data
  const [myLibrary, setMyLibrary] = useState([]); // State for the user's library


  // Function to add a book to the library
  const addToLibrary = (book) => {
    setMyLibrary((prevLibrary) => {
      // Check if the book is already in the library
      if (prevLibrary.some((b) => b.id === book.id)) {
        alert('This book is already in your library!'); // Alert if the book exists
        return prevLibrary; // Return the previous state if the book already exists
      }
      return [...prevLibrary, book]; // Add the new book to the library
    });
  };

  // Function to remove a book from the library
  const removeFromLibrary = (id) => {
    setMyLibrary((prevLibrary) => prevLibrary.filter((book) => book.id !== id)); // Filter out the book with the specified ID
  };

  return (
    <BookContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </BookContext.Provider>
  );
};

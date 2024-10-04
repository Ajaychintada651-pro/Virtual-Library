import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyLibrary from './pages/MyLibrary';
import { BookProvider } from './context/BookContext';
import './App.css';

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/my-library" element={<MyLibrary />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;

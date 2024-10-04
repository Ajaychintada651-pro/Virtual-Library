import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { BookContext } from '../context/BookContext';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const { books, addToLibrary } = useContext(BookContext);
  const book = books.find((book) => book.id === parseInt(id));

  const handleAddToLibrary = () => {
    addToLibrary(book); // Add book to library
    navigate('/my-library'); // Redirect to My Library page
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '10px',
          color: '#7962bd',
        }}
      >
        {book.title}
      </h1>
      <p
        style={{
          fontSize: '1.2rem',
          color: '#333',
          lineHeight: '1.5',
          marginBottom: '20px',
        }}
      >
        {book.description}
      </p>
      <button
        onClick={handleAddToLibrary} // Call the new function
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          color: '#fff',
          backgroundColor: '#7962bd',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s, transform 0.2s',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#6a4f99'; // Darken color on hover
          e.target.style.transform = 'scale(1.05)'; // Scale effect on hover
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#7962bd'; // Reset color on mouse out
          e.target.style.transform = 'scale(1)'; // Reset scale
        }}
      >
        Add to My Library
      </button>
    </div>
  );
};

export default BookDetails;

import { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const MyLibrary = () => {
  const { myLibrary, removeFromLibrary } = useContext(BookContext); // Don't forget to add removeFromLibrary
  console.log(myLibrary);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#7962bd' }}>My Library</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {myLibrary.map((book) => (
          <li
            key={book.id}
            style={{
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h2 style={{ margin: '0', fontSize: '1.5rem', color: '#333' }}>{book.title}</h2>
            <p style={{ margin: '5px 0 15px', fontSize: '1rem', color: '#555' }}>{book.author}</p>
            <button
              onClick={() => removeFromLibrary(book.id)} // Call the remove function
              style={{
                padding: '8px 15px',
                color: '#fff',
                backgroundColor: '#ff5733',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e74c3c')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff5733')}
            >
              Remove from Library
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyLibrary;

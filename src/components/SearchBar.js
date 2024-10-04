import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
  type="text"
  placeholder="Search books by title, author, or genre..."
  value={query}
  onChange={handleChange}
  style={{
    width: '100%',
    padding: '10px 15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  }}
  onFocus={(e) => {
    e.target.style.borderColor = '#7962bd'; // Change border color on focus
    e.target.style.boxShadow = '0 0 5px rgba(121, 98, 189, 0.5)'; // Add shadow on focus
  }}
  onBlur={(e) => {
    e.target.style.borderColor = '#ccc'; // Reset border color on blur
    e.target.style.boxShadow = 'none'; // Remove shadow on blur
  }}
/>

    </div>
  );
};

export default SearchBar;

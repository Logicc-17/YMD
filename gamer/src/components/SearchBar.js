import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a game..."
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '300px',
          marginRight: '10px',
        }}
      />
      <button type="submit" style={{ padding: '8px 16px', fontSize: '16px' }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;

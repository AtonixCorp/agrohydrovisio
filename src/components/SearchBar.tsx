// Searchbar.tsx
import React, { useState } from 'react';
import './SearchBar.css'; // Import the associated CSS file

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Handle search logic (e.g., send query to the server)
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

import React from 'react';

// Define Props for SearchBar component
interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-wrapper" style={{ marginBottom: '15px' }}>
      {/* Input element for filtering job applications by company name or position */}
      <input
        type="text"
        placeholder="Search by company or position..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="form-input"
        style={{
          width: '100%',
          padding: '10px 14px',
          borderRadius: '6px',
          border: '1px solid #4a5568',
          backgroundColor: '#2d3748',
          color: '#ffffff',
          fontSize: '15px',
          outline: 'none'
        }}
      />
    </div>
  );
};
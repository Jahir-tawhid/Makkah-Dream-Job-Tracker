import React from 'react';

// Define Props for JobFilter Component
interface JobFilterProps {
  currentFilter: string;
  onFilterChange: (status: string) => void;
}

export const JobFilter: React.FC<JobFilterProps> = ({ currentFilter, onFilterChange }) => {
  const filterOptions = ['All', 'Applied', 'Interviewing', 'Offered', 'Rejected'];

  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {filterOptions.map((status) => (
        <button
          key={status}
          onClick={() => onFilterChange(status)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: currentFilter === status ? '#3182ce' : '#2d3748',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: currentFilter === status ? 'bold' : 'normal',
            transition: 'all 0.2s ease-in-out'
          }}
        >
          {status}
        </button>
      ))}
    </div>
  );
};
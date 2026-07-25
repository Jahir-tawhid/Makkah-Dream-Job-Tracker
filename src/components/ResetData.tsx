import React from 'react';

interface ResetDataProps {
  onReset: () => void;
}

export const ResetData: React.FC<ResetDataProps> = ({ onReset }) => {
  const handleResetClick = () => {
    if (window.confirm('Are you sure you want to reset all data to default initial jobs?')) {
      onReset();
    }
  };

  return (
    <button onClick={handleResetClick} className="action-btn reset-btn">
      Reset All Jobs to Default
    </button>
  );
};
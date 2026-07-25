import React from 'react';
import type { Job } from '../types/types';

interface ExportDataProps {
  jobs: Job[];
}

export const ExportData: React.FC<ExportDataProps> = ({ jobs }) => {
  const handleExport = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jobs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'makkah_job_applications.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <button onClick={handleExport} className="action-btn export-btn">
      📥 Export Data (JSON)
    </button>
  );
};
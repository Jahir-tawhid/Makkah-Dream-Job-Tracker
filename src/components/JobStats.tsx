import React from 'react';
import type { Job } from '../types/types';

interface JobStatsProps {
  jobs: Job[];
}

export const JobStats: React.FC<JobStatsProps> = ({ jobs }) => {
  // Status calculations
  const totalApplied = jobs.filter((job) => job.status === 'Applied').length;
  const totalInterviewing = jobs.filter((job) => job.status === 'Interviewing').length;
  const totalOffered = jobs.filter((job) => job.status === 'Offered').length;
  const totalRejected = jobs.filter((job) => job.status === 'Rejected').length;

  // Extract unique active positions
  const uniquePositions = Array.from(
    new Set(jobs.map((job) => job.position.trim()).filter(Boolean))
  );

  return (
    <div style={{ marginBottom: '20px' }}>
      {/* Counters Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        <div style={{ backgroundColor: '#2d3748', padding: '10px', borderRadius: '6px' }}>
          <h3 style={{ color: '#4299e1', margin: 0 }}>{totalApplied}</h3>
          <small style={{ color: '#a0aec0' }}>Applied</small>
        </div>
        <div style={{ backgroundColor: '#2d3748', padding: '10px', borderRadius: '6px' }}>
          <h3 style={{ color: '#ecc94b', margin: 0 }}>{totalInterviewing}</h3>
          <small style={{ color: '#a0aec0' }}>Interviewing</small>
        </div>
        <div style={{ backgroundColor: '#2d3748', padding: '10px', borderRadius: '6px' }}>
          <h3 style={{ color: '#48bb78', margin: 0 }}>{totalOffered}</h3>
          <small style={{ color: '#a0aec0' }}>Offered</small>
        </div>
        <div style={{ backgroundColor: '#2d3748', padding: '10px', borderRadius: '6px' }}>
          <h3 style={{ color: '#f56565', margin: 0 }}>{totalRejected}</h3>
          <small style={{ color: '#a0aec0' }}>Rejected</small>
        </div>
      </div>

      {/* Available Positions Tags */}
      <div
        style={{
          backgroundColor: '#2d3748',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #4a5568'
        }}
      >
        <p style={{ margin: '0 0 8px 0', color: '#e2e8f0', fontSize: '14px' }}>
          <strong>Total Unique Positions ({uniquePositions.length}):</strong>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {uniquePositions.length > 0 ? (
            uniquePositions.map((position, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#4a5568',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
              >
                {position}
              </span>
            ))
          ) : (
            <span style={{ color: '#a0aec0', fontSize: '13px' }}>No active positions available.</span>
          )}
        </div>
      </div>
    </div>
  );
};
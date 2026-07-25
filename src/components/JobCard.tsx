import React from 'react';
import type { Job } from '../types/types';

interface JobCardProps {
  job: Job;
  onDeleteJob: (id: string) => void;
  onStatusChange: (id: string, status: Job['status']) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onDeleteJob, onStatusChange }) => {
  return (
    <div
      className="job-card"
      style={{
        backgroundColor: '#1a202c',
        border: '1px solid #2d3748',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '16px',
        textAlign: 'center',
        color: '#ffffff'
      }}
    >
      <h2 style={{ color: '#63b3ed', margin: '0 0 10px 0' }}>{job.position}</h2>
      <p style={{ margin: '5px 0' }}><strong>Company:</strong> {job.companyName}</p>
      <p style={{ margin: '5px 0' }}><strong>Location:</strong> {job.location}</p>

      {/* Status Selector */}
      <div style={{ margin: '15px 0' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Status:</label>
        <select
          value={job.status}
          onChange={(e) => onStatusChange(job.id, e.target.value as Job['status'])}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            backgroundColor: '#2d3748',
            color: '#ffffff',
            border: '1px solid #4a5568',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {job.salary && <p style={{ margin: '5px 0' }}><strong>Salary:</strong> {job.salary}</p>}

      {/* External Application Button */}
      {job.applyUrl && (
        <div style={{ margin: '15px 0' }}>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 18px',
              backgroundColor: '#38a169',
              color: '#ffffff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            🔗 Apply Now
          </a>
        </div>
      )}

      {/* Delete Button */}
      <button
        onClick={() => onDeleteJob(job.id)}
        style={{
          backgroundColor: '#e53e3e',
          color: '#ffffff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px',
          fontWeight: 'bold'
        }}
      >
        Delete Application
      </button>
    </div>
  );
};
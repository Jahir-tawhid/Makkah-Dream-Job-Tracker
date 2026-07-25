import React, { useState } from 'react';
import type { Job } from '../types/types';

interface AddJobFormProps {
  onAddJob: (job: Job) => void;
}

export const AddJobForm: React.FC<AddJobFormProps> = ({ onAddJob }) => {
  // Local state management for form inputs
  const [position, setPosition] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [appliedDate, setAppliedDate] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');
  const [applyUrl, setApplyUrl] = useState<string>('');

  // Auto-complete suggestion list for companies
  const companySuggestions: string[] = [
    'Google',
    'Microsoft',
    'Amazon',
    'Saudi Aramco',
    'Al Rajhi Bank',
    'STC',
    'PwC',
    'KPMG',
    'SABIC',
    'NEOM'
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!position || !companyName) {
      alert('Please fill in required fields: Position and Company Name');
      return;
    }

    // Create a new job record with unique ID
    const newJob: Job = {
      id: Date.now().toString(),
      position,
      companyName,
      location: location || 'Makkah',
      salary,
      status: 'Applied',
      appliedDate: appliedDate || new Date().toISOString(),
      deadline: deadline || undefined,
      applyUrl: applyUrl || undefined,
    };

    onAddJob(newJob);

    // Reset input fields
    setPosition('');
    setCompanyName('');
    setLocation('');
    setSalary('');
    setAppliedDate('');
    setDeadline('');
    setApplyUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-job-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Job Application</h2>

      {/* Position Field */}
      <div style={formGroupStyle}>
        <label htmlFor="position" style={labelStyle}>Position *</label>
        <input
          id="position"
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="e.g. Frontend Developer"
          style={inputStyle}
          required
        />
      </div>

      {/* Company Name Field with Auto-suggest Datalist */}
      <div style={formGroupStyle}>
        <label htmlFor="companyName" style={labelStyle}>Company Name *</label>
        <input
          id="companyName"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Type or select company..."
          list="company-suggestions"
          style={inputStyle}
          required
        />
        <datalist id="company-suggestions">
          {companySuggestions.map((company, index) => (
            <option key={index} value={company} />
          ))}
        </datalist>
      </div>

      {/* Location Field */}
      <div style={formGroupStyle}>
        <label htmlFor="location" style={labelStyle}>Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Makkah, Saudi Arabia"
          style={inputStyle}
        />
      </div>

      {/* Salary Field */}
      <div style={formGroupStyle}>
        <label htmlFor="salary" style={labelStyle}>Salary</label>
        <input
          id="salary"
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="e.g. 8,000 SAR"
          style={inputStyle}
        />
      </div>

      {/* External Application URL Field */}
      <div style={formGroupStyle}>
        <label htmlFor="applyUrl" style={labelStyle}>Application Link / URL</label>
        <input
          id="applyUrl"
          type="url"
          value={applyUrl}
          onChange={(e) => setApplyUrl(e.target.value)}
          placeholder="https://company.com/careers/job"
          style={inputStyle}
        />
      </div>

      {/* Applied Date Field */}
      <div style={formGroupStyle}>
        <label htmlFor="appliedDate" style={labelStyle}>Applied Date</label>
        <input
          id="appliedDate"
          type="datetime-local"
          value={appliedDate}
          onChange={(e) => setAppliedDate(e.target.value)}
          style={inputStyle}
        />
      </div>

      {/* Application Deadline Field */}
      <div style={formGroupStyle}>
        <label htmlFor="deadline" style={labelStyle}>Application Deadline</label>
        <input
          id="deadline"
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        className="submit-btn"
        style={{
          width: '100%',
          padding: '12px',
          marginTop: '15px',
          backgroundColor: '#3182ce',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Add Job
      </button>
    </form>
  );
};

// Reusable CSS styles for aligned fields and white background
const formGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
};

const labelStyle: React.CSSProperties = {
  marginBottom: '6px',
  fontWeight: '500',
  fontSize: '14px',
  color: '#ffffff',
  textAlign: 'left'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '6px',
  border: '1px solid #cbd5e0',
  backgroundColor: '#ffffff', // White background
  color: '#2d3748',            // Dark text for readability
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box'
};
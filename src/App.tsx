import { useState } from 'react';
import type { Job } from './types/types';
import { initialJobs } from './data/initialJobs';
import { JobCard } from './components/JobCard';
import { AddJobForm } from './components/AddJobForm';
import { JobFilter } from './components/JobFilter';
import { JobStats } from './components/JobStats';
import { ResetData } from './components/ResetData';
import { SearchBar } from './components/SearchBar';
import { ExportData } from './components/ExportData'; // Imported File 14
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [jobs, setJobs] = useLocalStorage<Job[]>('makkah_jobs', initialJobs);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleAddJob = (newJob: Job) => {
    setJobs([newJob, ...jobs]);
  };

  const handleDeleteJob = (id: string) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  const handleStatusChange = (id: string, newStatus: Job['status']) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id === id) {
        return { ...job, status: newStatus };
      }
      return job;
    });
    setJobs(updatedJobs);
  };

  const handleResetJobs = () => {
    setJobs(initialJobs);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesStatus = filterStatus === 'All' || job.status === filterStatus;
    const matchesSearch =
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="app-container">
      <h1 className="app-title">Makkah Dream Job Tracker</h1>
      <p className="job-count">Total Applied Jobs: {jobs.length}</p>

      {/* Summary Dashboard */}
      <JobStats jobs={jobs} />

      {/* Add Job Form */}
      <AddJobForm onAddJob={handleAddJob} />

      <hr style={{ borderColor: '#4a5568', margin: '20px 0' }} />

      {/* Search Input Bar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Status Filter Buttons */}
      <JobFilter currentFilter={filterStatus} onFilterChange={setFilterStatus} />

      {/* Render Filtered & Searched Job Cards */}
      <div style={{ marginTop: '20px' }}>
        {filteredJobs.length === 0 ? (
          <p style={{ color: '#a0aec0', textAlign: 'center' }}>No jobs found matching criteria.</p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onDeleteJob={handleDeleteJob}
              onStatusChange={handleStatusChange}
            />
          ))
        )}
      </div>
    
      {/* Action Buttons */}
      <div className="action-buttons-container">
        <ExportData jobs={jobs} />
        <ResetData onReset={handleResetJobs} />
      </div>
    </div>
  );
}

export default App;
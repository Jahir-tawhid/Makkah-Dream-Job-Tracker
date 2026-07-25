// Define the structure for a Job object

export interface Job {
  id: string;
  position: string;
  companyName: string;
  location: string;
  status: 'Applied' | 'Interviewing' | 'Offered' | 'Rejected';
  salary?: string;
  appliedDate: string;
  deadline?: string; 
  applyUrl?: string; 
}
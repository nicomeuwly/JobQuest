import { Component } from '@angular/core';
import { JobTile } from "../job-tile/job-tile";
import { Jobdetails } from '../jobdetails';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobTile],
  templateUrl: './jobs.html',
})
export class Jobs {
  jobs: Jobdetails[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Company',
      location: 'Remote',
      rate: '80-100%',
      contractType: 'CDI',
      link: 'https://example.com/job/1',
      status: 'saved',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Another Tech Company',
      location: 'Paris, France',
      rate: '80-100%',
      contractType: 'CDD',
      link: 'https://example.com/job/2',
      status: 'sended',
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Startup',
      location: 'Berlin, Germany',
      rate: '80-100%',
      contractType: 'CDI',
      link: 'https://example.com/job/3',
      status: 'negative',
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Data Company',
      location: 'New York, USA',
      rate: '80-100%',  
      contractType: 'CDI',
      link: 'https://example.com/job/4',
      status: 'positive',
    },
  ];

  savedJobsCount(): number {
    return this.jobs.length;
  }
  negativeJobsCount(): number {
    return this.jobs.filter(job => job.status === 'negative').length;
  }
  positiveJobsCount(): number {
    return this.jobs.filter(job => job.status === 'positive').length;
  }
  sendedJobsCount(): number {
    return this.jobs.filter(job => job.status === 'sended').length + this.negativeJobsCount() + this.positiveJobsCount();
  }
  inProgressJobsCount(): number {
    return this.sendedJobsCount() - this.negativeJobsCount() - this.positiveJobsCount();
  }
}

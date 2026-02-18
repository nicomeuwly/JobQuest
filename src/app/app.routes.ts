import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Jobs } from './jobs/jobs';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => Home
    },
    {
        path: 'jobs',
        loadComponent: () => Jobs
    }
];

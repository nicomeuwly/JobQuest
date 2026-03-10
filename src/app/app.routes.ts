import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Jobs } from './jobs/jobs';
import { User } from './user/user';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => Home
    },
    {
        path: 'jobs',
        loadComponent: () => Jobs
    },
    {
        path: 'account',
        loadComponent: () => User
    }
];

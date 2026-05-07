import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { DashboardLayout } from './components/layout/dashboard-layout/dashboard-layout';
import { DashOverview } from './components/layout/dash-overview/dash-overview';

export const routes: Routes = [
  { path: '', component: Home, title: 'Default Page' },
  { path: 'Home', component: Home, title: 'Home Page' },

  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: DashOverview,
        title: 'Dashboard Overview',
      },
    ],
  },

  { path: '**', component: NotFound, title: 'Not Found Page' },
];

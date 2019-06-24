import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './routes/root/root.component';

const routes: Routes = [
  {
    path: 'job-briefing/:guid',
    component: RootComponent,
    data: { title: 'Job Briefing' },
  },
  {
    path: 'job-briefing',
    component: RootComponent,
    data: { title: 'Job Briefing' },
  },
  {
    path: '',
    component: RootComponent,
    data: { title: 'Root' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

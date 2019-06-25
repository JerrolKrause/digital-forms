import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobBriefingComponent } from './routes/job-briefing/job-briefing.component';

const routes: Routes = [
  {
    path: 'job-briefing/:guid',
    component: JobBriefingComponent,
    data: { title: 'Job Briefing' },
  },
  {
    path: 'job-briefing',
    component: JobBriefingComponent,
    data: { title: 'Job Briefing' },
  },
  {
    path: '',
    component: JobBriefingComponent,
    data: { title: 'Root' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

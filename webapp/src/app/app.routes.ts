import { Routes } from '@angular/router';
import { NoContentComponent, LoginComponent } from '$routes'; // HomeComponent,

import { LayoutMainComponent } from '$components';
import { AuthGuard } from '$shared';

export const ROUTES: Routes = [
  // Routes without masterpage or that do not need to be authenticated need to go first
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Please Log In' },
  },

  {
    path: 'qa',
    loadChildren: () => import('./routes/qa/qa.module').then(m => m.QaModule),
    data: { title: 'E2E Testing' },
    canActivate: [AuthGuard],
  },

  // Example route param
  // {
  //  path: 'loan/:LNKey',
  //  component: HomeComponent,
  //  data: { title: 'Dashboard'},
  //  canActivate: [AuthGuard],
  // },

  // Routes that use masterpage go here
  // canActivate with AuthGuard determines if this is an authenticated only route
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      // Homepage non-lazy load implementation
      // {
      //  path: '',
      //  component: HomeComponent,
      //  data: { title: 'Dashboard' },
      //  canActivate: [AuthGuard]
      // },

      // Example for lazy loaded module with route params
      // { path: 'users/:empowerGuid', loadChildren: './routes/users/users.module#UsersModule', canActivate: [AuthGuard] },
      // { path: 'users', loadChildren: './routes/users/users.module#UsersModule', canActivate: [AuthGuard] },

      // Empty path string for recent ('') needs to be LAST otherwise it catches all other routes
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./routes/recent/recent.module').then(m => m.RecentModule),
        canActivate: [AuthGuard],
      },

      // Empty path string for homepage ('') needs to be LAST otherwise it catches all other routes
      {
        path: 'forms',
        // pathMatch: '',
        loadChildren: () => import('./routes/forms/forms.module').then(m => m.FormsModule),
        canActivate: [AuthGuard],
      },

      // Empty path string for homepage ('') needs to be LAST otherwise it catches all other routes
      {
        path: 'reports',
        pathMatch: 'full',
        loadChildren: () => import('./routes/reports/reports.module').then(m => m.ReportsModule),
        canActivate: [AuthGuard],
      },

      {
        path: '**',
        component: NoContentComponent,
        data: { title: 'Page Not Found' },
        canActivate: [AuthGuard],
      },
    ],
  },
];

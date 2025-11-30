import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

import { TrainingMetricsPage } from './pages/training-metrics-page/training-metrics-page';
import { UserInfoPage } from './pages/user-info-page/user-info-page';

export const sportRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'user-sport', component: UserInfoPage },
      { path: 'training-metrics', component: TrainingMetricsPage },
      { path: '**', redirectTo: 'user-sport' }
    ]
  },
];

export default sportRoutes;

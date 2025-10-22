import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import userSportPage from './pages/user-sport-page/user-sport-page';
import { TrainingMetricsPage } from './pages/training-metrics-page/training-metrics-page';

export const sportRoutes: Routes = [
  {
    path: '', component: Layout,
    children: [
      { path: 'user-sport', component: userSportPage },
      { path: 'training-metrics', component: TrainingMetricsPage },
      // { path: 'by-region', component: ByRegionPage },
      // { path: 'by/:code', component: CountryPage },
      { path: '**', redirectTo: 'user-sport' }
    ]
  },

];

export default sportRoutes;

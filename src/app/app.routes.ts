import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { HomePage } from './shared/pages/home-page/home-page';

export const routes: Routes = [

  // 1. RUTA PÚBLICA (Home con login)
  {
    path: '',
    component: HomePage
  },

  // 2. RUTAS PRIVADAS (con Layout)
  {
    path: 'info',
    component: Layout,            // aquí va el navbar y contenedor
    children: [
      {
        path: 'sportPerformance',
        loadChildren: () => import('./core/sport.routes')
      }
    ]
  },

  // 3. fallback
  { path: '**', redirectTo: '' }
];

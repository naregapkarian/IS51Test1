import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full',
    data: { title: 'orders' }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { title: 'Orders' }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
    data: { title: 'Route Not Found' }
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes,
  {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    // enableTracing: true
  });

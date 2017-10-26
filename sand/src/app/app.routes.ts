import { Routes, RouterModule }  from '@angular/router';

import {HomeRoutes} from './home/home.routes';

export const routes: Routes = [
  ...HomeRoutes
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

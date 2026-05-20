import { Routes } from '@angular/router';
import { HomePage } from './market/home-page/home-page';
import { ProductsPage } from './market/products-page/products-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'products', component: ProductsPage }
];

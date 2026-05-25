import { Routes } from '@angular/router';
import { HomePage } from './market/home-page/home-page';
import { ProductsPage } from './market/products-page/products-page';
import { RegisterPage } from './market/register-page/register-page';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'products', component: ProductsPage },
  { path: 'register', component: RegisterPage }
];

import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryMenu } from '../category-menu/category-menu';

@Component({
  selector: 'app-products-page',
  imports: [CategoryMenu],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  categories: Category[] = [
    { id: 1, name: 'Space'},
    { id: 2, name: 'Dogs'},
    { id: 3, name: 'Video Games'},
    { id: 4, name: 'Food'},
    { id: 5, name: 'Plants'},
  ];
}

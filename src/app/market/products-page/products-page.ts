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
    { name: 'Space'},
    { name: 'Dogs'},
    { name: 'Video Games'},
    { name: 'Food'},
    { name: 'Plants'},
  ];

  selected = '';
  onCategorySelected(name: string) {
    this.selected = name;
  }
}

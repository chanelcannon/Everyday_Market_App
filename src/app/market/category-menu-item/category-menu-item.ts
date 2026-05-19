import { Component, input, output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-menu-item',
  imports: [],
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css',
})
export class CategoryMenuItem {
  category = input.required<Category>();
  selected = output<number>();
  onSelect() {
    this.selected.emit(this.category().id);
  }
}

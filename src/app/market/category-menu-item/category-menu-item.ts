import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-menu-item',
  imports: [],
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css',
})
export class CategoryMenuItem {
  
  @Input() categoryName: string = '';
  @Output() click = new EventEmitter<string>();

  onItemClick() {
    this.click.emit(this.categoryName);
  }
}

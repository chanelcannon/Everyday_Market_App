import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryMenuItem } from '../category-menu-item/category-menu-item';
import { CommonModule } from '@angular/common';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-menu',
  imports: [CategoryMenuItem, CommonModule],
  templateUrl: './category-menu.html',
  styleUrl: './category-menu.css',
})
export class CategoryMenu {
  
  @Input() categories: Category[] = [];
  @Output() selected = new EventEmitter<string>();

  selectedCategory = '';
  onCategorySelected(name: string) {
    this.selected.emit(name);
    this.selectedCategory = name;
  }
}

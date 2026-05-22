import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  imports: [],
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css',
})
export class CategoryMenuItem {
  
  @Input() categoryName = '';
  @Output() selected = new EventEmitter<string>();

  onItemClick() {
    this.selected.emit(this.categoryName);
  }
}

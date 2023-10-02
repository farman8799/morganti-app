import { Component, EventEmitter, Output } from '@angular/core';

interface Category {
  name: string;
  key: string;
}

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
  @Output() onCategorySelect = new EventEmitter<Category>();
  selectedCategory: number = 0;

  categories: Category[] = [
    {
      key: 'men',
      name: 'Mens'
    },
    {
      key: 'women',
      name: 'Womens'
    },
    {
      key: 'candle',
      name: 'Candles'
    }
  ];

  constructor() { }

  onClick(index: number): void {
    this.selectedCategory = index;
    this.onCategorySelect.emit(this.categories[index]);
  }

}

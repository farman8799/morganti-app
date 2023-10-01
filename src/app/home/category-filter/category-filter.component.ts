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

  onClick(category: Category): void {
    this.onCategorySelect.emit(category);
  }

}

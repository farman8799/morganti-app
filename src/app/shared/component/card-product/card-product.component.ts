import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent  implements OnInit {
  @Input('product') product: any;
  @Output('handleShopButtonClick') handleShopButtonClick = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {}

  onShopButtonClick(product: any) {
    this.handleShopButtonClick.emit(product);
  }

}

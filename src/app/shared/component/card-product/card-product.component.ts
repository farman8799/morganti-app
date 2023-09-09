import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent  implements OnInit {
  @Input('products') products: any[] = [];

  constructor() { }

  ngOnInit() {}

}

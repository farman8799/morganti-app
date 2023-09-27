import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent  implements OnInit {
  @Input('product') product: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  redirect(product: any) {
    this.router.navigate([`/tabs/home/product-detail/${product.id}`])
  }

}

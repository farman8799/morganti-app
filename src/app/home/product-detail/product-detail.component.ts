import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  product: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    
    if (!params.hasOwnProperty('id')) return;

    this.product = {
      id: +params['id']
    };

    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProductById(this.product.id).subscribe({
      next: (data: any) => {
        this.product = data;
        console.log(this.product);
      }
    });
  }

}

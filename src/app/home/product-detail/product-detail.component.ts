import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  @ViewChild('shortDescriptionTemplate') shortDescriptionTemplateRef!: ElementRef;
  @ViewChild('descriptionTemplate') descriptionTemplateRef!: ElementRef;

  product: any;
  products: any[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    
    if (!params.hasOwnProperty('id')) return;

    const products = localStorage.getItem('products');

    if (products) this.products = JSON.parse(products);

    this.product = {
      id: +params['id']
    };

    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProductById(this.product.id).subscribe({
      next: (data: any) => {
        this.product = this.mapProduct(data);
        (this.shortDescriptionTemplateRef.nativeElement as HTMLElement).innerHTML = this.product.short_description;
        (this.descriptionTemplateRef.nativeElement as HTMLElement).innerHTML = this.product.description;
      }
    });
  }

  mapProduct(product: any): any {
    const obj = Object.assign({});

    obj.id = product.id;
    obj.categories = product.categories;
    obj.name = product.name;
    obj.description = product.description;
    obj.short_description = product.short_description;
    obj.images = product.images;
    obj.price = +product.price;
    obj.slug = product.slug;
    obj.stock_status = product.stock_status;
    obj.sku = product.sku;

    return obj;
  }

}

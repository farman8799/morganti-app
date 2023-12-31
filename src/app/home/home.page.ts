import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CardProducts } from './card-products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any[] = [];
  cardProducts: any[] = CardProducts;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    const products = localStorage.getItem('products');

    if (products === null) this.getProducts();
    else this.products = JSON.parse(products);

    console.log(this.products);
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.products = this.products.map(product => this.mapProduct(data));

        localStorage.setItem('products', JSON.stringify(this.products))
      }
    });
  }

  mapProduct(product: any): any {
    const obj = Object.assign({});

    obj.id = product.id;
    obj.categories = product.categories;
    obj.name = product.name;
    obj.description = product.description;
    obj.images = product.images;
    obj.price = +product.price;
    obj.slug = product.slug;
    obj.stock_status = product.stock_status;

    return obj;
  }

  handleCategorySelect(category: {key: string, name: string}) {
    console.log(category);
  }

  handleShopButtonClick(product: any) {
    this.router.navigate([`/tabs/home/product-detail/${product.id}`])
  }
}

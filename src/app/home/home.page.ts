import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CardProducts } from './card-products';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any[] = [];
  cardProducts: any[] = CardProducts;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    const products = localStorage.getItem('products');

    if (products === null) this.getProducts();
    else this.products = JSON.parse(products);
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.products = data;
        this.products = this.products.map(product => {
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
        });

        localStorage.setItem('products', JSON.stringify(this.products))
      }
    });
  }

  handleCategorySelect(category: {key: string, name: string}) {
    console.log(category);
    
  }
}

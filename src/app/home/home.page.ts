import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CardProducts } from './card-products';
import { Router } from '@angular/router';
import { Stripe, PaymentSheetEventsEnum } from '@capacitor-community/stripe';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { first, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any[] = [];
  cardProducts: any[] = CardProducts;

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private router: Router
  ) {
    Stripe.initialize({
      publishableKey: environment.stripe.publishablekey,
    });
  }

  ngOnInit() {
    const products = localStorage.getItem('products');

    if (products === null) this.getProducts();
    else this.products = JSON.parse(products);

    console.log(this.products);
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.products = this.products.map((product) => this.mapProduct(data));

        localStorage.setItem('products', JSON.stringify(this.products));
      },
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

  handleCategorySelect(category: { key: string; name: string }) {
    console.log(category);
  }

  handleShopButtonClick(product: any) {
    this.router.navigate([`/tabs/home/product-detail/${product.id}`]);
  }

  data: any = {
    name: 'Mubashshir',
    email: 'mub.maj@gmail.com',
    amount: 1000,
    current: 'inr'
  };

  async paymentSheet() {
    // be able to get event of PaymentSheet

    try {
      Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
        console.log('PaymentSheetEventsEnum.Completed');
      });

      const data = new HttpParams({
        fromObject: this.data,
      });

      // Connect to your backend endpoint, and get every key.
      const data$ = this.http
        .post<{
          paymentIntent: string;
          ephemeralKey: string;
          customer: string;
        }>(environment.api + 'payment-sheet', data)
        .pipe(first());

      const { paymentIntent, ephemeralKey, customer } = await lastValueFrom(
        data$
      );

      console.log('paymentIntent', paymentIntent);

      // prepare PaymentSheet with CreatePaymentSheetOption.
      await Stripe.createPaymentSheet({
        paymentIntentClientSecret: paymentIntent,
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        merchantDisplayName: 'Morganti',
      });

      console.log('Create Payment Sheet');
      // present PaymentSheet and get result.
      const result = await Stripe.presentPaymentSheet();
      console.log('result', result);
      if (result && result.paymentResult === PaymentSheetEventsEnum.Completed) {
        // Happy path
      }
    } catch (err) {
      console.log(err);
    }
  }
}

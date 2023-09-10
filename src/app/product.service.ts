import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.WooCommerce.API_URL;
  consumerKey = environment.WooCommerce.CONSUMER_KEY;
  consumerSecret = environment.WooCommerce.CONSUMER_SECRET;

  constructor(private http: HttpClient) { }

  getProducts() {
    const endpoint = 'products';
    const params = `?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    const apiUrl = this.url + endpoint + params;

    return this.http.get(apiUrl);
}
}

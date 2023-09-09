import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://morgantiluxury.com/wp-json/wc/v3/';
  private consumerKey = 'ck_ec268086198dd321148000cc8c28a35f85525c00';
  private consumerSecret = 'cs_fcd73d02e6d0d53249ba5017b8d51c4e95dac8b6';

  constructor(private http: HttpClient) { }

  getProducts() {
    const endpoint = 'products';
    const params = `?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    const apiUrl = this.url + endpoint + params;

    return this.http.get(apiUrl);
}
}

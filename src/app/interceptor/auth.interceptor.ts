import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private API_URL = environment.WooCommerce.API_URL;
  private consumerKey = environment.WooCommerce.CONSUMER_KEY;
  private consumerSecret = environment.WooCommerce.CONSUMER_SECRET;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.setUrl(request);

    return next.handle(request);
  }

  private setUrl(request: HttpRequest<unknown>): HttpRequest<unknown> {
    let url = this.API_URL + this.addConsumerKeys(request.url); 
    return request.clone({ url });
  }

  private addConsumerKeys(url: string): string {
    return `${url}?consumer_key=${this.consumerKey}
    &consumer_secret=${this.consumerSecret}`
  }
}

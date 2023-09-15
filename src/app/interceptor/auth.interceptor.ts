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
  private consumer_key = environment.WooCommerce.CONSUMER_KEY;
  private consumer_secret = environment.WooCommerce.CONSUMER_SECRET;
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      url: `${this.API_URL}?consumer_key=${this.consumer_key}
      &consumer_secret=${this.consumer_secret}`,
    });
    console.log(req);

    return next.handle(req);
  }
}

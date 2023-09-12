import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private consumerKey = 'ck_ec268086198dd321148000cc8c28a35f85525c00';
  private consumerSecret = 'cs_fcd73d02e6d0d53249ba5017b8d51c4e95dac8b6';

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Basic ${btoa(
          `${this.consumerKey}:${this.consumerSecret}`
        )}`,
      },
    });
    return next.handle(authReq);
  }
}

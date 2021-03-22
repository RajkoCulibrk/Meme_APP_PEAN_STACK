import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenItnerceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req, next) {
    let token = localStorage.getItem('token');
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}

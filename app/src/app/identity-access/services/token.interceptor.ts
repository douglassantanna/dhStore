import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.tokenService.token) return next.handle(this.addToken(request, this.tokenService.token));
    return next.handle(request);
  }
  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
   return request.clone({ setHeaders: {Authorization: `Bearer ${token}`}});
  }
}

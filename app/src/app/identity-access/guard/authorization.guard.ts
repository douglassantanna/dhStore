import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}
  canActivate() {
    const activate = this.tokenService.token != null;
    if (!activate) this.router.navigateByUrl('');
    return activate;
  }
}

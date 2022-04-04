import { TokenService } from './../services/token.service';
import { UserDecode } from './../interfaces/user-decode';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LimitGuard implements CanActivate {
  user: UserDecode = {} as UserDecode;
  constructor(private tokenService: TokenService) {}
  canActivate() {
    this.tokenService.user.subscribe((x) => {
      this.user = x;
    });
    if(this.user.role == "General") return true;
    return false;
  }

}

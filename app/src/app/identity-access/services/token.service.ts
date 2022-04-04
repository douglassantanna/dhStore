import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TOKEN_STORAGE } from 'src/environments/environment';
import { UserDecode } from '../interfaces/user-decode';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _user = new BehaviorSubject<UserDecode>(this.decodePayloadJWT());
  user = this._user.asObservable();

  constructor() {}
  private decodePayloadJWT(): any {
    try {
      return jwt_decode(this.token as string);
    } catch (error) {
      return null;
    }
  }
  removeToken() {
    localStorage.removeItem(TOKEN_STORAGE);
  }
  set token(token: string | null) {
    localStorage.setItem(TOKEN_STORAGE, token as string);
    this._user.next(this.decodePayloadJWT());
  }
  get token(): string | null {
    return localStorage.getItem(TOKEN_STORAGE);
  }
}

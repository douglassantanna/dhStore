import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { UserAuth } from '../interfaces/userauth';

const url = `${environment.urlApi}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router,
    private tokenService: TokenService) { }

    login(userAuth: UserAuth): Observable<any>{
      console.log(this.tokenService.token)
      return this.http.post(url, userAuth);
    }
    logout(){
      this.tokenService.removeToken();
      this.router.navigateByUrl('');
    }
}

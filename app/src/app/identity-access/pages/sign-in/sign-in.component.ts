import { NgForm } from '@angular/forms';
import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';
import { UserAuth } from './../../interfaces/userauth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userAuth: UserAuth = {} as UserAuth;
  load = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.load = true;
    this.authService.login(this.userAuth).subscribe(
      (x) => {
        this.tokenService.token = x.token;
        this.load = false;
        this.router.navigateByUrl("orders");
      },
      (e) => {
        console.error(e);
        this.load = false;
      })
  }
}

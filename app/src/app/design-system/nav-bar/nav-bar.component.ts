import { AuthService } from './../../identity-access/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dh-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  clientsPage(){
    this.router.navigate(['/clients']);
  }
  usersPage(){
    this.router.navigate(['/identity-access/users']);
  }
  ordersPage(){
    this.router.navigate(['/orders']);
  }
  productsPage(){
    this.router.navigate(['/orders']);
  }
  logout(){
    this.authService.logout();
  }
}

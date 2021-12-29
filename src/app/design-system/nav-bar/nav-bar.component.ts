import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dh-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  clientsPage(){
    this.route.navigate(['/clients']);
  }
  usersPage(){
    this.route.navigate(['/identity-access/users']);
  }
  ordersPage(){
    this.route.navigate(['/orders']);
  }
  productsPage(){
    this.route.navigate(['/orders']);
  }
}

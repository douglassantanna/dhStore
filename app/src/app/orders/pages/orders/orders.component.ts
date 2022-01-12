import { MatDialog } from '@angular/material/dialog';
import { OrderService } from './../../services/order.service';
import { ViewOrder } from './../../../design-system/interfaces/iorder';
import { Component, OnInit } from '@angular/core';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  title: string = 'Pedidos';
  orders: ViewOrder[] = [];
  constructor(
    private orderService: OrderService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe((x) => {
      this.orders = x;
    });
  }
  addOrder() {
    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '600px',
    });
  }
  back() {
    this.router.navigate(['/identity-access/users']);
  }
}

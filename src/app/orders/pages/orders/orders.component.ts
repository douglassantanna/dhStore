import { MatDialog } from '@angular/material/dialog';
import { OrderService } from './../../services/order.service';
import { ViewOrder } from './../../../design-system/interfaces/iorder';
import { Component, OnInit } from '@angular/core';
import { EditOrderComponent } from '../edit-order/edit-order.component';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: ViewOrder[] = [];
  constructor(private orderService: OrderService, private dialog: MatDialog) {}

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
      width: '600px'
    });
  }
}

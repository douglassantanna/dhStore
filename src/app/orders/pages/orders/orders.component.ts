import { OrderService } from './../../services/order.service';
import { ViewOrder } from './../../../design-system/interfaces/iorder';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ViewOrder[] = []
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe((x) => {
      this.orders = x;
    })
  }
}

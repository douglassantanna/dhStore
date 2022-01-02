import { ViewOrder } from './../../../design-system/interfaces/iorder';
import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/design-system/enums/status.enum';

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ViewOrder[] = [{
    id: 1,
    client: 'João Gomes',
    price: 100.00,
    status: [0]
  },{
    id: 2,
    client: 'Douglas SantAnna',
    price: 900.00,
    status: [1]
  },{
    id: 3,
    client: 'Davi SantAnna',
    price: 300.00,
    status: [2]
  },{
    id: 1,
    client: 'João Gomes',
    price: 100.00,
    status: [0]
  },{
    id: 2,
    client: 'Douglas SantAnna',
    price: 900.00,
    status: [1]
  },{
    id: 3,
    client: 'Davi SantAnna',
    price: 300.00,
    status: [2]
  },{
    id: 1,
    client: 'João Gomes',
    price: 100.00,
    status: [0]
  },{
    id: 2,
    client: 'Douglas SantAnna',
    price: 900.00,
    status: [1]
  },{
    id: 3,
    client: 'Davi SantAnna',
    price: 300.00,
    status: [2]
  },{
    id: 1,
    client: 'João Gomes',
    price: 100.00,
    status: [0]
  },{
    id: 2,
    client: 'Douglas SantAnna',
    price: 900.00,
    status: [1]
  },{
    id: 3,
    client: 'Davi SantAnna',
    price: 300.00,
    status: [2]
  },{
    id: 1,
    client: 'João Gomes',
    price: 100.00,
    status: [0]
  },{
    id: 2,
    client: 'Douglas SantAnna',
    price: 900.00,
    status: [1]
  },{
    id: 3,
    client: 'Davi SantAnna',
    price: 300.00,
    status: [2]
  }]
  constructor() { }

  ngOnInit(): void {
  }

}

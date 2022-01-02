import { ViewOrder } from './../interfaces/iorder';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dh-nav-order',
  templateUrl: './nav-order.component.html',
  styleUrls: ['./nav-order.component.css']
})
export class NavOrderComponent implements OnInit {
  @Input() viewOrder!: ViewOrder;
  constructor() { }

  ngOnInit() {
  }

}

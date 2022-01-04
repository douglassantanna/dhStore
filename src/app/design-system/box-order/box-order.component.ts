import { ViewOrder } from '../interfaces/iorder';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dh-box-order',
  templateUrl: './box-order.component.html',
  styleUrls: ['./box-order.component.css']
})
export class BoxOrderComponent implements OnInit {
  @Input() viewOrder!: ViewOrder;
  constructor() { }

  ngOnInit() {
  }

}

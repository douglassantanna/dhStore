import { Component, Input, OnInit } from '@angular/core';
import { Status } from '../enums/status.enum';

@Component({
  selector: 'dh-box-status',
  templateUrl: './box-status.component.html',
  styleUrls: ['./box-status.component.css']
})
export class BoxStatusComponent implements OnInit {
@Input() status!: Status;
  constructor() { }

  ngOnInit() {
  }

}

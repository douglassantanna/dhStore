import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() showArrowBack: boolean = true;
  @Input() title!: string;
  @Output() newObjectEvent: EventEmitter<void> = new EventEmitter();
  @Output() goBack: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addNewObject() {
    this.newObjectEvent.emit();
  }
  back(){
    this.goBack.emit();
  }
}

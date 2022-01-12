import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
  title: string = 'Novo pedido';
  orderForm = new FormGroup({
    name: new FormControl(''),
    products: new FormGroup({
      productName: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl(''),
    })
  });
  constructor() {}

  ngOnInit(): void {}
  updateForm() {
    // this.orderForm.setValue();
  }
  onSubmit(){
    console.log(this.orderForm.value);
  }
}

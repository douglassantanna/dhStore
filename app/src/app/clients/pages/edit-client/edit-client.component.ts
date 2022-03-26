import { NgForm } from '@angular/forms';
import { NewClient, UpdateClient } from './../../interfaces/iclient';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewClient } from '../../interfaces/iclient';

@Component({
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  title: string = 'Novo cliente';
  newClient = {} as NewClient;
  updateClient = {} as UpdateClient;
  constructor(@Inject(MAT_DIALOG_DATA) public viewClient: ViewClient) {}

  ngOnInit() {
    if (this.viewClient) {
      this.title = 'Editar cliente';
      this.newClient.name = this.viewClient.name;
      this.newClient.cpf = this.viewClient.cpf;
      this.newClient.rg = this.viewClient.rg;
      this.newClient.birthDate = this.viewClient.birthDate;
      this.newClient.email = this.viewClient.email;
      this.newClient.telephoneNumber = this.viewClient.telephoneNumber;
      this.newClient.address = this.viewClient.address;
    }
  }
  data() {
    // if (this.viewClient) {
    //   this.updateClient.id = this.viewClient.id;
    //   this.updateClient.name = this.newClient.name;
    //   this.updateClient.rg = this.newClient.rg;
    //   this.updateClient.cpf = this.newClient.cpf;
    //   this.updateClient.birthDate = this.newClient.birthDate;
    //   this.updateClient.email = this.newClient.email;
    //   this.updateClient.telephoneNumber = this.newClient.telephoneNumber;
    //   this.updateClient.address = this.newClient.address;
    //   return this.updateClient;
    // }
    // this.newClient = this.newClient;
    // return this.newClient;
  }
  submit(form: NgForm){
    console.log(form.value);
  }
}

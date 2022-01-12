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
  name: string = '';
  newClient: NewClient = {} as NewClient;
  updateClient: UpdateClient = {} as UpdateClient;
  constructor(@Inject(MAT_DIALOG_DATA) public viewClient: ViewClient) {}

  ngOnInit() {
    if (this.viewClient) {
      this.title = 'Editar cliente';
      this.name = this.viewClient.name;
    }
  }
  data() {
    if (this.viewClient) {
      this.updateClient.id = this.viewClient.id;
      this.updateClient.name = this.name;
      return this.updateClient;
    }
    this.newClient.name = this.name;
    return this.newClient;
  }
}

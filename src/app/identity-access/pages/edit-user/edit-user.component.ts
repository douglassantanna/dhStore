import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { KindUser } from '../../enums/KindUser.enum';
import { NewTelephoneNumber, ViewTelephoneNumber } from '../../interfaces/itelephoneNumber';
import { NewUser, UpdateUser, ViewUser } from '../../interfaces/iusers';

@Component({
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<ViewTelephoneNumber>;
  numbersTelephone: NewTelephoneNumber[] = [{number: '123'}, {number:'456'}];
  columns = ['number', 'option'];
  title: string = '';
  name: string = '';
  email: string = '';
  active = true;
  kindUser: KindUser = 0;
  telephoneNumber: string = '';

  newUser: NewUser = {} as NewUser;
  updateUser: UpdateUser = {} as UpdateUser;
  users: ViewUser[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public viewUser: ViewUser) { }

    ngOnInit() {
      if (this.viewUser) {
      this.title = 'Editar usuário';
      this.name = this.viewUser.name;
      this.email = this.viewUser.email;
      this.active = this.viewUser.active;
      this.kindUser = this.viewUser.kindUser;
    }
  }
  data() {
    if (this.viewUser) {
      this.updateUser.id = this.viewUser.id;
      this.updateUser.name = this.name;
      this.updateUser.email = this.email;
      this.updateUser.active = this.active;
      this.updateUser.kindUser = this.kindUser;
      return this.updateUser;
    }
    this.newUser.name = this.name;
    this.newUser.email = this.email;
    this.newUser.kindUser = this.kindUser;
    return this.newUser;
  }
  submit(myForm: any) {
    console.log('form value is', myForm.value);
  }
  addTelephone(){
    let newTelephoneNumber = {} as NewTelephoneNumber;
    this.numbersTelephone.push(newTelephoneNumber);
    this.table.renderRows();
    console.log(newTelephoneNumber);
  }
  deleteTelephone(){
    this.numbersTelephone.pop();
    this.table.renderRows();
  }

}

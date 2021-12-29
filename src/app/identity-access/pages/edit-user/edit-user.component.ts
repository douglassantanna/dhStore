import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KindUser } from '../../enums/KindUser.enum';
import { NewTelephoneNumber, ViewTelephoneNumber } from '../../interfaces/itelephoneNumber';
import { NewUser, UpdateUser, ViewUser } from '../../interfaces/iusers';
const numbersTelephone: ViewTelephoneNumber[] = [];

@Component({
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  columns = ['number', 'option'];
  title: string = '';
  name: string = '';
  email: string = '';
  active: boolean = true;
  telephoneNumber!: number;
  kindUser: KindUser = 0;
  newUser: NewUser = {} as NewUser;
  updateUser: UpdateUser = {} as UpdateUser;
  newTelephoneNumber: any = {} as NewTelephoneNumber;
  users: ViewUser[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public viewUser: ViewUser) { }

  ngOnInit() {
    if (this.viewUser) {
      this.title = 'Editar usuário';
      this.name = this.viewUser.name;
      this.email = this.viewUser.email;
      this.active = this.viewUser.active;
      // this.numbersTelephone = this.viewUser.telephoneNumber;
      this.kindUser = this.viewUser.kindUser;
    }
  }
  data() {
    if (this.viewUser) {
      this.updateUser.id = this.viewUser.id;
      this.updateUser.name = this.name;
      this.updateUser.email = this.email;
      this.updateUser.active = this.active;
      // this.updateUser.telephoneNumber = this.numbersTelephone;
      this.updateUser.kindUser = this.kindUser;
      return this.updateUser;
    }
    this.newUser.name = this.name;
    this.newUser.email = this.email;
    // this.newUser.telephoneNumber = this.numbersTelephone;
    this.newUser.kindUser = this.kindUser;
    return this.newUser;
  }
  submit(myForm: any) {
    console.log('form value is', myForm.value);
  }
  addTelephone(){}
  deleteTelephone(){}

}

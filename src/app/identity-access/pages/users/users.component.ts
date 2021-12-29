import { Component, OnInit } from '@angular/core';
import { NewTelephoneNumber } from '../../interfaces/itelephoneNumber';
import { NewUser, UpdateUser, ViewUser } from '../../interfaces/iusers';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { switchMap } from "rxjs/operators";
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columns: string[] = ['name', 'email', 'active', 'kindUser', 'option'];
  newUser: NewUser = {} as NewUser;
  newTelephoneNumber: NewTelephoneNumber = {} as NewTelephoneNumber;
  users: ViewUser[] = [];
  constructor(private dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((x) => {
      this.users = x
    })
  }

  addUser(){
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '450px',
    });
    dialogRef.afterClosed()
    .pipe(
      switchMap((x: NewUser) => {
      if (x == undefined) return of();
      return this.userService.createUser(x);
    })
    ).subscribe(() => {
      this.getUsers();
    });
  }

  updateUser(user: ViewUser) {
    const dialofRef = this.dialog.open(EditUserComponent, {
      width: '450px',
      data: user,
    });
    dialofRef.afterClosed().pipe(
      switchMap((x: UpdateUser) => {
        if (x == undefined) return of();
        return this.userService.updateUser(x);
      })
    ).subscribe(() => {
      this.getUsers();
    })
  }

  deleteUser(id: ViewUser){
    this.userService.deleteUser(id)
    .subscribe(() => {
      this.getUsers();
    });
  }
}

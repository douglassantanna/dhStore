import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityAccessRoutingModule } from './identity-access-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UsersComponent } from './pages/users/users.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SignInComponent, UsersComponent, EditUserComponent],
  imports: [
    CommonModule,
    IdentityAccessRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule
  ],
})
export class IdentityAccessModule {}

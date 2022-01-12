import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BoxOrderComponent } from './box-order/box-order.component';
import { BoxStatusComponent } from './box-status/box-status.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NavBarComponent, BoxOrderComponent, BoxStatusComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule
  ],
  exports: [NavBarComponent, BoxOrderComponent, HeaderComponent],
})
export class DesignSystemModule {}

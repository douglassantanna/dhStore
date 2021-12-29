import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
  ],
  exports: [NavBarComponent],
})
export class DesignSystemModule {}

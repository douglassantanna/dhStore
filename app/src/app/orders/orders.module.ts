import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DesignSystemModule } from './../design-system/design-system.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './pages/orders/orders.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [OrdersComponent, EditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DesignSystemModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class OrdersModule {}

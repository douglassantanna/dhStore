import { DesignSystemModule } from './../design-system/design-system.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './pages/orders/orders.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdersComponent, EditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DesignSystemModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
})
export class OrdersModule {}

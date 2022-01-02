import { MatButtonModule } from '@angular/material/button';
import { DesignSystemModule } from './../design-system/design-system.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DesignSystemModule,
    MatButtonModule,
  ],
})
export class OrdersModule {}

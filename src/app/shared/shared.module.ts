import { MaterialUiModule } from './../material-ui/material-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTableComponent } from './order-table/order-table.component';

@NgModule({
  declarations: [OrderTableComponent],
  imports: [CommonModule, MaterialUiModule],
  exports: [OrderTableComponent],
})
export class SharedModule {}

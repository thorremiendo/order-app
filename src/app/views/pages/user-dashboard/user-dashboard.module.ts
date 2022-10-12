import { SharedModule } from './../../../shared/shared.module';
import { MaterialUiModule } from './../../../material-ui/material-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MaterialUiModule,
    SharedModule,
  ],
})
export class UserDashboardModule {}

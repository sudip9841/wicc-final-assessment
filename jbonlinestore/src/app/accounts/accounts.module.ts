import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { AccountsComponent } from './accounts/accounts.component';
import { LandingModule } from '../landing/landing.module';


@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    LandingModule,
  ]
})
export class AccountsModule { }

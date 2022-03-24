import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewuserdetailsRoutingModule } from './viewuserdetails-routing.module';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';


@NgModule({
  declarations: [
    ViewuserdetailsComponent
  ],
  imports: [
    CommonModule,
    ViewuserdetailsRoutingModule
  ]
})
export class ViewuserdetailsModule { }

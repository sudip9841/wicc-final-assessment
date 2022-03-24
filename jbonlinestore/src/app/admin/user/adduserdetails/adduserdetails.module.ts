import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdduserdetailsRoutingModule } from './adduserdetails-routing.module';
import { AdduserdetailsComponent } from './adduserdetails/adduserdetails.component';


@NgModule({
  declarations: [
    AdduserdetailsComponent
  ],
  imports: [
    CommonModule,
    AdduserdetailsRoutingModule
  ]
})
export class AdduserdetailsModule { }
